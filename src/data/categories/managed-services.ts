import { Category } from "@/types/catalog";

export const managedServicesCategory: Category = {
  id: "6",
  name: "MANAGED SERVICES",
  description: "Serviços gerenciados para operação, monitoramento e administração de infraestrutura de TI com diferentes níveis de suporte",
  subcategories: [
    {
      id: "6.1",
      name: "Gerenciamento Padrão",
      description: "Serviços básicos de gerenciamento com bundle de 5 horas mensais e opções de suporte flexíveis",
      items: [
        {
          id: "6.1.1",
          name: "Gerenciamento Padrão 8x5",
          description: "Gerenciamento básico com 5 horas mensais e suporte das 9h às 18h",
          price: 199.00,
          functionality: "Bundle de 5 horas mensais para atividades básicas de gerenciamento com suporte comercial",
          applicability: "Pequenas empresas, ambientes não críticos, infraestruturas simples que não requerem suporte 24x7",
          example: "Servidor web corporativo, pequeno e-commerce, aplicação interna de departamento",
          characteristics: [
            "5 horas mensais de gerenciamento",
            "Suporte 8x5 (das 9h às 18h)",
            "Atualizações de segurança básicas",
            "Monitoramento durante horário comercial",
            "Suporte técnico reativo",
            "Relatórios mensais básicos",
            "Backup verification"
          ],
          tags: ["managed", "standard", "8x5", "basic", "small-business"],
          observations: "Ideal para empresas que operam apenas em horário comercial e possuem tolerância a interrupções noturnas"
        },
        {
          id: "6.1.2", 
          name: "Gerenciamento Padrão 24x7",
          description: "Gerenciamento básico com 5 horas mensais e suporte 24 horas por dia",
          price: 299.00,
          functionality: "Bundle de 5 horas mensais para atividades básicas de gerenciamento com suporte contínuo",
          applicability: "Empresas com operação contínua, e-commerce, aplicações que não podem parar durante a noite",
          example: "Loja virtual, sistema de vendas online, aplicação móvel com usuários 24x7",
          characteristics: [
            "5 horas mensais de gerenciamento",
            "Suporte 24x7 (24 horas, 7 dias)",
            "Monitoramento contínuo",
            "Resposta a incidentes críticos",
            "Atualizações programadas",
            "Suporte técnico reativo",
            "Backup verification diário"
          ],
          tags: ["managed", "standard", "24x7", "continuous", "ecommerce"],
          observations: "Recomendado para empresas com operação 24x7 mas com infraestrutura relativamente simples"
        }
      ]
    },
    {
      id: "6.2",
      name: "Gerenciamento Avançado",
      description: "Serviços intermediários de gerenciamento com bundle de 7 horas mensais e recursos aprimorados",
      items: [
        {
          id: "6.2.1",
          name: "Gerenciamento Avançado 8x5",
          description: "Gerenciamento intermediário com 7 horas mensais e suporte das 9h às 18h",
          price: 399.00,
          functionality: "Bundle de 7 horas mensais para atividades avançadas de gerenciamento com suporte comercial",
          applicability: "Empresas médias, infraestruturas mais complexas, múltiplos serviços que requerem configurações avançadas",
          example: "Ambiente com múltiplos servidores, cluster de aplicação, infraestrutura corporativa média",
          characteristics: [
            "7 horas mensais de gerenciamento",
            "Suporte 8x5 (das 9h às 18h)",
            "Otimização de performance",
            "Configurações avançadas",
            "Planejamento de capacidade básico",
            "Monitoramento proativo",
            "Análise de logs e métricas",
            "Automação básica"
          ],
          tags: ["managed", "advanced", "8x5", "optimization", "medium-business"],
          observations: "Adequado para empresas que necessitam otimizações e configurações mais sofisticadas durante horário comercial"
        },
        {
          id: "6.2.2",
          name: "Gerenciamento Avançado 24x7",
          description: "Gerenciamento intermediário com 7 horas mensais e suporte contínuo",
          price: 499.00,
          functionality: "Bundle de 7 horas mensais para atividades avançadas de gerenciamento com suporte contínuo",
          applicability: "Empresas médias com operação contínua, aplicações críticas, ambientes que exigem disponibilidade alta",
          example: "Sistema ERP corporativo, plataforma SaaS, aplicação financeira, serviços críticos 24x7",
          characteristics: [
            "7 horas mensais de gerenciamento",
            "Suporte 24x7 (24 horas, 7 dias)",
            "Monitoramento proativo avançado",
            "Otimização contínua de performance",
            "Resposta rápida a incidentes",
            "Configurações de alta disponibilidade",
            "Análise preventiva",
            "Automação intermediária"
          ],
          tags: ["managed", "advanced", "24x7", "critical", "high-availability"],
          observations: "Recomendado para aplicações críticas que exigem alta disponibilidade e otimização contínua"
        },
        {
          id: "6.2.3",
          name: "Gerenciamento Avançado Cloud",
          description: "Gerenciamento especializado para ambientes cloud com recursos específicos",
          price: 0,
          functionality: "Gerenciamento específico para ambientes cloud seguindo lógica do bundle contratado",
          applicability: "Empresas com infraestrutura cloud que necessitam gerenciamento especializado de recursos nativos",
          example: "Ambiente AWS/Azure/GCP, arquitetura cloud-native, aplicações distribuídas na nuvem",
          characteristics: [
            "Bundle conforme contrato (mesma lógica GA)",
            "Suporte especializado em cloud",
            "Gerenciamento de rede cloud",
            "Backup cloud gerenciado",
            "Firewall as a Service",
            "Ferramentas WHM/cPanel incluídas",
            "Otimização de custos cloud",
            "Automação cloud-native"
          ],
          tags: ["managed", "advanced", "cloud", "native", "whm-cpanel"],
          observations: "Preço varia conforme bundle contratado. Inclui ferramentas especializadas para ambiente cloud como WHM/cPanel"
        }
      ]
    },
    {
      id: "6.3",
      name: "Gerenciamento Full",
      description: "Serviços completos de gerenciamento com bundle de 10 horas mensais e máximo nível de suporte",
      items: [
        {
          id: "6.3.1",
          name: "Gerenciamento Full 8x5",
          description: "Gerenciamento completo com 10 horas mensais e suporte das 9h às 18h",
          price: 599.00,
          functionality: "Bundle de 10 horas mensais para gerenciamento completo da infraestrutura com suporte comercial",
          applicability: "Grandes empresas, infraestruturas complexas, múltiplos ambientes que requerem gestão especializada",
          example: "Datacenter corporativo, infraestrutura híbrida, ambiente multi-aplicação crítico",
          characteristics: [
            "10 horas mensais de gerenciamento",
            "Suporte 8x5 (das 9h às 18h)",
            "Gerenciamento completo da infraestrutura",
            "Planejamento estratégico de capacidade",
            "Otimização avançada de performance",
            "Automação completa de processos",
            "Análise preditiva e preventiva",
            "Consultoria técnica incluída",
            "Documentação completa"
          ],
          tags: ["managed", "full", "8x5", "complete", "enterprise"],
          observations: "Nível máximo de gerenciamento para empresas que necessitam de gestão completa durante horário comercial"
        },
        {
          id: "6.3.2",
          name: "Gerenciamento Full 24x7",
          description: "Gerenciamento completo com 10 horas mensais e suporte contínuo premium",
          price: 699.00,
          functionality: "Bundle de 10 horas mensais para gerenciamento completo da infraestrutura com suporte premium contínuo",
          applicability: "Grandes corporações, aplicações mission-critical, infraestruturas que não podem parar nunca",
          example: "Sistemas bancários, trading systems, infraestrutura de saúde crítica, grandes e-commerces",
          characteristics: [
            "10 horas mensais de gerenciamento",
            "Suporte premium 24x7",
            "Gerenciamento completo da infraestrutura",
            "Monitoramento proativo avançado",
            "Resposta imediata a incidentes críticos",
            "Otimização contínua automatizada",
            "Planejamento estratégico avançado",
            "Consultoria especializada",
            "SLA premium garantido"
          ],
          tags: ["managed", "full", "24x7", "mission-critical", "premium"],
          observations: "Máximo nível de serviço para infraestruturas mission-critical que exigem disponibilidade absoluta"
        }
      ]
    },
    {
      id: "6.4",
      name: "Sustentação",
      description: "Serviços especializados de sustentação e administração seguindo padrões ISO 20000-1",
      items: [
        {
          id: "6.4.1",
          name: "Suporte e Monitoramento Reativo e Proativo",
          description: "Combinação de suporte reativo para incidentes e monitoramento proativo para prevenção",
          functionality: "Sistema híbrido que combina resposta rápida a problemas com prevenção através de monitoramento inteligente",
          applicability: "Organizações que necessitam de suporte completo com prevenção de problemas e resposta eficiente",
          example: "Infraestrutura corporativa crítica, ambientes de produção com alta disponibilidade exigida",
          characteristics: [
            "Monitoramento 24x7 com alertas inteligentes",
            "Resposta reativa a incidentes em tempo hábil",
            "Análise proativa de tendências e padrões",
            "Prevenção de problemas através de insights",
            "Dashboards em tempo real",
            "Relatórios preditivos",
            "Escalation automático para situações críticas"
          ],
          tags: ["sustentacao", "proactive", "reactive", "monitoring", "prevention"],
          observations: "Combina o melhor dos dois mundos: prevenção proativa e resposta reativa eficiente"
        },
        {
          id: "6.4.2",
          name: "Administração Física e Lógica de Nós Computacionais",
          description: "Gestão completa tanto dos aspectos físicos quanto lógicos da infraestrutura computacional",
          functionality: "Administração completa cobrindo desde hardware físico até configurações lógicas e software",
          applicability: "Datacenters, infraestruturas híbridas, ambientes que requerem gestão tanto física quanto virtual",
          example: "Gestão de servidores físicos, VMs, containers, storage físico e virtual, redes físicas e SDN",
          characteristics: [
            "Gestão de hardware físico (servidores, storage, rede)",
            "Administração de ambientes virtualizados",
            "Configuração e otimização de sistemas operacionais",
            "Gestão de containers e orquestração",
            "Administração de storage físico e virtual",
            "Controle de acesso físico e lógico",
            "Documentação completa da infraestrutura"
          ],
          tags: ["sustentacao", "physical", "logical", "infrastructure", "hybrid"],
          observations: "Cobertura completa desde o nível físico de hardware até as camadas mais abstratas de software"
        },
        {
          id: "6.4.3",
          name: "Administração de Incidentes, Problemas e Solicitações ISO 20000-1",
          description: "Gestão formal de incidentes, problemas e solicitações seguindo padrões internacionais",
          functionality: "Processo estruturado de ITSM seguindo ISO 20000-1 para garantir qualidade e rastreabilidade",
          applicability: "Organizações que exigem conformidade com padrões internacionais e processos estruturados",
          example: "Empresas regulamentadas, grandes corporações, ambientes que exigem auditoria e compliance",
          characteristics: [
            "Processos baseados em ISO 20000-1",
            "Gestão formal de incidentes com SLA",
            "Análise de causa raiz para problemas",
            "Catálogo de serviços estruturado",
            "Portal de solicitações integrado",
            "Métricas e KPIs de qualidade",
            "Auditoria e compliance garantidos",
            "Melhoria contínua dos processos"
          ],
          tags: ["sustentacao", "iso-20000", "itsm", "compliance", "quality"],
          observations: "Garante conformidade com padrões internacionais e qualidade nos processos de TI"
        },
        {
          id: "6.4.4",
          name: "Criação de Hotline para Demandas Críticas",
          description: "Canal prioritário e dedicado para situações críticas que exigem resposta imediata",
          functionality: "Linha direta especializada para emergências com escalation automático e resposta prioritária",
          applicability: "Ambientes mission-critical, sistemas financeiros, infraestruturas de saúde, aplicações críticas",
          example: "Sistemas bancários em produção, infraestrutura hospitalar, trading systems, aplicações de segurança",
          characteristics: [
            "Linha direta 24x7 para emergências",
            "Equipe especializada dedicada",
            "Tempo de resposta garantido (< 15 minutos)",
            "Escalation automático para gerência",
            "War room virtual para situações críticas",
            "Comunicação proativa com stakeholders",
            "Post-mortem detalhado para aprendizado"
          ],
          tags: ["sustentacao", "hotline", "critical", "emergency", "response"],
          observations: "Essencial para ambientes onde cada minuto de indisponibilidade representa impacto significativo"
        },
        {
          id: "6.4.5",
          name: "Auxílio e Projeção e Planejamento da Infraestrutura Computacional",
          description: "Consultoria estratégica para evolução e planejamento futuro da infraestrutura",
          functionality: "Serviço consultivo para planejamento estratégico de crescimento e evolução tecnológica",
          applicability: "Organizações em crescimento, projetos de transformação digital, modernização de infraestrutura",
          example: "Planejamento de migração para cloud, expansão de datacenter, modernização tecnológica, arquitetura futura",
          characteristics: [
            "Análise de capacidade atual e futura",
            "Roadmap tecnológico personalizado",
            "Projeções de crescimento e demanda",
            "Análise de ROI e TCO",
            "Recomendações de arquitetura",
            "Planejamento de migração",
            "Benchmarking e best practices",
            "Acompanhamento de evolução tecnológica"
          ],
          tags: ["sustentacao", "planning", "strategy", "roadmap", "consulting"],
          observations: "Fundamental para organizações que querem se manter atualizadas e preparadas para o futuro"
        }
      ]
    }
  ]
};
