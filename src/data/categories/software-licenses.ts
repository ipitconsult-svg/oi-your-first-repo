import { Category } from "@/types/catalog";

export const softwareLicensesCategory: Category = {
  id: "8",
  name: "LICENÇAS DE SOFTWARE",
  description: "Licenciamento de software corporativo, sistemas operacionais, virtualização e aplicativos",
  subcategories: [
    {
      id: "8.1",
      name: "Sistemas Operacionais",
      description: "Licenças para sistemas operacionais Windows e Linux Enterprise",
      items: [
        {
          id: "8.1.1",
          name: "Windows Server 2022 Standard (16 cores)",
          description: "Licença Windows Server 2022 Standard para servidor com até 16 cores",
          price: 899.00,
          functionality: "Sistema operacional Windows Server para ambientes corporativos",
          applicability: "Empresas que necessitam de infraestrutura Windows para aplicações corporativas",
          example: "Servidores de aplicação .NET, Active Directory, serviços Windows",
          characteristics: [
            "Licença para 16 cores físicos",
            "2 VMs por licença",
            "Inclui CAL de gerenciamento",
            "Software Assurance opcional",
            "Suporte Microsoft opcional"
          ],
          tags: ["windows", "server", "operating-system", "microsoft", "license"]
        },
        {
          id: "8.1.2",
          name: "Windows Server 2022 Datacenter (16 cores)",
          description: "Licença Windows Server 2022 Datacenter para servidor com até 16 cores",
          price: 5999.00,
          functionality: "Sistema operacional Windows Server edição Datacenter para virtualização",
          applicability: "Ambientes com alta virtualização ou funções avançadas de datacenter",
          example: "Hyper-V com múltiplas VMs, clusters de alta disponibilidade Windows",
          characteristics: [
            "Licença para 16 cores físicos",
            "VMs ilimitadas por licença",
            "Recursos avançados de SDN",
            "Storage Spaces Direct",
            "Shielded VMs e recursos de segurança avançados"
          ],
          tags: ["windows", "server", "datacenter", "virtualization", "license"]
        },
        {
          id: "8.1.3",
          name: "Windows Server CAL (por usuário)",
          description: "Licença de acesso cliente para Windows Server por usuário",
          price: 39.00,
          functionality: "Licença que permite acesso legal de usuários a serviços Windows Server",
          applicability: "Usuários que precisam acessar serviços hospedados em Windows Server",
          example: "Acesso a compartilhamentos, impressoras, serviços de rede Windows Server",
          characteristics: [
            "Licença por usuário (não por dispositivo)",
            "Permite acesso a múltiplos servidores",
            "Conformidade legal",
            "Modelo de assinatura anual",
            "Elegível para volume licensing"
          ],
          tags: ["windows", "cal", "licensing", "access", "user"]
        },
        {
          id: "8.1.4",
          name: "Red Hat Enterprise Linux Server (2 sockets)",
          description: "Assinatura Red Hat Enterprise Linux para servidor físico com até 2 sockets",
          price: 799.00,
          functionality: "Sistema operacional Linux Enterprise com suporte e atualizações",
          applicability: "Empresas que necessitam Linux com suporte corporativo e estabilidade",
          example: "Servidores de aplicação, bancos de dados, infraestrutura crítica Linux",
          characteristics: [
            "Licença para servidor físico 2 sockets",
            "Atualizações de segurança",
            "Suporte Red Hat 8x5",
            "Acesso ao portal de conhecimento",
            "Certificações de compatibilidade"
          ],
          tags: ["linux", "rhel", "red-hat", "enterprise", "operating-system"]
        },
        {
          id: "8.1.5",
          name: "SUSE Linux Enterprise Server (2 sockets)",
          description: "Assinatura SUSE Linux Enterprise Server para servidor com até 2 sockets",
          price: 749.00,
          functionality: "Sistema operacional Linux Enterprise com suporte e atualizações",
          applicability: "Empresas que necessitam Linux com suporte corporativo e estabilidade",
          example: "Servidores SAP, infraestrutura crítica, ambientes de alta disponibilidade",
          characteristics: [
            "Licença para servidor físico 2 sockets",
            "Atualizações de segurança",
            "Suporte SUSE 8x5",
            "Compatibilidade certificada SAP",
            "Patches sem reinicialização"
          ],
          tags: ["linux", "suse", "enterprise", "operating-system", "sap"]
        }
      ]
    },
    {
      id: "8.2",
      name: "Virtualização",
      description: "Licenças para plataformas de virtualização e gerenciamento",
      items: [
        {
          id: "8.2.1",
          name: "VMware vSphere Standard (por CPU)",
          description: "Licença VMware vSphere Standard para um processador físico",
          price: 999.00,
          functionality: "Plataforma de virtualização de servidores para consolidação",
          applicability: "Empresas que necessitam virtualizar servidores com gestão centralizada",
          example: "Consolidação de servidores, ambientes de teste/dev, infraestrutura básica",
          characteristics: [
            "Licença por CPU física",
            "vMotion para migração",
            "Alta disponibilidade (HA)",
            "Suporte VMware 8x5",
            "vCenter vendido separadamente"
          ],
          tags: ["vmware", "vsphere", "virtualization", "hypervisor", "license"]
        },
        {
          id: "8.2.2",
          name: "VMware vSphere Enterprise Plus (por CPU)",
          description: "Licença VMware vSphere Enterprise Plus para um processador físico",
          price: 3995.00,
          functionality: "Plataforma de virtualização avançada com todos os recursos",
          applicability: "Datacenters corporativos com necessidades avançadas de virtualização",
          example: "Ambientes críticos, clusters de alta disponibilidade, nuvem privada",
          characteristics: [
            "Licença por CPU física",
            "Distributed Switch",
            "Storage vMotion",
            "Host Profiles",
            "DRS e recursos avançados"
          ],
          tags: ["vmware", "vsphere", "enterprise", "virtualization", "datacenter"]
        },
        {
          id: "8.2.3",
          name: "VMware vCenter Server Standard",
          description: "Licença VMware vCenter Server para gerenciamento centralizado",
          price: 6675.00,
          functionality: "Plataforma de gerenciamento centralizado para ambiente VMware",
          applicability: "Empresas com múltiplos hosts VMware que precisam de gestão unificada",
          example: "Gestão de clusters VMware, automação e monitoramento centralizado",
          characteristics: [
            "Gerenciamento centralizado",
            "Suporta até 2000 VMs",
            "Gestão de clusters",
            "Automação e orquestração",
            "Interface HTML5"
          ],
          tags: ["vmware", "vcenter", "management", "centralized", "orchestration"]
        },
        {
          id: "8.2.4",
          name: "Microsoft Hyper-V Server (16 cores)",
          description: "Licença Microsoft Hyper-V Server para um servidor com até 16 cores",
          price: 599.00,
          functionality: "Plataforma de virtualização Microsoft integrada ao Windows Server",
          applicability: "Empresas com ambiente Microsoft que desejam virtualização nativa",
          example: "Virtualização de servidores Windows, ambientes de teste Microsoft",
          characteristics: [
            "Licença para 16 cores físicos",
            "Compatibilidade nativa com Windows",
            "Integração com System Center",
            "Clustering de alta disponibilidade",
            "Live Migration"
          ],
          tags: ["hyper-v", "microsoft", "virtualization", "windows", "hypervisor"]
        },
        {
          id: "8.2.5",
          name: "Proxmox VE Subscription Basic",
          description: "Assinatura de suporte Proxmox Virtual Environment nível Basic",
          price: 299.00,
          functionality: "Suporte oficial para plataforma de virtualização open source",
          applicability: "Empresas que utilizam Proxmox VE e necessitam de suporte corporativo",
          example: "Ambientes de virtualização com KVM e containers LXC em Proxmox",
          characteristics: [
            "Suporte por ticket",
            "Repositório Enterprise",
            "1 servidor físico",
            "Tempo de resposta em dia útil",
            "Atualizações testadas"
          ],
          tags: ["proxmox", "open-source", "virtualization", "kvm", "support"]
        }
      ]
    },
    {
      id: "8.3",
      name: "Aplicativos e Bancos de Dados",
      description: "Licenças para aplicativos empresariais e bancos de dados",
      items: [
        {
          id: "8.3.1",
          name: "Microsoft SQL Server 2022 Standard (2 cores)",
          description: "Licença Microsoft SQL Server 2022 Standard para 2 cores",
          price: 1859.00,
          functionality: "Sistema de banco de dados relacional da Microsoft",
          applicability: "Aplicações corporativas que necessitam de banco SQL Server",
          example: "Aplicações .NET, sistemas ERP, aplicações empresariais Windows",
          characteristics: [
            "Licença para 2 cores (mínimo 4 cores)",
            "Limite de 24 cores por instância",
            "Memória limitada a 128GB",
            "Recursos básicos de HA",
            "Funções BI básicas"
          ],
          tags: ["sql-server", "database", "microsoft", "relational", "license"]
        },
        {
          id: "8.3.2",
          name: "Microsoft SQL Server 2022 Enterprise (2 cores)",
          description: "Licença Microsoft SQL Server 2022 Enterprise para 2 cores",
          price: 7128.00,
          functionality: "Sistema de banco de dados relacional da Microsoft edição completa",
          applicability: "Aplicações críticas ou de grande porte que necessitam SQL Server",
          example: "Data warehouses, aplicações de missão crítica, sistemas de alta performance",
          characteristics: [
            "Licença para 2 cores",
            "Recursos ilimitados",
            "Always On com múltiplas réplicas",
            "In-Memory OLTP",
            "Advanced Analytics"
          ],
          tags: ["sql-server", "enterprise", "database", "microsoft", "mission-critical"]
        },
        {
          id: "8.3.3",
          name: "Oracle Database Standard Edition 2 (por processador)",
          description: "Licença Oracle Database Standard Edition 2 por processador",
          price: 17500.00,
          functionality: "Sistema de banco de dados relacional Oracle edição standard",
          applicability: "Aplicações corporativas que necessitam banco de dados Oracle",
          example: "Sistemas ERP, aplicações de negócio, ambientes Oracle menores",
          characteristics: [
            "Licença por processador",
            "Máximo 2 sockets",
            "RAC limitado",
            "Sem opções enterprise",
            "Gerenciamento básico"
          ],
          tags: ["oracle", "database", "relational", "standard", "license"]
        },
        {
          id: "8.3.4",
          name: "Oracle Database Enterprise Edition (por processador)",
          description: "Licença Oracle Database Enterprise Edition por processador",
          price: 47500.00,
          functionality: "Sistema de banco de dados relacional Oracle edição completa",
          applicability: "Aplicações críticas ou de grande porte que necessitam Oracle",
          example: "Sistemas corporativos críticos, alta performance, grandes bancos de dados",
          characteristics: [
            "Licença por processador",
            "Recursos ilimitados",
            "Real Application Clusters (RAC)",
            "Partitioning",
            "Advanced Security"
          ],
          tags: ["oracle", "enterprise", "database", "mission-critical", "high-performance"]
        },
        {
          id: "8.3.5",
          name: "MongoDB Enterprise Advanced (por servidor)",
          description: "Assinatura MongoDB Enterprise Advanced por servidor",
          price: 5000.00,
          functionality: "Banco de dados NoSQL com suporte empresarial e ferramentas avançadas",
          applicability: "Aplicações modernas que necessitam NoSQL com suporte enterprise",
          example: "Aplicações web escaláveis, IoT, analytics, conteúdo personalizado",
          characteristics: [
            "Licença por servidor",
            "Suporte 24/7",
            "Ferramentas avançadas de monitoramento",
            "Criptografia avançada",
            "Backups online"
          ],
          tags: ["mongodb", "nosql", "database", "enterprise", "scalable"]
        }
      ]
    }
  ]
};
