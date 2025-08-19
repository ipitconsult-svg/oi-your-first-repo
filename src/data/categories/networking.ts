import { Category } from "@/types/catalog";

export const networkingCategory: Category = {
  id: "5",
  name: "NETWORKING",
  description: "Soluções completas de conectividade, redes e comunicação para infraestrutura moderna",
  subcategories: [
    {
      id: "5.1",
      name: "Conectividade Internet",
      description: "Conexões de internet dedicadas e redundantes para máxima disponibilidade",
      items: [
        {
          id: "5.1.1",
          name: "Internet Dedicada 100 Mbps",
          description: "Conexão de internet dedicada com garantia de banda e baixa latência",
          price: 499.00,
          functionality: "Conexão de internet com banda 100% garantida e SLA de disponibilidade",
          applicability: "Empresas que necessitam de conexão confiável e sem compartilhamento",
          example: "Conexão dedicada para escritório com operações críticas ou datacenter local",
          characteristics: [
            "Banda 100% garantida",
            "SLA de disponibilidade 99.9%",
            "Latência máxima garantida",
            "Suporte 24/7",
            "Monitoramento em tempo real"
          ],
          tags: ["internet", "dedicated", "bandwidth", "sla", "business"]
        },
        {
          id: "5.1.2",
          name: "Internet Dedicada 500 Mbps",
          description: "Conexão de internet dedicada de alta performance para aplicações exigentes",
          price: 1499.00,
          functionality: "Conexão de internet dedicada de alta capacidade para aplicações críticas",
          applicability: "Empresas médias a grandes com alta demanda de tráfego e múltiplos serviços",
          example: "Serviços de streaming, cloud computing, backup online ou múltiplas VPNs",
          characteristics: [
            "Banda 100% garantida",
            "SLA de disponibilidade 99.95%",
            "Baixa latência garantida",
            "Suporte premium 24/7",
            "Monitoramento avançado"
          ],
          tags: ["internet", "dedicated", "high-bandwidth", "premium", "business"]
        },
        {
          id: "5.1.3",
          name: "Internet Dedicada 1 Gbps",
          description: "Conexão de internet dedicada de altíssima capacidade para grandes operações",
          price: 2499.00,
          functionality: "Conexão de internet dedicada de capacidade empresarial para operações intensivas",
          applicability: "Grandes empresas, datacenters, provedores de serviços, operações intensivas em rede",
          example: "Datacenter corporativo, serviços de hospedagem, aplicações em nuvem distribuídas",
          characteristics: [
            "Banda 100% garantida",
            "SLA de disponibilidade 99.99%",
            "Mínima latência garantida",
            "Suporte dedicado 24/7",
            "Monitoramento em tempo real com analytics"
          ],
          tags: ["internet", "dedicated", "gigabit", "enterprise", "datacenter"]
        },
        {
          id: "5.1.4",
          name: "Internet Redundante",
          description: "Conexão de internet com redundância de operadoras para máxima disponibilidade",
          price: 1899.00,
          functionality: "Solução de conectividade com dupla abordagem e balanceamento automático",
          applicability: "Empresas que não podem ficar sem internet em nenhuma circunstância",
          example: "Instituições financeiras, e-commerce, serviços críticos online",
          characteristics: [
            "Duas operadoras distintas",
            "Balanceamento automático de carga",
            "Failover instantâneo",
            "SLA de disponibilidade 99.999%",
            "Monitoramento constante de roteamento"
          ],
          tags: ["internet", "redundant", "high-availability", "critical", "failover"]
        },
        {
          id: "5.1.5",
          name: "DDoS Protection",
          description: "Proteção avançada contra ataques de negação de serviço",
          price: 799.00,
          functionality: "Mitigação de ataques DDoS em tempo real com capacidade de absorção massiva",
          applicability: "Sites e serviços online expostos a risco de ataques",
          example: "E-commerce, jogos online, serviços financeiros, sites de alto perfil",
          characteristics: [
            "Proteção contra ataques volumétricos",
            "Mitigação de ataques de camada 7",
            "Filtragem geográfica",
            "Traffic scrubbing",
            "Relatórios detalhados de ataques"
          ],
          tags: ["security", "ddos", "protection", "mitigation", "attack"]
        }
      ]
    },
    {
      id: "5.2",
      name: "IP e BGP",
      description: "Recursos de endereçamento IP e protocolo BGP para autonomia de rede",
      items: [
        {
          id: "5.2.1",
          name: "Bloco IP /29 (5 IPs utilizáveis)",
          description: "Bloco de endereços IPv4 para recursos com necessidade de IPs públicos",
          price: 120.00,
          functionality: "Bloco de endereços IPv4 públicos roteáveis globalmente",
          applicability: "Servidores que precisam ser acessados diretamente da internet",
          example: "Servidores web, email, VPN ou aplicações expostas na internet",
          characteristics: [
            "5 endereços IPs utilizáveis",
            "Roteáveis globalmente",
            "Delegação reversa disponível",
            "Não listados em blacklists",
            "Documentação LACNIC/ARIN"
          ],
          tags: ["ip", "address", "public", "ipv4", "block"]
        },
        {
          id: "5.2.2",
          name: "Bloco IP /28 (14 IPs utilizáveis)",
          description: "Bloco médio de endereços IPv4 para infraestruturas maiores",
          price: 220.00,
          functionality: "Bloco IPv4 de tamanho médio para múltiplos serviços e servidores",
          applicability: "Empresas com múltiplos serviços expostos e necessidade de vários IPs",
          example: "Ambiente com diversos servidores web, mail, aplicações e serviços",
          characteristics: [
            "14 endereços IPs utilizáveis",
            "Roteáveis globalmente",
            "Delegação reversa disponível",
            "Não listados em blacklists",
            "Documentação LACNIC/ARIN"
          ],
          tags: ["ip", "address", "public", "ipv4", "block", "medium"]
        },
        {
          id: "5.2.3",
          name: "Bloco IP /27 (30 IPs utilizáveis)",
          description: "Bloco grande de endereços IPv4 para infraestruturas complexas",
          price: 350.00,
          functionality: "Bloco IPv4 substancial para ambientes enterprise com múltiplos serviços",
          applicability: "Grandes empresas ou provedores de serviço com muitas necessidades de IPs",
          example: "Provedores de hospedagem, grandes ambientes corporativos, serviços de nuvem",
          characteristics: [
            "30 endereços IPs utilizáveis",
            "Roteáveis globalmente",
            "Delegação reversa disponível",
            "Não listados em blacklists",
            "Documentação LACNIC/ARIN"
          ],
          tags: ["ip", "address", "public", "ipv4", "block", "large"]
        },
        {
          id: "5.2.4",
          name: "IPv6 /64",
          description: "Bloco de endereços IPv6 para preparação para o futuro da internet",
          price: 50.00,
          functionality: "Bloco IPv6 para implementação de conectividade de próxima geração",
          applicability: "Organizações que desejam implementar IPv6 em sua infraestrutura",
          example: "Ambientes de rede dual-stack ou preparação para futuro sem IPv4",
          characteristics: [
            "Bloco /64 (trilhões de endereços)",
            "Roteabilidade global",
            "Suporte a configurações modernas",
            "Preparação para futuro da internet",
            "Documentação LACNIC/ARIN"
          ],
          tags: ["ip", "address", "public", "ipv6", "block", "future"]
        },
        {
          id: "5.2.5",
          name: "BGP Full-Route",
          description: "Autonomia de roteamento com BGP e anúncio de blocos próprios",
          price: 400.00,
          functionality: "Implementação de BGP para autonomia de roteamento e redundância avançada",
          applicability: "Organizações com AS próprio e necessidade de controle de roteamento",
          example: "Provedores, grandes empresas com múltiplas conexões e blocos próprios",
          characteristics: [
            "Anúncio de blocos próprios",
            "Recebimento de tabela full-route",
            "Controle de rotas de entrada/saída",
            "Suporte a múltiplos upstreams",
            "Configuração personalizada de políticas"
          ],
          tags: ["bgp", "routing", "autonomous-system", "redundancy", "control"]
        }
      ]
    },
    {
      id: "5.3",
      name: "Cross-Connect",
      description: "Interconexões físicas e virtuais dentro do datacenter e entre parceiros",
      items: [
        {
          id: "5.3.1",
          name: "Cross-Connect Fibra (Single Mode)",
          description: "Interconexão física via fibra single-mode entre racks ou parceiros",
          price: 199.00,
          functionality: "Conexão física de fibra direta para interligação de equipamentos",
          applicability: "Interligação entre racks ou com parceiros dentro do mesmo datacenter",
          example: "Conexão entre seu rack e um provedor de cloud ou telecom no datacenter",
          characteristics: [
            "Fibra single-mode LC-LC",
            "Baixíssima latência",
            "Alta confiabilidade",
            "Instalação profissional",
            "Documentação e testes"
          ],
          tags: ["cross-connect", "fiber", "interconnect", "physical", "datacenter"]
        },
        {
          id: "5.3.2",
          name: "Cross-Connect Cobre (CAT6a)",
          description: "Interconexão física via cabo de cobre CAT6a para curtas distâncias",
          price: 149.00,
          functionality: "Conexão física via cabo de cobre para interligações de curta distância",
          applicability: "Interconexões dentro do mesmo datacenter para distâncias curtas",
          example: "Conexão entre racks adjacentes ou equipamentos próximos",
          characteristics: [
            "Cabo CAT6a certificado",
            "Suporte até 10Gbps",
            "Baixa latência",
            "Instalação profissional",
            "Testes de certificação"
          ],
          tags: ["cross-connect", "copper", "interconnect", "physical", "datacenter"]
        },
        {
          id: "5.3.3",
          name: "Cross-Connect Virtual (VXLAN)",
          description: "Interconexão virtual via VXLAN entre ambientes virtualizados",
          price: 99.00,
          functionality: "Interconexão via software definida por VXLAN entre ambientes",
          applicability: "Conexão entre ambientes virtualizados sem necessidade de cabo físico",
          example: "Conexão entre seu ambiente virtual e um cloud provider no mesmo datacenter",
          characteristics: [
            "Overlay network via VXLAN",
            "Performance próxima ao físico",
            "Configuração flexível",
            "Provisionamento rápido",
            "Monitoramento integrado"
          ],
          tags: ["cross-connect", "virtual", "vxlan", "sdn", "overlay"]
        },
        {
          id: "5.3.4",
          name: "Metro Connect",
          description: "Interconexão de fibra entre datacenters na mesma região metropolitana",
          price: 999.00,
          functionality: "Conexão dedicada de fibra entre datacenters na mesma região",
          applicability: "Organizações com presença em múltiplos datacenters na mesma cidade",
          example: "Conexão dedicada entre seu ambiente principal e DR na mesma cidade",
          characteristics: [
            "Circuito dedicado de fibra",
            "Latência ultra-baixa",
            "Banda garantida",
            "SLA de disponibilidade 99.99%",
            "Diversidade de rotas opcional"
          ],
          tags: ["metro-connect", "datacenter", "fiber", "dedicated", "low-latency"]
        },
        {
          id: "5.3.5",
          name: "Exchange Port (IX.br)",
          description: "Porta de conexão com o Internet Exchange brasileiro",
          price: 350.00,
          functionality: "Conexão direta com o IX.br para troca de tráfego com outros AS",
          applicability: "Organizações com AS próprio que desejam otimizar rotas e custos",
          example: "Provedores, grandes empresas buscando melhor conectividade nacional",
          characteristics: [
            "Porta dedicada no IX.br",
            "Otimização de rotas nacionais",
            "Redução de custos de trânsito",
            "Menor latência para destinos brasileiros",
            "Configuração BGP incluída"
          ],
          tags: ["ix", "exchange", "bgp", "peering", "national"]
        }
      ]
    }
  ]
};
