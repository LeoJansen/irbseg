import Image from "next/image";
import Link from "next/link";
import { navItems } from "../site-data";

type SiteHeaderProps = {
  activePath?: string;
  variant?: "overlay" | "solid";
};

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-baseline text-[1.55rem] font-black leading-none ${
        light ? "text-white" : "text-[#031a34]"
      }`}
      aria-label="IRB(Seg) - Página inicial"
    >
      IRB<span className={light ? "text-[#61d7ff]" : "text-[#0068d9]"}>(Seg)</span>
    </Link>
  );
}

export function SiteHeader({
  activePath,
  variant = "overlay",
}: SiteHeaderProps) {
  const isOverlay = variant === "overlay";

  return (
    <header
      className={`z-30 w-full ${
        isOverlay
          ? "absolute left-0 top-0 text-white"
          : "sticky top-0 border-b border-slate-200 bg-white/95 text-[#031a34] backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 lg:px-0">
        <Logo light={isOverlay} />
        <nav
          className="hidden items-center gap-7 text-[0.82rem] font-bold md:flex"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => {
            const active =
              activePath === item.href || activePath?.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-[#61d7ff] ${
                  active ? "text-[#61d7ff]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 text-[0.72rem] font-black">
          <Link
            href="/contato"
            className={`hidden rounded-[4px] border px-4 py-2 transition sm:inline-flex ${
              isOverlay
                ? "border-white/55 text-white hover:border-[#61d7ff] hover:text-[#61d7ff]"
                : "border-[#0068d9] text-[#0068d9] hover:bg-[#0068d9] hover:text-white"
            }`}
          >
            Contato
          </Link>
          <span className={isOverlay ? "text-white" : "text-[#0068d9]"}>PT</span>
        </div>
      </div>
      <nav
        className={`flex gap-4 overflow-x-auto px-6 pb-4 text-[0.78rem] font-bold md:hidden ${
          isOverlay ? "text-white" : "text-[#031a34]"
        }`}
        aria-label="Navegação principal mobile"
      >
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-0">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-9 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo light />
            <p className="mt-6 text-sm leading-6 text-white/70">
              Somos o IRB(Seg), uma plataforma de soluções para vida,
              patrimônio e inteligência aplicada ao mercado segurador.
            </p>
          </div>
          <div className="grid gap-8 text-sm font-bold sm:grid-cols-3">
            <div className="grid gap-3">
              <Link href="/vida">Vida</Link>
              <Link href="/vida/nosso-time">Nosso time</Link>
              <Link href="/vida/o-que-fazemos">O que fazemos</Link>
              <Link href="/vida/noticias">Notícias</Link>
            </div>
            <div className="grid gap-3">
              <Link href="/patrimonial">Patrimonial</Link>
              <Link href="/patrimonial/nosso-time">Nosso time</Link>
              <Link href="/patrimonial/o-que-fazemos">O que fazemos</Link>
              <Link href="/patrimonial/noticias">Notícias</Link>
            </div>
            <div className="grid gap-3">
              <Link href="/inteligencia">IRB(+)Inteligência</Link>
              <Link href="/contato">Contato</Link>
              <Link href="/norma-de-uso-e-privacidade">
                Norma de uso e privacidade
              </Link>
              <a href="https://www.irbre.com" target="_blank" rel="noreferrer">
                IRB(Re)
              </a>
              <a href="https://www.irbasset.com" target="_blank" rel="noreferrer">
                IRB(Asset)
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-8 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 IRB(Seg). Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            {["in", "x", "ig", "fb", "yt"].map((label) => (
              <span
                key={label}
                className="grid size-8 place-items-center border border-white/20 text-[0.65rem] font-black uppercase text-white"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function ImagePanel({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
    />
  );
}
