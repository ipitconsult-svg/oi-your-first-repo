import { Category } from "@/types/catalog";

export const softwareLicensesCategory: Category = {
  id: "8",
  name: "LICENÇAS DE SOFTWARE",
  description: "Licenciamento de software corporativo, sistemas operacionais, virtualização e aplicativos",
  subcategories: [
    {
      id: "8.1",
      name: "Licenças",
      description: "Licenças de software para painéis de controle, proteção web e aplicações",
      items: [
        // 8.1.1 - cPanel
        {
          id: "8.1.1.1",
          name: "Licença cPanel Admin Cloud - 5 contas",
          description: "Licença cPanel Admin Cloud para VPS/Cloud HostDime com 5 contas",
          price: 223.99,
          functionality: "Painel de controle para hospedagem compartilhada e gerenciamento de contas",
          applicability: "Provedores de hospedagem compartilhada de pequeno porte",
          example: "Hospedagem para pequenas empresas, sites pessoais, blogs",
          characteristics: [
            "Tipo: Cloud",
            "Pack: 5 contas",
            "Compatível com VPS/Cloud HostDime",
            "Interface gráfica intuitiva",
            "Gerenciamento de domínios e emails"
          ],
          tags: ["cpanel", "cloud", "hosting", "web-panel", "shared-hosting"]
        },
        {
          id: "8.1.1.2",
          name: "Licença cPanel Premier Cloud - até 100 contas",
          description: "Licença cPanel Premier Cloud para VPS/Cloud HostDime com até 100 contas",
          price: 489.99,
          functionality: "Painel de controle para hospedagem compartilhada de médio porte",
          applicability: "Provedores de hospedagem com volume médio de clientes",
          example: "Hospedagem para pequenas e médias empresas, revendedores de hospedagem",
          characteristics: [
            "Tipo: Cloud",
            "Pack: 100 contas",
            "Conta adicional: R$3,22",
            "Recursos avançados de gerenciamento",
            "Compatível com VPS/Cloud HostDime"
          ],
          tags: ["cpanel", "cloud", "hosting", "web-panel", "medium-scale"]
        },
        {
          id: "8.1.1.3",
          name: "Licença cPanel Premier Metal + de uma conta",
          description: "Licença cPanel Premier Metal para Servidor Dedicado com múltiplas contas",
          price: 489.99,
          functionality: "Painel de controle para hospedagem em servidores dedicados",
          applicability: "Provedores com servidores dedicados que necessitam gerenciar múltiplas contas",
          example: "Hospedagem dedicada para empresas médias e grandes",
          characteristics: [
            "Tipo: Dedicado",
            "Pack: 100 contas",
            "Conta adicional: R$3,22",
            "Performance superior em metal",
            "Recursos enterprise"
          ],
          tags: ["cpanel", "dedicated", "hosting", "web-panel", "bare-metal"]
        },
        {
          id: "8.1.1.4",
          name: "Licença cPanel Pro Cloud - 30 contas",
          description: "Licença cPanel Pro Cloud para VPS/Cloud HostDime com 30 contas",
          price: 335.99,
          functionality: "Painel de controle para hospedagem compartilhada de pequeno a médio porte",
          applicability: "Provedores de hospedagem em crescimento",
          example: "Hospedagem para empresas em expansão, múltiplos sites corporativos",
          characteristics: [
            "Tipo: Cloud",
            "Pack: 30 contas",
            "Conta adicional: R$3,22",
            "Recursos profissionais",
            "Escalabilidade cloud"
          ],
          tags: ["cpanel", "cloud", "hosting", "web-panel", "professional"]
        },
        {
          id: "8.1.1.5",
          name: "Licença cPanel Solo Cloud - 1 conta",
          description: "Licença cPanel Solo Cloud para VPS/Cloud HostDime com 1 conta",
          price: 125.99,
          functionality: "Painel de controle para hospedagem individual ou desenvolvimento",
          applicability: "Desenvolvedores e pequenas empresas com um único site",
          example: "Site corporativo único, ambiente de desenvolvimento, blog pessoal",
          characteristics: [
            "Tipo: Cloud",
            "Pack: 1 conta",
            "Ideal para uso único",
            "Custo-benefício para projetos pequenos",
            "Compatível com VPS/Cloud"
          ],
          tags: ["cpanel", "cloud", "hosting", "web-panel", "single-site"]
        },
        {
          id: "8.1.1.6",
          name: "Licença cPanel Solo Metal - 1 conta",
          description: "Licença cPanel Solo Metal para Servidor Dedicado com 1 conta",
          price: 251.99,
          functionality: "Painel de controle para hospedagem dedicada individual",
          applicability: "Empresas que necessitam de servidor dedicado com gestão simplificada",
          example: "Aplicação corporativa crítica, site de alto tráfego",
          characteristics: [
            "Tipo: Dedicado",
            "Pack: 1 conta",
            "Conta adicional: R$3,22",
            "Performance máxima em metal",
            "Recursos dedicados exclusivos"
          ],
          tags: ["cpanel", "dedicated", "hosting", "web-panel", "high-performance"]
        },

        // 8.1.2 - Plesk
        {
          id: "8.1.2.1",
          name: "Licença Plesk Web Admin (Cloud e Bare Metal) - 10 contas",
          description: "Licença Plesk Web Admin para Cloud ou Bare Metal com 10 contas",
          price: 80.00,
          functionality: "Painel de controle Plesk para gerenciamento básico de hospedagem",
          applicability: "Provedores que preferem interface Plesk para hospedagem básica",
          example: "Hospedagem Windows e Linux, sites corporativos pequenos",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: 10 contas",
            "Compatível com Windows e Linux",
            "Interface moderna e intuitiva",
            "Suporte a múltiplas tecnologias"
          ],
          tags: ["plesk", "web-admin", "hosting", "web-panel", "cross-platform"]
        },
        {
          id: "8.1.2.2",
          name: "Licença Plesk Web Host (Bare Metal) - Ilimitado",
          description: "Licença Plesk Web Host para Bare Metal com contas ilimitadas",
          price: 349.00,
          functionality: "Painel de controle Plesk para hospedagem em larga escala em servidores físicos",
          applicability: "Grandes provedores de hospedagem com servidores dedicados",
          example: "Hospedagem empresarial em larga escala, data centers",
          characteristics: [
            "Tipo: Dedicado",
            "Pack: Ilimitado",
            "Aplicável somente em servidores Bare Metal",
            "Recursos enterprise completos",
            "Performance otimizada para metal"
          ],
          tags: ["plesk", "web-host", "bare-metal", "unlimited", "enterprise"]
        },
        {
          id: "8.1.2.3",
          name: "Licença Plesk Web Host (Cloud) - Ilimitado",
          description: "Licença Plesk Web Host para Cloud com contas ilimitadas",
          price: 210.00,
          functionality: "Painel de controle Plesk para hospedagem cloud em larga escala",
          applicability: "Provedores cloud que necessitam de gestão ilimitada",
          example: "Hospedagem cloud empresarial, ambientes virtualizados",
          characteristics: [
            "Tipo: Cloud",
            "Pack: Ilimitado",
            "Aplicável somente em ambientes Cloud",
            "Escalabilidade cloud nativa",
            "Custo otimizado para virtualização"
          ],
          tags: ["plesk", "web-host", "cloud", "unlimited", "scalable"]
        },
        {
          id: "8.1.2.4",
          name: "Licença Plesk Web Pro (Cloud e Bare Metal) - 30 contas",
          description: "Licença Plesk Web Pro para Cloud ou Bare Metal com 30 contas",
          price: 150.00,
          functionality: "Painel de controle Plesk profissional para hospedagem média",
          applicability: "Provedores de médio porte que necessitam recursos profissionais",
          example: "Hospedagem corporativa média, múltiplos clientes empresariais",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: 30 contas",
            "Recursos profissionais avançados",
            "Compatível com ambos ambientes",
            "Gerenciamento otimizado"
          ],
          tags: ["plesk", "web-pro", "hosting", "professional", "medium-scale"]
        },

        // 8.1.3 - Imunify360
        {
          id: "8.1.3.1",
          name: "Licença Imunify - 1 usuário",
          description: "Licença Imunify360 para proteção web de 1 conta",
          price: 69.99,
          functionality: "Proteção avançada contra malware, ataques e vulnerabilidades web",
          applicability: "Sites individuais que necessitam proteção enterprise",
          example: "E-commerce individual, blog profissional, site corporativo único",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: Proteção Web para 1 conta",
            "Firewall avançado com IA",
            "Detecção de malware em tempo real",
            "Proteção contra ataques DDoS"
          ],
          tags: ["imunify360", "security", "malware-protection", "firewall", "single-user"]
        },
        {
          id: "8.1.3.2",
          name: "Licença Imunify - 250 usuários",
          description: "Licença Imunify360 para proteção web de 250 contas",
          price: 209.99,
          functionality: "Proteção em larga escala contra ameaças web para múltiplos sites",
          applicability: "Grandes provedores de hospedagem ou empresas com muitos sites",
          example: "Provedores de hospedagem compartilhada, grupos empresariais",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: Proteção Web para 250 contas",
            "Proteção centralizada",
            "Relatórios detalhados",
            "Gerenciamento em massa"
          ],
          tags: ["imunify360", "security", "large-scale", "enterprise", "multi-site"]
        },
        {
          id: "8.1.3.3",
          name: "Licença Imunify - 30 usuários",
          description: "Licença Imunify360 para proteção web de 30 contas",
          price: 139.99,
          functionality: "Proteção para múltiplos sites com gerenciamento centralizado",
          applicability: "Empresas médias com múltiplos sites ou pequenos provedores",
          example: "Empresas com filiais, agências digitais, revendedores de hospedagem",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: Proteção Web para 30 contas",
            "Painel centralizado",
            "Alertas em tempo real",
            "Proteção proativa"
          ],
          tags: ["imunify360", "security", "medium-scale", "centralized", "proactive"]
        },
        {
          id: "8.1.3.4",
          name: "Licença Imunify - Ilimitado",
          description: "Licença Imunify360 para proteção web ilimitada",
          price: 279.99,
          functionality: "Proteção completa e ilimitada para todos os sites do servidor",
          applicability: "Grandes data centers e provedores enterprise",
          example: "Data centers, grandes provedores de hospedagem, ambientes críticos",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: Proteção Web ilimitada",
            "Recursos enterprise completos",
            "Suporte prioritário",
            "Proteção máxima"
          ],
          tags: ["imunify360", "security", "unlimited", "enterprise", "datacenter"]
        },

        // 8.1.4 - CloudLinux & KernelCare
        {
          id: "8.1.4.1",
          name: "Licença CloudLinux",
          description: "Licença CloudLinux para isolamento e estabilidade em hospedagem compartilhada",
          price: 138.60,
          functionality: "Sistema operacional baseado em Linux para isolamento de recursos em hospedagem",
          applicability: "Provedores de hospedagem compartilhada que necessitam isolamento",
          example: "Hospedagem compartilhada com isolamento, servidores multi-tenant",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: 1 licença",
            "Isolamento de recursos LVE",
            "Estabilidade para hospedagem compartilhada",
            "Proteção contra one bad neighbor"
          ],
          tags: ["cloudlinux", "isolation", "shared-hosting", "stability", "lve"]
        },
        {
          id: "8.1.4.2",
          name: "Licença KernelCare",
          description: "Licença KernelCare para atualizações de kernel sem reinicialização",
          price: 30.00,
          functionality: "Serviço de patching automático do kernel Linux sem necessidade de reboot",
          applicability: "Servidores que necessitam alta disponibilidade e atualizações contínuas",
          example: "Servidores de produção 24/7, ambientes críticos, SaaS",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: Por IP",
            "Patches automáticos de kernel",
            "Zero downtime para atualizações",
            "Suporte a múltiplas distribuições"
          ],
          tags: ["kernelcare", "patching", "uptime", "security", "linux"]
        },

        // 8.1.5 - LiteSpeed
        {
          id: "8.1.5.1",
          name: "Licença LiteSpeed Web Server para 1 CPU",
          description: "Licença LiteSpeed Web Server para servidor com 1 CPU",
          price: 266.00,
          functionality: "Servidor web de alta performance como alternativa ao Apache/Nginx",
          applicability: "Sites que necessitam alta performance e baixo uso de recursos",
          example: "E-commerce de alto tráfego, sites WordPress otimizados",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: LiteSpeed 1 CPU",
            "Performance superior ao Apache",
            "Compatibilidade com .htaccess",
            "Cache nativo LSCache"
          ],
          tags: ["litespeed", "web-server", "performance", "apache-replacement", "cache"]
        },
        {
          id: "8.1.5.2",
          name: "Licença LiteSpeed Web Server para 2 CPU",
          description: "Licença LiteSpeed Web Server para servidor com 2 CPUs",
          price: 384.00,
          functionality: "Servidor web de alta performance para servidores dual-CPU",
          applicability: "Ambientes de médio porte com maior demanda de processamento",
          example: "Múltiplos sites de alto tráfego, aplicações web complexas",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: LiteSpeed 2 CPU",
            "Suporte a múltiplos cores",
            "Escalabilidade melhorada",
            "HTTP/3 nativo"
          ],
          tags: ["litespeed", "web-server", "dual-cpu", "scalable", "http3"]
        },
        {
          id: "8.1.5.3",
          name: "Licença LiteSpeed Web Server para 4 CPU",
          description: "Licença LiteSpeed Web Server para servidor com 4 CPUs",
          price: 546.00,
          functionality: "Servidor web enterprise para ambientes de alta demanda",
          applicability: "Grandes sites e aplicações que necessitam máxima performance",
          example: "Portais corporativos, aplicações SaaS, sites de mídia",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: LiteSpeed 4 CPU",
            "Performance enterprise",
            "Suporte a alta concorrência",
            "Anti-DDoS integrado"
          ],
          tags: ["litespeed", "web-server", "enterprise", "high-performance", "anti-ddos"]
        },
        {
          id: "8.1.5.4",
          name: "Licença LiteSpeed Web Server para 8 CPU",
          description: "Licença LiteSpeed Web Server para servidor com 8 CPUs",
          price: 1030.40,
          functionality: "Servidor web para ambientes de máxima performance e escala",
          applicability: "Data centers e aplicações de missão crítica",
          example: "Grandes e-commerces, aplicações bancárias, streaming de mídia",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: LiteSpeed 8 CPU",
            "Máxima performance disponível",
            "Suporte enterprise completo",
            "Recursos avançados de balanceamento"
          ],
          tags: ["litespeed", "web-server", "maximum-performance", "mission-critical", "load-balancing"]
        },

        // 8.1.6 - MagicSpam
        {
          id: "8.1.6.1",
          name: "Licença MagicSpam",
          description: "Licença MagicSpam para proteção anti-spam em servidores de email",
          price: 96.00,
          functionality: "Proteção avançada contra spam para servidores de email",
          applicability: "Servidores que hospedam serviços de email corporativo",
          example: "Servidores cPanel, Plesk e Zimbra com serviços de email",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: Por Cloud/Servidor",
            "Compatível com cPanel, Plesk e Zimbra",
            "Filtros avançados de spam",
            "Proteção em tempo real"
          ],
          tags: ["magicspam", "anti-spam", "email-protection", "cpanel", "plesk"]
        },

        // 8.1.7 - Softaculous
        {
          id: "8.1.7.1",
          name: "Licença Softaculous",
          description: "Licença Softaculous para instalação automática de aplicações web",
          price: 35.00,
          functionality: "Instalador automático de mais de 400 aplicações web",
          applicability: "Provedores de hospedagem que oferecem instalação fácil de CMS",
          example: "Instalação automática de WordPress, Joomla, Drupal, e-commerce",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: Por Cloud/Servidor (cPanel)",
            "Mais de 400 aplicações disponíveis",
            "Instalação com um clique",
            "Atualizações automáticas"
          ],
          tags: ["softaculous", "auto-installer", "cms", "wordpress", "cpanel"]
        },

        // 8.1.8 - WHMCS
        {
          id: "8.1.8.1",
          name: "Licença WHMCS Starter para até 250 clientes",
          description: "Licença WHMCS Starter para gerenciamento de até 250 clientes",
          price: 70.00,
          functionality: "Sistema de faturamento e gerenciamento para provedores de hospedagem",
          applicability: "Pequenos e médios provedores de hospedagem",
          example: "Faturamento automático, gestão de clientes, integração com painéis",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: WHMCS para até 250 clientes",
            "Compatível com cPanel, Plesk, etc",
            "Faturamento automático",
            "Gestão completa de clientes"
          ],
          tags: ["whmcs", "billing", "client-management", "hosting-automation", "invoicing"]
        },

        // 8.1.9 - 360 Monitoring
        {
          id: "8.1.9.1",
          name: "Licença 360 Monitoring para 1 server + 30 Sites",
          description: "Licença 360 Monitoring para monitoramento de 1 servidor e 30 sites",
          price: 29.99,
          functionality: "Monitoramento completo de servidores e websites",
          applicability: "Empresas que necessitam monitoramento básico de infraestrutura",
          example: "Monitoramento de uptime, performance de sites e servidores",
          characteristics: [
            "Tipo: Cloud/Dedicado (Linux ou Windows)",
            "Pack: 1 servidor + 30 sites",
            "Monitoramento 24/7",
            "Alertas em tempo real",
            "Relatórios detalhados"
          ],
          tags: ["monitoring", "uptime", "performance", "alerts", "server-monitoring"]
        },
        {
          id: "8.1.9.2",
          name: "Adicional por Server - 360 Monitoring",
          description: "Licença adicional por servidor para 360 Monitoring",
          price: 7.99,
          functionality: "Servidor adicional para monitoramento na plataforma 360 Monitoring",
          applicability: "Expansão do monitoramento para múltiplos servidores",
          example: "Monitoramento de farm de servidores, infraestrutura distribuída",
          characteristics: [
            "Adicional por servidor",
            "Integração com licença base",
            "Monitoramento independente",
            "Alertas específicos por servidor",
            "Histórico de performance"
          ],
          tags: ["monitoring", "additional-server", "scalable", "infrastructure", "expansion"]
        },
        {
          id: "8.1.9.3",
          name: "Adicional por Site - 360 Monitoring",
          description: "Licença adicional por site para 360 Monitoring",
          price: 1.99,
          functionality: "Site adicional para monitoramento na plataforma 360 Monitoring",
          applicability: "Expansão do monitoramento para múltiplos websites",
          example: "Monitoramento de portfólio de sites, múltiplos domínios",
          characteristics: [
            "Adicional por site",
            "Monitoramento de uptime",
            "Verificação de performance",
            "Alertas específicos por site",
            "Relatórios individuais"
          ],
          tags: ["monitoring", "additional-site", "uptime", "website-monitoring", "performance"]
        }
      ]
    },
    {
      id: "8.2",
      name: "Licenças Microsoft",
      description: "Licenças oficiais Microsoft para Windows Server, SQL Server e serviços",
      items: [
        // 8.2.1 - Windows Server
        {
          id: "8.2.1.1",
          name: "Licença Microsoft Windows Server Data Center 2012/2016/2022",
          description: "Licença Microsoft Windows Server Data Center para 2 cores",
          price: 201.96,
          functionality: "Sistema operacional Windows Server edição Datacenter com recursos completos",
          applicability: "Ambientes enterprise com alta virtualização e recursos avançados",
          example: "Clusters Hyper-V, ambientes de nuvem privada, datacenters corporativos",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: 2 cores",
            "VMs ilimitadas",
            "Recursos de datacenter completos",
            "Suporte a clustering avançado"
          ],
          tags: ["windows-server", "datacenter", "microsoft", "virtualization", "enterprise"]
        },
        {
          id: "8.2.1.2",
          name: "Licença Microsoft Windows Server Standard 2012/2016/2022",
          description: "Licença Microsoft Windows Server Standard para 2 cores",
          price: 29.08,
          functionality: "Sistema operacional Windows Server edição Standard para uso corporativo",
          applicability: "Empresas que necessitam Windows Server com recursos básicos",
          example: "Servidores de aplicação, controladores de domínio, serviços básicos",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: 2 cores",
            "Até 2 VMs por licença",
            "Recursos essenciais incluídos",
            "Compatibilidade total com Active Directory"
          ],
          tags: ["windows-server", "standard", "microsoft", "corporate", "active-directory"]
        },

        // 8.2.2 - SQL Server
        {
          id: "8.2.2.1",
          name: "Licença Microsoft SQL Server Enterprise 2012/2014/2016/2017/2022",
          description: "Licença Microsoft SQL Server Enterprise para 2 cores",
          price: 3644.35,
          functionality: "Sistema de banco de dados enterprise com recursos completos e performance máxima",
          applicability: "Aplicações críticas que necessitam máxima performance e recursos avançados",
          example: "Data warehouses, aplicações financeiras, sistemas ERP enterprise",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: 2 cores",
            "Recursos ilimitados",
            "Always On Availability Groups",
            "Advanced Analytics e Machine Learning"
          ],
          tags: ["sql-server", "enterprise", "database", "mission-critical", "analytics"]
        },
        {
          id: "8.2.2.2",
          name: "Licença Microsoft SQL Server Standard 2012/2014/2016/2017/2022",
          description: "Licença Microsoft SQL Server Standard para 2 cores",
          price: 950.32,
          functionality: "Sistema de banco de dados para aplicações corporativas com recursos essenciais",
          applicability: "Aplicações corporativas que necessitam SQL Server com recursos padrão",
          example: "Sistemas de gestão, aplicações departamentais, intranets corporativas",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: 2 cores",
            "Recursos essenciais de banco",
            "Replicação básica",
            "Ferramentas de desenvolvimento incluídas"
          ],
          tags: ["sql-server", "standard", "database", "corporate", "development"]
        },
        {
          id: "8.2.2.3",
          name: "Licença Microsoft SQL Server Web 2012/2014/2016/2017/2022",
          description: "Licença Microsoft SQL Server Web para 2 cores",
          price: 59.40,
          functionality: "Sistema de banco de dados otimizado para aplicações web",
          applicability: "Aplicações web que necessitam backend de banco de dados SQL Server",
          example: "Sites corporativos, aplicações web internas, portais de conteúdo",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: 2 cores",
            "Otimizado para cargas web",
            "Licenciamento econômico",
            "Recursos básicos de banco"
          ],
          tags: ["sql-server", "web", "database", "web-applications", "cost-effective"]
        },

        // 8.2.3 - RDP/CAL
        {
          id: "8.2.3.1",
          name: "Licença CAL/RDS",
          description: "Licença CAL/RDS para acesso de usuário remoto ao Windows Server",
          price: 30.00,
          functionality: "Licença de acesso cliente para Remote Desktop Services",
          applicability: "Usuários que necessitam acesso remoto a aplicações Windows",
          example: "Trabalho remoto, acesso a aplicações corporativas, terminal services",
          characteristics: [
            "Tipo: Cloud/Dedicado",
            "Pack: por usuário",
            "Acesso remoto ao Windows Server",
            "Suporte a aplicações publicadas",
            "Conformidade legal Microsoft"
          ],
          tags: ["rds", "cal", "remote-access", "terminal-services", "compliance"]
        }
      ]
    }
  ]
};
