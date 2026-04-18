import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import SlideCard, { type SlideContent } from "./SlideCard";
import CodingProblems from "./CodingProblems";
import { chapterProblems } from "../data/codingProblems";

interface ChapterLayoutProps {
  title: string;
  description: string;
  weekNumber: number;
  slug: string;
  slides: SlideContent[];
  prevChapter?: { slug: string; title: string };
  nextChapter?: { slug: string; title: string };
}

const ChapterLayout = ({ title, description, weekNumber, slug, slides, prevChapter, nextChapter }: ChapterLayoutProps) => {
  const problems = chapterProblems[slug] || [];
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">{title}</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/30 text-xs font-medium text-primary">
              Week {weekNumber}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              ~{Math.ceil(slides.length * 3)} min read
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h1>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed max-w-2xl">{description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="space-y-4">
          {slides.map((slide, i) => (
            <SlideCard key={i} slide={slide} index={i} totalSlides={slides.length} />
          ))}
        </div>

        {problems.length > 0 && <CodingProblems problems={problems} />}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
          {prevChapter ? (
            <Link
              to={`/${prevChapter.slug}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary hover:bg-secondary/80 text-sm text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{prevChapter.title}</span>
              <span className="sm:hidden">Previous</span>
            </Link>
          ) : <div />}
          {nextChapter ? (
            <Link
              to={`/${nextChapter.slug}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <span className="hidden sm:inline">{nextChapter.title}</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Back to Home
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterLayout;
