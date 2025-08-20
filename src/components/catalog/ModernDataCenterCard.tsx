import { DataCenter } from "@/types/catalog";
import { MapPin, Zap, Shield, Activity } from "lucide-react";

interface ModernDataCenterCardProps {
  dataCenter: DataCenter;
  index: number;
}

export const ModernDataCenterCard = ({ dataCenter, index }: ModernDataCenterCardProps) => {
  return (
    <div 
      className="group animate-slide-up"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="relative h-full bg-gradient-card border border-white/60 rounded-3xl overflow-hidden hover:shadow-float hover:border-primary/20 transition-all duration-500 hover:-translate-y-2">
        {/* Image placeholder */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-datacenter group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Status indicator */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white text-xs font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
              Online
            </span>
          </div>
          
          {/* Location badge */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-2 rounded-full">
            <MapPin className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">{dataCenter.location}</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-primary transition-colors duration-300">
              {dataCenter.name}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
              Data center {dataCenter.tier} com infraestrutura de alta performance
            </p>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center p-3 bg-green-50 rounded-xl border border-green-200/30">
              <Zap className="w-5 h-5 text-green-600 mx-auto mb-1" />
              <div className="text-sm font-medium text-green-700">99.9%</div>
              <div className="text-xs text-green-600">Uptime</div>
            </div>
            
            <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-200/30">
              <Activity className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <div className="text-sm font-medium text-blue-700">&lt;2ms</div>
              <div className="text-xs text-blue-600">Latência</div>
            </div>
            
            <div className="text-center p-3 bg-orange-50 rounded-xl border border-orange-200/30">
              <Shield className="w-5 h-5 text-orange-600 mx-auto mb-1" />
              <div className="text-sm font-medium text-orange-700">24/7</div>
              <div className="text-xs text-orange-600">Segurança</div>
            </div>
          </div>
          
          {/* Features */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span>Conectividade redundante</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span>Refrigeração eficiente</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span>Monitoramento 24/7</span>
            </div>
          </div>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
      </div>
    </div>
  );
};
