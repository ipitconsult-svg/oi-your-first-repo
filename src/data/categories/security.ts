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
        },
        {
          id: "4.1.1.6",
          name: "SOC Server Monitoring",
          description: "Ativo que armazena dados vitais, sendo um alvo monitorado contra acessos indevidos e exfiltração",
          price: 40.00,
          functionality: "Monitoramento contínuo de servidores críticos com detecção de anomalias, tentativas de exfiltração e acessos não autorizados",
          applicability: "Servidores de bancos de dados, servidores de aplicações críticas, servidores de arquivos sensíveis",
          example: "Monitoramento de servidor de produção com dados de clientes ou informações financeiras",
          characteristics: [
            "Detecção de escalação de privilégios",
            "Monitoramento de acesso a dados sensíveis",
            "Análise de comportamento de usuários privilegiados",
            "Detecção de exfiltração de dados",
            "Alertas em tempo real de atividades suspeitas"
          ],
          tags: ["soc", "server", "monitoring", "data-protection", "access-control"],
          observations: "Proteção especializada para servidores que armazenam dados críticos para o negócio"
        },
        {
          id: "4.1.1.7",
          name: "SOC Firewall Monitoring",
          description: "Primeira linha de defesa que filtra o tráfego de rede, gerando logs essenciais para a detecção de tentativas de intrusão",
          price: 75.00,
          functionality: "Monitoramento avançado de logs e eventos de firewall para identificação proativa de tentativas de intrusão e tráfego malicioso",
          applicability: "Firewalls perimetrais, Next-Gen Firewalls, dispositivos UTM, gateways de segurança",
          example: "Monitoramento de firewall corporativo que protege o acesso à rede interna",
          characteristics: [
            "Análise em tempo real de logs de firewall",
            "Correlação de eventos de segurança",
            "Detecção de scanning e reconhecimento",
            "Identificação de padrões de ataque",
            "Monitoramento de regras e configurações"
          ],
          tags: ["soc", "firewall", "monitoring", "intrusion-detection", "perimeter-security"],
          observations: "Essencial para proteção efetiva do perímetro e detecção precoce de tentativas de intrusão"
        },
        {
          id: "4.1.1.8",
          name: "SOC Network Assets Monitoring",
          description: "Equipamentos como switches e roteadores que controlam o fluxo de dados, analisados para identificar movimentação lateral de atacantes",
          price: 30.00,
          functionality: "Monitoramento de dispositivos de rede para detectar anomalias, movimentação lateral e comportamentos suspeitos na infraestrutura",
          applicability: "Switches corporativos, roteadores, controllers wireless, dispositivos de core networking",
          example: "Monitoramento de switches de core ou roteadores de borda para detecção de tráfego anômalo",
          characteristics: [
            "Análise de fluxos de rede (NetFlow)",
            "Detecção de movimentação lateral",
            "Identificação de dispositivos não autorizados",
            "Monitoramento de alterações de configuração",
            "Alerta de desvios de baseline de tráfego"
          ],
          tags: ["soc", "network", "monitoring", "lateral-movement", "traffic-analysis"],
          observations: "Fundamental para detecção de atacantes que já penetraram o perímetro e tentam se movimentar lateralmente"
        },
        {
          id: "4.1.2.1",
          name: "SOC Events - Até 50 EPS",
          description: "Processamento de até 50 eventos por segundo (~129 milhões de eventos por mês)",
          price: 0.00,
          functionality: "Coleta, armazenamento e análise de até 50 eventos por segundo dos diversos dispositivos monitorados",
          applicability: "Pequenas e médias empresas, ambientes com volume controlado de logs",
          example: "Processamento de logs de firewall, endpoints e servidores de pequena empresa",
          characteristics: [
            "Processamento em tempo real",
            "Correlação de eventos",
            "Armazenamento seguro",
            "Análise de comportamento",
            "Detecção de anomalias"
          ],
          tags: ["soc", "events", "logs", "analysis", "small-business"],
          observations: "Sob consulta - Ideal para ambientes menores com volume moderado de eventos"
        },
        {
          id: "4.1.2.2",
          name: "SOC Events - 51 a 200 EPS",
          description: "Processamento de 51 a 200 eventos por segundo (~516 milhões de eventos por mês)",
          price: 0.00,
          functionality: "Coleta, armazenamento e análise de até 200 eventos por segundo com capacidade expandida de correlação",
          applicability: "Empresas de médio porte, ambientes com múltiplas fontes de logs",
          example: "Processamento de logs de infraestrutura corporativa de médio porte",
          characteristics: [
            "Processamento escalonável",
            "Correlação avançada de eventos",
            "Armazenamento otimizado",
            "Machine learning para detecção",
            "Relatórios de compliance avançados"
          ],
          tags: ["soc", "events", "logs", "medium-business", "compliance"],
          observations: "Sob consulta - Apropriado para ambientes com volume moderado a alto de eventos"
        },
        {
          id: "4.1.2.3",
          name: "SOC Events - 201 a 500 EPS",
          description: "Processamento de 201 a 500 eventos por segundo (~1,29 bilhão de eventos por mês)",
          price: 0.00,
          functionality: "Processamento de alto volume de eventos com capacidade avançada de análise e correlação para ambientes complexos",
          applicability: "Grandes empresas, ambientes corporativos complexos, múltiplos locais",
          example: "Monitoramento de infraestrutura completa de grande empresa",
          characteristics: [
            "Processamento distribuído",
            "Correlação de eventos multi-fonte",
            "Análise de comportamento avançada",
            "Detecção de ameaças persistentes",
            "Investigação forense simplificada"
          ],
          tags: ["soc", "events", "logs", "enterprise", "advanced-correlation"],
          observations: "Sob consulta - Solução robusta para grandes volumes de dados de segurança"
        },
        {
          id: "4.1.2.4",
          name: "SOC Events - 501 a 1000 EPS",
          description: "Processamento de 501 a 1000 eventos por segundo (~2,58 bilhões de eventos por mês)",
          price: 0.00,
          functionality: "Processamento de alto volume com tecnologias de big data para análise de segurança em tempo real",
          applicability: "Grandes corporações, ambientes críticos, setores altamente regulados",
          example: "Monitoramento de segurança para instituição financeira ou empresa multinacional",
          characteristics: [
            "Arquitetura distribuída de alto desempenho",
            "Análise de big data em tempo real",
            "Automação avançada de resposta",
            "Machine learning e IA para detecção",
            "Retenção estendida de dados"
          ],
          tags: ["soc", "events", "logs", "enterprise", "big-data"],
          observations: "Sob consulta - Para organizações com necessidades avançadas de processamento de eventos"
        },
        {
          id: "4.1.2.5",
          name: "SOC Events - Acima de 1000 EPS",
          description: "Processamento personalizado para volumes extremamente altos de eventos de segurança",
          price: 0.00,
          functionality: "Solução personalizada para processamento massivo de eventos com tecnologia de ponta e capacidade elástica",
          applicability: "Conglomerados, infraestruturas críticas, provedores de serviços",
          example: "Monitoramento de segurança para grande instituição financeira ou infraestrutura governamental",
          characteristics: [
            "Arquitetura elástica personalizada",
            "Processamento massivamente paralelo",
            "Algoritmos de IA avançados",
            "Capacidade preditiva de ameaças",
            "Integração com threat intelligence premium"
          ],
          tags: ["soc", "events", "logs", "enterprise", "massive-scale"],
          observations: "Sob consulta - Solução enterprise para volumes extremamente altos de dados de segurança"
        },
        {
          id: "4.1.3.1",
          name: "LGPD Storage - 2TB/mês",
          description: "Armazenamento criptografado e seguro para 2TB de dados mensais",
          price: 9600.00,
          functionality: "Storage dedicado de 24TB (LUN) com 6k IOPs para armazenamento seguro de logs e dados de segurança",
          applicability: "Empresas com requisitos de compliance LGPD, armazenamento de logs de segurança",
          example: "Armazenamento de logs de segurança para empresa de médio a grande porte",
          characteristics: [
            "Criptografia avançada em repouso",
            "Controle de acesso granular",
            "Trilhas de auditoria completas",
            "Retenção configurable (mínimo 12 meses)",
            "Hospedagem em datacenter nacional"
          ],
          tags: ["storage", "lgpd", "compliance", "security", "logs"],
          observations: "Em conformidade com a LGPD, com todos os dados mantidos em território nacional"
        },
        {
          id: "4.1.3.2",
          name: "LGPD Storage - Acima de 3TB/mês",
          description: "Armazenamento criptografado escalável para volumes acima de 3TB mensais",
          price: 0.35,
          functionality: "Storage escalável com 6k IOPs por GB para volumes maiores de dados de segurança",
          applicability: "Grandes corporações, ambientes com alto volume de logs, retenção extendida",
          example: "Armazenamento de logs para multinacional ou instituição financeira (preço por GB)",
          characteristics: [
            "Escalabilidade sob demanda",
            "Criptografia avançada em repouso",
            "Controle de acesso baseado em papéis",
            "Conformidade com regulações de armazenamento",
            "Retenção customizável de longo prazo"
          ],
          tags: ["storage", "lgpd", "compliance", "enterprise", "scalable"],
          observations: "Preço por GB para volumes acima de 3TB/mês, mantendo conformidade com LGPD"
        }
      ]
    },
    {
      id: "4.2",
      name: "Proteção DDoS",
      description: "Soluções de proteção contra ataques distribuídos de negação de serviço",
      items: [
        {
          id: "4.2.1",
          name: "Proteção DDoS | Nacional Basic",
          description: "Proteção DDoS de nível básico com 20Gbps por servidor",
          price: 149.99,
          functionality: "Proteção contra ataques DDoS com capacidade de mitigação de até 20Gbps por servidor em datacenter nacional",
          applicability: "Websites, aplicações web, pequenos e-commerces, blogs corporativos",
          example: "Proteção para site institucional ou aplicação web de pequeno porte",
          characteristics: [
            "Mitigação de até 20Gbps",
            "Proteção volumétrica básica",
            "Proteção contra ataques de protocolo",
            "Relatórios básicos de ataques",
            "SLA de 6h para resposta"
          ],
          tags: ["ddos", "protection", "basic", "mitigation", "security"],
          observations: "SLA 6h / null route / atendimento via ticket. Datacenter: SPO"
        },
        {
          id: "4.2.2",
          name: "Proteção DDoS | Nacional Standard",
          description: "Proteção DDoS de nível intermediário com 40Gbps por servidor",
          price: 249.99,
          functionality: "Proteção contra ataques DDoS com capacidade de mitigação de até 40Gbps por servidor em datacenter nacional",
          applicability: "E-commerces médios, portais corporativos, aplicações de negócio, APIs expostas",
          example: "Proteção para loja online de médio porte ou portal de serviços",
          characteristics: [
            "Mitigação de até 40Gbps",
            "Proteção volumétrica avançada",
            "Proteção contra ataques de camada 7",
            "Relatórios detalhados de ataques",
            "SLA de 3h para resposta"
          ],
          tags: ["ddos", "protection", "standard", "mitigation", "layer7"],
          observations: "SLA 3h / atendimento via ticket. Datacenter: SPO"
        },
        {
          id: "4.2.3",
          name: "Proteção DDoS | Nacional Premium",
          description: "Proteção DDoS premium com capacidade ilimitada por servidor",
          price: 499.99,
          functionality: "Proteção ilimitada contra ataques DDoS com capacidade de mitigação sem limites por servidor em datacenter nacional",
          applicability: "E-commerces grandes, sistemas financeiros, aplicações críticas, serviços essenciais",
          example: "Proteção para plataforma de e-banking ou e-commerce de grande porte",
          characteristics: [
            "Mitigação de capacidade ilimitada",
            "Proteção multicamada avançada",
            "Mitigação adaptativa e inteligente",
            "Análise comportamental de tráfego",
            "SLA de 1h para resposta"
          ],
          tags: ["ddos", "protection", "premium", "unlimited", "mission-critical"],
          observations: "SLA 1h / atendimento via ticket e WhatsApp. Datacenter: SPO"
        }
      ]
    },
    {
      id: "4.3",
      name: "Firewall as a Service",
      description: "Proteção de perímetro como serviço com gestão contínua",
      items: [
        {
          id: "4.3.1.1",
          name: "Secure Private Cloud 1",
          description: "SPC1 (Até 2 servidores) com proteção básica",
          price: 300.00,
          functionality: "Ambiente seguro para até 2 servidores com regras de firewall e conectividade VPN básicas",
          applicability: "Pequenas empresas, startups, ambiente de desenvolvimento, aplicações de pequeno porte",
          example: "Ambiente seguro para servidor web e banco de dados de aplicação departamental",
          characteristics: [
            "5x regras de firewall",
            "5x contas VPN local",
            "Até 3x Contas VPN site to site",
            "2x solicitações de alterações de regras",
            "IPS Padrão"
          ],
          tags: ["firewall", "secure-cloud", "vpn", "small-business", "perimeter"],
          observations: "Solução econômica para pequenas implementações em datacenter BRA"
        },
        {
          id: "4.3.1.2",
          name: "Secure Private Cloud 2",
          description: "SPC2 (Até 2 servidores) com proteção intermediária",
          price: 450.00,
          functionality: "Ambiente seguro para até 2 servidores com conjunto expandido de regras e conectividade",
          applicability: "Pequenas e médias empresas, ambientes de homologação, aplicações de departamento",
          example: "Proteção para ambiente de aplicação de negócio com requisitos de segurança intermediários",
          characteristics: [
            "10x regras de firewall",
            "10x contas VPN local",
            "Até 5x Contas VPN site to site",
            "3x solicitações de alterações de regras",
            "IPS Padrão"
          ],
          tags: ["firewall", "secure-cloud", "vpn", "medium-business", "protection"],
          observations: "Equilíbrio entre recursos e custo para implementações em datacenter BRA"
        },
        {
          id: "4.3.1.3",
          name: "Secure Private Cloud 3",
          description: "SPC3 (Até 2 servidores) com proteção avançada",
          price: 600.00,
          functionality: "Ambiente seguro para até 2 servidores com conjunto robusto de regras e conectividade VPN",
          applicability: "Empresas médias, aplicações de negócio, ambientes com necessidades avançadas de segurança",
          example: "Proteção para aplicação crítica de departamento com múltiplas conexões externas",
          characteristics: [
            "20x regras de firewall",
            "20x contas VPN local",
            "Até 8x Contas VPN site to site",
            "5x solicitações de alterações de regras",
            "IPS Padrão"
          ],
          tags: ["firewall", "secure-cloud", "vpn", "business", "advanced-security"],
          observations: "Solução robusta para aplicações importantes em datacenter BRA"
        },
        {
          id: "4.3.1.4",
          name: "Secure Private Cloud 4",
          description: "SPC4 (Até 2 servidores) com proteção premium",
          price: 900.00,
          functionality: "Ambiente seguro premium para até 2 servidores com proteção multicamada avançada",
          applicability: "Aplicações críticas, empresas com altos requisitos de segurança, ambientes regulados",
          example: "Proteção para sistema financeiro ou aplicação com dados sensíveis de clientes",
          characteristics: [
            "35x regras de firewall",
            "30x contas VPN local",
            "Até 12x Contas VPN site to site",
            "10x solicitações de alterações de regras",
            "Antivírus e IPS Padrão integrados"
          ],
          tags: ["firewall", "secure-cloud", "vpn", "enterprise", "premium-security"],
          observations: "Solução premium para aplicações críticas em datacenter BRA"
        },
        {
          id: "4.3.2.1",
          name: "FortiGate 40F",
          description: "Appliance de segurança com 5 portas RJ45 GE",
          price: 520.00,
          functionality: "Appliance Fortinet para pequenos escritórios com recursos de segurança integrados",
          applicability: "Pequenos escritórios, filiais remotas, lojas, consultórios",
          example: "Proteção de rede para escritório pequeno ou consultório médico",
          characteristics: [
            "5 portas RJ45 GE (1 WAN, 4 Internas)",
            "Firewall integrado com UTM",
            "VPN para acesso remoto",
            "Filtragem de conteúdo básica",
            "Gerenciamento centralizado"
          ],
          tags: ["firewall", "fortinet", "appliance", "small-office", "utm"],
          observations: "Valor/Mês: R$520,00. Com UTP: R$897,55. Com ATP: R$749,82"
        },
        {
          id: "4.3.2.2",
          name: "FortiGate 60F",
          description: "Appliance de segurança com 10 portas RJ45 GE",
          price: 680.00,
          functionality: "Appliance Fortinet para pequenas e médias empresas com recursos avançados de segurança",
          applicability: "Pequenas e médias empresas, escritórios profissionais, clínicas, pequenas lojas",
          example: "Proteção para escritório de advocacia ou clínica médica com várias estações",
          characteristics: [
            "10 portas RJ45 GE (2 WAN, 1 DMZ, 7 Internas)",
            "Firewall NGFW com inspeção SSL",
            "SD-WAN básico integrado",
            "Segmentação de rede interna",
            "Proteção contra malware"
          ],
          tags: ["firewall", "fortinet", "appliance", "medium-business", "ngfw"],
          observations: "Valor/Mês: R$680,00. Com UTP: R$1.210,10. Com ATP: R$1.002,67"
        },
        {
          id: "4.3.2.3",
          name: "FortiGate 100F",
          description: "Appliance de segurança enterprise com 22 portas RJ45 GE",
          price: 2500.00,
          functionality: "Appliance Fortinet potente para empresas com alto throughput e recursos avançados de segurança",
          applicability: "Empresas de médio porte, escritórios corporativos, ambientes com múltiplas VLANs",
          example: "Proteção para matriz de empresa de médio porte ou datacenter departamental",
          characteristics: [
            "22 portas RJ45 GE + 2 SFP + 2 SFP+",
            "1 DMZ, 1 Mgmt, 2 HA, 14 switch compartilhadas",
            "NGFW com inspeção de conteúdo avançada",
            "SD-WAN corporativo integrado",
            "Alta disponibilidade (HA)"
          ],
          tags: ["firewall", "fortinet", "appliance", "enterprise", "high-performance"],
          observations: "Valor/Mês: R$2.500,00. Com UTP: R$3.733,54"
        },
        {
          id: "4.3.2.4",
          name: "FortiGate 200F",
          description: "Appliance de segurança enterprise avançado",
          price: 4900.00,
          functionality: "Appliance Fortinet de alto desempenho para empresas e datacenters com necessidades avançadas de segurança",
          applicability: "Grandes empresas, datacenters, infraestrutura crítica, ambientes de alta performance",
          example: "Proteção para datacenter corporativo ou backbone de rede empresarial",
          characteristics: [
            "2 portas RJ45 GE (HA/MGMT), 16 portas RJ45 GE",
            "2 slots SFP FortiLink, 8 slots SFP GE",
            "Processamento de SSL em hardware dedicado",
            "Virtual domains para multi-tenancy",
            "Throughput de firewall de alto desempenho"
          ],
          tags: ["firewall", "fortinet", "appliance", "datacenter", "high-throughput"],
          observations: "Valor/Mês: R$4.900,00. Com UTP: R$7.473,94"
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
      name: "Acronis Security Suite",
      description: "Soluções avançadas de cibersegurança e proteção de endpoints da Acronis",
      items: [
        {
          id: "4.4.1.1",
          name: "Security + EDR",
          description: "Advanced Security + EDR - Proteção avançada com detecção e resposta a ameaças",
          price: 7.78,
          functionality: "Proteção completa para endpoints com capacidades avançadas de EDR (Endpoint Detection and Response)",
          applicability: "Estações de trabalho corporativas, servidores críticos, dispositivos com acesso a dados sensíveis",
          example: "Proteção para laptops corporativos de executivos ou departamento financeiro",
          characteristics: [
            "Detecção de ameaças avançada por IA",
            "Análise comportamental de processos",
            "Resposta automatizada a incidentes",
            "Forensics e rollback de ameaças",
            "Proteção contra ransomware"
          ],
          tags: ["acronis", "security", "edr", "endpoint", "advanced-threat"],
          observations: "Solução standalone da Acronis com recursos completos de proteção e EDR"
        },
        {
          id: "4.4.2.1",
          name: "Security + XDR",
          description: "Advanced Security + XDR - Proteção estendida com detecção e resposta cross-platform",
          price: 24.40,
          functionality: "Plataforma unificada de proteção com recursos avançados de XDR para detecção e resposta além do endpoint",
          applicability: "Ambientes corporativos complexos, infraestrutura híbrida, organizações com requisitos avançados de segurança",
          example: "Proteção para ambiente empresarial completo incluindo endpoints, servidores e infraestrutura de rede",
          characteristics: [
            "Telemetria correlacionada multi-fonte",
            "Detecção avançada cross-platform",
            "Hunting automatizado de ameaças",
            "Investigação simplificada de incidentes",
            "Resposta orquestrada em múltiplos vetores"
          ],
          tags: ["acronis", "security", "xdr", "cross-platform", "advanced"],
          observations: "Solução standalone da Acronis com visão unificada de segurança em toda a infraestrutura"
        },
        {
          id: "4.4.3.1",
          name: "MDR Standard",
          description: "Managed Detection and Response - Standard - Detecção e resposta gerenciada por especialistas",
          price: 34.85,
          functionality: "Serviço de MDR que combina tecnologia avançada com monitoramento humano especializado 24/7",
          applicability: "Empresas sem equipe de segurança dedicada, complemento para equipes internas, ambientes críticos",
          example: "Monitoramento de segurança para empresa de médio porte sem SOC interno",
          characteristics: [
            "Monitoramento 24/7 por especialistas",
            "Análise humana de alertas",
            "Resposta assistida a incidentes",
            "Hunting proativo de ameaças",
            "Recomendações de segurança"
          ],
          tags: ["acronis", "mdr", "managed", "detection", "response"],
          observations: "Requer Advanced Security + EDR como pré-requisito"
        },
        {
          id: "4.4.3.2",
          name: "MDR Advanced",
          description: "Managed Detection and Response - Advanced - Detecção e resposta gerenciada premium",
          price: 69.85,
          functionality: "Serviço premium de MDR com recursos avançados de hunting, resposta e consultoria de segurança",
          applicability: "Organizações com alto perfil de risco, ambientes regulados, empresas que processam dados sensíveis",
          example: "Proteção gerenciada para instituição financeira ou empresa com propriedade intelectual valiosa",
          characteristics: [
            "Monitoramento premium 24/7/365",
            "Resposta a incidentes com SLA garantido",
            "Threat hunting avançado e personalizado",
            "Consultoria de segurança dedicada",
            "Análise forense completa"
          ],
          tags: ["acronis", "mdr", "advanced", "premium", "managed-security"],
          observations: "Requer Advanced Security + EDR como pré-requisito"
        },
        {
          id: "4.4.4.1",
          name: "Advanced Email Security",
          description: "Advanced Email Security (Perception Point) - Proteção avançada para email corporativo",
          price: 28.44,
          functionality: "Proteção de email de próxima geração contra phishing, malware, BEC e ataques avançados",
          applicability: "Empresas com uso intensivo de email, organizações que processam informações sensíveis por email",
          example: "Proteção para emails corporativos em empresa financeira ou equipe executiva",
          characteristics: [
            "Detecção avançada de phishing",
            "Prevenção de ataques BEC",
            "Sandboxing de anexos em tempo real",
            "Análise comportamental de URLs",
            "Prevenção de vazamento de dados via email"
          ],
          tags: ["acronis", "email", "security", "phishing", "perception-point"],
          observations: "Solução standalone da Acronis powered by Perception Point"
        },
        {
          id: "4.4.4.2",
          name: "Advanced Collaboration Apps Security",
          description: "Advanced Collaboration Apps Security (Perception Point) - Proteção para aplicações colaborativas",
          price: 19.14,
          functionality: "Segurança avançada para plataformas de colaboração como Teams, Slack e aplicações web",
          applicability: "Empresas que utilizam plataformas colaborativas, equipes remotas, organizações com uso intenso de SaaS",
          example: "Proteção para comunicações via Microsoft Teams ou Slack em ambiente corporativo",
          characteristics: [
            "Monitoramento de conteúdo em tempo real",
            "Detecção de malware em arquivos compartilhados",
            "Análise de links em chats e mensagens",
            "Prevenção de vazamentos em plataformas colaborativas",
            "Proteção contra ameaças em aplicações web"
          ],
          tags: ["acronis", "collaboration", "teams", "slack", "perception-point"],
          observations: "Solução standalone da Acronis powered by Perception Point"
        },
        {
          id: "4.4.5.1",
          name: "Advanced Security Awareness Training",
          description: "Treinamento avançado de conscientização em segurança",
          price: 8.84,
          functionality: "Plataforma completa de treinamento e simulação para conscientização em segurança cibernética",
          applicability: "Todos os funcionários, especialmente usuários finais, equipes com acesso a dados sensíveis",
          example: "Treinamento anti-phishing para todos os colaboradores da empresa (preço por usuário)",
          characteristics: [
            "Módulos de treinamento personalizados",
            "Simulações realistas de phishing",
            "Gamificação e premiações",
            "Dashboards de progresso e métricas",
            "Conteúdo atualizado sobre novas ameaças"
          ],
          tags: ["acronis", "training", "awareness", "phishing", "education"],
          observations: "Solução standalone da Acronis com preço por usuário"
        }
      ]
    },
    {
      id: "4.5",
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
    },
    {
      id: "4.6",
      name: "Licenças de Software de Segurança",
      description: "Licenças de software especializado para proteção e segurança da informação",
      items: [
        {
          id: "4.6.1",
          name: "Link para Catálogo de Licenças",
          description: "Acesso ao catálogo completo de licenças de software de segurança",
          price: 0.00,
          functionality: "Acesso ao catálogo de licenças e softwares de segurança da informação com produtos líderes de mercado",
          applicability: "Todos os tipos de organizações que necessitam de software de segurança licenciado",
          example: "Licenças para software antivírus, firewalls, VPNs e outras soluções de segurança",
          characteristics: [
            "Ampla variedade de soluções",
            "Produtos líderes de mercado",
            "Opções para diferentes tamanhos de empresa",
            "Suporte técnico especializado",
            "Modelos de licenciamento flexíveis"
          ],
          tags: ["licenças", "software", "segurança", "antivírus", "firewall"],
          observations: "Consulte o catálogo completo de licenças MACRO para detalhes de produtos e preços",
          externalLink: "/softwares-licencas"
        }
      ]
    }
  ]
};
