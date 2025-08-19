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

// Exportar os datacenters
export const dataCenters: DataCenter[] = datacentersData;

// Exportar as categorias como um array
export const categories: Category[] = [
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
