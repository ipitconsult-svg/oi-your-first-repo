import { Category, DataCenter } from "@/types/catalog";

export const dataCenters: DataCenter[] = [
  {
    id: "1.1.0.1",
    name: "João Pessoa (JPA)",
    location: "João Pessoa, Paraíba, Brasil",
    tier: "Tier 3",
    characteristics: [
      "Data center Tier 3 mais certificado da América Latina",
      "Localização estratégica no Nordeste do Brasil",
      "Conectividade internacional otimizada",
      "Redundância total de energia e refrigeração"
    ],
    costBenefit: "Premium com máxima confiabilidade",
    reasons: [
      "Máxima certificação e compliance",
      "Localização estratégica para conectividade internacional",
      "Ideal para aplicações críticas e mission-critical",
      "Menor latência para usuários do Nordeste"
    ],
    certifications: ["ISO 27001", "SOC 2", "Tier 3 Uptime Institute"]
  },
  {
    id: "1.1.0.2",
    name: "São Paulo (SPO)",
    location: "São Paulo, SP, Brasil",
    tier: "Tier 3",
    characteristics: [
      "Localização estratégica no centro financeiro do Brasil",
      "Conectividade premium com múltiplos carriers",
      "Redundância total de infraestrutura",
      "Acesso a principal hub de conectividade nacional"
    ],
    costBenefit: "Estratégico com alta performance",
    reasons: [
      "Centro financeiro e tecnológico do país",
      "Máxima conectividade nacional e internacional",
      "Ideal para aplicações corporativas",
      "Menor latência para a maior parte da população brasileira"
    ],
    certifications: ["ISO 27001", "SOC 2", "Tier 3"]
  },
  {
    id: "1.1.0.3",
    name: "Orlando",
    location: "Orlando, Flórida, EUA",
    tier: "Tier 3",
    characteristics: [
      "Localização estratégica nos EUA",
      "Conectividade premium internacional",
      "Infraestrutura robusta e escalável",
      "Acesso ao mercado norte-americano"
    ],
    costBenefit: "Melhor custo-benefício",
    reasons: [
      "Acesso ao mercado norte-americano",
      "Regulamentações internacionais favoráveis",
      "Conectividade otimizada para América do Norte",
      "Custos operacionais competitivos"
    ],
    certifications: ["SOC 2", "SSAE 18", "HIPAA Compliant"]
  },
  {
    id: "1.1.0.4",
    name: "México",
    location: "Cidade do México, México",
    tier: "Tier 3",
    characteristics: [
      "Gateway para mercado latino-americano",
      "Conectividade regional otimizada",
      "Infraestrutura moderna",
      "Localização estratégica para LATAM"
    ],
    costBenefit: "Estratégico para expansão LATAM",
    reasons: [
      "Porta de entrada para mercado mexicano",
      "Conectividade otimizada para América Central",
      "Regulamentações favoráveis para dados",
      "Custos competitivos na região"
    ],
    certifications: ["ISO 27001", "SOC 2"]
  },
  {
    id: "1.1.0.5",
    name: "Colômbia",
    location: "Bogotá, Colômbia",
    tier: "Tier 3",
    characteristics: [
      "Hub para mercado sul-americano",
      "Conectividade regional premium",
      "Infraestrutura de ponta",
      "Posicionamento estratégico"
    ],
    costBenefit: "Acesso preferencial ao mercado colombiano",
    reasons: [
      "Gateway para mercado colombiano e andino",
      "Conectividade otimizada para região norte da América do Sul",
      "Ambiente regulatório estável",
      "Crescimento do mercado digital local"
    ],
    certifications: ["ISO 27001", "SOC 2"]
  }
];

export const categories: Category[] = [
  {
    id: "1",
    name: "COMPUTE",
    description: "Soluções de processamento e computação, incluindo servidores dedicados, data centers e recursos de hardware.",
    subcategories: [
      {
        id: "1.1",
        name: "Bare Metal (Servidor Dedicado)",
        description: "Servidores físicos dedicados com recursos exclusivos, oferecendo máxima performance e controle total sobre a infraestrutura.",
        items: [
          {
            id: "1.1.1.1.1",
            name: "4-Core E3-1271 v3 3.6Ghz w/HT",
            description: "Processador Intel Xeon E3-1271 v3 com 4 cores e Hyper-Threading",
            functionality: "Processamento de aplicações de pequeno a médio porte com alta frequência de clock",
            applicability: "Ideal para aplicações web, pequenos bancos de dados, servidores de desenvolvimento",
            example: "Hospedagem de sites WordPress, APIs REST, ambientes de desenvolvimento",
            price: 100,
            characteristics: [
              "4 cores físicos + 4 threads",
              "Frequência base de 3.6GHz",
              "Cache L3 de 8MB",
              "TDP de 80W"
            ],
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/",
            tags: ["cpu", "intel", "xeon", "entry-level", "web-hosting"],
            observations: "Excelente para aplicações que necessitam de alta frequência single-core"
          },
          {
            id: "1.1.1.1.2",
            name: "48-Core AMD EPYC 7k62 3.3Ghz w/HT",
            description: "Processador AMD EPYC 7K62 com 48 cores e Simultaneous Multithreading",
            functionality: "Processamento massivamente paralelo para cargas de trabalho intensivas",
            applicability: "Ideal para virtualização, containers, HPC, analytics, AI/ML workloads",
            example: "Clusters Kubernetes, análise de big data, simulações científicas, treinamento de IA",
            price: 5500,
            characteristics: [
              "48 cores físicos + 96 threads",
              "Frequência base de 2.3GHz, boost até 3.3GHz",
              "Cache L3 de 256MB",
              "Arquitetura Zen 2"
            ],
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/",
            tags: ["cpu", "amd", "epyc", "high-performance", "virtualization", "ai-ml"],
            observations: "Líder em performance por dólar para workloads paralelos intensivos"
          },
          {
            id: "1.1.1.2.1",
            name: "RTX 4090 (24GB VRAM)",
            description: "Placa gráfica NVIDIA GeForce RTX 4090 com 24GB de VRAM GDDR6X",
            functionality: "Aceleração de computação paralela, renderização e processamento de IA",
            applicability: "Machine Learning, Deep Learning, renderização 3D, mineração, simulações",
            example: "Treinamento de modelos de IA, renderização de vídeos 4K/8K, simulações científicas",
            price: 22000,
            characteristics: [
              "16384 CUDA Cores",
              "24GB GDDR6X VRAM",
              "384-bit memory interface",
              "Ada Lovelace architecture"
            ],
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/",
            tags: ["gpu", "nvidia", "rtx", "ai-ml", "rendering", "high-end"],
            observations: "GPU mais poderosa da linha consumer, ideal para workloads profissionais de IA"
          },
          {
            id: "1.1.1.2.2",
            name: "RTX 5090 (32GB VRAM)",
            description: "Placa gráfica NVIDIA GeForce RTX 5090 com 32GB de VRAM GDDR7",
            functionality: "Aceleração de computação paralela de última geração com memória expandida",
            applicability: "Large Language Models, processamento de vídeo 8K, simulações complexas",
            example: "Fine-tuning de LLMs, processamento de datasets massivos, renderização cinematográfica",
            price: 23000,
            characteristics: [
              "21760 CUDA Cores",
              "32GB GDDR7 VRAM",
              "512-bit memory interface",
              "Blackwell architecture"
            ],
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/",
            tags: ["gpu", "nvidia", "rtx", "ai-ml", "rendering", "flagship"],
            observations: "GPU de nova geração com maior capacidade de VRAM para modelos de IA maiores"
          },
          {
            id: "1.1.1.4.1.1",
            name: "8TB NVMe PCIe M.2 SSD",
            description: "SSD NVMe de alta capacidade com interface PCIe M.2",
            functionality: "Armazenamento de ultra-alta velocidade com acesso direto ao barramento PCIe",
            applicability: "Databases de alta performance, cache, aplicações I/O intensivas",
            example: "Bancos de dados em memória, sistemas de cache Redis, análise de logs em tempo real",
            price: 7000,
            characteristics: [
              "Capacidade de 8TB",
              "Interface PCIe 4.0 x4",
              "Velocidades de leitura até 7000 MB/s",
              "IOPS superiores a 1M"
            ],
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/",
            tags: ["storage", "nvme", "ssd", "high-performance", "m2"],
            observations: "Ideal para aplicações que demandam máxima velocidade de I/O e grande capacidade"
          },
          {
            id: "1.1.1.3.1",
            name: "64GB DDR4",
            description: "Módulo de memória DDR4 de 64GB para alta capacidade",
            functionality: "Fornece grande quantidade de memória para aplicações que requerem muito RAM",
            applicability: "Virtualização, bancos de dados em memória, aplicações de big data",
            example: "Máquinas virtuais múltiplas, SAP HANA, análise de datasets grandes",
            price: 450,
            characteristics: [
              "Capacidade de 64GB",
              "Tecnologia DDR4",
              "ECC para correção de erros",
              "Velocidades até 3200 MHz"
            ],
            externalLink: "https://www.hostdime.com.br/servidor-dedicado/",
            tags: ["memory", "ddr4", "high-capacity", "ecc"],
            observations: "Essencial para aplicações que processam grandes volumes de dados na memória"
          }
        ]
      }
    ]
  }
];