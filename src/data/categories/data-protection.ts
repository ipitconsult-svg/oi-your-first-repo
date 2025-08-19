import { Category } from "@/types/catalog";

export const dataProtectionCategory: Category = {
  id: "3",
  name: "DATA PROTECTION",
  description: "Soluções completas de backup, disaster recovery e proteção de dados para garantir a integridade e disponibilidade das informações críticas do negócio",
  subcategories: [
    {
      id: "3.1",
      name: "BaaS (Backup as a Service)",
      description: "Backup automatizado e gerenciado para proteger seus dados críticos com economia de até 40% em relação a soluções on-premise",
      items: [
        // Veeam Backup Standard
        {
          id: "3.1.1.1",
          name: "Veeam Backup Standard - File Share",
          description: "Licença Service Provider Data Protection - Veeam Backup & Replication Standard - File Share",
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
          id: "3.1.1.2",
          name: "Veeam Backup Standard - Public Cloud Database", 
          description: "Licença Service Provider Data Protection - Veeam Backup & Replication Standard - Public Cloud Database",
          price: 121.00,
          functionality: "Backup de bancos de dados hospedados em clouds públicas com recursos de recovery consistente",
          applicability: "Bancos de dados em AWS, Azure, GCP, databases como serviço",
          example: "Backup de Amazon RDS, Azure SQL Database ou Google Cloud SQL",
          characteristics: [
            "Integração nativa com cloud providers",
            "Backup consistente de databases",
            "Recovery granular de databases",
            "Agendamento automático",
            "Restore para ambientes diferentes"
          ],
          tags: ["backup", "veeam", "standard", "cloud", "database"],
          observations: "Proteção especializada para bancos de dados na nuvem pública"
        },
        {
          id: "3.1.1.3",
          name: "Veeam Backup Standard - Public Cloud Fileshare", 
          description: "Licença Service Provider Data Protection - Veeam Backup & Replication Standard - Public Cloud Fileshare",
          price: 121.00,
          functionality: "Backup para compartilhamentos de arquivos hospedados em clouds públicas",
          applicability: "Amazon S3, Azure Files, Google Cloud Storage, Object Storage",
          example: "Backup de dados em Amazon S3 ou Azure Files compartilhados",
          characteristics: [
            "Integração com storage na nuvem",
            "Backup incremental eficiente",
            "Gestão de políticas de retenção",
            "Recovery seletivo de arquivos",
            "Transferência otimizada de dados"
          ],
          tags: ["backup", "veeam", "standard", "cloud", "fileshare"],
          observations: "Solução dedicada para proteção de file shares em nuvens públicas"
        },
        {
          id: "3.1.1.4",
          name: "Veeam Backup Standard - Public Cloud VM", 
          description: "Licença Service Provider Data Protection - Veeam Backup & Replication Standard - Public Cloud VM",
          price: 121.00,
          functionality: "Backup específico para máquinas virtuais em provedores de nuvem pública",
          applicability: "EC2, Azure VMs, Google Compute Engine, instâncias de nuvem",
          example: "Backup de instâncias EC2 da AWS ou máquinas virtuais Azure",
          characteristics: [
            "Snapshot integration com cloud providers",
            "Backup consistente com aplicações",
            "Recovery completo ou granular",
            "Automação via API",
            "Cost optimization de backup"
          ],
          tags: ["backup", "veeam", "standard", "cloud", "vm"],
          observations: "Proteção otimizada para workloads em execução em nuvens públicas"
        },
        {
          id: "3.1.1.5", 
          name: "Veeam Backup Standard - Server",
          description: "Licença Service Provider Data Protection - Veeam Backup & Replication Standard - Server",
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
          id: "3.1.1.6",
          name: "Veeam Backup Standard - Workstation", 
          description: "Licença Service Provider Data Protection - Veeam Backup & Replication Standard - Workstation",
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
        {
          id: "3.1.1.7",
          name: "Veeam Backup Standard - VM", 
          description: "Licença Service Provider Data Protection - Veeam Backup & Replication Standard - VM",
          price: 55.00,
          functionality: "Backup otimizado para máquinas virtuais em ambientes VMware, Hyper-V e outros",
          applicability: "Máquinas virtuais em ambientes on-premise, data center privado, ambiente virtualizado",
          example: "Backup de VM de servidor web ou aplicação interna em ambiente VMware",
          characteristics: [
            "Backup agentless para VMs",
            "Application-aware processing",
            "Instant VM recovery",
            "Integração com hypervisors",
            "SureBackup recovery verification"
          ],
          tags: ["backup", "veeam", "standard", "vm", "virtual-machine"],
          observations: "Solução eficiente para ambientes virtualizados com recursos de recovery rápido"
        },
        // Veeam Enterprise Plus
        {
          id: "3.1.2.1",
          name: "Veeam Backup Enterprise Plus - Application",
          description: "Licença Service Provider Data Protection - Veeam Backup & Replication Enterprise Plus - Application",
          price: 121.00,
          functionality: "Backup avançado específico para aplicações enterprise com recursos de consistência e recovery",
          applicability: "Aplicações críticas, MS SQL, Oracle, SAP, middleware enterprise",
          example: "Backup de SQL Server com consistência transacional ou Oracle Database",
          characteristics: [
            "Application-aware processing",
            "Consistência transacional",
            "Recovery granular de databases",
            "Scripts pre/post-backup",
            "Item-level recovery"
          ],
          tags: ["backup", "veeam", "enterprise-plus", "application", "database"],
          observations: "Proteção especializada para aplicações críticas com requisitos específicos de consistência"
        },
        {
          id: "3.1.2.2",
          name: "Veeam Backup Enterprise Plus - File Share",
          description: "Licença Service Provider Data Protection - Veeam Backup & Replication Enterprise Plus - File Share",
          price: 110.00,
          functionality: "Proteção avançada para file shares com recursos enterprise de segurança e compliance",
          applicability: "File servers críticos, NAS enterprise, dados regulados, storage de alta performance",
          example: "Backup de file server com dados sensíveis ou NAS enterprise com grande volume",
          characteristics: [
            "Data immutability protection",
            "Encriptação avançada",
            "Retenção para compliance",
            "Multi-tier storage options",
            "Recovery avançado e granular"
          ],
          tags: ["backup", "veeam", "enterprise-plus", "file-share", "compliance"],
          observations: "Máxima proteção para compartilhamentos de arquivos com requisitos enterprise"
        },
        {
          id: "3.1.2.3",
          name: "Veeam Backup Enterprise Plus - Public Cloud Database",
          description: "Licença Service Provider Data Protection - Veeam Backup & Replication Enterprise Plus - Public Cloud Database",
          price: 121.00,
          functionality: "Proteção enterprise para databases em cloud pública com recursos avançados de automação",
          applicability: "Databases críticas em nuvem, RDS multi-region, Azure SQL crítico, databases regulados",
          example: "Backup de cluster RDS em produção ou Azure SQL Database para sistema ERP",
          characteristics: [
            "Multi-tier backup strategy",
            "Cross-region protection",
            "SLA policy enforcement",
            "Recovery automatizado",
            "Test recovery automation"
          ],
          tags: ["backup", "veeam", "enterprise-plus", "cloud", "database"],
          observations: "Solução robusta para bancos de dados críticos em nuvem com compliance avançado"
        },
        {
          id: "3.1.2.4",
          name: "Veeam Backup Enterprise Plus - Public Cloud Fileshare",
          description: "Licença Service Provider Data Protection - Veeam Backup & Replication Enterprise Plus - Public Cloud Fileshare",
          price: 121.00,
          functionality: "Backup enterprise para compartilhamentos em nuvem com orquestração e compliance",
          applicability: "Dados regulados em nuvem, volumes críticos, ambientes híbridos, storage multi-cloud",
          example: "Backup de arquivos críticos em S3 ou arquivos regulados em Azure Files",
          characteristics: [
            "Multi-cloud protection",
            "Immutable backup copies",
            "Orquestração avançada",
            "Políticas granulares de retenção",
            "Data classification integration"
          ],
          tags: ["backup", "veeam", "enterprise-plus", "cloud", "fileshare"],
          observations: "Proteção de nível enterprise para arquivos em nuvem com requisitos de compliance"
        },
        {
          id: "3.1.2.5",
          name: "Veeam Backup Enterprise Plus - Public Cloud VM",
          description: "Licença Service Provider Data Protection - Veeam Backup & Replication Enterprise Plus - Public Cloud VM",
          price: 121.00,
          functionality: "Proteção enterprise para VMs em nuvem com recursos avançados de DR e orchestration",
          applicability: "Workloads críticas em nuvem, instâncias de produção, VMs reguladas, ambientes multi-region",
          example: "Backup de fleet de EC2 para e-commerce ou VMs críticas de processamento",
          characteristics: [
            "Disaster recovery avançado",
            "Orquestração multi-cloud",
            "Recovery testing automatizado",
            "Retenção em camadas",
            "SLA policy automation"
          ],
          tags: ["backup", "veeam", "enterprise-plus", "cloud", "vm"],
          observations: "Máxima proteção para VMs em nuvem pública com recursos de continuidade de negócios"
        },
        {
          id: "3.1.2.6",
          name: "Veeam Backup Enterprise Plus - Server",
          description: "Licença Service Provider Data Protection - Veeam Backup & Replication Enterprise Plus - Server",
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
          id: "3.1.2.7",
          name: "Veeam Backup Enterprise Plus - VM",
          description: "Licença Service Provider Data Protection - Veeam Backup & Replication Enterprise Plus - VM",
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
        {
          id: "3.1.2.8",
          name: "Veeam Backup Enterprise Plus - Workstation",
          description: "Licença Service Provider Data Protection - Veeam Backup & Replication Enterprise Plus - Workstation",
          price: 44.00,
          functionality: "Proteção enterprise para workstations com recursos avançados de segurança e compliance",
          applicability: "Estações de trabalho críticas, endpoints com dados sensíveis, dispositivos regulados",
          example: "Backup de workstation de executivos ou estações com dados regulados",
          characteristics: [
            "Proteção avançada contra ransomware",
            "Encriptação end-to-end",
            "Data loss prevention",
            "Backup 3-2-1 automático",
            "Recovery flexível e seguro"
          ],
          tags: ["backup", "veeam", "enterprise-plus", "workstation", "security"],
          observations: "Proteção completa para endpoints críticos com máxima segurança e compliance"
        },
        // Acronis Standard Backup
        {
          id: "3.1.3.1",
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
          id: "3.1.3.2",
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
          id: "3.1.3.3",
          name: "Acronis Backup - vCloud Director VM",
          description: "Backup específico para VMs gerenciadas pelo VMware vCloud Director",
          price: 57.32,
          functionality: "Backup especializado para ambientes vCloud Director com integração nativa",
          applicability: "Ambientes VMware vCloud Director, provedores de serviço, clouds privadas",
          example: "Backup de VMs em ambiente de cloud privada gerenciada por vCloud Director",
          characteristics: [
            "Integração nativa com vCloud Director",
            "Backup baseado em tenants",
            "Recovery granular em nível de VM",
            "Automação via APIs vCloud",
            "Backup com reconhecimento de vApps"
          ],
          tags: ["backup", "acronis", "vmware", "vcloud", "cloud-provider"],
          observations: "Solução especializada para provedores de serviço usando vCloud Director"
        },
        {
          id: "3.1.3.4",
          name: "Acronis Backup - Workstation",
          description: "Backup para estações de trabalho corporativas",
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
        {
          id: "3.1.3.5",
          name: "Acronis Backup - Hosting Server",
          description: "Backup para servidores de hosting e ambientes multitenancy",
          price: 25.82,
          functionality: "Proteção especializada para servidores de hosting com suporte multitenancy",
          applicability: "Web hosting servers, servidores compartilhados, ambientes multilocatários",
          example: "Backup de servidor compartilhado de hospedagem web com múltiplos sites",
          characteristics: [
            "Isolamento de tenants",
            "Backup seletivo por tenant",
            "Recovery granular por cliente",
            "Otimização para grandes volumes",
            "Integração com painéis de hosting"
          ],
          tags: ["backup", "acronis", "hosting", "multitenancy", "shared-hosting"],
          observations: "Solução ideal para provedores de hosting e serviços compartilhados"
        },
        {
          id: "3.1.3.6",
          name: "Acronis Backup - Microsoft 365/Google Workspace",
          description: "Backup para dados em Microsoft 365 ou Google Workspace",
          price: 6.38,
          functionality: "Backup e proteção para dados de usuários em plataformas SaaS populares",
          applicability: "Microsoft 365, Google Workspace, usuários de cloud office",
          example: "Backup de emails, OneDrive, SharePoint ou Google Drive para usuários corporativos",
          characteristics: [
            "Backup de Exchange Online/Gmail",
            "Proteção para OneDrive/G Drive",
            "Backup de SharePoint/Google Sites",
            "Recovery granular de itens",
            "Pesquisa em conteúdo de backup"
          ],
          tags: ["backup", "acronis", "office365", "google-workspace", "saas"],
          observations: "Essencial para proteção de dados SaaS não cobertos pelos provedores"
        },
        {
          id: "3.1.3.7",
          name: "Acronis Backup - Mobile",
          description: "Backup para dispositivos móveis corporativos",
          price: 7.78,
          functionality: "Proteção para dados em smartphones e tablets empresariais",
          applicability: "Dispositivos iOS, Android, tablets corporativos, celulares empresariais",
          example: "Backup de smartphone corporativo com dados e aplicações sensíveis",
          characteristics: [
            "Backup de contatos e calendários",
            "Proteção de fotos e vídeos",
            "Backup de configurações",
            "Recovery seletivo de dados",
            "Sincronização entre dispositivos"
          ],
          tags: ["backup", "acronis", "mobile", "smartphone", "tablet"],
          observations: "Proteção para dados corporativos em dispositivos móveis"
        },
        {
          id: "3.1.3.8",
          name: "Acronis Partner Storage",
          description: "Armazenamento em parceiro para backups Acronis",
          price: 0.12,
          functionality: "Armazenamento gerenciado por parceiro para destino de backups Acronis",
          applicability: "Todos os tipos de backup Acronis, armazenamento complementar",
          example: "Armazenamento adicional para backups de servidores e VMs com Acronis (por GB)",
          characteristics: [
            "Gerenciado pelo parceiro",
            "Preço por GB utilizado",
            "Integração nativa com Acronis",
            "Retenção configurável",
            "Monitoramento de utilização"
          ],
          tags: ["backup", "acronis", "storage", "partner", "repository"],
          observations: "Opção econômica para armazenamento gerenciado por parceiros"
        },
        {
          id: "3.1.3.9",
          name: "Acronis Cloud Storage",
          description: "Armazenamento Acronis em datacenter de parceiro",
          price: 0.26,
          functionality: "Storage Acronis hospedado em datacenter de parceiro para modelo de cobrança por GB",
          applicability: "Todos os tipos de backup Acronis, armazenamento complementar",
          example: "Storage para backups Acronis com cobrança baseada em consumo (por GB)",
          characteristics: [
            "Datacenter local do parceiro",
            "Cobrança por consumo (GB)",
            "Performance otimizada",
            "Integração nativa",
            "Escalabilidade sob demanda"
          ],
          tags: ["backup", "acronis", "storage", "partner", "consumption"],
          observations: "Storage Acronis em datacenter parceiro com modelo pay-per-use"
        },
        {
          id: "3.1.3.10",
          name: "Customer Local Storage",
          description: "Utilização de storage local do cliente para backups",
          price: 0.11,
          functionality: "Opção para utilizar armazenamento próprio do cliente como destino de backup",
          applicability: "Clientes com infraestrutura própria de armazenamento",
          example: "Backup para storage NAS ou SAN existente na infraestrutura do cliente (por GB)",
          characteristics: [
            "Utiliza storage do cliente",
            "Controle total sobre os dados",
            "Menor custo para grandes volumes",
            "Compatibilidade com storage existente",
            "Flexibilidade de configuração"
          ],
          tags: ["backup", "acronis", "storage", "local", "customer"],
          observations: "Opção econômica utilizando infraestrutura existente do cliente"
        },
        // Acronis Geo Replication
        {
          id: "3.1.3.11",
          name: "Acronis Geo-redundant Storage",
          description: "Replicação geográfica para backups em Acronis Hosted Storage",
          price: 0.16,
          functionality: "Replicação de backups para datacenter secundário para proteção adicional",
          applicability: "Dados críticos, ambientes regulados, proteção contra desastres regionais",
          example: "Replicação de backups de servidores críticos para datacenter em outra região (por GB)",
          characteristics: [
            "Redundância geográfica automática",
            "Proteção contra desastres regionais",
            "Compliance com regulamentações",
            "Replicação otimizada de dados",
            "Recovery de qualquer localidade"
          ],
          tags: ["backup", "acronis", "geo-replication", "redundancy", "disaster-recovery"],
          observations: "Requer serviço de backup Acronis como pré-requisito"
        },
        {
          id: "3.1.3.12",
          name: "Acronis Geo-redundant Microsoft 365",
          description: "Replicação geográfica para backups de Microsoft 365",
          price: 11.90,
          functionality: "Proteção com redundância geográfica para dados do Microsoft 365",
          applicability: "Empresas com dados críticos no Microsoft 365, ambientes regulados",
          example: "Backup geo-redundante de emails executivos e documentos confidenciais no Microsoft 365",
          characteristics: [
            "Storage Acronis ilimitado incluído",
            "Replicação entre datacenters",
            "Proteção avançada para dados 365",
            "Compliance para dados em nuvem",
            "Recovery de qualquer localidade"
          ],
          tags: ["backup", "acronis", "office365", "geo-redundant", "compliance"],
          observations: "Requer serviço de backup Acronis como pré-requisito"
        },
        {
          id: "3.1.3.13",
          name: "Acronis Geo-redundant Google Workspace",
          description: "Replicação geográfica para backups de Google Workspace",
          price: 11.90,
          functionality: "Proteção com redundância geográfica para dados do Google Workspace",
          applicability: "Empresas com dados críticos no Google Workspace, ambientes regulados",
          example: "Backup geo-redundante de emails executivos e documentos confidenciais no Google Workspace",
          characteristics: [
            "Storage Acronis ilimitado incluído",
            "Replicação entre datacenters",
            "Proteção avançada para dados Google",
            "Compliance para dados em nuvem",
            "Recovery de qualquer localidade"
          ],
          tags: ["backup", "acronis", "google-workspace", "geo-redundant", "compliance"],
          observations: "Requer serviço de backup Acronis como pré-requisito"
        },
        // Acronis Advanced Backup
        {
          id: "3.1.4.1",
          name: "Advanced Backup - Server",
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
          observations: "Proteção avançada com recursos de cybersecurity integrados. Requer Backup Standard."
        },
        {
          id: "3.1.4.2",
          name: "Advanced Backup - VM",
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
          observations: "Backup inteligente com proteção proativa contra ameaças. Requer Backup Standard."
        },
        {
          id: "3.1.4.3",
          name: "Advanced Backup - Workstation",
          description: "Backup avançado para estações de trabalho",
          price: 7.78,
          functionality: "Proteção avançada para workstations com funcionalidades de segurança premium",
          applicability: "Desktops e laptops corporativos com dados sensíveis, estações de executivos",
          example: "Backup com proteção avançada para laptop de executivo ou estação de designer",
          characteristics: [
            "Proteção avançada anti-ransomware",
            "Detecção de comportamento suspeito",
            "Recuperação forense de dados",
            "Backup em camadas de segurança",
            "Proteção contra vazamento de dados"
          ],
          tags: ["backup", "acronis", "advanced", "workstation", "security"],
          observations: "Proteção premium para endpoints corporativos. Requer Backup Standard."
        },
        {
          id: "3.1.4.4",
          name: "Advanced Backup - Hosting Server",
          description: "Backup avançado para servidores de hosting",
          price: 7.78,
          functionality: "Proteção premium para servidores de hosting com recursos de segurança avançados",
          applicability: "Web hosting servers, ambientes multitenancy, hosting crítico",
          example: "Proteção avançada para servidor de hosting com sites e aplicações sensíveis",
          characteristics: [
            "Segurança em camadas por tenant",
            "Proteção anti-malware avançada",
            "Isolamento de ameaças por cliente",
            "Recuperação acelerada",
            "Relatórios de segurança por tenant"
          ],
          tags: ["backup", "acronis", "advanced", "hosting", "security"],
          observations: "Segurança premium para provedores de hosting. Requer Backup Standard."
        },
        {
          id: "3.1.4.5",
          name: "Advanced Backup - Microsoft 365",
          description: "Backup avançado para Microsoft 365",
          price: 3.90,
          functionality: "Proteção avançada para dados e usuários do Microsoft 365",
          applicability: "Usuários de Microsoft 365 com dados sensíveis, compliance Office 365",
          example: "Proteção avançada para dados do Exchange Online e SharePoint com requisitos regulatórios",
          characteristics: [
            "Scanning contínuo de segurança",
            "Proteção contra phishing avançada",
            "Segurança de arquivos em OneDrive",
            "Proteção contra exfiltração de dados",
            "Relatórios de compliance avançados"
          ],
          tags: ["backup", "acronis", "advanced", "office365", "security"],
          observations: "Proteção de nível enterprise para Microsoft 365. Requer Backup Standard."
        },
        {
          id: "3.1.4.6",
          name: "Advanced Backup - Google Workspace",
          description: "Backup avançado para Google Workspace",
          price: 3.90,
          functionality: "Proteção avançada para dados e usuários do Google Workspace",
          applicability: "Usuários de Google Workspace com dados sensíveis, compliance G Suite",
          example: "Proteção avançada para Gmail e Google Drive com requisitos regulatórios",
          characteristics: [
            "Scanning contínuo de segurança",
            "Proteção contra phishing avançada",
            "Segurança de arquivos em G Drive",
            "Proteção contra exfiltração de dados",
            "Relatórios de compliance avançados"
          ],
          tags: ["backup", "acronis", "advanced", "google-workspace", "security"],
          observations: "Proteção de nível enterprise para Google Workspace. Requer Backup Standard."
        },
        // Data Loss Prevention
        {
          id: "3.1.5.1",
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
      description: "Recuperação de desastre automatizada para continuidade de negócio com replicação em tempo real e failover orquestrado",
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
