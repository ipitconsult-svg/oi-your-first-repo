import { Category } from "@/types/catalog";

export const monitoringCategory: Category = {
  id: "11",
  name: "MONITORAMENTO",
  description: "Serviços de monitoramento, observabilidade e gestão de performance para infraestrutura e aplicações",
  subcategories: [
    {
      id: "11.1",
      name: "Monitoramento de Infraestrutura",
      description: "Soluções para monitoramento de servidores, rede e infraestrutura física",
      items: [
        {
          id: "11.1.1",
          name: "Monitoramento de Servidores Basic",
          description: "Monitoramento básico de servidores físicos e virtuais",
          price: 15.00,
          functionality: "Monitoramento de disponibilidade e métricas básicas de servidores",
          applicability: "Empresas com necessidade de monitoramento simples de servidores",
          example: "Monitoramento de uptime, CPU, memória, disco e serviços básicos",
          characteristics: [
            "Verificações a cada 5 minutos",
            "Alertas por email",
            "Dashboard básico",
            "Até 10 métricas por servidor",
            "Retenção de 30 dias"
          ],
          tags: ["monitoring", "servers", "infrastructure", "availability", "basic"]
        },
        {
          id: "11.1.2",
          name: "Monitoramento de Servidores Advanced",
          description: "Monitoramento avançado e detalhado de servidores",
          price: 29.00,
          functionality: "Monitoramento profundo de servidores com métricas detalhadas",
          applicability: "Servidores críticos que exigem monitoramento detalhado",
          example: "Monitoramento detalhado de performance, processos, logs e capacidade",
          characteristics: [
            "Verificações a cada minuto",
            "Alertas por múltiplos canais",
            "Análise de tendências",
            "Métricas ilimitadas",
            "Retenção de 90 dias"
          ],
          tags: ["monitoring", "advanced", "performance", "servers", "analytics"]
        },
        {
          id: "11.1.3",
          name: "Monitoramento de Rede",
          description: "Monitoramento de equipamentos e tráfego de rede",
          price: 25.00,
          functionality: "Monitoramento de switches, roteadores e tráfego de rede",
          applicability: "Empresas com infraestrutura de rede crítica",
          example: "Monitoramento de switches, roteadores, firewalls, tráfego e latência",
          characteristics: [
            "Suporte a SNMP, Flow e API",
            "Mapa de topologia",
            "Análise de tráfego",
            "Monitoramento de interfaces",
            "Detecção de anomalias"
          ],
          tags: ["network", "monitoring", "traffic", "switches", "routers"]
        },
        {
          id: "11.1.4",
          name: "Monitoramento de Ambiente Físico",
          description: "Monitoramento de condições ambientais em datacenter ou sala técnica",
          price: 39.00,
          functionality: "Monitoramento de temperatura, umidade e condições físicas",
          applicability: "Datacenters, salas técnicas ou ambientes sensíveis",
          example: "Monitoramento de temperatura, umidade, energia, acesso físico",
          characteristics: [
            "Sensores de temperatura",
            "Monitoramento de umidade",
            "Detecção de água",
            "Monitoramento de energia",
            "Câmeras de segurança opcional"
          ],
          tags: ["physical", "datacenter", "temperature", "humidity", "environmental"]
        },
        {
          id: "11.1.5",
          name: "Monitoramento de Storage e Backup",
          description: "Monitoramento especializado de sistemas de armazenamento e backup",
          price: 35.00,
          functionality: "Monitoramento de capacidade, performance e integridade de armazenamento",
          applicability: "Empresas com sistemas de armazenamento críticos ou complexos",
          example: "Monitoramento de SANs, NAS, sistemas de backup e retenção de dados",
          characteristics: [
            "Monitoramento de capacidade",
            "Performance de IOPS",
            "Latência de disco",
            "Status de jobs de backup",
            "Previsão de crescimento"
          ],
          tags: ["storage", "backup", "monitoring", "capacity", "data"]
        }
      ]
    },
    {
      id: "11.2",
      name: "Monitoramento de Aplicações",
      description: "Soluções para monitoramento de aplicações, APIs e experiência de usuário",
      items: [
        {
          id: "11.2.1",
          name: "APM - Application Performance Monitoring",
          description: "Monitoramento de performance de aplicações com tracing",
          price: 45.00,
          functionality: "Monitoramento profundo de aplicações com rastreamento de transações",
          applicability: "Aplicações críticas que exigem visibilidade profunda de performance",
          example: "Monitoramento de aplicações web, APIs, microsserviços com tracing",
          characteristics: [
            "Tracing distribuído",
            "Mapa de serviços",
            "Detecção de gargalos",
            "Profiling de código",
            "Análise de impacto"
          ],
          tags: ["apm", "application", "performance", "tracing", "monitoring"]
        },
        {
          id: "11.2.2",
          name: "Monitoramento de APIs",
          description: "Monitoramento de disponibilidade e performance de APIs",
          price: 29.00,
          functionality: "Monitoramento especializado de APIs internas e externas",
          applicability: "Empresas com APIs críticas para negócio ou integração",
          example: "Monitoramento de REST APIs, SOAP, GraphQL com validação",
          characteristics: [
            "Testes de endpoint",
            "Validação de resposta",
            "Medição de performance",
            "Alertas de SLA",
            "Dashboards de API"
          ],
          tags: ["api", "monitoring", "rest", "endpoint", "integration"]
        },
        {
          id: "11.2.3",
          name: "Real User Monitoring",
          description: "Monitoramento da experiência real dos usuários em aplicações web",
          price: 39.00,
          functionality: "Coleta de métricas reais da experiência de usuários finais",
          applicability: "Aplicações web com foco em experiência do usuário",
          example: "Monitoramento de performance front-end, tempos de carregamento reais",
          characteristics: [
            "Medições reais de usuários",
            "Segmentação geográfica",
            "Análise de dispositivos",
            "Mapas de calor",
            "Correlation com backend"
          ],
          tags: ["rum", "user-experience", "front-end", "web", "performance"]
        },
        {
          id: "11.2.4",
          name: "Synthetic Monitoring",
          description: "Monitoramento sintético de aplicações com simulação de usuários",
          price: 35.00,
          functionality: "Testes automatizados simulando interações de usuários",
          applicability: "Aplicações críticas que necessitam verificação proativa",
          example: "Monitoramento de fluxos de usuário, checkout, login, transações",
          characteristics: [
            "Testes de múltiplos locais",
            "Simulação de jornadas",
            "Verificação de elementos",
            "Captura de screenshots",
            "Alerta proativo"
          ],
          tags: ["synthetic", "user-journey", "simulation", "proactive", "testing"]
        },
        {
          id: "11.2.5",
          name: "Database Performance Monitoring",
          description: "Monitoramento especializado de performance de bancos de dados",
          price: 49.00,
          functionality: "Visibilidade profunda em performance e operações de banco de dados",
          applicability: "Bancos de dados críticos que necessitam otimização",
          example: "Monitoramento de SQL Server, Oracle, PostgreSQL, MySQL, MongoDB",
          characteristics: [
            "Análise de queries",
            "Identificação de gargalos",
            "Estatísticas de tabelas",
            "Uso de índices",
            "Recomendações de otimização"
          ],
          tags: ["database", "sql", "performance", "queries", "optimization"]
        }
      ]
    },
    {
      id: "11.3",
      name: "Gestão de Logs e Analytics",
      description: "Soluções para coleta, análise e gestão centralizada de logs",
      items: [
        {
          id: "11.3.1",
          name: "Centralização de Logs Basic",
          description: "Serviço básico de coleta e centralização de logs",
          price: 19.00,
          functionality: "Coleta centralizada de logs de sistemas e aplicações",
          applicability: "Empresas que precisam centralizar logs para análise",
          example: "Centralização de logs de servidores, aplicações e equipamentos",
          characteristics: [
            "Coleta de até 5GB/dia",
            "Retenção de 15 dias",
            "Busca básica",
            "Alertas simples",
            "Dashboard básico"
          ],
          tags: ["logs", "centralization", "siem", "analysis", "basic"]
        },
        {
          id: "11.3.2",
          name: "Centralização de Logs Premium",
          description: "Serviço avançado de coleta e análise de logs",
          price: 49.00,
          functionality: "Plataforma avançada para gestão e análise de logs",
          applicability: "Empresas com necessidades de análise profunda de logs",
          example: "Ambientes complexos, análise de segurança, conformidade",
          characteristics: [
            "Coleta de até 20GB/dia",
            "Retenção de 90 dias",
            "Busca avançada",
            "Correlação de eventos",
            "Dashboards customizáveis"
          ],
          tags: ["logs", "premium", "analysis", "security", "compliance"]
        },
        {
          id: "11.3.3",
          name: "SIEM as a Service",
          description: "Sistema de gestão de informações e eventos de segurança",
          price: 79.00,
          functionality: "Detecção e análise de ameaças através de logs e eventos",
          applicability: "Empresas com necessidades avançadas de segurança",
          example: "Detecção de invasões, compliance, forensics, auditoria",
          characteristics: [
            "Coleta de logs de segurança",
            "Correlação de eventos",
            "Detecção de anomalias",
            "Regras de compliance",
            "Resposta a incidentes"
          ],
          tags: ["siem", "security", "logs", "threats", "compliance"]
        },
        {
          id: "11.3.4",
          name: "Log Retention Compliance",
          description: "Retenção de logs para fins de conformidade regulatória",
          price: 39.00,
          functionality: "Armazenamento seguro de logs por longos períodos",
          applicability: "Empresas sujeitas a regulamentações com retenção de logs",
          example: "Conformidade com PCI-DSS, HIPAA, SOX, LGPD",
          characteristics: [
            "Armazenamento imutável",
            "Criptografia em repouso",
            "Retenção configurável (1-7 anos)",
            "Trilha de auditoria",
            "Certificados de compliance"
          ],
          tags: ["compliance", "retention", "logs", "regulation", "audit"]
        },
        {
          id: "11.3.5",
          name: "Análise Avançada de Logs",
          description: "Análise avançada de logs com machine learning e IA",
          price: 59.00,
          functionality: "Detecção avançada de anomalias e insights em logs",
          applicability: "Empresas buscando insights avançados em grandes volumes de logs",
          example: "Detecção proativa de problemas, análise preditiva, correlação avançada",
          characteristics: [
            "Algoritmos de ML",
            "Detecção de anomalias",
            "Clustering automático",
            "Previsão de tendências",
            "Insights automatizados"
          ],
          tags: ["analytics", "machine-learning", "logs", "insights", "anomaly-detection"]
        }
      ]
    }
  ]
};
