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
      },
      {
        id: "1.1",
        name: "Bare Metal (Servidor Dedicado)",
        description: "Servidores físicos dedicados com performance máxima e controle total",
        items: [
          // CPUs
          {
            id: "1.1.1.1.1",
            name: "4-Core E3-1271 v3 3.6Ghz w/HT",
            description: "Processador entry-level ideal para aplicações básicas e desenvolvimento",
            price: 100,
            functionality: "Arquitetura Haswell com 4 cores físicos e 8 threads via Hyperthreading, frequência otimizada para single-thread performance",
            applicability: "Servidores web básicos, ambiente de desenvolvimento, aplicações de baixo a médio volume, hosting compartilhado",
            example: "Servidor web para site corporativo com até 1000 usuários simultâneos ou ambiente de desenvolvimento para equipe pequena",
            characteristics: [
              "4 cores físicos / 8 threads",
              "Frequência base: 3.6GHz",
              "Cache L3: 8MB",
              "TDP: 80W",
              "Arquitetura Haswell (22nm)"
            ],
            tags: ["cpu", "entry-level", "desenvolvimento", "intel", "xeon"],
            observations: "Excelente custo-benefício para workloads básicos que não exigem paralelização massiva",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },
          {
            id: "1.1.1.1.2",
            name: "6-Core Xeon E5-2620 v2 2.1GHz w/HT",
            description: "Processador balanceado para aplicações empresariais básicas",
            price: 200,
            functionality: "Xeon de classe enterprise com 6 cores, 12 threads, otimizado para aplicações empresariais estáveis",
            applicability: "Aplicações empresariais básicas, pequenos ERPs, servidores de arquivos, databases pequenos",
            example: "Servidor ERP para pequena empresa ou database MySQL para aplicação corporativa",
            characteristics: [
              "6 cores físicos / 12 threads",
              "Frequência base: 2.1GHz",
              "Cache L3: 15MB",
              "Suporte ECC memory",
              "Tecnologias Intel VT-x, VT-d"
            ],
            tags: ["cpu", "enterprise", "balanced", "intel", "xeon"],
            observations: "Equilibrio ideal entre performance e economia para aplicações empresariais",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },
          {
            id: "1.1.1.1.3",
            name: "8-Core Xeon E5-2650 v2 2.6 GHz w/HT",
            description: "Processador enterprise para virtualização e aplicações médias",
            price: 400,
            functionality: "Xeon enterprise com 8 cores, 16 threads, arquitetura Ivy Bridge otimizada para virtualização e databases",
            applicability: "Virtualização, bases de dados médias, aplicações empresariais, sistemas ERP, desenvolvimento avançado",
            example: "Servidor de virtualização com 8-12 VMs ou database PostgreSQL para e-commerce médio",
            characteristics: [
              "8 cores físicos / 16 threads",
              "Frequência base: 2.6GHz, boost até 3.4GHz",
              "Cache L3: 20MB",
              "Suporte ECC memory",
              "Advanced virtualization features"
            ],
            tags: ["cpu", "virtualization", "enterprise", "intel", "xeon"],
            observations: "Sweet spot para workloads empresariais que exigem bom paralelismo",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },
          {
            id: "1.1.1.1.4",
            name: "12-Core Xeon Gold 5118 2.3 GHz w/HT",
            description: "Processador Gold series para aplicações críticas",
            price: 2000,
            functionality: "Xeon Gold com 12 cores, arquitetura Skylake-SP para performance enterprise crítica",
            applicability: "Aplicações críticas, virtualização avançada, databases enterprise, analytics",
            example: "Servidor de produção para sistema bancário ou cluster de aplicações microservices",
            characteristics: [
              "12 cores físicos / 24 threads",
              "Frequência base: 2.3GHz",
              "Cache L3: 16.5MB",
              "Advanced security features",
              "DDR4-2400 support"
            ],
            tags: ["cpu", "gold", "enterprise", "critical", "intel"],
            observations: "Performance enterprise com recursos avançados de segurança",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },
          {
            id: "1.1.1.1.5",
            name: "48-Core AMD EPYC 7k62 3.3Ghz w/HT",
            description: "Processador high-end para workloads críticos e alta performance",
            price: 5500,
            functionality: "Arquitetura AMD Zen com 48 cores, 96 threads, suporte para até 2TB de RAM DDR4, ideal para cargas massivamente paralelas",
            applicability: "HPC, big data, AI/ML, virtualização massiva, databases enterprise, simulações científicas",
            example: "Cluster de machine learning para training de LLMs ou data warehouse com terabytes de dados",
            characteristics: [
              "48 cores físicos / 96 threads",
              "Frequência base: 2.3GHz, boost até 3.3GHz",
              "Cache L3: 256MB",
              "128 lanes PCIe 4.0",
              "Suporte até 2TB DDR4-3200"
            ],
            tags: ["cpu", "hpc", "ai", "enterprise", "amd", "epyc"],
            observations: "Líder em performance paralela, ideal para workloads que exigem máxima computação",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },

          // GPUs
          {
            id: "1.1.1.2.1",
            name: "RTX 4060 Ti (16 GB vRAM)",
            description: "GPU mid-range para desenvolvimento e cargas de trabalho moderadas de IA",
            price: 4900,
            functionality: "Arquitetura Ada Lovelace com 16GB GDDR6X, ideal para desenvolvimento de IA, rendering moderado e workstations gráficas",
            applicability: "Desenvolvimento de modelos IA, rendering 3D, simulações médias, workstations de design, prototyping",
            example: "Treinamento de modelos de computer vision médios ou estação de trabalho para design gráfico e CAD",
            characteristics: [
              "16GB GDDR6X VRAM",
              "4.352 CUDA cores",
              "Arquitetura Ada Lovelace",
              "RT cores 3ª geração",
              "Tensor cores 4ª geração para AI"
            ],
            tags: ["gpu", "ai", "rendering", "development", "nvidia", "rtx"],
            observations: "Equilibrio perfeito entre performance e custo para IA e aplicações gráficas profissionais",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },
          {
            id: "1.1.1.2.2",
            name: "RTX 4090 (24GB VRAM)",
            description: "GPU flagship para AI/ML profissional e renderização de alta complexidade",
            price: 22000,
            functionality: "GPU mais poderosa da geração Ada Lovelace com 24GB GDDR6X para workloads AI extremos e renderização profissional",
            applicability: "LLMs, training de redes neurais complexas, rendering 8K, simulações científicas, research de IA",
            example: "Treinamento de Large Language Models ou rendering de animações cinematográficas em 8K",
            characteristics: [
              "24GB GDDR6X VRAM",
              "16.384 CUDA cores",
              "83 RT cores 3ª geração",
              "512 Tensor cores 4ª geração",
              "Memory bandwidth: 1008 GB/s"
            ],
            tags: ["gpu", "ai", "llm", "professional", "nvidia", "flagship"],
            observations: "GPU mais poderosa disponível para workloads profissionais de IA e rendering",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },
          {
            id: "1.1.1.2.3",
            name: "RTX 5090 (32GB VRAM)",
            description: "GPU de próxima geração para workloads AI extremos",
            price: 23000,
            functionality: "Arquitetura Blackwell de próxima geração com 32GB GDDR7 para os maiores modelos de IA",
            applicability: "Large Language Models massivos, research de IA avançada, simulações científicas complexas",
            example: "Fine-tuning de modelos como GPT-4 ou simulações científicas de alta complexidade",
            characteristics: [
              "32GB GDDR7 VRAM",
              "21.760 CUDA cores estimados",
              "Arquitetura Blackwell",
              "Tensor cores 5ª geração",
              "Memory bandwidth superior a 1200 GB/s"
            ],
            tags: ["gpu", "ai", "llm", "next-gen", "nvidia", "blackwell"],
            observations: "GPU de próxima geração para os maiores e mais complexos workloads de IA",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },
          {
            id: "1.1.1.2.4",
            name: "AMD RADEON XTX 7900 (24GB RAM)",
            description: "GPU AMD para cargas de trabalho de computação e rendering",
            price: 7000,
            functionality: "Arquitetura RDNA 3 com 24GB de memória para workloads de computação paralela e rendering",
            applicability: "Rendering 3D, computação científica, desenvolvimento de jogos, simulações",
            example: "Rendering de animações 3D ou simulações de fluidos para pesquisa científica",
            characteristics: [
              "24GB GDDR6 VRAM",
              "6.144 Stream processors",
              "Arquitetura RDNA 3",
              "Ray tracing hardware",
              "Infinity Cache 96MB"
            ],
            tags: ["gpu", "amd", "rendering", "compute", "radeon"],
            observations: "Alternativa AMD com excelente custo-benefício para workloads de computação",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },

          // Memória RAM
          {
            id: "1.1.1.3.1",
            name: "16GB DDR3",
            description: "Memória básica para aplicações legacy e desenvolvimento",
            price: 50,
            functionality: "Módulo DDR3 para sistemas legacy e aplicações que não exigem alta performance de memória",
            applicability: "Aplicações legacy, desenvolvimento básico, servidores de arquivos, aplicações antigas",
            example: "Servidor para aplicação legada ou ambiente de desenvolvimento para sistemas antigos",
            characteristics: [
              "Capacidade: 16GB",
              "Tecnologia: DDR3",
              "Velocidade: 1333-1866MHz",
              "ECC opcional",
              "Low cost solution"
            ],
            tags: ["ram", "ddr3", "legacy", "basic"],
            observations: "Solução econômica para sistemas que não requerem alta performance de memória",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },
          {
            id: "1.1.1.3.2",
            name: "32GB DDR4",
            description: "Memória padrão para aplicações empresariais modernas",
            price: 250,
            functionality: "DDR4 de capacidade média com velocidades otimizadas para aplicações empresariais modernas",
            applicability: "Aplicações empresariais, virtualização básica, databases médios, servidores web",
            example: "Servidor web com multiple applications ou ambiente de virtualização com 4-6 VMs",
            characteristics: [
              "Capacidade: 32GB",
              "Tecnologia: DDR4",
              "Velocidade: 2400-3200MHz",
              "Suporte ECC",
              "Energy efficient"
            ],
            tags: ["ram", "ddr4", "enterprise", "standard"],
            observations: "Configuração padrão para a maioria das aplicações empresariais modernas",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },
          {
            id: "1.1.1.3.3",
            name: "64GB DDR4",
            description: "Memória de alta capacidade para virtualização e aplicações intensivas",
            price: 450,
            functionality: "High-capacity DDR4 para workloads intensivos em memória, virtualização avançada e in-memory databases",
            applicability: "Virtualização avançada, in-memory databases, caching, aplicações científicas, big data",
            example: "Servidor de virtualização com 10-15 VMs ou Redis cluster para caching de aplicações",
            characteristics: [
              "Capacidade: 64GB",
              "Tecnologia: DDR4 ECC",
              "Velocidade: 2666-3200MHz",
              "Registered/Buffered",
              "Enterprise-grade reliability"
            ],
            tags: ["ram", "ddr4", "virtualization", "high-capacity"],
            observations: "Ideal para workloads que exigem grande quantidade de memória disponível",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },

          // Armazenamento NVMe
          {
            id: "1.1.1.4.1.1",
            name: "1TB NVMe Enterprise (Kingston NV2)",
            description: "Armazenamento NVMe básico de alta performance",
            price: 400,
            functionality: "SSD NVMe PCIe com controlador enterprise-grade e tecnologia 3D NAND para aplicações que exigem baixa latência",
            applicability: "Databases médios, VMs, aplicações I/O intensivas, boot drives para servidores",
            example: "Storage principal para database PostgreSQL ou boot drive para hypervisor VMware",
            characteristics: [
              "Interface: PCIe 4.0 NVMe",
              "Capacidade: 1TB",
              "Read/Write: até 7.000/6.000 MB/s",
              "IOPS: até 1M random read",
              "Endurance: 1.8M hours MTBF"
            ],
            tags: ["storage", "nvme", "enterprise", "performance"],
            observations: "Performance superior para aplicações críticas que exigem baixa latência de I/O",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },
          {
            id: "1.1.1.4.1.2",
            name: "2TB NVMe Enterprise Plus (Kingston KC3000)",
            description: "Armazenamento NVMe premium com performance extrema",
            price: 1600,
            functionality: "NVMe enterprise de alta performance com controlador otimizado e tecnologia 3D TLC NAND",
            applicability: "Databases críticos, applications tier, virtualização de alta performance",
            example: "Storage para cluster de databases ou tier de aplicação para sistema crítico",
            characteristics: [
              "Interface: PCIe 4.0 NVMe",
              "Capacidade: 2TB",
              "Read/Write: até 7.000/7.000 MB/s",
              "IOPS: até 1M read/write",
              "Endurance: 3.6M hours MTBF"
            ],
            tags: ["storage", "nvme", "enterprise-plus", "premium"],
            observations: "Performance máxima para aplicações que exigem throughput sustentado",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },
          {
            id: "1.1.1.4.1.3",
            name: "8TB NVMe Enterprise Plus (WD BLACK)",
            description: "Armazenamento NVMe de ultra alta capacidade",
            price: 7600,
            functionality: "Enterprise NVMe com densidade máxima e performance sustentada para big data e aplicações data-intensive",
            applicability: "Data lakes, analytics, AI datasets, virtualização massiva, content delivery",
            example: "Storage para cluster de big data ou repositório para training de modelos AI com datasets massivos",
            characteristics: [
              "Interface: PCIe 4.0 NVMe",
              "Capacidade: 8TB",
              "Read/Write: até 7.300/6.600 MB/s",
              "Random IOPS: 1.4M read/1.6M write",
              "Endurance: 14.000 TBW"
            ],
            tags: ["storage", "nvme", "high-capacity", "ai", "big-data"],
            observations: "Máxima capacidade e performance para workloads data-intensive",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },

          // SSDs
          {
            id: "1.1.1.4.2.1",
            name: "480GB SSD - 2.5\"",
            description: "SSD SATA de capacidade básica para aplicações gerais",
            price: 480,
            functionality: "SSD SATA 2.5\" com performance balanceada para aplicações que não exigem NVMe",
            applicability: "Aplicações web, desenvolvimento, storage secundário, sistemas operacionais",
            example: "Boot drive para servidor web ou storage para aplicações de desenvolvimento",
            characteristics: [
              "Interface: SATA 6Gb/s",
              "Capacidade: 480GB",
              "Read/Write: até 560/530 MB/s",
              "IOPS: até 95K",
              "Form factor: 2.5\""
            ],
            tags: ["storage", "ssd", "sata", "basic"],
            observations: "Solução básica e econômica para aplicações que não exigem performance extrema",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },
          {
            id: "1.1.1.4.2.2",
            name: "2TB SSD - 2.5\" Enterprise (Crucial)",
            description: "SSD enterprise para aplicações críticas",
            price: 800,
            functionality: "SSD enterprise com endurance otimizada e features avançadas para ambientes críticos",
            applicability: "Databases, aplicações críticas, storage de produção, backup ativo",
            example: "Storage para database de produção ou repository para backup ativo",
            characteristics: [
              "Interface: SATA 6Gb/s",
              "Capacidade: 2TB",
              "Read/Write: até 540/500 MB/s",
              "Endurance: 1.4M hours MTBF",
              "Enterprise features"
            ],
            tags: ["storage", "ssd", "enterprise", "reliable"],
            observations: "Confiabilidade enterprise com boa relação capacidade/custo",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },

          // HDDs
          {
            id: "1.1.1.4.3.1",
            name: "4TB HDD - 3.5\"",
            description: "Armazenamento tradicional para dados de acesso sequencial",
            price: 596,
            functionality: "Disco rígido SATA de 7200RPM otimizado para armazenamento em massa e backup",
            applicability: "Backup, arquivamento, storage secundário, content delivery de arquivos grandes",
            example: "Storage para backup automatizado ou repositório de arquivos de mídia e documentos",
            characteristics: [
              "Interface: SATA 6Gb/s",
              "Capacidade: 4TB",
              "RPM: 7200",
              "Cache: 256MB",
              "Enterprise-grade reliability"
            ],
            tags: ["storage", "hdd", "backup", "archive"],
            observations: "Custo-benefício ideal para armazenamento de grandes volumes de dados",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },
          {
            id: "1.1.1.4.3.2",
            name: "22TB HDD - 3.5\"",
            description: "Armazenamento de altíssima capacidade para big data",
            price: 4000,
            functionality: "HDD de última geração com densidade máxima para armazenamento massivo",
            applicability: "Big data, data lakes, arquivamento de longo prazo, backup enterprise",
            example: "Storage para data lake corporativo ou sistema de arquivamento de documentos",
            characteristics: [
              "Interface: SATA 6Gb/s",
              "Capacidade: 22TB",
              "RPM: 7200",
              "Cache: 512MB",
              "Helium-filled technology"
            ],
            tags: ["storage", "hdd", "high-capacity", "big-data"],
            observations: "Máxima densidade de armazenamento para projetos de big data",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },

          // Controladoras RAID
          {
            id: "1.1.1.4.4.1",
            name: "Hardware RAID Controller",
            description: "Controladora RAID dedicada para máxima performance",
            price: 210,
            functionality: "Controladora RAID com processador dedicado e cache para operações RAID otimizadas",
            applicability: "Ambientes que exigem máxima performance de storage e redundância",
            example: "Servidor de banco de dados crítico com RAID 10 para performance e redundância",
            characteristics: [
              "Processador dedicado",
              "Cache integrado",
              "Suporte RAID 0,1,5,6,10",
              "BBU (Battery Backup Unit)",
              "Performance otimizada"
            ],
            tags: ["raid", "hardware", "performance", "redundancy"],
            observations: "Performance superior comparado ao software RAID, ideal para cargas críticas",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          },
          {
            id: "1.1.1.4.4.2",
            name: "Software RAID",
            description: "RAID via software do sistema operacional",
            price: 0,
            functionality: "Implementação RAID através do sistema operacional sem hardware adicional",
            applicability: "Aplicações básicas que precisam de redundância sem custo adicional",
            example: "Servidor web básico com RAID 1 para redundância de dados",
            characteristics: [
              "Implementação via OS",
              "Sem custo adicional",
              "Suporte RAID 0,1,5",
              "Usa recursos do CPU",
              "Configuração flexível"
            ],
            tags: ["raid", "software", "basic", "cost-effective"],
            observations: "Solução básica e econômica para redundância sem investimento em hardware",
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/"
          }
        ]
      },
      {
        id: "1.2",
        name: "IaaS / Cloud / Nuvem",
        description: "Infraestrutura como serviço escalável e flexível",
        items: [
          {
            id: "1.2.1.1",
            name: "Nuvem Privada Proxmox HA",
            description: "Solução de virtualização open-source com alta disponibilidade",
            functionality: "Cluster Proxmox VE com HA, storage distribuído Ceph, backup automatizado e interface web intuitiva",
            applicability: "Empresas que precisam de controle total sobre infraestrutura virtualizada com custos reduzidos",
            example: "Cluster com 3 nodes para 50 VMs empresariais com failover automático e storage distribuído",
            characteristics: [
              "Hypervisor KVM/LXC",
              "Interface web completa",
              "High Availability cluster",
              "Storage distribuído Ceph",
              "Backup e restore integrados"
            ],
            tags: ["iaas", "proxmox", "private-cloud", "ha", "open-source"],
            observations: "Solução open-source robusta com custos reduzidos de licenciamento e flexibilidade total",
            externalLink: "https://www.eveo.com.br/nuvem-privada/"
          },
          {
            id: "1.2.1.2",
            name: "Nuvem Privada VMware vSphere",
            description: "Solução enterprise de virtualização com recursos avançados",
            functionality: "VMware vSphere com vCenter, vMotion, DRS e HA para máxima performance e disponibilidade",
            applicability: "Grandes empresas que exigem features enterprise e suporte comercial completo",
            example: "Infraestrutura crítica de banco com 100+ VMs e recursos avançados de automação",
            characteristics: [
              "VMware vSphere hypervisor",
              "vCenter management",
              "vMotion live migration",
              "DRS resource scheduling",
              "Enterprise support"
            ],
            tags: ["iaas", "vmware", "private-cloud", "enterprise"],
            observations: "Padrão da indústria para virtualização enterprise com recursos avançados",
            externalLink: "https://www.eveo.com.br/nuvem-privada/"
          },
          {
            id: "1.2.2.1",
            name: "Cloud Server OnApp",
            description: "Instâncias de nuvem pública escaláveis com provisionamento instantâneo",
            functionality: "VMs auto-provisionadas via OnApp com scaling automático, billing por uso e API completa",
            applicability: "Aplicações web, desenvolvimento, testing, workloads variáveis, startups",
            example: "Aplicação web que escala automaticamente durante picos de tráfego ou ambiente de desenvolvimento",
            characteristics: [
              "Provisionamento instantâneo",
              "Auto-scaling horizontal e vertical",
              "Pay-per-use billing",
              "API REST completa",
              "Multiple OS templates"
            ],
            tags: ["iaas", "cloud-server", "scalable", "onapp", "pay-per-use"],
            observations: "Flexibilidade máxima com billing granular por recursos utilizados e scaling automático",
            externalLink: "https://www.hostdime.com.br/produtos/cloud-server/"
          },
          {
            id: "1.2.2.2",
            name: "Data Center Virtual (DCV)",
            description: "Ambiente virtualizado completo com recursos dedicados",
            functionality: "Ambiente virtual isolado com recursos dedicados e gerenciamento centralizado",
            applicability: "Empresas que precisam de ambiente dedicado com flexibilidade de nuvem",
            example: "Ambiente corporativo com múltiplas aplicações e departamentos isolados",
            characteristics: [
              "Recursos dedicados",
              "Isolamento completo",
              "Gerenciamento centralizado",
              "Backup automatizado",
              "SLA enterprise"
            ],
            tags: ["iaas", "dcv", "dedicated", "isolated"],
            observations: "Combina benefícios de dedicado e nuvem com isolamento total",
            externalLink: "https://www.hostdime.com.br/produtos/cloud-server/"
          }
        ]
      },
      {
        id: "1.3",
        name: "DBaaS (Database as a Service)",
        description: "Bases de dados gerenciadas com alta disponibilidade e performance otimizada",
        items: [
          // Essencial
          {
            id: "1.3.1.1",
            name: "DBaaS Essencial (1 CORE / 8GB RAM / 100GB STG)",
            description: "Solução de banco de dados gerenciado para aplicações básicas",
            functionality: "MySQL/PostgreSQL gerenciado com backup automatizado, monitoramento 24x7 e atualizações automáticas",
            applicability: "Aplicações pequenas, blogs, sites corporativos, protótipos, desenvolvimento",
            example: "Database para WordPress corporativo ou aplicação web com até 1000 usuários diários",
            characteristics: [
              "1 vCPU dedicado",
              "8GB RAM otimizada",
              "100GB SSD storage",
              "Backup diário automatizado",
              "Monitoramento 24x7 incluído"
            ],
            tags: ["dbaas", "managed", "essential", "mysql", "postgresql"],
            observations: "Economia de até 40% comparado a soluções auto-gerenciadas com backup e monitoramento incluídos",
            externalLink: "https://www.hostdime.com.br/dbaas-40-de-economia-e-como-usar/"
          },
          {
            id: "1.3.2.1",
            name: "DBaaS Standard (2 CORE / 8GB RAM / 200GB STG)",
            description: "Solução intermediária para aplicações empresariais",
            functionality: "Database gerenciado com performance aprimorada e recursos estendidos para aplicações médias",
            applicability: "Aplicações empresariais médias, e-commerce, ERPs pequenos, APIs com tráfego moderado",
            example: "Database para e-commerce com catálogo de produtos ou ERP para empresa de médio porte",
            characteristics: [
              "2 vCPUs dedicados",
              "8GB RAM otimizada",
              "200GB SSD storage",
              "Backup com retenção estendida",
              "Performance monitoring avançado"
            ],
            tags: ["dbaas", "standard", "ecommerce", "enterprise"],
            observations: "Equilibrio ideal entre performance e custo para aplicações empresariais",
            externalLink: "https://www.hostdime.com.br/dbaas-40-de-economia-e-como-usar/"
          },
          {
            id: "1.3.3.1",
            name: "DBaaS Performance 1 (4 CORE / 8GB RAM / 300GB STG)",
            description: "Alta performance para aplicações intensivas",
            functionality: "Database otimizado para performance com recursos computacionais dedicados",
            applicability: "Aplicações com alta carga, analytics, reporting, sistemas de gestão complexos",
            example: "Sistema de BI com queries complexas ou aplicação de analytics em tempo real",
            characteristics: [
              "4 vCPUs dedicados",
              "8GB RAM high-performance",
              "300GB SSD NVMe storage",
              "Query optimization incluída",
              "Performance tuning proativo"
            ],
            tags: ["dbaas", "performance", "analytics", "high-load"],
            observations: "Otimizado para workloads que exigem processamento intensivo de dados",
            externalLink: "https://www.hostdime.com.br/dbaas-40-de-economia-e-como-usar/"
          },
          {
            id: "1.3.4.1",
            name: "DBaaS Enterprise + (16 CORE / 16GB RAM / 600GB STG)",
            description: "Solução enterprise para aplicações críticas",
            functionality: "Cluster de alta disponibilidade com failover automático, performance máxima e SLA garantido",
            applicability: "E-commerce enterprise, ERP corporativo, CRM crítico, aplicações financeiras, high-traffic websites",
            example: "Database para plataforma de e-commerce com milhões de transações ou sistema bancário core",
            characteristics: [
              "16 vCPUs dedicados",
              "16GB RAM enterprise",
              "600GB SSD NVMe enterprise",
              "HA com failover automático",
              "SLA 99.9% garantido"
            ],
            tags: ["dbaas", "enterprise", "high-availability", "mission-critical"],
            observations: "Máxima performance e disponibilidade com suporte dedicado para cargas críticas",
            externalLink: "https://www.hostdime.com.br/dbaas-40-de-economia-e-como-usar/"
          },

          // Addons
          {
            id: "1.3.5.1",
            name: "DBaaS Addon - Armazenamento Extra (50 GB)",
            description: "Expansão de storage para databases existentes",
            functionality: "Storage adicional SSD para expansão de capacity conforme crescimento dos dados",
            applicability: "Expansão de databases existentes, growth planning, compliance de retenção",
            example: "Expansão de storage para database de e-commerce em crescimento",
            characteristics: [
              "50GB SSD adicional",
              "Expansion sem downtime",
              "Performance mantida",
              "Billing proporcional",
              "Backup incluído"
            ],
            tags: ["dbaas", "addon", "storage", "expansion"],
            observations: "Expansão flexível conforme necessidade de crescimento dos dados"
          },
          {
            id: "1.3.5.2",
            name: "DBaaS Addon - Memória RAM Adicional (1 GB)",
            description: "Memória adicional para otimização de performance",
            functionality: "RAM adicional para cache de queries e otimização de performance de databases",
            applicability: "Otimização de performance, queries complexas, in-memory operations",
            example: "Aumento de cache para database com queries complexas e joins pesados",
            characteristics: [
              "1GB RAM dedicada",
              "Cache optimization",
              "Query performance boost",
              "Upgrade sem downtime",
              "Monitoring incluído"
            ],
            tags: ["dbaas", "addon", "ram", "performance"],
            observations: "Otimização de performance através de cache expandido"
          },
          {
            id: "1.3.5.3",
            name: "DBaaS Addon - vCORE Adicional (1 vCORE)",
            description: "Processamento adicional para cargas computacionais",
            functionality: "vCPU adicional para workloads que exigem mais processamento",
            applicability: "Processamento intensivo, complex queries, concurrent users",
            example: "Aumento de processing power para sistema com muitos usuários simultâneos",
            characteristics: [
              "1 vCPU dedicado",
              "Processing power boost",
              "Concurrent query handling",
              "Scaling sem downtime",
              "Performance monitoring"
            ],
            tags: ["dbaas", "addon", "cpu", "scaling"],
            observations: "Scaling de processamento para workloads crescentes"
          },
          {
            id: "1.3.5.4",
            name: "DBaaS Addon - Retenção de Backup Estendida (30D)",
            description: "Extensão de retenção de backups para compliance",
            functionality: "Retenção estendida de backups para compliance regulatório e recovery de longo prazo",
            applicability: "Compliance regulatório, auditoria, recovery de longo prazo",
            example: "Retenção estendida para compliance LGPD ou auditoria financeira",
            characteristics: [
              "Retenção 30 dias",
              "Compliance ready",
              "Point-in-time recovery",
              "Encrypted storage",
              "Audit trail completo"
            ],
            tags: ["dbaas", "addon", "backup", "compliance"],
            observations: "Essencial para compliance e auditoria com retenção estendida"
          }
        ]
      }
    ]
  }
];