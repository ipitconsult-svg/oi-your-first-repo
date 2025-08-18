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
  },
  {
    id: "4",
    name: "SECURITY",
    description: "Soluções completas de segurança cibernética e proteção de infraestrutura",
    subcategories: [
      {
        id: "4.1",
        name: "SOCaaS (Security Operations Center)",
        description: "Centro de operações de segurança como serviço com monitoramento 24/7",
        items: [
          // Ativos Monitorados
          {
            id: "4.1.1.1",
            name: "SOC Endpoint Monitoring",
            description: "Monitoramento de endpoints - principal ponto de entrada para ameaças",
            price: 15.00,
            functionality: "Monitoramento contínuo de atividades suspeitas em endpoints com detecção comportamental e response automatizado",
            applicability: "Workstations, laptops corporativos, dispositivos móveis, pontos de acesso remoto",
            example: "Monitoramento de laptops corporativos ou workstations de usuários finais",
            characteristics: [
              "Detecção de ameaças em tempo real",
              "Análise comportamental de usuários",
              "Response automatizado a incidentes",
              "Integração com EDR/XDR",
              "Relatórios de compliance"
            ],
            tags: ["soc", "endpoint", "monitoring", "threat-detection", "behavior-analysis"],
            observations: "Foco na monitoração de atividades suspeitas do usuário e detecção precoce de ameaças"
          },
          {
            id: "4.1.1.2",
            name: "SOC Server Monitoring", 
            description: "Monitoramento de servidores - proteção de dados vitais",
            price: 40.00,
            functionality: "Monitoramento avançado de servidores contra acessos indevidos, exfiltração de dados e atividades maliciosas",
            applicability: "Servidores de aplicação, database servers, file servers, web servers",
            example: "Monitoramento de servidor de banco de dados ou servidor de aplicação crítica",
            characteristics: [
              "Monitoramento de acessos não autorizados",
              "Detecção de exfiltração de dados",
              "Análise de logs de sistema",
              "Alertas de atividades anômalas",
              "Proteção de dados sensíveis"
            ],
            tags: ["soc", "server", "monitoring", "data-protection", "access-control"],
            observations: "Ativo que armazena dados vitais, sendo um alvo monitorado contra acessos indevidos e exfiltração"
          },
          {
            id: "4.1.1.3",
            name: "SOC Firewall Monitoring",
            description: "Monitoramento de firewall - primeira linha de defesa",
            price: 75.00,
            functionality: "Análise contínua de logs de firewall para detecção de tentativas de intrusão e ataques de rede",
            applicability: "Firewalls corporativos, appliances de segurança, gateways de rede",
            example: "Monitoramento de firewall perimetral ou firewall de data center",
            characteristics: [
              "Análise de logs em tempo real",
              "Detecção de tentativas de intrusão",
              "Correlação de eventos de rede",
              "Identificação de ataques DDoS",
              "Alertas de tráfego anômalo"
            ],
            tags: ["soc", "firewall", "monitoring", "intrusion-detection", "network-security"],
            observations: "Primeira linha de defesa que filtra o tráfego de rede, gerando logs essenciais para a detecção de tentativas de intrusão"
          },
          {
            id: "4.1.1.4",
            name: "SOC Network Assets Monitoring",
            description: "Monitoramento de ativos de rede - controle de fluxo de dados",
            price: 30.00,
            functionality: "Monitoramento de switches, roteadores e equipamentos de rede para identificar movimentação lateral de atacantes",
            applicability: "Switches, roteadores, access points, equipamentos de infraestrutura de rede",
            example: "Monitoramento de switch core ou roteador de borda da rede corporativa",
            characteristics: [
              "Detecção de movimentação lateral",
              "Análise de tráfego de rede",
              "Monitoramento de dispositivos IoT",
              "Identificação de dispositivos não autorizados",
              "Mapeamento de topologia de rede"
            ],
            tags: ["soc", "network", "monitoring", "lateral-movement", "infrastructure"],
            observations: "Equipamentos como switches e roteadores que controlam o fluxo de dados, analisados para identificar movimentação lateral de atacantes"
          },
          // Volume de Eventos EPS
          {
            id: "4.1.2.1",
            name: "SOC EPS até 50",
            description: "Volume de eventos até 50 EPS (~129 milhões eventos/mês)",
            functionality: "Processamento e análise de até 50 eventos por segundo com correlação automática e alertas inteligentes",
            applicability: "Pequenas empresas, startups, escritórios regionais",
            example: "SOC para empresa com até 100 funcionários ou filial regional",
            characteristics: [
              "Até 50 eventos por segundo",
              "~129 milhões eventos/mês",
              "Correlação básica de eventos",
              "Alertas automáticos",
              "Dashboard executivo"
            ],
            tags: ["soc", "eps", "small-business", "event-processing", "monitoring"],
            observations: "Ideal para organizações menores com volume moderado de eventos de segurança"
          },
          {
            id: "4.1.2.2", 
            name: "SOC EPS 51-200",
            description: "Volume de eventos de 51 a 200 EPS (~516 milhões eventos/mês)",
            functionality: "Processamento avançado de eventos com machine learning para detecção de padrões e ameaças sofisticadas",
            applicability: "Médias empresas, organizações com múltiplas filiais",
            example: "SOC para empresa de médio porte ou organização com infraestrutura distribuída",
            characteristics: [
              "51 a 200 eventos por segundo",
              "~516 milhões eventos/mês", 
              "Machine learning integrado",
              "Correlação avançada",
              "Threat intelligence"
            ],
            tags: ["soc", "eps", "medium-business", "machine-learning", "advanced"],
            observations: "Solução intermediária para organizações com crescimento de eventos de segurança"
          },
          // LGPD Storage
          {
            id: "4.1.3.1",
            name: "LGPD Storage 2TB",
            description: "Armazenamento seguro para compliance LGPD",
            price: 9600.00,
            functionality: "Storage criptografado em data center nacional com controle de acesso, trilhas de auditoria e retenção mínima de 12 meses",
            applicability: "Empresas sujeitas à LGPD, organizações com dados pessoais, ambientes regulamentados",
            example: "Storage para logs de acesso de empresa de saúde ou registros de transações financeiras",
            characteristics: [
              "Armazenamento criptografado",
              "Data center nacional (LGPD compliant)",
              "Controle de acesso rigoroso",
              "Trilhas de auditoria completas",
              "Retenção mínima 12 meses"
            ],
            tags: ["lgpd", "storage", "compliance", "audit", "encryption"],
            observations: "Armazenamento em conformidade com LGPD em data center nacional. LUN de 24TB com previsão de consumo final."
          },
          {
            id: "4.1.3.2",
            name: "LGPD Storage Adicional",
            description: "Storage adicional para compliance LGPD (por GB)",
            price: 0.35,
            functionality: "Capacidade adicional de storage seguro para expansão conforme crescimento de dados regulamentados",
            applicability: "Expansão de capacidade para grandes volumes de dados pessoais",
            example: "Storage adicional para crescimento de base de dados de clientes",
            characteristics: [
              "Pricing por GB utilizado",
              "Escalabilidade flexível",
              "Mesmos padrões de segurança",
              "Integração transparente",
              "Billing detalhado"
            ],
            tags: ["lgpd", "storage", "scalable", "pay-per-use", "expansion"],
            observations: "Modelo flexível para expansão acima de 3TB/mês conforme necessidade"
          }
        ]
      },
      {
        id: "4.2",
        name: "Proteção DDoS",
        description: "Proteção contra ataques distribuídos de negação de serviço",
        items: [
          {
            id: "4.2.1",
            name: "DDoS Protection Basic",
            description: "Proteção DDoS básica até 20Gbps",
            price: 149.99,
            functionality: "Proteção automática contra ataques DDoS com capacidade de 20Gbps e resposta via null route",
            applicability: "Websites corporativos, aplicações básicas, e-commerce de pequeno porte",
            example: "Proteção para site corporativo ou loja virtual com tráfego moderado",
            characteristics: [
              "Capacidade: 20Gbps por servidor",
              "SLA: 6 horas",
              "Resposta: null route",
              "Suporte: ticket",
              "Data center: SPO"
            ],
            tags: ["ddos", "protection", "basic", "20gbps", "null-route"],
            observations: "Solução básica para proteção contra ataques DDoS comuns"
          },
          {
            id: "4.2.2", 
            name: "DDoS Protection Standard",
            description: "Proteção DDoS padrão até 40Gbps",
            price: 249.99,
            functionality: "Proteção robusta contra ataques DDoS com capacidade ampliada e tempo de resposta reduzido",
            applicability: "E-commerce médio, aplicações corporativas, APIs críticas",
            example: "Proteção para plataforma de e-commerce ou API de serviços financeiros",
            characteristics: [
              "Capacidade: 40Gbps por servidor",
              "SLA: 3 horas",
              "Resposta: ticket",
              "Mitigação automática",
              "Data center: SPO"
            ],
            tags: ["ddos", "protection", "standard", "40gbps", "fast-response"],
            observations: "Equilibrio entre proteção e custo para aplicações de médio porte"
          },
          {
            id: "4.2.3",
            name: "DDoS Protection Premium", 
            description: "Proteção DDoS premium ilimitada",
            price: 499.99,
            functionality: "Proteção máxima contra ataques DDoS sem limite de capacidade e suporte prioritário",
            applicability: "Aplicações mission-critical, grandes e-commerces, plataformas financeiras",
            example: "Proteção para banco digital ou grande marketplace",
            characteristics: [
              "Capacidade: Ilimitada por servidor",
              "SLA: 1 hora",
              "Suporte: ticket e WhatsApp",
              "Mitigação instantânea",
              "Data center: SPO"
            ],
            tags: ["ddos", "protection", "premium", "unlimited", "priority-support"],
            observations: "Máxima proteção para aplicações críticas com suporte prioritário"
          }
        ]
      },
      {
        id: "4.3",
        name: "Firewall",
        description: "Soluções de firewall para proteção perimetral e segmentação de rede",
        items: [
          // Secure Private Cloud
          {
            id: "4.3.1.1",
            name: "Secure Private Cloud SPC1",
            description: "Firewall gerenciado para até 2 servidores",
            price: 300.00,
            functionality: "Firewall como serviço com 5 regras, 5 VPNs locais e 3 site-to-site, incluindo IPS padrão",
            applicability: "Pequenas empresas, startups, projetos piloto",
            example: "Proteção para pequeno ambiente web ou aplicação de startup",
            characteristics: [
              "Até 2 servidores",
              "5 regras de firewall",
              "5 contas VPN local",
              "Até 3 VPN site-to-site",
              "2 alterações de regras",
              "IPS Padrão incluído"
            ],
            tags: ["firewall", "spc", "basic", "managed", "vpn"],
            observations: "Solução entry-level para pequenos ambientes com necessidades básicas de segurança"
          },
          {
            id: "4.3.1.2",
            name: "Secure Private Cloud SPC2",
            description: "Firewall gerenciado intermediário",
            price: 450.00,
            functionality: "Firewall gerenciado com maior capacidade de regras e VPNs para ambientes em crescimento",
            applicability: "Empresas em crescimento, ambientes de desenvolvimento, filiais",
            example: "Proteção para empresa em expansão ou ambiente de desenvolvimento",
            characteristics: [
              "Até 2 servidores",
              "10 regras de firewall", 
              "10 contas VPN local",
              "Até 5 VPN site-to-site",
              "3 alterações de regras",
              "IPS Padrão incluído"
            ],
            tags: ["firewall", "spc", "intermediate", "managed", "scalable"],
            observations: "Solução intermediária com maior flexibilidade para ambientes em crescimento"
          },
          {
            id: "4.3.1.3",
            name: "Secure Private Cloud SPC3",
            description: "Firewall gerenciado avançado",
            price: 600.00,
            functionality: "Firewall robusto com ampla capacidade de regras e conectividade VPN para ambientes corporativos",
            applicability: "Empresas estabelecidas, ambientes corporativos, múltiplas filiais",
            example: "Proteção para empresa com múltiplas filiais ou ambiente corporativo complexo",
            characteristics: [
              "Até 2 servidores",
              "20 regras de firewall",
              "20 contas VPN local", 
              "Até 8 VPN site-to-site",
              "5 alterações de regras",
              "IPS Padrão incluído"
            ],
            tags: ["firewall", "spc", "advanced", "corporate", "multi-site"],
            observations: "Solução avançada para ambientes corporativos com necessidades complexas"
          },
          {
            id: "4.3.1.4",
            name: "Secure Private Cloud SPC4",
            description: "Firewall gerenciado premium com antivírus",
            price: 900.00,
            functionality: "Firewall premium com máxima capacidade, antivírus integrado e IPS avançado",
            applicability: "Grandes empresas, ambientes críticos, organizações com alta segurança",
            example: "Proteção para grande corporação ou ambiente com dados altamente sensíveis",
            characteristics: [
              "Até 2 servidores",
              "35 regras de firewall",
              "30 contas VPN local",
              "Até 12 VPN site-to-site", 
              "10 alterações de regras",
              "Antivírus integrado",
              "IPS Padrão incluído"
            ],
            tags: ["firewall", "spc", "premium", "enterprise", "antivirus"],
            observations: "Solução premium com máxima proteção e recursos avançados de segurança"
          },
          // Appliance Fortigate
          {
            id: "4.3.2.1",
            name: "FortiGate 40F",
            description: "Firewall appliance para pequenos escritórios",
            price: 520.00,
            functionality: "Appliance físico Fortinet para pequenos ambientes com 5 portas Gigabit Ethernet",
            applicability: "Pequenos escritórios, home offices, filiais pequenas",
            example: "Firewall para pequeno escritório ou filial com poucos usuários",
            characteristics: [
              "5 portas RJ45 GE",
              "1 WAN, 4 Internas",
              "Throughput otimizado",
              "FortiOS integrado",
              "Gestão via FortiGate"
            ],
            tags: ["firewall", "fortigate", "appliance", "small-office", "physical"],
            observations: "Com UTP: R$897,55 / Com ATP: R$749,82"
          },
          {
            id: "4.3.2.2", 
            name: "FortiGate 60F",
            description: "Firewall appliance para escritórios médios",
            price: 680.00,
            functionality: "Appliance Fortinet com 10 portas para ambientes médios com necessidades de segmentação",
            applicability: "Escritórios médios, empresas em crescimento, ambientes com DMZ",
            example: "Firewall para empresa média com necessidade de DMZ e múltiplas VLANs",
            characteristics: [
              "10 portas RJ45 GE",
              "2 WAN, 1 DMZ, 7 Internas", 
              "Alta performance",
              "Redundância WAN",
              "DMZ dedicada"
            ],
            tags: ["firewall", "fortigate", "appliance", "medium-office", "dmz"],
            observations: "Com UTP: R$1.210,10 / Com ATP: R$1.002,67"
          },
          {
            id: "4.3.2.3",
            name: "FortiGate 100F",
            description: "Firewall appliance enterprise com alta densidade",
            price: 2500.00,
            functionality: "Appliance enterprise com 22 portas GE e 2 SFP+ para alta conectividade",
            applicability: "Empresas grandes, data centers, ambientes com alta conectividade",
            example: "Firewall para data center ou empresa com muitos dispositivos de rede",
            characteristics: [
              "22 portas RJ45 GE",
              "2 SFP + 2 SFP+",
              "1 DMZ, 1 Mgmt, 2 HA",
              "14 switch compartilhadas",
              "Alta disponibilidade"
            ],
            tags: ["firewall", "fortigate", "appliance", "enterprise", "high-density"],
            observations: "Com UTP: R$3.733,54 / Solução enterprise para alta conectividade"
          },
          {
            id: "4.3.2.4",
            name: "FortiGate 200F", 
            description: "Firewall appliance premium com SFP",
            price: 4900.00,
            functionality: "Appliance premium com portas SFP para conectividade de fibra óptica e alta performance",
            applicability: "Grandes corporações, provedores de serviço, campus corporativos",
            example: "Firewall para grande corporação ou provedor de serviços",
            characteristics: [
              "2 portas RJ45 GE (HA/MGMT)",
              "16 portas RJ45 GE",
              "2 slots SFP FortiLink",
              "8 slots SFP GE",
              "Máxima performance"
            ],
            tags: ["firewall", "fortigate", "appliance", "premium", "sfp"],
            observations: "Com UTP: R$7.473,94 / Solução premium para grandes ambientes"
          }
        ]
      },
      {
        id: "4.4", 
        name: "Acronis Security Suite",
        description: "Suite completa de segurança Acronis com proteção avançada",
        items: [
          {
            id: "4.4.1",
            name: "Advanced Security + EDR",
            description: "Segurança avançada com detecção e resposta de endpoints",
            price: 7.78,
            functionality: "Proteção endpoint com EDR integrado, detecção comportamental e response automatizado",
            applicability: "Endpoints corporativos, workstations críticas, ambientes BYOD",
            example: "Proteção para laptops corporativos ou workstations de usuários críticos",
            characteristics: [
              "Endpoint Detection & Response",
              "Detecção comportamental",
              "Anti-malware avançado",
              "Response automatizado",
              "Stand-alone capability"
            ],
            tags: ["security", "acronis", "edr", "endpoint", "behavior-detection"],
            observations: "Solução standalone com capacidades avançadas de EDR"
          },
          {
            id: "4.4.2",
            name: "Advanced Security + XDR",
            description: "Segurança estendida com detecção e resposta ampliada",
            price: 24.40,
            functionality: "XDR integrado com correlação de eventos cross-platform e threat hunting avançado",
            applicability: "Ambientes híbridos, infraestrutura complexa, organizações com múltiplas plataformas",
            example: "Proteção para ambiente híbrido com múltiplos vetores de ataque",
            characteristics: [
              "Extended Detection & Response",
              "Correlação cross-platform",
              "Threat hunting avançado",
              "Analytics de segurança",
              "Visibilidade unificada"
            ],
            tags: ["security", "acronis", "xdr", "cross-platform", "threat-hunting"],
            observations: "Proteção estendida para ambientes complexos com visibilidade unificada"
          },
          {
            id: "4.4.3.1",
            name: "MDR Standard",
            description: "Detecção e resposta gerenciada padrão",
            price: 34.85,
            functionality: "Serviço gerenciado de detecção e resposta com SOC 24/7 e analistas especializados",
            applicability: "Empresas sem SOC interno, organizações que precisam de expertise externa",
            example: "MDR para empresa que terceiriza operações de segurança",
            characteristics: [
              "SOC 24/7 gerenciado",
              "Analistas especializados",
              "Response coordenado", 
              "Relatórios executivos",
              "Requer Advanced Security + EDR"
            ],
            tags: ["security", "acronis", "mdr", "managed", "soc"],
            observations: "Requer Advanced Security + EDR como pré-requisito"
          },
          {
            id: "4.4.3.2",
            name: "MDR Advanced",
            description: "Detecção e resposta gerenciada avançada",
            price: 69.85,
            functionality: "MDR premium com threat hunting proativo, forensics digitais e response orquestrado",
            applicability: "Organizações críticas, ambientes regulamentados, empresas com alta exposição",
            example: "MDR para banco ou empresa com dados altamente sensíveis",
            characteristics: [
              "Threat hunting proativo",
              "Forensics digitais",
              "Response orquestrado",
              "Intelligence personalizada",
              "SLA premium"
            ],
            tags: ["security", "acronis", "mdr", "advanced", "threat-hunting"],
            observations: "Serviço premium com capabilities avançadas de threat hunting"
          },
          {
            id: "4.4.4.1",
            name: "Advanced Email Security",
            description: "Proteção avançada para email corporativo",
            price: 28.44,
            functionality: "Proteção email com IA, anti-phishing avançado e sandboxing de anexos",
            applicability: "Email corporativo, Microsoft 365, Google Workspace",
            example: "Proteção para ambiente Microsoft 365 ou Google Workspace",
            characteristics: [
              "Anti-phishing com IA",
              "Sandboxing de anexos",
              "URL protection",
              "Perception Point technology",
              "Stand-alone capability"
            ],
            tags: ["security", "acronis", "email", "phishing", "perception-point"],
            observations: "Proteção standalone para ambientes de email corporativo"
          },
          {
            id: "4.4.4.2",
            name: "Advanced Collaboration Apps Security",
            description: "Proteção para aplicações de colaboração",
            price: 19.14,
            functionality: "Segurança para Teams, Slack, aplicações de colaboração com proteção de conteúdo",
            applicability: "Microsoft Teams, Slack, aplicações de colaboração empresarial",
            example: "Proteção para ambiente Microsoft Teams ou Slack corporativo",
            characteristics: [
              "Proteção de colaboração",
              "Content security",
              "Anti-malware para apps",
              "Perception Point integration",
              "Multi-platform support"
            ],
            tags: ["security", "acronis", "collaboration", "teams", "content-protection"],
            observations: "Proteção especializada para plataformas de colaboração"
          },
          {
            id: "4.4.5",
            name: "Advanced Security Awareness Training",
            description: "Treinamento avançado de conscientização em segurança",
            price: 8.84,
            functionality: "Programa de treinamento personalizado com simulações de phishing e métricas de engajamento",
            applicability: "Funcionários corporativos, treinamento de segurança, compliance",
            example: "Treinamento para funcionários sobre phishing e engenharia social",
            characteristics: [
              "Simulações de phishing",
              "Conteúdo personalizado", 
              "Métricas de engajamento",
              "Compliance reporting",
              "Stand-alone capability"
            ],
            tags: ["security", "acronis", "training", "awareness", "phishing-simulation"],
            observations: "Programa completo para conscientização e treinamento de usuários"
          }
        ]
      }
    ]
  },
  {
    id: "5",
    name: "NETWORKING",
    description: "Soluções completas de conectividade e infraestrutura de rede",
    subcategories: [
      {
        id: "5.1",
        name: "Cross Connection",
        description: "Interconexões dedicadas para conectividade ponto-a-ponto",
        items: [
          // LAN to LAN
          {
            id: "5.1.1.1",
            name: "Cross Connect LAN to LAN - JPA",
            description: "Interconexão LAN to LAN no Data Center JPA",
            price: 1200.00,
            functionality: "Link dedicado ponto-a-ponto fornecido por operadora de telecom escolhida pelo cliente",
            applicability: "Conectividade com provedores, links dedicados, interconexão com outras redes",
            example: "Conexão dedicada com provedor de internet ou link com matriz da empresa",
            characteristics: [
              "Link dedicado ponto-a-ponto",
              "Operadora de telecom à escolha",
              "Viabilidade técnica avaliada",
              "Data center: JPA",
              "Conectividade com Mob Telecom, 1Telecom, Tely, Cabo Telecom"
            ],
            tags: ["cross-connect", "lan-to-lan", "jpa", "dedicated", "telecom"],
            observations: "Viabilidade técnica depende de avaliação da HostDime e disponibilidade da operadora no DC"
          },
          {
            id: "5.1.1.2",
            name: "Cross Connect LAN to LAN - SPO",
            description: "Interconexão LAN to LAN no Data Center SPO",
            price: 1350.00,
            functionality: "Link dedicado ponto-a-ponto no principal hub tecnológico e financeiro do Brasil",
            applicability: "Conectividade premium, links corporativos, interconexão com carriers nacionais",
            example: "Conexão com principais carriers nacionais ou link corporativo de alta performance",
            characteristics: [
              "Link dedicado ponto-a-ponto",
              "Hub tecnológico e financeiro",
              "Acesso a principais carriers",
              "Data center: SPO",
              "Conectividade premium nacional e internacional"
            ],
            tags: ["cross-connect", "lan-to-lan", "spo", "premium", "carriers"],
            observations: "Necessário informar provedor do L2L. Oferta disponível desde que provedor tenha abordagem em SPO"
          },
          // Server to Server JPA
          {
            id: "5.1.2.1.1",
            name: "Cross Connect Server to Server JPA - Fibra",
            description: "Interconexão servidor para servidor via fibra óptica em JPA",
            price: 600.00,
            functionality: "Conectividade de alta performance entre servidores via fibra óptica para máxima velocidade",
            applicability: "Clusters de alta performance, replicação de dados, aplicações distribuídas",
            example: "Cluster de database com replicação em tempo real ou aplicação distribuída",
            characteristics: [
              "Conectividade via fibra óptica",
              "Alta velocidade e baixa latência",
              "Ideal para clusters críticos",
              "Data center: JPA",
              "Performance máxima"
            ],
            tags: ["cross-connect", "server-to-server", "jpa", "fiber", "high-performance"],
            observations: "Solução premium para aplicações que exigem máxima performance de conectividade"
          },
          {
            id: "5.1.2.1.2",
            name: "Cross Connect Server to Server JPA - UTP",
            description: "Interconexão servidor para servidor via UTP em JPA",
            price: 200.00,
            functionality: "Conectividade econômica entre servidores via cabo UTP para aplicações padrão",
            applicability: "Aplicações básicas, conectividade entre servidores, ambientes de desenvolvimento",
            example: "Conexão entre servidor web e database ou ambiente de desenvolvimento",
            characteristics: [
              "Conectividade via cabo UTP",
              "Solução econômica",
              "Ideal para aplicações padrão",
              "Data center: JPA",
              "Custo-benefício otimizado"
            ],
            tags: ["cross-connect", "server-to-server", "jpa", "utp", "cost-effective"],
            observations: "Opção econômica para conectividade básica entre servidores"
          },
          // Server to Server SPO
          {
            id: "5.1.2.2.1", 
            name: "Cross Connect Server to Server SPO - Fibra",
            description: "Interconexão servidor para servidor via fibra óptica em SPO",
            price: 1350.00,
            functionality: "Conectividade premium via fibra no principal hub tecnológico do Brasil",
            applicability: "Aplicações mission-critical, clusters enterprise, alta disponibilidade",
            example: "Cluster de aplicação financeira ou sistema de alta disponibilidade enterprise",
            characteristics: [
              "Conectividade via fibra óptica",
              "Hub tecnológico principal",
              "Performance enterprise",
              "Data center: SPO",
              "Máxima confiabilidade"
            ],
            tags: ["cross-connect", "server-to-server", "spo", "fiber", "enterprise"],
            observations: "Solução premium no principal hub tecnológico e financeiro do Brasil"
          },
          {
            id: "5.1.2.2.2",
            name: "Cross Connect Server to Server SPO - UTP", 
            description: "Interconexão servidor para servidor via UTP em SPO",
            price: 990.00,
            functionality: "Conectividade padrão via UTP no data center premium de São Paulo",
            applicability: "Aplicações corporativas, conectividade entre servidores, projetos médios",
            example: "Conectividade entre servidores de aplicação corporativa ou sistema ERP",
            characteristics: [
              "Conectividade via cabo UTP",
              "Data center premium SPO",
              "Solução corporativa",
              "Confiabilidade enterprise",
              "Localização estratégica"
            ],
            tags: ["cross-connect", "server-to-server", "spo", "utp", "corporate"],
            observations: "Conectividade corporativa no principal hub de negócios do país"
          }
        ]
      },
      {
        id: "5.2",
        name: "Switch Port",
        description: "Portas de switch compartilhadas para conectividade LAN",
        items: [
          {
            id: "5.2.1",
            name: "Switch Port LAN 10G",
            description: "Porta de switch 10 Gigabit compartilhada",
            price: 250.00,
            functionality: "Porta 10G compartilhada via Virtual Chassis para alta performance e gerência exclusiva",
            applicability: "Ambientes de alta performance, HA, clientes com poucas portas mas alta demanda",
            example: "Cluster de servidores com alta demanda de largura de banda ou aplicação de streaming",
            characteristics: [
              "Velocidade: 10 Gigabit",
              "Virtual Chassis compartilhado",
              "Gerência exclusiva HostDime",
              "Ideal para HA",
              "Addon por número de portas"
            ],
            tags: ["switch", "10g", "high-performance", "virtual-chassis", "ha"],
            observations: "Produto para clientes com HA ou poucas portas. Gerência exclusiva HostDime. Addon por número de portas."
          },
          {
            id: "5.2.2",
            name: "Switch Port LAN 1G",
            description: "Porta de switch 1 Gigabit compartilhada", 
            price: 150.00,
            functionality: "Porta 1G compartilhada via Virtual Chassis para conectividade padrão com gerência profissional",
            applicability: "Aplicações padrão, conectividade básica, ambientes com demanda moderada",
            example: "Servidores de aplicação padrão ou ambiente de desenvolvimento",
            characteristics: [
              "Velocidade: 1 Gigabit",
              "Virtual Chassis compartilhado",
              "Gerência exclusiva HostDime",
              "Conectividade padrão",
              "Modelo flexível de portas"
            ],
            tags: ["switch", "1g", "standard", "virtual-chassis", "flexible"],
            observations: "Solução econômica para conectividade padrão com gerência profissional"
          }
        ]
      },
      {
        id: "5.3",
        name: "Bandwidth",
        description: "Largura de banda dedicada e compartilhada",
        items: [
          {
            id: "5.3.1",
            name: "Banda AS HostDime Brasil",
            description: "Banda disponível no AS da HostDime Brasil",
            price: 500.00,
            functionality: "Porta 10Gbps + 1Gbps padrão com 320TB inclusos e cobrança por 95th percentile",
            applicability: "Websites de alto tráfego, aplicações bandwidth-intensive, streaming",
            example: "Portal de notícias com alto tráfego ou plataforma de streaming de vídeo",
            characteristics: [
              "Porta: 10Gbps + 1Gbps padrão",
              "Tráfego: 320TB inclusos",
              "Cobrança: 95th percentile",
              "ASN 53055 - HostDime Brasil",
              "Conectividade: 98Gbps total JPA"
            ],
            tags: ["bandwidth", "10gbps", "95th-percentile", "high-traffic", "streaming"],
            observations: "Banda JPA: 98Gbps total. Conectividade com TELY (2x40Gb), ALGAR (10Gb/4Gb), MOB (1Gb), 1TELECOM (10Gb/3Gb), Nic.Br (10Gb)",
            externalLink: "https://www.hostdime.com.br/conectividade/"
          }
        ]
      },
      {
        id: "5.4",
        name: "Bloco de IP",
        description: "Blocos de endereços IP dedicados para seus projetos",
        items: [
          // Brasil - JPA/SPO
          {
            id: "5.4.1.1",
            name: "Bloco IP /24 - Brasil",
            description: "Bloco /24 - 256 IPs (254 utilizáveis) - JPA/SPO",
            price: 17920.00,
            functionality: "Bloco completo /24 com 254 IPs utilizáveis para grandes projetos ou múltiplas aplicações",
            applicability: "Grandes corporações, múltiplos projetos, provedores de serviço",
            example: "Provedor de hosting ou grande corporação com múltiplas aplicações",
            characteristics: [
              "256 IPs total (254 utilizáveis)",
              "Máscara: /24",
              "Data centers: JPA/SPO",
              "IPs brasileiros",
              "Ideal para grandes projetos"
            ],
            tags: ["ip-block", "/24", "brasil", "large-scale", "provider"],
            observations: "Maior bloco disponível no Brasil, ideal para provedores e grandes corporações"
          },
          {
            id: "5.4.1.2",
            name: "Bloco IP /25 - Brasil", 
            description: "Bloco /25 - 128 IPs (126 utilizáveis) - JPA/SPO",
            price: 7680.00,
            functionality: "Bloco /25 para projetos de médio porte com necessidade de múltiplos IPs",
            applicability: "Médias empresas, múltiplas aplicações, ambientes de desenvolvimento",
            example: "Empresa com múltiplos websites ou ambiente de desenvolvimento/produção",
            characteristics: [
              "128 IPs total (126 utilizáveis)",
              "Máscara: /25",
              "Data centers: JPA/SPO", 
              "IPs brasileiros",
              "Médios projetos"
            ],
            tags: ["ip-block", "/25", "brasil", "medium-scale", "multiple-apps"],
            observations: "Equilibrio entre quantidade e custo para projetos médios"
          },
          {
            id: "5.4.1.3",
            name: "Bloco IP /26 - Brasil",
            description: "Bloco /26 - 64 IPs (62 utilizáveis) - JPA/SPO", 
            price: 3200.00,
            functionality: "Bloco /26 para pequenos grupos de aplicações ou departamentos",
            applicability: "Pequenas empresas, departamentos, projetos específicos",
            example: "Departamento de TI com múltiplos serviços ou pequena empresa",
            characteristics: [
              "64 IPs total (62 utilizáveis)",
              "Máscara: /26",
              "Data centers: JPA/SPO",
              "IPs brasileiros", 
              "Pequenos grupos"
            ],
            tags: ["ip-block", "/26", "brasil", "small-scale", "department"],
            observations: "Ideal para pequenos grupos de aplicações ou departamentos"
          },
          {
            id: "5.4.1.4",
            name: "Bloco IP /27 - Brasil",
            description: "Bloco /27 - 32 IPs (30 utilizáveis) - JPA/SPO",
            price: 1440.00,
            functionality: "Bloco /27 para projetos pequenos com necessidades específicas de IPs",
            applicability: "Startups, projetos piloto, aplicações específicas",
            example: "Startup com múltiplos microserviços ou projeto piloto",
            characteristics: [
              "32 IPs total (30 utilizáveis)",
              "Máscara: /27",
              "Data centers: JPA/SPO",
              "IPs brasileiros",
              "Projetos específicos"
            ],
            tags: ["ip-block", "/27", "brasil", "startup", "microservices"],
            observations: "Adequado para startups e projetos com arquitetura distribuída"
          },
          {
            id: "5.4.1.5",
            name: "Bloco IP /28 - Brasil",
            description: "Bloco /28 - 16 IPs (14 utilizáveis) - JPA/SPO",
            price: 640.00,
            functionality: "Bloco /28 para pequenos projetos ou testes com poucos serviços",
            applicability: "Pequenos projetos, ambiente de testes, POCs",
            example: "Ambiente de testes ou POC com poucos serviços",
            characteristics: [
              "16 IPs total (14 utilizáveis)",
              "Máscara: /28", 
              "Data centers: JPA/SPO",
              "IPs brasileiros",
              "Pequenos projetos"
            ],
            tags: ["ip-block", "/28", "brasil", "small-projects", "testing"],
            observations: "Ideal para pequenos projetos e ambientes de teste"
          },
          {
            id: "5.4.1.6",
            name: "Bloco IP /29 - Brasil",
            description: "Bloco /29 - 8 IPs (6 utilizáveis) - JPA/SPO",
            price: 280.00,
            functionality: "Bloco /29 mínimo para projetos básicos com poucos componentes",
            applicability: "Projetos básicos, MVPs, aplicações simples",
            example: "MVP ou aplicação simples com poucos componentes",
            characteristics: [
              "8 IPs total (6 utilizáveis)",
              "Máscara: /29",
              "Data centers: JPA/SPO", 
              "IPs brasileiros",
              "Projetos básicos"
            ],
            tags: ["ip-block", "/29", "brasil", "basic", "mvp"],
            observations: "Bloco mínimo para projetos básicos e MVPs"
          },
          {
            id: "5.4.1.7",
            name: "Bloco IP /30 - Brasil",
            description: "Bloco /30 - 4 IPs (2 utilizáveis) - JPA/SPO",
            price: 140.00,
            functionality: "Bloco /30 para conectividade ponto-a-ponto ou aplicações muito específicas",
            applicability: "Links ponto-a-ponto, aplicações específicas, conectividade dedicada",
            example: "Link dedicado entre data centers ou aplicação muito específica",
            characteristics: [
              "4 IPs total (2 utilizáveis)",
              "Máscara: /30",
              "Data centers: JPA/SPO",
              "IPs brasileiros",
              "Conectividade específica"
            ],
            tags: ["ip-block", "/30", "brasil", "point-to-point", "specific"],
            observations: "Usado principalmente para links ponto-a-ponto ou casos muito específicos"
          },
          // USA
          {
            id: "5.4.2.1", 
            name: "Bloco IP /24 - USA",
            description: "Bloco /24 - 256 IPs (254 utilizáveis) - Orlando",
            price: 6840.00,
            functionality: "Bloco completo /24 nos EUA com melhor custo-benefício para expansão internacional",
            applicability: "Expansão para mercado americano, aplicações globais, CDN",
            example: "Expansão de e-commerce para EUA ou CDN para mercado americano",
            characteristics: [
              "256 IPs total (254 utilizáveis)",
              "Máscara: /24",
              "Data center: Orlando, FL",
              "IPs americanos",
              "Gateway para expansão EUA"
            ],
            tags: ["ip-block", "/24", "usa", "expansion", "international"],
            observations: "Melhor custo-benefício para expansão no mercado americano"
          },
          {
            id: "5.4.2.2",
            name: "Bloco IP /25 - USA",
            description: "Bloco /25 - 128 IPs (126 utilizáveis) - Orlando", 
            price: 3375.00,
            functionality: "Bloco /25 para projetos de médio porte no mercado americano",
            applicability: "Médios projetos internacionais, testes de mercado americano",
            example: "Teste de mercado americano ou projeto médio nos EUA",
            characteristics: [
              "128 IPs total (126 utilizáveis)",
              "Máscara: /25",
              "Data center: Orlando, FL",
              "IPs americanos",
              "Projetos médios EUA"
            ],
            tags: ["ip-block", "/25", "usa", "medium-projects", "market-test"],
            observations: "Ideal para testes de mercado e projetos médios nos EUA"
          },
          {
            id: "5.4.2.3",
            name: "Bloco IP /26 - USA",
            description: "Bloco /26 - 64 IPs (62 utilizáveis) - Orlando",
            price: 1620.00,
            functionality: "Bloco /26 para entrada no mercado americano com projetos menores",
            applicability: "Entrada no mercado americano, projetos piloto nos EUA",
            example: "Projeto piloto nos EUA ou entrada inicial no mercado americano",
            characteristics: [
              "64 IPs total (62 utilizáveis)",
              "Máscara: /26",
              "Data center: Orlando, FL", 
              "IPs americanos",
              "Entrada no mercado"
            ],
            tags: ["ip-block", "/26", "usa", "market-entry", "pilot"],
            observations: "Porta de entrada econômica para o mercado americano"
          }
        ]
      },
      {
        id: "5.5",
        name: "IP Announcements & BGP",
        description: "Anúncio de IPs e configuração BGP para roteamento avançado",
        items: [
          {
            id: "5.5.1",
            name: "IP Announcements & BGP",
            description: "Serviço de anúncio de IPs e configuração BGP",
            price: 500.00,
            functionality: "Configuração e gerenciamento de anúncios BGP para seus blocos de IP com roteamento otimizado",
            applicability: "Provedores de serviço, grandes corporações, otimização de roteamento",
            example: "Provedor de hosting que precisa anunciar seus próprios blocos de IP",
            characteristics: [
              "Configuração BGP profissional",
              "Anúncio de blocos próprios",
              "Roteamento otimizado",
              "Disponível em JPA, SPO, USA",
              "Gerenciamento completo"
            ],
            tags: ["bgp", "ip-announcement", "routing", "provider", "optimization"],
            observations: "Essencial para provedores de serviço e organizações que precisam de controle total sobre roteamento",
            externalLink: "https://www.hostdime.com.br/conectividade/"
          }
        ]
      }
    ]
  }
];
