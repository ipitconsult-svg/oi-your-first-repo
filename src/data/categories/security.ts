import { Category } from "@/types/catalog";

export const securityCategory: Category = {
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
          description: "Monitoramento de servidores críticos",
          price: 25.00,
          functionality: "Monitoramento avançado de servidores com detecção de anomalias, análise de logs e alertas em tempo real",
          applicability: "Servidores críticos, aplicações sensíveis, bancos de dados, sistemas core",
          example: "Monitoramento de servidor de banco de dados ou servidor de aplicação crítica",
          characteristics: [
            "Log analysis avançada",
            "Detecção de anomalias",
            "Correlação de eventos",
            "Monitoramento de performance",
            "Alertas em tempo real"
          ],
          tags: ["soc", "server", "monitoring", "anomaly-detection", "critical"],
          observations: "Essencial para servidores que hospedam aplicações críticas de negócio"
        },
        {
          id: "4.1.1.3",
          name: "SOC Network Monitoring",
          description: "Monitoramento de tráfego e comportamento de rede",
          price: 30.00,
          functionality: "Análise contínua de tráfego de rede com detecção de padrões anômalos e potenciais intrusões",
          applicability: "Infraestrutura de rede corporativa, conexões externas, VPNs, gateways",
          example: "Monitoramento de tráfego de internet corporativo ou conexões entre filiais",
          characteristics: [
            "Network traffic analysis",
            "Deep packet inspection",
            "Detecção de lateral movement",
            "Identificação de C&C traffic",
            "Alertas de anomalias"
          ],
          tags: ["soc", "network", "traffic", "intrusion-detection", "anomaly"],
          observations: "Fundamental para detecção precoce de comprometimentos de rede"
        },
        {
          id: "4.1.1.4",
          name: "SOC Cloud Service Monitoring",
          description: "Monitoramento de serviços e recursos em nuvem",
          price: 35.00,
          functionality: "Monitoramento específico para ambientes cloud com análise de configurações, permissões e atividades",
          applicability: "AWS, Azure, GCP, nuvens privadas, serviços SaaS críticos",
          example: "Monitoramento de recursos AWS ou serviços críticos de negócio em SaaS",
          characteristics: [
            "Cloud configuration audit",
            "Identity monitoring",
            "Privilege analysis",
            "Resource activity tracking",
            "Multi-cloud support"
          ],
          tags: ["soc", "cloud", "saas", "configuration", "permissions"],
          observations: "Especializado para monitoramento de serviços e infraestrutura em nuvem"
        },
        {
          id: "4.1.1.5",
          name: "SOC Application Monitoring",
          description: "Monitoramento de aplicações críticas de negócio",
          price: 40.00,
          functionality: "Monitoramento focado em aplicações com análise de comportamento, transações e autenticações",
          applicability: "Aplicações web, ERP, CRM, sistemas financeiros, e-commerce",
          example: "Monitoramento de sistema ERP ou aplicação financeira crítica",
          characteristics: [
            "Application behavior analysis",
            "Transação monitoring",
            "Authentication tracking",
            "Business logic analysis",
            "API monitoring"
          ],
          tags: ["soc", "application", "transactions", "authentication", "business-logic"],
          observations: "Ideal para aplicações que processam dados sensíveis ou transações de valor"
        }
      ]
    },
    {
      id: "4.2",
      name: "Firewall as a Service",
      description: "Proteção de perímetro como serviço com gestão contínua",
      items: [
        {
          id: "4.2.1",
          name: "Next-Gen Firewall - Essential",
          description: "Firewall de próxima geração com recursos essenciais",
          price: 300.00,
          functionality: "Proteção de perímetro com inspeção profunda de pacotes, IPS e filtro de aplicações básico",
          applicability: "Pequenas empresas, filiais remotas, perímetro básico, conexões de internet",
          example: "Proteção de perímetro de escritório pequeno ou filial remota",
          characteristics: [
            "Stateful inspection",
            "Intrusion Prevention básico",
            "Application control básico",
            "VPN site-to-site",
            "Gestão centralizada"
          ],
          tags: ["firewall", "essential", "perimeter", "small-business", "remote-office"],
          observations: "Solução econômica com proteção efetiva para necessidades básicas de segurança"
        },
        {
          id: "4.2.2",
          name: "Next-Gen Firewall - Business",
          description: "Firewall de próxima geração para empresas de médio porte",
          price: 700.00,
          functionality: "Proteção avançada com deep packet inspection, prevenção de ameaças e visibilidade detalhada",
          applicability: "Empresas médias, escritórios principais, DMZ, ambientes híbridos",
          example: "Proteção da sede de empresa média ou perímetro com múltiplos serviços expostos",
          characteristics: [
            "Deep application inspection",
            "Advanced threat prevention",
            "SSL inspection",
            "User identity awareness",
            "SD-WAN integration"
          ],
          tags: ["firewall", "business", "medium-enterprise", "advanced", "threat-prevention"],
          observations: "Equilíbrio entre performance, recursos e custo para empresas em crescimento"
        },
        {
          id: "4.2.3",
          name: "Next-Gen Firewall - Enterprise",
          description: "Firewall de próxima geração para grandes corporações",
          price: 1500.00,
          functionality: "Solução premium com proteção avançada contra ameaças, sandboxing, zero-day protection e alta performance",
          applicability: "Grandes corporações, data centers, infraestrutura crítica, compliance rigoroso",
          example: "Proteção de perímetro de data center corporativo ou aplicações críticas expostas",
          characteristics: [
            "Advanced malware protection",
            "Sandboxing integrado",
            "Zero-day protection",
            "Threat intelligence integration",
            "High-performance throughput",
            "Clustering e redundância"
          ],
          tags: ["firewall", "enterprise", "corporate", "advanced-threat", "high-performance"],
          observations: "Solução premium para ambientes que requerem segurança máxima e alta performance"
        },
        {
          id: "4.2.4",
          name: "Web Application Firewall (WAF)",
          description: "Firewall especializado para proteção de aplicações web",
          price: 450.00,
          functionality: "Proteção específica para aplicações web contra OWASP Top 10, ataques dirigidos e bots maliciosos",
          applicability: "Aplicações web públicas, APIs expostas, e-commerce, portais de clientes",
          example: "Proteção de e-commerce ou aplicação web crítica exposta na internet",
          characteristics: [
            "OWASP Top 10 protection",
            "Bot mitigation",
            "API protection",
            "Virtual patching",
            "Behavioral analysis"
          ],
          tags: ["waf", "application", "web", "api", "owasp"],
          observations: "Essencial para aplicações web expostas com processamento de dados sensíveis ou transações"
        },
        {
          id: "4.2.5",
          name: "DDoS Protection",
          description: "Proteção contra ataques de negação de serviço distribuídos",
          price: 600.00,
          functionality: "Mitigação avançada de DDoS com capacidade de absorção de ataques volumétricos e proteção de camada 7",
          applicability: "Sites de alto valor, serviços online críticos, infraestrutura exposta na internet",
          example: "Proteção de e-commerce de grande porte ou serviço online essencial",
          characteristics: [
            "Volumetric attack mitigation",
            "Protocol attack defense",
            "Application layer protection",
            "Traffic scrubbing",
            "Always-on monitoring"
          ],
          tags: ["ddos", "protection", "mitigation", "volumetric", "application-layer"],
          observations: "Proteção robusta contra ataques capazes de derrubar serviços online"
        }
      ]
    },
    {
      id: "4.3",
      name: "Segurança de Endpoints",
      description: "Proteção avançada para dispositivos finais corporativos",
      items: [
        {
          id: "4.3.1",
          name: "EDR (Endpoint Detection & Response)",
          description: "Detecção e resposta avançada para endpoints",
          price: 25.00,
          functionality: "Monitoramento contínuo de endpoints com análise comportamental e capacidade de resposta automatizada",
          applicability: "Workstations corporativas, servidores críticos, ambientes regulados",
          example: "Proteção de laptops corporativos ou desktops com acesso a dados sensíveis",
          characteristics: [
            "Behavioral analysis",
            "Automated response",
            "Threat hunting",
            "Forensic investigation",
            "Centralized management"
          ],
          tags: ["endpoint", "edr", "detection", "response", "behavioral"],
          observations: "Solução moderna que vai além do antivírus tradicional com recursos avançados de detecção e resposta"
        },
        {
          id: "4.3.2",
          name: "XDR (Extended Detection & Response)",
          description: "Detecção e resposta estendida para toda a infraestrutura",
          price: 35.00,
          functionality: "Solução unificada de detecção e resposta que integra endpoints, rede, email e cloud",
          applicability: "Organizações com infraestrutura complexa, ambientes híbridos, requisitos avançados de segurança",
          example: "Proteção integrada para grande corporação com infraestrutura on-premises e cloud",
          characteristics: [
            "Cross-platform correlation",
            "Unified threat detection",
            "Automated investigation",
            "Threat intelligence integration",
            "Single pane of glass"
          ],
          tags: ["xdr", "extended", "unified", "correlation", "advanced"],
          observations: "Visão unificada de ameaças em toda a infraestrutura com correlação avançada"
        },
        {
          id: "4.3.3",
          name: "Antivirus/Anti-malware Next-Gen",
          description: "Proteção avançada contra malware com machine learning",
          price: 15.00,
          functionality: "Proteção contra malware que utiliza machine learning e heurística avançada para detecção de ameaças desconhecidas",
          applicability: "Todos os endpoints corporativos, camada básica de proteção",
          example: "Proteção base para todos os computadores da organização",
          characteristics: [
            "Machine learning detection",
            "Zero-day protection",
            "Fileless malware detection",
            "Cloud-based analysis",
            "Minimal performance impact"
          ],
          tags: ["antivirus", "next-gen", "machine-learning", "malware", "zero-day"],
          observations: "Camada essencial de proteção com tecnologia moderna além das assinaturas tradicionais"
        },
        {
          id: "4.3.4",
          name: "Mobile Threat Defense",
          description: "Proteção para dispositivos móveis corporativos",
          price: 12.00,
          functionality: "Segurança específica para dispositivos móveis contra apps maliciosos, phishing e ameaças de rede",
          applicability: "Smartphones e tablets corporativos, BYOD, acesso móvel a dados sensíveis",
          example: "Proteção para frota de smartphones corporativos ou programa BYOD",
          characteristics: [
            "App vetting",
            "Mobile phishing protection",
            "Rogue network detection",
            "Device vulnerability analysis",
            "Integration with MDM"
          ],
          tags: ["mobile", "threat", "smartphone", "byod", "app-vetting"],
          observations: "Essencial para organizações que utilizam dispositivos móveis para acesso a dados corporativos"
        },
        {
          id: "4.3.5",
          name: "Data Loss Prevention (DLP)",
          description: "Prevenção de vazamento de dados sensíveis",
          price: 28.00,
          functionality: "Monitoramento e controle de dados sensíveis em endpoints para prevenir vazamentos acidentais ou maliciosos",
          applicability: "Ambientes com dados regulados, informações confidenciais, propriedade intelectual",
          example: "Proteção contra vazamento de dados em instituição financeira ou empresa com PI valiosa",
          characteristics: [
            "Content inspection",
            "Context-aware policies",
            "Endpoint monitoring",
            "USB/device control",
            "Email DLP integration"
          ],
          tags: ["dlp", "data-loss", "compliance", "confidential", "protection"],
          observations: "Crítico para compliance com regulações como LGPD, GDPR e proteção de dados sensíveis"
        }
      ]
    },
    {
      id: "4.4",
      name: "Gestão de Identidade e Acesso",
      description: "Soluções para controle de acesso e gestão de identidades",
      items: [
        {
          id: "4.4.1",
          name: "IAM (Identity & Access Management)",
          description: "Gestão centralizada de identidades e acessos",
          price: 20.00,
          functionality: "Plataforma completa de gerenciamento de identidades, autenticação e autorização para recursos corporativos",
          applicability: "Organizações de médio e grande porte, ambientes híbridos, múltiplos sistemas",
          example: "Gestão de identidades para empresa com múltiplos sistemas e aplicações",
          characteristics: [
            "Single Sign-On (SSO)",
            "Lifecycle management",
            "Self-service capabilities",
            "Approval workflows",
            "Policy-based access control"
          ],
          tags: ["iam", "identity", "access", "lifecycle", "sso"],
          observations: "Fundamental para gestão eficiente de acesso e compliance em ambientes complexos"
        },
        {
          id: "4.4.2",
          name: "MFA (Multi-Factor Authentication)",
          description: "Autenticação de múltiplos fatores para acesso seguro",
          price: 8.00,
          functionality: "Segunda camada de verificação de identidade além de senhas, com múltiplas opções de fatores de autenticação",
          applicability: "Acessos privilegiados, VPN, sistemas críticos, dados sensíveis",
          example: "Proteção adicional para acesso VPN remoto ou sistemas financeiros",
          characteristics: [
            "Push notifications",
            "Hardware tokens",
            "Biometric options",
            "SMS/email codes",
            "Contextual authentication"
          ],
          tags: ["mfa", "authentication", "multi-factor", "verification", "access"],
          observations: "Medida essencial para mitigar riscos de comprometimento de credenciais"
        },
        {
          id: "4.4.3",
          name: "PAM (Privileged Access Management)",
          description: "Gestão especializada de acessos privilegiados",
          price: 35.00,
          functionality: "Controle e monitoramento de acessos administrativos e privilegiados a sistemas críticos",
          applicability: "Acessos admin, contas de serviço, acessos a sistemas críticos, compliance",
          example: "Gestão de acesso admin para servidores de database ou contas de domínio",
          characteristics: [
            "Password vault",
            "Session recording",
            "Just-in-time access",
            "Approval workflows",
            "Audit & compliance reporting"
          ],
          tags: ["pam", "privileged", "admin", "vault", "monitoring"],
          observations: "Crítico para proteção contra abuso de credenciais privilegiadas - principal vetor de ataque avançado"
        },
        {
          id: "4.4.4",
          name: "Zero Trust Access",
          description: "Acesso baseado no princípio de Zero Trust",
          price: 25.00,
          functionality: "Implementação de arquitetura Zero Trust com verificação contínua e acesso com menor privilégio",
          applicability: "Ambientes híbridos modernos, acesso remoto, proteção de recursos críticos",
          example: "Acesso seguro para ambiente híbrido com usuários remotos e múltiplas clouds",
          characteristics: [
            "Continuous verification",
            "Least privilege access",
            "Device posture check",
            "Micro-segmentation",
            "Risk-based policies"
          ],
          tags: ["zero-trust", "continuous", "verification", "least-privilege", "modern"],
          observations: "Arquitetura moderna de segurança para ambientes dinâmicos e distribuídos"
        },
        {
          id: "4.4.5",
          name: "CASB (Cloud Access Security Broker)",
          description: "Segurança para acessos e dados em aplicações cloud",
          price: 30.00,
          functionality: "Monitoramento e controle de acesso a aplicações SaaS e dados armazenados em nuvem",
          applicability: "Ambientes com múltiplas aplicações SaaS, shadow IT, dados em cloud",
          example: "Controle de acesso e DLP para Office 365, Salesforce e outras aplicações SaaS",
          characteristics: [
            "Cloud app discovery",
            "Data security policies",
            "Access control for SaaS",
            "Shadow IT detection",
            "Threat protection"
          ],
          tags: ["casb", "cloud", "saas", "shadow-it", "data-protection"],
          observations: "Essencial para organizações que utilizam múltiplas aplicações SaaS e armazenam dados na nuvem"
        }
      ]
    }
  ]
};
