import { Category } from "@/types/catalog";

export const storageCategory: Category = {
  id: "2",
  name: "STORAGE",
  description: "Soluções completas de storage para diferentes necessidades de performance",
  subcategories: [
    {
      id: "2.1",
      name: "Armazenamento em Bloco (All Flash)",
      description: "Storage de bloco com performance extrema para aplicações críticas",
      items: [
        {
          id: "2.1.1",
          name: "Storage Edge - Até 32K IOPS / 1000 MB/s",
          description: "Armazenamento de bloco de performance extrema para aplicações ultra-críticas",
          price: 1.30,
          functionality: "All-flash array com latência sub-milissegundo, throughput sustentado e cache inteligente para máxima performance",
          applicability: "Databases críticos, trading systems, aplicações real-time, gaming online, HFT (High Frequency Trading)",
          example: "Database para sistema de trading financeiro com milhares de transações por segundo ou aplicação de gaming MMO",
          characteristics: [
            "Performance: Até 32.000 IOPS",
            "Throughput: 1000 MB/s base",
            "Latência: <1ms sustentada",
            "Throughput adicional: Até 1800 MB/s (R$1,80/MB)",
            "All-flash enterprise SSDs com cache NVMe"
          ],
          tags: ["storage", "block", "ultra-performance", "all-flash", "critical"],
          observations: "Performance máxima para aplicações que exigem latência mínima e throughput sustentado. Ideal para workloads mission-critical.",
          externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
        },
        {
          id: "2.1.2",
          name: "Storage Ultra - 16K IOPS / 600 MB/s",
          description: "Armazenamento de alta performance com throughput expandível",
          price: 1.10,
          functionality: "Storage SSD enterprise com cache otimizado e possibilidade de burst de throughput para picos de demanda",
          applicability: "Databases enterprise, aplicações críticas, analytics em tempo real, sistemas ERP complexos",
          example: "Database Oracle RAC ou sistema SAP HANA com workloads analytics intensivos",
          characteristics: [
            "Performance: Até 16.000 IOPS",
            "Throughput: 600 MB/s base",
            "Latência: <2ms",
            "Throughput adicional: Até 1000 MB/s (R$1,80/MB)",
            "SSD enterprise com tecnologia de cache avançada"
          ],
          tags: ["storage", "block", "high-performance", "enterprise", "expandable"],
          observations: "Equilibrio entre performance e custo com capacidade de expansão de throughput conforme demanda",
          externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
        },
        {
          id: "2.1.3",
          name: "Storage Premium - Até 12K IOPS / 500 MB/s",
          description: "Armazenamento premium para aplicações empresariais exigentes",
          price: 0.80,
          functionality: "Storage SSD premium com performance consistente e reliability enterprise para aplicações de produção",
          applicability: "Aplicações empresariais críticas, databases de produção, sistemas transacionais, e-commerce",
          example: "Database para plataforma de e-commerce ou sistema ERP corporativo com múltiplos usuários",
          characteristics: [
            "Performance: Até 12.000 IOPS",
            "Throughput: 500 MB/s",
            "Latência: <3ms",
            "Consistency: 99.9% performance SLA",
            "Enterprise SSD com proteção de dados"
          ],
          tags: ["storage", "block", "premium", "enterprise", "consistent"],
          observations: "Performance premium consistente para aplicações de produção que exigem reliability",
          externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
        },
        {
          id: "2.1.4",
          name: "Storage Performance - Até 6K IOPS / 250 MB/s",
          description: "Armazenamento balanceado para aplicações empresariais médias",
          price: 0.60,
          functionality: "Storage SSD com performance otimizada para a maioria dos workloads empresariais sem overhead de features desnecessárias",
          applicability: "Aplicações empresariais médias, websites de alto tráfego, sistemas de gestão, desenvolvimento",
          example: "Sistema de gestão corporativo ou website com banco de dados de médio porte",
          characteristics: [
            "Performance: Até 6.000 IOPS",
            "Throughput: 250 MB/s",
            "Latência: <5ms",
            "Custo-benefício otimizado",
            "SSD confiável para workloads padrão"
          ],
          tags: ["storage", "block", "balanced", "cost-effective", "standard"],
          observations: "Sweet spot entre performance e custo para a maioria das aplicações empresariais",
          externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
        },
        {
          id: "2.1.5",
          name: "Storage Standard - 3K IOPS / 125 MB/s",
          description: "Armazenamento padrão para aplicações básicas e desenvolvimento",
          price: 0.35,
          functionality: "Storage SATA SSD com performance adequada para aplicações básicas e ambientes de desenvolvimento",
          applicability: "Aplicações básicas, desenvolvimento, testing, file servers, backup ativo, staging",
          example: "Ambiente de desenvolvimento ou file server departamental com acesso moderado",
          characteristics: [
            "Performance: Até 3.000 IOPS",
            "Throughput: 125 MB/s",
            "Latência: <10ms",
            "Excelente custo-benefício",
            "SATA SSD confiável"
          ],
          tags: ["storage", "block", "standard", "development", "basic"],
          observations: "Solução econômica para workloads que não exigem alta performance de I/O",
          externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
        },
        {
          id: "2.1.6",
          name: "Storage Snapshot",
          description: "Snapshots pontuais para backup e recovery rápido",
          price: 0.30,
          functionality: "Tecnologia de snapshot copy-on-write para backup incremental e recovery point-in-time instantâneo",
          applicability: "Backup incremental, recovery rápido, testing com dados de produção, compliance",
          example: "Backup incremental de database crítico ou criação de ambiente de testing com dados reais",
          characteristics: [
            "Snapshot instantâneo",
            "Copy-on-write technology",
            "Recovery point-in-time",
            "Compatível com todos os tiers",
            "Deduplicação automática"
          ],
          tags: ["storage", "snapshot", "backup", "recovery", "incremental"],
          observations: "Essencial para estratégias de backup modernas e recovery rápido. Compatível com todos os tipos de storage.",
          externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
        }
      ]
    },
    {
      id: "2.2",
      name: "Armazenamento de Objeto",
      description: "Storage massivo compatível S3 para dados não estruturados",
      items: [
        {
          id: "2.2.1",
          name: "Object Storage S3 Compatible",
          description: "Armazenamento de objetos compatível S3 para dados não estruturados",
          functionality: "API S3-compatible para armazenamento massivo com durabilidade 99.999999999% (11 9's) e escalabilidade ilimitada",
          applicability: "Backup, arquivamento, data lakes, content delivery, aplicações web, mobile apps, big data analytics",
          example: "Repositório para backup de aplicações, CDN para assets de website ou data lake para analytics de big data",
          characteristics: [
            "API S3 100% compatible",
            "Durabilidade 11 9's (99.999999999%)",
            "Escalabilidade ilimitada",
            "Lifecycle policies automáticas",
            "Cross-region replication disponível"
          ],
          tags: ["storage", "object", "s3", "backup", "archive", "scalable"],
          observations: "Solução ideal para grandes volumes de dados não estruturados com compatibilidade total com ecosistema AWS S3",
          externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
        },
        {
          id: "2.2.2",
          name: "Object Storage - Hot Tier",
          description: "Armazenamento de objetos para dados acessados frequentemente",
          functionality: "Tier otimizado para dados com acesso frequente, com baixa latência e alto throughput para aplicações ativas",
          applicability: "Content delivery, aplicações web ativas, mobile apps, streaming de mídia, datasets ativos",
          example: "Storage para aplicação de streaming de vídeo ou repositório de assets para aplicação web de alto tráfego",
          characteristics: [
            "Latência mínima para acesso",
            "Throughput otimizado",
            "Ideal para dados 'quentes'",
            "API S3 compatible",
            "CDN integration ready"
          ],
          tags: ["storage", "object", "hot-tier", "low-latency", "active"],
          observations: "Otimizado para aplicações que exigem acesso frequente e rápido aos dados",
          externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
        },
        {
          id: "2.2.3",
          name: "Object Storage - Cold Tier",
          description: "Armazenamento econômico para dados acessados ocasionalmente",
          functionality: "Tier econômico para dados com acesso esporádico, otimizado para custo com tempo de retrieval aceitável",
          applicability: "Arquivamento ativo, backup de longo prazo, compliance, dados históricos, logs antigos",
          example: "Arquivamento de documentos corporativos ou backup histórico para compliance regulatório",
          characteristics: [
            "Custo otimizado",
            "Retrieval time: minutos",
            "Ideal para dados 'frios'",
            "Lifecycle automation",
            "Compliance ready"
          ],
          tags: ["storage", "object", "cold-tier", "archive", "cost-effective"],
          observations: "Solução econômica para armazenamento de longo prazo com acesso esporádico",
          externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
        },
        {
          id: "2.2.4",
          name: "Object Storage - Glacier Tier",
          description: "Armazenamento de arquivo para dados raramente acessados",
          functionality: "Tier de arquivo profundo para dados raramente acessados, com custo mínimo e retrieval de horas",
          applicability: "Arquivo de longo prazo, compliance regulatório, backup histórico, disaster recovery off-site",
          example: "Arquivo de documentos legais para compliance de 7 anos ou backup histórico para disaster recovery",
          characteristics: [
            "Custo mínimo por GB",
            "Retrieval time: horas",
            "Ideal para arquivo profundo",
            "Compliance e auditoria",
            "Durabilidade máxima"
          ],
          tags: ["storage", "object", "glacier", "archive", "compliance"],
          observations: "Custo mínimo para armazenamento de arquivo profundo e compliance de longo prazo",
          externalLink: "https://www.hostdime.com.br/produtos/cloud-storage/"
        }
      ]
    }
  ]
};
