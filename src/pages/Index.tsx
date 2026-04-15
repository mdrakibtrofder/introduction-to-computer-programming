import { Link } from "react-router-dom";
import { BookOpen, Code, Zap, ArrowRight, Terminal } from "lucide-react";
import { chapters } from "../data/chapters";
import heroBg from "../assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-medium text-primary mb-6">
            <Terminal className="w-3.5 h-3.5" />
            CSE 2123 — Introduction to Computer Programming
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Learn </span>
            <span className="gradient-text">C Programming</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Master the foundation of modern computing — from variables and control structures to pointers, memory management, and file handling.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/introduction-to-c-programming" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
              Start Learning <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/course-outline" className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors">
              View Course Outline
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">{chapters.length}</div>
            <div className="text-xs text-muted-foreground mt-1">Chapters</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">{chapters.reduce((a, c) => a + c.slides.length, 0)}+</div>
            <div className="text-xs text-muted-foreground mt-1">Interactive Slides</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">14</div>
            <div className="text-xs text-muted-foreground mt-1">Weeks</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Code, title: "Code Snippets", desc: "Real C code examples with syntax highlighting you can copy and run." },
            { icon: BookOpen, title: "Structured Content", desc: "14 chapters following a university curriculum from basics to advanced topics." },
            { icon: Zap, title: "Interactive Learning", desc: "Expandable slides, tables, and visual aids to make concepts click." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card p-6 hover:glow-border transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Chapters Grid */}
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
