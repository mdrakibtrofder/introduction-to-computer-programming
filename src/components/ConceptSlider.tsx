import { useEffect, useState } from "react";
import {
  Variable, GitBranch, Repeat, Boxes, Type, FunctionSquare,
  MousePointer2, Building2, FileText, Sparkles, ChevronLeft, ChevronRight,
  type LucideIcon,
} from "lucide-react";

interface Concept {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  snippet: string;
  accent: string; // tailwind gradient classes
}

const concepts: Concept[] = [
  {
    icon: Variable,
    title: "Variables & Data Types",
    tagline: "Containers that store information",
    description: "Variables hold values like numbers, characters, or text. Each has a type that tells the computer how much memory to use and how to interpret it.",
    snippet: `int age = 21;\nfloat gpa = 3.85;\nchar grade = 'A';`,
    accent: "from-blue-500 to-cyan-500",
  },
  {
    icon: GitBranch,
    title: "Conditional Statements",
    tagline: "Make decisions in code",
    description: "if / else lets a program choose different paths based on conditions — the foundation of any logic.",
    snippet: `if (score >= 80)\n  printf("A grade");\nelse\n  printf("Keep going");`,
    accent: "from-violet-500 to-purple-500",
  },
  {
    icon: Repeat,
    title: "Loops",
    tagline: "Repeat tasks effortlessly",
    description: "Loops run a block of code many times — perfect for processing lists, counting, or waiting for events.",
    snippet: `for (int i = 0; i < 5; i++) {\n  printf("Hello %d\\n", i);\n}`,
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: Boxes,
    title: "Arrays",
    tagline: "Collections of related values",
    description: "Arrays store multiple values of the same type in one place, accessed by an index starting from 0.",
    snippet: `int marks[5] = {90, 85, 70, 95, 80};\nprintf("%d", marks[0]);`,
    accent: "from-orange-500 to-amber-500",
  },
  {
    icon: Type,
    title: "Strings",
    tagline: "Text as character arrays",
    description: "In C, strings are arrays of characters ending with a special null terminator '\\0'.",
    snippet: `char name[] = "Lovable";\nprintf("Hi, %s!", name);`,
    accent: "from-pink-500 to-rose-500",
  },
  {
    icon: FunctionSquare,
    title: "Functions",
    tagline: "Reusable blocks of logic",
    description: "Functions break a program into smaller named tasks that can be reused and tested independently.",
    snippet: `int add(int a, int b) {\n  return a + b;\n}\nadd(3, 4); // 7`,
    accent: "from-indigo-500 to-blue-500",
  },
  {
    icon: MousePointer2,
    title: "Pointers",
    tagline: "Direct access to memory",
    description: "A pointer stores the memory address of another variable — the secret weapon behind efficient C programs.",
    snippet: `int x = 10;\nint *p = &x;\nprintf("%d", *p); // 10`,
    accent: "from-red-500 to-orange-500",
  },
  {
    icon: Building2,
    title: "Structures",
    tagline: "Group related data together",
    description: "Structures bundle different data types into a single unit — like a custom blueprint for real-world things.",
    snippet: `struct Student {\n  char name[20];\n  int id;\n};`,
    accent: "from-teal-500 to-emerald-500",
  },
  {
    icon: FileText,
    title: "File Handling",
    tagline: "Read and write to disk",
    description: "Files let your program save data permanently and read it back later — beyond what memory holds.",
    snippet: `FILE *f = fopen("data.txt", "w");\nfprintf(f, "Hello!");\nfclose(f);`,
    accent: "from-yellow-500 to-orange-500",
  },
];

const ConceptSlider = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % concepts.length), 4500);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: number) =>
    setActive((a) => (a + dir + concepts.length) % concepts.length);

  const current = concepts[active];
  const Icon = current.icon;

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Quick Tour
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          Core Concepts at a Glance
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          A bite-sized intro to every idea you'll master
        </p>
      </div>

      <div
        className="relative glass-card overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Gradient accent bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${current.accent} transition-all duration-500`} />

        <div className="grid md:grid-cols-2 gap-6 p-6 sm:p-8 min-h-[320px]">
          {/* Left: Description */}
          <div key={`txt-${active}`} className="animate-fade-in flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${current.accent} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                    Concept {active + 1} of {concepts.length}
                  </p>
                  <h3 className="text-xl font-bold text-foreground leading-tight">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm font-medium text-primary mb-2">{current.tagline}</p>
              <p className="text-sm text-foreground/75 leading-relaxed">
                {current.description}
              </p>
            </div>

            <div className="flex items-center gap-2 mt-6">
              <button
                onClick={() => go(-1)}
                aria-label="Previous concept"
                className="w-9 h-9 rounded-full bg-secondary hover:bg-secondary/70 border border-border flex items-center justify-center text-foreground transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next concept"
                className="w-9 h-9 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center text-primary-foreground transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="ml-2 text-xs text-muted-foreground">
                {paused ? "Paused" : "Auto-playing"}
              </div>
            </div>
          </div>

          {/* Right: Code snippet preview */}
          <div key={`code-${active}`} className="animate-scale-in">
            <div className="rounded-xl border border-border bg-[hsl(var(--code-bg))] overflow-hidden h-full flex flex-col">
              <div className="flex items-center gap-1.5 px-4 py-2 border-b border-border bg-secondary/50">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-2 text-[11px] font-mono text-muted-foreground">
                  {current.title.toLowerCase().replace(/\s|&/g, "_").replace(/_+/g, "_")}.c
                </span>
              </div>
              <pre className="p-4 text-sm font-mono text-foreground/90 leading-6 overflow-x-auto flex-1 whitespace-pre">
{current.snippet}
              </pre>
            </div>
          </div>
        </div>

        {/* Icon strip / dots */}
        <div className="border-t border-border bg-secondary/30 px-3 py-3 flex items-center justify-center gap-1.5 flex-wrap">
          {concepts.map((c, i) => {
            const ItemIcon = c.icon;
            const isActive = i === active;
            return (
              <button
                key={c.title}
                onClick={() => setActive(i)}
                aria-label={c.title}
                title={c.title}
                className={`group relative flex items-center justify-center transition-all duration-300 rounded-lg ${
                  isActive
                    ? `w-10 h-10 bg-gradient-to-br ${c.accent} shadow-md scale-110`
                    : "w-9 h-9 bg-background hover:bg-primary/10 border border-border"
                }`}
              >
                <ItemIcon
                  className={`w-4 h-4 transition-colors ${
                    isActive ? "text-white" : "text-muted-foreground group-hover:text-primary"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="h-1 w-full bg-secondary/40 overflow-hidden">
          <div
            key={`bar-${active}-${paused}`}
            className={`h-full bg-gradient-to-r ${current.accent}`}
            style={{
              animation: paused ? "none" : "concept-progress 4.5s linear forwards",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes concept-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default ConceptSlider;
