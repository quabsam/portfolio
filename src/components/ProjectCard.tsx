type ProjectCardProps = {
  title: string;
  category: string;
  summary: string;
  tools: string[];
};

function ProjectCard({ title, category, summary, tools }: ProjectCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-panel">
      <div className="flex aspect-[16/10] items-center justify-center border-b border-line font-mono text-sm text-muted">
        [ image coming in lesson 4 ]
      </div>
      <div className="flex flex-col gap-3 p-6">
        <span className="font-mono text-xs tracking-widest text-accent">
          {category}
        </span>
        <h3 className="font-display text-2xl font-semibold">{title}</h3>
        <p className="leading-relaxed text-muted">{summary}</p>
        <p className="font-mono text-xs text-muted">{tools.join(" · ")}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
