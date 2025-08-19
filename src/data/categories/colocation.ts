import { Category } from "@/types/catalog";

export const colocationCategory: Category = {
  id: "7",
  name: "COLOCATION",
  description: "Serviços de hospedagem física para equipamentos de TI em datacenters de alta disponibilidade",
  subcategories: [
    {
      id: "7.1",
      name: "Espaço de RACK",
      description: "Espaços físicos em datacenter para hospedagem de equipamentos com diferentes configurações",
      items: [
        {
          id: "7.1.1",
          name: "Colocation 1U - JPA",
          description: "Hospedagem de servidor 1U no datacenter de João Pessoa",
          price: 399.00,
          functionality: "Espaço físico de 1U em rack compartilhado com energia, refrigeração e conectividade básica",
          applicability: "Pequenas empresas, startups, aplicações básicas que necessitam de servidor único em ambiente profissional",
          example: "Servidor web para site corporativo, servidor de email, pequena aplicação ou desenvolvimento",
          characteristics: [
            "1U de espaço físico",
            "1 IP público incluído",
            "60Mbps de banda garantida",
            "Energia incluída no preço",
            "Refrigeração redundante",
            "Setup cortesia (sem taxa de instalação)",
            "Acesso 24/7 mediante agendamento"
          ],
          tags: ["colocation", "1u", "jpa", "small", "basic"],
          observations: "Valor mínimo de oferta: R$ 349,00. Ideal para empresas que estão começando ou precisam de presença física no Nordeste"
        },
        {
          id: "7.1.2",
          name: "Colocation 1U - SPO",
          description: "Hospedagem de servidor 1U no datacenter de São Paulo",
          price: 599.00,
          functionality: "Espaço físico de 1U em rack compartilhado com energia, refrigeração e conectividade em São Paulo",
          applicability: "Empresas que necessitam presença no principal hub tecnológico brasileiro com conectividade premium",
          example: "Servidor para aplicação nacional, API para mobile apps, serviços para região Sudeste",
          characteristics: [
            "1U de espaço físico",
            "1 IP público incluído",
            "60Mbps de banda garantida",
            "Energia incluída no preço",
            "Refrigeração redundante",
            "Setup cortesia (sem taxa de instalação)",
            "Conectividade premium SPO",
            "Acesso 24/7 mediante agendamento"
          ],
          tags: ["colocation", "1u", "spo", "premium", "hub"],
          observations: "Valor mínimo de oferta: R$ 549,00. Localização estratégica no principal centro tecnológico brasileiro"
        },
        {
          id: "7.1.3",
          name: "Colocation 1/2 Rack - JPA",
          description: "Hospedagem de meio rack (21U) no datacenter de João Pessoa",
          price: 6490.00,
          functionality: "Espaço de 21U em rack semi-dedicado com energia, conectividade e infraestrutura completa",
          applicability: "Empresas médias com múltiplos equipamentos, necessidade de escalabilidade e presença no Nordeste",
          example: "Infraestrutura para provedor regional, empresa com múltiplos servidores, ambiente de desenvolvimento/produção",
          characteristics: [
            "21U de espaço físico",
            "1 IP público incluído",
            "200Mbps de banda garantida",
            "1kVA de energia incluído",
            "PDU Gerenciável 32A incluído",
            "Refrigeração redundante",
            "Acesso 24/7 mediante agendamento",
            "Setup: R$ 8.000,00"
          ],
          tags: ["colocation", "half-rack", "jpa", "medium", "managed-pdu"],
          observations: "Inclui PDU Gerenciável 32A. Não inclui bandeja. Setup de R$ 8.000,00"
        },
        {
          id: "7.1.4",
          name: "Colocation 1/2 Rack - SPO",
          description: "Hospedagem de meio rack no datacenter de São Paulo",
          price: 0,
          functionality: "Espaço de meio rack em São Paulo com infraestrutura premium para empresas médias",
          applicability: "Empresas que necessitam presença no hub de São Paulo com infraestrutura intermediária",
          example: "Filial de empresa multinacional, escritório regional Sudeste, backup de infraestrutura",
          characteristics: [
            "Espaço de meio rack",
            "Infraestrutura premium SPO",
            "Conectividade de alta qualidade",
            "Acesso ao ecossistema tecnológico de SP",
            "Refrigeração redundante",
            "Acesso 24/7 mediante agendamento"
          ],
          tags: ["colocation", "half-rack", "spo", "premium", "consultation"],
          observations: "Valores sob consulta com a direção. Localização premium em São Paulo"
        },
        {
          id: "7.1.5",
          name: "Colocation Rack Full - JPA",
          description: "Hospedagem de rack completo (44U) no datacenter de João Pessoa",
          price: 8000.00,
          functionality: "Rack completo dedicado de 44U com infraestrutura completa e bloco IP dedicado",
          applicability: "Grandes empresas, provedores de serviços, empresas com infraestrutura extensa no Nordeste",
          example: "Provedor de internet regional, empresa com datacenter próprio, infraestrutura crítica corporativa",
          characteristics: [
            "44U de espaço físico dedicado",
            "Bloco /29 IP (6 IPs utilizáveis)",
            "200Mbps de banda garantida",
            "1kVA de energia incluído",
            "PDU Gerenciável 32A incluído",
            "Rack com fechadura dedicada",
            "Refrigeração redundante",
            "Setup: R$ 8.000,00"
          ],
          tags: ["colocation", "full-rack", "jpa", "dedicated", "enterprise"],
          observations: "Inclui PDU Gerenciável 32A. Não inclui bandeja. Setup de R$ 8.000,00. Ideal para operações de grande porte"
        },
        {
          id: "7.1.6",
          name: "Colocation Rack Full - SPO",
          description: "Hospedagem de rack completo (44U) no datacenter de São Paulo",
          price: 0,
          functionality: "Rack completo dedicado em São Paulo com bloco IP e infraestrutura premium",
          applicability: "Grandes empresas, multinacionais, provedores que necessitam presença premium em São Paulo",
          example: "Headquarters de multinacional, grande provedor nacional, infraestrutura financeira crítica",
          characteristics: [
            "44U de espaço físico dedicado",
            "Bloco /29 IP (6 IPs utilizáveis)",
            "200Mbps de banda garantida",
            "1kVA de energia incluído",
            "Localização premium em São Paulo",
            "Conectividade de primeira linha",
            "Acesso ao ecossistema corporativo SP",
            "Refrigeração redundante"
          ],
          tags: ["colocation", "full-rack", "spo", "premium", "enterprise"],
          observations: "Valores sob consulta com a direção. Localização estratégica no principal hub brasileiro"
        }
      ]
    },
    {
      id: "7.2",
      name: "Colocation Addons",
      description: "Acessórios e serviços adicionais para complementar a hospedagem em colocation",
      items: [
        {
          id: "7.2.1",
          name: "Cabo de Força C13-C14 10A",
          description: "Cabo de força padrão para equipamentos de TI",
          price: 60.00,
          functionality: "Cabo de alimentação padrão C13-C14 de 10A para conexão de equipamentos ao PDU",
          applicability: "Todos os equipamentos que necessitam alimentação padrão IEC",
          example: "Servidores, switches, firewalls, storages com entrada C14",
          characteristics: [
            "Conector C13-C14",
            "Capacidade 10A",
            "Comprimento padrão 1,8m",
            "Certificado para datacenter",
            "Qualidade industrial"
          ],
          tags: ["addon", "power-cable", "c13-c14", "datacenter", "equipment"],
          observations: "Taxa única aplicada na ativação do serviço. Essencial para conectar equipamentos ao PDU"
        },
        {
          id: "7.2.2",
          name: "Bandeja Fixa 1U",
          description: "Bandeja fixa de 1U para instalação de equipamentos não-rackáveis",
          price: 349.00,
          functionality: "Suporte físico de 1U para instalação de equipamentos que não possuem suporte de rack",
          applicability: "Equipamentos desktop, mini-PCs, dispositivos de rede pequenos, conversores",
          example: "Mini-PC industrial, switch desktop, conversor de mídia, appliance pequeno",
          characteristics: [
            "Bandeja fixa de 1U",
            "Suporte até 15kg",
            "Ventilação adequada",
            "Furação padrão 19\"",
            "Acabamento profissional"
          ],
          tags: ["addon", "shelf", "1u", "equipment", "mounting"],
          observations: "Taxa única aplicada na ativação do serviço. Necessária para equipamentos não-rackáveis"
        },
        {
          id: "7.2.3",
          name: "Guia de Cabos",
          description: "Sistema de organização e passagem de cabos no rack",
          price: 289.89,
          functionality: "Sistema de guias para organização profissional e proteção de cabos",
          applicability: "Todos os racks que necessitam organização profissional de cabeamento",
          example: "Organização de cabos de rede, energia, KVM em racks com múltiplos equipamentos",
          characteristics: [
            "Sistema de guias verticais",
            "Organização profissional",
            "Proteção de cabos",
            "Facilita manutenção",
            "Melhora ventilação"
          ],
          tags: ["addon", "cable-management", "organization", "rack", "professional"],
          observations: "Taxa única aplicada na ativação do serviço. Fundamental para organização profissional"
        },
        {
          id: "7.2.4",
          name: "Porca Gaiola Parafuso M5",
          description: "Porca gaiola M5 para fixação de equipamentos em rack",
          price: 1.59,
          functionality: "Porca gaiola padrão M5 para fixação de equipamentos em trilhos de rack 19\"",
          applicability: "Fixação de qualquer equipamento em rack padrão 19\"",
          example: "Fixação de servidores, switches, patch panels, organizadores",
          characteristics: [
            "Padrão M5",
            "Compatível rack 19\"",
            "Aço galvanizado",
            "Fácil instalação",
            "Alta resistência"
          ],
          tags: ["addon", "mounting", "rack", "hardware", "m5"],
          observations: "Taxa única aplicada na ativação do serviço. Vendida individualmente conforme necessidade"
        },
        {
          id: "7.2.5",
          name: "Meia Bandeja Fixa",
          description: "Bandeja fixa de meio rack para equipamentos menores",
          price: 149.99,
          functionality: "Suporte físico de meia largura para equipamentos compactos",
          applicability: "Equipamentos pequenos, dispositivos de rede compactos, appliances menores",
          example: "Switch pequeno, roteador, firewall compacto, dispositivo IoT industrial",
          characteristics: [
            "Meia largura do rack",
            "Suporte até 8kg",
            "Ventilação otimizada",
            "Economia de espaço",
            "Múltiplas unidades por U"
          ],
          tags: ["addon", "half-shelf", "compact", "space-saving", "small"],
          observations: "Taxa única aplicada na ativação do serviço. Ideal para equipamentos compactos"
        },
        {
          id: "7.2.6",
          name: "Recebimento de Mercadorias",
          description: "Serviço de recebimento e conferência de equipamentos no datacenter",
          price: 150.00,
          functionality: "Recebimento, conferência e notificação de chegada de equipamentos",
          applicability: "Todas as entregas de equipamentos, peças e materiais para o datacenter",
          example: "Recebimento de servidor novo, peças de reposição, equipamentos de rede",
          characteristics: [
            "Recebimento profissional",
            "Conferência de integridade",
            "Notificação imediata",
            "Armazenamento temporário",
            "Registro de recebimento"
          ],
          tags: ["addon", "receiving", "equipment", "delivery", "service"],
          observations: "Por cada entrega recebida. Garante segurança e controle de equipamentos"
        },
        {
          id: "7.2.7",
          name: "Armazenamento de Mercadorias",
          description: "Serviço de armazenamento temporário de equipamentos no datacenter",
          price: 150.00,
          functionality: "Armazenamento seguro e temporário de equipamentos em área controlada",
          applicability: "Equipamentos aguardando instalação, peças de reposição, materiais temporários",
          example: "Servidor aguardando instalação, peças para manutenção futura, equipamentos de backup",
          characteristics: [
            "Área segura e controlada",
            "Controle de temperatura",
            "Acesso restrito",
            "Identificação clara",
            "Inventário atualizado"
          ],
          tags: ["addon", "storage", "equipment", "temporary", "secure"],
          observations: "Cortesia se retirada ocorrer no mesmo dia e for direto ao rack. Ideal para logística de equipamentos"
        }
      ]
    }
  ]
};
