import { Category } from "@/types/catalog";

export const monitoringCategory: Category = {
  id: "11",
  name: "MONITORAMENTO",
  description: "Monitoramento proativo, customizado e dedicado para infraestrutura, aplicações e serviços, com foco em segurança, performance e disponibilidade.",
  subcategories: [
    {
      id: "11.1",
      name: "360 Monitoring",
      description: "Solução completa de monitoramento proativo para servidores, sites, bancos de dados e aplicações. Integração com alertas, dashboards e automação. (Relacionado ao item 8.1.9 - Licenças de Software)",
      items: [
        {
          id: "11.1.1",
          name: "360 Monitoring",
          description: "Monitoramento proativo de servidores, sites, bancos de dados e aplicações. Solução SaaS com dashboard intuitivo, alertas automáticos e integração com NOC. Licenciamento via categoria de software (ver 8.1.9).",
          price: 29.99,
          functionality: "Monitoramento de disponibilidade, performance, recursos e segurança de servidores e aplicações. Alertas automáticos por e-mail, Telegram, SMS e painel web.",
          applicability: "Empresas que buscam monitoramento centralizado, automação de alertas e visibilidade total da infraestrutura.",
          example: "Monitoramento de servidores Linux/Windows, sites corporativos, bancos de dados MySQL/PostgreSQL, aplicações web e APIs.",
          characteristics: [
            "Dashboard web intuitivo e responsivo",
            "Alertas automáticos por e-mail, Telegram, SMS",
            "Monitoramento de recursos: CPU, memória, disco, rede",
            "Monitoramento de bancos de dados e aplicações",
            "Histórico de métricas e relatórios detalhados",
            "Integração com NOC HostDime",
            "Automação de respostas e escalonamento",
            "API para integrações customizadas",
            "Segurança e conformidade LGPD",
            "Solução SaaS, sem necessidade de instalação local"
          ],
          tags: ["monitoring", "360-monitoring", "proactive", "dashboard", "alerting", "noc", "saas"]
        }
      ]
    },
    {
      id: "11.2",
      name: "Enterprise Monitoring",
      description: "Monitoramento customizado e dedicado para ambientes empresariais, virtualizados e físicos, com alarmes, dashboards e resposta técnica.",
      items: [
        {
          id: "11.2.1",
          name: "Monitoramento Customizado (até 5 dispositivos)",
          description: "Monitoramento dedicado para até 5 dispositivos, entrega via dashboard com credencial, alerta NOC via Telegram.",
          price: 300.00,
          functionality: "Monitoramento de servidores, VMs, storages ou dispositivos de rede com alertas automáticos e dashboard dedicado.",
          applicability: "Empresas que necessitam monitoramento dedicado para poucos dispositivos críticos.",
          example: "Monitoramento de servidores web, banco de dados, firewall, storage, switches.",
          characteristics: [
            "Até 5 dispositivos monitorados",
            "Dashboard dedicado com credencial",
            "Alertas automáticos para NOC via Telegram",
            "Métricas de disponibilidade, performance e segurança",
            "Relatórios mensais de saúde",
            "Configuração customizada por dispositivo",
            "Suporte técnico especializado",
            "Escalonamento de incidentes",
            "Retenção de histórico de métricas"
          ],
          tags: ["monitoring", "custom", "dashboard", "noc", "alerting", "dedicated"]
        },
        {
          id: "11.2.2",
          name: "Monitoramento Customizado (acima de 5 dispositivos)",
          description: "Monitoramento dedicado para ambientes com mais de 5 dispositivos. Dispositivos adicionais a R$20,00/mês cada. Alarmes e resposta opcional por telefone ou SMS.",
          price: 20.00,
          functionality: "Monitoramento escalável para ambientes empresariais, com alarmes customizados e resposta técnica opcional.",
          applicability: "Empresas com ambientes complexos, múltiplos servidores, storages, redes e aplicações.",
          example: "Monitoramento de datacenter, ambientes virtualizados, clusters, múltiplos storages.",
          characteristics: [
            "Dispositivos adicionais a R$20,00/mês",
            "Alarmes customizados por dispositivo",
            "Resposta técnica opcional por telefone ou SMS",
            "Dashboard centralizado",
            "Alertas multi-canal",
            "Configuração granular de métricas",
            "Relatórios detalhados de performance",
            "Suporte técnico especializado",
            "Escalonamento de incidentes",
            "Retenção de histórico de métricas"
          ],
          tags: ["monitoring", "custom", "enterprise", "scalable", "alerting", "dedicated"]
        },
        {
          id: "11.2.3",
          name: "Monitoramento DCV/Onapp/VHM",
          description: "Monitoramento dedicado por VM em ambientes DCV, Onapp ou VHM. Dash com login, métricas de disco/CPU/memória, alertas ilimitados por e-mail/Telegram.",
          price: 40.00,
          functionality: "Monitoramento detalhado de VMs em ambientes virtualizados, com métricas completas e alertas ilimitados.",
          applicability: "Empresas que utilizam ambientes DCV, Onapp ou VHM para virtualização de servidores.",
          example: "Monitoramento de VMs Linux/Windows, clusters virtualizados, ambientes multi-tenant.",
          characteristics: [
            "Monitoramento por VM a R$40,00/mês",
            "Dashboard com login individual",
            "Métricas de disco, CPU, memória",
            "Alertas ilimitados por e-mail/Telegram",
            "Relatórios de performance por VM",
            "Configuração customizada por ambiente",
            "Suporte técnico especializado",
            "Retenção de histórico de métricas",
            "Escalonamento de incidentes",
            "Integração com sistemas de gestão de VMs"
          ],
          tags: ["monitoring", "dcv", "onapp", "vhm", "virtualization", "vm"]
        },
        {
          id: "11.2.4",
          name: "Monitoramento Dedicado com Virtualização",
          description: "Monitoramento dedicado por host virtualizado, com adicional por VM para visibilidade granular.",
          price: 250.00,
          functionality: "Monitoramento completo de hosts virtualizados e suas VMs, com métricas detalhadas e alertas automáticos.",
          applicability: "Empresas com ambientes virtualizados que necessitam visibilidade granular por máquina.",
          example: "Monitoramento de hosts VMware, Hyper-V, Proxmox, com múltiplas VMs.",
          characteristics: [
            "Monitoramento por host a R$250,00/mês",
            "Adicional de R$5,00 por VM",
            "Métricas completas por host e VM",
            "Alertas automáticos por e-mail/Telegram",
            "Dashboard dedicado",
            "Relatórios de saúde e performance",
            "Configuração customizada por ambiente",
            "Suporte técnico especializado",
            "Retenção de histórico de métricas",
            "Escalonamento de incidentes"
          ],
          tags: ["monitoring", "dedicated", "virtualization", "host", "vm", "dashboard"]
        },
        {
          id: "11.2.5",
          name: "Monitoramento Dedicado sem Virtualização",
          description: "Monitoramento dedicado por servidor físico, com métricas completas, alertas e relatórios.",
          price: 200.00,
          functionality: "Monitoramento de servidores dedicados físicos, com métricas de performance, disponibilidade e segurança.",
          applicability: "Empresas que utilizam servidores dedicados sem virtualização e necessitam monitoramento completo.",
          example: "Monitoramento de servidores web, banco de dados, storage, firewall físico.",
          characteristics: [
            "Monitoramento por servidor a R$200,00/mês",
            "Métricas completas de performance e disponibilidade",
            "Alertas automáticos por e-mail/Telegram",
            "Dashboard dedicado",
            "Relatórios mensais de saúde",
            "Configuração customizada por servidor",
            "Suporte técnico especializado",
            "Retenção de histórico de métricas",
            "Escalonamento de incidentes",
            "Integração com sistemas de gestão de servidores"
          ],
          tags: ["monitoring", "dedicated", "physical-server", "performance", "dashboard"]
        }
      ]
    }
  ]
};
