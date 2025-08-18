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
                  {
                    id: "1.1.1.1.1",
                    name: "4-Core E3-1271 v3 3.6Ghz w/HT",
                    description: "Processador entry-level para aplicações básicas e desenvolvimento",
                    price: 100,
                    functionality: "Quad-core com Hyper-Threading para paralelização básica de tarefas",
                    applicability: "Servidores web básicos, desenvolvimento, aplicações de baixo volume, sites pequenos",
                    example: "Site WordPress com tráfego moderado ou ambiente de desenvolvimento",
                    characteristics: ["4 cores físicos", "8 threads", "3.6GHz base clock", "Hyper-Threading", "Tecnologia 22nm"],
                    tags: ["cpu", "entry-level", "e3", "quad-core", "development"]
                  },
                  {
                    id: "1.1.1.1.2",
                    name: "4-Core Xeon E3-1270 3.4Ghz w/HT",
                    description: "Processador para aplicações de pequeno a médio porte",
                    price: 200,
                    functionality: "Processamento eficiente para aplicações single-threaded e multi-threaded moderadas",
                    applicability: "Aplicações web, pequenos databases, servidores de arquivos, e-commerce médio",
                    example: "Servidor de aplicação para e-commerce de médio porte ou database MySQL",
                    characteristics: ["4 cores físicos", "8 threads", "3.4GHz base clock", "Hyper-Threading", "Cache inteligente"],
                    tags: ["cpu", "xeon", "quad-core", "web-server", "database"]
                  },
                  {
                    id: "1.1.1.1.3",
                    name: "4-Core E3-1230 v5 3.4Ghz w/HT",
                    description: "Processador Skylake para aplicações modernas",
                    price: 200,
                    functionality: "Arquitetura Skylake com eficiência energética melhorada",
                    applicability: "Aplicações modernas, virtualização básica, desenvolvimento",
                    example: "Servidor de aplicação moderna ou ambiente de testes",
                    characteristics: ["4 cores físicos", "8 threads", "3.4GHz base", "Skylake", "DDR4 support"],
                    tags: ["cpu", "e3", "skylake", "modern", "ddr4"]
                  },
                  {
                    id: "1.1.1.1.4",
                    name: "4-Core E3-1231 v3 3.4Ghz w/HT",
                    description: "Processador Haswell otimizado para workloads diversos",
                    price: 418,
                    functionality: "Haswell com otimizações para cargas de trabalho variadas",
                    applicability: "Aplicações web, pequenos bancos de dados, serviços de rede",
                    example: "Servidor web com múltiplos serviços ou pequeno database",
                    characteristics: ["4 cores físicos", "8 threads", "3.4GHz base", "Haswell", "22nm"],
                    tags: ["cpu", "e3", "haswell", "versatile", "web"]
                  },
                  {
                    id: "1.1.1.1.5",
                    name: "4-Core Xeon E5530 2.4GHz",
                    description: "Processador básico para cargas de trabalho simples",
                    price: 200,
                    functionality: "Processamento básico para aplicações não críticas",
                    applicability: "Aplicações básicas, backup servers, desenvolvimento simples",
                    example: "Servidor de backup ou ambiente de desenvolvimento básico",
                    characteristics: ["4 cores físicos", "2.4GHz base", "Nehalem", "Basic performance"],
                    tags: ["cpu", "xeon", "basic", "backup", "simple"]
                  },
                  {
                    id: "1.1.1.1.6",
                    name: "6-Core Xeon E5-2620 v2 2.1GHz w/HT",
                    description: "Processador hex-core para aplicações médias",
                    price: 200,
                    functionality: "Seis cores para melhor paralelização de tarefas médias",
                    applicability: "Aplicações de médio porte, virtualização básica, databases médios",
                    example: "Ambiente de virtualização com poucas VMs ou database médio",
                    characteristics: ["6 cores físicos", "12 threads", "2.1GHz base", "Ivy Bridge-EP", "15MB cache"],
                    tags: ["cpu", "xeon", "hex-core", "virtualization", "medium"]
                  },
                  {
                    id: "1.1.1.1.7",
                    name: "8-Core Xeon E5-2470 2.30GHz w/HT",
                    description: "Processador octa-core para cargas intensivas",
                    price: 800,
                    functionality: "Oito cores para aplicações que demandam paralelização",
                    applicability: "Virtualização média, databases, aplicações multi-threaded",
                    example: "Servidor de virtualização médio ou database PostgreSQL",
                    characteristics: ["8 cores físicos", "16 threads", "2.3GHz base", "Sandy Bridge-EP", "20MB cache"],
                    tags: ["cpu", "xeon", "octa-core", "intensive", "parallel"]
                  },
                  {
                    id: "1.1.1.1.8",
                    name: "8-Core Xeon E5-2620 v4 2.1 GHz w/HT",
                    description: "Processador Broadwell para eficiência energética",
                    price: 500,
                    functionality: "Broadwell com melhor eficiência e performance por watt",
                    applicability: "Ambientes que valorizam eficiência energética, virtualização",
                    example: "Datacenter com foco em eficiência ou ambiente sustentável",
                    characteristics: ["8 cores físicos", "16 threads", "2.1GHz base", "Broadwell-EP", "20MB cache"],
                    tags: ["cpu", "xeon", "broadwell", "efficient", "green"]
                  },
                  {
                    id: "1.1.1.1.9",
                    name: "8-Core Xeon E5-2650 v2 2.6 GHz w/HT",
                    description: "Processador balanceado para workloads empresariais",
                    price: 400,
                    functionality: "Performance balanceada para aplicações empresariais diversas",
                    applicability: "Aplicações empresariais, ERP, virtualização, analytics básico",
                    example: "Servidor ERP ou sistema de analytics empresarial",
                    characteristics: ["8 cores físicos", "16 threads", "2.6GHz base", "Ivy Bridge-EP", "20MB cache"],
                    tags: ["cpu", "xeon", "balanced", "enterprise", "erp"]
                  },
                  {
                    id: "1.1.1.1.10",
                    name: "10-Core Xeon E5-2660 v2 2.2 Ghz w/HT",
                    description: "Processador de médio porte para aplicações empresariais",
                    price: 700,
                    functionality: "Dez cores para paralelização de workloads empresariais",
                    applicability: "Virtualização, databases médios, aplicações empresariais, analytics",
                    example: "Servidor de virtualização com múltiplas VMs ou database PostgreSQL enterprise",
                    characteristics: ["10 cores físicos", "20 threads", "2.2GHz base", "Ivy Bridge-EP", "25MB cache"],
                    tags: ["cpu", "xeon", "multi-core", "enterprise", "virtualization"]
                  },
                  {
                    id: "1.1.1.1.11",
                    name: "10-Core Xeon E5-2660 v3 2.6 Ghz w/HT",
                    description: "Processador Haswell com performance aprimorada",
                    price: 700,
                    functionality: "Haswell com melhor performance e instruções AVX2",
                    applicability: "HPC básico, virtualização avançada, analytics, simulações",
                    example: "Cluster de computação científica ou analytics avançado",
                    characteristics: ["10 cores físicos", "20 threads", "2.6GHz base", "Haswell-EP", "25MB cache"],
                    tags: ["cpu", "xeon", "haswell", "hpc", "analytics"]
                  },
                  {
                    id: "1.1.1.1.12",
                    name: "10-Core Xeon Silver 4114 2.20Ghz w/HT",
                    description: "Processador Skylake-SP para aplicações modernas",
                    price: 800,
                    functionality: "Skylake-SP com arquitetura moderna e suporte DDR4 avançado",
                    applicability: "Aplicações modernas, containers, microserviços, cloud native",
                    example: "Plataforma de containers ou aplicação cloud native",
                    characteristics: ["10 cores físicos", "20 threads", "2.2GHz base", "Skylake-SP", "13.75MB cache"],
                    tags: ["cpu", "xeon-silver", "skylake-sp", "modern", "containers"]
                  },
                  {
                    id: "1.1.1.1.13",
                    name: "10-Core Xeon Silver 4210 2.2 GHz w/HT",
                    description: "Processador Silver series para workloads balanceados",
                    price: 800,
                    functionality: "Cascade Lake com otimizações de segurança e performance",
                    applicability: "Workloads balanceados, aplicações empresariais, virtualização",
                    example: "Ambiente empresarial padrão ou virtualização corporativa",
                    characteristics: ["10 cores físicos", "20 threads", "2.2GHz base", "Cascade Lake", "13.75MB cache"],
                    tags: ["cpu", "xeon-silver", "cascade-lake", "balanced", "corporate"]
                  },
                  {
                    id: "1.1.1.1.14",
                    name: "10-Core Xeon E5-2650L v2 1.7GHz",
                    description: "Processador low-power para eficiência energética máxima",
                    price: 500,
                    functionality: "Versão low-power com consumo reduzido mantendo performance",
                    applicability: "Ambientes com restrição energética, datacenters verdes, operação 24x7",
                    example: "Datacenter sustentável ou ambiente com limitação energética",
                    characteristics: ["10 cores físicos", "20 threads", "1.7GHz base", "Low power", "25MB cache"],
                    tags: ["cpu", "xeon", "low-power", "efficient", "green"]
                  },
                  {
                    id: "1.1.1.1.15",
                    name: "12-Core Xeon E5-2650 v4 2.2 GHz w/HT",
                    description: "Processador Broadwell para alta densidade de cores",
                    price: 1000,
                    functionality: "Broadwell com 12 cores para aplicações que exigem paralelização",
                    applicability: "Virtualização pesada, HPC, analytics, compilação paralela",
                    example: "Farm de compilação ou cluster de analytics distribuído",
                    characteristics: ["12 cores físicos", "24 threads", "2.2GHz base", "Broadwell-EP", "30MB cache"],
                    tags: ["cpu", "xeon", "high-density", "parallel", "compilation"]
                  },
                  {
                    id: "1.1.1.1.16",
                    name: "12-Core Xeon E5-2673 v3 2.40Ghz w/HT",
                    description: "Processador Haswell otimizado para cloud computing",
                    price: 500,
                    functionality: "Haswell otimizado especificamente para workloads de nuvem",
                    applicability: "Cloud computing, virtualização massiva, SaaS platforms",
                    example: "Plataforma SaaS multi-tenant ou nuvem privada",
                    characteristics: ["12 cores físicos", "24 threads", "2.4GHz base", "Haswell-EP", "30MB cache"],
                    tags: ["cpu", "xeon", "cloud-optimized", "saas", "multi-tenant"]
                  },
                  {
                    id: "1.1.1.1.17",
                    name: "12-Core Xeon Gold 5118 2.3 GHz w/HT",
                    description: "Processador Gold series para aplicações críticas",
                    price: 2000,
                    functionality: "Skylake-SP Gold com recursos enterprise avançados",
                    applicability: "Aplicações críticas, HPC, analytics avançado, IA básica",
                    example: "Sistema crítico empresarial ou workload de machine learning",
                    characteristics: ["12 cores físicos", "24 threads", "2.3GHz base", "Skylake-SP Gold", "16.5MB cache"],
                    tags: ["cpu", "xeon-gold", "critical", "hpc", "machine-learning"]
                  },
                  {
                    id: "1.1.1.1.18",
                    name: "12-Core Xeon Silver 4116 2.1Ghz w/HT",
                    description: "Processador Silver para workloads empresariais padrão",
                    price: 500,
                    functionality: "Skylake-SP Silver com boa relação custo-benefício",
                    applicability: "Aplicações empresariais padrão, virtualização média, databases",
                    example: "Servidor empresarial padrão ou ambiente de desenvolvimento",
                    characteristics: ["12 cores físicos", "24 threads", "2.1GHz base", "Skylake-SP Silver", "16.5MB cache"],
                    tags: ["cpu", "xeon-silver", "standard", "cost-effective", "business"]
                  },
                  {
                    id: "1.1.1.1.19",
                    name: "14-Core Xeon E5-2680 v4 2.4GHz w/HT",
                    description: "Processador Broadwell de alta performance",
                    price: 700,
                    functionality: "Broadwell com 14 cores para máxima paralelização",
                    applicability: "HPC, simulações científicas, renderização, analytics massivo",
                    example: "Simulação científica ou rendering farm para cinema",
                    characteristics: ["14 cores físicos", "28 threads", "2.4GHz base", "Broadwell-EP", "35MB cache"],
                    tags: ["cpu", "xeon", "high-performance", "scientific", "rendering"]
                  },
                  {
                    id: "1.1.1.1.20",
                    name: "14-Core Xeon E5-2697 v3 2.60 GHz w/HT",
                    description: "Processador Haswell para workloads intensivos",
                    price: 600,
                    functionality: "Haswell com alta frequência base para performance single-thread",
                    applicability: "Workloads mistos, gaming servers, aplicações que precisam single-thread",
                    example: "Servidor de gaming ou aplicação que combina single e multi-thread",
                    characteristics: ["14 cores físicos", "28 threads", "2.6GHz base", "Haswell-EP", "35MB cache"],
                    tags: ["cpu", "xeon", "mixed-workload", "gaming", "high-frequency"]
                  },
                  {
                    id: "1.1.1.1.21",
                    name: "16-Core Xeon Gold 6130 2.1Ghz w/HT",
                    description: "Processador Gold premium para aplicações enterprise",
                    price: 1500,
                    functionality: "Skylake-SP Gold com 16 cores para aplicações enterprise críticas",
                    applicability: "Aplicações enterprise críticas, databases grandes, virtualização premium",
                    example: "Database Oracle RAC ou ambiente de virtualização enterprise",
                    characteristics: ["16 cores físicos", "32 threads", "2.1GHz base", "Skylake-SP Gold", "22MB cache"],
                    tags: ["cpu", "xeon-gold", "premium", "enterprise", "database"]
                  },
                  {
                    id: "1.1.1.1.22",
                    name: "16-Core Xeon Silver 4216 2.1 GHz w/HT",
                    description: "Processador Silver de alta densidade para workloads escaláveis",
                    price: 800,
                    functionality: "Cascade Lake Silver com 16 cores para workloads escaláveis",
                    applicability: "Workloads escaláveis, containers, microserviços, cloud native",
                    example: "Plataforma de microserviços ou ambiente de containers",
                    characteristics: ["16 cores físicos", "32 threads", "2.1GHz base", "Cascade Lake Silver", "22MB cache"],
                    tags: ["cpu", "xeon-silver", "scalable", "containers", "microservices"]
                  },
                  {
                    id: "1.1.1.1.23",
                    name: "18-Core Xeon E5-2686 v4 2.3 GHz w/HT",
                    description: "Processador Broadwell de máxima densidade",
                    price: 1200,
                    functionality: "Broadwell com 18 cores para máxima densidade computacional",
                    applicability: "HPC avançado, big data processing, simulações complexas",
                    example: "Cluster de HPC ou processamento de big data com Spark",
                    characteristics: ["18 cores físicos", "36 threads", "2.3GHz base", "Broadwell-EP", "45MB cache"],
                    tags: ["cpu", "xeon", "maximum-density", "hpc", "big-data"]
                  },
                  {
                    id: "1.1.1.1.24",
                    name: "18-Core Xeon E5-2699 v3 2.3 Ghz w/HT",
                    description: "Processador flagship Haswell para workloads extremos",
                    price: 1200,
                    functionality: "Haswell flagship com 18 cores para os workloads mais exigentes",
                    applicability: "Workloads extremos, pesquisa científica, modelagem complexa",
                    example: "Pesquisa científica avançada ou modelagem financeira complexa",
                    characteristics: ["18 cores físicos", "36 threads", "2.3GHz base", "Haswell-EP", "45MB cache"],
                    tags: ["cpu", "xeon", "flagship", "extreme", "scientific"]
                  },
                  {
                    id: "1.1.1.1.25",
                    name: "20-Core Xeon 2673 V4 2.3Ghz (3.3 Turbo)",
                    description: "Processador de 20 cores para cargas máximas",
                    price: 0,
                    functionality: "Broadwell com 20 cores e turbo boost para picos de performance",
                    applicability: "Cargas máximas, HPC extremo, simulações de larga escala",
                    example: "Simulação climática ou modelagem de fluidos computacional",
                    characteristics: ["20 cores físicos", "40 threads", "2.3GHz base", "3.3GHz turbo", "Broadwell-EP"],
                    tags: ["cpu", "xeon", "maximum-cores", "turbo", "extreme-hpc"],
                    observations: "Consulte preço e disponibilidade"
                  },
                  {
                    id: "1.1.1.1.26",
                    name: "20-Core Xeon Gold 6138 2.0Ghz w/HT",
                    description: "Processador Gold premium para workloads massivos",
                    price: 6000,
                    functionality: "Skylake-SP Gold com 20 cores para workloads massivos enterprise",
                    applicability: "Workloads massivos, IA enterprise, analytics de grande escala",
                    example: "Plataforma de IA enterprise ou analytics de petabytes",
                    characteristics: ["20 cores físicos", "40 threads", "2.0GHz base", "Skylake-SP Gold", "27.5MB cache"],
                    tags: ["cpu", "xeon-gold", "massive", "ai-enterprise", "petabyte"]
                  },
                  {
                    id: "1.1.1.1.27",
                    name: "22-Core E5-2699 v4 2.2Ghz w/HT",
                    description: "Processador flagship Broadwell para performance máxima",
                    price: 3500,
                    functionality: "Broadwell flagship com 22 cores para performance computacional máxima",
                    applicability: "Performance máxima, HPC de ponta, research computing",
                    example: "Supercomputação acadêmica ou pesquisa de ponta em física",
                    characteristics: ["22 cores físicos", "44 threads", "2.2GHz base", "Broadwell-EP", "55MB cache"],
                    tags: ["cpu", "xeon", "flagship", "maximum-performance", "supercomputing"]
                  },
                  {
                    id: "1.1.1.1.28",
                    name: "48-Core AMD EPYC 7k62 3.3Ghz w/HT",
                    description: "Processador AMD flagship para máxima densidade de cores",
                    price: 5500,
                    functionality: "AMD EPYC com 48 cores para máxima densidade computacional e paralelização extrema",
                    applicability: "Virtualização massiva, HPC extremo, big data, IA distribuída, containers em escala",
                    example: "Cluster de virtualização enterprise ou processamento de big data distribuído com Apache Spark",
                    characteristics: ["48 cores físicos", "96 threads", "3.3GHz base", "7nm Zen 2", "256MB L3 cache", "8-channel DDR4"],
                    tags: ["cpu", "amd", "epyc", "flagship", "maximum-cores", "enterprise", "virtualization", "hpc"]
                  }
                ]
              },
              {
                id: "1.1.1.2",
                name: "GPU",
                description: "Placas gráficas especializadas para aceleração de workloads específicos",
                items: [
                  {
                    id: "1.1.1.2.1",
                    name: "RTX 4060 Ti (16 GB vRAM)",
                    description: "GPU para desenvolvimento IA, rendering e computação paralela",
                    price: 4900,
                    functionality: "Aceleração de cargas de trabalho paralelas, ray tracing e inferência IA",
                    applicability: "Machine Learning, rendering 3D, simulações, desenvolvimento IA, computer vision",
                    example: "Treinamento de modelos de ML médios ou rendering de animações 3D",
                    characteristics: ["16GB GDDR6", "RTX 4060 Ti", "Ada Lovelace", "DLSS 3", "AV1 encoding"],
                    tags: ["gpu", "rtx", "ai", "rendering", "development"]
                  },
                  {
                    id: "1.1.1.2.2",
                    name: "RTX 4090 (24GB VRAM)",
                    description: "GPU flagship para máxima performance em IA e rendering profissional",
                    price: 22000,
                    functionality: "Performance extrema para workloads GPU-intensivos e IA avançada",
                    applicability: "IA avançada, rendering profissional, simulações complexas, pesquisa científica",
                    example: "Treinamento de modelos LLM ou rendering 8K para cinema",
                    characteristics: ["24GB GDDR6X", "RTX 4090", "16384 CUDA cores", "Ada Lovelace", "3rd gen RT cores"],
                    tags: ["gpu", "rtx", "flagship", "ai", "professional", "rendering"]
                  },
                  {
                    id: "1.1.1.2.3",
                    name: "RTX 5090 (32GB VRAM)",
                    description: "GPU de última geração para aplicações mais exigentes",
                    price: 23000,
                    functionality: "Tecnologia de ponta para aplicações de IA generativa e rendering avançado",
                    applicability: "IA generativa, modelos LLM grandes, rendering 8K+, pesquisa avançada",
                    example: "Inferência de modelos GPT ou rendering de filmes em resolução máxima",
                    characteristics: ["32GB GDDR7", "RTX 5090", "Next-gen architecture", "Advanced AI acceleration"],
                    tags: ["gpu", "rtx", "next-gen", "generative-ai", "maximum-performance"]
                  },
                  {
                    id: "1.1.1.2.4",
                    name: "AMD RADEON XTX 7900 (24GB RAM)",
                    description: "GPU AMD de alta performance para workloads de computação",
                    price: 7000,
                    functionality: "Alternativa AMD para computação paralela e renderização",
                    applicability: "Computação científica, rendering, desenvolvimento de jogos, OpenCL",
                    example: "Simulações científicas ou desenvolvimento de aplicações gráficas",
                    characteristics: ["24GB GDDR6", "RDNA 3", "96 Compute Units", "OpenCL support"],
                    tags: ["gpu", "amd", "radeon", "compute", "scientific"]
                  }
                ]
              },
              {
                id: "1.1.1.3",
                name: "Memória",
                description: "Módulos de RAM DDR3 e DDR4 para diferentes necessidades de performance",
                items: [
                  {
                    id: "1.1.1.3.1",
                    name: "16GB DDR3",
                    description: "Memória básica para sistemas legacy e aplicações simples",
                    price: 50,
                    functionality: "RAM para sistemas que ainda requerem tecnologia DDR3",
                    applicability: "Sistemas legacy, aplicações básicas, servidores antigos em migração",
                    example: "Servidor web básico ou aplicação legacy em migração",
                    characteristics: ["16GB capacidade", "DDR3 SDRAM", "ECC opcional", "Velocidades padrão DDR3"],
                    tags: ["memory", "ddr3", "basic", "legacy"]
                  },
                  {
                    id: "1.1.1.3.2",
                    name: "32GB DDR3",
                    description: "Memória DDR3 de maior capacidade para sistemas específicos",
                    price: 150,
                    functionality: "Maior capacidade em tecnologia DDR3 para sistemas específicos",
                    applicability: "Sistemas legacy com maior demanda de RAM, ambientes específicos",
                    example: "Servidor de arquivos ou sistema específico que requer DDR3",
                    characteristics: ["32GB capacidade", "DDR3 SDRAM", "ECC support", "Múltiplos módulos"],
                    tags: ["memory", "ddr3", "medium", "legacy-plus"]
                  },
                  {
                    id: "1.1.1.3.3",
                    name: "16GB DDR4",
                    description: "Memória moderna para aplicações atuais",
                    price: 150,
                    functionality: "RAM moderna com melhor eficiência energética e performance",
                    applicability: "Aplicações modernas, virtualização básica, databases médios",
                    example: "Servidor de aplicação web moderna ou database MySQL",
                    characteristics: ["16GB capacidade", "DDR4 SDRAM", "ECC support", "2400MHz ou superior"],
                    tags: ["memory", "ddr4", "modern", "standard"]
                  },
                  {
                    id: "1.1.1.3.4",
                    name: "32GB DDR4",
                    description: "Memória de alta capacidade para aplicações exigentes",
                    price: 250,
                    functionality: "Grande volume de RAM para aplicações memory-intensive",
                    applicability: "Virtualização, databases grandes, cache em memória, analytics",
                    example: "Servidor de virtualização com múltiplas VMs ou cache Redis grande",
                    characteristics: ["32GB capacidade", "DDR4 SDRAM", "ECC registered", "Alta velocidade"],
                    tags: ["memory", "ddr4", "high-capacity", "virtualization"]
                  },
                  {
                    id: "1.1.1.3.5",
                    name: "64GB DDR4",
                    description: "Memória enterprise para máxima performance",
                    price: 450,
                    functionality: "Volume máximo de RAM para aplicações enterprise críticas",
                    applicability: "Databases enterprise, virtualização pesada, analytics em memória, HPC",
                    example: "Database Oracle RAC ou cluster de analytics com dados em memória",
                    characteristics: ["64GB capacidade", "DDR4 SDRAM", "ECC registered", "Enterprise grade", "Load reduced"],
                    tags: ["memory", "ddr4", "enterprise", "maximum", "critical"]
                  }
                ]
              },
              {
                id: "1.1.1.4",
                name: "Armazenamento",
                description: "Soluções completas de storage interno para diferentes necessidades de performance",
                items: [],
                subcategories: [
                  {
                    id: "1.1.1.4.1",
                    name: "Discos Internos",
                    description: "Storage interno direto conectado ao servidor",
                    items: [],
                    subcategories: [
                      {
                        id: "1.1.1.4.1.1",
                        name: "NVMe",
                        description: "Storage de máxima performance com protocolo NVMe sobre PCIe",
                        items: [
                          {
                            id: "1.1.1.4.1.1.1",
                            name: "1TB NVMe Enterprise (Kingston NV2)",
                            description: "SSD NVMe enterprise para aplicações críticas com latência mínima",
                            price: 400,
                            functionality: "Storage de ultra-alta velocidade com protocolo NVMe 1.3",
                            applicability: "Databases críticos, cache de alta velocidade, aplicações latency-sensitive",
                            example: "Database transacional com milhares de IOPS ou cache Redis crítico",
                            characteristics: ["1TB capacidade", "PCIe 3.0 x4", "Kingston NV2", "Enterprise grade", "3D NAND"],
                            tags: ["storage", "nvme", "enterprise", "high-speed", "critical"]
                          },
                          {
                            id: "1.1.1.4.1.1.2",
                            name: "1TB NVMe Enterprise Plus (Kingston KC3000)",
                            description: "SSD NVMe premium para workloads de alta performance",
                            price: 699,
                            functionality: "Performance premium com cache SLC e controlador avançado",
                            applicability: "Databases enterprise, aplicações críticas, workloads intensivos",
                            example: "Database PostgreSQL com alta concorrência ou aplicação real-time",
                            characteristics: ["1TB capacidade", "PCIe 4.0 x4", "Kingston KC3000", "3D TLC NAND", "Cache SLC"],
                            tags: ["storage", "nvme", "premium", "enterprise-plus", "high-performance"]
                          },
                          {
                            id: "1.1.1.4.1.1.3",
                            name: "2TB NVMe Enterprise (Kingston NV2)",
                            description: "SSD NVMe enterprise de alta capacidade",
                            price: 900,
                            functionality: "Capacidade expandida com performance enterprise",
                            applicability: "Databases médios, aplicações com grande volume de dados",
                            example: "Sistema ERP com dados históricos ou data warehouse médio",
                            characteristics: ["2TB capacidade", "PCIe 3.0 x4", "Kingston NV2", "Enterprise grade", "3D NAND"],
                            tags: ["storage", "nvme", "enterprise", "medium-capacity", "data-intensive"]
                          },
                          {
                            id: "1.1.1.4.1.1.4",
                            name: "2TB NVMe Enterprise Plus (Kingston KC3000)",
                            description: "SSD NVMe premium com máxima performance sustentada",
                            price: 1600,
                            functionality: "Performance premium com cache SLC e controlador avançado",
                            applicability: "Workloads intensivos, databases enterprise, applications tier-1",
                            example: "Database Oracle com workload OLTP intensivo",
                            characteristics: ["2TB capacidade", "PCIe 4.0 x4", "Kingston KC3000", "3D TLC NAND", "Cache SLC"],
                            tags: ["storage", "nvme", "premium", "enterprise-plus", "maximum-performance"]
                          },
                          {
                            id: "1.1.1.4.1.1.5",
                            name: "4TB NVMe Enterprise (Kingston NV2)",
                            description: "SSD NVMe enterprise de alta capacidade para grandes workloads",
                            price: 1849,
                            functionality: "Grande capacidade com performance enterprise consistente",
                            applicability: "Big data médio, consolidação de storage, aplicações data-intensive",
                            example: "Data lake para analytics ou consolidação de múltiplos sistemas",
                            characteristics: ["4TB capacidade", "PCIe 3.0 x4", "Kingston NV2", "Enterprise grade", "High endurance"],
                            tags: ["storage", "nvme", "enterprise", "high-capacity", "consolidation"]
                          },
                          {
                            id: "1.1.1.4.1.1.6",
                            name: "4TB NVMe Enterprise Plus (Kingston KC3000)",
                            description: "SSD NVMe premium de alta capacidade para workloads críticos",
                            price: 3200,
                            functionality: "Capacidade premium com performance sustentada máxima",
                            applicability: "Databases críticos grandes, analytics em tempo real, aplicações tier-0",
                            example: "Database Oracle RAC ou sistema de analytics em tempo real",
                            characteristics: ["4TB capacidade", "PCIe 4.0 x4", "Kingston KC3000", "Premium controller", "Advanced ECC"],
                            tags: ["storage", "nvme", "premium", "enterprise-plus", "tier-0", "critical"]
                          },
                          {
                            id: "1.1.1.4.1.1.7",
                            name: "8TB NVMe Enterprise Plus (WD BLACK)",
                            description: "SSD NVMe de máxima capacidade para workloads extremos",
                            price: 7600,
                            functionality: "Capacidade máxima com performance enterprise sustentada",
                            applicability: "Big data, analytics massivos, databases distribuídos",
                            example: "Data lake para analytics ou database distribuído NoSQL",
                            characteristics: ["8TB capacidade", "PCIe 4.0", "WD BLACK", "Game Mode 2.0", "Advanced thermal"],
                            tags: ["storage", "nvme", "maximum-capacity", "big-data", "extreme"]
                          },
                          {
                            id: "1.1.1.4.1.1.8",
                            name: "8TB NVMe PCIe M.2 SSD",
                            description: "SSD NVMe M.2 de máxima capacidade para aplicações especializadas",
                            price: 7000,
                            functionality: "Forma M.2 com capacidade máxima para slots específicos",
                            applicability: "Aplicações especializadas, form factor específico, workstations",
                            example: "Workstation para edição de vídeo 8K ou desenvolvimento de jogos",
                            characteristics: ["8TB capacidade", "M.2 form factor", "PCIe interface", "Maximum density", "Specialized"],
                            tags: ["storage", "nvme", "m2", "specialized", "workstation", "maximum-capacity"]
                          }
                        ]
                      },
                      {
                        id: "1.1.1.4.1.2",
                        name: "SSD",
                        description: "Solid State Drives SATA para performance balanceada e confiabilidade",
                        items: [
                          {
                            id: "1.1.1.4.1.2.1",
                            name: "240GB SSD - 2.5\"",
                            description: "SSD básico ideal para sistema operacional e aplicações leves",
                            price: 180,
                            functionality: "Storage sólido para boot rápido e aplicações básicas",
                            applicability: "Sistema operacional, aplicações pequenas, cache secundário",
                            example: "Disco de boot do servidor ou cache para aplicações web",
                            characteristics: ["240GB capacidade", "2.5\" SATA", "TLC NAND", "DRAM cache"],
                            tags: ["storage", "ssd", "basic", "boot", "os"]
                          },
                          {
                            id: "1.1.1.4.1.2.2",
                            name: "480GB SSD - 2.5\"",
                            description: "SSD intermediário para aplicações médias",
                            price: 480,
                            functionality: "Capacidade balanceada para aplicações de médio porte",
                            applicability: "Aplicações web, pequenos databases, cache de aplicação",
                            example: "Storage para CMS ou sistema de e-commerce pequeno",
                            characteristics: ["480GB capacidade", "2.5\" SATA", "MLC NAND", "DRAM cache"],
                            tags: ["storage", "ssd", "medium", "applications", "web"]
                          },
                          {
                            id: "1.1.1.4.1.2.3",
                            name: "1TB SSD - 2.5\" Enterprise (Crucial)",
                            description: "SSD enterprise com confiabilidade para aplicações críticas",
                            price: 439,
                            functionality: "Confiabilidade enterprise com proteção de dados avançada",
                            applicability: "Aplicações empresariais, dados importantes, workloads 24x7",
                            example: "Storage para aplicação ERP ou sistema de inventário",
                            characteristics: ["1TB capacidade", "Enterprise grade", "Crucial MX series", "Power loss protection"],
                            tags: ["storage", "ssd", "enterprise", "reliable", "business"]
                          },
                          {
                            id: "1.1.1.4.1.2.4",
                            name: "960GB SSD - 2.5\" Enterprise Plus (Kingston)",
                            description: "SSD enterprise plus com performance otimizada",
                            price: 1100,
                            functionality: "Performance enterprise com recursos avançados de proteção",
                            applicability: "Aplicações críticas, databases médios, workloads intensivos",
                            example: "Database MySQL para e-commerce ou aplicação CRM enterprise",
                            characteristics: ["960GB capacidade", "Enterprise Plus", "Kingston KC series", "Advanced wear leveling"],
                            tags: ["storage", "ssd", "enterprise-plus", "performance", "critical"]
                          },
                          {
                            id: "1.1.1.4.1.2.5",
                            name: "2TB SSD - 2.5\" Enterprise (Crucial)",
                            description: "SSD enterprise de alta capacidade para grandes aplicações",
                            price: 800,
                            functionality: "Grande capacidade com confiabilidade enterprise",
                            applicability: "Grandes aplicações, consolidação de dados, backup rápido",
                            example: "Consolidação de múltiplos sistemas ou backup de alta velocidade",
                            characteristics: ["2TB capacidade", "Enterprise grade", "Crucial series", "High endurance"],
                            tags: ["storage", "ssd", "enterprise", "high-capacity", "consolidation"]
                          },
                          {
                            id: "1.1.1.4.1.2.6",
                            name: "1.92TB SSD - 2.5\" Enterprise Plus (Kingston)",
                            description: "SSD enterprise plus de capacidade otimizada",
                            price: 2000,
                            functionality: "Capacidade otimizada com performance enterprise plus",
                            applicability: "Workloads críticos, databases importantes, aplicações tier-1",
                            example: "Database Oracle ou sistema SAP crítico",
                            characteristics: ["1.92TB capacidade", "Enterprise Plus", "Kingston DC series", "Advanced ECC"],
                            tags: ["storage", "ssd", "enterprise-plus", "optimized", "tier-1"]
                          },
                          {
                            id: "1.1.1.4.1.2.7",
                            name: "4TB SSD - 2.5\" Enterprise (Crucial)",
                            description: "SSD enterprise de alta capacidade para consolidação",
                            price: 2200,
                            functionality: "Alta capacidade com performance enterprise sustentada",
                            applicability: "Consolidação massiva, data warehousing, backup enterprise",
                            example: "Data warehouse para BI ou consolidação de múltiplos servidores",
                            characteristics: ["4TB capacidade", "Enterprise grade", "Crucial series", "High density"],
                            tags: ["storage", "ssd", "enterprise", "consolidation", "data-warehouse"]
                          },
                          {
                            id: "1.1.1.4.1.2.8",
                            name: "4TB SSD - 2.5\" Enterprise Plus (Intel)",
                            description: "SSD Intel enterprise plus para máxima confiabilidade",
                            price: 3700,
                            functionality: "Tecnologia Intel com máxima confiabilidade enterprise",
                            applicability: "Aplicações mission-critical, dados vitais, compliance rigoroso",
                            example: "Sistema financeiro ou aplicação regulada crítica",
                            characteristics: ["4TB capacidade", "Intel enterprise", "Maximum reliability", "Advanced features"],
                            tags: ["storage", "ssd", "intel", "enterprise-plus", "mission-critical"]
                          },
                          {
                            id: "1.1.1.4.1.2.9",
                            name: "8TB SSD - 2.5\" Enterprise",
                            description: "SSD enterprise de máxima capacidade para grandes volumes",
                            price: 5300,
                            functionality: "Máxima capacidade SSD para consolidação massiva",
                            applicability: "Grandes volumes de dados, consolidação extrema, archives rápidos",
                            example: "Archive de dados corporativos ou consolidação de datacenter",
                            characteristics: ["8TB capacidade", "Enterprise grade", "Maximum density", "Long term reliability"],
                            tags: ["storage", "ssd", "enterprise", "maximum-capacity", "archive"]
                          },
                          {
                            id: "1.1.1.4.1.2.10",
                            name: "7.68TB SSD - 2.5\" Enterprise Plus (Kingston)",
                            description: "SSD enterprise plus de alta capacidade para dados críticos",
                            price: 5390,
                            functionality: "Máxima capacidade SSD com recursos enterprise avançados",
                            applicability: "Consolidação de dados, databases grandes, analytics",
                            example: "Consolidação de múltiplos databases ou data warehouse",
                            characteristics: ["7.68TB capacidade", "Enterprise Plus", "Kingston DC series", "Advanced ECC"],
                            tags: ["storage", "ssd", "enterprise-plus", "high-capacity", "consolidation"]
                          }
                        ]
                      },
                      {
                        id: "1.1.1.4.1.3",
                        name: "HDD",
                        description: "Hard Disk Drives para armazenamento de massa econômico",
                        items: [
                          {
                            id: "1.1.1.4.1.3.1",
                            name: "2TB HDD 2.5\"",
                            description: "Disco rígido compacto para servidores com limitação de espaço",
                            price: 540,
                            functionality: "Formato compacto com boa capacidade para servidores 1U/2U",
                            applicability: "Servidores compactos, laptops de alta capacidade, storage portátil",
                            example: "Servidor 1U para aplicação web ou storage compacto para mobilidade",
                            characteristics: ["2TB capacidade", "2.5\" SATA", "5400 RPM", "Compact form factor"],
                            tags: ["storage", "hdd", "compact", "servers", "portable"]
                          },
                          {
                            id: "1.1.1.4.1.3.2",
                            name: "1TB HDD - 3.5\"",
                            description: "Disco rígido básico para armazenamento geral",
                            price: 400,
                            functionality: "Armazenamento de massa com boa relação custo/capacidade",
                            applicability: "Arquivos, backups, dados não críticos, storage secundário",
                            example: "Storage para arquivos de backup ou repositório de documentos",
                            characteristics: ["1TB capacidade", "3.5\" SATA", "7200 RPM", "64MB cache"],
                            tags: ["storage", "hdd", "mass-storage", "backup", "economical"]
                          },
                          {
                            id: "1.1.1.4.1.3.3",
                            name: "2TB HDD - 3.5\"",
                            description: "Disco rígido intermediário com boa capacidade",
                            price: 439,
                            functionality: "Capacidade balanceada para aplicações diversas",
                            applicability: "Aplicações médias, backup, storage para pequenos sistemas",
                            example: "Storage para sistema de arquivos ou backup de servidores pequenos",
                            characteristics: ["2TB capacidade", "3.5\" SATA", "7200 RPM", "Good performance"],
                            tags: ["storage", "hdd", "balanced", "medium", "versatile"]
                          },
                          {
                            id: "1.1.1.4.1.3.4",
                            name: "4TB HDD - 3.5\"",
                            description: "Disco de boa capacidade para aplicações médias",
                            price: 596,
                            functionality: "Capacidade expandida para aplicações empresariais médias",
                            applicability: "Sistemas médios, backup expandido, aplicações departamentais",
                            example: "Storage para sistema ERP pequeno ou backup departamental",
                            characteristics: ["4TB capacidade", "3.5\" SATA", "7200 RPM", "Enterprise features"],
                            tags: ["storage", "hdd", "medium-capacity", "business", "departmental"]
                          },
                          {
                            id: "1.1.1.4.1.3.5",
                            name: "8TB HDD - 3.5\"",
                            description: "Disco de alta capacidade para aplicações grandes",
                            price: 974,
                            functionality: "Alta capacidade para aplicações enterprise",
                            applicability: "Grandes aplicações, backup enterprise, sistemas consolidados",
                            example: "Storage para sistema corporativo ou backup enterprise",
                            characteristics: ["8TB capacidade", "3.5\" SATA", "7200 RPM", "Enterprise grade"],
                            tags: ["storage", "hdd", "high-capacity", "enterprise", "consolidation"]
                          },
                          {
                            id: "1.1.1.4.1.3.6",
                            name: "12TB HDD - 3.5\"",
                            description: "Disco de alta capacidade para arquivamento",
                            price: 1500,
                            functionality: "Grande capacidade para arquivamento e backup",
                            applicability: "Arquivamento, backup de longo prazo, dados históricos",
                            example: "Repositório de backups ou arquivo histórico de dados",
                            characteristics: ["12TB capacidade", "Enterprise class", "7200 RPM", "HelioSeal technology"],
                            tags: ["storage", "hdd", "archival", "backup", "long-term"]
                          },
                          {
                            id: "1.1.1.4.1.3.7",
                            name: "16TB HDD - 3.5\"",
                            description: "Disco de capacidade estendida para grandes volumes",
                            price: 1500,
                            functionality: "Capacidade estendida para volumes de dados significativos",
                            applicability: "Grandes volumes, backup extensivo, consolidação de dados",
                            example: "Consolidação de múltiplos sistemas ou backup massivo",
                            characteristics: ["16TB capacidade", "Enterprise grade", "Optimized for capacity", "Advanced reliability"],
                            tags: ["storage", "hdd", "extended-capacity", "consolidation", "massive"]
                          },
                          {
                            id: "1.1.1.4.1.3.8",
                            name: "18TB HDD - 3.5\"",
                            description: "Disco de capacidade superior para aplicações intensivas",
                            price: 3000,
                            functionality: "Capacidade superior para aplicações data-intensive",
                            applicability: "Big data, arquivamento massivo, data warehousing",
                            example: "Data warehouse ou repositório para big data analytics",
                            characteristics: ["18TB capacidade", "Enterprise grade", "CMR technology", "High capacity optimization"],
                            tags: ["storage", "hdd", "superior-capacity", "big-data", "data-warehouse"]
                          },
                          {
                            id: "1.1.1.4.1.3.9",
                            name: "20TB HDD - 3.5\"",
                            description: "Disco de máxima capacidade para volumes extremos",
                            price: 3800,
                            functionality: "Capacidade máxima para volumes extremos de dados",
                            applicability: "Volumes extremos, backup massivo, data lakes",
                            example: "Data lake para analytics massivos ou backup de datacenter",
                            characteristics: ["20TB capacidade", "Maximum capacity", "Enterprise grade", "Advanced error correction"],
                            tags: ["storage", "hdd", "maximum", "extreme-volumes", "data-lakes"]
                          },
                          {
                            id: "1.1.1.4.1.3.10",
                            name: "22TB HDD - 3.5\"",
                            description: "Disco de capacidade absoluta para aplicações massivas",
                            price: 4000,
                            functionality: "Capacidade absoluta para aplicações massivas",
                            applicability: "Aplicações massivas, arquivamento absoluto, big data extremo",
                            example: "Storage para data lake massivo ou arquivo histórico completo",
                            characteristics: ["22TB capacidade", "Absolute maximum", "Enterprise grade", "Maximum density"],
                            tags: ["storage", "hdd", "absolute-maximum", "massive", "extreme"]
                          }
                        ]
                      },
                      {
                        id: "1.1.1.4.1.4",
                        name: "SAS",
                        description: "Discos SAS para ambientes enterprise com alta confiabilidade",
                        items: [
                          {
                            id: "1.1.1.4.1.4.1",
                            name: "600GB SAS",
                            description: "Disco SAS enterprise para aplicações críticas",
                            price: 91,
                            functionality: "Interface SAS com dual-port para alta disponibilidade",
                            applicability: "Ambientes enterprise críticos, storage arrays, alta disponibilidade",
                            example: "Storage para sistema crítico com redundância total",
                            characteristics: ["600GB capacidade", "SAS 12Gb/s", "Dual-port", "Enterprise grade"],
                            tags: ["storage", "sas", "enterprise", "critical", "high-availability"]
                          }
                        ]
                      },
                      {
                        id: "1.1.1.4.1.5",
                        name: "Controladora RAID",
                        description: "Controladoras para redundância e performance de storage",
                        items: [
                          {
                            id: "1.1.1.4.1.5.1",
                            name: "Hardware RAID",
                            description: "Controladora RAID dedicada com processador próprio",
                            price: 210,
                            functionality: "RAID por hardware com cache dedicado e processamento independente",
                            applicability: "Aplicações críticas, alta performance, redundância enterprise",
                            example: "Array RAID para database crítico com cache de gravação",
                            characteristics: ["Cache dedicado", "Processador independente", "BBU support", "Multiple RAID levels"],
                            tags: ["raid", "hardware", "enterprise", "performance", "redundancy"]
                          },
                          {
                            id: "1.1.1.4.1.5.2",
                            name: "Software RAID",
                            description: "RAID implementado via software do sistema operacional",
                            price: 0,
                            functionality: "RAID gerenciado pelo SO sem hardware adicional",
                            applicability: "Ambientes básicos, desenvolvimento, redundância simples",
                            example: "RAID 1 básico para redundância de dados não críticos",
                            characteristics: ["Sem custo adicional", "Gerenciado pelo SO", "RAID básico", "Flexibilidade de configuração"],
                            tags: ["raid", "software", "basic", "free", "flexible"]
                          }
                        ]
                      },
                      {
                        id: "1.1.1.4.1.6",
                        name: "Tipos de RAID",
                        description: "Configurações RAID para redundância e performance otimizadas",
                        items: [
                          {
                            id: "1.1.1.4.1.6.info",
                            name: "Calculadora RAID",
                            description: "Ferramenta para cálculo e comparação de configurações RAID",
                            functionality: "Calculadora interativa para planejamento de arrays RAID com diferentes configurações",
                            applicability: "Planejamento de storage, análise de redundância, otimização de performance",
                            example: "Calcular capacidade útil e redundância para RAID 5 com 8 discos de 2TB",
                            characteristics: [
                              "Suporte a todos os níveis RAID",
                              "Cálculo de capacidade útil",
                              "Análise de redundância",
                              "Comparação de performance",
                              "Simulação de falhas"
                            ],
                            tags: ["raid", "calculator", "planning", "analysis", "redundancy"],
                            observations: "Use a calculadora RAID para dimensionar adequadamente seu array de storage",
                            externalLink: "https://calculadora-raid.org/"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: "1.1.1.4.2",
                    name: "Storage Externo",
                    description: "Soluções de storage externo - Veja categoria STaaS para detalhes completos",
                    items: [
                      {
                        id: "1.1.1.4.2.link",
                        name: "Ver categoria STaaS (Storage as a Service)",
                        description: "Acesse a categoria STaaS para todas as opções de storage externo",
                        functionality: "Link para categoria completa de storage",
                        applicability: "Todas as necessidades de storage externo escalável",
                        example: "Storage em bloco, object storage, snapshots, etc.",
                        characteristics: ["Link para categoria STaaS"],
                        tags: ["storage", "external", "staas", "link"],
                        observations: "Consulte a categoria STaaS para opções completas de storage externo"
                      }
                    ]
                  }
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
  },
  {
    id: "6",
    name: "MANAGED SERVICES",
    description: "Serviços gerenciados completos para operação e manutenção de infraestrutura",
    subcategories: [
      {
        id: "6.1",
        name: "Gerenciamento Padrão",
        description: "Gerenciamento básico com suporte técnico e monitoramento essencial",
        items: [
          {
            id: "6.1.1",
            name: "Gerenciamento Padrão 8x5",
            description: "Bundle 5 horas com suporte das 9h às 18h",
            price: 199.00,
            functionality: "Pacote de gerenciamento básico com 5 horas incluídas e suporte em horário comercial",
            applicability: "Pequenas empresas, ambientes de desenvolvimento, aplicações não críticas",
            example: "Pequena empresa com website corporativo ou ambiente de desenvolvimento",
            characteristics: [
              "Bundle: 5 horas incluídas",
              "Suporte: 8x5 (9h às 18h)",
              "Atualizações de sistema",
              "Suporte técnico básico",
              "Monitoramento básico",
              "Todos os data centers"
            ],
            tags: ["managed", "standard", "8x5", "basic", "monitoring"],
            observations: "Inclui atualizações, suporte técnico e monitoramento básico para ambientes não críticos"
          },
          {
            id: "6.1.2",
            name: "Gerenciamento Padrão 24x7",
            description: "Bundle 5 horas com suporte 24 horas por dia",
            price: 299.00,
            functionality: "Gerenciamento básico com disponibilidade total e resposta 24/7 para questões urgentes",
            applicability: "Empresas com operação contínua, websites de alto tráfego, aplicações 24/7",
            example: "E-commerce que opera 24h ou aplicação que precisa de disponibilidade contínua",
            characteristics: [
              "Bundle: 5 horas incluídas",
              "Suporte: 24x7",
              "Resposta prioritária",
              "Monitoramento contínuo",
              "Atualizações programadas",
              "Escalation automático"
            ],
            tags: ["managed", "standard", "24x7", "continuous", "priority"],
            observations: "Ideal para aplicações que requerem disponibilidade contínua com suporte básico"
          }
        ]
      },
      {
        id: "6.2",
        name: "Gerenciamento Avançado",
        description: "Gerenciamento completo com recursos avançados de rede e segurança",
        items: [
          {
            id: "6.2.1",
            name: "Gerenciamento Avançado 8x5",
            description: "Bundle 7 horas com suporte das 9h às 18h",
            price: 399.00,
            functionality: "Gerenciamento avançado com mais horas incluídas e recursos de rede e backup",
            applicability: "Médias empresas, aplicações corporativas, ambientes com necessidades específicas",
            example: "Empresa média com múltiplas aplicações ou ambiente corporativo estruturado",
            characteristics: [
              "Bundle: 7 horas incluídas",
              "Suporte: 8x5 (9h às 18h)",
              "Suporte de rede avançado",
              "Gerenciamento de backup",
              "Configuração de firewall",
              "Otimização de performance"
            ],
            tags: ["managed", "advanced", "8x5", "network", "backup"],
            observations: "Inclui recursos avançados de rede, backup e otimização para ambientes corporativos"
          },
          {
            id: "6.2.2",
            name: "Gerenciamento Avançado 24x7",
            description: "Bundle 7 horas com suporte 24 horas por dia",
            price: 499.00,
            functionality: "Gerenciamento avançado com disponibilidade total e expertise especializada",
            applicability: "Empresas críticas, aplicações de produção, ambientes complexos",
            example: "Sistema ERP crítico ou aplicação de produção com alta complexidade",
            characteristics: [
              "Bundle: 7 horas incluídas",
              "Suporte: 24x7",
              "Expertise especializada",
              "Gerenciamento proativo",
              "Monitoramento avançado",
              "Response automatizado"
            ],
            tags: ["managed", "advanced", "24x7", "proactive", "expert"],
            observations: "Gerenciamento proativo com expertise avançada para ambientes críticos"
          },
          {
            id: "6.2.3",
            name: "Gerenciamento Avançado Cloud",
            description: "Gerenciamento especializado para ambientes cloud",
            functionality: "Gerenciamento específico para infraestrutura cloud com ferramentas especializadas",
            applicability: "Ambientes cloud, infraestrutura híbrida, aplicações cloud-native",
            example: "Infraestrutura cloud com múltiplas VMs ou aplicação cloud-native complexa",
            characteristics: [
              "Especializado para cloud",
              "Ferramentas WHM/cPanel",
              "Suporte de rede cloud",
              "Backup automatizado",
              "Firewall cloud",
              "Escalabilidade automática"
            ],
            tags: ["managed", "advanced", "cloud", "whm", "cpanel"],
            observations: "Inclui suporte de rede, backup, firewall, e ferramentas como WHM/cPanel. Bundle conforme contratação."
          }
        ]
      },
      {
        id: "6.3",
        name: "Gerenciamento Full",
        description: "Gerenciamento completo premium com máxima disponibilidade",
        items: [
          {
            id: "6.3.1",
            name: "Gerenciamento Full 8x5",
            description: "Bundle 10 horas com suporte das 9h às 18h",
            price: 599.00,
            functionality: "Gerenciamento completo com máximo de horas incluídas e suporte premium",
            applicability: "Grandes empresas, infraestrutura complexa, ambientes mission-critical",
            example: "Grande corporação com infraestrutura complexa ou sistema mission-critical",
            characteristics: [
              "Bundle: 10 horas incluídas",
              "Suporte: 8x5 (9h às 18h)",
              "Gerenciamento completo",
              "Consultoria incluída",
              "Otimização contínua",
              "Relatórios executivos"
            ],
            tags: ["managed", "full", "8x5", "premium", "consulting"],
            observations: "Máximo pacote de horas com gerenciamento completo e consultoria incluída"
          },
          {
            id: "6.3.2",
            name: "Gerenciamento Full 24x7",
            description: "Bundle 10 horas com suporte 24 horas por dia",
            price: 699.00,
            functionality: "Gerenciamento premium total com disponibilidade máxima e expertise dedicada",
            applicability: "Empresas enterprise, sistemas críticos, infraestrutura de alta disponibilidade",
            example: "Sistema bancário ou infraestrutura enterprise com requisitos máximos de disponibilidade",
            characteristics: [
              "Bundle: 10 horas incluídas",
              "Suporte: 24x7",
              "Expertise dedicada",
              "Gerenciamento proativo total",
              "SLA premium",
              "Resposta imediata"
            ],
            tags: ["managed", "full", "24x7", "enterprise", "dedicated"],
            observations: "Máximo nível de gerenciamento com expertise dedicada e SLA premium"
          }
        ]
      },
      {
        id: "6.4",
        name: "Sustentação",
        description: "Serviços especializados de sustentação e administração de infraestrutura",
        items: [
          {
            id: "6.4.1",
            name: "Suporte e Monitoramento Reativo e Proativo",
            description: "Monitoramento completo com suporte reativo e proativo",
            functionality: "Monitoramento 24/7 com detecção proativa de problemas e resposta reativa a incidentes",
            applicability: "Infraestruturas críticas, ambientes de produção, sistemas de alta disponibilidade",
            example: "Monitoramento de data center ou infraestrutura crítica de produção",
            characteristics: [
              "Monitoramento 24/7",
              "Detecção proativa de problemas",
              "Resposta reativa a incidentes",
              "Alertas automáticos",
              "Escalation inteligente",
              "Métricas de performance"
            ],
            tags: ["sustentacao", "monitoring", "proactive", "reactive", "24x7"],
            observations: "Combinação de monitoramento proativo e suporte reativo para máxima eficiência"
          },
          {
            id: "6.4.2",
            name: "Administração Física e Lógica de Nós Computacionais",
            description: "Gestão completa de servidores físicos e virtuais",
            functionality: "Administração técnica completa de toda infraestrutura computacional física e virtual",
            applicability: "Data centers, infraestrutura híbrida, ambientes de virtualização complexos",
            example: "Administração de cluster de servidores ou infraestrutura de virtualização enterprise",
            characteristics: [
              "Gestão física de servidores",
              "Administração de VMs",
              "Configuração de hardware",
              "Otimização de recursos",
              "Manutenção preventiva",
              "Documentação técnica"
            ],
            tags: ["sustentacao", "administration", "physical", "virtual", "infrastructure"],
            observations: "Gestão técnica completa de toda infraestrutura computacional"
          },
          {
            id: "6.4.3",
            name: "Administração de Incidentes e Problemas ISO 20000-1",
            description: "Gestão de incidentes seguindo padrões internacionais",
            functionality: "Processo estruturado de gestão de incidentes, problemas e solicitações conforme ISO 20000-1",
            applicability: "Empresas com certificação ISO, ambientes regulados, organizações enterprise",
            example: "Gestão de incidentes em banco ou empresa com certificação ISO",
            characteristics: [
              "Conformidade ISO 20000-1",
              "Gestão estruturada de incidentes",
              "Processo de escalation definido",
              "SLA por prioridade",
              "Documentação de processos",
              "Métricas de qualidade"
            ],
            tags: ["sustentacao", "iso20000", "incident-management", "compliance", "process"],
            observations: "Processo certificado ISO 20000-1 para gestão profissional de incidentes"
          },
          {
            id: "6.4.4",
            name: "Hotline para Demandas Críticas",
            description: "Canal direto para situações críticas e emergenciais",
            functionality: "Linha direta dedicada para demandas críticas com resposta imediata e escalation automático",
            applicability: "Sistemas mission-critical, aplicações financeiras, infraestrutura de alta criticidade",
            example: "Hotline para sistema bancário ou aplicação de trading financeiro",
            characteristics: [
              "Canal direto dedicado",
              "Resposta imediata",
              "Escalation automático",
              "Prioridade máxima",
              "Expertise especializada",
              "Disponibilidade 24/7"
            ],
            tags: ["sustentacao", "hotline", "critical", "emergency", "immediate"],
            observations: "Canal prioritário para situações críticas com resposta imediata garantida"
          },
          {
            id: "6.4.5",
            name: "Auxílio em Projeção e Planejamento de Infraestrutura",
            description: "Consultoria para crescimento e evolução da infraestrutura",
            functionality: "Análise técnica e planejamento estratégico para evolução e crescimento da infraestrutura computacional",
            applicability: "Empresas em crescimento, planejamento de expansão, modernização de infraestrutura",
            example: "Planejamento de expansão de e-commerce ou migração para cloud híbrida",
            characteristics: [
              "Análise de capacidade",
              "Planejamento de crescimento",
              "Otimização de recursos",
              "Roadmap tecnológico",
              "Análise de custos",
              "Recomendações técnicas"
            ],
            tags: ["sustentacao", "planning", "consulting", "infrastructure", "growth"],
            observations: "Consultoria especializada para planejamento estratégico de infraestrutura"
          }
        ]
      }
    ]
  },
  {
    id: "7",
    name: "COLOCATION",
    description: "Soluções de colocation e infraestrutura física 🏢",
    subcategories: [
      {
        id: "7.1",
        name: "Espaço de RACK",
        description: "Soluções flexíveis de espaço em rack para sua infraestrutura",
        items: [
          {
            id: "7.1.1",
            name: "1/4 de Rack (10U)",
            description: "Espaço de 10U em rack 42U para pequenas infraestruturas",
            functionality: "Fornece espaço físico seguro e refrigerado para equipamentos de até 10 unidades de rack",
            applicability: "Pequenas empresas, startups, projetos piloto, infraestrutura de desenvolvimento",
            example: "Servidor, switch, firewall e storage em configuração básica",
            price: 890,
            characteristics: [
              "10U de espaço útil",
              "Energia redundante incluída",
              "Refrigeração dedicada",
              "Acesso 24x7x365",
              "Monitoramento NOC",
              "Conectividade básica incluída"
            ],
            tags: ["colocation", "rack", "10u", "pequeno", "basico"],
            observations: "Ideal para começar com colocation sem grande investimento inicial"
          },
          {
            id: "7.1.2",
            name: "1/2 Rack (21U)",
            description: "Espaço de 21U em rack 42U para infraestruturas médias",
            functionality: "Oferece espaço físico para infraestrutura de médio porte com alta disponibilidade",
            applicability: "Empresas de médio porte, e-commerce, aplicações corporativas",
            example: "Múltiplos servidores, storage, backup, equipamentos de rede",
            price: 1650,
            characteristics: [
              "21U de espaço útil",
              "Energia redundante N+1",
              "Refrigeração otimizada",
              "Acesso 24x7x365",
              "Monitoramento avançado",
              "Conectividade premium"
            ],
            tags: ["colocation", "rack", "21u", "medio", "empresarial"],
            observations: "Equilibrio perfeito entre espaço e custo-benefício"
          },
          {
            id: "7.1.3",
            name: "Rack Completo (42U)",
            description: "Rack dedicado completo de 42U para infraestruturas robustas",
            functionality: "Rack exclusivo com máxima capacidade para infraestruturas críticas e de grande escala",
            applicability: "Grandes empresas, provedores de serviço, aplicações mission-critical",
            example: "Infraestrutura completa de produção, disaster recovery, cloud privado",
            price: 2890,
            characteristics: [
              "42U de capacidade total",
              "Energia dedicada redundante",
              "Refrigeração exclusiva",
              "Acesso ilimitado 24x7x365",
              "Monitoramento dedicado",
              "Conectividade premium dedicada",
              "Suporte técnico prioritário"
            ],
            tags: ["colocation", "rack", "42u", "completo", "dedicado", "premium"],
            observations: "Máxima capacidade e flexibilidade para infraestruturas críticas"
          },
          {
            id: "7.1.4",
            name: "Multiple Racks",
            description: "Múltiplos racks para infraestruturas de grande escala",
            functionality: "Solução escalável com múltiplos racks para infraestruturas enterprise",
            applicability: "Enterprises, cloud providers, grandes aplicações distribuídas",
            example: "Data center privado, cloud híbrido, infraestrutura distribuída",
            characteristics: [
              "Múltiplos racks dedicados",
              "Energia dedicada por rack",
              "Refrigeração otimizada",
              "Área privativa opcional",
              "Conectividade dedicada",
              "Gestão personalizada",
              "SLA premium"
            ],
            externalLink: "https://hostdime.com.br/contato",
            tags: ["colocation", "multiple", "enterprise", "escalavel", "customizado"],
            observations: "Solução sob medida - consulte nossos especialistas para cotação personalizada"
          }
        ]
      },
      {
        id: "7.2",
        name: "Colocation Addons",
        description: "Serviços adicionais para potencializar sua infraestrutura de colocation",
        items: [
          {
            id: "7.2.1",
            name: "Hands-On Técnico",
            description: "Suporte técnico presencial para manipulação de equipamentos",
            functionality: "Técnicos especializados executam tarefas físicas em seus equipamentos no data center",
            applicability: "Empresas remotas, manutenção de equipamentos, troubleshooting físico",
            example: "Reinicialização de servidores, troca de componentes, verificação de cabos",
            price: 180,
            characteristics: [
              "Técnico certificado",
              "Execução em horário comercial",
              "Relatório detalhado",
              "Fotos do procedimento",
              "Comunicação em tempo real",
              "SLA de 4 horas"
            ],
            tags: ["addon", "hands-on", "tecnico", "presencial", "manutencao"],
            observations: "Cobrança por hora técnica - mínimo 1 hora"
          },
          {
            id: "7.2.2",
            name: "Remote Hands 24x7",
            description: "Suporte técnico presencial disponível 24 horas por dia",
            functionality: "Equipe técnica disponível 24x7 para atendimento presencial emergencial",
            applicability: "Aplicações críticas, infraestrutura que requer suporte contínuo",
            example: "Resolução de emergências, manutenção fora do horário comercial",
            price: 95,
            characteristics: [
              "Disponibilidade 24x7x365",
              "Tempo de resposta < 15 minutos",
              "Técnicos especializados",
              "Comunicação imediata",
              "Documentação completa",
              "SLA premium"
            ],
            tags: ["addon", "remote-hands", "24x7", "emergencial", "premium"],
            observations: "Cobrança por evento - ideal para infraestruturas críticas"
          },
          {
            id: "7.2.3",
            name: "Armazenamento de Equipamentos",
            description: "Guarda segura de equipamentos sobressalentes e componentes",
            functionality: "Área segura e climatizada para armazenamento de equipamentos não utilizados",
            applicability: "Empresas com equipamentos de backup, componentes sobressalentes",
            example: "Servidores de contingência, peças de reposição, equipamentos sazonais",
            price: 45,
            characteristics: [
              "Área climatizada",
              "Segurança 24x7",
              "Controle de acesso",
              "Inventário detalhado",
              "Seguro incluso",
              "Acesso sob demanda"
            ],
            tags: ["addon", "storage", "equipamentos", "backup", "seguro"],
            observations: "Cobrança mensal por m³ - mínimo 1m³"
          },
          {
            id: "7.2.4",
            name: "Instalação de Equipamentos",
            description: "Serviço profissional de instalação e configuração física",
            functionality: "Instalação profissional de equipamentos no rack com cabeamento e configuração básica",
            applicability: "Novos deployments, migração de equipamentos, expansão de infraestrutura",
            example: "Instalação de servidores, switches, storage, organização de cabos",
            price: 320,
            characteristics: [
              "Instalação profissional",
              "Organização de cabos",
              "Teste de conectividade",
              "Documentação da instalação",
              "Configuração básica",
              "Garantia do serviço"
            ],
            tags: ["addon", "instalacao", "deployment", "cabeamento", "configuracao"],
            observations: "Preço por equipamento - configuração avançada com cobrança adicional"
          },
          {
            id: "7.2.5",
            name: "Acesso de Terceiros",
            description: "Credenciamento e acompanhamento de fornecedores e técnicos externos",
            functionality: "Processo de credenciamento e acompanhamento para acesso de fornecedores ao data center",
            applicability: "Manutenção por fornecedores, auditoria externa, instalação especializada",
            example: "Técnicos de hardware, auditores de segurança, fornecedores especializados",
            price: 125,
            characteristics: [
              "Processo de credenciamento",
              "Acompanhamento técnico",
              "Controle de acesso rigoroso",
              "Documentação de visita",
              "Protocolo de segurança",
              "Relatório de atividades"
            ],
            tags: ["addon", "terceiros", "credenciamento", "seguranca", "auditoria"],
            observations: "Cobrança por visita - agendamento prévio obrigatório"
          },
          {
            id: "7.2.6",
            name: "Backup de Energia Estendido",
            description: "Capacidade adicional de backup de energia para equipamentos de alto consumo",
            functionality: "Provisão de energia de backup adicional para equipamentos com demanda energética elevada",
            applicability: "Equipamentos de alto desempenho, GPUs, storage de alta densidade",
            example: "Servidores GPU, storage NVMe, equipamentos de mineração",
            price: 290,
            characteristics: [
              "Capacidade energética adicional",
              "UPS dedicado",
              "Monitoramento individual",
              "Redundância N+1",
              "Alarmes personalizados",
              "Relatórios de consumo"
            ],
            tags: ["addon", "energia", "backup", "ups", "alta-densidade"],
            observations: "Cobrança mensal por kW adicional - análise técnica necessária"
          }
        ]
      }
    ]
  },
  {
    id: "8",
    name: "LICENÇAS DE SOFTWARE",
    description: "Licenças de software para infraestrutura e produtividade 📋",
    subcategories: [
      {
        id: "8.1",
        name: "cPanel, Plesk, Imunify360",
        description: "Painéis de controle e soluções de segurança para hosting",
        items: [
          {
            id: "8.1.1",
            name: "cPanel Solo",
            description: "Licença cPanel para um único servidor com até 1 conta",
            functionality: "Painel de controle web completo para gerenciamento de hosting e email",
            applicability: "Servidores dedicados, VPS, desenvolvimento de sites",
            example: "Gerenciamento de domínios, emails, bancos de dados MySQL, backups",
            price: 45,
            characteristics: [
              "1 conta cPanel",
              "WHM (WebHost Manager)",
              "Softaculous incluído",
              "SSL AutoSSL",
              "Backup automático",
              "Interface web intuitiva",
              "Suporte a PHP/MySQL"
            ],
            tags: ["cpanel", "hosting", "painel", "solo", "web"],
            observations: "Licença mensal - ideal para projetos pequenos"
          },
          {
            id: "8.1.2",
            name: "cPanel Admin",
            description: "Licença cPanel para até 5 contas em servidor dedicado",
            functionality: "Solução completa de hosting com múltiplas contas e recursos avançados",
            applicability: "Pequenos provedores de hosting, agências web, revendas",
            example: "Hospedagem de múltiplos sites, revenda de hosting, gestão centralizada",
            price: 62,
            characteristics: [
              "Até 5 contas cPanel",
              "WHM completo",
              "Softaculous Premium",
              "SSL ilimitado",
              "Backup avançado",
              "API completa",
              "Branded interface"
            ],
            tags: ["cpanel", "admin", "multiplo", "revenda", "premium"],
            observations: "Licença mensal para servidores dedicados"
          },
          {
            id: "8.1.3",
            name: "cPanel Pro",
            description: "Licença cPanel para até 30 contas com recursos profissionais",
            functionality: "Solução profissional para provedores de hosting com recursos enterprise",
            applicability: "Provedores de hosting médios, empresas com múltiplos projetos",
            example: "Hosting empresarial, múltiplos domínios corporativos, ambientes de produção",
            price: 89,
            characteristics: [
              "Até 30 contas cPanel",
              "WHM Enterprise",
              "Softaculous Premium",
              "CloudLinux compatível",
              "Backup enterprise",
              "API avançada",
              "White label completo"
            ],
            tags: ["cpanel", "pro", "enterprise", "hosting", "profissional"],
            observations: "Licença mensal ideal para uso corporativo"
          },
          {
            id: "8.1.4",
            name: "Plesk Web Admin",
            description: "Licença Plesk para até 10 domínios em servidor único",
            functionality: "Painel de controle moderno para gerenciamento de websites e aplicações",
            applicability: "Desenvolvimento web, pequenos projetos, agências digitais",
            example: "Sites WordPress, aplicações PHP, emails corporativos",
            price: 38,
            characteristics: [
              "Até 10 domínios",
              "WordPress Toolkit",
              "SSL Let's Encrypt",
              "Git integration",
              "Docker support",
              "Node.js ready",
              "Interface moderna"
            ],
            tags: ["plesk", "web-admin", "wordpress", "moderno", "docker"],
            observations: "Licença mensal com toolkit WordPress incluído"
          },
          {
            id: "8.1.5",
            name: "Plesk Web Pro",
            description: "Licença Plesk para até 30 domínios com recursos profissionais",
            functionality: "Solução completa para desenvolvimento e hosting profissional",
            applicability: "Agências web, desenvolvedores profissionais, projetos corporativos",
            example: "Múltiplos sites corporativos, aplicações web, e-commerce",
            price: 58,
            characteristics: [
              "Até 30 domínios",
              "WordPress Toolkit Pro",
              "SSL Premium",
              "Git deployment",
              "Docker complete",
              "Performance monitoring",
              "Advanced security"
            ],
            tags: ["plesk", "web-pro", "profissional", "performance", "security"],
            observations: "Licença mensal com recursos avançados de desenvolvimento"
          },
          {
            id: "8.1.6",
            name: "Imunify360",
            description: "Solução completa de segurança para servidores web",
            functionality: "Proteção avançada contra malware, ataques e vulnerabilidades",
            applicability: "Servidores de hosting, sites WordPress, e-commerce, aplicações críticas",
            example: "Proteção em tempo real, firewall inteligente, limpeza de malware",
            price: 28,
            characteristics: [
              "Firewall WAF inteligente",
              "Scanner de malware",
              "Proteção em tempo real",
              "Limpeza automática",
              "Reputation management",
              "Patch management",
              "Dashboard centralizado"
            ],
            tags: ["imunify", "security", "malware", "firewall", "protecao"],
            observations: "Licença mensal por servidor - essencial para segurança web"
          }
        ]
      },
      {
        id: "8.2",
        name: "Microsoft",
        description: "Licenças Microsoft para servidores e produtividade",
        items: [
          {
            id: "8.2.1",
            name: "Windows Server 2022 Standard",
            description: "Sistema operacional Windows Server 2022 Standard Edition",
            functionality: "Sistema operacional robusto para servidores empresariais",
            applicability: "Servidores corporativos, aplicações .NET, Active Directory",
            example: "Controlador de domínio, servidor de arquivos, aplicações corporativas",
            price: 185,
            characteristics: [
              "Até 2 VMs OSE",
              "Hyper-V incluído",
              "Active Directory",
              "Windows Admin Center",
              "Storage Spaces Direct",
              "Shielded VMs",
              "Container support"
            ],
            tags: ["windows", "server", "2022", "standard", "microsoft"],
            observations: "Licença perpétua - 2 core pack mínimo"
          },
          {
            id: "8.2.2",
            name: "Windows Server 2022 Datacenter",
            description: "Windows Server 2022 Datacenter Edition com virtualização ilimitada",
            functionality: "Solução enterprise com virtualização ilimitada e recursos avançados",
            applicability: "Grandes infraestruturas, virtualização intensa, cloud privado",
            example: "Datacenter virtualizado, cloud híbrido, múltiplas VMs",
            price: 895,
            characteristics: [
              "VMs OSE ilimitadas",
              "Hyper-V avançado",
              "Software Defined Networking",
              "Storage Replica",
              "Shielded VMs",
              "Nano Server",
              "Windows containers"
            ],
            tags: ["windows", "server", "datacenter", "virtualizacao", "enterprise"],
            observations: "Licença perpétua por processador - ideal para virtualização"
          },
          {
            id: "8.2.3",
            name: "SQL Server 2022 Standard",
            description: "Banco de dados Microsoft SQL Server 2022 Standard",
            functionality: "Sistema de gerenciamento de banco de dados relacional completo",
            applicability: "Aplicações corporativas, ERP, CRM, business intelligence",
            example: "Sistema ERP, aplicações web, data warehouse pequeno/médio",
            price: 468,
            characteristics: [
              "Até 128GB RAM",
              "24 cores máximo",
              "Always On Basic",
              "Backup encryption",
              "Transparent Data Encryption",
              "Integration Services",
              "Reporting Services"
            ],
            tags: ["sql", "server", "2022", "standard", "database"],
            observations: "Licença perpétua por core - 4 core pack mínimo"
          },
          {
            id: "8.2.4",
            name: "SQL Server 2022 Enterprise",
            description: "SQL Server 2022 Enterprise com recursos avançados",
            functionality: "Solução completa para aplicações mission-critical e big data",
            applicability: "Aplicações críticas, big data, data warehouse enterprise",
            example: "Data warehouse enterprise, análise avançada, aplicações críticas",
            price: 1840,
            characteristics: [
              "RAM ilimitada",
              "Cores ilimitados",
              "Always On Advanced",
              "Advanced Analytics",
              "In-Memory OLTP",
              "Columnstore indexes",
              "Stretch Database"
            ],
            tags: ["sql", "server", "enterprise", "unlimited", "critical"],
            observations: "Licença perpétua por core - para aplicações críticas"
          },
          {
            id: "8.2.5",
            name: "Remote Desktop Services CAL",
            description: "Client Access License para Remote Desktop Services",
            functionality: "Licença de acesso para usuários conectarem via Remote Desktop",
            applicability: "Trabalho remoto, terminal server, aplicações centralizadas",
            example: "Acesso remoto a aplicações, desktop virtualizado, trabalho híbrido",
            price: 32,
            characteristics: [
              "Acesso RDS por usuário",
              "Session sharing",
              "RemoteApp suporte",
              "Gateway integration",
              "Web access",
              "Load balancing",
              "High availability"
            ],
            tags: ["rds", "cal", "remote", "desktop", "acesso"],
            observations: "Licença por usuário - necessária para cada usuário RDS"
          },
          {
            id: "8.2.6",
            name: "Windows Server CAL",
            description: "Client Access License para Windows Server",
            functionality: "Licença de acesso para usuários/dispositivos acessarem Windows Server",
            applicability: "Redes corporativas, Active Directory, file sharing",
            example: "Acesso a shares, autenticação AD, print services",
            price: 28,
            characteristics: [
              "Acesso ao servidor",
              "Active Directory",
              "File services",
              "Print services",
              "DHCP/DNS",
              "Certificate services",
              "Web services básico"
            ],
            tags: ["windows", "cal", "server", "acesso", "corporativo"],
            observations: "Licença por usuário ou dispositivo - essencial para acesso ao servidor"
          }
        ]
      },
      {
        id: "8.3",
        name: "CloudLinux, LiteSpeed e Outros",
        description: "Soluções especializadas para otimização e performance",
        items: [
          {
            id: "8.3.1",
            name: "CloudLinux OS",
            description: "Sistema operacional otimizado para provedores de hosting compartilhado",
            functionality: "OS Linux com isolamento de recursos e estabilidade aprimorada",
            applicability: "Hosting compartilhado, reseller hosting, múltiplos tenants",
            example: "Servidor de hosting com múltiplos clientes, isolamento de recursos",
            price: 24,
            characteristics: [
              "LVE (resource limits)",
              "CageFS security",
              "SecureLinks protection",
              "PHP Selector",
              "Python Selector",
              "Node.js Selector",
              "MySQL Governor"
            ],
            tags: ["cloudlinux", "hosting", "isolamento", "estabilidade", "compartilhado"],
            observations: "Licença mensal por servidor - ideal para hosting compartilhado"
          },
          {
            id: "8.3.2",
            name: "LiteSpeed Web Server",
            description: "Servidor web de alta performance compatível com Apache",
            functionality: "Servidor web otimizado para alta performance e baixo consumo de recursos",
            applicability: "Sites de alto tráfego, WordPress, e-commerce, aplicações web",
            example: "Site WordPress com milhares de visitantes, loja virtual",
            price: 38,
            characteristics: [
              "Drop-in Apache replacement",
              "HTTP/3 support",
              "Built-in cache",
              "WordPress optimization",
              "SSL/TLS optimization",
              "QUIC protocol",
              "Advanced security"
            ],
            tags: ["litespeed", "webserver", "performance", "wordpress", "cache"],
            observations: "Licença mensal por servidor - até 50% mais rápido que Apache"
          },
          {
            id: "8.3.3",
            name: "LiteSpeed Enterprise",
            description: "LiteSpeed Web Server Enterprise com recursos avançados",
            functionality: "Versão enterprise com recursos avançados para alta demanda",
            applicability: "Sites enterprise, alta disponibilidade, aplicações críticas",
            example: "Portal corporativo, aplicação com milhões de usuários",
            price: 89,
            characteristics: [
              "Unlimited domains",
              "Load balancing",
              "Advanced cache",
              "Edge Side Includes",
              "Web ADC features",
              "Priority support",
              "Advanced monitoring"
            ],
            tags: ["litespeed", "enterprise", "unlimited", "balancing", "advanced"],
            observations: "Licença mensal - para aplicações de alta demanda"
          },
          {
            id: "8.3.4",
            name: "JetBackup",
            description: "Solução profissional de backup para cPanel e DirectAdmin",
            functionality: "Sistema de backup completo com interface gráfica e automação",
            applicability: "Servidores de hosting, backup corporativo, disaster recovery",
            example: "Backup automático de sites, restauração point-in-time",
            price: 18,
            characteristics: [
              "Interface gráfica",
              "Backup incremental",
              "Multiple destinations",
              "Point-in-time restore",
              "Email notifications",
              "API integration",
              "Cloud storage support"
            ],
            tags: ["jetbackup", "backup", "cpanel", "restore", "automatico"],
            observations: "Licença mensal por servidor - backup profissional essencial"
          },
          {
            id: "8.3.5",
            name: "Softaculous",
            description: "Auto-installer com 400+ scripts de aplicações web",
            functionality: "Instalador automático de aplicações web com um clique",
            applicability: "Hosting providers, instalação fácil de CMS, desenvolvimento rápido",
            example: "Instalação WordPress, Joomla, Drupal, PrestaShop em um clique",
            price: 12,
            characteristics: [
              "400+ applications",
              "One-click install",
              "Auto-updates",
              "Staging area",
              "Backup before update",
              "AMPPS integration",
              "Custom themes"
            ],
            tags: ["softaculous", "installer", "wordpress", "cms", "aplicacoes"],
            observations: "Licença mensal por servidor - essencial para hosting providers"
          },
          {
            id: "8.3.6",
            name: "ConfigServer Firewall (CSF)",
            description: "Firewall e sistema de detecção de intrusão para servidores Linux",
            functionality: "Proteção avançada contra ataques e monitoramento de segurança",
            applicability: "Servidores Linux, VPS, dedicados, proteção contra ataques",
            example: "Proteção contra brute force, DDoS, port scanning",
            price: 8,
            characteristics: [
              "Stateful packet inspection",
              "Login failure daemon",
              "Process tracking",
              "Directory watching",
              "Distributed attacks protection",
              "Email alerts",
              "Web interface"
            ],
            tags: ["csf", "firewall", "security", "intrusion", "protection"],
            observations: "Licença mensal por servidor - segurança essencial para Linux"
          }
        ]
      }
    ]
  },
  {
    id: "9",
    name: "PROFESSIONAL SERVICES",
    description: "Serviços profissionais especializados em migração e implementação 🔧",
    subcategories: [
      {
        id: "9.1",
        name: "Migração de Dados",
        description: "Serviços especializados para migração segura de dados e ambientes",
        items: [
          {
            id: "9.1.1",
            name: "Migração para cPanel/Plesk",
            description: "Migração completa de ambientes para painéis de controle",
            functionality: "Transferência segura de sites, emails, bancos de dados e configurações para cPanel ou Plesk",
            applicability: "Migração de hosting, consolidação de servidores, mudança de provedor",
            example: "Migração de 50 sites WordPress com emails e bancos MySQL para cPanel",
            price: 850,
            characteristics: [
              "Migração de sites e domínios",
              "Transferência de emails",
              "Backup de segurança",
              "Teste de funcionalidades",
              "Configuração DNS",
              "Suporte pós-migração",
              "Zero downtime"
            ],
            tags: ["migracao", "cpanel", "plesk", "hosting", "websites"],
            observations: "Preço por ambiente migrado - análise técnica prévia incluída"
          },
          {
            id: "9.1.2",
            name: "Migração com Acronis Backup",
            description: "Migração de instâncias completas utilizando tecnologia Acronis",
            functionality: "Clonagem e transferência de servidores virtuais e físicos com snapshot point-in-time",
            applicability: "Migração de VMs, disaster recovery, mudança de datacenter",
            example: "Migração de servidor Windows com SQL Server de 500GB",
            price: 1200,
            characteristics: [
              "Backup completo antes da migração",
              "Clonagem bit-a-bit",
              "Verificação de integridade",
              "Rollback disponível",
              "Migração incremental",
              "Suporte a qualquer OS",
              "Mínimo downtime"
            ],
            tags: ["migracao", "acronis", "backup", "vm", "clonagem"],
            observations: "Preço por servidor - complexidade avaliada caso a caso"
          },
          {
            id: "9.1.3",
            name: "Migração de Volumes de Disco",
            description: "Transferência especializada de grandes volumes de dados",
            functionality: "Migração otimizada de discos e sistemas de arquivos preservando permissões e metadados",
            applicability: "Grandes volumes de dados, storage migration, consolidação",
            example: "Migração de 10TB de dados científicos com estrutura complexa",
            price: 1800,
            characteristics: [
              "Preservação de permissões",
              "Verificação de integridade",
              "Compressão inteligente",
              "Transferência otimizada",
              "Log detalhado",
              "Validação pós-migração",
              "Suporte a qualquer filesystem"
            ],
            tags: ["migracao", "disco", "volume", "dados", "filesystem"],
            observations: "Preço por TB migrado - avaliação de complexidade incluída"
          },
          {
            id: "9.1.4",
            name: "Migração de Bancos de Dados",
            description: "Migração especializada de sistemas de banco de dados",
            functionality: "Transferência segura de bancos com conversão de esquemas e otimização",
            applicability: "Mudança de SGBD, upgrade de versão, migração cloud",
            example: "Migração Oracle para PostgreSQL com 2TB de dados",
            price: 2500,
            characteristics: [
              "Conversão de esquemas",
              "Migração de dados",
              "Otimização de queries",
              "Teste de integridade",
              "Backup de segurança",
              "Validação funcional",
              "Suporte multi-SGBD"
            ],
            tags: ["migracao", "database", "sql", "oracle", "postgresql"],
            observations: "Preço por banco - POC incluída para validação"
          }
        ]
      },
      {
        id: "9.2",
        name: "Implementação de Soluções",
        description: "Desenho e implementação de arquiteturas técnicas personalizadas",
        items: [
          {
            id: "9.2.1",
            name: "Arquitetura de Solução Básica",
            description: "Desenho e implementação de soluções técnicas para pequenos projetos",
            functionality: "Análise, desenho e implementação de infraestrutura para projetos básicos",
            applicability: "Startups, pequenas empresas, projetos piloto",
            example: "Arquitetura web com load balancer, 2 servidores e banco de dados",
            price: 3500,
            characteristics: [
              "Análise de requisitos",
              "Desenho de arquitetura",
              "Documentação técnica",
              "Implementação guiada",
              "Testes de validação",
              "Entrega funcional",
              "Suporte inicial"
            ],
            tags: ["arquitetura", "implementacao", "basica", "startup", "pequena"],
            observations: "Projeto até 30 dias - inclui documentação técnica"
          },
          {
            id: "9.2.2",
            name: "Arquitetura de Solução Avançada",
            description: "Desenho e implementação de soluções complexas e distribuídas",
            functionality: "Arquitetura enterprise com alta disponibilidade, escalabilidade e segurança",
            applicability: "Empresas médias, aplicações críticas, arquiteturas distribuídas",
            example: "Microserviços em Kubernetes com CI/CD e monitoramento",
            price: 8500,
            characteristics: [
              "Arquitetura distribuída",
              "Alta disponibilidade",
              "Escalabilidade automática",
              "Segurança avançada",
              "Monitoramento integrado",
              "CI/CD pipeline",
              "Documentação completa"
            ],
            tags: ["arquitetura", "avancada", "kubernetes", "microservicos", "enterprise"],
            observations: "Projeto até 60 dias - inclui treinamento da equipe"
          },
          {
            id: "9.2.3",
            name: "Arquitetura Enterprise",
            description: "Soluções corporativas de grande escala com compliance e governança",
            functionality: "Arquitetura enterprise completa com governança, compliance e integração",
            applicability: "Grandes corporações, aplicações mission-critical, compliance regulatório",
            example: "Plataforma bancária com segregação de ambientes e auditoria",
            price: 25000,
            characteristics: [
              "Governança corporativa",
              "Compliance regulatório",
              "Segregação de ambientes",
              "Auditoria integrada",
              "Disaster recovery",
              "Integração legacy",
              "Suporte 24x7"
            ],
            tags: ["enterprise", "corporativo", "compliance", "governance", "auditoria"],
            observations: "Projeto 90+ dias - metodologia ágil com entregas incrementais"
          }
        ]
      },
      {
        id: "9.3",
        name: "Professional Services",
        description: "Serviços técnicos especializados e hands-on para infraestrutura",
        items: [
          {
            id: "9.3.1",
            name: "Setup Servidor Dedicado Padrão",
            description: "Configuração inicial profissional de servidor dedicado",
            functionality: "Instalação, configuração e otimização de servidor dedicado com OS e serviços básicos",
            applicability: "Novos servidores dedicados, ambiente de produção, setup inicial",
            example: "Configuração CentOS com Apache, MySQL, PHP e hardening básico",
            price: 425,
            characteristics: [
              "Instalação do OS",
              "Configuração básica",
              "Hardening de segurança",
              "Otimização de performance",
              "Configuração de rede",
              "Documentação entregue",
              "Teste de funcionamento"
            ],
            tags: ["setup", "dedicado", "configuracao", "os", "basico"],
            observations: "Inclui Alta Disponibilidade (HA) quando aplicável"
          },
          {
            id: "9.3.2",
            name: "Setup Alta Disponibilidade Intermediária",
            description: "Configuração de ambiente com alta disponibilidade intermediária",
            functionality: "Implementação de cluster com failover automático e redundância",
            applicability: "Aplicações críticas, e-commerce, ambientes corporativos",
            example: "Cluster de 2 servidores web com load balancer e banco replicado",
            price: 700,
            characteristics: [
              "Cluster configuration",
              "Failover automático",
              "Load balancing",
              "Replicação de dados",
              "Monitoramento HA",
              "Teste de failover",
              "Documentação técnica"
            ],
            tags: ["ha", "cluster", "failover", "intermediario", "redundancia"],
            observations: "Setup para até 2 servidores com redundância N+1"
          },
          {
            id: "9.3.3",
            name: "Setup Alta Disponibilidade Premium",
            description: "Configuração de ambiente enterprise com máxima disponibilidade",
            functionality: "Arquitetura enterprise com múltiplas camadas de redundância e disaster recovery",
            applicability: "Aplicações mission-critical, finance, healthcare, governo",
            example: "Cluster multi-site com replicação síncrona e failover automático",
            price: 1150,
            characteristics: [
              "Arquitetura multi-tier",
              "Redundância N+N",
              "Disaster recovery",
              "Replicação síncrona",
              "Failover < 30s",
              "Monitoramento 24x7",
              "SLA 99.99%"
            ],
            tags: ["ha", "premium", "enterprise", "disaster-recovery", "critical"],
            observations: "Setup enterprise com SLA premium e suporte prioritário"
          },
          {
            id: "9.3.4",
            name: "Smart Hands",
            description: "Serviço técnico presencial especializado no datacenter",
            functionality: "Técnico especializado executa procedimentos complexos presencialmente",
            applicability: "Manutenção especializada, troubleshooting avançado, procedimentos críticos",
            example: "Substituição de placa-mãe, configuração de RAID, diagnóstico hardware",
            price: 400,
            characteristics: [
              "Técnico especializado",
              "Conhecimento avançado",
              "Ferramentas profissionais",
              "Diagnóstico preciso",
              "Relatório detalhado",
              "Fotos do procedimento",
              "Comunicação em tempo real"
            ],
            tags: ["smart-hands", "especializado", "presencial", "avancado", "diagnostico"],
            observations: "Cobrança por hora - mínimo 1 hora, inclui relatório técnico"
          },
          {
            id: "9.3.5",
            name: "Remote Hands",
            description: "Execução de procedimentos técnicos com instruções remotas",
            functionality: "Técnico executa procedimentos com base em instruções detalhadas do cliente",
            applicability: "Procedimentos rotineiros, seguimento de scripts, manutenção programada",
            example: "Reinicialização de serviços, troca de cabos, execução de scripts",
            price: 300,
            characteristics: [
              "Execução de scripts",
              "Seguimento de instruções",
              "Comunicação constante",
              "Fotos de verificação",
              "Log de atividades",
              "Confirmação de resultados",
              "Disponibilidade rápida"
            ],
            tags: ["remote-hands", "scripts", "instrucoes", "rotineiro", "rapido"],
            observations: "Cobrança por hora - procedimentos com base em instruções do cliente"
          },
          {
            id: "9.3.6",
            name: "Expertise Hands",
            description: "Correções e configurações avançadas sob demanda",
            functionality: "Especialista resolve problemas complexos e implementa soluções avançadas",
            applicability: "Problemas críticos, otimizações complexas, arquiteturas avançadas",
            example: "Otimização de performance, troubleshooting de rede, tuning de banco",
            price: 600,
            characteristics: [
              "Especialista sênior",
              "Resolução de problemas",
              "Otimização avançada",
              "Análise de root cause",
              "Soluções customizadas",
              "Documentação técnica",
              "Knowledge transfer"
            ],
            tags: ["expertise", "avancado", "otimizacao", "senior", "problemas"],
            observations: "Cobrança por hora - especialista sênior para problemas complexos"
          }
        ]
      }
    ]
  },
  {
    id: "10",
    name: "IT TRANSFORMATION SERVICE",
    description: "Serviços de transformação digital e modernização de TI 🚀",
    subcategories: [
      {
        id: "10.1",
        name: "Compliance",
        description: "Consultoria para implementação de certificações e frameworks de governança",
        items: [
          {
            id: "10.1.1",
            name: "Consultoria ISO 27001",
            description: "Implementação completa da certificação ISO 27001 para segurança da informação",
            functionality: "Consultoria especializada para adequação e certificação ISO 27001",
            applicability: "Empresas que precisam de certificação internacional, compliance regulatório",
            example: "Implementação ISO 27001 em fintech com 200 funcionários",
            characteristics: [
              "Gap analysis inicial",
              "Política de segurança",
              "Procedimentos operacionais",
              "Treinamento de equipes",
              "Auditoria interna",
              "Preparação para certificação",
              "Acompanhamento contínuo"
            ],
            externalLink: "https://hostdime.com.br/contato",
            tags: ["iso", "27001", "seguranca", "compliance", "certificacao"],
            observations: "Projeto sob medida - duração média 6-12 meses"
          },
          {
            id: "10.1.2",
            name: "Consultoria PCI DSS",
            description: "Adequação aos padrões PCI DSS para processamento de cartões",
            functionality: "Implementação completa dos controles PCI DSS para ambiente de cartões",
            applicability: "E-commerce, fintechs, processadoras de pagamento, adquirentes",
            example: "Adequação PCI DSS Level 1 para gateway de pagamentos",
            characteristics: [
              "Assessment inicial",
              "Segmentação de rede",
              "Criptografia de dados",
              "Controles de acesso",
              "Monitoramento contínuo",
              "Testes de penetração",
              "Documentação completa"
            ],
            externalLink: "https://hostdime.com.br/contato",
            tags: ["pci", "dss", "pagamentos", "cartao", "fintech"],
            observations: "Consultoria especializada - inclui assessment e remediação"
          },
          {
            id: "10.1.3",
            name: "Framework ITIL",
            description: "Implementação de práticas ITIL para gerenciamento de serviços de TI",
            functionality: "Estruturação de processos de TI baseados em melhores práticas ITIL",
            applicability: "Departamentos de TI, service desk, operações de infraestrutura",
            example: "Implementação ITIL v4 com service desk e gestão de incidentes",
            characteristics: [
              "Mapeamento de processos",
              "Service desk estruturado",
              "Gestão de incidentes",
              "Gestão de mudanças",
              "SLA e métricas",
              "Treinamento de equipes",
              "Melhoria contínua"
            ],
            externalLink: "https://hostdime.com.br/contato",
            tags: ["itil", "processos", "service-desk", "gestao", "qualidade"],
            observations: "Implementação gradual com foco em quick wins iniciais"
          }
        ]
      },
      {
        id: "10.2",
        name: "Otimização de Infraestrutura",
        description: "Revisão e modernização de ambientes tecnológicos",
        items: [
          {
            id: "10.2.1",
            name: "Assessment de Infraestrutura",
            description: "Análise completa da infraestrutura atual com recomendações de melhoria",
            functionality: "Avaliação técnica detalhada de performance, segurança e adequação às normas",
            applicability: "Empresas com infraestrutura legada, problemas de performance, expansão",
            example: "Assessment de datacenter com 100 servidores e recomendações de cloud hybrid",
            price: 15000,
            characteristics: [
              "Análise de performance",
              "Avaliação de segurança",
              "Compliance assessment",
              "Análise de custos",
              "Roadmap de modernização",
              "Priorização de ações",
              "ROI projetado"
            ],
            tags: ["assessment", "infraestrutura", "performance", "modernizacao", "roadmap"],
            observations: "Inclui relatório executivo e roadmap de 24 meses"
          },
          {
            id: "10.2.2",
            name: "Modernização Cloud",
            description: "Migração e modernização para arquiteturas cloud-native",
            functionality: "Transformação de aplicações legadas para arquiteturas modernas em cloud",
            applicability: "Modernização de sistemas, redução de custos, escalabilidade",
            example: "Migração de ERP monolítico para microserviços em containers",
            characteristics: [
              "Cloud readiness assessment",
              "Containerização",
              "Microserviços",
              "CI/CD pipeline",
              "Infrastructure as Code",
              "Monitoring moderno",
              "Cost optimization"
            ],
            externalLink: "https://hostdime.com.br/contato",
            tags: ["cloud", "modernizacao", "containers", "microservicos", "devops"],
            observations: "Projeto estruturado com entregas incrementais e POCs"
          },
          {
            id: "10.2.3",
            name: "Otimização de Performance",
            description: "Melhoria de performance e eficiência de sistemas críticos",
            functionality: "Análise e otimização de gargalos de performance em aplicações e infraestrutura",
            applicability: "Aplicações lentas, problemas de escalabilidade, alto consumo de recursos",
            example: "Otimização de aplicação web com redução de 70% no tempo de resposta",
            price: 8500,
            characteristics: [
              "Performance profiling",
              "Identificação de gargalos",
              "Otimização de código",
              "Tuning de banco de dados",
              "Cache strategies",
              "Load testing",
              "Monitoramento contínuo"
            ],
            tags: ["performance", "otimizacao", "tuning", "gargalos", "velocidade"],
            observations: "Garantia de melhoria mínima de 40% na performance"
          }
        ]
      },
      {
        id: "10.3",
        name: "Implementação de IA",
        description: "Soluções de inteligência artificial para automação e insights",
        items: [
          {
            id: "10.3.1",
            name: "Private LLM",
            description: "Implementação de Large Language Model privado e customizado",
            functionality: "Solução completa de LLM privado com treinamento específico e interface de acesso",
            applicability: "Empresas que precisam de IA privada, compliance de dados, conhecimento específico",
            example: "LLM privado para análise de contratos jurídicos com LGPD compliance",
            characteristics: [
              "LLM privado dedicado",
              "Treinamento customizado",
              "Interface web intuitiva",
              "API para integração",
              "Compliance LGPD",
              "Controle total dos dados",
              "Múltiplos modelos disponíveis"
            ],
            externalLink: "https://hostdime.com.br/contato",
            tags: ["llm", "ia", "privado", "treinamento", "lgpd"],
            observations: "Solução sob medida - avaliação técnica e de dados necessária"
          },
          {
            id: "10.3.2",
            name: "Support Agent AI",
            description: "Agente de IA para automação de atendimento e helpdesk",
            functionality: "IA especializada para triagem e resolução automática de tickets de suporte",
            applicability: "Service desk, atendimento ao cliente, suporte técnico interno",
            example: "Bot que resolve 60% dos tickets de TI automaticamente",
            characteristics: [
              "Triagem inteligente",
              "Resolução automática",
              "Base de conhecimento",
              "Integração com ITSM",
              "Aprendizado contínuo",
              "Escalação inteligente",
              "Analytics de performance"
            ],
            externalLink: "https://hostdime.com.br/contato",
            tags: ["support", "ai", "helpdesk", "automacao", "tickets"],
            observations: "ROI típico de 6 meses com redução de 50-70% no volume manual"
          },
          {
            id: "10.3.3",
            name: "AI Analytics Platform",
            description: "Plataforma de análise de dados com inteligência artificial",
            functionality: "Solução completa de analytics com IA para insights preditivos e prescritivos",
            applicability: "Business intelligence, análise preditiva, otimização de processos",
            example: "Plataforma que prevê demanda e otimiza estoque automaticamente",
            characteristics: [
              "Machine learning integrado",
              "Análise preditiva",
              "Dashboards inteligentes",
              "Alertas automáticos",
              "Integração de dados",
              "Modelos personalizados",
              "Insights acionáveis"
            ],
            externalLink: "https://hostdime.com.br/contato",
            tags: ["analytics", "ai", "preditivo", "insights", "business"],
            observations: "Plataforma escalável com modelos de IA pré-treinados e customizáveis"
          }
        ]
      },
      {
        id: "10.4",
        name: "Automação",
        description: "Desenvolvimento de soluções personalizadas para automação de processos",
        items: [
          {
            id: "10.4.1",
            name: "Unblock MPX",
            description: "Interface web para desbloqueio automático de IPs em sistemas de segurança",
            functionality: "Sistema automatizado para desbloqueio de IPs bloqueados com interface web intuitiva",
            applicability: "Provedores de internet, empresas com firewall, gestão de acessos",
            example: "Portal self-service para clientes desbloquearem IPs bloqueados",
            price: 8500,
            characteristics: [
              "Interface web responsiva",
              "Desbloqueio automático",
              "Log de atividades",
              "Integração com firewalls",
              "Controle de permissões",
              "API REST",
              "Notificações automáticas"
            ],
            externalLink: "https://preview--ip-unblock-automator.lovable.app/",
            tags: ["unblock", "ip", "firewall", "automacao", "web"],
            observations: "Solução pronta para implementação - customizações disponíveis"
          },
          {
            id: "10.4.2",
            name: "Mail Security Suite",
            description: "Conjunto completo de ferramentas para segurança e saúde de email",
            functionality: "Monitoramento de blacklist, warm-up de IPs e verificação de hardbounces",
            applicability: "Provedores de email, marketing digital, empresas com alto volume de email",
            example: "Monitoramento de 100 IPs com warm-up automático e alertas",
            price: 12000,
            characteristics: [
              "Monitoramento de blacklist",
              "Warm-up automático",
              "Verificação de hardbounces",
              "Dashboard de saúde",
              "Alertas em tempo real",
              "Relatórios detalhados",
              "Integração com MTAs"
            ],
            tags: ["email", "security", "blacklist", "warmup", "bounce"],
            observations: "Melhora deliverability e reputação de email significativamente"
          },
          {
            id: "10.4.3",
            name: "Automação Customizada",
            description: "Desenvolvimento de soluções de automação sob medida",
            functionality: "Criação de aplicações personalizadas para automatizar processos específicos do cliente",
            applicability: "Processos manuais repetitivos, integração de sistemas, workflows complexos",
            example: "Sistema de aprovação de despesas com integração ERP e notificações",
            characteristics: [
              "Análise de processos",
              "Desenvolvimento sob medida",
              "Integração com sistemas",
              "Interface moderna",
              "API para integrações",
              "Documentação completa",
              "Suporte contínuo"
            ],
            externalLink: "https://hostdime.com.br/contato",
            tags: ["automacao", "customizado", "desenvolvimento", "processos", "integracao"],
            observations: "Orçamento sob medida após análise de requisitos detalhada"
          }
        ]
      }
    ]
  },
  {
    id: "11",
    name: "MONITORAMENTO",
    description: "Soluções de monitoramento proativo para infraestrutura e aplicações 📊",
    subcategories: [
      {
        id: "11.1",
        name: "360 Monitoring",
        description: "Solução completa de monitoramento com dashboard e alertas",
        items: [
          {
            id: "11.1.1",
            name: "360 Monitoring Básico",
            description: "Monitoramento básico para 1 servidor e 30 sites",
            functionality: "Monitoramento de disponibilidade, performance e alertas básicos",
            applicability: "Pequenas empresas, sites corporativos, startups",
            example: "Monitoramento de servidor web com 10 sites WordPress",
            price: 30,
            characteristics: [
              "1 servidor incluído",
              "30 sites monitorados",
              "Alertas por email",
              "Dashboard web",
              "Uptime monitoring",
              "Response time",
              "Relatórios mensais"
            ],
            tags: ["360", "monitoring", "basico", "sites", "uptime"],
            observations: "Solução entry-level ideal para pequenos projetos"
          },
          {
            id: "11.1.2",
            name: "Servidor Adicional",
            description: "Adição de servidor extra ao monitoramento 360",
            functionality: "Expansão do monitoramento para servidores adicionais",
            applicability: "Expansão de infraestrutura, múltiplos ambientes",
            example: "Adição de servidor de banco de dados ao monitoramento",
            price: 8,
            characteristics: [
              "Servidor adicional",
              "Métricas completas",
              "Alertas configuráveis",
              "Integração dashboard",
              "Histórico de dados",
              "Performance baseline",
              "SLA tracking"
            ],
            tags: ["360", "adicional", "servidor", "expansao", "metricas"],
            observations: "Addon para expansão do monitoramento base"
          },
          {
            id: "11.1.3",
            name: "Site Adicional",
            description: "Adição de site extra ao monitoramento 360",
            functionality: "Monitoramento adicional de websites e aplicações web",
            applicability: "Múltiplos domínios, expansão de sites, aplicações distribuídas",
            example: "Adição de loja virtual ao monitoramento existente",
            price: 2,
            characteristics: [
              "Site adicional",
              "Availability check",
              "Response time",
              "Content verification",
              "SSL monitoring",
              "Alertas específicos",
              "Performance tracking"
            ],
            tags: ["360", "site", "adicional", "web", "disponibilidade"],
            observations: "Addon para monitoramento de sites adicionais"
          }
        ]
      },
      {
        id: "11.2",
        name: "Enterprise Monitoring",
        description: "Monitoramento avançado para ambientes corporativos e críticos",
        items: [
          {
            id: "11.2.1",
            name: "Monitoramento Dedicado Básico",
            description: "Monitoramento avançado para servidor dedicado sem virtualização",
            functionality: "Monitoramento completo de servidor físico com métricas detalhadas",
            applicability: "Servidores dedicados, aplicações críticas, ambientes de produção",
            example: "Monitoramento de servidor de banco de dados Oracle",
            price: 200,
            characteristics: [
              "Métricas de hardware",
              "Performance do sistema",
              "Alertas personalizados",
              "Dashboard dedicado",
              "Relatórios detalhados",
              "Baseline automático",
              "Notificações NOC"
            ],
            tags: ["enterprise", "dedicado", "hardware", "performance", "critico"],
            observations: "Monitoramento completo para servidores físicos sem VMs"
          },
          {
            id: "11.2.2",
            name: "Monitoramento Dedicado com Virtualização",
            description: "Monitoramento de host físico com visibilidade de VMs",
            functionality: "Monitoramento do hypervisor e máquinas virtuais com correlação de dados",
            applicability: "Ambientes virtualizados, cloud privado, consolidação de servidores",
            example: "VMware vSphere com 8 VMs monitoradas individualmente",
            price: 250,
            characteristics: [
              "Host e VMs",
              "Recursos virtualizados",
              "Correlation engine",
              "VM individual tracking",
              "Resource contention",
              "Capacity planning",
              "Alertas hierárquicos"
            ],
            tags: ["enterprise", "virtualizacao", "vmware", "hypervisor", "vms"],
            observations: "Host base + R$5/VM para visibilidade individual"
          },
          {
            id: "11.2.3",
            name: "Monitoramento Cloud/VHM",
            description: "Monitoramento especializado para ambientes cloud e VHM",
            functionality: "Monitoramento otimizado para instâncias cloud com elasticidade",
            applicability: "Cloud público, instâncias auto-scaling, ambientes dinâmicos",
            example: "Monitoramento de 15 instâncias AWS com auto-scaling",
            price: 40,
            characteristics: [
              "Cloud-native monitoring",
              "Auto-discovery",
              "Elastic scaling",
              "Cost correlation",
              "Multi-cloud support",
              "API integration",
              "Performance optimization"
            ],
            tags: ["cloud", "vhm", "elastic", "auto-scaling", "aws"],
            observations: "Dashboard com login dedicado e métricas cloud-específicas"
          },
          {
            id: "11.2.4",
            name: "Monitoramento Customizado Pequeno",
            description: "Solução customizada para até 5 dispositivos de rede",
            functionality: "Monitoramento personalizado para dispositivos específicos com dashboard customizado",
            applicability: "Equipamentos de rede, IoT, dispositivos especializados",
            example: "Monitoramento de 5 switches core com métricas SNMP",
            price: 300,
            characteristics: [
              "Até 5 dispositivos",
              "Dashboard customizado",
              "Credenciais dedicadas",
              "SNMP monitoring",
              "Alertas NOC",
              "Telegram integration",
              "SLA personalizado"
            ],
            tags: ["customizado", "rede", "snmp", "switches", "telegram"],
            observations: "Entrega via dashboard personalizado com alertas ilimitados"
          },
          {
            id: "11.2.5",
            name: "Monitoramento Customizado Adicional",
            description: "Dispositivos adicionais para monitoramento customizado",
            functionality: "Expansão do monitoramento customizado para dispositivos extras",
            applicability: "Crescimento de infraestrutura, novos equipamentos, expansão de rede",
            example: "Adição de firewalls e roteadores ao monitoramento existente",
            price: 20,
            characteristics: [
              "Dispositivo adicional",
              "Integração dashboard",
              "Alertas configuráveis",
              "Métricas específicas",
              "Telefone ou SMS",
              "Correlação de dados",
              "Response opcional"
            ],
            tags: ["adicional", "dispositivo", "expansao", "firewall", "roteador"],
            observations: "Addon com resposta opcional por telefone ou SMS"
          }
        ]
      }
    ]
  },
  {
    id: "12",
    name: "INTELIGÊNCIA ARTIFICIAL",
    description: "Soluções de IA e GPU para machine learning e computação avançada 🤖",
    subcategories: [
      {
        id: "12.1",
        name: "GPU as a Service",
        description: "Acesso sob demanda a GPUs de alta performance para IA e ML",
        items: [
          {
            id: "12.1.1",
            name: "GPU NVIDIA A100",
            description: "GPU enterprise para treinamento de modelos de IA e ML de grande escala",
            functionality: "Acesso a GPU NVIDIA A100 com 80GB HBM2e para workloads intensivos de IA",
            applicability: "Treinamento de LLMs, deep learning, research científico, simulações",
            example: "Treinamento de modelo de linguagem com 7B parâmetros",
            price: 1800,
            characteristics: [
              "80GB HBM2e memory",
              "6912 CUDA cores",
              "Tensor cores 3rd gen",
              "NVLink connectivity",
              "Multi-instance GPU",
              "ECC memory",
              "PCIe Gen4"
            ],
            externalLink: "https://gpuaas.com/",
            tags: ["gpu", "a100", "ai", "ml", "training"],
            observations: "Cobrança por hora - ideal para treinamento de modelos grandes"
          },
          {
            id: "12.1.2",
            name: "GPU NVIDIA H100",
            description: "GPU de última geração para IA generativa e transformers",
            functionality: "GPU H100 com arquitetura Hopper para máxima performance em IA generativa",
            applicability: "LLMs, IA generativa, transformers, inferência em tempo real",
            example: "Inferência de GPT-4 com baixa latência para produção",
            price: 2800,
            characteristics: [
              "80GB HBM3 memory",
              "Hopper architecture",
              "Transformer engine",
              "FP8 precision",
              "NVLink 4.0",
              "4th gen Tensor cores",
              "Confidential computing"
            ],
            externalLink: "https://gpuaas.com/",
            tags: ["gpu", "h100", "generative", "hopper", "inference"],
            observations: "Estado da arte para IA generativa - performance 6x superior ao A100"
          },
          {
            id: "12.1.3",
            name: "GPU NVIDIA RTX 4090",
            description: "GPU consumer de alta performance para desenvolvimento e prototipagem",
            functionality: "RTX 4090 otimizada para desenvolvimento, fine-tuning e inferência de modelos médios",
            applicability: "Desenvolvimento de IA, fine-tuning, prototipagem, computer vision",
            example: "Fine-tuning de modelo Llama 7B para caso específico",
            price: 650,
            characteristics: [
              "24GB GDDR6X",
              "16384 CUDA cores",
              "3rd gen RT cores",
              "4th gen Tensor cores",
              "Ada Lovelace arch",
              "AV1 encoding",
              "DLSS 3.0"
            ],
            externalLink: "https://gpuaas.com/",
            tags: ["gpu", "rtx4090", "development", "finetuning", "prototype"],
            observations: "Excelente custo-benefício para desenvolvimento e modelos médios"
          },
          {
            id: "12.1.4",
            name: "GPU Cluster Multi-Node",
            description: "Cluster de GPUs para treinamento distribuído de modelos grandes",
            functionality: "Cluster interconectado de GPUs para treinamento paralelo e distribuído",
            applicability: "Modelos com 100B+ parâmetros, pesquisa avançada, simulações complexas",
            example: "Treinamento de LLM com 175B parâmetros em cluster de 8x A100",
            characteristics: [
              "Multi-GPU setup",
              "InfiniBand networking",
              "Distributed training",
              "Model parallelism",
              "High-speed storage",
              "Container orchestration",
              "Monitoring integrado"
            ],
            externalLink: "https://gpuaas.com/",
            tags: ["cluster", "distributed", "multi-gpu", "large-models", "research"],
            observations: "Configuração sob medida - consulte especialistas para arquitetura"
          }
        ]
      },
      {
        id: "12.2",
        name: "AI Consulting",
        description: "Consultoria especializada em implementação de soluções de IA",
        items: [
          {
            id: "12.2.1",
            name: "Private LLM Implementation",
            description: "Implementação completa de Large Language Model privado",
            functionality: "Solução end-to-end de LLM privado com treinamento customizado e interface",
            applicability: "Empresas com dados sensíveis, compliance LGPD, conhecimento específico",
            example: "LLM privado para análise de documentos jurídicos com 99% de precisão",
            characteristics: [
              "LLM dedicado privado",
              "Treinamento customizado",
              "Fine-tuning específico",
              "Interface web moderna",
              "API para integração",
              "Compliance LGPD/GDPR",
              "Controle total dos dados"
            ],
            externalLink: "https://hostdime.com.br/contato",
            tags: ["llm", "private", "compliance", "customizado", "legal"],
            observations: "Solução completa - da infraestrutura ao treinamento do modelo"
          },
          {
            id: "12.2.2",
            name: "Support Agent AI",
            description: "Agente de IA para automação inteligente de suporte técnico",
            functionality: "IA especializada em triagem, resolução automática e escalação inteligente",
            applicability: "Service desk, help desk, atendimento ao cliente, suporte técnico",
            example: "Bot que resolve 70% dos tickets Nível 1 automaticamente",
            characteristics: [
              "Processamento de linguagem natural",
              "Base de conhecimento integrada",
              "Escalação inteligente",
              "Integração ITSM",
              "Aprendizado contínuo",
              "Multi-idioma",
              "Analytics avançado"
            ],
            externalLink: "https://hostdime.com.br/contato",
            tags: ["support", "automation", "nlp", "helpdesk", "tickets"],
            observations: "ROI típico em 4-6 meses com redução de 60-80% no workload manual"
          },
          {
            id: "12.2.3",
            name: "AI Strategy Consulting",
            description: "Consultoria estratégica para adoção de IA na empresa",
            functionality: "Definição de roadmap de IA alinhado aos objetivos de negócio",
            applicability: "Empresas iniciando jornada de IA, transformação digital, inovação",
            example: "Roadmap de IA para banco com foco em detecção de fraude e chatbot",
            characteristics: [
              "Assessment de maturidade IA",
              "Identificação de use cases",
              "ROI e viabilidade",
              "Roadmap executivo",
              "Arquitetura de dados",
              "Governance de IA",
              "Change management"
            ],
            externalLink: "https://hostdime.com.br/contato",
            tags: ["strategy", "roadmap", "assessment", "governance", "transformation"],
            observations: "Consultoria executiva - foco em casos de uso com maior impacto"
          }
        ]
      },
      {
        id: "12.3",
        name: "AI Cloud",
        description: "Infraestrutura cloud otimizada para aplicações de IA e automação",
        items: [
          {
            id: "12.3.1",
            name: "N8N Automation Cloud",
            description: "Instância cloud dedicada para automação N8N",
            functionality: "Ambiente gerenciado para criação e execução de workflows de automação",
            applicability: "Automação de processos, integração de sistemas, workflows complexos",
            example: "Automação de pipeline de vendas integrando CRM, email e WhatsApp",
            price: 299,
            characteristics: [
              "N8N pré-configurado",
              "Interface visual drag-drop",
              "500+ integrações nativas",
              "Workflows ilimitados",
              "Backup automático",
              "SSL incluído",
              "Suporte técnico"
            ],
            tags: ["n8n", "automation", "workflow", "integration", "nocode"],
            observations: "Solução plug-and-play para automação sem código"
          },
          {
            id: "12.3.2",
            name: "LLM Inference Cloud",
            description: "Infraestrutura otimizada para inferência de modelos de linguagem",
            functionality: "Ambiente cloud com GPUs otimizado para servir modelos de IA em produção",
            applicability: "APIs de IA, chatbots inteligentes, análise de texto, content generation",
            example: "API de chatbot para e-commerce com 10k consultas/dia",
            price: 899,
            characteristics: [
              "GPU dedicada",
              "Auto-scaling",
              "Load balancing",
              "API management",
              "Monitoring avançado",
              "Cache inteligente",
              "SLA 99.9%"
            ],
            tags: ["inference", "api", "chatbot", "gpu", "production"],
            observations: "Inclui GPU T4 - upgrade para A100/H100 disponível"
          },
          {
            id: "12.3.3",
            name: "Computer Vision Cloud",
            description: "Plataforma cloud para processamento de imagens e vídeo com IA",
            functionality: "Ambiente especializado para aplicações de visão computacional e análise visual",
            applicability: "Análise de imagens, detecção de objetos, OCR, análise de vídeo",
            example: "Sistema de análise de qualidade em linha de produção industrial",
            price: 1299,
            characteristics: [
              "GPUs otimizadas para CV",
              "Frameworks pré-instalados",
              "Pipeline de processamento",
              "APIs REST prontas",
              "Storage otimizado",
              "Real-time processing",
              "Edge deployment"
            ],
            tags: ["computer-vision", "image", "video", "detection", "ocr"],
            observations: "Inclui OpenCV, TensorFlow, PyTorch e frameworks populares"
          },
          {
            id: "12.3.4",
            name: "MLOps Platform",
            description: "Plataforma completa para desenvolvimento e deploy de modelos ML",
            functionality: "Ambiente end-to-end para ciclo de vida de machine learning",
            applicability: "Equipes de data science, desenvolvimento de ML, modelos em produção",
            example: "Pipeline completo de ML para previsão de demanda com CI/CD",
            price: 1899,
            characteristics: [
              "Jupyter notebooks",
              "Model versioning",
              "Experiment tracking",
              "CI/CD para ML",
              "Model serving",
              "A/B testing",
              "Monitoring de drift"
            ],
            tags: ["mlops", "datascience", "jupyter", "cicd", "serving"],
            observations: "Plataforma completa com ferramentas de MLOps integradas"
          }
        ]
      }
    ]
  }
];
