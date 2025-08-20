import { Globe, Zap, Shield, Server } from "lucide-react";

export const DataCenterNetwork = () => {
  return (
    <div className="relative w-full h-32 mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-slate-100/50 to-blue-100/30 border border-white/40 backdrop-blur-sm">
      {/* Animated network lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background grid */}
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(0,0,0,0.05)"
              strokeWidth="1"
            />
          </pattern>
          
          {/* Animated gradient for lines */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(255, 165, 0)" stopOpacity="0">
              <animate
                attributeName="stop-opacity"
                values="0;1;0"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="rgb(255, 165, 0)" stopOpacity="0.8">
              <animate
                attributeName="stop-opacity"
                values="0.8;0.2;0.8"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0">
              <animate
                attributeName="stop-opacity"
                values="0;1;0"
                dur="3s"
                repeatCount="indefinite"
                begin="1.5s"
              />
            </stop>
          </linearGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Connection lines between data centers */}
        <path
          d="M 100 100 Q 200 50 300 100 T 500 100 T 700 100"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        
        <path
          d="M 150 150 Q 300 120 450 150 T 650 150"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        
        {/* Data center nodes */}
        {[100, 300, 500, 700].map((x, index) => (
          <g key={index}>
            <circle
              cx={x}
              cy="100"
              r="8"
              fill="rgb(255, 165, 0)"
              opacity="0.8"
            >
              <animate
                attributeName="r"
                values="8;12;8"
                dur="2s"
                repeatCount="indefinite"
                begin={`${index * 0.5}s`}
              />
              <animate
                attributeName="opacity"
                values="0.8;0.4;0.8"
                dur="2s"
                repeatCount="indefinite"
                begin={`${index * 0.5}s`}
              />
            </circle>
            <circle
              cx={x}
              cy="100"
              r="4"
              fill="white"
            />
          </g>
        ))}
      </svg>
      
      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-between px-8 z-10">
        <div className="flex items-center gap-3">
          <Globe className="w-6 h-6 text-primary animate-spin-slow" />
          <div>
            <div className="text-sm font-semibold text-slate-800">Rede Global</div>
            <div className="text-xs text-slate-600">Conectividade premium</div>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-slate-700">Ultra baixa latência</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">Segurança avançada</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-slate-700">Redundância total</span>
          </div>
        </div>
      </div>
    </div>
  );
};
