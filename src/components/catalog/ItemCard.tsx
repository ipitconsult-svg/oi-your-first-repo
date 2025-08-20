import { CatalogItem } from "@/types/catalog";
import { ExternalLink, Tag, Info, ChevronDown, Cpu, Zap, Settings } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

interface ItemCardProps {
  item: CatalogItem;
  showPrice?: boolean;
}

export const ItemCard = ({ item, showPrice = false }: ItemCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const getItemIcon = () => {
    if (item.name.toLowerCase().includes('cpu') || item.name.toLowerCase().includes('core')) {
      return <Cpu className="h-4 w-4 text-blue-600" />;
    }
    if (item.name.toLowerCase().includes('gpu') || item.name.toLowerCase().includes('radeon') || item.name.toLowerCase().includes('rtx')) {
      return <Zap className="h-4 w-4 text-purple-600" />;
    }
    return <Settings className="h-4 w-4 text-primary" />;
  };

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Header compacto */}
      <div className="p-4 pb-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 group-hover:bg-gray-100 transition-colors">
            {getItemIcon()}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {item.name}
            </h3>
            <p className="text-xs text-gray-500 mt-1">ID: {item.id}</p>
          </div>
          {item.price && showPrice && (
            <div className="text-right flex-shrink-0">
              <div className="text-sm font-bold text-primary">
                {formatPrice(item.price)}
              </div>
              <div className="text-xs text-gray-400">/mês</div>
            </div>
          )}
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="px-4 pb-3">
        {/* Descrição compacta */}
        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-3">
          {item.description}
        </p>

        {/* Tags como pills compactas */}
        <div className="flex flex-wrap gap-1 mb-3">
          {item.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 px-2 py-0.5 rounded-full text-xs font-medium text-gray-700 transition-colors">
              <Tag className="h-2 w-2" />
              {tag}
            </span>
          ))}
          {item.tags.length > 3 && (
            <span className="inline-flex items-center bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium">
              +{item.tags.length - 3}
            </span>
          )}
        </div>
        
        {/* Botão Ver detalhes */}
        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleTrigger asChild>
            <button className="w-full flex items-center justify-between py-2 px-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors text-sm font-medium text-gray-700">
              <span>{isExpanded ? 'Menos detalhes' : 'Ver detalhes'}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </CollapsibleTrigger>
          
          {/* Conteúdo expandido */}
          <CollapsibleContent className="pt-3 space-y-3">
            {/* Cards de informação em grid */}
            <div className="grid grid-cols-1 gap-2">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-3">
                <h4 className="font-medium text-xs mb-1 flex items-center gap-2 text-blue-900">
                  <Info className="h-3 w-3" />
                  Funcionamento
                </h4>
                <p className="text-xs text-blue-800">{item.functionality}</p>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-xl p-3">
                <h4 className="font-medium text-xs mb-1 text-green-900">Aplicabilidade</h4>
                <p className="text-xs text-green-800">{item.applicability}</p>
              </div>
            </div>
            
            {/* Características em lista compacta */}
            <div className="bg-gray-50 rounded-xl p-3">
              <h4 className="font-medium text-xs text-gray-900 mb-2">Características</h4>
              <div className="space-y-1">
                {item.characteristics.slice(0, 3).map((char, index) => (
                  <div key={index} className="text-xs text-gray-700 flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                    <span className="line-clamp-1">{char}</span>
                  </div>
                ))}
                {item.characteristics.length > 3 && (
                  <div className="text-xs text-primary font-medium">
                    +{item.characteristics.length - 3} mais características
                  </div>
                )}
              </div>
            </div>

            {/* Observações se existirem */}
            {item.observations && (
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
                <p className="text-xs">
                  <strong className="text-amber-900 font-medium">Importante:</strong>{' '}
                  <span className="text-amber-800">{item.observations}</span>
                </p>
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>
      </div>
      
      {/* Footer com ações */}
      <div className="p-4 pt-0">
        {item.externalLink && (
          <button className="w-full bg-primary/10 hover:bg-primary hover:text-white text-primary font-medium py-2 px-3 rounded-xl transition-all duration-200 text-xs flex items-center justify-center gap-2">
            <ExternalLink className="h-3 w-3" />
            Mais Info
          </button>
        )}
      </div>
    </div>
  );
};