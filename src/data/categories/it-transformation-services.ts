import { Category } from "@/types/catalog";

export const itTransformationServicesCategory: Category = {
  id: "10",
  name: "IT TRANSFORMATION SERVICES",
  description: "Serviços de transformação digital, compliance, otimização e implementação de soluções inovadoras",
  subcategories: [
    {
      id: "10.1",
      name: "Compliance",
      description: "Consultoria especializada para implementação de certificações e frameworks de governança",
      items: [
        {
          id: "10.1.1",
          name: "Consultoria para Implementação de Certificação ISO 27001",
          description: "Consultoria completa para implementação e certificação ISO 27001",
          price: 45000.00,
          functionality: "Implementação de Sistema de Gestão de Segurança da Informação (SGSI)",
          applicability: "Empresas que necessitam certificação ISO 27001 para compliance e mercado",
          example: "Organizações financeiras, saúde, governo, e-commerce que lidam com dados sensíveis",
          characteristics: [
            "Análise de gap inicial e mapeamento de riscos",
            "Desenvolvimento de políticas e procedimentos",
            "Implementação de controles de segurança",
            "Treinamento de equipes e conscientização",
            "Auditoria interna e preparação para certificação",
            "Acompanhamento durante processo de certificação",
            "Plano de manutenção e melhoria contínua",
            "Documentação completa do SGSI"
          ],
          tags: ["iso-27001", "information-security", "compliance", "certification", "sgsi"]
        },
        {
          id: "10.1.2",
          name: "Consultoria para Implementação de Certificação ISO 20000",
          description: "Consultoria para implementação de Sistema de Gestão de Serviços de TI",
          price: 38000.00,
          functionality: "Implementação de framework de gerenciamento de serviços baseado em ITIL",
          applicability: "Provedores de serviços de TI que necessitam certificação internacional",
          example: "Data centers, provedores de cloud, empresas de outsourcing de TI",
          characteristics: [
            "Avaliação de processos atuais de TI",
            "Alinhamento com melhores práticas ITIL",
            "Desenho e implementação de processos",
            "Definição de SLAs e métricas de qualidade",
            "Implementação de ferramentas de ITSM",
            "Treinamento em gestão de serviços",
            "Preparação para auditoria de certificação",
            "Estabelecimento de melhoria contínua"
          ],
          tags: ["iso-20000", "service-management", "itil", "itsm", "certification"]
        },
        {
          id: "10.1.3",
          name: "Consultoria para Implementação PCI DSS",
          description: "Consultoria para adequação ao padrão de segurança da indústria de cartões",
          price: 35000.00,
          functionality: "Implementação de controles de segurança para processamento de dados de cartão",
          applicability: "Empresas que processam, armazenam ou transmitem dados de cartão de crédito",
          example: "E-commerces, payment gateways, sistemas de ponto de venda, bancos",
          characteristics: [
            "Assessment inicial de ambiente cardholder",
            "Segmentação de rede e isolamento",
            "Implementação de controles de acesso",
            "Criptografia de dados em trânsito e repouso",
            "Monitoramento e logging de segurança",
            "Teste de penetração e assessment",
            "Políticas e procedimentos de segurança",
            "Preparação para QSA (Qualified Security Assessor)"
          ],
          tags: ["pci-dss", "payment-security", "compliance", "cardholder-data", "e-commerce"]
        },
        {
          id: "10.1.4",
          name: "Consultoria para Implementação de Framework ITIL",
          description: "Implementação de gerenciamento de serviços baseado em ITIL v4",
          price: 32000.00,
          functionality: "Adoção de melhores práticas de gerenciamento de serviços de TI",
          applicability: "Empresas que desejam otimizar processos de TI e melhorar qualidade de serviços",
          example: "Departamentos de TI internos, empresas de tecnologia, service desks",
          characteristics: [
            "Mapeamento de processos atuais",
            "Desenho de processos baseado em ITIL v4",
            "Implementação de Service Value System",
            "Definição de papéis e responsabilidades",
            "Métricas e KPIs de processo",
            "Treinamento certificado em ITIL",
            "Ferramentas de suporte aos processos",
            "Cultura de melhoria contínua"
          ],
          tags: ["itil", "service-management", "process-improvement", "best-practices", "itsm"]
        },
        {
          id: "10.1.5",
          name: "Consultoria para Adequação à LGPD",
          description: "Consultoria para adequação à Lei Geral de Proteção de Dados",
          price: 28000.00,
          functionality: "Implementação de programa de proteção de dados pessoais",
          applicability: "Empresas brasileiras que coletam, processam ou armazenam dados pessoais",
          example: "E-commerces, fintechs, healthtechs, varejo, prestadores de serviços",
          characteristics: [
            "Mapeamento de dados pessoais (data mapping)",
            "Análise de impacto de proteção de dados (AIPD)",
            "Implementação de controles técnicos",
            "Políticas de privacidade e cookies",
            "Processos de consentimento e direitos do titular",
            "Treinamento de colaboradores",
            "Indicação de DPO (Data Protection Officer)",
            "Plano de resposta a incidentes"
          ],
          tags: ["lgpd", "data-protection", "privacy", "compliance", "gdpr"]
        }
      ]
    },
    {
      id: "10.2",
      name: "Otimização de Infraestrutura",
      description: "Revisão e adequação de infraestrutura tecnológica às normas e melhores práticas",
      items: [
        {
          id: "10.2.1",
          name: "Assessment de Infraestrutura e Compliance",
          description: "Avaliação completa de infraestrutura com foco em conformidade normativa",
          price: 18000.00,
          functionality: "Análise técnica detalhada de infraestrutura versus requisitos normativos",
          applicability: "Empresas que precisam adequar infraestrutura a normas específicas",
          example: "Assessment para ISO 27001, PCI DSS, SOX, HIPAA ou normas setoriais",
          characteristics: [
            "Inventário completo de ativos de TI",
            "Análise de configurações versus baselines",
            "Identificação de gaps de compliance",
            "Avaliação de riscos de segurança",
            "Mapeamento de vulnerabilidades",
            "Análise de arquitetura e design",
            "Relatório executivo com roadmap",
            "Priorização de ações corretivas"
          ],
          tags: ["infrastructure-assessment", "compliance", "security", "risk-analysis", "governance"]
        },
        {
          id: "10.2.2",
          name: "Otimização de Performance e Capacidade",
          description: "Análise e otimização de performance de infraestrutura",
          price: 22000.00,
          functionality: "Identificação de gargalos e implementação de melhorias de performance",
          applicability: "Ambientes com problemas de performance ou crescimento não planejado",
          example: "Otimização de servidores, bancos de dados, redes e storage",
          characteristics: [
            "Baseline de performance atual",
            "Análise de capacity planning",
            "Identificação de bottlenecks",
            "Tuning de sistemas operacionais",
            "Otimização de banco de dados",
            "Ajuste de configurações de rede",
            "Implementação de cache e CDN",
            "Monitoramento contínuo de performance"
          ],
          tags: ["performance-optimization", "capacity-planning", "tuning", "monitoring", "scalability"]
        },
        {
          id: "10.2.3",
          name: "Modernização de Arquitetura Legacy",
          description: "Transformação de arquiteturas legadas para padrões modernos",
          price: 35000.00,
          functionality: "Modernização de sistemas e arquitetura mantendo continuidade operacional",
          applicability: "Empresas com sistemas legados que limitam crescimento e agilidade",
          example: "Migração de mainframes, sistemas monolíticos, infraestrutura proprietária",
          characteristics: [
            "Análise de dependências e integrações",
            "Estratégia de modernização incremental",
            "Desenho de nova arquitetura",
            "Plano de migração com low-risk",
            "Implementação de APIs e integrações",
            "Testes e validação contínua",
            "Treinamento de equipes",
            "Suporte pós-implementação"
          ],
          tags: ["legacy-modernization", "architecture", "migration", "integration", "transformation"]
        },
        {
          id: "10.2.4",
          name: "Implementação de Hardening e Security Baseline",
          description: "Aplicação de configurações de segurança e hardening em infraestrutura",
          price: 25000.00,
          functionality: "Implementação de configurações seguras baseadas em benchmarks internacionais",
          applicability: "Ambientes que necessitam elevar nível de segurança da infraestrutura",
          example: "Hardening de servidores Windows/Linux, switches, firewalls, databases",
          characteristics: [
            "Aplicação de CIS Benchmarks",
            "Configuração de security baselines",
            "Hardening de sistemas operacionais",
            "Configuração segura de serviços",
            "Implementação de controles de acesso",
            "Auditoria de configurações",
            "Documentação de configurações",
            "Monitoramento de compliance"
          ],
          tags: ["hardening", "security-baseline", "cis-benchmarks", "security-configuration", "compliance"]
        },
        {
          id: "10.2.5",
          name: "Otimização de Custos de Infraestrutura",
          description: "Análise e otimização de custos operacionais de infraestrutura",
          price: 20000.00,
          functionality: "Identificação e implementação de economia em infraestrutura de TI",
          applicability: "Empresas buscando redução de custos operacionais em TI",
          example: "Otimização de licenciamento, consolidação de servidores, revisão de contratos",
          characteristics: [
            "Análise de TCO (Total Cost of Ownership)",
            "Auditoria de licenciamento de software",
            "Oportunidades de consolidação",
            "Análise de contratos e fornecedores",
            "Implementação de virtualizações",
            "Otimização energética",
            "ROI de investimentos propostos",
            "Plano de economia sustentável"
          ],
          tags: ["cost-optimization", "tco", "licensing", "consolidation", "efficiency"]
        }
      ]
    },
    {
      id: "10.3",
      name: "Implementação de IA",
      description: "Soluções de Inteligência Artificial para automação e eficiência operacional",
      items: [
        {
          id: "10.3.1",
          name: "Private LLM - Large Language Model Privado",
          description: "Implementação de LLM privado treinado para necessidades específicas do cliente",
          price: 85000.00,
          functionality: "Sistema de IA generativa privado com treinamento customizado e interface web",
          applicability: "Empresas que necessitam IA generativa com total controle e privacidade de dados",
          example: "Assistente IA para documentação interna, análise de contratos, suporte técnico",
          characteristics: [
            "Deploy de LLM em infraestrutura privada",
            "Treinamento com dados específicos do cliente",
            "Interface web personalizada para acesso",
            "Múltiplos modelos LLM disponíveis",
            "Garantia de conformidade com LGPD",
            "Controle total sobre dados e respostas",
            "API para integração com sistemas",
            "Monitoramento e auditoria de uso",
            "Escalabilidade baseada em demanda",
            "Backup e disaster recovery"
          ],
          tags: ["private-llm", "artificial-intelligence", "machine-learning", "generative-ai", "privacy"]
        },
        {
          id: "10.3.2",
          name: "Support Agent - Automação Inteligente de Help Desk",
          description: "Sistema de IA para automação de tratativa de tickets de help desk",
          price: 55000.00,
          functionality: "Agente virtual que automatiza resolução de tickets reduzindo carga da equipe",
          applicability: "Empresas com alto volume de tickets repetitivos em help desk ou suporte",
          example: "Automação de reset de senhas, problemas de conectividade, dúvidas frequentes",
          characteristics: [
            "Processamento inteligente de tickets",
            "Integração com sistemas de helpdesk existentes",
            "Aprendizado contínuo com histórico de tickets",
            "Classificação automática de prioridades",
            "Resolução automática de casos simples",
            "Escalação inteligente para humanos",
            "Interface conversacional com usuários",
            "Métricas de eficiência e satisfação",
            "Base de conhecimento dinâmica",
            "Integração com Active Directory e sistemas"
          ],
          tags: ["support-automation", "helpdesk", "ticket-automation", "artificial-intelligence", "customer-service"]
        },
        {
          id: "10.3.3",
          name: "Document Intelligence - Análise Automatizada de Documentos",
          description: "Sistema de IA para extração e análise inteligente de documentos",
          price: 42000.00,
          functionality: "Processamento automatizado de documentos com extração de dados estruturados",
          applicability: "Empresas com grande volume de documentos para processamento manual",
          example: "Análise de contratos, notas fiscais, documentos jurídicos, relatórios",
          characteristics: [
            "OCR avançado com IA para reconhecimento",
            "Extração automática de dados estruturados",
            "Classificação inteligente de documentos",
            "Validação automática de informações",
            "Integração com sistemas ERP/CRM",
            "Workflow de aprovação automatizado",
            "Detecção de anomalias e inconsistências",
            "Dashboard de analytics e relatórios",
            "API para integração com sistemas",
            "Auditoria completa de processamento"
          ],
          tags: ["document-intelligence", "ocr", "data-extraction", "workflow-automation", "artificial-intelligence"]
        },
        {
          id: "10.3.4",
          name: "Predictive Analytics - Análise Preditiva de Infraestrutura",
          description: "Sistema de IA para predição de falhas e otimização proativa",
          price: 48000.00,
          functionality: "Análise preditiva para prevenção de falhas e otimização de recursos",
          applicability: "Empresas que desejam manutenção preditiva e otimização proativa",
          example: "Predição de falhas de hardware, otimização de capacidade, manutenção preventiva",
          characteristics: [
            "Coleta e análise de métricas de infraestrutura",
            "Modelos de machine learning preditivos",
            "Alertas proativos de possíveis falhas",
            "Recomendações de otimização automática",
            "Dashboard de insights e tendências",
            "Integração com ferramentas de monitoramento",
            "Análise de padrões de comportamento",
            "Otimização de custos baseada em dados",
            "Relatórios executivos automatizados",
            "API para automação de ações corretivas"
          ],
          tags: ["predictive-analytics", "machine-learning", "infrastructure-optimization", "proactive-maintenance", "ai-monitoring"]
        },
        {
          id: "10.3.5",
          name: "Security AI - Detecção Inteligente de Ameaças",
          description: "Sistema de IA para detecção avançada de ameaças e anomalias de segurança",
          price: 62000.00,
          functionality: "Análise comportamental e detecção de ameaças usando machine learning",
          applicability: "Empresas que necessitam detecção avançada de ameaças e response automatizado",
          example: "Detecção de malware, ataques APT, comportamentos anômalos, insider threats",
          characteristics: [
            "Análise comportamental de usuários e entidades",
            "Detecção de anomalias em tempo real",
            "Correlação inteligente de eventos de segurança",
            "Response automatizado a ameaças",
            "Integração com SIEM e ferramentas de segurança",
            "Threat hunting assistido por IA",
            "Análise de indicadores de comprometimento",
            "Dashboard de security operations",
            "Forensics automatizada",
            "Relatórios de threat intelligence"
          ],
          tags: ["security-ai", "threat-detection", "behavioral-analysis", "siem", "cybersecurity"]
        }
      ]
    },
    {
      id: "10.4",
      name: "Automação",
      description: "Desenvolvimento de aplicações personalizadas para automação de processos específicos",
      items: [
        {
          id: "10.4.1",
          name: "Unblock MPX - Sistema de Desbloqueio de IPs",
          description: "Interface web para desbloqueio automatizado de endereços IP",
          price: 15000.00,
          functionality: "Sistema web para automação de desbloqueio de IPs em firewalls e sistemas de segurança",
          applicability: "Provedores de internet, data centers e empresas com firewall complexo",
          example: "Desbloqueio automático de IPs para clientes, whitelist dinâmico, gestão de acessos",
          characteristics: [
            "Interface web intuitiva e responsiva",
            "Integração com múltiplos firewalls",
            "Sistema de autenticação e autorização",
            "Log completo de ações realizadas",
            "Aprovação por múltiplos níveis",
            "API REST para integrações",
            "Dashboard de monitoramento",
            "Notificações automáticas",
            "Gestão de permissões granular",
            "Relatórios de uso e estatísticas",
            "Link de demonstração: https://preview--ip-unblock-automator.lovable.app/"
          ],
          tags: ["ip-unblock", "firewall-automation", "web-interface", "network-management", "security-automation"]
        },
        {
          id: "10.4.2",
          name: "Mail Security Suite - Monitoramento de Blacklist",
          description: "Sistema completo de monitoramento de blacklist para IPs e domínios",
          price: 18000.00,
          functionality: "Monitoramento proativo de blacklists para manter reputação de email",
          applicability: "Provedores de email, empresas com alto volume de envio, marketing digital",
          example: "Monitoramento de IPs de servidores de email, domínios corporativos",
          characteristics: [
            "Monitoramento de múltiplas blacklists",
            "Verificação automática de IPs e domínios",
            "Alertas em tempo real de listagem",
            "Dashboard de status de reputação",
            "Histórico de listagens e delisting",
            "Integração com provedores de blacklist",
            "Relatórios de reputação periódicos",
            "API para automação",
            "Sugestões de remediação",
            "Monitoramento 24/7 automatizado"
          ],
          tags: ["email-security", "blacklist-monitoring", "reputation-management", "email-deliverability", "monitoring"]
        },
        {
          id: "10.4.3",
          name: "Mail Security Suite - Warm-up de IPs e Domínios",
          description: "Sistema automatizado de warm-up para IPs e domínios de email",
          price: 22000.00,
          functionality: "Processo automatizado de aquecimento de reputação para novos IPs e domínios",
          applicability: "Empresas iniciando envios de email ou com novos IPs/domínios",
          example: "Warm-up de servidor de email novo, domínio corporativo, IP dedicado",
          characteristics: [
            "Processo gradual e automatizado de warm-up",
            "Simulação de comportamento orgânico",
            "Monitoramento de feedback loops",
            "Ajuste automático de volumes de envio",
            "Análise de métricas de deliverability",
            "Integração com MTAs principais",
            "Estratégias por provedor de email",
            "Dashboard de progresso do warm-up",
            "Alertas de problemas de reputação",
            "Relatórios de eficácia do processo"
          ],
          tags: ["email-warmup", "ip-warming", "domain-reputation", "email-deliverability", "automation"]
        },
        {
          id: "10.4.4",
          name: "Mail Security Suite - Verificação de Hard Bounces",
          description: "Sistema de análise de hard bounces diretamente no servidor MTA",
          price: 16000.00,
          functionality: "Análise local de hard bounces para visibilidade macro da saúde do email",
          applicability: "Provedores de email e empresas com servidores MTA próprios",
          example: "Análise de bounces em Postfix, Exim, qmail para limpeza de listas",
          characteristics: [
            "Análise direta nos logs do MTA",
            "Classificação inteligente de bounces",
            "Detecção de padrões de problemas",
            "Sugestões de limpeza de listas",
            "Dashboard de saúde do email",
            "Integração com sistemas de envio",
            "Alertas de alta taxa de bounce",
            "Relatórios de qualidade de listas",
            "API para sistemas de CRM/Marketing",
            "Histórico de performance de envios"
          ],
          tags: ["bounce-analysis", "mta-monitoring", "email-health", "list-hygiene", "email-analytics"]
        },
        {
          id: "10.4.5",
          name: "Workflow Automation Engine",
          description: "Plataforma de automação de workflows empresariais customizáveis",
          price: 35000.00,
          functionality: "Motor de automação para criação de workflows empresariais complexos",
          applicability: "Empresas que necessitam automatizar processos internos específicos",
          example: "Aprovações automatizadas, integração de sistemas, processamento de documentos",
          characteristics: [
            "Designer visual de workflows",
            "Conectores para sistemas populares",
            "Lógica condicional e branches",
            "Triggers baseados em eventos",
            "Execução paralela e sequencial",
            "Monitoramento de execução",
            "API REST para integrações",
            "Sistema de aprovações",
            "Logs e auditoria completa",
            "Templates de workflows prontos"
          ],
          tags: ["workflow-automation", "business-process", "integration", "automation-platform", "custom-development"]
        },
        {
          id: "10.4.6",
          name: "Resource Management Automation",
          description: "Sistema de automação para gestão e otimização de recursos de TI",
          price: 28000.00,
          functionality: "Automação inteligente de provisionamento, escalonamento e otimização de recursos",
          applicability: "Empresas que necessitam gestão automatizada de infraestrutura dinâmica",
          example: "Auto-scaling de VMs, provisionamento automático, otimização de custos",
          characteristics: [
            "Provisionamento automático de recursos",
            "Auto-scaling baseado em métricas",
            "Otimização automática de custos",
            "Gestão de ciclo de vida de recursos",
            "Políticas de governance automatizadas",
            "Integração com cloud providers",
            "Dashboard de utilização",
            "Alertas de anomalias",
            "Relatórios de eficiência",
            "API para customizações"
          ],
          tags: ["resource-automation", "auto-scaling", "cost-optimization", "infrastructure-management", "cloud-automation"]
        }
      ]
    }
  ]
};
