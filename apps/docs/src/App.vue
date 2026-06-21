<template>
  <main class="shell">
    <section class="hero">
      <p class="eyebrow">xyskills.github.io</p>
      <h1>Project Selector</h1>
      <p class="subtitle">
        One GitHub Pages deployment, multiple projects. Start from here.
      </p>
    </section>

    <section class="grid" aria-label="Projects">
      <a class="card" href="/">
        <h2>Docs / Hub</h2>
        <p>Root project with links and status notes.</p>
        <span class="pill">Root</span>
      </a>

      <a class="card" href="/filter/">
        <h2>Anime Filter</h2>
        <p>Current camera + effects app moved under the filter project path.</p>
        <span class="pill">/filter/</span>
      </a>
    </section>
  </main>
</template>

<style scoped>
:global(*) {
  box-sizing: border-box;
}

:global(body) {
  margin: 0;
  min-height: 100vh;
  font-family: 'Space Grotesk', 'Segoe UI', sans-serif;
  color: #e9ecf5;
  background: radial-gradient(circle at 10% 10%, #29354f 0%, #121726 45%, #080b13 100%);
}

.shell {
  max-width: 1040px;
  margin: 0 auto;
  padding: 4rem 1.25rem 3rem;
}

.hero h1 {
  margin: 0.25rem 0 0;
  font-size: clamp(2rem, 6vw, 4rem);
}

.eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #9bb5ff;
}

.subtitle {
  max-width: 60ch;
  color: #c2cadf;
}

.grid {
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.card {
  display: block;
  border-radius: 16px;
  padding: 1.25rem;
  text-decoration: none;
  color: inherit;
  background: linear-gradient(145deg, rgba(37, 46, 72, 0.9), rgba(18, 24, 42, 0.88));
  border: 1px solid rgba(162, 179, 255, 0.24);
  transition: transform 180ms ease, border-color 180ms ease;
}

.card:hover {
  transform: translateY(-3px);
  border-color: rgba(193, 206, 255, 0.55);
}

.card h2 {
  margin: 0;
  font-size: 1.25rem;
}

.card p {
  margin: 0.55rem 0 0.9rem;
  color: #c2cadf;
}

.pill {
  display: inline-block;
  font-size: 0.8rem;
  border-radius: 999px;
  padding: 0.2rem 0.55rem;
  border: 1px solid rgba(163, 178, 227, 0.55);
}

@media (max-width: 640px) {
  .shell {
    padding-top: 2.25rem;
  }
}
</style>
