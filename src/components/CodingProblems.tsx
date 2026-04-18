import { useState } from "react";
import { Code, ChevronDown, ChevronUp, Lightbulb, Terminal } from "lucide-react";
import CodeBlock from "./CodeBlock";
import { type CodingProblem } from "../data/codingProblems";

interface CodingProblemsProps {
  problems: CodingProblem[];
}

const CodingProblems = ({ problems }: CodingProblemsProps) => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [showOutput, setShowOutput] = useState<Record<number, boolean>>({});

  const toggle = (i: number) => setRevealed((prev) => ({ ...prev, [i]: !prev[i] }));
  const toggleOutput = (i: number) => setShowOutput((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
          <Code className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-foreground">Practice Problems</h2>
          <p className="text-xs text-muted-foreground">Test your understanding with these coding exercises</p>
        </div>
      </div>

      <div className="space-y-4">
        {problems.map((problem, i) => (
          <div key={i} className="glass-card overflow-hidden">
            <div className="p-5">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground leading-relaxed">{problem.question}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      onClick={() => toggle(i)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors"
                    >
                      <Lightbulb className="w-3.5 h-3.5" />
                      {revealed[i] ? "Hide Solution" : "Show Solution"}
                      {revealed[i] ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                    <button
                      onClick={() => toggleOutput(i)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary text-foreground text-xs font-medium hover:bg-secondary/70 transition-colors border border-border"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      {showOutput[i] ? "Hide Output" : "View Output"}
                      {showOutput[i] ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {revealed[i] && (
              <div className="px-5 pb-3">
                <CodeBlock code={problem.answer} title={problem.filename} />
              </div>
            )}
            {showOutput[i] && (
              <div className="px-5 pb-5">
                <div className="rounded-lg border border-border bg-secondary/40 overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-secondary/60">
                    <Terminal className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-mono text-muted-foreground">Program Output</span>
                  </div>
                  <pre className="p-4 text-sm font-mono text-foreground/90 whitespace-pre-wrap overflow-x-auto">
{problem.output || "(no output)"}
                  </pre>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingProblems;
