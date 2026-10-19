import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
const featured = [
  {
    title: "Viking Fortnite pickaxe",
    category: "3D · PROP",
    summary:
      "From silhouettes and a mood board to block-out, low and high poly, and a final render in Unreal.",
    tools: ["Blender", "3ds Max", "Unreal"],
  },
  {
    title: "Drax",
    category: "2D · CHARACTER",
    summary:
      "An original character designed from a Miro mood board, painted in Photoshop and animated in Unreal.",
    tools: ["Miro", "Photoshop", "Unreal"],
  },
  {
    title: "Python coin game",
    category: "CODE · GAME",
    summary:
      "A small game built for my SMART target: a game window, event handling, coin collection and drawing.",
    tools: ["Python"],
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <p className="font-mono text-sm tracking-widest text-accent">
          01 / SELECTED WORK
        </p>
        <h2 className="mt-2 font-display text-4xl font-bold">
          Featured projects
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              summary={project.summary}
              tools={project.tools}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home