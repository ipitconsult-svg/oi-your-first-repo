import { CatalogItem } from "@/types/catalog";
import { Cpu, HardDrive, Zap, Monitor, Wifi, Server, Database, Shield, Microchip } from "lucide-react";
import { ItemCard } from "./ItemCard";

interface HardwareItemCardProps {
  item: CatalogItem;
  showPrice?: boolean;
}

const getHardwareIcon = (itemName: string, tags: string[]) => {
  const name = itemName.toLowerCase();
  const allTags = tags.join(' ').toLowerCase();
  
  if (name.includes('cpu') || name.includes('processor') || name.includes('core') || allTags.includes('cpu')) {
    return <Cpu className="h-4 w-4 text-blue-600" />;
  }
  if (name.includes('gpu') || name.includes('graphics') || name.includes('radeon') || name.includes('rtx') || allTags.includes('gpu')) {
    return <Zap className="h-4 w-4 text-purple-600" />;
  }
  if (name.includes('memory') || name.includes('ram') || name.includes('ddr') || allTags.includes('memory') || allTags.includes('ram')) {
    return <Microchip className="h-4 w-4 text-green-600" />;
  }
  if (name.includes('storage') || name.includes('disk') || name.includes('ssd') || name.includes('hdd') || name.includes('nvme') || 
      allTags.includes('storage') || allTags.includes('ssd') || allTags.includes('hdd') || allTags.includes('nvme')) {
    return <HardDrive className="h-4 w-4 text-orange-600" />;
  }
  if (name.includes('network') || name.includes('ethernet') || name.includes('switch') || allTags.includes('network')) {
    return <Wifi className="h-4 w-4 text-cyan-600" />;
  }
  if (name.includes('server') || name.includes('rack') || allTags.includes('server')) {
    return <Server className="h-4 w-4 text-indigo-600" />;
  }
  if (name.includes('database') || name.includes('db') || allTags.includes('database')) {
    return <Database className="h-4 w-4 text-teal-600" />;
  }
  if (name.includes('security') || name.includes('firewall') || allTags.includes('security')) {
    return <Shield className="h-4 w-4 text-red-600" />;
  }
  if (name.includes('monitor') || name.includes('display') || allTags.includes('display')) {
    return <Monitor className="h-4 w-4 text-slate-600" />;
  }
  
  return <Server className="h-4 w-4 text-primary" />;
};

const getHardwareSpecifications = (item: CatalogItem) => {
  const specs = [];
  
  // Extrair especificações importantes das características
  item.characteristics.forEach(char => {
    const charLower = char.toLowerCase();
    
    // CPU specs
    if (charLower.includes('ghz') || charLower.includes('cores') || charLower.includes('threads')) {
      specs.push({ type: 'CPU', value: char, icon: <Cpu className="h-3 w-3" /> });
    }
    // Memory specs
    else if (charLower.includes('gb ram') || charLower.includes('memoria') || charLower.includes('ddr')) {
      specs.push({ type: 'Memory', value: char, icon: <Microchip className="h-3 w-3" /> });
    }
    // Storage specs
    else if (charLower.includes('ssd') || charLower.includes('storage') || charLower.includes('disk')) {
      specs.push({ type: 'Storage', value: char, icon: <HardDrive className="h-3 w-3" /> });
    }
    // Network specs
    else if (charLower.includes('gbps') || charLower.includes('ethernet') || charLower.includes('bandwidth')) {
      specs.push({ type: 'Network', value: char, icon: <Wifi className="h-3 w-3" /> });
    }
  });
  
  return specs.slice(0, 4); // Limitar a 4 especificações principais
};

export const HardwareItemCard = ({ item, showPrice = false }: HardwareItemCardProps) => {
  const isHardwareItem = item.tags.some(tag => 
    ['hardware', 'cpu', 'gpu', 'memory', 'storage', 'server', 'network', 'ssd', 'nvme', 'hdd', 'disk', 'interno'].includes(tag.toLowerCase())
  );
  
  // Se não for um item de hardware, usar o ItemCard normal
  if (!isHardwareItem) {
    return <ItemCard item={item} showPrice={showPrice} />;
  }
  
  const hardwareSpecs = getHardwareSpecifications(item);
  const hardwareIcon = getHardwareIcon(item.name, item.tags);
  
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden hover-lift">
      {/* Hardware Header */}
      <div className="p-4 pb-3">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center border border-gray-100 group-hover:from-gray-100 group-hover:to-gray-200 transition-all">
            {hardwareIcon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {item.name}
            </h3>
            <p className="text-xs text-gray-500 mt-1">ID: {item.id}</p>
            {item.price && showPrice && (
              <div className="text-sm font-bold text-primary mt-1">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(item.price)}/mês
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hardware Specs Preview */}
      {hardwareSpecs.length > 0 && (
        <div className="px-4 pb-3">
          <div className="grid grid-cols-2 gap-2">
            {hardwareSpecs.map((spec, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-2">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-gray-600">{spec.icon}</span>
                  <span className="text-xs font-medium text-gray-700">{spec.type}</span>
                </div>
                <p className="text-xs text-gray-600 line-clamp-1" title={spec.value}>
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="px-4 pb-3">
        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-3" title={item.description}>
          {item.description}
        </p>

        {/* Hardware Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {item.tags.slice(0, 4).map((tag, index) => {
            const isHardwareTag = ['hardware', 'cpu', 'gpu', 'memory', 'storage', 'server', 'network'].includes(tag.toLowerCase());
            return (
              <span 
                key={index} 
                className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium transition-colors ${
                  isHardwareTag 
                    ? 'bg-primary/10 text-primary border border-primary/20' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                title={tag}
              >
                {tag}
              </span>
            );
          })}
          {item.tags.length > 4 && (
            <span className="inline-flex items-center bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs font-medium" title={`${item.tags.length - 4} tags adicionais: ${item.tags.slice(4).join(', ')}`}>
              +{item.tags.length - 4}
            </span>
          )}
        </div>
      </div>
      
      {/* Footer com ações */}
      <div className="p-4 pt-0">
        {item.externalLink && (
          <button className="w-full bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary hover:to-primary/90 hover:text-white text-primary font-medium py-2 px-3 rounded-xl transition-all duration-200 text-xs flex items-center justify-center gap-2 border border-primary/20 hover:border-primary">
            <Server className="h-3 w-3" />
            Especificações Técnicas
          </button>
        )}
      </div>
    </div>
  );
};
