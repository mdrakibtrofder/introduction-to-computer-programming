import { Link, useLocation } from "react-router-dom";
import { Code2, ChevronDown, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { chapters } from "../data/chapters";
import { getChapterIcon } from "../lib/iconMap";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [chaptersOpen, setChaptersOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setChaptersOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on route change
  useEffect(() => {
    setChaptersOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  const sortedChapters = [...chapters].sort((a, b) => a.week - b.week || a.id - b.id);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-semibold text-foreground text-sm">
                Introduction to Computer Programming
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                Learn · Practice · Master
              </span>
            </div>
          </Link>

          {/* Desktop: Chapters dropdown */}
          <div className="hidden md:block relative" ref={dropdownRef}>
            <button
              onClick={() => setChaptersOpen((o) => !o)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                chaptersOpen
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              All Chapters
              <ChevronDown
                className={`w-4 h-4 transition-transform ${chaptersOpen ? "rotate-180" : ""}`}
              />
            </button>

            {chaptersOpen && (
              <div className="absolute right-0 mt-2 w-[420px] max-h-[70vh] overflow-y-auto rounded-xl border border-border bg-popover shadow-xl animate-fade-in p-2">
                <div className="px-3 py-2 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                  Browse all {sortedChapters.length} chapters
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {sortedChapters.map((ch) => {
                    const Icon = getChapterIcon(ch.icon);
                    const active = location.pathname === `/${ch.slug}`;
                    return (
                      <Link
                        key={ch.id}
                        to={`/${ch.slug}`}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                          active
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </span>
                        <span className="flex-1 truncate">{ch.title}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground font-mono">
                          W{ch.week}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg p-3 max-h-[70vh] overflow-y-auto">
          <div className="px-2 py-2 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
            All Chapters
          </div>
          <div className="space-y-1">
            {sortedChapters.map((ch) => {
              const Icon = getChapterIcon(ch.icon);
              const active = location.pathname === `/${ch.slug}`;
              return (
                <Link
                  key={ch.id}
                  to={`/${ch.slug}`}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </span>
                  <span className="flex-1 truncate">{ch.title}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground font-mono">
                    W{ch.week}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
