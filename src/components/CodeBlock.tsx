import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeBlock = ({ code, language = "c", title }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting for C
  const highlightCode = (code: string) => {
    const lines = code.split("\n");
    return lines.map((line, i) => {
      let highlighted = line
        // Comments
        .replace(/(\/\/.*$)/gm, '<span class="text-code-comment">$1</span>')
        .replace(/(\/\*[\s\S]*?\*\/)/gm, '<span class="text-code-comment">$1</span>')
        // Strings
        .replace(/("(?:[^"\\]|\\.)*")/g, '<span class="text-code-string">$1</span>')
        .replace(/('(?:[^'\\]|\\.)*')/g, '<span class="text-code-string">$1</span>')
        // Preprocessor
        .replace(/(#\w+)/g, '<span class="text-code-keyword">$1</span>')
        // Keywords
        .replace(/\b(int|float|double|char|void|return|if|else|for|while|do|switch|case|break|continue|default|struct|union|enum|typedef|const|static|unsigned|signed|long|short|sizeof|NULL|printf|scanf|main|include|define)\b/g,
          '<span class="text-code-keyword">$1</span>')
        // Functions (word followed by parenthesis)
        .replace(/\b([a-zA-Z_]\w*)\s*(?=\()/g, '<span class="text-code-function">$1</span>')
        // Numbers
        .replace(/\b(\d+\.?\d*)\b/g, '<span class="text-code-number">$1</span>');
      return (
        <div key={i} className="flex">
          <span className="select-none text-muted-foreground/40 w-8 text-right mr-4 text-xs leading-6">{i + 1}</span>
          <span dangerouslySetInnerHTML={{ __html: highlighted }} className="leading-6" />
        </div>
      );
    });
  };

  return (
    <div className="code-block my-4 group">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-secondary/50">
          <span className="text-xs font-mono text-muted-foreground">{title}</span>
          <span className="text-xs font-mono text-primary/60">{language}</span>
        </div>
      )}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 rounded-md bg-secondary/80 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all opacity-0 group-hover:opacity-100"
        >
          {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
        </button>
        <pre className="p-4 text-sm font-mono overflow-x-auto text-foreground/90">
          <code>{highlightCode(code)}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
