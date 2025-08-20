import { DataCenter } from "@/types/catalog";
import { MapPin, Zap, Shield, Activity, Server, Globe } from "lucide-react";

interface CompactDataCenterCardProps {
  dataCenter: DataCenter;
  index: number;
}

export const CompactDataCenterCard = ({ dataCenter, index }: CompactDataCenterCardProps) => {
  const getCountryFlag = (location: string) => {
    const flags: { [key: string]: string } = {
      'Brasil': '🇧🇷',
      'México': '🇲🇽', 
      'Colômbia': '🇨🇴',
      'EUA': '🇺🇸',
      'Flórida': '🇺🇸',
      'Orlando': '🇺🇸',
      'Bogotá': '🇨🇴',
      'Cidade do México': '🇲🇽'
    };
    
    // Verificar primeiro pelos países específicos
    if (location.includes('EUA') || location.includes('Flórida') || location.includes('Orlando')) {
      return '🇺🇸';
    }
    if (location.includes('México') || location.includes('Cidade do México')) {
      return '🇲🇽';
    }
    if (location.includes('Colômbia') || location.includes('Bogotá')) {
      return '🇨🇴';
    }
    if (location.includes('Brasil')) {
      return '🇧🇷';
    }
    
    return '🌍';
  };

  const getLocationColor = (name: string) => {
    const colors: { [key: string]: string } = {
      'JPA': 'from-blue-500/15 to-cyan-500/15',
      'SPO': 'from-green-500/15 to-emerald-500/15', 
      'Orlando': 'from-purple-500/15 to-violet-500/15',
      'México': 'from-orange-500/15 to-red-500/15',
      'Colômbia': 'from-pink-500/15 to-rose-500/15'
    };
    
    for (const [key, color] of Object.entries(colors)) {
      if (dataCenter.name.includes(key)) {
        return color;
      }
    }
    return 'from-gray-500/15 to-slate-500/15';
  };

  const getSpecificInfo = (dataCenter: DataCenter) => {
    const info: { [key: string]: { feature1: string; feature2: string; tier: string; latency: string; } } = {
      'JPA': {
        feature1: 'Hub cabos submarinos',
        feature2: 'Tier IV certificado',
        tier: 'Tier IV',
        latency: '<5ms'
      },
      'SPO': {
        feature1: 'Hub financeiro BR',
        feature2: 'Máxima conectividade',
        tier: 'Tier III',
        latency: '<3ms'
      },
      'Orlando': {
        feature1: 'Gateway para EUA',
        feature2: 'Tier IV (2025)',
        tier: 'Tier IV',
        latency: '<2ms'
      },
      'México': {
        feature1: 'Hub NAFTA',
        feature2: 'Posição estratégica',
        tier: 'Tier III',
        latency: '<4ms'
      },
      'Colômbia': {
        feature1: 'Hub países andinos',
        feature2: 'Incentivos fiscais',
        tier: 'Tier III',
        latency: '<6ms'
      }
    };

    for (const [key, data] of Object.entries(info)) {
      if (dataCenter.name.includes(key)) {
        return data;
      }
    }
    return {
      feature1: 'Conectividade premium',
      feature2: 'Infraestrutura moderna',
      tier: dataCenter.tier.includes('IV') ? 'Tier IV' : 'Tier III',
      latency: '<5ms'
    };
  };

  const specificInfo = getSpecificInfo(dataCenter);

  return (
    <div 
      className="group animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`relative bg-gradient-to-br ${getLocationColor(dataCenter.name)} backdrop-blur-sm border border-white/50 rounded-2xl p-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 hover:border-primary/40 overflow-hidden min-h-[280px] flex flex-col`}>
        {/* Status indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-green-700 bg-green-100/60 px-2 py-0.5 rounded-full backdrop-blur-sm">
            Online
          </span>
        </div>

        {/* Location header */}
        <div className="flex items-start gap-3 mb-4 relative z-10">
          <div className="text-3xl group-hover:scale-110 transition-transform duration-300 mt-1">
            {getCountryFlag(dataCenter.location)}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-slate-800 group-hover:text-primary transition-colors leading-tight mb-1">
              {dataCenter.name}
            </h3>
            <div className="flex items-center gap-1 text-xs text-slate-600">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{dataCenter.location}</span>
            </div>
          </div>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-3 gap-2 mb-4 relative z-10 flex-shrink-0">
          <div className="text-center p-2 bg-white/50 rounded-lg border border-white/30 backdrop-blur-sm group-hover:bg-white/70 transition-colors">
            <Zap className="w-3 h-3 text-green-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-semibold text-green-700">99.9%</div>
            <div className="text-xs text-slate-600">Uptime</div>
          </div>
          
          <div className="text-center p-2 bg-white/50 rounded-lg border border-white/30 backdrop-blur-sm group-hover:bg-white/70 transition-colors">
            <Activity className="w-3 h-3 text-blue-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-semibold text-blue-700">{specificInfo.latency}</div>
            <div className="text-xs text-slate-600">Latência</div>
          </div>
          
          <div className="text-center p-2 bg-white/50 rounded-lg border border-white/30 backdrop-blur-sm group-hover:bg-white/70 transition-colors">
            <Shield className="w-3 h-3 text-orange-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-semibold text-orange-700">{specificInfo.tier}</div>
            <div className="text-xs text-slate-600">Certified</div>
          </div>
        </div>

        {/* Specific Features */}
        <div className="space-y-2 relative z-10 flex-grow">
          <div className="flex items-center gap-2 text-xs text-slate-700 group-hover:text-slate-800 transition-colors">
            <Server className="w-3 h-3 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span className="truncate">{specificInfo.feature1}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-700 group-hover:text-slate-800 transition-colors">
            <Globe className="w-3 h-3 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span className="truncate">{specificInfo.feature2}</span>
          </div>
        </div>

        {/* Cost benefit badge */}
        <div className="mt-3 relative z-10">
          <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full text-center font-medium border border-primary/20">
            {dataCenter.costBenefit}
          </div>
        </div>

        {/* Hover effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none z-0"></div>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
      </div>
    </div>
  );
};
