import { DataCenter } from "@/types/catalog";

export const dataCenters: DataCenter[] = [
  {
    id: "DC.1",
    name: "JPA",
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
    costBenefit: "Máxima certificação e Localização Estratégica",
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
    id: "DC.2",
    name: "SPO",
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
    id: "DC.3",
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
    id: "DC.4",
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
    id: "DC.5",
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
