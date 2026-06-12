import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImagePanel, SiteFooter, SiteHeader } from "../components/site-chrome";
import { pageForSlug, routePages } from "../site-data";

type SlugParams = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return Object.keys(routePages).map((slug) => ({ slug: slug.split("/") }));
}

export async function generateMetadata({
  params,
}: SlugParams): Promise<Metadata> {
  const { slug } = await params;
  const page = pageForSlug(slug);

  if (!page) {
    return {
      title: "Página não encontrada | IRB(Seg)",
    };
  }

  return {
    title: `${page.title} | IRB(Seg)`,
    description: page.description,
  };
}

export default async function SitemapPage({ params }: SlugParams) {
  const { slug } = await params;
  const page = pageForSlug(slug);

  if (!page) notFound();

  const activePath = `/${slug[0]}`;
  const showContact = page.slug === "contato";

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader activePath={activePath} variant="solid" />
      <main>
        <section className="grid min-h-[520px] bg-[#031a34] text-white lg:grid-cols-[0.95fr_1.05fr]">
          <div className="mx-auto flex w-full max-w-xl flex-col justify-end px-6 py-20 lg:px-0">
            <p className="text-xl font-medium text-[#61d7ff]">{page.eyebrow}</p>
            <h1 className="mt-5 text-5xl font-black leading-none md:text-7xl">
              {page.title}
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-8 text-white/78">
              {page.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {page.highlights.map((item) => (
                <span
                  key={item}
                  className="border border-white/30 px-4 py-2 text-xs font-black uppercase text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <ImagePanel src={page.image} alt="" priority />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,26,52,0.85),rgba(3,26,52,0.08))]" />
          </div>
        </section>

        {page.related ? (
          <nav
            className="border-b border-slate-200 bg-white"
            aria-label="Subpáginas"
          >
            <div className="mx-auto flex max-w-6xl gap-3 overflow-x-auto px-6 py-5 lg:px-0">
              {page.related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`shrink-0 rounded-[4px] border px-5 py-3 text-sm font-black transition ${
                    `/${page.slug}` === item.href
                      ? "border-[#0068d9] bg-[#0068d9] text-white"
                      : "border-slate-200 text-[#031a34] hover:border-[#0068d9] hover:text-[#0068d9]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}

        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-0">
          <div className="grid gap-5 md:grid-cols-3">
            {page.cards.map((card) => (
              <article
                key={card.title}
                className="min-h-[260px] rounded-[6px] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-black uppercase text-[#0068d9]">
                  IRB(Seg)
                </p>
                <h2 className="mt-6 text-3xl font-black leading-tight text-[#031a34]">
                  {card.title}
                </h2>
                <p className="mt-5 text-base leading-7 text-slate-700">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {showContact ? <ContactSection /> : <CtaSection />}
      </main>
      <SiteFooter />
    </div>
  );
}

function CtaSection() {
  return (
    <section className="bg-[#f3f8ff] px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-xl font-medium text-[#0068d9]">Próximo passo</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-[#031a34]">
            Vamos construir uma solução alinhada ao seu risco.
          </h2>
        </div>
        <Link
          href="/contato"
          className="inline-flex w-fit rounded-[4px] bg-[#0068d9] px-8 py-5 text-sm font-black text-white transition hover:bg-[#031a34]"
        >
          Fale com o IRB(Seg)
        </Link>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-[#f3f8ff] px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xl font-medium text-[#0068d9]">Contato</p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-[#031a34]">
            Conte o que você precisa proteger.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-700">
            Este formulário é demonstrativo para a landing. Os campos seguem o
            fluxo esperado do sitemap para contato institucional.
          </p>
        </div>
        <form className="grid gap-4 rounded-[6px] bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-[#031a34]">
              Nome
              <input
                className="min-h-12 border border-slate-300 px-4"
                placeholder="Seu nome"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#031a34]">
              E-mail
              <input
                className="min-h-12 border border-slate-300 px-4"
                placeholder="voce@empresa.com"
                type="email"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-bold text-[#031a34]">
            Área de interesse
            <select className="min-h-12 border border-slate-300 px-4">
              <option>Vida</option>
              <option>Patrimonial</option>
              <option>IRB(+) Inteligência</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-[#031a34]">
            Mensagem
            <textarea
              className="min-h-36 border border-slate-300 px-4 py-3"
              placeholder="Descreva sua demanda"
            />
          </label>
          <button
            type="button"
            className="w-fit rounded-[4px] bg-[#0068d9] px-8 py-4 text-sm font-black text-white transition hover:bg-[#031a34]"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
