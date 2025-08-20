import { Category, DataCenter } from "@/types/catalog";
import { dataCenters as datacentersData } from "./categories/datacenters";
import { computeCategory } from "./categories/compute";
import { storageCategory } from "./categories/storage";
import { dataProtectionCategory } from "./categories/data-protection";
import { securityCategory } from "./categories/security";
import { networkingCategory } from "./categories/networking";
import { managedServicesCategory } from "./categories/managed-services";
import { colocationCategory } from "./categories/colocation";
import { softwareLicensesCategory } from "./categories/software-licenses";
import { professionalServicesCategory } from "./categories/professional-services";
import { itTransformationServicesCategory } from "./categories/it-transformation-services";
import { monitoringCategory } from "./categories/monitoring";
import { artificialIntelligenceCategory } from "./categories/artificial-intelligence";
import { applyCrossCategoryReferences } from "./crossCategoryReferences";

// Exportar os datacenters
export const dataCenters: DataCenter[] = datacentersData;

// Array base das categorias
const baseCategories: Category[] = [
  computeCategory,
  storageCategory,
  dataProtectionCategory,
  securityCategory,
  networkingCategory,
  managedServicesCategory,
  colocationCategory,
  softwareLicensesCategory,
  professionalServicesCategory,
  itTransformationServicesCategory,
  monitoringCategory,
  artificialIntelligenceCategory
];

// Aplicar referências cruzadas e exportar as categorias processadas
export const categories: Category[] = applyCrossCategoryReferences(baseCategories);

console.log('Categorias carregadas com referências cruzadas:', categories.length);
