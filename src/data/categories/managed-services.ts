import { Category } from "@/types/catalog";

export const managedServicesCategory: Category = {
  id: "6",
  name: "MANAGED SERVICES",
  description: "Serviços gerenciados para operação, monitoramento e administração de infraestrutura de TI",
  subcategories: [
    {
      id: "6.1",
      name: "Administração de Sistemas",
      description: "Serviços de gerenciamento e administração de sistemas operacionais e plataformas",
      items: [
        {
          id: "6.1.1",
          name: "Gerenciamento Linux Basic",
          description: "Gerenciamento básico de servidores Linux com monitoramento e manutenção",
          price: 199.00,
          functionality: "Administração terceirizada de servidores Linux com suporte 24/7",
          applicability: "Empresas sem equipe interna de Linux ou com necessidade de suporte contínuo",
          example: "Administração de servidores web, aplicação ou banco de dados em Linux",
          characteristics: [
            "Monitoramento 24/7",
            "Atualizações de segurança",
            "Resposta a incidentes",
            "Backups gerenciados",
            "Relatórios mensais"
          ],
          tags: ["linux", "managed", "admin", "server", "support"]
        },
        {
          id: "6.1.2",
          name: "Gerenciamento Linux Advanced",
          description: "Administração avançada de servidores Linux com otimização e automação",
          price: 349.00,
          functionality: "Administração especializada de ambiente Linux com otimização contínua",
          applicability: "Ambientes críticos Linux que exigem alta performance e disponibilidade",
          example: "Clusters de alta disponibilidade, ambientes de e-commerce ou finanças",
          characteristics: [
            "Monitoramento avançado",
            "Otimização de performance",
            "Automação e scripts personalizados",
            "Planejamento de capacidade",
            "Suporte premium 24/7"
          ],
          tags: ["linux", "managed", "advanced", "performance", "automation"]
        },
        {
          id: "6.1.3",
          name: "Gerenciamento Windows Basic",
          description: "Gerenciamento básico de servidores Windows com monitoramento e manutenção",
          price: 229.00,
          functionality: "Administração terceirizada de servidores Windows com suporte 24/7",
          applicability: "Empresas que utilizam plataforma Microsoft sem equipe especializada",
          example: "Administração de servidores Windows para Active Directory, Exchange, SharePoint",
          characteristics: [
            "Monitoramento 24/7",
            "Atualizações de segurança",
            "Resposta a incidentes",
            "Backups gerenciados",
            "Relatórios mensais"
          ],
          tags: ["windows", "managed", "admin", "server", "support"]
        },
        {
          id: "6.1.4",
          name: "Gerenciamento Windows Advanced",
          description: "Administração avançada de servidores Windows com otimização e automação",
          price: 399.00,
          functionality: "Administração especializada de ambiente Windows com otimização contínua",
          applicability: "Ambientes críticos Windows que exigem alta performance e disponibilidade",
          example: "Clusters SQL Server, Exchange Enterprise, ambientes corporativos complexos",
          characteristics: [
            "Monitoramento avançado",
            "Otimização de performance",
            "PowerShell avançado e automação",
            "Planejamento de capacidade",
            "Suporte premium 24/7"
          ],
          tags: ["windows", "managed", "advanced", "performance", "automation"]
        },
        {
          id: "6.1.5",
          name: "Database Management",
          description: "Administração especializada de bancos de dados relacionais e NoSQL",
          price: 499.00,
          functionality: "Gerenciamento completo de bancos de dados por DBAs especializados",
          applicability: "Empresas com bancos de dados críticos sem DBA dedicado",
          example: "Gerenciamento de PostgreSQL, MySQL, SQL Server, MongoDB, etc.",
          characteristics: [
            "Monitoramento de performance",
            "Otimização de queries",
            "Planejamento de capacidade",
            "Backup e restore avançados",
            "Alta disponibilidade e replicação"
          ],
          tags: ["database", "dba", "sql", "nosql", "optimization"]
        }
      ]
    },
    {
      id: "6.2",
      name: "Operações de Rede",
      description: "Gerenciamento de infraestrutura de rede, equipamentos e conectividade",
      items: [
        {
          id: "6.2.1",
          name: "Gerenciamento de Firewall",
          description: "Administração e monitoramento de firewalls com políticas de segurança",
          price: 349.00,
          functionality: "Gerenciamento completo de firewalls com monitoramento contínuo",
          applicability: "Empresas com necessidade de segurança de perímetro gerenciada",
          example: "Administração de firewalls Fortinet, Palo Alto, Cisco, pfSense",
          characteristics: [
            "Configuração de políticas",
            "Monitoramento de tráfego",
            "Análise de logs",
            "Resposta a incidentes",
            "Relatórios de segurança"
          ],
          tags: ["firewall", "security", "network", "managed", "protection"]
        },
        {
          id: "6.2.2",
          name: "Gerenciamento de Switches",
          description: "Administração e configuração de switches e infraestrutura de rede local",
          price: 299.00,
          functionality: "Gerenciamento de switches, VLANs e configurações de rede",
          applicability: "Empresas com infraestrutura de rede que necessita administração especializada",
          example: "Administração de switches Cisco, Juniper, HPE/Aruba, Dell",
          characteristics: [
            "Configuração de VLANs",
            "Monitoramento de portas e tráfego",
            "Otimização de performance",
            "Gestão de firmware",
            "Documentação de rede"
          ],
          tags: ["switch", "network", "vlan", "managed", "infrastructure"]
        },
        {
          id: "6.2.3",
          name: "SD-WAN Management",
          description: "Gerenciamento de soluções SD-WAN para conectividade entre filiais",
          price: 549.00,
          functionality: "Administração completa de ambientes SD-WAN multi-site",
          applicability: "Empresas com múltiplas localidades e necessidade de WAN inteligente",
          example: "Gestão de SD-WAN Cisco Viptela, VMware VeloCloud, Fortinet",
          characteristics: [
            "Políticas de tráfego e QoS",
            "Monitoramento de circuitos",
            "Failover automático",
            "Otimização de rotas",
            "Relatórios de utilização"
          ],
          tags: ["sdwan", "wan", "network", "optimization", "multi-site"]
        },
        {
          id: "6.2.4",
          name: "Load Balancer Management",
          description: "Gerenciamento de balanceadores de carga para alta disponibilidade",
          price: 399.00,
          functionality: "Administração de balanceadores de carga para aplicações críticas",
          applicability: "Empresas com aplicações que exigem alta disponibilidade e escalabilidade",
          example: "Gestão de F5, NGINX, HAProxy, AWS ELB ou balanceadores similares",
          characteristics: [
            "Configuração de pools e nodes",
            "Health checks avançados",
            "Otimização de algoritmos",
            "Monitoramento de performance",
            "Alta disponibilidade (HA)"
          ],
          tags: ["load-balancer", "high-availability", "network", "performance", "scaling"]
        },
        {
          id: "6.2.5",
          name: "Network Monitoring & Alerting",
          description: "Monitoramento completo de rede com alertas e resposta a incidentes",
          price: 299.00,
          functionality: "Monitoramento 24/7 de toda infraestrutura de rede com alertas em tempo real",
          applicability: "Empresas que necessitam visibilidade e gestão proativa de rede",
          example: "Monitoramento de WAN, LAN, ativos de rede, latência e disponibilidade",
          characteristics: [
            "Monitoramento 24/7/365",
            "Alertas em tempo real",
            "Dashboards personalizados",
            "Análise de tendências",
            "Resposta a incidentes"
          ],
          tags: ["monitoring", "network", "alerts", "visibility", "management"]
        }
      ]
    },
    {
      id: "6.3",
      name: "Cloud Management",
      description: "Gerenciamento especializado de ambientes em nuvem pública e híbrida",
      items: [
        {
          id: "6.3.1",
          name: "AWS Managed Services",
          description: "Gerenciamento especializado de ambiente AWS com otimização contínua",
          price: 799.00,
          functionality: "Administração completa de ambientes AWS por especialistas certificados",
          applicability: "Empresas com workloads na AWS sem expertise interna completa",
          example: "Gerenciamento de EC2, RDS, Lambda, S3 e outros serviços AWS",
          characteristics: [
            "Arquitetura Well-Architected",
            "Otimização de custos",
            "Segurança e compliance",
            "Automação via CloudFormation/CDK",
            "Monitoramento avançado"
          ],
          tags: ["aws", "cloud", "managed", "iaas", "optimization"]
        },
        {
          id: "6.3.2",
          name: "Azure Managed Services",
          description: "Gerenciamento especializado de ambiente Azure com otimização contínua",
          price: 749.00,
          functionality: "Administração completa de ambientes Azure por especialistas certificados",
          applicability: "Empresas com workloads no Azure sem expertise interna completa",
          example: "Gerenciamento de VMs, Azure SQL, App Services e outros serviços Azure",
          characteristics: [
            "Arquitetura Azure Well-Architected",
            "Otimização de custos",
            "Segurança e compliance",
            "Automação via ARM/Bicep",
            "Monitoramento avançado"
          ],
          tags: ["azure", "cloud", "managed", "iaas", "optimization"]
        },
        {
          id: "6.3.3",
          name: "Google Cloud Managed Services",
          description: "Gerenciamento especializado de ambiente GCP com otimização contínua",
          price: 729.00,
          functionality: "Administração completa de ambientes GCP por especialistas certificados",
          applicability: "Empresas com workloads no Google Cloud sem expertise interna completa",
          example: "Gerenciamento de GCE, GKE, BigQuery e outros serviços GCP",
          characteristics: [
            "Arquitetura otimizada",
            "Controle de custos",
            "Segurança e compliance",
            "Automação via Terraform/Deployment Manager",
            "Monitoramento avançado"
          ],
          tags: ["gcp", "cloud", "managed", "iaas", "optimization"]
        },
        {
          id: "6.3.4",
          name: "Multi-Cloud Management",
          description: "Gerenciamento unificado de múltiplos provedores cloud",
          price: 1299.00,
          functionality: "Administração centralizada de ambientes multi-cloud com governança unificada",
          applicability: "Empresas com estratégia multi-cloud e necessidade de gestão unificada",
          example: "Gerenciamento integrado de AWS, Azure e GCP com políticas consistentes",
          characteristics: [
            "Dashboard unificado",
            "Governança centralizada",
            "Otimização de custos cross-cloud",
            "Segurança padronizada",
            "Automação multi-plataforma"
          ],
          tags: ["multi-cloud", "hybrid", "management", "governance", "optimization"]
        },
        {
          id: "6.3.5",
          name: "FinOps as a Service",
          description: "Otimização contínua de custos em ambiente cloud com práticas de FinOps",
          price: 599.00,
          functionality: "Serviço especializado em otimização de custos de nuvem",
          applicability: "Empresas com gastos significativos em cloud buscando eficiência financeira",
          example: "Otimização de custos AWS/Azure/GCP, rightsizing, Reserved Instances, Spot",
          characteristics: [
            "Análise de utilização e custos",
            "Recomendações de rightsizing",
            "Estratégia de reservas e compromissos",
            "Automação de shutdown",
            "Relatórios detalhados"
          ],
          tags: ["finops", "cost-optimization", "cloud", "efficiency", "financial"]
        }
      ]
    }
  ]
};
