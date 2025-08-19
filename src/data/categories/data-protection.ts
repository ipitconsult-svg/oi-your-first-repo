import { Category } from "@/types/catalog";

export const dataProtectionCategory: Category = {
  id: "3",
  name: "DATA PROTECTION",
  description: "Soluções completas de backup, disaster recovery e proteção de dados",
  subcategories: [
    {
      id: "3.1",
      name: "BaaS (Backup as a Service)",
      description: "Backup automatizado e gerenciado para proteger seus dados críticos",
      items: [
        // Veeam Backup Standard
        {
          id: "3.1.1.1.1",
          name: "Veeam Backup Standard - File Share",
          description: "Backup Veeam para compartilhamentos de arquivos",
          price: 110.00,
          functionality: "Solução de backup enterprise para file shares com tecnologia Veeam, oferecendo proteção robusta e recovery rápido",
          applicability: "File servers, NAS, compartilhamentos corporativos, repositórios de documentos",
          example: "Backup de file server departamental ou NAS corporativo com documentos críticos",
          characteristics: [
            "Backup incremental eficiente",
            "Compressão e deduplicação",
            "Recovery granular de arquivos",
            "Agendamento automático",
            "Monitoramento centralizado"
          ],
          tags: ["backup", "veeam", "standard", "file-share", "enterprise"],
          observations: "Ideal para proteção de dados estruturados em file shares com tecnologia Veeam líder de mercado"
        },
        {
          id: "3.1.1.1.2", 
          name: "Veeam Backup Standard - Server",
          description: "Backup Veeam para servidores físicos e virtuais",
          price: 121.00,
          functionality: "Backup completo de servidores com tecnologia Veeam, incluindo sistema operacional, aplicações e dados",
          applicability: "Servidores físicos, máquinas virtuais, servidores de aplicação, database servers",
          example: "Backup de servidor web, database server ou servidor de aplicação crítica",
          characteristics: [
            "Backup completo do servidor",
            "Recovery bare-metal",
            "Backup de VMs e físicos",
            "Tecnologia Changed Block Tracking",
            "Verificação automática de backup"
          ],
          tags: ["backup", "veeam", "standard", "server", "vm"],
          observations: "Proteção completa para servidores com recovery rápido e confiável"
        },
        {
          id: "3.1.1.1.3",
          name: "Veeam Backup Standard - Workstation", 
          description: "Backup Veeam para estações de trabalho",
          price: 44.00,
          functionality: "Proteção automatizada para workstations com backup contínuo e recovery granular",
          applicability: "Desktops corporativos, laptops, estações de trabalho especializadas",
          example: "Backup de workstation de designer ou estação de trabalho de desenvolvedor",
          characteristics: [
            "Backup contínuo automático",
            "Recovery de arquivos individuais",
            "Proteção contra ransomware",
            "Baixo impacto na performance",
            "Interface user-friendly"
          ],
          tags: ["backup", "veeam", "standard", "workstation", "endpoint"],
          observations: "Solução econômica para proteção de endpoints corporativos"
        },
        // Veeam Enterprise Plus
        {
          id: "3.1.1.2.1",
          name: "Veeam Enterprise Plus - Server",
          description: "Backup Veeam Enterprise Plus para servidores críticos",
          price: 121.00,
          functionality: "Solução enterprise avançada com recursos de replicação, backup em nuvem e recovery instantâneo",
          applicability: "Servidores mission-critical, ambientes enterprise, infraestrutura de alta disponibilidade",
          example: "Backup de servidor de ERP crítico ou cluster de database com requisitos de RTO mínimo",
          characteristics: [
            "Instant VM Recovery",
            "Backup e replicação em nuvem",
            "SureBackup verification",
            "Recursos avançados de compliance",
            "Orquestração de disaster recovery"
          ],
          tags: ["backup", "veeam", "enterprise-plus", "server", "critical"],
          observations: "Máxima proteção para ambientes críticos com recursos enterprise avançados"
        },
        {
          id: "3.1.1.2.2",
          name: "Veeam Enterprise Plus - VM",
          description: "Backup Veeam Enterprise Plus para máquinas virtuais",
          price: 121.00,
          functionality: "Proteção avançada para VMs com recursos enterprise incluindo replicação e orquestração",
          applicability: "Ambientes virtualizados críticos, clusters VMware/Hyper-V, infraestrutura de nuvem híbrida",
          example: "Backup de cluster VMware para aplicações críticas de negócio",
          characteristics: [
            "vSphere/Hyper-V integration",
            "VM replication automática",
            "Veeam ONE monitoring",
            "Scale-out backup repository",
            "Cloud tier integration"
          ],
          tags: ["backup", "veeam", "enterprise-plus", "vm", "virtualization"],
          observations: "Solução premium para ambientes virtualizados enterprise"
        },
        // Acronis Standard Backup
        {
          id: "3.1.2.1.1",
          name: "Acronis Backup - Physical Server",
          description: "Backup completo para servidores físicos com Acronis",
          price: 116.64,
          functionality: "Backup bare-metal completo com recovery universal para qualquer hardware",
          applicability: "Servidores físicos, workstations críticas, legacy systems",
          example: "Backup de servidor físico legacy ou servidor com hardware específico",
          characteristics: [
            "Universal Restore technology",
            "Backup bare-metal completo",
            "Recovery para hardware diferente",
            "Bootable rescue media",
            "Backup de aplicações ativas"
          ],
          tags: ["backup", "acronis", "physical", "server", "bare-metal"],
          observations: "Ideal para servidores físicos com necessidade de recovery universal"
        },
        {
          id: "3.1.2.1.2",
          name: "Acronis Backup - Virtual Machine",
          description: "Backup otimizado para máquinas virtuais",
          price: 57.32,
          functionality: "Backup específico para VMs com tecnologia agentless e recovery granular",
          applicability: "Ambientes VMware, Hyper-V, ambientes de virtualização mista",
          example: "Backup de VM de aplicação web ou máquina virtual de database",
          characteristics: [
            "Agentless backup para VMs",
            "Recovery granular de arquivos",
            "Backup incremental otimizado",
            "Suporte multi-hypervisor",
            "Instant restore capability"
          ],
          tags: ["backup", "acronis", "vm", "agentless", "virtualization"],
          observations: "Solução otimizada para ambientes virtualizados com recovery flexível"
        },
        {
          id: "3.1.2.1.3",
          name: "Acronis Backup - Workstation",
          description: "Proteção para estações de trabalho corporativas",
          price: 19.37,
          functionality: "Backup automático para workstations com proteção contra malware e ransomware",
          applicability: "Desktops corporativos, laptops remotos, estações móveis",
          example: "Backup de laptop corporativo ou workstation remota de funcionário",
          characteristics: [
            "Backup contínuo automático",
            "Proteção anti-ransomware",
            "Recovery de arquivos específicos",
            "Sincronização em nuvem",
            "Gestão centralizada"
          ],
          tags: ["backup", "acronis", "workstation", "endpoint", "ransomware-protection"],
          observations: "Proteção econômica para endpoints com recursos anti-malware integrados"
        },
        // Acronis Advanced Backup
        {
          id: "3.1.2.2.1",
          name: "Acronis Advanced Backup - Server",
          description: "Backup avançado com recursos de segurança integrados",
          price: 51.03,
          functionality: "Backup enterprise com cyber protection, incluindo anti-malware e forensics digitais",
          applicability: "Servidores críticos, ambientes regulados, infraestrutura sensível",
          example: "Backup de servidor financeiro ou sistema com dados sensíveis",
          characteristics: [
            "Cyber protection integrada",
            "Anti-malware em tempo real",
            "Digital forensics capability",
            "Backup validation automática",
            "Compliance reporting"
          ],
          tags: ["backup", "acronis", "advanced", "server", "cyber-protection"],
          observations: "Proteção avançada com recursos de cybersecurity integrados"
        },
        {
          id: "3.1.2.2.2",
          name: "Acronis Advanced Backup - VM",
          description: "Backup avançado para VMs com proteção cibernética",
          price: 21.87,
          functionality: "Backup de VMs com recursos avançados de segurança e análise comportamental",
          applicability: "VMs críticas, ambientes de desenvolvimento seguro, infraestrutura híbrida",
          example: "Backup de VM com aplicação crítica ou ambiente de desenvolvimento sensível",
          characteristics: [
            "Behavioral analysis integration",
            "VM-specific security features",
            "Advanced threat detection",
            "Automated incident response",
            "Multi-cloud protection"
          ],
          tags: ["backup", "acronis", "advanced", "vm", "security"],
          observations: "Backup inteligente com proteção proativa contra ameaças"
        },
        // Data Loss Prevention
        {
          id: "3.1.3.1",
          name: "Advanced Data Loss Prevention",
          description: "Prevenção avançada contra perda de dados corporativos",
          price: 16.78,
          functionality: "Sistema DLP com monitoramento em tempo real, classificação de dados e políticas de proteção automáticas",
          applicability: "Empresas com dados sensíveis, compliance LGPD/GDPR, ambientes regulamentados",
          example: "Proteção de dados PII em empresa de saúde ou dados financeiros em banco",
          characteristics: [
            "Classificação automática de dados",
            "Monitoramento em tempo real",
            "Políticas de proteção customizáveis",
            "Relatórios de compliance",
            "Integração com sistemas existentes"
          ],
          tags: ["dlp", "data-protection", "compliance", "monitoring", "security"],
          observations: "Essencial para compliance LGPD e proteção de dados sensíveis"
        }
      ]
    },
    {
      id: "3.2",
      name: "DRaaS (Disaster Recovery as a Service)",
      description: "Recuperação de desastre automatizada para continuidade de negócio",
      items: [
        {
          id: "3.2.1",
          name: "DRaaS via Zerto",
          description: "Disaster Recovery empresarial com RTO/RPO mínimos",
          price: 250.00,
          functionality: "Replicação contínua de VMs com failover automatizado e orquestração de disaster recovery",
          applicability: "Aplicações críticas, ambientes de produção, sistemas com RTO baixo",
          example: "DR para sistema ERP crítico ou aplicação de e-commerce com zero downtime",
          characteristics: [
            "RTO/RPO em minutos",
            "Replicação contínua de dados",
            "Failover/failback automatizado",
            "Testing de DR sem impacto",
            "Orquestração automatizada"
          ],
          tags: ["disaster-recovery", "zerto", "rto", "rpo", "business-continuity"],
          observations: "Solução premium para continuidade de negócio com RTO/RPO mínimos. Adiciona custo do armazenamento HDD utilizado.",
          externalLink: "https://www.zerto.com/"
        }
      ]
    }
  ]
};
