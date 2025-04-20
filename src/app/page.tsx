import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "./consts";
export default function Home() {
  return (
    <main className="min-h-screen gap-16 font-[family-name:var(--font-inter)]">
      <header>
        <div className="bg-primary container">
          <h1>
            <span className="text-text-primary">Ryan</span>
          </h1>
          <nav>
            <ul>
              {NAV_LINKS.map(({ label, href }) => (
                <Link key={label} href={href} title={label}>
                  {label}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <section id="banner">
        <div className="container">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-center font-[family-name:var(--font-roboto-mono)] text-sm/6 sm:text-left">
            <li className="mb-2 tracking-[-.01em]">
              Get started by editing{" "}
              <code className="rounded bg-black/[.05] px-1 py-0.5 font-[family-name:var(--font-roboto-mono)] font-semibold dark:bg-white/[.06]">
                src/app/page.tsx
              </code>
              .
            </li>
            <li className="tracking-[-.01em]">
              Save and see your changes instantly.
            </li>
          </ol>
        </div>
      </section>
      <section id="services">
        <div className="container">services</div>
      </section>
      <section id="technologies">
        <div className="container">technologies</div>
      </section>
      <section id="portfolio">
        <div className="container">portfolio</div>
      </section>
      <section id="contact">
        <div className="container">contact</div>
      </section>
      <footer>
        <div className="container">footer</div>
      </footer>
    </main>
  );
}
