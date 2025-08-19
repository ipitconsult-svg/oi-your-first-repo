import { Category } from "@/types/catalog";

export const professionalServicesCategory: Category = {
  id: "9",
  name: "PROFESSIONAL SERVICES",
  description: "Serviços profissionais de consultoria, implementação e suporte técnico especializado",
  subcategories: [
    {
      id: "9.1",
      name: "Consultoria",
      description: "Serviços de consultoria especializada em tecnologia e infraestrutura",
      items: [
        {
          id: "9.1.1",
          name: "Consultoria de Arquitetura de TI",
          description: "Consultoria para definição e planejamento de arquitetura tecnológica",
          price: 250.00,
          functionality: "Análise e recomendações de arquitetura tecnológica por especialistas",
          applicability: "Empresas que precisam planejar ou revisar sua arquitetura de TI",
          example: "Desenho de arquitetura de nuvem, infraestrutura híbrida ou on-premises",
          characteristics: [
            "Consultores certificados",
            "Visão independente de fabricantes",
            "Documentação detalhada",
            "Roadmap de implementação",
            "Alinhamento com estratégia de negócios"
          ],
          tags: ["consulting", "architecture", "planning", "enterprise", "strategy"]
        },
        {
          id: "9.1.2",
          name: "Consultoria de Segurança da Informação",
          description: "Consultoria especializada em segurança da informação e cibersegurança",
          price: 280.00,
          functionality: "Análise e recomendações de segurança por especialistas certificados",
          applicability: "Empresas que precisam melhorar sua postura de segurança",
          example: "Avaliação de riscos, conformidade com normas, estratégia de segurança",
          characteristics: [
            "Consultores certificados (CISSP, CISM)",
            "Análise de vulnerabilidades",
            "Recomendações práticas",
            "Alinhamento com normas (ISO 27001)",
            "Roadmap de implementação"
          ],
          tags: ["security", "consulting", "cybersecurity", "compliance", "risk"]
        },
        {
          id: "9.1.3",
          name: "Consultoria de Cloud",
          description: "Consultoria para estratégia e otimização de ambientes em nuvem",
          price: 260.00,
          functionality: "Especialistas em nuvem para planejamento e otimização",
          applicability: "Empresas em processo de migração ou otimização de nuvem",
          example: "Estratégia multi-cloud, otimização de custos, arquitetura cloud-native",
          characteristics: [
            "Consultores certificados em nuvem",
            "Experiência multi-cloud",
            "Otimização de custos",
            "Arquitetura bem-definida",
            "Governança e compliance"
          ],
          tags: ["cloud", "consulting", "migration", "optimization", "strategy"]
        },
        {
          id: "9.1.4",
          name: "Consultoria de Continuidade de Negócios",
          description: "Consultoria para planejamento de continuidade de negócios e recuperação de desastres",
          price: 240.00,
          functionality: "Planejamento estruturado para garantir continuidade operacional",
          applicability: "Empresas que precisam proteger operações contra interrupções",
          example: "Plano de recuperação de desastres, continuidade de negócios, contingência",
          characteristics: [
            "Análise de impacto de negócios (BIA)",
            "Definição de RPO/RTO",
            "Planos documentados",
            "Testes simulados",
            "Alinhamento com normas"
          ],
          tags: ["business-continuity", "disaster-recovery", "planning", "resilience", "strategy"]
        },
        {
          id: "9.1.5",
          name: "Consultoria de Compliance e Governança",
          description: "Consultoria especializada em compliance e governança de TI",
          price: 290.00,
          functionality: "Orientação para adequação a normas e melhores práticas de governança",
          applicability: "Empresas que precisam adequar-se a regulamentos ou certificações",
          example: "Adequação à LGPD, ISO 27001, PCI DSS, SOX ou normas setoriais",
          characteristics: [
            "Especialistas em normas específicas",
            "Gap analysis detalhada",
            "Plano de adequação",
            "Preparação para auditoria",
            "Documentação de conformidade"
          ],
          tags: ["compliance", "governance", "regulation", "standards", "certification"]
        }
      ]
    },
    {
      id: "9.2",
      name: "Implementação",
      description: "Serviços de implementação e migração de soluções tecnológicas",
      items: [
        {
          id: "9.2.1",
          name: "Implementação de Infraestrutura de Rede",
          description: "Implementação profissional de infraestrutura de rede corporativa",
          price: 8000.00,
          functionality: "Projeto e implantação de infraestrutura de rede por especialistas",
          applicability: "Empresas que precisam implementar ou renovar sua rede corporativa",
          example: "Implementação de switches, roteadores, wireless, segmentação de rede",
          characteristics: [
            "Projeto técnico detalhado",
            "Implementação por especialistas certificados",
            "Documentação completa",
            "Testes de validação",
            "Transferência de conhecimento"
          ],
          tags: ["implementation", "network", "infrastructure", "project", "deployment"]
        },
        {
          id: "9.2.2",
          name: "Migração para Cloud",
          description: "Serviço de migração de cargas de trabalho para nuvem pública ou híbrida",
          price: 12000.00,
          functionality: "Migração segura e otimizada de ambientes para a nuvem",
          applicability: "Empresas que desejam mover workloads para AWS, Azure ou GCP",
          example: "Migração de aplicações, bancos de dados ou infraestrutura completa",
          characteristics: [
            "Análise de viabilidade",
            "Planejamento detalhado",
            "Migração com mínimo downtime",
            "Otimização pós-migração",
            "Documentação e transferência de conhecimento"
          ],
          tags: ["cloud", "migration", "implementation", "project", "transformation"]
        },
        {
          id: "9.2.3",
          name: "Implementação de Segurança",
          description: "Implementação de soluções de segurança da informação",
          price: 9500.00,
          functionality: "Implementação de controles e ferramentas de segurança cibernética",
          applicability: "Empresas que precisam reforçar sua postura de segurança",
          example: "Firewall next-gen, SIEM, IPS/IDS, DLP, MFA ou soluções de segurança",
          characteristics: [
            "Projeto baseado em riscos",
            "Implementação por especialistas",
            "Integração com ambiente existente",
            "Configuração otimizada",
            "Testes de validação"
          ],
          tags: ["security", "implementation", "cybersecurity", "protection", "deployment"]
        },
        {
          id: "9.2.4",
          name: "Implementação de Virtualização/Container",
          description: "Implementação de plataformas de virtualização ou containerização",
          price: 10500.00,
          functionality: "Projeto e implementação de ambientes virtualizados ou containerizados",
          applicability: "Empresas que desejam implementar ou migrar para virtualização moderna",
          example: "VMware, Hyper-V, Kubernetes, OpenShift, Docker Enterprise",
          characteristics: [
            "Projeto de arquitetura",
            "Implementação por especialistas",
            "Configuração otimizada",
            "Alta disponibilidade",
            "Automação e orquestração"
          ],
          tags: ["virtualization", "containers", "kubernetes", "implementation", "project"]
        },
        {
          id: "9.2.5",
          name: "Implementação de Backup e DR",
          description: "Implementação de soluções de backup e recuperação de desastres",
          price: 8900.00,
          functionality: "Projeto e implementação de sistemas de proteção de dados",
          applicability: "Empresas que precisam garantir recuperação eficiente de dados",
          example: "Backup corporativo, replicação, site de DR, continuidade de negócios",
          characteristics: [
            "Projeto baseado em RPO/RTO",
            "Implementação por especialistas",
            "Testes de recuperação",
            "Documentação detalhada",
            "Transferência de conhecimento"
          ],
          tags: ["backup", "disaster-recovery", "implementation", "data-protection", "continuity"]
        }
      ]
    },
    {
      id: "9.3",
      name: "Suporte Técnico",
      description: "Serviços de suporte técnico especializado e resolução de problemas",
      items: [
        {
          id: "9.3.1",
          name: "Banco de Horas Técnico (20h)",
          description: "Pacote de 20 horas de suporte técnico especializado",
          price: 3500.00,
          functionality: "Horas técnicas para resolução de problemas ou melhorias pontuais",
          applicability: "Empresas que necessitam suporte técnico flexível sob demanda",
          example: "Troubleshooting, ajustes de configuração, melhorias pontuais",
          characteristics: [
            "20 horas técnicas",
            "Profissionais especializados",
            "Atendimento remoto prioritário",
            "Validade de 6 meses",
            "Relatórios de atividades"
          ],
          tags: ["support", "technical", "hours", "assistance", "troubleshooting"]
        },
        {
          id: "9.3.2",
          name: "Suporte Técnico Premium 24x7",
          description: "Serviço de suporte técnico disponível 24x7 com SLAs garantidos",
          price: 4500.00,
          functionality: "Suporte técnico especializado disponível a qualquer hora",
          applicability: "Ambientes críticos que não podem aguardar horário comercial",
          example: "Infraestrutura crítica, ambientes de produção, e-commerce 24h",
          characteristics: [
            "Disponibilidade 24x7x365",
            "SLA de resposta de 30 minutos",
            "Atendimento telefônico e remoto",
            "Acompanhamento de chamados",
            "Relatórios mensais"
          ],
          tags: ["support", "24x7", "premium", "sla", "critical"]
        },
        {
          id: "9.3.3",
          name: "Suporte Técnico a Aplicações",
          description: "Suporte técnico especializado em aplicações corporativas",
          price: 3900.00,
          functionality: "Suporte dedicado a aplicações específicas ou sistemas corporativos",
          applicability: "Empresas com aplicações críticas que exigem suporte especializado",
          example: "Suporte a ERP, CRM, sistemas financeiros, e-commerce ou aplicações",
          characteristics: [
            "Especialistas na aplicação",
            "Horário comercial estendido",
            "SLAs por tipo de incidente",
            "Integração com fornecedores",
            "Documentação de soluções"
          ],
          tags: ["application", "support", "specialized", "software", "business-critical"]
        },
        {
          id: "9.3.4",
          name: "Health Check Trimestral",
          description: "Avaliação trimestral de saúde dos sistemas e infraestrutura",
          price: 2800.00,
          functionality: "Verificação proativa de sistemas para identificar potenciais problemas",
          applicability: "Empresas que desejam manter sistemas otimizados e prevenir falhas",
          example: "Verificação de servidores, storage, rede, backup, segurança",
          characteristics: [
            "4 avaliações anuais",
            "Análise por especialistas",
            "Relatório detalhado",
            "Recomendações práticas",
            "Acompanhamento de melhorias"
          ],
          tags: ["health-check", "preventive", "assessment", "optimization", "proactive"]
        },
        {
          id: "9.3.5",
          name: "Resposta a Incidentes",
          description: "Serviço de resposta rápida a incidentes críticos",
          price: 5000.00,
          functionality: "Equipe de resposta para situações críticas e emergências",
          applicability: "Empresas que precisam de garantia de resposta em caso de crises",
          example: "Falhas graves, ataques cibernéticos, recuperação de desastres",
          characteristics: [
            "Disponibilidade 24x7x365",
            "SLA de mobilização em 15 minutos",
            "Equipe multidisciplinar",
            "Procedimentos de escalação",
            "Relatório pós-incidente"
          ],
          tags: ["incident-response", "critical", "emergency", "crisis", "rapid"]
        }
      ]
    }
  ]
};
