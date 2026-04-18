import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import CodeBlock from "./CodeBlock";
import { getSlideIcon } from "../lib/iconMap";

export interface SlideContent {
  title: string;
  subtitle?: string;
  bullets?: string[];
  code?: { code: string; title?: string };
  table?: { headers: string[]; rows: string[][] };
  note?: string;
  subBullets?: Record<number, string[]>;
}

interface SlideCardProps {
  slide: SlideContent;
  index: number;
  totalSlides: number;
}

const SlideCard = ({ slide, index }: SlideCardProps) => {
  const [expanded, setExpanded] = useState(true);
  const SlideIcon = getSlideIcon(index);

  return (
    <div className="glass-card overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
            <SlideIcon className="w-4.5 h-4.5" style={{ width: 18, height: 18 }} />
          </span>
          <div>
            <h3 className="text-base font-semibold text-foreground">{slide.title}</h3>
            {slide.subtitle && <p className="text-sm text-muted-foreground mt-0.5">{slide.subtitle}</p>}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {expanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-5 space-y-4">
          {slide.bullets && (
            <ul className="space-y-2">
              {slide.bullets.map((bullet, i) => (
                <li key={i}>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-foreground/85 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatText(bullet) }} />
                  </div>
                  {slide.subBullets?.[i] && (
                    <ul className="ml-6 mt-1 space-y-1">
                      {slide.subBullets[i].map((sub, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: formatText(sub) }} />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}

          {slide.code && (
            <CodeBlock code={slide.code.code} title={slide.code.title} />
          )}

          {slide.table && (
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary/50">
                    {slide.table.headers.map((h, i) => (
                      <th key={i} className="px-4 py-2.5 text-left font-medium text-foreground border-b border-border">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {slide.table.rows.map((row, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-secondary/20 transition-colors">
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-2 text-muted-foreground" dangerouslySetInnerHTML={{ __html: formatText(cell) }} />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {slide.note && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20">
              <span className="text-primary text-sm">💡</span>
              <p className="text-sm text-primary/80" dangerouslySetInnerHTML={{ __html: formatText(slide.note) }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

function formatText(text: string): string {
  return text
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-secondary text-primary text-xs font-mono">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

export default SlideCard;
