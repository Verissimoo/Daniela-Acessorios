export const packages = [
  {
    id: "pacote-base-gerencial",
    name: "Pacote 1 — Base Gerencial",
    summary: "Base essencial do projeto",
    includes: [
      "Diagnóstico e Estruturação",
      "Núcleo Gerencial Financeiro",
      "Rotina Operacional e Lançamentos"
    ],
    bestFor: "Projetos que precisam organizar a operação com o menor grau de ruptura possível.",
    strategicValue: "Entrega o núcleo gerencial do MVP e consolida a base operacional.",
    dependencies: ["Nenhuma dependência externa além da validação inicial"],
    investmentRange: "[preencher]",
    complexity: "Definir em reunião",
    effort: "Definir em reunião",
    perceivedValue: "Alta clareza de controle e fundação segura do projeto",
    contractModel: "Definir em reunião"
  },
  {
    id: "pacote-base-automacao",
    name: "Pacote 2 — Base Gerencial + Automação",
    summary: "Mais eficiência + mais gestão",
    includes: [
      "Tudo do pacote 1",
      "WhatsApp e Automações",
      "Dashboards e Comissão"
    ],
    bestFor: "Cenários em que a defesa comercial pede mais velocidade de uso e mais leitura gerencial.",
    strategicValue: "Amplia adoção, reduz atrito e adiciona visão executiva sobre os dados.",
    dependencies: ["Depende do núcleo gerencial estruturado"],
    investmentRange: "[preencher]",
    complexity: "Definir em reunião",
    effort: "Definir em reunião",
    perceivedValue: "Mais valor percebido por unir controle, automação e gestão visual",
    contractModel: "Definir em reunião"
  },
  {
    id: "pacote-marca-presenca",
    name: "Pacote 3 — Marca e Presença Digital",
    summary: "Frente comercial e fortalecimento de marca",
    includes: ["Catálogo e Organização Visual", "Site Institucional"],
    bestFor: "Momentos em que a conversa comercial pede vitrine, imagem e presença digital organizada.",
    strategicValue: "Separa a frente comercial do núcleo gerencial sem perder coerência estratégica.",
    dependencies: ["Recomendado após alinhamento de posicionamento e narrativa visual"],
    investmentRange: "[preencher]",
    complexity: "Definir em reunião",
    effort: "Definir em reunião",
    perceivedValue: "Eleva posicionamento e cria uma camada premium para a marca",
    contractModel: "Definir em reunião"
  },
  {
    id: "pacote-evolucao-futura",
    name: "Pacote 4 — Evolução Futura",
    summary: "Expansão do sistema após maturidade operacional",
    includes: ["Upsell de Estoque"],
    bestFor: "Clientes que já amadureceram o uso do MVP e precisam aprofundar a camada de controle.",
    strategicValue: "Transforma o estoque em uma evolução natural e comercialmente defensável.",
    dependencies: ["Depende da maturidade do MVP inicial e de dados reais de operação"],
    investmentRange: "[preencher]",
    complexity: "Definir em reunião",
    effort: "Definir em reunião",
    perceivedValue: "Aprofunda a inteligência do sistema com menor risco de promessas prematuras",
    contractModel: "Definir em reunião"
  }
];
