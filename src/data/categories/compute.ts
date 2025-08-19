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
                          description: "SSD NVMe de alta performance para aplicações de missão crítica",
                          price: 699,
                          functionality: "Storage NVMe premium com máxima performance e durabilidade",
                          applicability: "Databases críticos de alta carga, cache L1, aplicações financeiras, tempo real",
                          example: "Database para sistema financeiro com milhares de transações por segundo",
                          characteristics: ["1TB capacidade", "PCIe 4.0", "Kingston KC3000", "Enterprise Plus grade", "TBW elevado"],
                          tags: ["storage", "nvme", "enterprise-plus", "mission-critical", "financial"]
                        },
                        {
                          id: "1.1.1.4.1.1.3",
                          name: "2TB NVMe Enterprise (Kingston NV2)",
                          description: "SSD NVMe enterprise com alta capacidade para aplicações exigentes",
                          price: 900,
                          functionality: "Storage de alta performance com grande capacidade",
                          applicability: "Databases médios a grandes, virtualização, cache distribuído",
                          example: "Cluster Elasticsearch ou armazenamento de máquinas virtuais",
                          characteristics: ["2TB capacidade", "PCIe 3.0 x4", "Kingston NV2", "Enterprise grade", "Alta densidade"],
                          tags: ["storage", "nvme", "enterprise", "high-capacity", "virtualization"]
                        },
                        {
                          id: "1.1.1.4.1.1.4",
                          name: "2TB NVMe Enterprise Plus (Kingston KC3000)",
                          description: "SSD NVMe premium de alta capacidade para workloads intensivos",
                          price: 1600,
                          functionality: "Storage NVMe premium com máxima performance e alta capacidade",
                          applicability: "Big data, analytics, HPC, banco de dados de alta carga",
                          example: "Analytics em tempo real ou aplicação de processamento científico",
                          characteristics: ["2TB capacidade", "PCIe 4.0", "Kingston KC3000", "Enterprise Plus grade", "IOPS elevado"],
                          tags: ["storage", "nvme", "enterprise-plus", "analytics", "scientific"]
                        },
                        {
                          id: "1.1.1.4.1.1.5",
                          name: "4TB NVMe Enterprise (Kingston NV2)",
                          description: "SSD NVMe enterprise de capacidade massiva para grandes volumes de dados",
                          price: 1849,
                          functionality: "Storage de alta densidade com boa performance para grandes conjuntos de dados",
                          applicability: "Data warehousing, arquivo ativo, big data, storage tier médio",
                          example: "Data warehouse ou aplicação de media processing com grande volume",
                          characteristics: ["4TB capacidade", "PCIe 3.0 x4", "Kingston NV2", "Enterprise grade", "Alta densidade"],
                          tags: ["storage", "nvme", "enterprise", "massive-capacity", "data-warehouse"]
                        },
                        {
                          id: "1.1.1.4.1.1.6",
                          name: "4TB NVMe Enterprise Plus (Kingston KC3000)",
                          description: "SSD NVMe premium de capacidade massiva para workloads críticos extensos",
                          price: 3200,
                          functionality: "Storage premium de alta capacidade com máxima durabilidade e performance",
                          applicability: "Databases críticos extensos, big data em tempo real, HPC, AI/ML",
                          example: "Plataforma de machine learning ou database crítico de alta escala",
                          characteristics: ["4TB capacidade", "PCIe 4.0", "Kingston KC3000", "Enterprise Plus grade", "Durabilidade extrema"],
                          tags: ["storage", "nvme", "enterprise-plus", "ai-ml", "critical-database"]
                        },
                        {
                          id: "1.1.1.4.1.1.7",
                          name: "8TB NVMe Enterprise Plus (WD BLACK)",
                          description: "SSD NVMe premium com máxima capacidade para workloads extremos",
                          price: 7600,
                          functionality: "Storage de ultra-alta capacidade com performance premium para cargas massivas",
                          applicability: "Computação de alto desempenho, AI/ML, virtualização massiva, video editing 8K",
                          example: "Treinamento de modelos AI com datasets massivos ou edição de vídeo 8K",
                          characteristics: ["8TB capacidade", "PCIe 4.0", "WD BLACK", "Enterprise Plus grade", "Capacidade extrema"],
                          tags: ["storage", "nvme", "enterprise-plus", "maximum-capacity", "extreme-workload"]
                        },
                        {
                          id: "1.1.1.4.1.1.8",
                          name: "8TB NVMe PCIe M.2 SSD",
                          description: "SSD NVMe de máxima capacidade em formato M.2 para servidores de alta densidade",
                          price: 7000,
                          functionality: "Storage de ultra-alta capacidade em formato compacto M.2",
                          applicability: "Servidores de alta densidade, edge computing avançado, storage arrays compactos",
                          example: "Edge server para processamento local de grandes conjuntos de dados IoT",
                          characteristics: ["8TB capacidade", "PCIe 4.0", "M.2 form factor", "Enterprise grade", "Alta densidade"],
                          tags: ["storage", "nvme", "m.2", "high-density", "edge-computing"]
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
                          description: "SSD de capacidade média para sistema e aplicações",
                          price: 480,
                          functionality: "Storage sólido com boa capacidade para múltiplas aplicações",
                          applicability: "Sistema operacional + aplicações, web servers médios, desenvolvimento",
                          example: "Servidor web com múltiplos sites ou ambiente de desenvolvimento",
                          characteristics: ["480GB capacidade", "2.5\" SATA", "TLC NAND", "Confiabilidade média"],
                          tags: ["storage", "ssd", "medium", "web-server", "development"]
                        },
                        {
                          id: "1.1.1.4.1.2.3",
                          name: "1TB SSD - 2.5\" Enterprise (Crucial)",
                          description: "SSD enterprise para aplicações corporativas com boa capacidade",
                          price: 439,
                          functionality: "Storage sólido com capacidade expandida e confiabilidade enterprise",
                          applicability: "Aplicações corporativas, databases médios, virtualização básica",
                          example: "Database MySQL ou servidor com múltiplas VMs pequenas",
                          characteristics: ["1TB capacidade", "2.5\" SATA", "Crucial", "Enterprise grade", "Durabilidade melhorada"],
                          tags: ["storage", "ssd", "enterprise", "database", "virtualization"]
                        },
                        {
                          id: "1.1.1.4.1.2.4",
                          name: "960GB SSD - 2.5\" Enterprise Plus (Kingston)",
                          description: "SSD premium para aplicações críticas com alta durabilidade",
                          price: 1100,
                          functionality: "Storage sólido de alta confiabilidade para operações críticas 24/7",
                          applicability: "Databases críticos, aplicações financeiras, sistemas de alta disponibilidade",
                          example: "Database transacional crítico ou sistema financeiro",
                          characteristics: ["960GB capacidade", "2.5\" SATA", "Kingston Enterprise", "Power loss protection", "Alta durabilidade"],
                          tags: ["storage", "ssd", "enterprise-plus", "critical", "financial"]
                        },
                        {
                          id: "1.1.1.4.1.2.5",
                          name: "2TB SSD - 2.5\" Enterprise (Crucial)",
                          description: "SSD enterprise de alta capacidade para grandes volumes de dados",
                          price: 800,
                          functionality: "Storage sólido de alta capacidade com confiabilidade enterprise",
                          applicability: "Databases grandes, virtualização média, content storage",
                          example: "Servidor de content delivery ou virtualização com múltiplas VMs",
                          characteristics: ["2TB capacidade", "2.5\" SATA", "Crucial", "Enterprise grade", "Alta capacidade"],
                          tags: ["storage", "ssd", "enterprise", "high-capacity", "content-delivery"]
                        },
                        {
                          id: "1.1.1.4.1.2.6",
                          name: "1.92TB SSD - 2.5\" Enterprise Plus (Kingston)",
                          description: "SSD premium de alta capacidade para aplicações críticas exigentes",
                          price: 2000,
                          functionality: "Storage sólido de alta capacidade com máxima durabilidade e consistência",
                          applicability: "Databases críticos grandes, OLTP, sistemas financeiros, alta disponibilidade",
                          example: "Sistema OLTP de alta carga ou aplicação financeira crítica",
                          characteristics: ["1.92TB capacidade", "2.5\" SATA", "Kingston Enterprise", "End-to-end data protection", "DWPD elevado"],
                          tags: ["storage", "ssd", "enterprise-plus", "oltp", "financial"]
                        },
                        {
                          id: "1.1.1.4.1.2.7",
                          name: "4TB SSD - 2.5\" Enterprise (Crucial)",
                          description: "SSD enterprise de capacidade massiva para grandes volumes de dados",
                          price: 2200,
                          functionality: "Storage sólido de capacidade massiva com confiabilidade enterprise",
                          applicability: "Big data, arquivo ativo, content delivery, virtualização extensiva",
                          example: "Plataforma de content delivery ou servidor de arquivo ativo",
                          characteristics: ["4TB capacidade", "2.5\" SATA", "Crucial", "Enterprise grade", "Capacidade massiva"],
                          tags: ["storage", "ssd", "enterprise", "big-data", "content-delivery"]
                        },
                        {
                          id: "1.1.1.4.1.2.8",
                          name: "4TB SSD - 2.5\" Enterprise Plus (Intel)",
                          description: "SSD premium Intel de capacidade massiva para aplicações críticas",
                          price: 3700,
                          functionality: "Storage sólido premium Intel com máxima confiabilidade e capacidade",
                          applicability: "Databases críticos massivos, OLTP de alta escala, sistemas financeiros críticos",
                          example: "Database Oracle RAC de alta disponibilidade ou sistema financeiro crítico",
                          characteristics: ["4TB capacidade", "2.5\" SATA", "Intel Enterprise", "Power loss protection", "Máxima durabilidade"],
                          tags: ["storage", "ssd", "enterprise-plus", "intel", "mission-critical"]
                        },
                        {
                          id: "1.1.1.4.1.2.9",
                          name: "8TB SSD - 2.5\" Enterprise",
                          description: "SSD enterprise de ultra capacidade para máximos volumes de dados",
                          price: 5300,
                          functionality: "Storage sólido de ultra capacidade com alta densidade",
                          applicability: "Data warehousing, big data, arquivo ativo massivo, consolidação de storage",
                          example: "Consolidação de storage para múltiplas aplicações ou data warehouse",
                          characteristics: ["8TB capacidade", "2.5\" SATA", "Enterprise grade", "Ultra capacidade", "Alta densidade"],
                          tags: ["storage", "ssd", "enterprise", "ultra-capacity", "data-warehouse"]
                        },
                        {
                          id: "1.1.1.4.1.2.10",
                          name: "7.68TB SSD - 2.5\" Enterprise Plus (Kingston)",
                          description: "SSD premium Kingston de ultra capacidade para aplicações críticas massivas",
                          price: 5390,
                          functionality: "Storage sólido premium de ultra capacidade com máxima confiabilidade",
                          applicability: "Consolidação de sistemas críticos, databases massivos, OLTP de alta escala",
                          example: "Consolidação de múltiplas bases de dados críticas ou OLTP de ultra escala",
                          characteristics: ["7.68TB capacidade", "2.5\" SATA", "Kingston Enterprise", "End-to-end data protection", "Ultra capacidade"],
                          tags: ["storage", "ssd", "enterprise-plus", "ultra-capacity", "critical-consolidation"]
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
                          description: "Disco rígido padrão para armazenamento econômico",
                          price: 400,
                          functionality: "Storage econômico para dados não críticos ou arquivamento",
                          applicability: "Arquivamento de dados, backup secundário, storage de baixo custo",
                          example: "Servidor de backup ou arquivamento de logs históricos",
                          characteristics: ["1TB capacidade", "3.5\" SATA", "7200 RPM", "Econômico"],
                          tags: ["storage", "hdd", "economical", "archive", "backup"]
                        },
                        {
                          id: "1.1.1.4.1.3.3",
                          name: "2TB HDD - 3.5\"",
                          description: "Disco rígido de capacidade média para storage geral",
                          price: 439,
                          functionality: "Storage de capacidade média para uso geral",
                          applicability: "File servers, armazenamento geral, backups, dados secundários",
                          example: "Servidor de arquivos departamental ou backup de estações de trabalho",
                          characteristics: ["2TB capacidade", "3.5\" SATA", "7200 RPM", "Uso geral"],
                          tags: ["storage", "hdd", "general-purpose", "file-server", "backup"]
                        },
                        {
                          id: "1.1.1.4.1.3.4",
                          name: "4TB HDD - 3.5\"",
                          description: "Disco rígido de boa capacidade para dados extensos",
                          price: 596,
                          functionality: "Storage econômico de boa capacidade para grandes volumes de dados",
                          applicability: "File servers médios, backups, armazenamento de mídia, logs extensos",
                          example: "Servidor de arquivos corporativo ou armazenamento de media",
                          characteristics: ["4TB capacidade", "3.5\" SATA", "7200 RPM", "Capacidade média"],
                          tags: ["storage", "hdd", "medium-capacity", "media-storage", "file-server"]
                        },
                        {
                          id: "1.1.1.4.1.3.5",
                          name: "8TB HDD - 3.5\"",
                          description: "Disco rígido de alta capacidade para storage massivo",
                          price: 974,
                          functionality: "Storage de alta capacidade para dados massivos não críticos",
                          applicability: "NAS corporativo, storage de media, big data econômico, arquivamento extenso",
                          example: "Servidor NAS corporativo ou storage para biblioteca de mídia",
                          characteristics: ["8TB capacidade", "3.5\" SATA", "7200 RPM", "Alta capacidade"],
                          tags: ["storage", "hdd", "high-capacity", "nas", "media-storage"]
                        },
                        {
                          id: "1.1.1.4.1.3.6",
                          name: "12TB HDD - 3.5\"",
                          description: "Disco rígido de capacidade massiva para storage de alta densidade",
                          price: 1500,
                          functionality: "Storage de capacidade massiva otimizado para densidade e economia",
                          applicability: "Storage arrays econômicos, arquivamento massivo, big data econômico",
                          example: "Array de storage econômico para big data ou arquivo frio",
                          characteristics: ["12TB capacidade", "3.5\" SATA", "7200 RPM", "Densidade elevada"],
                          tags: ["storage", "hdd", "massive-capacity", "big-data", "cold-storage"]
                        },
                        {
                          id: "1.1.1.4.1.3.7",
                          name: "16TB HDD - 3.5\"",
                          description: "Disco rígido de ultra capacidade para máxima densidade de armazenamento",
                          price: 1500,
                          functionality: "Storage de ultra capacidade para máxima economia de espaço em rack",
                          applicability: "Storage arrays densos, arquivamento massivo, big data econômico em escala",
                          example: "Array denso para data lake econômico ou arquivamento corporativo",
                          characteristics: ["16TB capacidade", "3.5\" SATA", "7200 RPM", "Ultra capacidade"],
                          tags: ["storage", "hdd", "ultra-capacity", "data-lake", "archive"]
                        },
                        {
                          id: "1.1.1.4.1.3.8",
                          name: "18TB HDD - 3.5\"",
                          description: "Disco rígido de capacidade extrema para storage de escala petabyte",
                          price: 3000,
                          functionality: "Storage de capacidade extrema para consolidação massiva de dados",
                          applicability: "Escala petabyte, data lakes, cold storage, arquivo definitivo",
                          example: "Storage para data lake corporativo ou arquivo regulatório de longo prazo",
                          characteristics: ["18TB capacidade", "3.5\" SATA", "7200 RPM", "Capacidade extrema"],
                          tags: ["storage", "hdd", "extreme-capacity", "petabyte-scale", "regulatory-archive"]
                        },
                        {
                          id: "1.1.1.4.1.3.9",
                          name: "20TB HDD - 3.5\"",
                          description: "Disco rígido de capacidade massiva de última geração",
                          price: 3800,
                          functionality: "Storage de nova geração para máxima densidade e capacidade",
                          applicability: "Hyperscale storage, archive massivo, data lakes corporativos",
                          example: "Storage hyperscale para provedores de serviço ou grandes corporações",
                          characteristics: ["20TB capacidade", "3.5\" SATA", "Helium-filled", "CMR Technology"],
                          tags: ["storage", "hdd", "hyperscale", "helium", "cmr"]
                        },
                        {
                          id: "1.1.1.4.1.3.10",
                          name: "22TB HDD - 3.5\"",
                          description: "Disco rígido de máxima capacidade para armazenamento de ponta",
                          price: 4000,
                          functionality: "Storage de ponta com máxima capacidade disponível em disco único",
                          applicability: "Storage de escala extrema, grandes provedores, corporações globais",
                          example: "Storage para provedores de nuvem ou corporações com escala petabyte",
                          characteristics: ["22TB capacidade", "3.5\" SATA", "Tecnologia avançada", "Máxima densidade"],
                          tags: ["storage", "hdd", "maximum-capacity", "cloud-provider", "petabyte"]
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
};
