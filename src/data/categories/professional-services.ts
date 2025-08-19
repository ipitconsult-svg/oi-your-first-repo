import { Category } from "@/types/catalog";

export const professionalServicesCategory: Category = {
  id: "9",
  name: "PROFESSIONAL SERVICES",
  description: "Serviços profissionais especializados de migração, implementação e suporte técnico hands-on",
  subcategories: [
    {
      id: "9.1",
      name: "Migração de Dados",
      description: "Serviços especializados de migração de dados entre ambientes, sistemas operacionais e infraestruturas",
      items: [
        {
          id: "9.1.1",
          name: "Migração de Ambientes para cPanel",
          description: "Migração completa de dados e configurações para painel cPanel",
          price: 450.00,
          functionality: "Transferência de sites, emails, bancos de dados e configurações para ambiente cPanel",
          applicability: "Provedores de hospedagem ou empresas migrando para ambiente cPanel",
          example: "Migração de sites WordPress, e-commerces, aplicações PHP para cPanel",
          characteristics: [
            "Migração de contas de hospedagem",
            "Transferência de emails e configurações",
            "Migração de bancos MySQL/PostgreSQL",
            "Preservação de permissões e ownership",
            "Validação pós-migração completa",
            "Suporte a múltiplas tecnologias (PHP, Python, Node.js)",
            "Migração de DNS e registros",
            "Backup de segurança antes da migração"
          ],
          tags: ["migration", "cpanel", "hosting", "websites", "databases"]
        },
        {
          id: "9.1.2",
          name: "Migração de Ambientes para Plesk",
          description: "Migração completa de dados e configurações para painel Plesk",
          price: 450.00,
          functionality: "Transferência de sites, aplicações e configurações para ambiente Plesk",
          applicability: "Empresas migrando para Windows/Linux com painel Plesk",
          example: "Migração de aplicações .NET, PHP, bancos SQL Server para Plesk",
          characteristics: [
            "Suporte a Windows e Linux",
            "Migração de aplicações .NET e PHP",
            "Transferência de bancos SQL Server e MySQL",
            "Migração de IIS e Apache",
            "Configuração de SSL/TLS",
            "Migração de configurações de email",
            "Preservação de estrutura de diretórios",
            "Testes de funcionalidade pós-migração"
          ],
          tags: ["migration", "plesk", "windows", "linux", "dotnet"]
        },
        {
          id: "9.1.3",
          name: "Migração de Instâncias utilizando Acronis Backup",
          description: "Migração de servidores completos utilizando tecnologia Acronis",
          price: 650.00,
          functionality: "Migração de servidores físicos e virtuais com mínimo downtime usando Acronis",
          applicability: "Empresas migrando infraestrutura completa ou servidores críticos",
          example: "Migração de servidores Windows/Linux, Active Directory, servidores de banco",
          characteristics: [
            "Migração bare-metal e P2V/V2V",
            "Suporte universal a sistemas operacionais",
            "Migração com mínimo downtime",
            "Backup automático antes da migração",
            "Recuperação granular de dados",
            "Migração incremental e diferencial",
            "Validação de integridade de dados",
            "Restauração seletiva de componentes"
          ],
          tags: ["migration", "acronis", "bare-metal", "p2v", "v2v"]
        },
        {
          id: "9.1.4",
          name: "Migração de Volumes de Disco",
          description: "Migração especializada de volumes de disco entre storages e sistemas",
          price: 380.00,
          functionality: "Transferência de dados em nível de volume preservando estrutura e performance",
          applicability: "Upgrade de storage, migração entre SANs ou consolidação de volumes",
          example: "Migração entre storages SAN, upgrade de discos, consolidação de volumes",
          characteristics: [
            "Migração em nível de bloco",
            "Suporte a LVM, RAID e volumes dinâmicos",
            "Preservação de estrutura de partições",
            "Migração online com mínima interrupção",
            "Suporte a diferentes filesystems",
            "Verificação de integridade pós-migração",
            "Otimização de performance",
            "Relatório detalhado de transferência"
          ],
          tags: ["migration", "storage", "volumes", "san", "lvm"]
        },
        {
          id: "9.1.5",
          name: "Migração de Banco de Dados",
          description: "Migração especializada de bancos de dados entre plataformas e versões",
          price: 550.00,
          functionality: "Migração de bancos de dados preservando integridade, performance e funcionalidades",
          applicability: "Upgrade de versões, migração entre SGBDs ou consolidação de bases",
          example: "Migração MySQL para PostgreSQL, upgrade SQL Server, migração Oracle para cloud",
          characteristics: [
            "Suporte a múltiplos SGBDs",
            "Migração de schema e dados",
            "Preservação de procedures e triggers",
            "Migração de usuários e permissões",
            "Otimização de queries pós-migração",
            "Validação de integridade referencial",
            "Testes de performance",
            "Documentação de mudanças estruturais"
          ],
          tags: ["migration", "database", "mysql", "postgresql", "sql-server"]
        },
        {
          id: "9.1.6",
          name: "Migração de Aplicações Cloud-Native",
          description: "Migração de aplicações para arquiteturas cloud-native e containers",
          price: 750.00,
          functionality: "Modernização de aplicações para containers, microserviços e cloud-native",
          applicability: "Empresas modernizando aplicações legadas para cloud ou containers",
          example: "Containerização de aplicações, migração para Kubernetes, microserviços",
          characteristics: [
            "Containerização de aplicações legadas",
            "Migração para arquitetura de microserviços",
            "Implementação de CI/CD pipelines",
            "Configuração de Kubernetes/OpenShift",
            "Migração de dados para cloud databases",
            "Implementação de service mesh",
            "Monitoramento e observabilidade",
            "Estratégias de deployment blue-green"
          ],
          tags: ["migration", "cloud-native", "containers", "kubernetes", "microservices"]
        }
      ]
    },
    {
      id: "9.2",
      name: "Implementação de Soluções",
      description: "Desenho de arquitetura e implementação completa de soluções técnicas customizadas",
      items: [
        {
          id: "9.2.1",
          name: "Desenho de Arquitetura de Solução",
          description: "Análise, desenho e documentação de arquitetura técnica completa",
          price: 2500.00,
          functionality: "Criação de arquitetura técnica detalhada baseada em requisitos de negócio",
          applicability: "Empresas que precisam de solução técnica customizada e bem arquitetada",
          example: "Arquitetura de nuvem híbrida, microserviços, infraestrutura de alta disponibilidade",
          characteristics: [
            "Análise de requisitos funcionais e não-funcionais",
            "Desenho de arquitetura em múltiplas camadas",
            "Documentação técnica detalhada",
            "Diagramas de arquitetura (Logical, Physical, Network)",
            "Análise de performance e escalabilidade",
            "Definição de tecnologias e stacks",
            "Estratégias de segurança e compliance",
            "Estimativas de custos e ROI"
          ],
          tags: ["architecture", "design", "solution", "documentation", "planning"]
        },
        {
          id: "9.2.2",
          name: "Implementação de Infraestrutura Virtualizada",
          description: "Deploy e configuração de ambiente virtualizado completo",
          price: 3200.00,
          functionality: "Implementação de infraestrutura virtualizada com alta disponibilidade",
          applicability: "Empresas implementando datacenter virtualizado ou cloud privada",
          example: "Cluster VMware vSphere, Hyper-V, Proxmox com HA e DR",
          characteristics: [
            "Instalação e configuração de hypervisors",
            "Configuração de clusters de alta disponibilidade",
            "Implementação de storage compartilhado",
            "Configuração de redes virtuais (VLANs, VXLANs)",
            "Implementação de backup e DR",
            "Configuração de monitoramento",
            "Políticas de resource management",
            "Documentação e transferência de conhecimento"
          ],
          tags: ["virtualization", "vmware", "hyper-v", "cluster", "implementation"]
        },
        {
          id: "9.2.3",
          name: "Implementação de Solução de Banco de Dados",
          description: "Deploy e configuração de ambiente de banco de dados enterprise",
          price: 2800.00,
          functionality: "Implementação de infraestrutura de banco de dados otimizada e resiliente",
          applicability: "Empresas que necessitam de ambiente de banco robusto e performático",
          example: "Cluster MySQL/PostgreSQL, SQL Server AlwaysOn, Oracle RAC",
          characteristics: [
            "Instalação e configuração de SGBD",
            "Implementação de clusters e replicação",
            "Configuração de alta disponibilidade",
            "Otimização de performance",
            "Configuração de backup automático",
            "Implementação de monitoramento",
            "Políticas de segurança e acesso",
            "Tuning de queries e índices"
          ],
          tags: ["database", "mysql", "postgresql", "sql-server", "oracle"]
        },
        {
          id: "9.2.4",
          name: "Implementação de Solução de Monitoramento",
          description: "Deploy de solução completa de monitoramento e observabilidade",
          price: 2200.00,
          functionality: "Implementação de stack completo de monitoramento, logs e métricas",
          applicability: "Empresas que precisam de visibilidade completa da infraestrutura",
          example: "Stack ELK, Prometheus+Grafana, Zabbix, PRTG ou soluções híbridas",
          characteristics: [
            "Instalação de ferramentas de monitoramento",
            "Configuração de coleta de métricas",
            "Implementação de agregação de logs",
            "Criação de dashboards customizados",
            "Configuração de alertas inteligentes",
            "Implementação de APM (Application Performance Monitoring)",
            "Integração com ferramentas existentes",
            "Treinamento da equipe"
          ],
          tags: ["monitoring", "observability", "prometheus", "grafana", "elk"]
        },
        {
          id: "9.2.5",
          name: "Implementação de Solução de Segurança",
          description: "Deploy de solução completa de segurança da informação",
          price: 3500.00,
          functionality: "Implementação de arquitetura de segurança em camadas (Defense in Depth)",
          applicability: "Empresas que precisam implementar segurança robusta e compliance",
          example: "Firewall Next-Gen, IDS/IPS, SIEM, EDR, DLP, Multi-Factor Authentication",
          characteristics: [
            "Implementação de firewall de nova geração",
            "Configuração de sistemas de detecção",
            "Deploy de SIEM e correlação de eventos",
            "Implementação de EDR/XDR",
            "Configuração de DLP e controle de dados",
            "Implementação de Multi-Factor Authentication",
            "Políticas de segurança e compliance",
            "Testes de penetração e validação"
          ],
          tags: ["security", "firewall", "siem", "edr", "compliance"]
        },
        {
          id: "9.2.6",
          name: "Implementação de Solução Cloud Híbrida",
          description: "Deploy de arquitetura cloud híbrida integrada",
          price: 4200.00,
          functionality: "Implementação de solução que integra cloud pública, privada e on-premises",
          applicability: "Empresas que precisam de flexibilidade entre cloud e infraestrutura local",
          example: "Integração AWS/Azure com datacenter local, multi-cloud, cloud bursting",
          characteristics: [
            "Configuração de conectividade híbrida",
            "Implementação de identity federation",
            "Configuração de data synchronization",
            "Implementação de workload management",
            "Configuração de disaster recovery cross-cloud",
            "Otimização de custos multi-cloud",
            "Governança e compliance híbrida",
            "Monitoramento unificado"
          ],
          tags: ["hybrid-cloud", "multi-cloud", "aws", "azure", "integration"]
        }
      ]
    },
    {
      id: "9.3",
      name: "Hands Services",
      description: "Serviços técnicos especializados executados por profissionais certificados",
      items: [
        // Professional Services - Servidor Dedicado
        {
          id: "9.3.1",
          name: "Professional Services - Servidor Dedicado (padrão) - SPO",
          description: "Configuração e implementação de servidor dedicado padrão no datacenter SPO",
          price: 425.00,
          functionality: "Setup completo de servidor dedicado com configurações padrão e alta disponibilidade",
          applicability: "Empresas que necessitam de servidor dedicado com configuração profissional",
          example: "Setup inicial de servidor web, aplicação ou banco de dados",
          characteristics: [
            "DC: São Paulo (SPO)",
            "Taxa única de implementação",
            "Configuração com Alta Disponibilidade (HA)",
            "Setup de sistema operacional",
            "Configuração básica de rede",
            "Instalação de ferramentas essenciais",
            "Documentação de configuração",
            "Testes de conectividade e performance"
          ],
          tags: ["dedicated-server", "spo", "setup", "high-availability", "professional"]
        },
        {
          id: "9.3.2",
          name: "Professional Services - Servidor Dedicado (padrão) - USA",
          description: "Configuração e implementação de servidor dedicado padrão no datacenter USA",
          price: 425.00,
          functionality: "Setup completo de servidor dedicado com configurações padrão e alta disponibilidade",
          applicability: "Empresas que necessitam de servidor dedicado nos EUA com configuração profissional",
          example: "Setup de servidor para mercado americano, aplicações globais",
          characteristics: [
            "DC: Estados Unidos (USA)",
            "Taxa única de implementação",
            "Configuração com Alta Disponibilidade (HA)",
            "Setup otimizado para latência US",
            "Configuração de timezone e locale",
            "Compliance com regulamentações US",
            "Documentação técnica",
            "Testes de performance internacional"
          ],
          tags: ["dedicated-server", "usa", "setup", "international", "compliance"]
        },
        {
          id: "9.3.3",
          name: "Professional Services - Servidor Dedicado - JPA",
          description: "Configuração personalizada de servidor dedicado no datacenter JPA",
          price: 600.00,
          functionality: "Setup customizado de servidor dedicado com configurações específicas do cliente",
          applicability: "Projetos personalizados que necessitam configuração específica",
          example: "Servidores com configuração especial, compliance específico",
          characteristics: [
            "DC: João Pessoa (JPA)",
            "Taxa única de implementação",
            "Verificação caso a caso",
            "Configuração totalmente personalizada",
            "Valores podem variar conforme projeto",
            "Análise prévia de requisitos",
            "SLA personalizado",
            "Suporte técnico especializado"
          ],
          tags: ["dedicated-server", "jpa", "custom", "personalized", "case-by-case"]
        },
        {
          id: "9.3.4",
          name: "Professional Services - Ambientes com HA Intermediária - JPA",
          description: "Implementação de ambiente com alta disponibilidade nível intermediário",
          price: 700.00,
          functionality: "Configuração de ambiente com redundância e failover automático intermediário",
          applicability: "Aplicações que necessitam de disponibilidade elevada mas não crítica",
          example: "Cluster de aplicação web, banco com replica, balanceamento de carga",
          characteristics: [
            "DC: João Pessoa (JPA)",
            "Taxa única de implementação",
            "Alta disponibilidade avançada",
            "Configuração de cluster ativo-passivo",
            "Failover automático",
            "Monitoramento proativo",
            "Backup automático",
            "SLA de 99.5% de uptime"
          ],
          tags: ["high-availability", "intermediate", "cluster", "failover", "jpa"]
        },
        {
          id: "9.3.5",
          name: "Professional Services - Ambientes com HA Premium - JPA",
          description: "Implementação de ambiente com alta disponibilidade nível premium",
          price: 1150.00,
          functionality: "Configuração de ambiente com máxima redundância e zero downtime",
          applicability: "Aplicações críticas que não podem ter indisponibilidade",
          example: "Cluster ativo-ativo, banco com sincronização síncrona, múltiplas zonas",
          characteristics: [
            "DC: João Pessoa (JPA)",
            "Taxa única de implementação",
            "Alta disponibilidade premium",
            "Configuração ativo-ativo",
            "Zero downtime deployment",
            "Replicação síncrona",
            "Disaster recovery automático",
            "SLA de 99.9% de uptime"
          ],
          tags: ["high-availability", "premium", "zero-downtime", "active-active", "mission-critical"]
        },
        {
          id: "9.3.6",
          name: "Professional Services - Firewall (físico) - JPA/SPO",
          description: "Implementação de firewall físico dedicado ao ambiente de rede",
          price: 800.00,
          functionality: "Instalação e configuração de appliance de firewall físico",
          applicability: "Ambientes que necessitam de proteção de rede dedicada e performance máxima",
          example: "Firewall Fortinet, Palo Alto, pfSense para segmentação de rede",
          characteristics: [
            "DC: João Pessoa (JPA) / São Paulo (SPO)",
            "Taxa única de implementação",
            "Equipamento adicional dedicado",
            "Configuração de regras personalizadas",
            "Segmentação de rede avançada",
            "Monitoramento de tráfego",
            "Logs e relatórios de segurança",
            "Integração com SIEM"
          ],
          tags: ["firewall", "physical", "network-security", "dedicated", "appliance"]
        },

        // Serviços de Reboot e Hands
        {
          id: "9.3.7",
          name: "Professional Services - Reboot de Servidor",
          description: "Execução manual de reboot de servidor pela equipe técnica",
          price: 60.00,
          functionality: "Reboot manual executado por técnico especializado com verificações",
          applicability: "Servidores que necessitam reinicialização manual ou procedimento específico",
          example: "Reboot coordenado, aplicação de patches, manutenção programada",
          characteristics: [
            "Disponível em todos os DCs",
            "Taxa única por execução",
            "Cobrança por reboot manual",
            "Verificação pré e pós reboot",
            "Monitoramento durante processo",
            "Relatório de execução",
            "Coordenação com cliente",
            "Suporte em caso de problemas"
          ],
          tags: ["reboot", "manual", "maintenance", "coordination", "technical"]
        },
        {
          id: "9.3.8",
          name: "Smart Hands",
          description: "Serviço técnico presencial no datacenter com expertise avançada",
          price: 400.00,
          functionality: "Técnico presencial no datacenter para procedimentos complexos e troubleshooting",
          applicability: "Situações que exigem presença física e conhecimento técnico avançado",
          example: "Troca de hardware, troubleshooting complexo, instalação de equipamentos",
          characteristics: [
            "Serviço por hora (mínimo 1h)",
            "Técnico presencial especializado",
            "Procedimentos complexos",
            "Aceitação formal do cliente necessária",
            "Diagnóstico e resolução no local",
            "Relatório detalhado de atividades",
            "Coordenação em tempo real",
            "Suporte a equipamentos diversos"
          ],
          tags: ["smart-hands", "on-site", "technical", "hardware", "troubleshooting"]
        },
        {
          id: "9.3.9",
          name: "Remote Hands",
          description: "Execução remota de procedimentos técnicos baseados em instruções do cliente",
          price: 300.00,
          functionality: "Execução de scripts e procedimentos técnicos remotamente conforme orientação",
          applicability: "Procedimentos que podem ser executados remotamente com instruções claras",
          example: "Execução de scripts, comandos específicos, verificações de configuração",
          characteristics: [
            "Serviço por hora (mínimo 1h)",
            "Execução baseada em instruções/scripts",
            "Procedimentos remotos controlados",
            "Seguimento rigoroso de procedimentos",
            "Log completo de atividades",
            "Relatório de execução",
            "Comunicação constante",
            "Validação de resultados"
          ],
          tags: ["remote-hands", "scripts", "procedures", "remote", "execution"]
        },
        {
          id: "9.3.10",
          name: "Expertise Hands",
          description: "Serviço especializado para correções e configurações avançadas sob demanda",
          price: 600.00,
          functionality: "Consultoria técnica especializada para resolução de problemas complexos",
          applicability: "Problemas complexos que exigem alta expertise técnica",
          example: "Troubleshooting avançado, otimização de performance, configurações complexas",
          characteristics: [
            "Serviço por hora (mínimo 1h)",
            "Especialistas seniores",
            "Correções e configurações avançadas",
            "Análise profunda de problemas",
            "Soluções customizadas",
            "Transferência de conhecimento",
            "Documentação técnica",
            "Follow-up pós-resolução"
          ],
          tags: ["expertise", "advanced", "troubleshooting", "senior", "complex"]
        },

        // Serviços de Sistema Operacional
        {
          id: "9.3.11",
          name: "Sistema Operacional - Reinstalação de OS",
          description: "Reinstalação completa do sistema operacional",
          price: 250.00,
          functionality: "Reinstalação limpa do sistema operacional com configurações básicas",
          applicability: "Servidores que necessitam reinstalação ou clientes sem GA",
          example: "Reinstalação Windows Server, Linux, recuperação de sistema corrompido",
          characteristics: [
            "Válido para clientes sem GA",
            "Aplicável quando não atende critérios GA",
            "Instalação limpa do OS",
            "Configuração básica inicial",
            "Instalação de drivers essenciais",
            "Configuração de rede básica",
            "Backup opcional dos dados",
            "Verificação pós-instalação"
          ],
          tags: ["os-reinstall", "clean-install", "operating-system", "recovery", "fresh"]
        },
        {
          id: "9.3.12",
          name: "Sistema Operacional - Redeploy",
          description: "Reinstalação completa do ambiente de servidor",
          price: 150.00,
          functionality: "Reconstrução completa do ambiente com configurações do zero",
          applicability: "Necessidade de ambiente totalmente limpo e reconfigurado",
          example: "Redeploy para mudança de arquitetura, limpeza completa",
          characteristics: [
            "Reinstalação completa do ambiente",
            "Configuração desde o início",
            "Limpeza total de dados anteriores",
            "Setup de ambiente padrão",
            "Configuração de serviços básicos",
            "Otimização inicial",
            "Documentação de configuração",
            "Testes de funcionalidade"
          ],
          tags: ["redeploy", "complete-rebuild", "fresh-environment", "clean-slate", "reconfiguration"]
        },
        {
          id: "9.3.13",
          name: "Sistema Operacional - Atualização de SO",
          description: "Atualização do sistema operacional atual mantendo configurações",
          price: 175.00,
          functionality: "Update do sistema operacional preservando configurações e dados",
          applicability: "Servidores que necessitam atualização de versão do OS",
          example: "Upgrade Ubuntu 20.04 para 22.04, Windows Server 2019 para 2022",
          characteristics: [
            "Atualização in-place do sistema",
            "Preservação de configurações",
            "Backup automático antes da atualização",
            "Verificação de compatibilidade",
            "Teste de aplicações pós-upgrade",
            "Rollback em caso de problemas",
            "Documentação de mudanças",
            "Suporte pós-atualização"
          ],
          tags: ["os-update", "upgrade", "in-place", "version-update", "compatibility"]
        },
        {
          id: "9.3.14",
          name: "Sistema Operacional - Mudança de SO",
          description: "Troca completa do sistema operacional para diferente distribuição/família",
          price: 275.00,
          functionality: "Migração completa para sistema operacional de família diferente",
          applicability: "Necessidade de mudança de Windows para Linux ou vice-versa",
          example: "Migração Windows para Linux, CentOS para Ubuntu, RHEL para SUSE",
          characteristics: [
            "Troca completa do sistema operacional",
            "Migração entre famílias diferentes",
            "Backup completo dos dados",
            "Análise de compatibilidade de aplicações",
            "Reconfiguração de serviços",
            "Migração de configurações compatíveis",
            "Testes extensivos",
            "Documentação de mudanças"
          ],
          tags: ["os-migration", "platform-change", "cross-platform", "system-migration", "complete-change"]
        }
      ]
    }
  ]
};
