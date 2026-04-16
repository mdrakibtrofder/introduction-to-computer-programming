import { Link } from "react-router-dom";
import { BookOpen, Code, Zap, ArrowRight, Terminal, GraduationCap, Target, Layers } from "lucide-react";
import { chapters } from "../data/chapters";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl mx-4 sm:mx-6 mt-4" style={{ background: "var(--gradient-hero)" }}>
        <div className="relative z-10 px-8 sm:px-12 py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/20 border border-primary-foreground/30 text-xs font-medium text-primary-foreground mb-6">
            <Terminal className="w-3.5 h-3.5" />
            CSE 2123 — Winter 2026
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-primary-foreground">
            Learn C Programming
          </h1>
          <p className="text-base sm:text-lg text-primary-foreground/80 max-w-2xl mb-8 leading-relaxed">
            Master the foundation of modern computing — from variables and control structures to pointers, memory management, and file handling.
          </p>
          <Link to="/introduction-to-c-programming" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-foreground text-primary font-medium hover:bg-primary-foreground/90 transition-colors">
            Start Learning <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: GraduationCap, title: `${chapters.length} Comprehensive Chapters`, desc: "Covering every aspect of C programming" },
            { icon: Code, title: "Real Code Snippets", desc: "Practical examples with syntax highlighting" },
            { icon: Target, title: "Practice Problems", desc: "3 coding problems per chapter" },
            { icon: Layers, title: "Interactive Learning", desc: "Expandable slides, tables, and visual aids" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">{title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
        <div className="glass-card p-8">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Learning Outcomes</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-4">By the end of this course, you will be able to:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Write, compile and debug C programs",
              "Use variables, operators, and expressions effectively",
              "Implement control structures and loops",
              "Work with arrays, strings, and pointers",
              "Create modular programs using functions and recursion",
              "Manage files and use structures/unions",
            ].map((outcome) => (
              <div key={outcome} className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-xs">✓</span>
                </span>
                <span className="text-sm text-foreground/80">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">All Chapters</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map((ch) => (
            <Link
              key={ch.id}
              to={`/${ch.slug}`}
              className="glass-card p-5 hover:glow-border transition-all duration-300 group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{ch.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono">Week {ch.week}</span>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm truncate">{ch.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{ch.slides.length} slides</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
