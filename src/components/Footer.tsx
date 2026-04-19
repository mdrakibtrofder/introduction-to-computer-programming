import { Link } from "react-router-dom";
import { Code2, FileText, Github, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 group mb-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-md">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Intro to Computer Programming</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A modern, interactive guide to learning programming fundamentals through C.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/course-outline"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Course Outline
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Contact</h3>
            <a
              href="https://mdrakibtrofder.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              mdrakibtrofder.github.io
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Introduction to Computer Programming.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
