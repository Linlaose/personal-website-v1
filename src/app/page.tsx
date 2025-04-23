import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "./consts";

export default function Home() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-inter)]">
      <header className="bg-navbar">
        <div className="container flex items-center justify-between xl:py-6">
          <h1 className="heading-gradient-flow text-text-primary px-4 text-2xl leading-tight font-bold">
            Ryan
          </h1>
          <nav>
            <ul className="text-text-secondary text-lg leading-120">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  title={label}
                  className="transition-colors duration-200 hover:text-white not-first:xl:ml-4"
                >
                  {label}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <section id="hero" className="bg-hero">
        <div className="container xl:py-40">
          <div>
            <h2 className="heading-gradient w-fit text-7xl leading-120 font-bold uppercase">
              frontend
              <br />
              developer
            </h2>
            <h4 className="mt-2 text-lg leading-120">
              I am a web developer with a passion for creating beautiful and
              responsive websites.
            </h4>
          </div>
          <button type="button" className="button px-4 py-3">
            view my work
          </button>
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
