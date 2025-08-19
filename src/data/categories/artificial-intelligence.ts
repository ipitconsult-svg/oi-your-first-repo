import { Category } from "@/types/catalog";

export const artificialIntelligenceCategory: Category = {
  id: "12",
  name: "INTELIGÊNCIA ARTIFICIAL",
  description: "Soluções de Inteligência Artificial, Machine Learning e análise avançada de dados",
  subcategories: [
    {
      id: "12.1",
      name: "Plataformas de IA",
      description: "Plataformas completas para desenvolvimento e implementação de soluções de IA",
      items: [
        {
          id: "12.1.1",
          name: "Plataforma MLOps Basic",
          description: "Plataforma básica para operacionalização de modelos de Machine Learning",
          price: 1500.00,
          functionality: "Ambiente gerenciado para desenvolvimento e implantação de modelos ML",
          applicability: "Empresas iniciando com IA/ML que precisam de estrutura organizada",
          example: "Gestão de modelos ML, versionamento, deployment básico",
          characteristics: [
            "Versionamento de modelos",
            "Ambiente de experimentação",
            "Pipelines básicos de CI/CD",
            "Monitoramento básico",
            "Até 5 usuários"
          ],
          tags: ["mlops", "machine-learning", "ai", "model-management", "deployment"]
        },
        {
          id: "12.1.2",
          name: "Plataforma MLOps Enterprise",
          description: "Plataforma avançada para operacionalização corporativa de ML/IA",
          price: 5000.00,
          functionality: "Plataforma completa para ciclo de vida de modelos ML em grande escala",
          applicability: "Empresas com necessidade de IA/ML em escala empresarial",
          example: "Gestão avançada de modelos, governança, compliance, automação",
          characteristics: [
            "Governança completa de modelos",
            "Automação de pipeline end-to-end",
            "Monitoramento de performance e drift",
            "Explicabilidade e transparência",
            "Usuários ilimitados"
          ],
          tags: ["mlops", "enterprise", "ai-governance", "automation", "scalable"]
        },
        {
          id: "12.1.3",
          name: "IA Generativa as a Service",
          description: "Plataforma gerenciada para desenvolvimento com IA generativa",
          price: 3500.00,
          functionality: "Ambiente para desenvolvimento de soluções com modelos generativos",
          applicability: "Empresas que desejam implementar soluções com IA generativa",
          example: "Chatbots avançados, geração de conteúdo, assistentes virtuais",
          characteristics: [
            "Acesso a modelos LLM",
            "Fine-tuning de modelos",
            "Gestão de prompts",
            "Orquestração de agentes",
            "RAG (Retrieval Augmented Generation)"
          ],
          tags: ["generative-ai", "llm", "chatbot", "content-generation", "fine-tuning"]
        },
        {
          id: "12.1.4",
          name: "Computer Vision Platform",
          description: "Plataforma especializada para desenvolvimento de visão computacional",
          price: 2800.00,
          functionality: "Ambiente para criação e operação de soluções de visão computacional",
          applicability: "Empresas com necessidades de processamento de imagens e vídeos",
          example: "Reconhecimento de objetos, inspeção visual, análise de vídeo",
          characteristics: [
            "Annotation tools",
            "Modelos pré-treinados",
            "Pipeline de treinamento",
            "Inferência em tempo real",
            "Edge deployment"
          ],
          tags: ["computer-vision", "image-recognition", "video-analytics", "object-detection", "ai"]
        },
        {
          id: "12.1.5",
          name: "Plataforma AutoML",
          description: "Plataforma de Machine Learning automatizado para não especialistas",
          price: 1800.00,
          functionality: "Criação automatizada de modelos ML sem conhecimento profundo",
          applicability: "Empresas sem especialistas em dados que precisam de soluções ML",
          example: "Previsões de negócios, segmentação de clientes, detecção de anomalias",
          characteristics: [
            "Interface visual no-code/low-code",
            "Seleção automática de features",
            "Otimização de hiperparâmetros",
            "Explicabilidade de modelos",
            "Deploy simplificado"
          ],
          tags: ["automl", "no-code", "automated", "machine-learning", "business-analytics"]
        }
      ]
    },
    {
      id: "12.2",
      name: "Soluções de IA Específicas",
      description: "Soluções prontas de IA para casos de uso específicos",
      items: [
        {
          id: "12.2.1",
          name: "Chatbot Corporativo IA",
          description: "Chatbot inteligente com IA generativa para atendimento corporativo",
          price: 2500.00,
          functionality: "Assistente virtual avançado para atendimento e suporte",
          applicability: "Empresas com alto volume de atendimento ou suporte técnico",
          example: "Atendimento ao cliente, suporte técnico, FAQ interno",
          characteristics: [
            "Baseado em LLM avançado",
            "Integração com base de conhecimento",
            "Personalização de marca",
            "Analytics de conversas",
            "Múltiplos canais"
          ],
          tags: ["chatbot", "customer-service", "llm", "support", "generative-ai"]
        },
        {
          id: "12.2.2",
          name: "IA para Análise de Documentos",
          description: "Solução de IA para extração e análise inteligente de documentos",
          price: 1800.00,
          functionality: "Processamento automatizado de documentos com extração de dados",
          applicability: "Empresas com processamento manual de documentos estruturados",
          example: "Processamento de contratos, faturas, formulários, documentos legais",
          characteristics: [
            "OCR avançado",
            "Extração de dados estruturados",
            "Classificação automática",
            "Validação de dados",
            "Workflow de aprovação"
          ],
          tags: ["document-processing", "ocr", "extraction", "automation", "workflow"]
        },
        {
          id: "12.2.3",
          name: "IA para Detecção de Fraudes",
          description: "Sistema de IA para detecção avançada de fraudes e anomalias",
          price: 4500.00,
          functionality: "Identificação proativa de padrões fraudulentos e comportamentos suspeitos",
          applicability: "Instituições financeiras, e-commerce, seguradoras",
          example: "Detecção de fraudes em transações, claims, cadastros ou acessos",
          characteristics: [
            "Modelos de anomaly detection",
            "Análise comportamental",
            "Detecção em tempo real",
            "Auto-aprendizado contínuo",
            "Explicabilidade de alertas"
          ],
          tags: ["fraud-detection", "anomaly", "security", "financial", "real-time"]
        },
        {
          id: "12.2.4",
          name: "IA para Previsão de Demanda",
          description: "Sistema de IA para previsão avançada de demanda e planejamento",
          price: 3200.00,
          functionality: "Previsão precisa de demanda com base em múltiplas variáveis",
          applicability: "Varejo, indústria, logística, supply chain",
          example: "Previsão de vendas, otimização de estoque, planejamento de produção",
          characteristics: [
            "Algoritmos de forecasting",
            "Incorporação de sazonalidade",
            "Análise de múltiplas variáveis",
            "Recomendações de estoque",
            "Cenários what-if"
          ],
          tags: ["demand-forecasting", "inventory", "supply-chain", "retail", "planning"]
        },
        {
          id: "12.2.5",
          name: "IA para Recomendação Personalizada",
          description: "Sistema de recomendação baseado em IA para personalização",
          price: 2800.00,
          functionality: "Recomendações personalizadas de produtos ou conteúdo",
          applicability: "E-commerce, streaming, conteúdo, marketplaces",
          example: "Recomendação de produtos, conteúdo personalizado, cross-selling",
          characteristics: [
            "Modelos colaborativos e baseados em conteúdo",
            "Personalização em tempo real",
            "Aprendizado contínuo",
            "A/B testing integrado",
            "Analytics de conversão"
          ],
          tags: ["recommendation-engine", "personalization", "e-commerce", "content", "user-experience"]
        }
      ]
    },
    {
      id: "12.3",
      name: "Serviços de IA",
      description: "Serviços especializados de consultoria e implementação de IA",
      items: [
        {
          id: "12.3.1",
          name: "Consultoria Estratégica de IA",
          description: "Consultoria para definição de estratégia e roadmap de IA",
          price: 15000.00,
          functionality: "Planejamento estratégico para adoção de IA na organização",
          applicability: "Empresas iniciando jornada de IA ou redefinindo estratégia",
          example: "Identificação de oportunidades, priorização, roadmap de implementação",
          characteristics: [
            "Avaliação de maturidade",
            "Identificação de casos de uso",
            "Análise de ROI",
            "Roadmap de implementação",
            "Governança de IA"
          ],
          tags: ["ai-strategy", "consulting", "roadmap", "transformation", "planning"]
        },
        {
          id: "12.3.2",
          name: "Desenvolvimento de Modelo Personalizado",
          description: "Desenvolvimento de modelo de ML/IA personalizado para necessidade específica",
          price: 30000.00,
          functionality: "Criação de solução de IA customizada para problema específico",
          applicability: "Empresas com casos de uso únicos que exigem abordagem personalizada",
          example: "Modelos preditivos específicos, detecção especializada, otimização",
          characteristics: [
            "Análise exploratória de dados",
            "Feature engineering",
            "Seleção de algoritmos",
            "Treinamento e validação",
            "Implantação em produção"
          ],
          tags: ["custom-model", "development", "machine-learning", "data-science", "predictive"]
        },
        {
          id: "12.3.3",
          name: "Implementação de IA Generativa Corporativa",
          description: "Implementação de solução corporativa com IA generativa",
          price: 40000.00,
          functionality: "Implantação segura de IA generativa no ambiente corporativo",
          applicability: "Empresas que desejam adotar LLMs com segurança e governança",
          example: "Assistentes internos, RAG corporativo, automação com IA generativa",
          characteristics: [
            "Implementação de RAG",
            "Segurança e compliance",
            "Integração com dados corporativos",
            "Fine-tuning para domínio específico",
            "Controles de acesso e auditoria"
          ],
          tags: ["generative-ai", "llm", "enterprise", "implementation", "rag"]
        },
        {
          id: "12.3.4",
          name: "Implantação de Data Science Lab",
          description: "Implantação de ambiente completo para data science e IA",
          price: 50000.00,
          functionality: "Criação de infraestrutura e processos para equipes de dados",
          applicability: "Empresas estabelecendo capacidade interna de data science",
          example: "Ambiente para cientistas de dados, governança, metodologia",
          characteristics: [
            "Infraestrutura técnica",
            "Metodologia de trabalho",
            "Ferramentas e plataformas",
            "Processos de governança",
            "Capacitação básica"
          ],
          tags: ["data-science", "lab", "implementation", "infrastructure", "governance"]
        },
        {
          id: "12.3.5",
          name: "IA Responsible & Ethics Framework",
          description: "Implementação de framework para IA ética e responsável",
          price: 35000.00,
          functionality: "Estruturação de práticas para uso ético e responsável de IA",
          applicability: "Empresas preocupadas com riscos éticos e regulatórios de IA",
          example: "Políticas de IA responsável, mitigação de viés, transparência",
          characteristics: [
            "Políticas de uso ético",
            "Detecção e mitigação de viés",
            "Transparência e explicabilidade",
            "Avaliação de impacto",
            "Governança de IA responsável"
          ],
          tags: ["ethics", "responsible-ai", "governance", "bias", "transparency"]
        }
      ]
    }
  ]
};
