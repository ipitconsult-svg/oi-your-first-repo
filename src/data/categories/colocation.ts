import { Category } from "@/types/catalog";

export const colocationCategory: Category = {
  id: "7",
  name: "COLOCATION",
  description: "Serviços de hospedagem física para equipamentos de TI em datacenters de alta disponibilidade",
  subcategories: [
    {
      id: "7.1",
      name: "Racks e Espaços",
      description: "Espaços físicos em datacenter para hospedagem de equipamentos",
      items: [
        {
          id: "7.1.1",
          name: "Quarter Rack (10U)",
          description: "Espaço de 10U em rack compartilhado em datacenter Tier III",
          price: 699.00,
          functionality: "Espaço físico de 10U em rack compartilhado com energia e refrigeração",
          applicability: "Empresas com necessidade de hospedar poucos equipamentos em ambiente profissional",
          example: "Hospedagem de 2-3 servidores, um switch e um firewall em ambiente seguro",
          characteristics: [
            "10U de espaço utilizável",
            "2kVA de energia incluídos",
            "Refrigeração redundante",
            "Acesso 24/7 mediante agendamento",
            "Conectividade básica incluída"
          ],
          tags: ["colocation", "rack", "datacenter", "hosting", "physical"]
        },
        {
          id: "7.1.2",
          name: "Half Rack (21U)",
          description: "Metade de um rack standard (21U) em datacenter Tier III",
          price: 1299.00,
          functionality: "Espaço físico de 21U em rack com energia e refrigeração redundantes",
          applicability: "Empresas médias com múltiplos equipamentos para hospedar",
          example: "Hospedagem de 4-8 servidores, storage, networking em ambiente seguro",
          characteristics: [
            "21U de espaço utilizável",
            "3.5kVA de energia incluídos",
            "Refrigeração N+1",
            "Acesso 24/7 mediante agendamento",
            "Conectividade básica incluída"
          ],
          tags: ["colocation", "rack", "datacenter", "hosting", "physical"]
        },
        {
          id: "7.1.3",
          name: "Full Rack (42U)",
          description: "Rack completo dedicado (42U) em datacenter Tier III",
          price: 2299.00,
          functionality: "Rack completo de 42U com energia e refrigeração redundantes",
          applicability: "Empresas com muitos equipamentos ou necessidade de isolamento físico",
          example: "Infraestrutura completa com servidores, storage, networking em rack dedicado",
          characteristics: [
            "42U de espaço utilizável",
            "6kVA de energia incluídos",
            "Refrigeração N+1",
            "Acesso 24/7 mediante agendamento",
            "Rack com fechadura exclusiva",
            "Conectividade básica incluída"
          ],
          tags: ["colocation", "rack", "datacenter", "hosting", "physical", "dedicated"]
        },
        {
          id: "7.1.4",
          name: "High Density Rack (42U)",
          description: "Rack completo para equipamentos de alta densidade energética",
          price: 3499.00,
          functionality: "Rack 42U especial para equipamentos de alto consumo energético",
          applicability: "Empresas com servidores de alta densidade, GPU ou HPC",
          example: "Servidores para AI/ML, renderização, HPC ou equipamentos de alta potência",
          characteristics: [
            "42U de espaço utilizável",
            "15kVA de energia incluídos",
            "Refrigeração de alta capacidade",
            "Corredores quente/frio isolados",
            "Acesso 24/7 mediante agendamento",
            "Conectividade básica incluída"
          ],
          tags: ["colocation", "high-density", "datacenter", "hpc", "gpu"]
        },
        {
          id: "7.1.5",
          name: "Cage Space (4+ Racks)",
          description: "Espaço isolado com gaiola de segurança para múltiplos racks",
          price: 7999.00,
          functionality: "Área exclusiva e fisicamente isolada para múltiplos racks",
          applicability: "Grandes empresas, financeiras ou com requisitos de isolamento físico",
          example: "Ambiente bancário, governo ou empresas com alta conformidade regulatória",
          characteristics: [
            "Espaço para 4+ racks completos",
            "Gaiola de segurança dedicada",
            "Sistema de controle de acesso exclusivo",
            "Circuito fechado de TV dedicado",
            "Opções de energia customizadas",
            "Conectividade redundante"
          ],
          tags: ["colocation", "cage", "security", "compliance", "enterprise"]
        }
      ]
    },
    {
      id: "7.2",
      name: "Smart Hands",
      description: "Serviços de mãos remotas para operações físicas no datacenter",
      items: [
        {
          id: "7.2.1",
          name: "Smart Hands Basic (1h)",
          description: "Serviço de mãos remotas por 1 hora para tarefas simples",
          price: 129.00,
          functionality: "Técnico qualificado executando tarefas físicas sob sua orientação",
          applicability: "Empresas com equipamentos em colocation sem equipe local",
          example: "Reboot físico, troca de cabos, verificação visual, inserção de mídia",
          characteristics: [
            "1 hora de técnico dedicado",
            "Disponível 24/7",
            "Agendamento com 4h de antecedência",
            "Relatório fotográfico opcional",
            "Comunicação em tempo real"
          ],
          tags: ["smart-hands", "remote-hands", "datacenter", "support", "physical"]
        },
        {
          id: "7.2.2",
          name: "Smart Hands Advanced (4h)",
          description: "Serviço de mãos remotas por 4 horas para tarefas complexas",
          price: 399.00,
          functionality: "Técnico qualificado para operações mais complexas e prolongadas",
          applicability: "Instalações, substituições ou troubleshooting complexo",
          example: "Instalação de novos servidores, cabeamento estruturado, migração física",
          characteristics: [
            "4 horas de técnico dedicado",
            "Disponível 24/7",
            "Agendamento com 12h de antecedência",
            "Relatório detalhado",
            "Documentação fotográfica"
          ],
          tags: ["smart-hands", "installation", "datacenter", "support", "physical"]
        },
        {
          id: "7.2.3",
          name: "Emergency Smart Hands",
          description: "Serviço de emergência de mãos remotas com resposta imediata",
          price: 199.00,
          functionality: "Atendimento de emergência com técnico em até 30 minutos",
          applicability: "Situações críticas que exigem intervenção física imediata",
          example: "Falhas graves, problemas de conectividade críticos ou emergências",
          characteristics: [
            "1 hora de técnico dedicado",
            "Resposta em até 30 minutos",
            "Disponível 24/7/365",
            "Prioridade máxima",
            "Relatório de incidente"
          ],
          tags: ["emergency", "smart-hands", "critical", "support", "rapid-response"]
        },
        {
          id: "7.2.4",
          name: "Cabeamento Estruturado",
          description: "Serviço de instalação e organização de cabeamento em rack",
          price: 599.00,
          functionality: "Organização e instalação profissional de cabos em seu rack",
          applicability: "Racks com cabeamento desorganizado ou novas instalações",
          example: "Instalação organizada de cabos de rede, energia, KVM com etiquetagem",
          characteristics: [
            "Organização profissional",
            "Material incluso (velcros, etiquetas)",
            "Documentação completa",
            "Etiquetagem e identificação",
            "Certificação de cabos de rede"
          ],
          tags: ["cabling", "structured", "organization", "datacenter", "installation"]
        },
        {
          id: "7.2.5",
          name: "Pacote Smart Hands (20h/mês)",
          description: "Pacote mensal de 20 horas de serviço de mãos remotas",
          price: 1799.00,
          functionality: "Banco de horas mensal para serviços de mãos remotas",
          applicability: "Empresas com necessidade frequente de intervenções físicas",
          example: "Operações frequentes como instalações, trocas, verificações físicas",
          characteristics: [
            "20 horas mensais",
            "Disponível 24/7",
            "Agendamento com 2h de antecedência",
            "Transferência de até 5h para o mês seguinte",
            "Relatórios consolidados"
          ],
          tags: ["smart-hands", "monthly", "support", "datacenter", "bundle"]
        }
      ]
    },
    {
      id: "7.3",
      name: "Energia e Refrigeração",
      description: "Serviços adicionais de energia e refrigeração para equipamentos em colocation",
      items: [
        {
          id: "7.3.1",
          name: "Circuito de Energia A+B (2kVA)",
          description: "Circuito de energia redundante A+B com 2kVA total",
          price: 399.00,
          functionality: "Energia redundante através de fontes independentes para alta disponibilidade",
          applicability: "Equipamentos críticos que exigem redundância energética",
          example: "Servidores com fontes redundantes, switches críticos, storage",
          characteristics: [
            "Dois circuitos independentes",
            "Total de 2kVA disponíveis",
            "PDUs redundantes",
            "Fontes independentes (UPS diferentes)",
            "Medição individual de consumo"
          ],
          tags: ["power", "redundant", "datacenter", "high-availability", "infrastructure"]
        },
        {
          id: "7.3.2",
          name: "Circuito de Energia A+B (5kVA)",
          description: "Circuito de energia redundante A+B com 5kVA total",
          price: 899.00,
          functionality: "Energia redundante de maior capacidade para racks com mais equipamentos",
          applicability: "Racks com múltiplos equipamentos críticos ou maior consumo",
          example: "Racks completos com servidores, storage e networking redundantes",
          characteristics: [
            "Dois circuitos independentes",
            "Total de 5kVA disponíveis",
            "PDUs redundantes",
            "Fontes independentes (UPS diferentes)",
            "Medição individual de consumo"
          ],
          tags: ["power", "redundant", "datacenter", "high-availability", "infrastructure"]
        },
        {
          id: "7.3.3",
          name: "Energia Adicional (por kVA)",
          description: "Capacidade energética adicional por kVA para equipamentos de maior consumo",
          price: 189.00,
          functionality: "Ampliação da capacidade energética disponível por kVA adicional",
          applicability: "Equipamentos que ultrapassam a franquia de energia do plano base",
          example: "Servidores de alta densidade, GPU farms, equipamentos de alto consumo",
          characteristics: [
            "1kVA adicional de capacidade",
            "Compatível com circuitos A ou A+B",
            "Medição precisa de consumo",
            "Faturamento mensal fixo",
            "Sem tarifas adicionais por uso"
          ],
          tags: ["power", "additional", "consumption", "datacenter", "high-density"]
        },
        {
          id: "7.3.4",
          name: "Refrigeração Dedicada",
          description: "Solução de refrigeração dedicada para equipamentos de alta densidade",
          price: 799.00,
          functionality: "Sistema de refrigeração específico para cargas térmicas elevadas",
          applicability: "Equipamentos que geram calor acima da média ou clusters de alta densidade",
          example: "GPU servers, clusters de HPC, equipamentos legacy de alto calor",
          characteristics: [
            "Fluxo de ar direcionado",
            "Sistema in-row opcional",
            "Monitoramento térmico dedicado",
            "Prevenção de pontos quentes",
            "Distribuição otimizada de ar frio"
          ],
          tags: ["cooling", "high-density", "thermal", "datacenter", "infrastructure"]
        },
        {
          id: "7.3.5",
          name: "Monitoramento de Energia",
          description: "Sistema avançado de monitoramento de consumo energético",
          price: 149.00,
          functionality: "Monitoramento detalhado e em tempo real do consumo energético",
          applicability: "Empresas que precisam controlar e otimizar consumo de energia",
          example: "Controle financeiro, sustentabilidade, auditoria de consumo",
          characteristics: [
            "Medição em tempo real",
            "Granularidade por tomada",
            "Dashboard personalizado",
            "Alertas de consumo",
            "Relatórios detalhados"
          ],
          tags: ["monitoring", "power", "energy", "efficiency", "datacenter"]
        }
      ]
    }
  ]
};
