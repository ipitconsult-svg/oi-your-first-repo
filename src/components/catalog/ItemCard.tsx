import { CatalogItem } from "@/types/catalog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Tag, DollarSign, Info, ChevronDown, Cpu, Zap, Settings } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

interface ItemCardProps {
  item: CatalogItem;
}

export const ItemCard = ({ item }: ItemCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const getItemIcon = () => {
    if (item.name.toLowerCase().includes('cpu') || item.name.toLowerCase().includes('core')) {
      return <Cpu className="h-5 w-5 text-primary animate-pulse" />;
    }
    if (item.name.toLowerCase().includes('gpu') || item.name.toLowerCase().includes('radeon') || item.name.toLowerCase().includes('rtx')) {
      return <Zap className="h-5 w-5 text-primary animate-pulse" />;
    }
    return <Settings className="h-5 w-5 text-primary animate-pulse" />;
  };

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in border-l-4 border-l-primary/20 hover:border-l-primary">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            {getItemIcon()}
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg leading-tight mb-1 group-hover:text-primary transition-colors">
              {item.name}
            </CardTitle>
            <CardDescription className="text-sm">
              ID: {item.id}
            </CardDescription>
          </div>
          {item.price && (
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="text-right cursor-pointer hover:scale-105 transition-transform">
                  <div className="text-xl font-bold text-primary">
                    {formatPrice(item.price)}
                  </div>
                  <div className="text-xs text-muted-foreground">mensais</div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Detalhes de Preço</h4>
                  <p className="text-sm text-muted-foreground">
                    Preço base mensal. Valores podem variar conforme configuração e localização do data center.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    • Preços em BRL (R$)
                    • Faturamento mensal
                    • Consulte desconto para contratos anuais
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-1">
          {item.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
              <Tag className="h-2 w-2 mr-1" />
              {tag}
            </Badge>
          ))}
          {item.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{item.tags.length - 3}
            </Badge>
          )}
        </div>
        
        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-between hover:bg-primary/5 transition-colors"
            >
              <span className="text-sm font-medium">
                {isExpanded ? 'Menos detalhes' : 'Ver detalhes'}
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="space-y-4 pt-4 animate-accordion-down">
            <div className="grid grid-cols-1 gap-3">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="p-3 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors cursor-pointer">
                    <h4 className="font-medium text-sm mb-1 flex items-center gap-2">
                      <Info className="h-3 w-3 text-primary" />
                      Funcionamento
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">{item.functionality}</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Como Funciona</h4>
                    <p className="text-sm text-muted-foreground">{item.functionality}</p>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors cursor-pointer">
                    <h4 className="font-medium text-sm mb-1">Aplicabilidade</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">{item.applicability}</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Casos de Uso</h4>
                    <p className="text-sm text-muted-foreground">{item.applicability}</p>
                    <div className="mt-2 p-2 bg-primary/10 rounded">
                      <p className="text-xs text-primary font-medium">Exemplo Prático:</p>
                      <p className="text-xs text-muted-foreground italic">{item.example}</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Características Principais</h4>
              <div className="grid grid-cols-1 gap-1">
                {item.characteristics.map((char, index) => (
                  <div key={index} className="text-xs text-muted-foreground flex items-start gap-2 p-2 rounded hover:bg-muted/50 transition-colors">
                    <span className="w-2 h-2 bg-gradient-primary rounded-full mt-1 flex-shrink-0"></span>
                    <span>{char}</span>
                  </div>
                ))}
              </div>
            </div>

            {item.observations && (
              <div className="p-3 bg-gradient-subtle rounded-lg border border-primary/20">
                <p className="text-xs">
                  <strong className="text-primary">Observações Importantes:</strong> 
                  <span className="text-muted-foreground ml-1">{item.observations}</span>
                </p>
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>
        
        <div className="flex gap-2 pt-2">
          {item.externalLink && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm" className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                  <a href={item.externalLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Mais Info
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Abrir documentação oficial</p>
              </TooltipContent>
            </Tooltip>
          )}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary transition-colors">
                <DollarSign className="h-3 w-3" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Solicitar orçamento personalizado</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  );
};