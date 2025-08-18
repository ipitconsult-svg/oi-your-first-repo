import { DataCenter } from "@/types/catalog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Award, CheckCircle2 } from "lucide-react";

interface DataCenterCardProps {
  dataCenter: DataCenter;
}

export const DataCenterCard = ({ dataCenter }: DataCenterCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            {dataCenter.name}
          </CardTitle>
          <Badge variant="secondary" className="bg-primary-subtle text-primary">
            {dataCenter.tier}
          </Badge>
        </div>
        <CardDescription className="flex items-center gap-1 text-sm">
          <span>{dataCenter.location}</span>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
            <Award className="h-4 w-4 text-primary" />
            Características Principais
          </h4>
          <ul className="space-y-1">
            {dataCenter.characteristics.slice(0, 3).map((char, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                <span>{char}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-sm mb-2">Custo-Benefício</h4>
          <p className="text-sm text-muted-foreground">{dataCenter.costBenefit}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-sm mb-2">Por que escolher?</h4>
          <p className="text-sm text-muted-foreground">{dataCenter.reasons[0]}</p>
        </div>
        
        <div className="flex flex-wrap gap-1 pt-2">
          {dataCenter.certifications.map((cert, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {cert}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};