export const roadmap = [
  {
    id: "etapa-1",
    name: "Etapa 1 — Definição e modelagem do MVP",
    goal: "Definir a arquitetura mínima do projeto e as regras que sustentam a primeira versão.",
    deliveries: [
      "Definição do MVP",
      "Modelagem das tabelas/base",
      "Definição dos módulos",
      "Definição dos responsáveis",
      "Definição da regra de comissão",
      "Definição de categorias financeiras",
      "Definição do fluxo de viagens",
      "Definição do que fica fora do MVP"
    ],
    relatedSubproducts: ["Diagnóstico e Estruturação"],
    commercialClassification: "Essencial",
    phaseType: "Início"
  },
  {
    id: "etapa-2",
    name: "Etapa 2 — Construção do núcleo financeiro-gerencial",
    goal: "Criar a base funcional de controle financeiro e administrativo do MVP.",
    deliveries: [
      "Módulo de entradas diárias",
      "Módulo de despesas fixas",
      "Módulo de despesas variáveis",
      "Módulo de viagens",
      "Módulo de compra de mercadoria",
      "Anexos/comprovantes",
      "Base central de lojas e fornecedores"
    ],
    relatedSubproducts: ["Núcleo Gerencial Financeiro"],
    commercialClassification: "Essencial",
    phaseType: "Início"
  },
  {
    id: "etapa-3",
    name: "Etapa 3 — Operação via WhatsApp + rotina diária",
    goal: "Reduzir atrito operacional e aproximar o sistema da rotina real da cliente.",
    deliveries: [
      "Input de entradas via WhatsApp",
      "Input de despesas via WhatsApp",
      "Input de viagem via WhatsApp",
      "Confirmação automática",
      "Lembrete de fechamento",
      "Alerta de pendências"
    ],
    relatedSubproducts: ["Rotina Operacional e Lançamentos", "WhatsApp e Automações"],
    commercialClassification: "Complementar",
    phaseType: "Expansão"
  },
  {
    id: "etapa-4",
    name: "Etapa 4 — Painéis, relatórios e comissão",
    goal: "Transformar os dados lançados em leitura gerencial, narrativa e acompanhamento de resultado.",
    deliveries: [
      "Painel por loja",
      "Painel consolidado",
      "Visão mensal",
      "Resultado gerencial",
      "Módulo de comissão",
      "Relatórios executivos"
    ],
    relatedSubproducts: ["Dashboards e Comissão"],
    commercialClassification: "Complementar",
    phaseType: "Expansão"
  },
  {
    id: "etapa-5",
    name: "Etapa 5 — Marketing e catálogo",
    goal: "Organizar a camada visual da marca em uma frente comercial própria e refinada.",
    deliveries: [
      "Base de imagens",
      "Fluxo de tratamento com IA",
      "Catálogo premium",
      "Catálogo promocional",
      "Estrutura de campanhas",
      "Organização por coleção/categoria"
    ],
    relatedSubproducts: ["Catálogo e Organização Visual"],
    commercialClassification: "Opcional",
    phaseType: "Fase 2"
  },
  {
    id: "etapa-6",
    name: "Etapa 6 — Site institucional com catálogo",
    goal: "Transformar a frente de marketing em presença digital organizada e consultiva.",
    deliveries: [
      "Site vitrine",
      "Catálogo consultivo",
      "Páginas das lojas",
      "Contato via WhatsApp",
      "SEO local",
      "Gestão simples de conteúdo"
    ],
    relatedSubproducts: ["Site Institucional"],
    commercialClassification: "Opcional",
    phaseType: "Fase 2"
  },
  {
    id: "etapa-7",
    name: "Etapa 7 — Retorno ao estoque como upsell",
    goal: "Adicionar uma camada mais profunda de controle apenas quando houver maturidade operacional suficiente.",
    deliveries: [
      "Revisão do comportamento da operação",
      "Desenho do módulo de estoque",
      "Entrada por lote",
      "Saldo por loja",
      "Movimentação entre lojas",
      "Atualização dos relatórios",
      "Integração do catálogo com estoque"
    ],
    relatedSubproducts: ["Upsell Futuro: Estoque"],
    commercialClassification: "Upsell",
    phaseType: "Upsell"
  }
];
