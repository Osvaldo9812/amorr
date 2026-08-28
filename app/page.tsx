'use client';

import { useState } from 'react';
import { ChevronDown, Heart, Infinity, Quote, Sparkles } from 'lucide-react';

const moments = [
  { date: 'Octubre', title: 'Donde comenzó nuestro recorrido', text: 'Entre reflejos y sonrisas empezó a guardarse esta historia que hoy significa tanto para mí.', photos: ['/photos/octubre.jpeg'] },
  { date: 'Noviembre', title: 'La alegría de coincidir', text: 'Cada salida se convirtió en una excusa para reír, conocernos mejor y sumar un recuerdo nuevo.', photos: ['/photos/noviembre.jpeg'] },
  { date: 'Diciembre', title: 'Un final de año a tu lado', text: 'Cerramos un capítulo juntos, agradeciendo cada momento y soñando con todo lo que vendría después.', photos: ['/photos/diciembre.jpeg'] },
  { date: 'Enero', title: 'Caminando de la mano', text: 'Empezamos el año con una certeza sencilla y preciosa: quería seguir avanzando contigo.', photos: ['/photos/enero.jpeg'] },
  { date: 'Febrero', title: 'Nuestro amor en dos instantes', text: 'Dos recuerdos del mismo mes, dos maneras de comprobar que cualquier lugar se vuelve especial si estamos juntos.', photos: ['/photos/febrero-1.jpeg', '/photos/febrero-2.jpeg'] },
  { date: 'Marzo', title: 'La confianza de ser nosotros', text: 'Entre gestos espontáneos y sonrisas sinceras seguimos construyendo nuestro lugar seguro.', photos: ['/photos/marzo-1.jpeg', '/photos/marzo-2.jpeg'] },
  { date: 'Abril', title: 'Besos que dicen todo', text: 'En los detalles pequeños encuentro las razones más grandes para agradecer que estés en mi vida.', photos: ['/photos/abril.jpeg'] },
  { date: 'Mayo', title: 'Aventuras y cariño', text: 'Desde una noche inolvidable hasta un beso en una tarde tranquila: contigo amo todas las versiones de la vida.', photos: ['/photos/mayo-1.jpeg', '/photos/mayo-2.jpeg'] },
  { date: 'Junio', title: 'Cada vez más cerca', text: 'Mes tras mes hemos aprendido a escucharnos, apoyarnos y elegirnos con más fuerza.', photos: ['/photos/junio.jpeg'] },
  { date: 'Julio', title: 'La felicidad también es jugar', text: 'Gracias por compartir conmigo esa complicidad que hace ligeros los días y enormes las sonrisas.', photos: ['/photos/julio.jpeg'] },
  { date: 'Agosto', title: 'Todo lo vivido y lo que falta', text: 'Miro nuestra historia y me emociona saber que aún quedan tantos lugares, sueños y recuerdos por descubrir contigo.', photos: ['/photos/agosto.jpeg'] },
];

function MemoryPhotos({ photos, label }: { photos: string[]; label: string }) {
  return (
    <div className={`memory-photos ${photos.length > 1 ? 'memory-pair' : ''}`}>
      {photos.map((photo, index) => <img key={photo} src={photo} alt={`${label}${photos.length > 1 ? `, recuerdo ${index + 1}` : ''}`} loading="lazy" />)}
    </div>
  );
}

export default function Home() {
  const [letterOpen, setLetterOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-7 lg:px-10">
        <a href="#inicio" className="font-serif text-lg italic tracking-wide">Nuestra historia</a>
        <a href="#cronologia" className="rounded-full border border-primary/25 bg-white/50 px-5 py-2 text-sm font-medium text-primary backdrop-blur">Recorrer recuerdos</a>
      </nav>

      <section id="inicio" className="relative isolate flex min-h-[calc(100vh-92px)] items-center">
        <div className="love-glow absolute -right-40 top-0 -z-10 h-[36rem] w-[36rem] rounded-full" />
        <div className="love-glow absolute -left-52 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full opacity-60" />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
          <div className="max-w-2xl">
            <div className="eyebrow"><span />Para el amor de mi vida</div>
            <h1 className="font-serif text-[clamp(4rem,10vw,8.6rem)] leading-[.78] tracking-[-0.055em]">Tú &amp; yo,<span className="mt-5 block text-primary italic">siempre.</span></h1>
            <p className="mt-9 max-w-lg text-lg leading-8 text-muted-foreground">Una pequeña parte de todo lo que hemos vivido, de lo que hemos superado y de todo lo bonito que aún nos falta por descubrir.</p>
            <a href="#cronologia" className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold text-primary">Comenzar nuestra historia<span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-y-1"><ChevronDown className="h-4 w-4" /></span></a>
          </div>
          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="photo-card rotate-3"><img className="hero-photo" src="/photos/favorita.jpeg" alt="Nuestra foto favorita" /><p className="px-6 pb-6 pt-5 text-center font-serif text-xl italic text-primary">Mi lugar favorito siempre será a tu lado</p></div>
            <div className="absolute -bottom-7 -left-3 -rotate-6 rounded-2xl bg-primary px-5 py-4 text-primary-foreground shadow-xl sm:-left-7"><Infinity className="mb-1 h-7 w-7" /><p className="text-xs uppercase tracking-[.18em] opacity-80">recuerdos juntos</p></div>
          </div>
        </div>
      </section>

      <section id="cronologia" className="timeline-section">
        <div className="section-heading"><p>Capítulo por capítulo</p><h2>Todo lo que nos trajo <em>hasta aquí</em></h2><span>Cada recuerdo guarda una versión de nosotros que vale la pena abrazar.</span></div>
        <div className="timeline">
          {moments.map((moment) => (
            <article className="timeline-item" key={moment.title}>
              <div className="timeline-copy"><p className="timeline-date">{moment.date}</p><h3>{moment.title}</h3><p>{moment.text}</p></div>
              <div className="timeline-dot"><Heart className="h-3.5 w-3.5 fill-current" /></div>
              <div className="timeline-photo"><MemoryPhotos photos={moment.photos} label={`Nosotros en ${moment.date}`} /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="promise-section">
        <div className="section-heading light"><p>Lo que quiero que recuerdes</p><h2>Este amor también se construye</h2></div>
        <div className="promise-grid">
          <article><Sparkles /><span>01</span><h3>Gracias</h3><p>Por haber llegado a mi vida de una manera tan inesperada y convertirte en alguien tan esencial. Gracias por tu paciencia, tu ternura y por hacer hogar conmigo.</p></article>
          <article><Heart /><span>02</span><h3>Estoy contigo</h3><p>En tus sueños y en tus miedos, en los días de victoria y en aquellos en que solo podamos avanzar un poquito. Nunca tendrás que sentirte sola.</p></article>
          <article><Infinity /><span>03</span><h3>Seguiré eligiéndonos</h3><p>El amor también es esfuerzo, conversación y valentía. Prometo cuidar lo nuestro, aprender de mis errores y crecer siempre a tu lado.</p></article>
        </div>
      </section>

      <section className="letter-section">
        <div className={`envelope ${letterOpen ? 'open' : ''}`}>
          <div className="letter">
            <Quote className="h-8 w-8 text-primary/35" />
            <p>Encontrarte fue una de esas casualidades que terminan dándole sentido a muchas cosas.</p>
            <p>Me has enseñado que amar no es tener una historia perfecta, sino crear una historia verdadera: con paciencia, con esfuerzo, con risas y con la decisión de quedarnos incluso cuando el camino se pone difícil.</p>
            <p>Gracias por ser mi compañera, mi apoyo y mi lugar favorito. Quiero seguir sumando recuerdos contigo, celebrar quién eres y ayudarte a llegar a todo aquello que sueñas.</p>
            <p className="signature">Con todo mi amor,<br /><strong>siempre tuyo.</strong></p>
          </div>
          {!letterOpen && <button onClick={() => setLetterOpen(true)} aria-label="Abrir carta de amor"><Heart className="h-5 w-5 fill-current" /><span>Abrir mi carta para ti</span></button>}
        </div>
      </section>

      <footer><Heart className="h-4 w-4 fill-current" /><p>Y esto apenas es el comienzo de todo lo que nos falta por vivir.</p><span>Tú + yo · Por siempre</span></footer>
    </main>
  );
}
