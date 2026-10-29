import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.webp.asset.json";
import borboleta from "@/assets/buque-rosas-borboleta.webp.asset.json";
import lirios from "@/assets/buque-lirios-colorido.webp.asset.json";
import lilas from "@/assets/buque-rosas-lilas.webp.asset.json";
import brancas from "@/assets/buque-rosas-brancas.webp.asset.json";
import vermelhas from "@/assets/buque-rosas-vermelhas.webp.asset.json";
import liriosRosa from "@/assets/buque-lirios-rosa.webp.asset.json";
import rosasAzuis from "@/assets/rosas-azuis.webp.asset.json";
import boxGirassol from "@/assets/box-girassol.webp.asset.json";
import brancoLirios from "@/assets/buque-branco-lirios.webp.asset.json";
import gerberas from "@/assets/buque-gerberas-rosa.webp.asset.json";
import delfinium from "@/assets/rosas-delfinium.webp.asset.json";
import bocaDeLeao from "@/assets/rosas-boca-de-leao.webp.asset.json";

const PHONE = "5547999338343";
const wa = (msg: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
const MAPS = "https://www.google.com/maps/search/?api=1&query=Amor+em+Flor+R.+Goi%C3%A1s+240+Balne%C3%A1rio+Cambori%C3%BA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amor em Flor — Floricultura 24h em Balneário Camboriú" },
      { name: "description", content: "Buquês feitos à mão, abertos 24 horas, com entrega rápida em Balneário Camboriú. Peça pelo WhatsApp. Nota 4,9 no Google." },
      { property: "og:title", content: "Amor em Flor — Floricultura 24h em Balneário Camboriú" },
      { property: "og:description", content: "Buquês feitos à mão com entrega rápida. Peça pelo WhatsApp (47) 99933-8343." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const bouquets = [
  { img: vermelhas.url, name: "Rosas vermelhas com mosquitinho", note: "O clássico para declarar amor. Embrulho rosé e laço de cetim." },
  { img: lilas.url, name: "Rosas e boca-de-leão lilás", note: "Tons de rosa e lavanda para aniversários e mães." },
  { img: boxGirassol.url, name: "Box de girassol e crisântemos", note: "Alegria em caixa: girassol, alstroemérias e crisântemos." },
  { img: lirios.url, name: "Lírios e alstroemérias", note: "Colorido, alegre, cheio de vida. Para parabenizar e agradecer." },
  { img: rosasAzuis.url, name: "Rosas azuis com mosquitinho", note: "Para quem gosta de azul: o pedido mais diferente da semana." },
  { img: brancas.url, name: "Rosas brancas e vermelhas", note: "Delicado e elegante, com boca-de-leão branca." },
  { img: gerberas.url, name: "Gérberas e rosas champagne", note: "Rosa pink com champagne suave, em papel kraft de borboletas." },
  { img: brancoLirios.url, name: "Lírios brancos e rosa", note: "Branco com toque de azul: puro, sereno, perfeito para pedir desculpas." },
  { img: delfinium.url, name: "Rosas com delfínio roxo", note: "Vermelho e rosa com hastes roxas altas. Imponente e romântico." },
  { img: liriosRosa.url, name: "Lírios rosa com astromélias", note: "Embrulho rosa fechado com barbante. Delicado da ponta ao laço." },
  { img: bocaDeLeao.url, name: "Rosas e boca-de-leão branca", note: "Vermelho e branco no embrulho preto com jornal. Marcante." },
  { img: borboleta.url, name: "Trio de rosas com borboleta", note: "Pequeno no tamanho, grande no gesto. Ótimo para surpresas." },
];

const reviews = [
  { name: "Manu Bueno", text: "Falei que minha mãe gostava de azul e as meninas fizeram o trabalho mais caprichado e lindo possível! Ganharam uma cliente fiel." },
  { name: "gabrielli costa", text: "Meu lugar favorito pra pedir flores, ótimo preço, qualidade incrível, entrega rápida e feita com muito carinho." },
  { name: "Yasmim", text: "Super em conta, fazem buquê especialmente pra você. São muito dedicados e fazem com que o momento seja muito especial." },
];

function WaIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function WaButton({ msg, children, big }: { msg: string; children: React.ReactNode; big?: boolean }) {
  return (
    <a
      href={wa(msg)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-accent font-medium text-accent-foreground transition-transform active:scale-95 hover:brightness-110 ${big ? "px-7 py-4 text-lg" : "px-5 py-3"}`}
    >
      <WaIcon />
      {children}
    </a>
  );
}

const occasions = ["Aniversário", "Namoro / amor", "Dia das Mães", "Pedido de desculpas", "Agradecimento", "Só porque sim"];
const colors = ["Vermelho", "Rosa", "Branco", "Colorido", "Azul", "Vocês escolhem"];

function OrderBuilder() {
  const [occasion, setOccasion] = useState<string>("Aniversário");
  const [color, setColor] = useState<string>("Vermelho");
  const [mode, setMode] = useState("Entrega");
  const [when, setWhen] = useState("Hoje");
  const msg = `Olá, Amor em Flor! Quero um buquê.\n• Ocasião: ${occasion}\n• Cores: ${color}\n• ${mode} — ${when}\nPodem me mandar opções e valores?`;

  const Chips = ({ list, value, set }: { list: string[]; value: string; set: (v: string) => void }) => (
    <div className="flex flex-wrap gap-2">
      {list.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => set(o)}
          aria-pressed={value === o}
          className={`rounded-full border px-4 py-2 text-sm transition-colors ${value === o ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary"}`}
        >
          {o}
        </button>
      ))}
    </div>
  );

  return (
    <div className="space-y-7">
      <fieldset className="space-y-3">
        <legend className="mb-3 font-display text-xl">Qual a ocasião?</legend>
        <Chips list={occasions} value={occasion} set={setOccasion} />
      </fieldset>
      <fieldset className="space-y-3">
        <legend className="mb-3 font-display text-xl">Cores preferidas</legend>
        <Chips list={colors} value={color} set={setColor} />
      </fieldset>
      <div className="grid gap-7 sm:grid-cols-2">
        <fieldset>
          <legend className="mb-3 font-display text-xl">Como recebe?</legend>
          <Chips list={["Entrega", "Retiro na loja"]} value={mode} set={setMode} />
        </fieldset>
        <fieldset>
          <legend className="mb-3 font-display text-xl">Para quando?</legend>
          <Chips list={["Hoje", "Amanhã", "Outra data"]} value={when} set={setWhen} />
        </fieldset>
      </div>
      <div className="rounded-sm border border-dashed border-border bg-card p-4 text-sm whitespace-pre-line text-muted-foreground">{msg}</div>
      <WaButton msg={msg} big>Enviar pedido no WhatsApp</WaButton>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      {/* top strip */}
      <div className="bg-wine-deep py-2 text-center text-sm text-primary-foreground">
        Aberto 24 horas, todos os dias · Entrega rápida em Balneário Camboriú
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="/" className="flex items-center gap-3">
          <img src={logo.url} alt="Amor em Flor" className="size-12 rounded-full object-cover" />
          <span className="font-display text-xl italic">Amor em Flor</span>
        </a>
        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#buques" className="hover:text-primary">Buquês</a>
          <a href="#pedido" className="hover:text-primary">Montar pedido</a>
          <a href="#loja" className="hover:text-primary">Loja</a>
        </nav>
        <a href={wa("Olá! Gostaria de fazer um pedido.")} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 text-sm font-medium text-accent md:flex">
          <WaIcon className="size-4" /> (47) 99933-8343
        </a>
      </header>

      {/* hero */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pt-6 pb-20 md:grid-cols-12 md:pt-14">
        <div className="md:col-span-6 md:pt-10">
          <h1 className="bloom-in text-5xl leading-[1.02] font-light tracking-tight md:text-7xl">
            Flores feitas à mão, a qualquer hora.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Conte pra gente quem vai receber e do que essa pessoa gosta. A gente monta o buquê, manda a foto antes e entrega em Balneário Camboriú.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <WaButton msg="Olá, Amor em Flor! Quero encomendar um buquê." big>Pedir pelo WhatsApp</WaButton>
            <a href="#buques" className="underline decoration-border underline-offset-4 hover:decoration-primary">Ver buquês</a>
          </div>
          <a href="#avaliacoes" className="mt-10 flex items-center gap-3 text-sm">
            <span className="text-primary" aria-hidden>★★★★★</span>
            <span><strong>4,9</strong> no Google · 72 avaliações</span>
          </a>
        </div>
        <div className="relative md:col-span-6">
          <img src={vermelhas.url} alt="Buquê de rosas vermelhas com mosquitinho" className="aspect-[4/5] w-full rounded-sm object-cover md:ml-auto md:w-[85%]" />
          <img src={borboleta.url} alt="Trio de rosas com borboleta" className="absolute -bottom-10 -left-2 hidden w-44 rounded-sm border-8 border-background object-cover md:block" />
        </div>
      </section>

      {/* bouquets */}
      <section id="buques" className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-lg text-4xl leading-tight font-light md:text-5xl">Saiu da nossa bancada esta semana</h2>
            <p className="max-w-xs text-muted-foreground">Cada buquê é único. Toque em um para pedir parecido, no tamanho e valor que couber no seu bolso.</p>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {bouquets.map((b, i) => (
              <a
                key={b.name}
                href={wa(`Olá! Vi no site o buquê "${b.name}" e quero um parecido. Quais tamanhos e valores vocês têm?`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block ${i === 1 ? "lg:mt-16" : ""}`}
              >
                <div className="overflow-hidden rounded-sm">
                  <img src={b.img} alt={b.name} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <h3 className="mt-4 text-2xl">{b.name}</h3>
                <p className="mt-1 text-muted-foreground">{b.note}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  <WaIcon className="size-4" /> Quero um assim
                </span>
              </a>
            ))}
            <div className="flex flex-col justify-center gap-4 rounded-sm bg-primary p-8 text-primary-foreground sm:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-12">
              <div>
                <p className="font-display text-3xl leading-tight italic">Tem uma ideia diferente?</p>
                <p className="mt-3 max-w-md opacity-85">Mande uma foto de referência, a cor favorita ou só o orçamento. A gente cria.</p>
              </div>
              <a href={wa("Olá! Tenho uma ideia de buquê personalizado, posso mandar uma referência?")} target="_blank" rel="noopener noreferrer" className="self-start rounded-full bg-primary-foreground px-6 py-3.5 font-medium text-primary lg:shrink-0">
                Falar com a florista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* how it works — real sequence */}
      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3">
          {[
            ["Você chama no WhatsApp", "Conta a ocasião, as cores e quanto quer investir."],
            ["A gente monta e manda foto", "Você aprova o buquê antes de sair da loja."],
            ["Entregamos ou você retira", "Entrega rápida em BC, ou retirada na porta da loja, 24h."],
          ].map(([t, d]: string[], i) => (
            <div key={t} className="border-t border-primary/40 pt-5">
              <span className="font-display text-5xl font-light text-primary">{i + 1}</span>
              <h3 className="mt-3 text-2xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* order builder */}
      <section id="pedido" className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-4xl leading-tight font-light md:text-5xl">Monte seu pedido em 20 segundos</h2>
            <p className="mt-5 max-w-sm text-muted-foreground">Escolha as opções e a mensagem chega pronta no nosso WhatsApp. Respondemos com sugestões e valores.</p>
            <img src={lilas.url} alt="Buquê de rosas e boca-de-leão lilás" loading="lazy" className="mt-10 hidden aspect-square w-full rounded-sm object-cover md:block" />
          </div>
          <div className="md:col-span-7">
            <OrderBuilder />
          </div>
        </div>
      </section>

      {/* reviews */}
      <section id="avaliacoes" className="bg-wine-deep py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-display text-7xl font-light md:text-8xl">4,9<span className="ml-3 text-2xl opacity-70">de 72 avaliações no Google</span></p>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name}>
                <blockquote className="font-display text-xl leading-relaxed font-light italic">“{r.text}”</blockquote>
                <figcaption className="mt-4 text-sm opacity-70">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* store */}
      <section id="loja" className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <img src={lirios.url} alt="Buquê de lírios laranja e alstroemérias" loading="lazy" className="aspect-square w-full rounded-sm object-cover" />
          <div>
            <h2 className="text-4xl leading-tight font-light md:text-5xl">Esqueceu a data? A gente está acordado.</h2>
            <p className="mt-5 text-lg text-muted-foreground">Funcionamos 24 horas. Compre na loja, retire na porta ou receba em casa.</p>
            <address className="mt-8 space-y-1 not-italic">
              <p>R. Goiás, 240 — Estados</p>
              <p>Balneário Camboriú, SC</p>
              <p>(47) 99933-8343</p>
            </address>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <WaButton msg="Olá! Quero fazer um pedido agora.">Pedir agora</WaButton>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-4 hover:decoration-primary">Como chegar</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        Amor em Flor · Floral design · Balneário Camboriú ·{" "}
        <a href="https://instagram.com/amoremflorof" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a>
      </footer>

      {/* sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <a href={wa("Olá, Amor em Flor! Quero encomendar um buquê.")} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-accent py-3.5 font-medium text-accent-foreground">
          <WaIcon /> Pedir pelo WhatsApp · aberto agora
        </a>
      </div>
      {/* desktop floating */}
      <a href={wa("Olá, Amor em Flor! Quero encomendar um buquê.")} target="_blank" rel="noopener noreferrer" aria-label="Pedir pelo WhatsApp" className="fixed right-6 bottom-6 z-50 hidden size-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg md:flex">
        <WaIcon className="size-8" />
      </a>
    </div>
  );
}
