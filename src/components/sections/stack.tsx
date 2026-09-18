import { STACKS } from "@/lib/stack-items";

export function Stack() {
  return (
    <div
      id="stack"
      className="relative mx-auto grid min-h-screen max-w-6xl items-center px-6"
    >
      <section>
        <h1 className="mb-10 text-sm tracking-tight text-muted-foreground font-mono">
          04. Stack Tecnológico
        </h1>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 mb-36">
          {STACKS.map((stack, i) => (
            <div
              key={i}
              className="max-w-sm rounded-xl bg-background-card p-6 font-bold text-md flex items-center "
            >
              {stack.icon}
              <div>
                <p>{stack.name}</p>
                <p className="text-sm text-muted-foreground font-mono font-normal hidden sm:block">
                  {stack.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="absolute bottom-9 flex w-full justify-between text-xs text-muted-foreground">
        <span>© 2026 Luis Flores Rodríguez</span>
        <span>Arequipa, Perú</span>
      </footer>
    </div>
  );
}
