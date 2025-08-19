import { Category } from "@/types/catalog";

export const computeCategory: Category = {
  id: "1",
  name: "COMPUTE",
  description: "Soluções completas de processamento e computação para todas as necessidades",
  subcategories: [
    {
      id: "1.1",
      name: "Bare Metal (Servidor Dedicado)",
      description: "Servidores físicos dedicados exclusivamente para seu projeto com máximo controle e performance",
      items: [],
      subcategories: [
        {
          id: "1.1.0",
          name: "Data Centers (Informativo)",
          description: "Escolha estratégica de localização para otimizar performance, custo e compliance",
          items: [
            {
              id: "1.1.0.info",
              name: "Guia de Escolha de Data Centers",
              description: "Como escolher o data center ideal para seu projeto",
              functionality: "Cada data center oferece características únicas para diferentes necessidades de negócio, desde certificações até posicionamento geográfico estratégico",
              applicability: "A escolha deve considerar: latência para usuários finais, compliance regulatório, custo-benefício, conectividade e requisitos específicos",
              example: "JPA para máxima certificação e latência mínima LATAM, SPO para hub brasileiro, Orlando para custo-benefício",
              characteristics: [
                "JPA: Tier III certificado, menor latência América Latina",
                "SPO: Hub financeiro, máxima conectividade nacional",
                "Orlando: Melhor custo-benefício, gateway EUA",
                "México: NAFTA, crescimento acelerado",
                "Colômbia: Mercado emergente, incentivos fiscais"
              ],
              tags: ["datacenter", "infraestrutura", "localização", "compliance"],
              observations: "A escolha do data center impacta diretamente performance, compliance e custos operacionais. Consulte nossa equipe para análise personalizada.",
              externalLink: "https://www.hostdime.com.br/data-centers/"
            },
            {
              id: "1.1.0.1",
              name: "JPA - João Pessoa",
              description: "Data center Tier III certificado no Nordeste brasileiro",
              functionality: "Primeiro data center Tier III certificado pelo Uptime Institute no Nordeste, oferecendo máxima confiabilidade",
              applicability: "Aplicações críticas, compliance rigoroso, menor latência para América Latina",
              example: "Sistema financeiro com compliance rigoroso ou aplicação com usuários distribuídos na LATAM",
              characteristics: [
                "Tier III Design Certified",
                "20.000 pés quadrados",
                "Concorrência N+1",
                "98Gbps banda total",
                "Conectividade LATAM otimizada"
              ],
              tags: ["datacenter", "jpa", "tier-3", "northeast", "latam"],
              observations: "Ideal para empresas que precisam de máxima certificação com custo-benefício competitivo"
            },
            {
              id: "1.1.0.2", 
              name: "SPO - São Paulo",
              description: "Hub tecnológico e financeiro do Brasil",
              functionality: "Localização estratégica no principal centro econômico brasileiro com conectividade premium",
              applicability: "Empresas nacionais, conectividade máxima, proximidade com decisores",
              example: "Sede de multinacional ou sistema corporativo nacional",
              characteristics: [
                "Principal hub brasileiro",
                "Todos os carriers nacionais",
                "Proximidade centros decisão",
                "Ecossistema tecnológico",
                "Regulamentação estável"
              ],
              tags: ["datacenter", "spo", "hub", "brazil", "financial"],
              observations: "Estratégico para mercado brasileiro e conectividade nacional máxima"
            },
            {
              id: "1.1.0.3",
              name: "Orlando - Flórida",
              description: "Melhor custo-benefício com acesso ao mercado americano",
              functionality: "Data center Tier IV em construção oferecendo gateway para mercado americano",
              applicability: "Expansão para EUA, custo-benefício máximo, regulamentação estável",
              example: "Startup expandindo para mercado americano ou empresa buscando compliance americano",
              characteristics: [
                "Tier IV (novo complexo)",
                "Melhor custo-benefício",
                "Proximidade LATAM",
                "Mercado americano",
                "Business-friendly"
              ],
              tags: ["datacenter", "orlando", "tier-4", "usa", "cost-effective"],
              observations: "Portal de entrada econômico para mercado americano com infraestrutura de ponta"
            },
            {
              id: "1.1.0.4",
              name: "México - Cidade do México", 
              description: "Gateway para NAFTA e América Central",
              functionality: "Posição estratégica entre EUA e América Latina para mercado NAFTA",
              applicability: "Expansão NAFTA, mercado mexicano, conectividade América Central",
              example: "Empresa americana expandindo para México ou hub para América Central",
              characteristics: [
                "Hub NAFTA",
                "Mercado em crescimento",
                "Fuso horário alinhado",
                "Conectividade América Central",
                "Incentivos governamentais"
              ],
              tags: ["datacenter", "mexico", "nafta", "central-america", "growth"],
              observations: "Ideal para expansão no mercado NAFTA e conectividade com América Central"
            },
            {
              id: "1.1.0.5",
              name: "Colômbia - Bogotá",
              description: "Mercado emergente com incentivos fiscais atrativos",
              functionality: "Hub para países andinos com crescimento econômico sustentado",
              applicability: "Mercado emergente, incentivos fiscais, conectividade regional andina",
              example: "Startup tech aproveitando incentivos ou hub para Venezuela/Equador/Peru",
              characteristics: [
                "Mercado emergente alto potencial",
                "Incentivos fiscais tecnologia",
                "Hub países andinos",
                "Crescimento sustentado",
                "Tech-friendly regulation"
              ],
              tags: ["datacenter", "colombia", "emerging", "incentives", "andean"],
              observations: "Excelente para empresas buscando mercados emergentes com incentivos governamentais"
            }
          ]
        },
        {
          id: "1.1.1",
          name: "Hardware",
          description: "Componentes de hardware configuráveis para servidores dedicados",
          items: [],
          subcategories: [
            {
              id: "1.1.1.1",
              name: "CPU",
              description: "Processadores Intel Xeon e AMD EPYC para máxima performance e eficiência",
              items: [
                // CPUs aqui (omitido por brevidade)
              ]
            },
            {
              id: "1.1.1.2",
              name: "GPU",
              description: "Placas gráficas especializadas para aceleração de workloads específicos",
              items: [
                // GPUs aqui (omitido por brevidade)
              ]
            },
            {
              id: "1.1.1.3",
              name: "Memória",
              description: "Módulos de RAM DDR3 e DDR4 para diferentes necessidades de performance",
              items: [
                // Memória aqui (omitido por brevidade)
              ]
            },
            {
              id: "1.1.1.4",
              name: "Armazenamento",
              description: "Soluções completas de storage interno para diferentes necessidades de performance",
              items: [],
              subcategories: [
                // Subcategorias de armazenamento aqui (omitido por brevidade)
              ]
            }
          ]
        },
        {
          id: "1.1.2",
          name: "Conectividade",
          description: "Soluções de rede e conectividade - Veja categoria NETWORKING para detalhes completos",
          items: [
            {
              id: "1.1.2.link",
              name: "Ver categoria NETWORKING",
              description: "Acesse a categoria NETWORKING para todas as opções de conectividade",
              functionality: "Link para categoria completa de networking e conectividade",
              applicability: "Todas as necessidades de conectividade, rede e comunicação",
              example: "Cross connections, bandwidth, blocos IP, BGP, etc.",
              characteristics: ["Link para categoria NETWORKING"],
              tags: ["networking", "connectivity", "link"],
              observations: "Consulte a categoria NETWORKING para opções completas de conectividade"
            }
          ]
        },
        {
          id: "1.1.3",
          name: "Licenças e Softwares",
          description: "Licenças de software e sistemas operacionais - Veja categoria LICENÇAS DE SOFTWARE",
          items: [
            {
              id: "1.1.3.link",
              name: "Ver categoria LICENÇAS DE SOFTWARE",
              description: "Acesse a categoria LICENÇAS DE SOFTWARE para todas as opções de software",
              functionality: "Link para categoria completa de licenças e software",
              applicability: "Todas as necessidades de software, licenças e sistemas operacionais",
              example: "cPanel, Windows Server, SQL Server, Plesk, etc.",
              characteristics: ["Link para categoria LICENÇAS DE SOFTWARE"],
              tags: ["software", "licenses", "operating-system", "link"],
              observations: "Consulte a categoria LICENÇAS DE SOFTWARE para opções completas de software"
            }
          ]
        },
        {
          id: "1.1.4",
          name: "Segurança",
          description: "Soluções de segurança - Veja categoria SECURITY para detalhes completos",
          items: [
            {
              id: "1.1.4.link",
              name: "Ver categoria SECURITY",
              description: "Acesse a categoria SECURITY para todas as opções de segurança",
              functionality: "Link para categoria completa de segurança e proteção",
              applicability: "Todas as necessidades de segurança, proteção e compliance",
              example: "Firewall, proteção DDoS, SOC, EDR, etc.",
              characteristics: ["Link para categoria SECURITY"],
              tags: ["security", "protection", "firewall", "link"],
              observations: "Consulte a categoria SECURITY para opções completas de segurança"
            }
          ]
        },
        {
          id: "1.1.5",
          name: "Gerenciamento",
          description: "Serviços gerenciados - Veja categoria MANAGED SERVICES para detalhes completos",
          items: [
            {
              id: "1.1.5.link",
              name: "Ver categoria MANAGED SERVICES",
              description: "Acesse a categoria MANAGED SERVICES para todas as opções de gerenciamento",
              functionality: "Link para categoria completa de serviços gerenciados",
              applicability: "Todas as necessidades de gerenciamento, suporte e monitoramento",
              example: "Gerenciamento 24x7, suporte técnico, monitoramento proativo, etc.",
              characteristics: ["Link para categoria MANAGED SERVICES"],
              tags: ["managed", "support", "monitoring", "link"],
              observations: "Consulte a categoria MANAGED SERVICES para opções completas de gerenciamento"
            }
          ]
        },
        {
          id: "1.1.6",
          name: "Data Protection",
          description: "Proteção de dados - Veja categoria DATA PROTECTION para detalhes completos",
          items: [
            {
              id: "1.1.6.link",
              name: "Ver categoria DATA PROTECTION",
              description: "Acesse a categoria DATA PROTECTION para todas as opções de proteção de dados",
              functionality: "Link para categoria completa de proteção e backup de dados",
              applicability: "Todas as necessidades de backup, recuperação e proteção de dados",
              example: "Backup automatizado, DRaaS, replicação, arquivamento, etc.",
              characteristics: ["Link para categoria DATA PROTECTION"],
              tags: ["backup", "disaster-recovery", "protection", "link"],
              observations: "Consulte a categoria DATA PROTECTION para opções completas de proteção de dados"
            }
          ]
        }
      ]
    },
    {
      id: "1.2",
      name: "IaaS (Infrastructure as a Service)",
      description: "Infraestrutura como serviço com flexibilidade e escalabilidade de nuvem",
      items: [],
      subcategories: [
        {
          id: "1.2.1",
          name: "Nuvem Privada",
          description: "Ambiente de nuvem dedicado exclusivamente para sua organização",
          items: [
            {
              id: "1.2.1.1",
              name: "Proxmox com HA",
              description: "Plataforma de virtualização open-source com alta disponibilidade nativa",
              functionality: "Virtualização completa com clustering, migração live e interface web unificada",
              applicability: "Empresas que necessitam flexibilidade total e controle absoluto sobre infraestrutura",
              example: "Datacenter virtualizado para empresa com múltiplas aplicações e departamentos isolados",
              characteristics: [
                "Open source sem vendor lock-in",
                "Alta disponibilidade nativa",
                "Live migration automática",
                "Interface web intuitiva",
                "Clustering integrado",
                "Backup automático",
                "Storage distribuído"
              ],
              tags: ["private-cloud", "proxmox", "ha", "virtualization", "open-source"],
              observations: "Solução ideal para organizações que valorizam controle total e flexibilidade sem dependência de fornecedor",
              externalLink: "https://www.eveo.com.br/nuvem-privada/"
            },
            {
              id: "1.2.1.2",
              name: "VMware vSphere",
              description: "Plataforma enterprise de virtualização líder mundial em recursos corporativos",
              functionality: "Suite completa de virtualização com recursos enterprise e integração total",
              applicability: "Ambientes enterprise que exigem máxima confiabilidade e recursos avançados",
              example: "Datacenter corporativo com workloads mission-critical e compliance rigoroso",
              characteristics: [
                "vMotion para migração sem downtime",
                "DRS para balanceamento automático",
                "Alta disponibilidade avançada",
                "vSAN para storage definido por software",
                "vCenter para gerenciamento centralizado",
                "Integração com ecossistema VMware",
                "Suporte enterprise 24x7"
              ],
              tags: ["private-cloud", "vmware", "enterprise", "vsphere", "mission-critical"]
            },
            {
              id: "1.2.1.3",
              name: "Microsoft Hyper-V",
              description: "Plataforma de virtualização Microsoft integrada ao ecossistema Windows",
              functionality: "Virtualização otimizada para ambientes Microsoft com integração nativa",
              applicability: "Organizações com forte dependência do ecossistema Microsoft",
              example: "Infraestrutura virtualizada para empresa com Active Directory e aplicações .NET",
              characteristics: [
                "Integração nativa com Windows",
                "System Center integration",
                "PowerShell automation",
                "Azure integration ready",
                "Live migration",
                "Replica para DR",
                "Licensing simplificado"
              ],
              tags: ["private-cloud", "microsoft", "hyper-v", "windows", "integration"]
            }
          ]
        },
        {
          id: "1.2.2",
          name: "Nuvem Pública",
          description: "Serviços de nuvem pública escaláveis com billing flexível",
          items: [
            {
              id: "1.2.2.1",
              name: "Cloud Server (OnApp)",
              description: "Servidores virtuais escaláveis automaticamente com billing por uso real",
              functionality: "VMs sob demanda com escalabilidade automática horizontal e vertical",
              applicability: "Aplicações web modernas, desenvolvimento ágil, ambientes com demanda variável",
              example: "API REST que escala automaticamente conforme tráfego ou ambiente de desenvolvimento dinâmico",
              characteristics: [
                "Escalabilidade automática",
                "Billing por hora de uso",
                "API REST completa",
                "Templates pré-configurados",
                "Monitoramento integrado",
                "Load balancing automático",
                "Storage persistente"
              ],
              tags: ["cloud-server", "scalable", "onapp", "public-cloud", "api"],
              externalLink: "https://www.hostdime.com.br/produtos/cloud-server/"
            },
            {
              id: "1.2.2.2",
              name: "Data Center Virtual (DCV)",
              description: "Datacenter completo virtualizado com recursos dedicados e isolamento total",
              functionality: "Ambiente isolado e dedicado na nuvem pública com recursos garantidos",
              applicability: "Empresas que necessitam ambiente isolado na nuvem com performance dedicada",
              example: "Filial virtualizada com conectividade segura para matriz ou ambiente isolado para cliente específico",
              characteristics: [
                "Recursos dedicados garantidos",
                "Ambiente completamente isolado",
                "Conectividade dedicada opcional",
                "Storage dedicado",
                "Rede privada isolada",
                "Firewall dedicado",
                "Backup dedicado"
              ],
              tags: ["dcv", "virtual-datacenter", "isolated", "dedicated", "private-network"]
            }
          ]
        }
      ]
    },
    {
      id: "1.3",
      name: "DBaaS (Database as a Service)",
      description: "Banco de dados como serviço com gerenciamento automatizado e otimização contínua",
      items: [],
      subcategories: [
        {
          id: "1.3.1",
          name: "Essencial",
          description: "Plano básico ideal para desenvolvimento, testes e aplicações pequenas",
          items: [
            {
              id: "1.3.1.1",
              name: "DBaaS Essencial (1 CORE / 8GB RAM / 100GB STG)",
              description: "Database básico gerenciado para desenvolvimento e aplicações pequenas",
              functionality: "Database totalmente gerenciado com backup automático e monitoramento básico",
              applicability: "Desenvolvimento, testes, aplicações pequenas, protótipos, sites pessoais",
              example: "Database para blog WordPress, aplicação de portfólio ou ambiente de desenvolvimento",
              characteristics: [
                "1 vCORE dedicado",
                "8GB RAM garantida",
                "100GB Storage SSD",
                "Backup automático diário",
                "Monitoramento básico",
                "SSL incluído",
                "Restore point-in-time"
              ],
              tags: ["dbaas", "essencial", "development", "small", "basic"],
              observations: "Ideal para começar projetos com possibilidade de upgrade conforme crescimento",
              externalLink: "https://www.hostdime.com.br/dbaas-40-de-economia-e-como-usar/"
            }
          ]
        },
        {
          id: "1.3.2",
          name: "Standard",
          description: "Plano intermediário para aplicações de médio porte com boa performance",
          items: [
            {
              id: "1.3.2.1",
              name: "DBaaS Standard (2 CORE / 8GB RAM / 200GB STG)",
              description: "Database gerenciado para aplicações de médio porte com performance balanceada",
              functionality: "Database otimizado com recursos balanceados para aplicações empresariais médias",
              applicability: "Aplicações web médias, e-commerce pequeno a médio, sistemas internos",
              example: "Database para loja virtual com catálogo médio ou sistema de CRM empresarial",
              characteristics: [
                "2 vCORE dedicados",
                "8GB RAM garantida",
                "200GB Storage SSD",
                "Backup automático 2x/dia",
                "Monitoramento avançado",
                "SSL certificado",
                "Replication read-only"
              ],
              tags: ["dbaas", "standard", "medium", "ecommerce", "business"]
            }
          ]
        },
        {
          id: "1.3.3",
          name: "Performance",
          description: "Plano de alta performance para aplicações críticas e analytics",
          items: [
            {
              id: "1.3.3.1",
              name: "DBaaS Performance 1 (4 CORE / 8GB RAM / 300GB STG)",
              description: "Database de alta performance para aplicações críticas e workloads intensivos",
              functionality: "Database otimizado para alta performance com SSD NVMe e cache inteligente",
              applicability: "Aplicações críticas, analytics em tempo real, relatórios complexos, ERPs",
              example: "Database para sistema ERP empresarial ou plataforma de analytics em tempo real",
              characteristics: [
                "4 vCORE de alta performance",
                "8GB RAM otimizada",
                "300GB Storage NVMe",
                "Backup contínuo",
                "Monitoramento em tempo real",
                "Query optimization",
                "Connection pooling"
              ],
              tags: ["dbaas", "performance", "critical", "analytics", "nvme"]
            },
            {
              id: "1.3.3.2",
              name: "DBaaS Performance 2 (6 CORE / 8GB RAM / 300GB STG)",
              description: "Database de performance superior para cargas de trabalho mais intensivas",
              functionality: "Recursos expandidos para workloads com maior paralelização",
              applicability: "Aplicações com alta concorrência, sistemas multi-tenant, analytics avançado",
              example: "Plataforma SaaS com múltiplos clientes ou sistema de business intelligence",
              characteristics: [
                "6 vCORE de alta performance",
                "8GB RAM otimizada",
                "300GB Storage NVMe",
                "Backup incremental contínuo",
                "Performance insights",
                "Advanced monitoring",
                "Automatic failover"
              ],
              tags: ["dbaas", "performance-plus", "concurrent", "saas", "bi"]
            }
          ]
        },
        {
          id: "1.3.4",
          name: "Enterprise",
          description: "Plano enterprise para máxima performance, recursos e disponibilidade",
          items: [
            {
              id: "1.3.4.1",
              name: "DBaaS Enterprise 1 (8 CORE / 8GB RAM / 300GB STG)",
              description: "Database enterprise com recursos dedicados para aplicações críticas",
              functionality: "Database de nível enterprise com todos os recursos de alta disponibilidade",
              applicability: "Aplicações enterprise críticas, sistemas financeiros, compliance rigoroso",
              example: "Sistema bancário, ERP enterprise ou aplicação com compliance PCI-DSS",
              characteristics: [
                "8 vCORE enterprise",
                "8GB RAM ECC",
                "300GB Storage enterprise",
                "High Availability (HA)",
                "Disaster Recovery automático",
                "Encryption at rest",
                "24x7 Enterprise Support"
              ],
              tags: ["dbaas", "enterprise", "ha", "critical", "compliance"]
            },
            {
              id: "1.3.4.2",
              name: "DBaaS Enterprise + (16 CORE / 16GB RAM / 600GB STG)",
              description: "Database enterprise de máxima capacidade para cargas extremas",
              functionality: "Configuração máxima com todos os recursos enterprise e performance extrema",
              applicability: "Sistemas mission-critical, big data, analytics massivos, aplicações tier-1",
              example: "Core banking system, data warehouse enterprise ou sistema de trading",
              characteristics: [
                "16 vCORE enterprise",
                "16GB RAM ECC registered",
                "600GB Storage enterprise NVMe",
                "Multi-AZ High Availability",
                "Automated disaster recovery",
                "Advanced encryption",
                "Dedicated support engineer"
              ],
              tags: ["dbaas", "enterprise-plus", "maximum", "mission-critical", "tier-1"]
            }
          ]
        },
        {
          id: "1.3.5",
          name: "DBaaS Addons",
          description: "Recursos adicionais para expandir capacidades do DBaaS",
          items: [
            {
              id: "1.3.5.1",
              name: "Armazenamento Extra (50 GB)",
              description: "Storage adicional para expandir capacidade do database",
              functionality: "Expansão de storage sem downtime com performance mantida",
              applicability: "Quando o database precisa de mais espaço para dados",
              example: "Expansão para acomodar crescimento de dados históricos",
              characteristics: ["50GB storage adicional", "SSD performance", "Expansão online"],
              tags: ["dbaas", "addon", "storage", "expansion"]
            },
            {
              id: "1.3.5.2", 
              name: "Memória RAM Adicional (1 GB)",
              description: "RAM extra para melhorar performance de cache",
              functionality: "Mais memória para cache e queries complexas",
              applicability: "Otimização de performance para queries pesadas",
              example: "Melhoria de performance para relatórios complexos",
              characteristics: ["1GB RAM adicional", "Cache expansion", "Performance boost"],
              tags: ["dbaas", "addon", "memory", "performance"]
            },
            {
              id: "1.3.5.3",
              name: "vCORE Adicional (1 vCORE)",
              description: "Processamento extra para workloads mais intensivos",
              functionality: "CPU adicional para paralelização de queries",
              applicability: "Workloads com maior demanda de processamento",
              example: "Otimização para analytics ou indexação pesada",
              characteristics: ["1 vCORE adicional", "Parallel processing", "Workload optimization"],
              tags: ["dbaas", "addon", "cpu", "processing"]
            },
            {
              id: "1.3.5.4",
              name: "Retenção de Backup Estendida (30D)",
              description: "Extensão do período de retenção de backups",
              functionality: "Backup com retenção estendida para compliance",
              applicability: "Requisitos de compliance e auditoria",
              example: "Conformidade com políticas de retenção corporativas",
              characteristics: ["30 dias retenção", "Compliance ready", "Point-in-time recovery"],
              tags: ["dbaas", "addon", "backup", "compliance"]
            }
          ]
        }
      ]
    }
  ]
};
