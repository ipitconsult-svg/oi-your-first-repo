export interface CatalogItem {
  id: string;
  name: string;
  description: string;
  functionality: string;
  applicability: string;
  example: string;
  price?: number;
  characteristics: string[];
  externalLink?: string;
  tags: string[];
  observations?: string;
}

export interface SubCategory {
  id: string;
  name: string;
  description: string;
  items: CatalogItem[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  subcategories: SubCategory[];
}

export interface DataCenter {
  id: string;
  name: string;
  location: string;
  tier: string;
  characteristics: string[];
  costBenefit: string;
  reasons: string[];
  certifications: string[];
}