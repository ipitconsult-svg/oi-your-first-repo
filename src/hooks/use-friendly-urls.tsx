import { useState, useEffect, useCallback } from 'react';

export interface NavigationState {
  selectedCategory?: string;
  selectedSubcategory?: string;
  selectedItem?: string;
  searchQuery?: string;
  filters?: Record<string, any>;
}

export const useFriendlyUrls = () => {
  const [navigationState, setNavigationState] = useState<NavigationState>({});

  // Função para gerar slug amigável
  const generateSlug = (text: string): string => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .replace(/-+/g, '-') // Remove hífens duplicados
      .trim();
  };

  // Função para reverter slug para texto
  const parseSlug = (slug: string): string => {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Função para construir URL amigável
  const buildFriendlyUrl = useCallback((state: NavigationState): string => {
    const parts: string[] = [];
    
    if (state.selectedCategory) {
      parts.push('categoria', generateSlug(state.selectedCategory));
    }
    
    if (state.selectedSubcategory) {
      parts.push('subcategoria', generateSlug(state.selectedSubcategory));
    }
    
    if (state.selectedItem) {
      parts.push('item', generateSlug(state.selectedItem));
    }
    
    if (state.searchQuery) {
      parts.push('busca', generateSlug(state.searchQuery));
    }

    const url = '/' + parts.join('/');
    
    // Adicionar filtros como query parameters
    if (state.filters && Object.keys(state.filters).length > 0) {
      const searchParams = new URLSearchParams();
      Object.entries(state.filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          if (Array.isArray(value)) {
            value.forEach(v => searchParams.append(key, v));
          } else {
            searchParams.append(key, String(value));
          }
        }
      });
      
      const queryString = searchParams.toString();
      if (queryString) {
        return url + '?' + queryString;
      }
    }
    
    return url;
  }, []);

  // Função para parsear URL amigável
  const parseFriendlyUrl = useCallback((url: string): NavigationState => {
    const [pathname, search] = url.split('?');
    const parts = pathname.split('/').filter(Boolean);
    const state: NavigationState = {};

    // Parsear pathname
    for (let i = 0; i < parts.length; i += 2) {
      const type = parts[i];
      const value = parts[i + 1];
      
      if (!value) continue;
      
      switch (type) {
        case 'categoria':
          state.selectedCategory = parseSlug(value);
          break;
        case 'subcategoria':
          state.selectedSubcategory = parseSlug(value);
          break;
        case 'item':
          state.selectedItem = parseSlug(value);
          break;
        case 'busca':
          state.searchQuery = parseSlug(value);
          break;
      }
    }

    // Parsear query parameters
    if (search) {
      const searchParams = new URLSearchParams(search);
      const filters: Record<string, any> = {};
      
      searchParams.forEach((value, key) => {
        if (filters[key]) {
          // Se já existe, transformar em array
          if (Array.isArray(filters[key])) {
            filters[key].push(value);
          } else {
            filters[key] = [filters[key], value];
          }
        } else {
          filters[key] = value;
        }
      });
      
      if (Object.keys(filters).length > 0) {
        state.filters = filters;
      }
    }

    return state;
  }, []);

  // Função para navegar programaticamente
  const navigateTo = useCallback((newState: Partial<NavigationState>) => {
    const updatedState = { ...navigationState, ...newState };
    setNavigationState(updatedState);
    
    const newUrl = buildFriendlyUrl(updatedState);
    
    // Atualizar URL sem recarregar página
    if (typeof window !== 'undefined') {
      window.history.pushState(updatedState, '', newUrl);
    }
  }, [navigationState, buildFriendlyUrl]);

  // Função para voltar para categoria principal
  const navigateToCategory = useCallback((categoryName: string) => {
    navigateTo({
      selectedCategory: categoryName,
      selectedSubcategory: undefined,
      selectedItem: undefined
    });
  }, [navigateTo]);

  // Função para navegar para subcategoria
  const navigateToSubcategory = useCallback((categoryName: string, subcategoryName: string) => {
    navigateTo({
      selectedCategory: categoryName,
      selectedSubcategory: subcategoryName,
      selectedItem: undefined
    });
  }, [navigateTo]);

  // Função para navegar para item específico
  const navigateToItem = useCallback((categoryName: string, subcategoryName: string, itemName: string) => {
    navigateTo({
      selectedCategory: categoryName,
      selectedSubcategory: subcategoryName,
      selectedItem: itemName
    });
  }, [navigateTo]);

  // Função para fazer busca com URL amigável
  const searchWithUrl = useCallback((query: string, filters?: Record<string, any>) => {
    navigateTo({
      selectedCategory: undefined,
      selectedSubcategory: undefined,
      selectedItem: undefined,
      searchQuery: query,
      filters
    });
  }, [navigateTo]);

  // Função para limpar navegação
  const clearNavigation = useCallback(() => {
    setNavigationState({});
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/');
    }
  }, []);

  // Função para gerar breadcrumbs
  const getBreadcrumbs = useCallback(() => {
    const breadcrumbs: Array<{ label: string; url: string; isActive: boolean }> = [
      { label: 'Início', url: '/', isActive: false }
    ];

    if (navigationState.selectedCategory) {
      breadcrumbs.push({
        label: navigationState.selectedCategory,
        url: buildFriendlyUrl({ selectedCategory: navigationState.selectedCategory }),
        isActive: !navigationState.selectedSubcategory && !navigationState.selectedItem
      });
    }

    if (navigationState.selectedSubcategory) {
      breadcrumbs.push({
        label: navigationState.selectedSubcategory,
        url: buildFriendlyUrl({
          selectedCategory: navigationState.selectedCategory,
          selectedSubcategory: navigationState.selectedSubcategory
        }),
        isActive: !navigationState.selectedItem
      });
    }

    if (navigationState.selectedItem) {
      breadcrumbs.push({
        label: navigationState.selectedItem,
        url: buildFriendlyUrl(navigationState),
        isActive: true
      });
    }

    if (navigationState.searchQuery) {
      breadcrumbs.push({
        label: `Busca: ${navigationState.searchQuery}`,
        url: buildFriendlyUrl(navigationState),
        isActive: true
      });
    }

    return breadcrumbs;
  }, [navigationState, buildFriendlyUrl]);

  // Escutar mudanças na URL (botão voltar/avançar)
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        setNavigationState(event.state);
      } else {
        // Fallback: parsear URL atual
        const currentUrl = window.location.pathname + window.location.search;
        const parsedState = parseFriendlyUrl(currentUrl);
        setNavigationState(parsedState);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', handlePopState);
      
      // Inicializar estado baseado na URL atual
      const currentUrl = window.location.pathname + window.location.search;
      if (currentUrl !== '/') {
        const initialState = parseFriendlyUrl(currentUrl);
        setNavigationState(initialState);
      }
      
      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, [parseFriendlyUrl]);

  return {
    navigationState,
    navigateTo,
    navigateToCategory,
    navigateToSubcategory,
    navigateToItem,
    searchWithUrl,
    clearNavigation,
    getBreadcrumbs,
    buildFriendlyUrl,
    parseFriendlyUrl,
    generateSlug
  };
};
