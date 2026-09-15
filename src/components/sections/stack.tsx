import { STACKS } from "@/lib/stack-items";

export function Stack() {
  return (
    <section
      id="stack"
      className="mx-auto grid min-h-screen max-w-6xl items-center px-6 border-b"
    >
      <div>
        <p className="my-2 text-[14px] text-primary border-spacing-2">
          Tecnologías Principales
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-5xl md:text-5xl mb-2">
          Stack Tecnológico
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-md tracking-tight mb-10">
          Estos son las principales herramientas que he utilizado en mi día a
          día durante todos estos años de trabajo
        </p>
        <div className="grid grid-cols-3 gap-3">
          {STACKS.map((stack, i) => (
            <div
              key={i}
              className="max-w-sm border rounded-xl bg-background-card p-6 font-bold text-md flex items-center"
            >
              {stack.icon}
              <div>
                <p>{stack.name}</p>
                <p className="text-sm text-muted-foreground font-mono font-normal">
                  {stack.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
