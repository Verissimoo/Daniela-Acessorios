import { motion } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";
import {
  Image,
  Sparkles,
  CheckCircle,
  FolderOpen,
  BookOpen,
  Star,
  Tag,
  Globe,
  MessageSquare,
  Search,
  Diamond,
  ShoppingBag,
  MapPin
} from "lucide-react";

const blocos = [
  { icon: Image, title: "Biblioteca Central de Imagens", desc: "Todas as fotos centralizadas, organizadas e versionadas." },
  { icon: Sparkles, title: "Tratamento com IA", desc: "Remoção de fundo, padronização de iluminação e enquadramento." },
  { icon: CheckCircle, title: "Fluxo de Aprovação", desc: "A proprietária valida antes de publicar no catálogo." },
  { icon: FolderOpen, title: "Organização por Coleção", desc: "Brincos, Colares, Pulseiras, Anéis, Bolsas — por coleção." },
  { icon: BookOpen, title: "Catálogo Institucional", desc: "Material visual elegante para apresentar a marca." },
  { icon: Star, title: "Catálogo Premium", desc: "Seleção curada com acabamento visual de alto padrão." },
  { icon: Tag, title: "Catálogo Promocional", desc: "Materiais para campanhas sazonais e liquidações." },
  { icon: Globe, title: "Site Vitrine", desc: "Páginas das lojas e coleções em destaque." },
  { icon: MessageSquare, title: "CTA WhatsApp", desc: "Botões de contato em todo o site." },
  { icon: Search, title: "SEO Local", desc: "Aparecer quando alguém buscar acessórios no DF." }
];

const mockProducts = [
  {
    title: "Brinco Pérola Ouro",
    category: "Brincos",
    collection: "Verão 2025",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&q=80"
  },
  {
    title: "Coleção Primavera",
    category: "Coleção",
    collection: "28 peças",
    img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=400&fit=crop&q=80"
  },
  {
    title: "Colar Delicado Prata",
    category: "Colares",
    collection: "Clássicos",
    img: "https://images.unsplash.com/photo-1515562141589-67f0d0bfc274?w=400&h=400&fit=crop&q=80"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4 }
  })
};

export default function Marketing() {
  return (
    <div className="space-y-16 pb-20">
      <SectionHeader
        tag="Marketing"
        title="Marketing, Catálogo & Site"
        description="A frente de valorização da marca — imagens tratadas, catálogos organizados e presença digital profissional."
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {blocos.map((bloco, index) => {
          const Icon = bloco.icon;
          return (
            <motion.div
              key={bloco.title}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-xl border border-border bg-card p-4 transition-all hover:border-foreground/20 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] group"
            >
              <Icon className="mb-3 h-3.5 w-3.5 text-foreground/45 transition-colors group-hover:text-foreground" strokeWidth={1.5} />
              <h4 className="mb-1 text-[11px] font-semibold leading-tight text-foreground">{bloco.title}</h4>
              <p className="text-[10px] leading-relaxed text-muted-foreground">{bloco.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <div>
        <span className="mb-5 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Visualização de Catálogo — Ilustrativo
        </span>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {mockProducts.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="group overflow-hidden rounded-[22px] border border-border bg-card transition-all duration-500 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="relative h-64 overflow-hidden bg-secondary">
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent opacity-90" />
                <div className="absolute left-4 top-4">
                  <span className="inline-flex rounded-sm bg-background/92 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-foreground backdrop-blur-sm">
                    {card.category}
                  </span>
                </div>
                <div className="absolute left-4 bottom-4 right-4">
                  <p className="text-sm font-semibold text-background">{card.title}</p>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-background/65 mt-1">{card.collection}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <span className="mb-5 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Site Institucional — Visualização
        </span>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-[28px] border border-border bg-card shadow-[0_28px_70px_rgba(0,0,0,0.08)]"
        >
          <div className="flex items-center gap-3 border-b border-border bg-background px-5 py-3">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
              <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
              <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
            </div>
            <div className="mx-4 flex-1">
              <div className="mx-auto max-w-sm rounded-full border border-border bg-card px-4 py-1.5 text-center text-[11px] tracking-[0.12em] uppercase text-muted-foreground">
                danielaacessorios.com.br
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="border-b border-border xl:border-b-0 xl:border-r">
              <div className="flex items-center justify-between px-8 py-5">
                <div className="flex items-center gap-2.5">
                  <Diamond className="h-3.5 w-3.5 text-foreground/45" strokeWidth={1.5} />
                  <span className="font-display text-lg text-foreground">Daniela Acessórios</span>
                </div>
                <div className="hidden md:flex gap-6 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span>Coleções</span>
                  <span>Lojas</span>
                  <span>Contato</span>
                </div>
              </div>

              <div className="px-8 pb-8 pt-4">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <div>
                    <span className="mb-4 inline-flex rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      Nova coleção · Verão 2025
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl leading-[1.04] text-foreground mb-5">
                      Curadoria premium
                      <br />
                      para mulheres que
                      <br />
                      valorizam presença
                    </h2>
                    <p className="max-w-xl text-sm md:text-base leading-relaxed text-muted-foreground mb-8">
                      Uma apresentação digital elegante para fortalecer a marca, valorizar o catálogo
                      e transformar o primeiro contato em percepção de sofisticação.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-xs font-medium text-background">
                        <MessageSquare className="h-3.5 w-3.5" /> Falar no WhatsApp
                      </span>
                      <span className="inline-flex rounded-md border border-border px-5 py-3 text-xs font-medium text-foreground">
                        Ver Coleções
                      </span>
                    </div>
                  </div>

                  <div className="relative min-h-[380px] rounded-[24px] border border-border bg-background overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.08),transparent_38%),linear-gradient(180deg,rgba(255,255,255,1),rgba(245,245,245,1))]" />
                    <img
                      src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&h=1200&fit=crop&q=80"
                      alt="Coleção em destaque"
                      className="absolute inset-y-0 right-0 h-full w-[68%] object-cover grayscale"
                    />
                    <div className="absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-background via-background/95 to-transparent" />
                    <div className="relative z-10 flex h-full flex-col justify-end p-6">
                      <div className="max-w-[250px] rounded-[20px] border border-border bg-card/92 p-5 backdrop-blur">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                          Editorial premium
                        </p>
                        <p className="font-display text-2xl leading-tight text-foreground mb-2">
                          Seleção curada
                        </p>
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          Mockup de presença digital com acabamento mais convincente, sofisticado e vendável.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-foreground text-background p-8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-background/40 mb-5">
                Valor percebido
              </p>
              <h3 className="font-display text-3xl leading-tight text-background mb-6">
                Um site que não parece “mais um site”, e sim uma vitrine de marca
              </h3>
              <div className="space-y-4 border-t border-white/10 pt-6">
                {[
                  "Apresentação institucional mais forte para reforçar credibilidade",
                  "Composição visual mais elegante para apoiar a venda consultiva",
                  "Estrutura pronta para SEO local, lojas físicas e CTA de contato",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-background/35 flex-shrink-0" />
                    <p className="text-sm leading-relaxed text-background/72">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3">
                {[
                  { icon: ShoppingBag, title: "Taguatinga", text: "Curadoria acessível e giro forte de coleção." },
                  { icon: MapPin, title: "Sudoeste", text: "Apresentação refinada e posicionamento mais premium." }
                ].map((store) => {
                  const Icon = store.icon;
                  return (
                    <div key={store.title} className="rounded-[18px] border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-2.5 mb-2">
                        <Icon className="h-3.5 w-3.5 text-background/55" strokeWidth={1.5} />
                        <p className="text-sm font-semibold text-background">{store.title}</p>
                      </div>
                      <p className="text-xs leading-relaxed text-background/65">{store.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
