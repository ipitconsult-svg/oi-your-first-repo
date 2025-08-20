import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Globe, Zap, Shield } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

interface ModernHeroProps {
  onExploreClick: () => void;
  totalCategories: number;
  totalDataCenters: number;
}

export const ModernHero = ({ 
  onExploreClick, 
  totalCategories, 
  totalDataCenters 
}: ModernHeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: Server, label: "Data Centers", value: totalDataCenters },
    { icon: Globe, label: "Soluções", value: totalCategories },
    { icon: Zap, label: "Uptime", value: "99.9%" },
    { icon: Shield, label: "Operação", value: "24/7" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with tech pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/60 to-blue-50/40"></div>
        
        {/* Animated tech elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-200/30 opacity-50 rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Main content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-slate-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-elegant">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>HostDime Brasil - Infraestrutura de Classe Mundial</span>
          </div>
          
          {/* Title - More compact and tech-focused */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-800 mb-4 tracking-tight leading-tight">
              <span className="block font-medium bg-gradient-primary bg-clip-text text-transparent">
                Produtos
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-slate-700">
                & Soluções
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-sm text-slate-600 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Cloud Native</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Edge Computing</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>AI-Powered</span>
              </div>
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Acelere sua transformação digital com infraestrutura híbrida, 
            automação inteligente e performance de próxima geração
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4 rounded-2xl"
              onClick={onExploreClick}
            >
              Explorar Catálogo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {features.map((feature, index) => (
            <div 
              key={feature.label}
              className="group relative bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-6 text-center hover:bg-white/90 hover:shadow-tech transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <feature.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                
                <div className="text-2xl md:text-3xl font-light text-slate-800 mb-2">
                  <AnimatedCounter value={feature.value} />
                </div>
                
                <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  {feature.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
