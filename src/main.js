import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="page">
    <header class="site-header">
      <a class="brand" href="/" aria-label="Sweat Equity Phuket home">
        <img class="brand-mark" src="/images/logo.jpg" alt="Sweat Equity logo" />
        <div class="brand-copy">
          <span class="brand-title">Sweat Equity Phuket</span>
          <span class="brand-subtitle">Founder meetups in motion</span>
        </div>
      </a>
    </header>

    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Sweat Equity Phuket</p>
        <h1>Weekly founder meetups in Phuket.</h1>
        <p class="hero-text">
          A founder social club built around shared activity. Some weeks it is football or padel,
          some weeks sauna and cold plunge, and some weeks a looser mix. The format moves, the
          energy stays consistent.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="https://chat.whatsapp.com/Iri35Q0185PHvhaBWNglO6" target="_blank" rel="noreferrer">Join WhatsApp</a>
          <a class="button button-secondary" href="#formats">See the format</a>
        </div>
        <p class="hero-subline">
          Less networking event, more recurring ritual for people building things in Phuket.
        </p>
      </div>

      <div class="hero-media" aria-label="Sweat Equity Phuket photo collage">
        <figure class="media-card media-sport">
          <img src="/images/phuket-sports.jpg" alt="Entrepreneurs playing mini golf in Phuket" />
        </figure>
        <figure class="media-card media-community">
          <img src="/images/phuket-community.jpg" alt="Founders gathering on a football pitch in Phuket" />
        </figure>
        <figure class="media-card media-pool">
          <img src="/images/pool.jpg" alt="Pool area in Phuket" />
        </figure>
      </div>
    </section>

    <section class="formats" id="formats" aria-label="Weekly formats">
      <p>Padel</p>
      <span></span>
      <p>Football</p>
      <span></span>
      <p>Sauna</p>
      <span></span>
      <p>Cold plunge</p>
      <span></span>
      <p>Open to whatever the week calls for</p>
    </section>

    <section class="intro">
      <div class="intro-head">
        <p class="eyebrow">Why it works</p>
        <h2>Meeting through shared activity feels better than trying to force a networking moment.</h2>
      </div>
      <div class="intro-body">
        <p>
          The point is not to over-design the event. It is to create a simple reason for strong
          people to see each other every week and let relationships build in a more natural way.
        </p>
        <p>
          Sometimes that reason is sport. Sometimes it is recovery. Sometimes it is just a well-set
          session with the right people. The format can change without losing the point.
        </p>
      </div>
    </section>

    <section class="gallery" id="gallery">
      <div class="section-top">
        <p class="eyebrow">Photo Story</p>
        <h2>A clearer picture of the rhythm.</h2>
      </div>

      <div class="gallery-grid">
        <figure class="gallery-item gallery-item-large">
          <img src="/images/phuket-community.jpg" alt="Founders on a football field in Phuket" />
          <figcaption>
            <strong>Some weeks are built around sport.</strong>
            <span>Football, padel, and active sessions are one part of the overall rhythm.</span>
          </figcaption>
        </figure>

        <figure class="gallery-item gallery-item-portrait">
          <img src="/images/cold-plunge.jpg" alt="Cold plunge bath with ice" />
          <figcaption>
            <strong>Some weeks are built around recovery.</strong>
            <span>Cold plunge and sauna can be the actual program, not just an afterthought.</span>
          </figcaption>
        </figure>

        <figure class="gallery-item gallery-item-square">
          <img src="/images/sauna-1.jpg" alt="Sauna session in a wooden room" />
          <figcaption>
            <strong>Loose by design.</strong>
            <span>The format changes depending on the venue, the week, and the group.</span>
          </figcaption>
        </figure>

        <figure class="gallery-item gallery-item-wide">
          <img src="/images/pool.jpg" alt="Pool area in Phuket" />
          <figcaption>
            <strong>No rigid formula.</strong>
            <span>Some weeks are more social, some more active, and some more recovery-led.</span>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="flow">
      <div class="section-top">
        <p class="eyebrow">Weekly Flow</p>
        <h2>Simple enough to repeat.</h2>
      </div>

      <div class="flow-grid">
        <article>
          <span>01</span>
          <h3>Show up</h3>
          <p>No formal event choreography. Just arrive and get into it quickly.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Join the format</h3>
          <p>That week might be sport, sauna, cold plunge, or a mix that fits the group.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Stay if it feels right</h3>
          <p>Some people bounce. Some stay longer. No pressure in either direction.</p>
        </article>
        <article>
          <span>04</span>
          <h3>Come back next week</h3>
          <p>Consistency does most of the community-building work for you.</p>
        </article>
      </div>
    </section>

    <section class="closing">
      <p class="eyebrow">Phuket founders, operators, creatives, and digital nomads</p>
      <h2>The idea is not to make networking feel productive. The idea is to make community feel normal.</h2>
      <div class="closing-actions">
        <a class="button button-primary" href="https://chat.whatsapp.com/Iri35Q0185PHvhaBWNglO6" target="_blank" rel="noreferrer">Join the WhatsApp community</a>
      </div>
    </section>

    <aside class="codex-note" aria-label="Built with Codex">
      this site has been vibecoded with Codex
    </aside>
  </main>
`
