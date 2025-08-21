import { Category } from "@/types/catalog";

export const networkingCategory: Category = {
  id: "5",
  name: "NETWORKING",
  description: "Soluções completas de conectividade, redes e comunicação para infraestrutura moderna",
  subcategories: [
    {
      id: "5.1",
      name: "Cross Connection",
      description: "Interconexões dedicadas LAN to LAN e Server to Server",
      items: [],
      subcategories: [
        {
          id: "5.1.1",
          name: "Cross Connection (LAN to LAN)",
          description: "Interconexão dedicada ponto-a-ponto fornecida por operadoras de telecom",
          items: [
            {
              id: "5.1.1.1",
              name: "Cross Connect LAN to LAN - JPA",
              description: "Ponte digital privada entre seu escritório e o datacenter - como ter um túnel secreto só seu",
              price: 1200.00,
              functionality: "Link dedicado exclusivo que conecta diretamente seu escritório ao datacenter, sem passar pela internet pública - é como ter uma 'estrada privada'",
              applicability: "Empresas que precisam de conexão super segura e rápida entre escritório e datacenter, especialmente dados sensíveis ou backup em tempo real",
              example: "Escritório em Recife conectado diretamente ao datacenter JPA para acessar sistemas como se estivessem na sala ao lado",
              characteristics: [
                "Link dedicado ponto-a-ponto",
                "Operadora de escolha do cliente",
                "Avaliação de viabilidade técnica",
                "Disponível para DC JPA",
                "Operadoras: Mob Telecom, 1Telecom, Tely, Cabo Telecom"
              ],
              tags: ["cross-connect", "lan-to-lan", "jpa", "dedicated", "telecom"],
              observations: "Operadoras disponíveis em Recife/PE: Mob Telecom, 1Telecom, Tely. Em Natal/RN: Cabo Telecom, 1Telecom, Tely"
            },
            {
              id: "5.1.1.2",
              name: "Cross Connect LAN to LAN - SPO",
              description: "Conexão expressa privada para o coração financeiro do Brasil - seu escritório conectado ao principal hub tecnológico",
              price: 1350.00,
              functionality: "Link dedicado que transforma seus servidores em São Paulo numa extensão da sua rede local - velocidade garantida e segurança máxima",
              applicability: "Empresas nacionais ou multinacionais que precisam de conectividade premium com o principal datacenter financeiro/tecnológico do país",
              example: "Matriz em São Paulo ou filial conectada diretamente ao datacenter SPO, eliminando dependência da internet comum",
              characteristics: [
                "Link dedicado ponto-a-ponto",
                "Operadora de escolha do cliente",
                "Avaliação de viabilidade técnica",
                "Disponível para DC SPO",
                "Necessário informar provedor do L2L"
              ],
              tags: ["cross-connect", "lan-to-lan", "spo", "dedicated", "telecom"],
              observations: "Necessário informar qual provedor será utilizado. Cross connect oferecido apenas se o provedor já tiver abordagem na infraestrutura de SPO"
            }
          ]
        },
        {
          id: "5.1.2",
          name: "Cross Connection (Server to Server)",
          description: "Interconexões físicas entre servidores dentro do datacenter",
          items: [],
          subcategories: [
            {
              id: "5.1.2.1",
              name: "DC JPA",
              description: "Cross connects server to server no datacenter de João Pessoa",
              items: [
                {
                  id: "5.1.2.1.1",
                  name: "Cross Connect Server to Server JPA - Fibra",
                  description: "Cabo de fibra ótica dedicado entre seus servidores - velocidade da luz para comunicação entre máquinas",
                  price: 600.00,
                  functionality: "Conexão direta por fibra ótica entre seus servidores no datacenter - como ter uma 'autoestrada de dados' particular",
                  applicability: "Aplicações que precisam trocar muitos dados entre servidores rapidamente - databases, clusters, replicação",
                  example: "Servidor web conectado ao servidor de banco de dados com latência mínima para aplicações ultra-rápidas",
                  characteristics: [
                    "Conexão via fibra ótica",
                    "Alta performance e baixa latência",
                    "Disponível no DC JPA",
                    "Conexão física dedicada",
                    "Instalação profissional"
                  ],
                  tags: ["cross-connect", "server-to-server", "jpa", "fiber", "high-performance"]
                },
                {
                  id: "5.1.2.1.2",
                  name: "Cross Connect Server to Server JPA - UTP",
                  description: "Cabo de rede dedicado entre servidores - conexão econômica e confiável para necessidades básicas",
                  price: 200.00,
                  functionality: "Conexão direta via cabo de rede comum entre servidores - simples, barato e eficaz para comunicação básica",
                  applicability: "Comunicação entre servidores que não exige alta velocidade - gerenciamento, monitoramento, backups básicos",
                  example: "Conexão de gerenciamento entre servidores ou link de backup para redundância simples",
                  characteristics: [
                    "Conexão via cabo UTP",
                    "Solução econômica",
                    "Disponível no DC JPA",
                    "Conexão física dedicada",
                    "Instalação profissional"
                  ],
                  tags: ["cross-connect", "server-to-server", "jpa", "utp", "economical"]
                }
              ]
            },
            {
              id: "5.1.2.2",
              name: "DC SPO",
              description: "Cross connects server to server no datacenter de São Paulo",
              items: [
                {
                  id: "5.1.2.2.1",
                  name: "Cross Connect Server to Server SPO - Fibra",
                  description: "Interconexão via fibra ótica entre servidores no DC SPO",
                  price: 1350.00,
                  functionality: "Conexão direta via fibra ótica entre equipamentos do cliente no datacenter",
                  applicability: "Interconexão de alta performance entre servidores no mesmo datacenter",
                  example: "Conexão entre cluster de servidores ou storage dedicado",
                  characteristics: [
                    "Conexão via fibra ótica",
                    "Alta performance e baixa latência",
                    "Disponível no DC SPO",
                    "Conexão física dedicada",
                    "Instalação profissional"
                  ],
                  tags: ["cross-connect", "server-to-server", "spo", "fiber", "high-performance"]
                },
                {
                  id: "5.1.2.2.2",
                  name: "Cross Connect Server to Server SPO - UTP",
                  description: "Interconexão via cabo UTP entre servidores no DC SPO",
                  price: 990.00,
                  functionality: "Conexão direta via cabo UTP entre equipamentos do cliente no datacenter",
                  applicability: "Interconexão entre servidores no mesmo datacenter com custo reduzido",
                  example: "Conexão de gerenciamento ou aplicações de menor demanda",
                  characteristics: [
                    "Conexão via cabo UTP",
                    "Custo reduzido comparado à fibra",
                    "Disponível no DC SPO",
                    "Conexão física dedicada",
                    "Instalação profissional"
                  ],
                  tags: ["cross-connect", "server-to-server", "spo", "utp", "cost-effective"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "5.2",
      name: "Switch Port (LAN)",
      description: "Portas de switch compartilhadas via Virtual Chassis para alta disponibilidade",
      items: [
        {
          id: "5.2.1",
          name: "Switch Port LAN 10G",
          description: "Porta de switch 10 Gigabit compartilhada via Virtual Chassis",
          price: 250.00,
          functionality: "Porta compartilhada via Virtual Chassis com gerência exclusiva NSOBR",
          applicability: "Clientes com necessidade de alta disponibilidade ou poucas portas",
          example: "Conexão de servidor com necessidade de 10Gbps ou ambiente com HA",
          characteristics: [
            "Velocidade 10 Gigabit",
            "Portas compartilhadas via Virtual Chassis",
            "Gerência exclusiva NSOBR",
            "Addon por número de portas",
            "Alta disponibilidade"
          ],
          tags: ["switch-port", "10g", "virtual-chassis", "high-availability", "managed"]
        },
        {
          id: "5.2.2",
          name: "Switch Port LAN 1G",
          description: "Porta de switch 1 Gigabit compartilhada via Virtual Chassis",
          price: 150.00,
          functionality: "Porta compartilhada via Virtual Chassis com gerência exclusiva NSOBR",
          applicability: "Clientes com necessidade de alta disponibilidade ou poucas portas com menor demanda",
          example: "Conexão de servidor padrão ou equipamento de gerenciamento",
          characteristics: [
            "Velocidade 1 Gigabit",
            "Portas compartilhadas via Virtual Chassis",
            "Gerência exclusiva NSOBR",
            "Addon por número de portas",
            "Custo-benefício otimizado"
          ],
          tags: ["switch-port", "1g", "virtual-chassis", "high-availability", "managed"]
        }
      ]
    },
    {
      id: "5.3",
      name: "Bandwidth/Banda",
      description: "Largura de banda disponível nos datacenters com conectividade otimizada",
      items: [
        {
          id: "5.3.1",
          name: "Banda Disponível AS JPA",
          description: "Largura de banda no datacenter JPA com múltiplas conexões redundantes",
          price: 500.00,
          functionality: "Porta 10Gbps + 1Gbps padrão com 320TB de tráfego incluído (cobrança 95th percentile)",
          applicability: "Empresas que necessitam de alta largura de banda com redundância",
          example: "Aplicações de streaming, backup online ou serviços de alta demanda",
          characteristics: [
            "Porta 10Gbps + 1Gbps padrão",
            "320TB incluídos (95th percentile)",
            "Total: 98Gbps disponível",
            "ASN 53055 (HostDime Brasil)",
            "Múltiplas conexões redundantes",
            "Conectividade com IX.br (10Gbps)"
          ],
          tags: ["bandwidth", "jpa", "high-capacity", "redundant", "95th-percentile"],
          observations: "Conectividade: TELY (2x40Gb), ALGAR (10Gb/4Gb), MOB (1Gb), 1TELECOM (10Gb/3Gb), IX.br (10Gb)"
        },
        {
          id: "5.3.2",
          name: "Banda Disponível AS SPO",
          description: "Largura de banda no datacenter SPO com conectividade premium",
          price: 500.00,
          functionality: "Porta 10Gbps + 1Gbps padrão com 320TB de tráfego incluído (cobrança 95th percentile)",
          applicability: "Empresas que necessitam de conectividade premium em São Paulo",
          example: "Aplicações corporativas, serviços financeiros ou alta demanda de conectividade",
          characteristics: [
            "Porta 10Gbps + 1Gbps padrão",
            "320TB incluídos (95th percentile)",
            "Conectividade premium SPO",
            "ASN dedicado",
            "Múltiplas operadoras",
            "Hub de conectividade nacional"
          ],
          tags: ["bandwidth", "spo", "premium", "financial", "95th-percentile"]
        }
      ]
    },
    {
      id: "5.4",
      name: "Bloco de IP",
      description: "Blocos de endereços IPv4 para diferentes datacenters e necessidades",
      items: [],
      subcategories: [
        {
          id: "5.4.1",
          name: "DC JPA e SPO",
          description: "Blocos de IP para datacenters brasileiros (João Pessoa e São Paulo)",
          items: [
            {
              id: "5.4.1.1",
              name: "Bloco IP /30 (2 IPs utilizáveis)",
              description: "Bloco mínimo para conexões ponto-a-ponto",
              price: 140.00,
              functionality: "Menor bloco disponível para conexões diretas ou links dedicados",
              applicability: "Conexões ponto-a-ponto, links dedicados, configurações mínimas",
              example: "Conexão dedicada entre dois pontos ou link de interconexão",
              characteristics: [
                "4 IPs totais (2 utilizáveis)",
                "Ideal para conexões P2P",
                "Disponível em JPA e SPO",
                "Roteamento direto",
                "Configuração simples"
              ],
              tags: ["ip", "block", "jpa", "spo", "p2p", "minimal"]
            },
            {
              id: "5.4.1.2",
              name: "Bloco IP /29 (6 IPs utilizáveis)",
              description: "Bloco pequeno para servidores básicos",
              price: 280.00,
              functionality: "Bloco de endereços IPv4 públicos para pequenas infraestruturas",
              applicability: "Pequenos servidores, aplicações básicas, ambientes de teste",
              example: "Servidores web básicos, email ou aplicações simples",
              characteristics: [
                "8 IPs totais (6 utilizáveis)",
                "Ideal para pequenas aplicações",
                "Disponível em JPA e SPO",
                "Roteamento direto",
                "Custo-benefício para pequenas demandas"
              ],
              tags: ["ip", "block", "jpa", "spo", "small", "basic"]
            },
            {
              id: "5.4.1.3",
              name: "Bloco IP /28 (14 IPs utilizáveis)",
              description: "Bloco médio para infraestruturas intermediárias",
              price: 640.00,
              functionality: "Bloco IPv4 para múltiplos serviços e aplicações médias",
              applicability: "Empresas médias com múltiplos serviços e aplicações",
              example: "Ambiente com web servers, mail, aplicações e serviços diversos",
              characteristics: [
                "16 IPs totais (14 utilizáveis)",
                "Adequado para múltiplos serviços",
                "Disponível em JPA e SPO",
                "Balanceamento de serviços",
                "Flexibilidade de configuração"
              ],
              tags: ["ip", "block", "jpa", "spo", "medium", "multi-service"]
            },
            {
              id: "5.4.1.4",
              name: "Bloco IP /27 (30 IPs utilizáveis)",
              description: "Bloco grande para infraestruturas empresariais",
              price: 1440.00,
              functionality: "Bloco substancial para ambientes enterprise com diversos serviços",
              applicability: "Empresas grandes com múltiplas aplicações e serviços críticos",
              example: "Infraestrutura corporativa com diversos servidores e aplicações",
              characteristics: [
                "32 IPs totais (30 utilizáveis)",
                "Ideal para ambiente enterprise",
                "Disponível em JPA e SPO",
                "Múltiplas aplicações simultâneas",
                "Segmentação de serviços"
              ],
              tags: ["ip", "block", "jpa", "spo", "large", "enterprise"]
            },
            {
              id: "5.4.1.5",
              name: "Bloco IP /26 (62 IPs utilizáveis)",
              description: "Bloco extenso para grandes infraestruturas",
              price: 3200.00,
              functionality: "Bloco extenso para grandes operações e múltiplos serviços",
              applicability: "Grandes empresas, provedores de serviço, infraestruturas complexas",
              example: "Provedores de hospedagem, grandes ambientes corporativos",
              characteristics: [
                "64 IPs totais (62 utilizáveis)",
                "Grande capacidade de endereçamento",
                "Disponível em JPA e SPO",
                "Infraestruturas complexas",
                "Múltiplas sub-redes possíveis"
              ],
              tags: ["ip", "block", "jpa", "spo", "extensive", "provider"]
            },
            {
              id: "5.4.1.6",
              name: "Bloco IP /25 (126 IPs utilizáveis)",
              description: "Bloco massivo para operações de grande escala",
              price: 7680.00,
              functionality: "Bloco massivo para operações de grande escala e múltiplos clientes",
              applicability: "Provedores de serviços, grandes corporações, operações massivas",
              example: "Provedores de cloud, grandes datacenters, operações multi-tenant",
              characteristics: [
                "128 IPs totais (126 utilizáveis)",
                "Capacidade massiva",
                "Disponível em JPA e SPO",
                "Operações de grande escala",
                "Sub-divisão flexível"
              ],
              tags: ["ip", "block", "jpa", "spo", "massive", "multi-tenant"]
            },
            {
              id: "5.4.1.7",
              name: "Bloco IP /24 (254 IPs utilizáveis)",
              description: "Bloco máximo para operações de escala empresarial",
              price: 17920.00,
              functionality: "Bloco máximo disponível para operações de escala empresarial",
              applicability: "Grandes provedores, corporações multinacionais, operações críticas",
              example: "Grandes provedores de nuvem, corporações globais, datacenters enterprise",
              characteristics: [
                "256 IPs totais (254 utilizáveis)",
                "Máxima capacidade disponível",
                "Disponível em JPA e SPO",
                "Operações enterprise",
                "Máxima flexibilidade de sub-redes"
              ],
              tags: ["ip", "block", "jpa", "spo", "maximum", "enterprise-scale"]
            }
          ]
        },
        {
          id: "5.4.2",
          name: "DC USA",
          description: "Blocos de IP para datacenter americano com preços otimizados",
          items: [
            {
              id: "5.4.2.1",
              name: "Bloco IP /30 (1 IP utilizável) - USA",
              description: "Bloco mínimo para datacenter americano",
              price: 90.00,
              functionality: "Menor bloco disponível para operações nos EUA",
              applicability: "Conexões mínimas, testes, configurações específicas",
              example: "Conexão dedicada ou configuração específica nos EUA",
              characteristics: [
                "4 IPs totais (1 utilizável)",
                "Localização: USA",
                "Preço otimizado para mercado americano",
                "Conectividade internacional",
                "Compliance americano"
              ],
              tags: ["ip", "block", "usa", "minimal", "international"]
            },
            {
              id: "5.4.2.2",
              name: "Bloco IP /29 (5 IPs utilizáveis) - USA",
              description: "Bloco pequeno para operações básicas nos EUA",
              price: 135.00,
              functionality: "Bloco básico para pequenas operações no mercado americano",
              applicability: "Pequenas aplicações, testes, expansão inicial para EUA",
              example: "Aplicação web básica ou serviço de teste nos EUA",
              characteristics: [
                "8 IPs totais (5 utilizáveis)",
                "Localização: USA",
                "Ideal para pequenas operações",
                "Conectividade otimizada EUA",
                "Compliance americano"
              ],
              tags: ["ip", "block", "usa", "small", "basic"]
            },
            {
              id: "5.4.2.3",
              name: "Bloco IP /28 (13 IPs utilizáveis) - USA",
              description: "Bloco médio para operações intermediárias nos EUA",
              price: 360.00,
              functionality: "Bloco médio para operações empresariais no mercado americano",
              applicability: "Empresas médias expandindo para EUA, múltiplos serviços",
              example: "Infraestrutura corporativa nos EUA ou serviços múltiplos",
              characteristics: [
                "16 IPs totais (13 utilizáveis)",
                "Localização: USA",
                "Múltiplos serviços possíveis",
                "Conectividade premium EUA",
                "Flexibilidade empresarial"
              ],
              tags: ["ip", "block", "usa", "medium", "business"]
            },
            {
              id: "5.4.2.4",
              name: "Bloco IP /27 (29 IPs utilizáveis) - USA",
              description: "Bloco grande para operações empresariais nos EUA",
              price: 765.00,
              functionality: "Bloco substancial para operações enterprise no mercado americano",
              applicability: "Grandes empresas, operações críticas, múltiplas aplicações nos EUA",
              example: "Operação empresarial nos EUA ou expansão significativa",
              characteristics: [
                "32 IPs totais (29 utilizáveis)",
                "Localização: USA",
                "Operações enterprise",
                "Conectividade robusta EUA",
                "Múltiplas aplicações"
              ],
              tags: ["ip", "block", "usa", "large", "enterprise"]
            },
            {
              id: "5.4.2.5",
              name: "Bloco IP /26 (61 IPs utilizáveis) - USA",
              description: "Bloco extenso para grandes operações nos EUA",
              price: 1620.00,
              functionality: "Bloco extenso para grandes operações e infraestruturas complexas",
              applicability: "Grandes corporações, provedores, operações massivas nos EUA",
              example: "Grande infraestrutura corporativa ou operação de provedor nos EUA",
              characteristics: [
                "64 IPs totais (61 utilizáveis)",
                "Localização: USA",
                "Grandes operações",
                "Infraestrutura robusta EUA",
                "Capacidade extensiva"
              ],
              tags: ["ip", "block", "usa", "extensive", "corporate"]
            },
            {
              id: "5.4.2.6",
              name: "Bloco IP /25 (125 IPs utilizáveis) - USA",
              description: "Bloco massivo para operações de escala nos EUA",
              price: 3375.00,
              functionality: "Bloco massivo para operações de grande escala no mercado americano",
              applicability: "Provedores de serviços, grandes corporações, operações críticas",
              example: "Provedor de nuvem nos EUA ou grande corporação multinacional",
              characteristics: [
                "128 IPs totais (125 utilizáveis)",
                "Localização: USA",
                "Operações de escala",
                "Infraestrutura massiva EUA",
                "Flexibilidade máxima"
              ],
              tags: ["ip", "block", "usa", "massive", "scale"]
            },
            {
              id: "5.4.2.7",
              name: "Bloco IP /24 (254 IPs utilizáveis) - USA",
              description: "Bloco máximo para operações enterprise nos EUA",
              price: 6840.00,
              functionality: "Bloco máximo para operações de escala enterprise no mercado americano",
              applicability: "Grandes provedores, corporações globais, operações críticas massivas",
              example: "Grande provedor de cloud nos EUA ou corporação global",
              characteristics: [
                "256 IPs totais (254 utilizáveis)",
                "Localização: USA",
                "Máxima capacidade",
                "Infraestrutura enterprise EUA",
                "Operações globais"
              ],
              tags: ["ip", "block", "usa", "maximum", "global"]
            }
          ]
        }
      ]
    },
    {
      id: "5.5",
      name: "IP Announcements & BGP",
      description: "Anúncio de IPs e configuração BGP para autonomia de roteamento",
      items: [
        {
          id: "5.5.1",
          name: "IP Announcements & BGP",
          description: "Serviço de anúncio de IPs e configuração BGP para todos os datacenters",
          price: 500.00,
          functionality: "Configuração e gerenciamento de anúncios BGP para blocos IP próprios do cliente",
          applicability: "Organizações com AS próprio que necessitam controle de roteamento",
          example: "Empresa com múltiplas conexões que deseja otimizar rotas e ter redundância",
          characteristics: [
            "Disponível em todos os DCs (JPA, SPO, USA)",
            "Anúncio de blocos próprios do cliente",
            "Configuração BGP personalizada",
            "Controle de políticas de roteamento",
            "Redundância e otimização de rotas",
            "Monitoramento de anúncios"
          ],
          tags: ["bgp", "ip-announcements", "routing", "autonomous-system", "multi-dc"],
          observations: "Disponível para datacenters JPA, SPO e USA. Requer AS próprio do cliente e blocos IP elegíveis para anúncio"
        }
      ]
    }
  ]
};
