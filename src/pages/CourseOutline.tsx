import { Link } from "react-router-dom";
import { chapters } from "../data/chapters";

const weeklyTopics = [
  { week: 1, topic: "Introduction to C Programming", desc: "Overview of programming paradigms, structured programming principles (sequence, selection, iteration), computational thinking; introduction to C programming language and development environment", co: "CO1", assessment: "Class Test 1, Mid-term Exam" },
  { week: 2, topic: "Programming Fundamentals", desc: "Data types and type systems, constants, variables and their scope and lifetime, operators (arithmetic, relational, logical, bitwise), expressions and evaluation order, type conversion rules, type-casting", co: "CO1", assessment: "Class Test 1, Mid-term Exam" },
  { week: 3, topic: "Control structures Part 1", desc: "Conditional statements (if-else, switch-case)", co: "CO1", assessment: "Class Test 1, Mid-term Exam, Final Exam" },
  { week: 4, topic: "Control structures Part 2", desc: "Loops (while, do-while, for), nested control structures, break, continue", co: "CO1", assessment: "Mid-term Exam, Final Exam" },
  { week: 5, topic: "Control structures Part 3", desc: "Algorithm development and representation (pseudocode, flowchart), problem solving using conditional statements, problem solving using loops", co: "CO3", assessment: "Class Test 2, Mid-term Exam, Final Exam" },
  { week: 6, topic: "Arrays and Strings Part 1", desc: "One-dimensional arrays (declaration, initialization, memory representation, operations), searching algorithms (linear search, binary search) with complexity analysis", co: "CO3", assessment: "Class Test 2, Final Exam" },
  { week: 7, topic: "Arrays and Strings Part 2", desc: "Multi-dimensional arrays (memory layout, matrix operations); character arrays and strings (memory representation, basic string operations and library functions)", co: "CO3", assessment: "Class Test 2, Final Exam" },
  { week: 8, topic: "Arrays and Strings Part 3", desc: "Array operations (insertion, deletion, updating elements), array traversal, basic array applications, introduction to sorting, searching comparison", co: "CO3", assessment: "Class Test 2, Final Exam" },
  { week: 9, topic: "Pointers and Memory Management", desc: "Pointer fundamentals and pointer arithmetic, pointers to variables, arrays (pointer-array relationship), strings", co: "CO2", assessment: "Class Test 3, Final Exam" },
  { week: 10, topic: "Functions and Recursion", desc: "Function definition and declaration, parameter passing mechanisms (by value, by reference using pointers), return types, function scope and storage classes", co: "CO2", assessment: "Class Test 3, Final Exam" },
  { week: 11, topic: "User-Defined Data Types", desc: "Structures (definition, memory layout, operations, nested structures), unions (concept and use cases)", co: "CO3", assessment: "Assignment, Final Exam" },
  { week: 12, topic: "Input/Output (I/O)", desc: "Console I/O operations, formatted I/O, file handling concepts, file I/O operations (text and binary files)", co: "CO3", assessment: "Assignment, Final Exam" },
  { week: 13, topic: "Advance Programming Concepts", desc: "Conditional statements (ternary operator), Array of Structures, enumerations, command-line arguments", co: "CO3", assessment: "Assignment, Final Exam" },
  { week: 14, topic: "Revision & Wrap-up", desc: "Comprehensive review of all topics covered", co: "-", assessment: "-" },
];

const CourseOutline = () => {
  return (
    <div className="min-h-screen">
      <div className="border-b border-border bg-card/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Course Outline</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Course Outline</h1>
          <p className="text-muted-foreground mt-2 text-sm">CSE 2123 — Introduction to Computer Programming | 3.00 Credit Hours | Winter 2026</p>
          <p className="text-muted-foreground text-sm">Department of Civil Engineering, BAUST Saidpur | Instructor: Md. Rakib Trofder</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Synopsis */}
        <div className="glass-card p-6 mb-8">
          <h2 className="font-semibold text-foreground mb-2">Synopsis</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This course provides the foundation of computer programming. It introduces structured programming principles, problem-solving with algorithms and flowcharts, and key concepts such as data types, control structures, functions, arrays, pointers, and file handling. The course prepares students with essential knowledge for developing correct and efficient programs and builds the groundwork for advanced courses like Object Oriented Programming, Data Structures and Algorithms.
          </p>
        </div>

        {/* Assessment */}
        <div className="glass-card p-6 mb-8">
          <h2 className="font-semibold text-foreground mb-3">Assessment Methods</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { label: "Class Performance", pct: "5%" },
              { label: "Class Test", pct: "15%" },
              { label: "Assignments", pct: "5%" },
              { label: "Mid-term", pct: "15%" },
              { label: "Final Exam", pct: "60%" },
            ].map(({ label, pct }) => (
              <div key={label} className="text-center p-3 rounded-lg bg-secondary/50">
                <div className="text-lg font-bold text-primary">{pct}</div>
                <div className="text-xs text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Distribution */}
        <h2 className="font-semibold text-foreground mb-4">Weekly Distribution</h2>
        <div className="space-y-3">
          {weeklyTopics.map((w) => {
            const relatedChapters = chapters.filter(c => c.week === w.week);
            return (
              <div key={w.week} className="glass-card p-4 hover:glow-border transition-all duration-300">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-xs font-mono text-primary">
                    {w.week}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm">{w.topic}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{w.desc}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent/10 text-accent">{w.co}</span>
                      <span className="text-[10px] text-muted-foreground">{w.assessment}</span>
                    </div>
                    {relatedChapters.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {relatedChapters.map(ch => (
                          <Link key={ch.id} to={`/${ch.slug}`} className="text-[10px] px-2 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                            {ch.icon} {ch.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* References */}
        <div className="glass-card p-6 mt-8">
          <h2 className="font-semibold text-foreground mb-3">References</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>📕 C Programming: A Modern Approach by K. N. King (Text Book)</li>
            <li>📗 Let Us C by Yashavant Kanetkar</li>
            <li>📘 Teach Yourself C by Herbert Schildt</li>
            <li>📙 C: The Complete Reference by Herbert Schildt</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseOutline;
