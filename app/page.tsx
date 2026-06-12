import Image from "next/image";
import Link from "next/link";
import { ImagePanel, SiteFooter, SiteHeader } from "./components/site-chrome";
import { featureBands, homeNews } from "./site-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="overlay" />
      <a
        href="#conteudo"
        className="fixed left-0 top-24 z-40 grid size-9 place-items-center bg-[#0068d9] text-sm font-black text-white"
        aria-label="Ir para o conteúdo"
      >
        A
      </a>

      <main id="conteudo">
        <section className="relative flex min-h-[86vh] items-end overflow-hidden bg-[#031a34] text-white">
          <Image
            src="/assets/hero-ocean.png"
            alt="Navio cargueiro cruzando o oceano azul visto de cima"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,26,52,0.25),rgba(3,26,52,0.88))]" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 lg:px-0">
            <p className="mb-5 text-xl font-light md:text-5xl">Somos o</p>
            <h1 className="max-w-4xl text-6xl font-black leading-none text-[#61d7ff] md:text-8xl">
              IRB(Seg)
            </h1>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/vida"
                className="inline-flex w-fit items-center gap-3 rounded-[4px] bg-[#0068d9] px-6 py-4 text-sm font-black text-white transition hover:bg-[#61d7ff] hover:text-[#031a34]"
              >
                Conheça as soluções <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/inteligencia"
                className="inline-flex w-fit items-center gap-3 rounded-[4px] border border-white/60 px-6 py-4 text-sm font-black text-white transition hover:border-[#61d7ff] hover:text-[#61d7ff]"
              >
                Ver inteligência <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[0.9fr_1fr] lg:px-0">
          <div>
            <p className="text-2xl font-medium text-[#0068d9]">
              Líder em soluções de seguros
            </p>
            <h2 className="mt-4 max-w-lg text-4xl font-black leading-[1.04] text-[#031a34] md:text-6xl">
              Protegemos o futuro da nossa sociedade.
            </h2>
          </div>
          <div className="max-w-xl self-end text-base leading-7 text-slate-700">
            <p>
              Apoiamos projetos que movimentam pessoas, infraestrutura e
              desenvolvimento. Negócios que transformam o presente e constroem
              o amanhã.
            </p>
            <p className="mt-5">
              Carregamos algo que poucos têm: conhecimento, capacidade,
              experiência e legado. São décadas cuidando do que importa.
            </p>
            <p className="mt-5">
              Nosso ecossistema de proteção permite gerir riscos, vencer
              desafios e pensar soluções para vida, patrimônio e inteligência.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-0">
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl font-black text-[#0068d9] md:text-6xl">
              Notícias <span className="font-medium">recomendadas</span>
            </h2>
            <Link
              href="/vida/noticias"
              className="inline-flex w-fit rounded-[4px] border border-[#0068d9] px-7 py-4 text-xs font-black text-[#0068d9] transition hover:bg-[#0068d9] hover:text-white"
            >
              Acesse todas as notícias
            </Link>
          </div>
          <div className="grid auto-rows-[230px] gap-4 md:grid-cols-4">
            {homeNews.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group relative overflow-hidden bg-[#0068d9] text-white ${
                  index === 1 ? "md:row-span-2" : ""
                } ${index === 0 ? "md:col-span-2" : ""}`}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-85 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,26,52,0.06),rgba(0,104,217,0.94))]" />
                <div className="relative flex h-full flex-col justify-between p-7">
                  <span className="text-xs font-black">{item.tag}</span>
                  <h3 className="text-2xl font-black leading-tight">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-16 pb-20">
          {featureBands.map((band, index) => (
            <div
              key={band.title}
              className="grid min-h-[360px] bg-[#0068d9] text-white md:grid-cols-2"
            >
              <div
                className={`mx-auto flex w-full max-w-xl flex-col justify-center px-6 py-14 md:px-0 ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <h2 className="text-4xl font-black leading-none md:text-6xl">
                  {band.title}
                </h2>
                <p className="mt-6 max-w-md text-base leading-7 text-white/85">
                  {band.text}
                </p>
                <Link
                  href={band.href}
                  className="mt-8 inline-flex w-fit rounded-[4px] border border-white/65 px-7 py-4 text-sm font-black transition hover:border-[#61d7ff] hover:text-[#61d7ff]"
                >
                  Acesse
                </Link>
              </div>
              <div
                className={`relative min-h-[320px] ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <ImagePanel src={band.image} alt="" />
                <div className="absolute inset-0 bg-[#031a34]/10" />
              </div>
            </div>
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
