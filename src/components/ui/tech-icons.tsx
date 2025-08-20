import { LucideIcon } from "lucide-react";
import { 
  Server, 
  Database, 
  Shield, 
  Network, 
  Brain, 
  Monitor, 
  HardDrive, 
  Cpu,
  Globe,
  Zap,
  Lock,
  Activity,
  Cloud,
  Settings,
  BarChart3
} from "lucide-react";

interface TechIconProps {
  name: string;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  compute: Cpu,
  storage: HardDrive,
  security: Shield,
  networking: Network,
  "artificial-intelligence": Brain,
  monitoring: Activity,
  "data-protection": Lock,
  "it-transformation-services": Settings,
  "professional-services": BarChart3,
  "managed-services": Monitor,
  "software-licenses": Database,
  datacenter: Server,
  cloud: Cloud,
  performance: Zap,
  global: Globe,
};

export const TechIcon = ({ name, className = "w-6 h-6" }: TechIconProps) => {
  const IconComponent = iconMap[name] || Server;
  return <IconComponent className={className} />;
};

export const TechIconsList = {
  compute: Cpu,
  storage: HardDrive,
  security: Shield,
  networking: Network,
  ai: Brain,
  monitoring: Activity,
  protection: Lock,
  services: Settings,
  professional: BarChart3,
  managed: Monitor,
  licenses: Database,
  datacenter: Server,
  cloud: Cloud,
  performance: Zap,
  global: Globe,
};
