import { CatalogItem } from "@/types/catalog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Tag, DollarSign, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface ItemCardProps {
  item: CatalogItem;
}

export const ItemCard = ({ item }: ItemCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-base leading-tight mb-1">
              {item.name}
            </CardTitle>
            <CardDescription className="text-xs">
              ID: {item.id}
            </CardDescription>
          </div>
          {item.price && (
            <div className="text-right">
              <div className="text-lg font-bold text-primary">
                {formatPrice(item.price)}
              </div>
              <div className="text-xs text-muted-foreground">mensais</div>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {item.description}
        </p>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-sm mb-1 flex items-center gap-2">
              <Info className="h-3 w-3 text-primary" />
              Funcionamento
            </h4>
            <p className="text-xs text-muted-foreground">{item.functionality}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-1">Aplicabilidade</h4>
            <p className="text-xs text-muted-foreground">{item.applicability}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-1">Exemplo de Uso</h4>
            <p className="text-xs text-muted-foreground italic">{item.example}</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-sm mb-2">Características</h4>
          <ul className="space-y-1">
            {item.characteristics.map((char, index) => (
              <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>{char}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              <Tag className="h-2 w-2 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>
        
        {item.observations && (
          <div className="p-3 bg-accent/30 rounded-lg">
            <p className="text-xs text-accent-foreground">
              <strong>Observações:</strong> {item.observations}
            </p>
          </div>
        )}
        
        <div className="flex gap-2 pt-2">
          {item.externalLink && (
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <a href={item.externalLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3 mr-2" />
                Mais Info
              </a>
            </Button>
          )}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm">
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