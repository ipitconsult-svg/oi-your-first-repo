import { Category, DataCenter } from "@/types/catalog";

export const dataCenters: DataCenter[] = [
  {
    id: "1.1.0.1",
    name: "JPA - João Pessoa",
    location: "João Pessoa, Paraíba, Brasil",
    tier: "Tier III Design Certified",
    characteristics: [
      "Primeiro data center Tier III certificado pelo Uptime Institute no Nordeste",
      "20.000 pés quadrados de área técnica",
      "Concorrência N+1 em todos os sistemas críticos",
      "Localização estratégica para conectividade com cabos submarinos",
      "Baixa latência para toda América Latina",
      "98Gbps de banda total disponível",
      "Conectividade com Mob Telecom, 1Telecom, Tely, Cabo Telecom"
    ],
    costBenefit: "Máxima certificação com custo competitivo",
    reasons: [
      "Data center mais certificado da América Latina",
      "Posicionamento geográfico estratégico para LATAM",
      "Excelente custo-benefício para projetos internacionais",
      "Proximidade com infraestrutura de cabos submarinos",
      "Menor latência para conexões internacionais do Nordeste",
      "Compliance máximo para aplicações reguladas"
    ],
    certifications: ["Tier III Design Certified", "ISO 27001", "SOC 2"]
  },
  {
    id: "1.1.0.2",
    name: "SPO - São Paulo",
    location: "São Paulo, SP, Brasil",
    tier: "Tier III Design Certified",
    characteristics: [
      "Localização no principal hub tecnológico e financeiro do Brasil",
      "Acesso a todos os principais carriers nacionais e internacionais",
      "Infraestrutura de classe mundial",
      "Proximidade com centros de decisão corporativos",
      "Conectividade premium com redundância total",
      "Ecossistema tecnológico mais desenvolvido do país"
    ],
    costBenefit: "Estratégico para o mercado brasileiro",
    reasons: [
      "Centro financeiro e tecnológico do Brasil",
      "Máxima conectividade nacional e internacional",
      "Proximidade com headquarters de grandes empresas",
      "Ecossistema de parceiros tecnológicos estabelecido",
      "Regulamentação favorável e estabilidade jurídica",
      "Menor latência para a maior concentração populacional"
    ],
    certifications: ["Tier III Design Certified", "ISO 27001"]
  },
  {
    id: "1.1.0.3",
    name: "Orlando",
    location: "Orlando, Flórida, EUA",
    tier: "Tier IV (novo complexo Q3 2025)",
    characteristics: [
      "Único data center Tier IV da Flórida Central (em construção)",
      "Melhor custo-benefício do portfólio HostDime",
      "Proximidade geográfica com América Latina",
      "Acesso direto ao mercado norte-americano",
      "Infraestrutura de última geração",
      "Gateway para mercado dos EUA"
    ],
    costBenefit: "Melhor custo-benefício global",
    reasons: [
      "Acesso econômico ao mercado americano",
      "Regulamentação estável e business-friendly",
      "Infraestrutura Tier IV com 99.995% de uptime",
      "Proximidade com LATAM reduz latência",
      "Custos operacionais competitivos",
      "Portal de entrada para expansão nos EUA"
    ],
    certifications: ["Tier IV Design (novo DC)", "SOC 2", "SSAE 18"]
  },
  {
    id: "1.1.0.4",
    name: "México",
    location: "Cidade do México, México",
    tier: "Tier III",
    characteristics: [
      "Posição estratégica entre EUA e América Latina",
      "Hub para toda região NAFTA",
      "Conectividade premium para América Central",
      "Mercado em crescimento acelerado",
      "Regulamentação favorável aos negócios",
      "Fuso horário alinhado com América do Norte"
    ],
    costBenefit: "Gateway para NAFTA e América Central",
    reasons: [
      "Portal de entrada para mercado NAFTA",
      "Custos operacionais competitivos",
      "Regulamentação business-friendly",
      "Conectividade privilegiada para região",
      "Mercado digital em expansão rápida",
      "Incentivos governamentais para tecnologia"
    ],
    certifications: ["Certificações locais de segurança", "Compliance NAFTA"]
  },
  {
    id: "1.1.0.5",
    name: "Colômbia",
    location: "Bogotá, Colômbia",
    tier: "Tier III",
    characteristics: [
      "Hub estratégico para países andinos",
      "Mercado emergente em tecnologia",
      "Conectividade regional premium",
      "Incentivos governamentais significativos",
      "Localização geográfica privilegiada",
      "Crescimento econômico sustentado"
    ],
    costBenefit: "Mercado emergente com incentivos fiscais",
    reasons: [
      "Mercado emergente com alto potencial",
      "Incentivos fiscais atrativos para tecnologia",
      "Conectividade otimizada para região andina",
      "Crescimento econômico e digital sustentado",
      "Regulamentação progressiva e tech-friendly",
      "Gateway para Venezuela, Equador e Peru"
    ],
    certifications: ["Certificações locais", "Compliance regional"]
  }
];

export const categories: Category[] = [
  {
    id: "1",
    name: "COMPUTE",
    description: "Soluções completas de processamento e computação para todas as necessidades",
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
          }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "STaaS (Storage as a Service)",
    description: "Soluções completas de armazenamento escalável e de alta performance",
    subcategories: [
      {
        id: "2.1",
        name: "Armazenamento em Bloco (All Flash)",
        description: "Storage de bloco com performance extrema para aplicações críticas",
        items: [
          {
            id: "2.1.1",
            name: "Storage Edge - Até 32K IOPS / 1000 MB/s",
            description: "Armazenamento de bloco de performance extrema para aplicações ultra-críticas",
            price: 1.30,
            functionality: "All-flash array com latência sub-milissegundo, throughput sustentado e cache inteligente para máxima performance",
            applicability: "Databases críticos, trading systems, aplicações real-time, gaming online, HFT (High Frequency Trading)",
            example: "Database para sistema de trading financeiro com milhares de transações por segundo ou aplicação de gaming MMO",
            characteristics: [
              "Performance: Até 32.000 IOPS",
              "Throughput: 1000 MB/s base",
              "Latência: <1ms sustentada",
              "Throughput adicional: Até 1800 MB/s (R$1,80/MB)",
              "All-flash enterprise SSDs com cache NVMe"
            ],
            tags: ["storage", "block", "ultra-performance", "all-flash", "critical"],
            observations: "Performance máxima para aplicações que exigem latência mínima e throughput sustentado. Ideal para workloads mission-critical.",
            externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
          },
          {
            id: "2.1.2",
            name: "Storage Ultra - 16K IOPS / 600 MB/s",
            description: "Armazenamento de alta performance com throughput expandível",
            price: 1.10,
            functionality: "Storage SSD enterprise com cache otimizado e possibilidade de burst de throughput para picos de demanda",
            applicability: "Databases enterprise, aplicações críticas, analytics em tempo real, sistemas ERP complexos",
            example: "Database Oracle RAC ou sistema SAP HANA com workloads analytics intensivos",
            characteristics: [
              "Performance: Até 16.000 IOPS",
              "Throughput: 600 MB/s base",
              "Latência: <2ms",
              "Throughput adicional: Até 1000 MB/s (R$1,80/MB)",
              "SSD enterprise com tecnologia de cache avançada"
            ],
            tags: ["storage", "block", "high-performance", "enterprise", "expandable"],
            observations: "Equilibrio entre performance e custo com capacidade de expansão de throughput conforme demanda",
            externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
          },
          {
            id: "2.1.3",
            name: "Storage Premium - Até 12K IOPS / 500 MB/s",
            description: "Armazenamento premium para aplicações empresariais exigentes",
            price: 0.80,
            functionality: "Storage SSD premium com performance consistente e reliability enterprise para aplicações de produção",
            applicability: "Aplicações empresariais críticas, databases de produção, sistemas transacionais, e-commerce",
            example: "Database para plataforma de e-commerce ou sistema ERP corporativo com múltiplos usuários",
            characteristics: [
              "Performance: Até 12.000 IOPS",
              "Throughput: 500 MB/s",
              "Latência: <3ms",
              "Consistency: 99.9% performance SLA",
              "Enterprise SSD com proteção de dados"
            ],
            tags: ["storage", "block", "premium", "enterprise", "consistent"],
            observations: "Performance premium consistente para aplicações de produção que exigem reliability",
            externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
          },
          {
            id: "2.1.4",
            name: "Storage Performance - Até 6K IOPS / 250 MB/s",
            description: "Armazenamento balanceado para aplicações empresariais médias",
            price: 0.60,
            functionality: "Storage SSD com performance otimizada para a maioria dos workloads empresariais sem overhead de features desnecessárias",
            applicability: "Aplicações empresariais médias, websites de alto tráfego, sistemas de gestão, desenvolvimento",
            example: "Sistema de gestão corporativo ou website com banco de dados de médio porte",
            characteristics: [
              "Performance: Até 6.000 IOPS",
              "Throughput: 250 MB/s",
              "Latência: <5ms",
              "Custo-benefício otimizado",
              "SSD confiável para workloads padrão"
            ],
            tags: ["storage", "block", "balanced", "cost-effective", "standard"],
            observations: "Sweet spot entre performance e custo para a maioria das aplicações empresariais",
            externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
          },
          {
            id: "2.1.5",
            name: "Storage Standard - 3K IOPS / 125 MB/s",
            description: "Armazenamento padrão para aplicações básicas e desenvolvimento",
            price: 0.35,
            functionality: "Storage SATA SSD com performance adequada para aplicações básicas e ambientes de desenvolvimento",
            applicability: "Aplicações básicas, desenvolvimento, testing, file servers, backup ativo, staging",
            example: "Ambiente de desenvolvimento ou file server departamental com acesso moderado",
            characteristics: [
              "Performance: Até 3.000 IOPS",
              "Throughput: 125 MB/s",
              "Latência: <10ms",
              "Excelente custo-benefício",
              "SATA SSD confiável"
            ],
            tags: ["storage", "block", "standard", "development", "basic"],
            observations: "Solução econômica para workloads que não exigem alta performance de I/O",
            externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
          },
          {
            id: "2.1.6",
            name: "Storage Snapshot",
            description: "Snapshots pontuais para backup e recovery rápido",
            price: 0.30,
            functionality: "Tecnologia de snapshot copy-on-write para backup incremental e recovery point-in-time instantâneo",
            applicability: "Backup incremental, recovery rápido, testing com dados de produção, compliance",
            example: "Backup incremental de database crítico ou criação de ambiente de testing com dados reais",
            characteristics: [
              "Snapshot instantâneo",
              "Copy-on-write technology",
              "Recovery point-in-time",
              "Compatível com todos os tiers",
              "Deduplicação automática"
            ],
            tags: ["storage", "snapshot", "backup", "recovery", "incremental"],
            observations: "Essencial para estratégias de backup modernas e recovery rápido. Compatível com todos os tipos de storage.",
            externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
          }
        ]
      },
      {
        id: "2.2",
        name: "Armazenamento de Objeto",
        description: "Storage massivo compatível S3 para dados não estruturados",
        items: [
          {
            id: "2.2.1",
            name: "Object Storage S3 Compatible",
            description: "Armazenamento de objetos compatível S3 para dados não estruturados",
            functionality: "API S3-compatible para armazenamento massivo com durabilidade 99.999999999% (11 9's) e escalabilidade ilimitada",
            applicability: "Backup, arquivamento, data lakes, content delivery, aplicações web, mobile apps, big data analytics",
            example: "Repositório para backup de aplicações, CDN para assets de website ou data lake para analytics de big data",
            characteristics: [
              "API S3 100% compatible",
              "Durabilidade 11 9's (99.999999999%)",
              "Escalabilidade ilimitada",
              "Lifecycle policies automáticas",
              "Cross-region replication disponível"
            ],
            tags: ["storage", "object", "s3", "backup", "archive", "scalable"],
            observations: "Solução ideal para grandes volumes de dados não estruturados com compatibilidade total com ecosistema AWS S3",
            externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
          },
          {
            id: "2.2.2",
            name: "Object Storage - Hot Tier",
            description: "Armazenamento de objetos para dados acessados frequentemente",
            functionality: "Tier otimizado para dados com acesso frequente, com baixa latência e alto throughput para aplicações ativas",
            applicability: "Content delivery, aplicações web ativas, mobile apps, streaming de mídia, datasets ativos",
            example: "Storage para aplicação de streaming de vídeo ou repositório de assets para aplicação web de alto tráfego",
            characteristics: [
              "Latência mínima para acesso",
              "Throughput otimizado",
              "Ideal para dados 'quentes'",
              "API S3 compatible",
              "CDN integration ready"
            ],
            tags: ["storage", "object", "hot-tier", "low-latency", "active"],
            observations: "Otimizado para aplicações que exigem acesso frequente e rápido aos dados",
            externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
          },
          {
            id: "2.2.3",
            name: "Object Storage - Cold Tier",
            description: "Armazenamento econômico para dados acessados ocasionalmente",
            functionality: "Tier econômico para dados com acesso esporádico, otimizado para custo com tempo de retrieval aceitável",
            applicability: "Arquivamento ativo, backup de longo prazo, compliance, dados históricos, logs antigos",
            example: "Arquivamento de documentos corporativos ou backup histórico para compliance regulatório",
            characteristics: [
              "Custo otimizado",
              "Retrieval time: minutos",
              "Ideal para dados 'frios'",
              "Lifecycle automation",
              "Compliance ready"
            ],
            tags: ["storage", "object", "cold-tier", "archive", "cost-effective"],
            observations: "Solução econômica para armazenamento de longo prazo com acesso esporádico",
            externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
          },
          {
            id: "2.2.4",
            name: "Object Storage - Glacier Tier",
            description: "Armazenamento de arquivo para dados raramente acessados",
            functionality: "Tier de arquivo profundo para dados raramente acessados, com custo mínimo e retrieval de horas",
            applicability: "Arquivo de longo prazo, compliance regulatório, backup histórico, disaster recovery off-site",
            example: "Arquivo de documentos legais para compliance de 7 anos ou backup histórico para disaster recovery",
            characteristics: [
              "Custo mínimo por GB",
              "Retrieval time: horas",
              "Ideal para arquivo profundo",
              "Compliance e auditoria",
              "Durabilidade máxima"
            ],
            tags: ["storage", "object", "glacier", "archive", "compliance"],
            observations: "Custo mínimo para armazenamento de arquivo profundo e compliance de longo prazo",
            externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
          }
        ]
      }
    ]
  },
  {
    id: "3",
    name: "DATA PROTECTION",
    description: "Soluções completas de backup, disaster recovery e proteção de dados",
    subcategories: [
      {
        id: "3.1",
        name: "BaaS (Backup as a Service)",
        description: "Backup automatizado e gerenciado para proteger seus dados críticos",
        items: [
          // Veeam Backup Standard
          {
            id: "3.1.1.1.1",
            name: "Veeam Backup Standard - File Share",
            description: "Backup Veeam para compartilhamentos de arquivos",
            price: 110.00,
            functionality: "Solução de backup enterprise para file shares com tecnologia Veeam, oferecendo proteção robusta e recovery rápido",
            applicability: "File servers, NAS, compartilhamentos corporativos, repositórios de documentos",
            example: "Backup de file server departamental ou NAS corporativo com documentos críticos",
            characteristics: [
              "Backup incremental eficiente",
              "Compressão e deduplicação",
              "Recovery granular de arquivos",
              "Agendamento automático",
              "Monitoramento centralizado"
            ],
            tags: ["backup", "veeam", "standard", "file-share", "enterprise"],
            observations: "Ideal para proteção de dados estruturados em file shares com tecnologia Veeam líder de mercado"
          },
          {
            id: "3.1.1.1.2", 
            name: "Veeam Backup Standard - Server",
            description: "Backup Veeam para servidores físicos e virtuais",
            price: 121.00,
            functionality: "Backup completo de servidores com tecnologia Veeam, incluindo sistema operacional, aplicações e dados",
            applicability: "Servidores físicos, máquinas virtuais, servidores de aplicação, database servers",
            example: "Backup de servidor web, database server ou servidor de aplicação crítica",
            characteristics: [
              "Backup completo do servidor",
              "Recovery bare-metal",
              "Backup de VMs e físicos",
              "Tecnologia Changed Block Tracking",
              "Verificação automática de backup"
            ],
            tags: ["backup", "veeam", "standard", "server", "vm"],
            observations: "Proteção completa para servidores com recovery rápido e confiável"
          },
          {
            id: "3.1.1.1.3",
            name: "Veeam Backup Standard - Workstation", 
            description: "Backup Veeam para estações de trabalho",
            price: 44.00,
            functionality: "Proteção automatizada para workstations com backup contínuo e recovery granular",
            applicability: "Desktops corporativos, laptops, estações de trabalho especializadas",
            example: "Backup de workstation de designer ou estação de trabalho de desenvolvedor",
            characteristics: [
              "Backup contínuo automático",
              "Recovery de arquivos individuais",
              "Proteção contra ransomware",
              "Baixo impacto na performance",
              "Interface user-friendly"
            ],
            tags: ["backup", "veeam", "standard", "workstation", "endpoint"],
            observations: "Solução econômica para proteção de endpoints corporativos"
          },
          // Veeam Enterprise Plus
          {
            id: "3.1.1.2.1",
            name: "Veeam Enterprise Plus - Server",
            description: "Backup Veeam Enterprise Plus para servidores críticos",
            price: 121.00,
            functionality: "Solução enterprise avançada com recursos de replicação, backup em nuvem e recovery instantâneo",
            applicability: "Servidores mission-critical, ambientes enterprise, infraestrutura de alta disponibilidade",
            example: "Backup de servidor de ERP crítico ou cluster de database com requisitos de RTO mínimo",
            characteristics: [
              "Instant VM Recovery",
              "Backup e replicação em nuvem",
              "SureBackup verification",
              "Recursos avançados de compliance",
              "Orquestração de disaster recovery"
            ],
            tags: ["backup", "veeam", "enterprise-plus", "server", "critical"],
            observations: "Máxima proteção para ambientes críticos com recursos enterprise avançados"
          },
          {
            id: "3.1.1.2.2",
            name: "Veeam Enterprise Plus - VM",
            description: "Backup Veeam Enterprise Plus para máquinas virtuais",
            price: 121.00,
            functionality: "Proteção avançada para VMs com recursos enterprise incluindo replicação e orquestração",
            applicability: "Ambientes virtualizados críticos, clusters VMware/Hyper-V, infraestrutura de nuvem híbrida",
            example: "Backup de cluster VMware para aplicações críticas de negócio",
            characteristics: [
              "vSphere/Hyper-V integration",
              "VM replication automática",
              "Veeam ONE monitoring",
              "Scale-out backup repository",
              "Cloud tier integration"
            ],
            tags: ["backup", "veeam", "enterprise-plus", "vm", "virtualization"],
            observations: "Solução premium para ambientes virtualizados enterprise"
          },
          // Acronis Standard Backup
          {
            id: "3.1.2.1.1",
            name: "Acronis Backup - Physical Server",
            description: "Backup completo para servidores físicos com Acronis",
            price: 116.64,
            functionality: "Backup bare-metal completo com recovery universal para qualquer hardware",
            applicability: "Servidores físicos, workstations críticas, legacy systems",
            example: "Backup de servidor físico legacy ou servidor com hardware específico",
            characteristics: [
              "Universal Restore technology",
              "Backup bare-metal completo",
              "Recovery para hardware diferente",
              "Bootable rescue media",
              "Backup de aplicações ativas"
            ],
            tags: ["backup", "acronis", "physical", "server", "bare-metal"],
            observations: "Ideal para servidores físicos com necessidade de recovery universal"
          },
          {
            id: "3.1.2.1.2",
            name: "Acronis Backup - Virtual Machine",
            description: "Backup otimizado para máquinas virtuais",
            price: 57.32,
            functionality: "Backup específico para VMs com tecnologia agentless e recovery granular",
            applicability: "Ambientes VMware, Hyper-V, ambientes de virtualização mista",
            example: "Backup de VM de aplicação web ou máquina virtual de database",
            characteristics: [
              "Agentless backup para VMs",
              "Recovery granular de arquivos",
              "Backup incremental otimizado",
              "Suporte multi-hypervisor",
              "Instant restore capability"
            ],
            tags: ["backup", "acronis", "vm", "agentless", "virtualization"],
            observations: "Solução otimizada para ambientes virtualizados com recovery flexível"
          },
          {
            id: "3.1.2.1.3",
            name: "Acronis Backup - Workstation",
            description: "Proteção para estações de trabalho corporativas",
            price: 19.37,
            functionality: "Backup automático para workstations com proteção contra malware e ransomware",
            applicability: "Desktops corporativos, laptops remotos, estações móveis",
            example: "Backup de laptop corporativo ou workstation remota de funcionário",
            characteristics: [
              "Backup contínuo automático",
              "Proteção anti-ransomware",
              "Recovery de arquivos específicos",
              "Sincronização em nuvem",
              "Gestão centralizada"
            ],
            tags: ["backup", "acronis", "workstation", "endpoint", "ransomware-protection"],
            observations: "Proteção econômica para endpoints com recursos anti-malware integrados"
          },
          // Acronis Advanced Backup
          {
            id: "3.1.2.2.1",
            name: "Acronis Advanced Backup - Server",
            description: "Backup avançado com recursos de segurança integrados",
            price: 51.03,
            functionality: "Backup enterprise com cyber protection, incluindo anti-malware e forensics digitais",
            applicability: "Servidores críticos, ambientes regulados, infraestrutura sensível",
            example: "Backup de servidor financeiro ou sistema com dados sensíveis",
            characteristics: [
              "Cyber protection integrada",
              "Anti-malware em tempo real",
              "Digital forensics capability",
              "Backup validation automática",
              "Compliance reporting"
            ],
            tags: ["backup", "acronis", "advanced", "server", "cyber-protection"],
            observations: "Proteção avançada com recursos de cybersecurity integrados"
          },
          {
            id: "3.1.2.2.2",
            name: "Acronis Advanced Backup - VM",
            description: "Backup avançado para VMs com proteção cibernética",
            price: 21.87,
            functionality: "Backup de VMs com recursos avançados de segurança e análise comportamental",
            applicability: "VMs críticas, ambientes de desenvolvimento seguro, infraestrutura híbrida",
            example: "Backup de VM com aplicação crítica ou ambiente de desenvolvimento sensível",
            characteristics: [
              "Behavioral analysis integration",
              "VM-specific security features",
              "Advanced threat detection",
              "Automated incident response",
              "Multi-cloud protection"
            ],
            tags: ["backup", "acronis", "advanced", "vm", "security"],
            observations: "Backup inteligente com proteção proativa contra ameaças"
          },
          // Data Loss Prevention
          {
            id: "3.1.3.1",
            name: "Advanced Data Loss Prevention",
            description: "Prevenção avançada contra perda de dados corporativos",
            price: 16.78,
            functionality: "Sistema DLP com monitoramento em tempo real, classificação de dados e políticas de proteção automáticas",
            applicability: "Empresas com dados sensíveis, compliance LGPD/GDPR, ambientes regulamentados",
            example: "Proteção de dados PII em empresa de saúde ou dados financeiros em banco",
            characteristics: [
              "Classificação automática de dados",
              "Monitoramento em tempo real",
              "Políticas de proteção customizáveis",
              "Relatórios de compliance",
              "Integração com sistemas existentes"
            ],
            tags: ["dlp", "data-protection", "compliance", "monitoring", "security"],
            observations: "Essencial para compliance LGPD e proteção de dados sensíveis"
          }
        ]
      },
      {
        id: "3.2",
        name: "DRaaS (Disaster Recovery as a Service)",
        description: "Recuperação de desastre automatizada para continuidade de negócio",
        items: [
          {
            id: "3.2.1",
            name: "DRaaS via Zerto",
            description: "Disaster Recovery empresarial com RTO/RPO mínimos",
            price: 250.00,
            functionality: "Replicação contínua de VMs com failover automatizado e orquestração de disaster recovery",
            applicability: "Aplicações críticas, ambientes de produção, sistemas com RTO baixo",
            example: "DR para sistema ERP crítico ou aplicação de e-commerce com zero downtime",
            characteristics: [
              "RTO/RPO em minutos",
              "Replicação contínua de dados",
              "Failover/failback automatizado",
              "Testing de DR sem impacto",
              "Orquestração automatizada"
            ],
            tags: ["disaster-recovery", "zerto", "rto", "rpo", "business-continuity"],
            observations: "Solução premium para continuidade de negócio com RTO/RPO mínimos. Adiciona custo do armazenamento HDD utilizado.",
            externalLink: "https://www.zerto.com/"
          }
        ]
      }
    ]
  }
];
