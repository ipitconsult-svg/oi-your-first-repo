import { Category } from "@/types/catalog";

export const itTransformationServicesCategory: Category = {
  id: "10",
  name: "IT TRANSFORMATION SERVICES",
  description: "Serviços de transformação digital, modernização e otimização de ambientes de TI",
  subcategories: [
    {
      id: "10.1",
      name: "Modernização de Aplicações",
      description: "Serviços para modernização e transformação de aplicações legadas",
      items: [
        {
          id: "10.1.1",
          name: "Containerização de Aplicações",
          description: "Projeto de transformação de aplicações para containers",
          price: 15000.00,
          functionality: "Conversão de aplicações tradicionais para arquitetura containerizada",
          applicability: "Empresas com aplicações monolíticas que buscam modernização",
          example: "Migração de aplicações Java, .NET ou outras para Docker/Kubernetes",
          characteristics: [
            "Avaliação de viabilidade",
            "Refatoração de código quando necessário",
            "Criação de imagens Docker otimizadas",
            "Definição de estratégia de CI/CD",
            "Transferência de conhecimento"
          ],
          tags: ["containerization", "docker", "kubernetes", "modernization", "transformation"]
        },
        {
          id: "10.1.2",
          name: "Migração para Microserviços",
          description: "Decomposição de aplicações monolíticas em microserviços",
          price: 45000.00,
          functionality: "Transformação arquitetural para modelo de microserviços",
          applicability: "Empresas com aplicações complexas que buscam agilidade e escalabilidade",
          example: "Decomposição de monolitos em microserviços independentes e escaláveis",
          characteristics: [
            "Análise de domínio e bounded contexts",
            "Design de APIs e contratos",
            "Estratégia de decomposição gradual",
            "Implementação de service mesh",
            "DevOps e automação"
          ],
          tags: ["microservices", "architecture", "decomposition", "modernization", "agility"]
        },
        {
          id: "10.1.3",
          name: "Refatoração para Cloud Native",
          description: "Refatoração de aplicações para aproveitamento máximo de cloud",
          price: 35000.00,
          functionality: "Transformação de aplicações para arquitetura verdadeiramente cloud-native",
          applicability: "Empresas com aplicações que não aproveitam recursos nativos de nuvem",
          example: "Refatoração para utilizar serviços gerenciados, auto-scaling e resiliência",
          characteristics: [
            "Análise de arquitetura atual",
            "Design cloud-native",
            "Implementação de resiliência",
            "Integração com serviços gerenciados",
            "Automação de infraestrutura"
          ],
          tags: ["cloud-native", "refactoring", "modernization", "resilience", "transformation"]
        },
        {
          id: "10.1.4",
          name: "Modernização de Front-end",
          description: "Atualização e modernização de interfaces de usuário",
          price: 28000.00,
          functionality: "Transformação de interfaces legadas em experiências modernas",
          applicability: "Aplicações com interfaces desatualizadas ou não responsivas",
          example: "Migração de UI legada para frameworks modernos como React, Angular ou Vue",
          characteristics: [
            "UX/UI design moderno",
            "Implementação responsiva",
            "Otimização de performance",
            "Acessibilidade WCAG",
            "Componentes reutilizáveis"
          ],
          tags: ["frontend", "ui", "modernization", "responsive", "user-experience"]
        },
        {
          id: "10.1.5",
          name: "Modernização de Middleware",
          description: "Atualização e modernização de camadas de middleware",
          price: 32000.00,
          functionality: "Transformação de integrações e middleware para arquiteturas modernas",
          applicability: "Empresas com middleware legado, ESB tradicional ou integrações acopladas",
          example: "Modernização de ESB para API Gateway, filas modernas ou event-driven",
          characteristics: [
            "Mapeamento de integrações atuais",
            "Arquitetura de APIs RESTful",
            "Implementação de padrões assíncronos",
            "Event-driven architecture",
            "Observabilidade e monitoramento"
          ],
          tags: ["middleware", "integration", "api", "event-driven", "modernization"]
        }
      ]
    },
    {
      id: "10.2",
      name: "Cloud Transformation",
      description: "Serviços especializados para transformação e otimização de cloud",
      items: [
        {
          id: "10.2.1",
          name: "Estratégia de Cloud e Roadmap",
          description: "Desenvolvimento de estratégia e roteiro para jornada cloud",
          price: 25000.00,
          functionality: "Definição estruturada de estratégia para adoção ou otimização cloud",
          applicability: "Empresas iniciando jornada cloud ou redefinindo estratégia existente",
          example: "Estratégia de nuvem pública, híbrida ou multi-cloud com roadmap",
          characteristics: [
            "Análise de situação atual",
            "Definição de objetivos de negócio",
            "Arquitetura de referência",
            "Roadmap de transformação",
            "Business case e TCO"
          ],
          tags: ["cloud", "strategy", "roadmap", "transformation", "planning"]
        },
        {
          id: "10.2.2",
          name: "Migração Lift-and-Shift",
          description: "Migração rápida de aplicações para nuvem sem redesenho",
          price: 18000.00,
          functionality: "Migração de aplicações para cloud mantendo arquitetura original",
          applicability: "Empresas que precisam sair rapidamente de datacenter físico",
          example: "Migração rápida de VMs on-premises para instâncias cloud equivalentes",
          characteristics: [
            "Avaliação de dependências",
            "Plano de migração otimizado",
            "Migração com mínimo downtime",
            "Validação pós-migração",
            "Handover operacional"
          ],
          tags: ["lift-and-shift", "migration", "cloud", "rehosting", "datacenter-exit"]
        },
        {
          id: "10.2.3",
          name: "Cloud Landing Zone",
          description: "Implementação de fundação multi-conta para operação em nuvem",
          price: 35000.00,
          functionality: "Criação de ambiente multi-conta com governança e segurança",
          applicability: "Empresas adotando nuvem que necessitam base sólida e governada",
          example: "Implementação de landing zone em AWS, Azure ou GCP com melhores práticas",
          characteristics: [
            "Arquitetura multi-conta/assinatura",
            "Modelo de governança",
            "Controles de segurança",
            "Redes e conectividade",
            "Infrastructure as Code"
          ],
          tags: ["landing-zone", "cloud", "governance", "foundation", "multi-account"]
        },
        {
          id: "10.2.4",
          name: "Otimização de Custos Cloud",
          description: "Análise e implementação de otimização de custos em nuvem",
          price: 22000.00,
          functionality: "Redução de custos cloud através de análise e otimização",
          applicability: "Empresas com gastos significativos em nuvem buscando eficiência",
          example: "Análise de gastos AWS, Azure ou GCP com implementação de economias",
          characteristics: [
            "Análise detalhada de utilização",
            "Identificação de desperdícios",
            "Implementação de reserved instances",
            "Automação de schedule",
            "Governança de custos contínua"
          ],
          tags: ["cost-optimization", "cloud", "finops", "efficiency", "savings"]
        },
        {
          id: "10.2.5",
          name: "Cloud Security & Compliance Framework",
          description: "Implementação de framework de segurança e compliance para cloud",
          price: 38000.00,
          functionality: "Estabelecimento de controles de segurança e compliance em nuvem",
          applicability: "Empresas que precisam garantir segurança e conformidade em cloud",
          example: "Framework de segurança para ambientes cloud alinhado com normas",
          characteristics: [
            "Baseline de segurança",
            "Políticas e guardrails",
            "Automação de compliance",
            "Remediação de riscos",
            "Monitoramento contínuo"
          ],
          tags: ["security", "compliance", "cloud", "framework", "governance"]
        }
      ]
    },
    {
      id: "10.3",
      name: "DevOps & Automação",
      description: "Serviços para implementação de cultura DevOps e automação",
      items: [
        {
          id: "10.3.1",
          name: "Implementação de CI/CD",
          description: "Implementação de pipeline de integração e entrega contínua",
          price: 28000.00,
          functionality: "Automação do processo de build, teste e deploy de software",
          applicability: "Empresas que buscam agilidade e automação no desenvolvimento",
          example: "Pipeline CI/CD com GitHub Actions, Jenkins, GitLab CI, Azure DevOps",
          characteristics: [
            "Design de pipeline customizado",
            "Integração com repositório de código",
            "Automação de testes",
            "Deploy automatizado",
            "Feedback rápido aos desenvolvedores"
          ],
          tags: ["ci-cd", "devops", "automation", "pipeline", "continuous-delivery"]
        },
        {
          id: "10.3.2",
          name: "Infrastructure as Code",
          description: "Implementação de infraestrutura como código para automação",
          price: 32000.00,
          functionality: "Codificação e automação de provisionamento de infraestrutura",
          applicability: "Empresas que desejam automação e consistência na infraestrutura",
          example: "Implementação com Terraform, CloudFormation, ARM ou Pulumi",
          characteristics: [
            "Templates para recursos cloud",
            "Versionamento de infraestrutura",
            "Modularização e reusabilidade",
            "Pipeline de deploy",
            "Gestão de estado e dependências"
          ],
          tags: ["iac", "terraform", "automation", "infrastructure", "devops"]
        },
        {
          id: "10.3.3",
          name: "Implementação de Monitoramento e Observabilidade",
          description: "Implementação de stack moderno de monitoramento e observabilidade",
          price: 35000.00,
          functionality: "Visibilidade completa sobre aplicações e infraestrutura",
          applicability: "Empresas que precisam de visibilidade em ambientes complexos",
          example: "Stack ELK, Prometheus/Grafana, Datadog ou New Relic",
          characteristics: [
            "Coleta centralizada de logs",
            "Métricas de performance",
            "Distributed tracing",
            "Alertas inteligentes",
            "Dashboards personalizados"
          ],
          tags: ["monitoring", "observability", "logs", "metrics", "tracing"]
        },
        {
          id: "10.3.4",
          name: "DevSecOps Implementation",
          description: "Integração de segurança no processo de desenvolvimento e operações",
          price: 40000.00,
          functionality: "Incorporação de segurança em todo ciclo de vida de desenvolvimento",
          applicability: "Empresas que desejam segurança integrada desde o desenvolvimento",
          example: "Análise de código, scan de imagens, automação de compliance",
          characteristics: [
            "Security as Code",
            "Testes automatizados de segurança",
            "Gestão de vulnerabilidades",
            "Policy as Code",
            "Feedback rápido de segurança"
          ],
          tags: ["devsecops", "security", "automation", "compliance", "shift-left"]
        },
        {
          id: "10.3.5",
          name: "Site Reliability Engineering (SRE)",
          description: "Implementação de práticas SRE para alta confiabilidade",
          price: 45000.00,
          functionality: "Adoção de práticas de engenharia para sistemas altamente confiáveis",
          applicability: "Empresas com serviços críticos que exigem alta disponibilidade",
          example: "Implementação de SLOs, automação de resiliência, chaos engineering",
          characteristics: [
            "Definição de SLIs/SLOs",
            "Error budgeting",
            "Automação de operações",
            "Postmortems estruturados",
            "Engenharia de resiliência"
          ],
          tags: ["sre", "reliability", "automation", "resilience", "availability"]
        }
      ]
    }
  ]
};
