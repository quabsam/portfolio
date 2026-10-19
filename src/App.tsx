
function App() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="font-mono text-sm tracking-widest text-accent">
        &gt; 3D ARTIST · GAME ASSETS · CODE
      </p>

      <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-tight md:text-7xl">
        Crafting worlds, one pixel and one line of code at a time.
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        I'm Joseph, a 19-year-old artist who designs characters, props and
        environments in Blender, 3ds Max and Unreal Engine, and builds games in
        Python.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#work"
          className="rounded-lg bg-accent px-6 py-3 font-bold text-ink hover:brightness-110"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-line px-6 py-3 font-medium hover:border-accent hover:text-accent"
        >
          Let's connect
        </a>
      </div>
    </main>
  );
}

export default App;
