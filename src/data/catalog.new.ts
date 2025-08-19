import { Category, DataCenter } from "@/types/catalog";
import { dataCenters as datacentersData } from "./categories/datacenters";
import { computeCategory } from "./categories/compute";
import { storageCategory } from "./categories/storage";
import { dataProtectionCategory } from "./categories/data-protection";
import { securityCategory } from "./categories/security";

// Exportar os datacenters
export const dataCenters: DataCenter[] = datacentersData;

// Exportar as categorias como um array
export const categories: Category[] = [
  computeCategory,
  storageCategory,
  dataProtectionCategory,
  securityCategory
];
