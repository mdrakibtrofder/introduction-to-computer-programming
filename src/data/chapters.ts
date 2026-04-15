import { type SlideContent } from "../components/SlideCard";

export interface Chapter {
  id: number;
  slug: string;
  title: string;
  week: number;
  description: string;
  icon: string;
  slides: SlideContent[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    slug: "introduction-to-c-programming",
    title: "Introduction to C Programming",
    week: 1,
    description: "Overview of programming paradigms, structured programming principles (sequence, selection, iteration), computational thinking; introduction to C programming language and development environment",
    icon: "🚀",
    slides: [
      {
        title: "Introduction to C Programming",
        subtitle: "The Foundation of Modern Computing",
        bullets: [
          "**What is C?** A general-purpose, procedural computer programming language developed in 1972 by **Dennis Ritchie** at Bell Labs.",
          "**Legacy:** It is the \"mother of all languages\"—C++, Java, and Python all borrow heavily from its syntax.",
          "**Why Learn C?**"
        ],
        subBullets: {
          2: [
            "Direct access to memory (Pointers).",
            "High performance and efficiency.",
            "Widely used in Operating Systems (Windows, Linux), Embedded Systems, and Game Engines."
          ]
        }
      },
      {
        title: "Key Features of C",
        subtitle: "Why C is Still Relevant",
        bullets: [
          "**Simplicity:** Small number of keywords (only 32 in C89).",
          "**Portability:** Code written for one system can run on another with little to no modification.",
          "**Mid-Level Language:** Combines the power of low-level languages (assembly) with the readability of high-level languages.",
          "**Modularity:** Programs can be divided into small, manageable functions.",
          "**Static Typing:** Every variable must have a type, reducing runtime errors."
        ]
      },
      {
        title: "The C Development Lifecycle",
        subtitle: "From Code to Execution",
        bullets: [
          "**Source Code:** Writing the logic in a `.c` file.",
          "**Preprocessing:** Handling directives like `#include`.",
          "**Compilation:** Converting C code into assembly code.",
          "**Assembly:** Converting assembly into machine code (object files).",
          "**Linking:** Combining object files and libraries into a single **Executable** (`.exe` or `.out`)."
        ]
      },
      {
        title: "Structure of a C Program",
        subtitle: "Anatomy of \"Hello World\"",
        bullets: [
          "`#include <stdio.h>`: Preprocessor command to include standard input-output functions.",
          "`int main()`: The starting point of every C program.",
          "`{ ... }`: Braces indicating the beginning and end of a code block.",
          "`printf()`: Function used to display text on the screen.",
          "`return 0;`: Signals that the program finished successfully."
        ],
        code: {
          title: "hello.c",
          code: `#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`
        }
      },
      {
        title: "Common Keywords and Identifiers",
        subtitle: "The Vocabulary of C",
        bullets: [
          "**Keywords:** Reserved words that have special meaning (e.g., `int`, `return`, `if`, `while`). You cannot use these as variable names.",
          "**Identifiers:** Names given to variables, functions, or arrays.",
          "**Naming Rules:**"
        ],
        subBullets: {
          2: [
            "Must start with a letter or underscore (`_`).",
            "Can contain digits but not at the start.",
            "Case-sensitive (*Age* and *age* are different).",
            "No special symbols or spaces allowed."
          ]
        }
      },
      {
        title: "Basic Syntax Rules",
        subtitle: "The Grammar of C",
        bullets: [
          "**Semicolons (;):** Every statement must end with a semicolon. It acts as a \"terminator.\"",
          "**Comments:** Single line: `// your comment` | Multi-line: `/* your comment */`",
          "**White Space:** C ignores extra spaces and tabs (used for human readability).",
          "**Case Sensitivity:** `MAIN` is not the same as `main`."
        ]
      },
      {
        title: "Header Files and Libraries",
        subtitle: "Using Built-in Tools",
        bullets: [
          "**Header Files:** Files with a `.h` extension containing function declarations.",
          "**Common Libraries:**"
        ],
        subBullets: {
          1: [
            "`<stdio.h>`: Input and output (`printf`, `scanf`).",
            "`<math.h>`: Mathematical functions (`sqrt`, `pow`).",
            "`<string.h>`: String manipulation functions.",
            "`<stdlib.h>`: Standard library for memory allocation and process control."
          ]
        }
      },
      {
        title: "Summary and Getting Started",
        subtitle: "Your Path Forward",
        bullets: [
          "**Environment Setup:** To run C, you need a Compiler (like GCC or Clang) and an IDE/Editor (like VS Code, Code::Blocks, or Dev-C++).",
          "**Summary:**"
        ],
        subBullets: {
          1: [
            "C is powerful and efficient.",
            "The `main()` function is essential.",
            "Syntax (semicolons, braces) must be perfect."
          ]
        },
        note: "Start by installing GCC and writing your first \"Hello World\" program!"
      }
    ]
  },
  {
    id: 2,
    slug: "variables",
    title: "Variables",
    week: 2,
    description: "Data types and type systems, constants, variables and their scope and lifetime, operators (arithmetic, relational, logical, bitwise), expressions and evaluation order, type conversion rules, type-casting",
    icon: "📦",
    slides: [
      {
        title: "Introduction to Variables",
        subtitle: "What is a Variable?",
        bullets: [
          "**Definition:** A variable is a named location in memory used to store data that can be changed during program execution.",
          "**The Concept:** Think of a variable as a \"container\" or a \"box\" with a label. The label is the variable name, and the item inside is the value.",
          "**Why we need them:** To hold user input, store calculation results, and manage program state.",
          "**Key Components:** A variable in C must have a **Name**, a **Type**, and a **Value**."
        ]
      },
      {
        title: "Variable Declaration vs. Initialization",
        subtitle: "Creating and Preparing Variables",
        bullets: [
          "**Declaration:** Telling the compiler the name and type of the variable. No value is assigned yet.",
          "**Initialization:** Assigning an initial value to the variable.",
          "**Combined Syntax:** You can do both in one line:",
          "**Important:** In C, a variable must be declared before it is used."
        ],
        code: {
          title: "variable_declaration.c",
          code: `int age;          // Declaration
age = 25;         // Initialization
float salary = 50000.50;  // Combined`
        }
      },
      {
        title: "Variable Naming Rules (Identifiers)",
        subtitle: "How to Name Your Variables",
        bullets: [
          "**Must start with:** A letter (A-Z or a-z) or an underscore (`_`).",
          "**Can contain:** Letters, digits (0-9), and underscores.",
          "**Case Sensitivity:** `total`, `Total`, and `TOTAL` are three different variables.",
          "**Reserved Words:** You cannot use keywords like `int`, `while`, or `return` as variable names.",
          "**Best Practices:** Use meaningful names (e.g., `studentCount` instead of `x`)."
        ]
      },
      {
        title: "Memory and Variable Addresses",
        subtitle: "Behind the Scenes: Memory Allocation",
        bullets: [
          "When you declare a variable, the computer allocates a specific amount of space in **RAM**.",
          "**Size:** Depends on the data type (e.g., `int` usually gets 4 bytes).",
          "**Address:** Every variable has a unique memory address (a hexadecimal number).",
          "**The `&` Operator:** Used to find the address of a variable."
        ],
        code: {
          title: "address.c",
          code: `printf("%p", &age);  // Prints the memory address of 'age'`
        }
      },
      {
        title: "L-value and R-value",
        subtitle: "Understanding Assignment",
        bullets: [
          "**L-value (Left value):** An expression that refers to a memory location. It must appear on the left side of the `=` operator. Example: `x = 10;` (`x` is the L-value).",
          "**R-value (Right value):** The actual data value stored in that location. It appears on the right side. Example: `x = 10;` (`10` is the R-value).",
          "**Rule:** You cannot assign a value to a constant or a literal (e.g., `10 = x;` will cause a compiler error)."
        ]
      },
      {
        title: "Variable Scope (Part 1)",
        subtitle: "Local Variables",
        bullets: [
          "**Definition:** Variables declared inside a function or a block `{ }`.",
          "**Accessibility:** They can only be accessed within the block where they are defined.",
          "**Lifetime:** They are created when the block is entered and destroyed when the block is exited.",
          "**Benefit:** Helps prevent naming conflicts and saves memory."
        ]
      },
      {
        title: "Variable Scope (Part 2)",
        subtitle: "Global Variables",
        bullets: [
          "**Definition:** Variables declared outside of all functions (usually at the top of the file).",
          "**Accessibility:** They can be accessed by any function in the program.",
          "**Lifetime:** They exist for the entire duration of the program's execution.",
          "**Caution:** Overusing global variables can make debugging difficult because any part of the program can change their value."
        ]
      },
      {
        title: "Summary and Best Practices",
        subtitle: "Key Takeaways",
        bullets: [
          "**Declare early:** It is common practice in C to declare all variables at the beginning of a function.",
          "**Initialize always:** Variables often contain \"garbage values\" if not initialized; always give them a starting value.",
          "**Use `const`:** If a variable's value shouldn't change, use the `const` keyword (e.g., `const float PI = 3.14;`).",
          "**Choose types wisely:** Use `int` for counts, `float/double` for measurements, and `char` for single symbols."
        ]
      }
    ]
  },
  {
    id: 3,
    slug: "expression-and-operators",
    title: "Expression and Operators",
    week: 2,
    description: "This provides a structured breakdown of how C handles calculations and logic. It moves from simple arithmetic to complex bitwise and logical operations, which are the \"verbs\" of the C language.",
    icon: "🔢",
    slides: [
      {
        title: "Introduction to Operators and Expressions",
        subtitle: "The Building Blocks of Logic",
        bullets: [
          "**Operator:** A symbol that tells the compiler to perform specific mathematical or logical functions (e.g., `+`, `-`, `*`).",
          "**Operand:** The data items that operators act upon (e.g., in `a + b`, `a` and `b` are operands).",
          "**Expression:** A combination of operators and operands that evaluates to a single value.",
          "**Categories we will cover:** Arithmetic & Relational, Logical & Assignment, Increment/Decrement, Bitwise & Special Operators"
        ]
      },
      {
        title: "Arithmetic Operators",
        subtitle: "Basic Mathematical Operations",
        bullets: [
          "Used to perform common mathematical calculations.",
          "**The Operators:** `+` (Addition), `-` (Subtraction), `*` (Multiplication), `/` (Division), `%` (Modulus)",
          "`%` (Modulus): Returns the remainder of an integer division (e.g., `7 % 3 = 1`).",
          "**Integer Division Note:** In C, `5 / 2` equals `2`, not `2.5`, because the fractional part is truncated for integer types."
        ]
      },
      {
        title: "Relational Operators",
        subtitle: "Comparison and Decision Making",
        bullets: [
          "Used to compare two values. The result is always `1 (True)` or `0 (False)`.",
          "**The Operators:** `==` (Equal to) — *Don't confuse with `=` assignment!*",
          "`!=` (Not equal to), `>` (Greater than), `<` (Less than)",
          "`>=` (Greater than or equal to), `<=` (Less than or equal to)",
          "**Example:** `if (age >= 18)` checks if the condition is met for program flow."
        ]
      },
      {
        title: "Logical Operators",
        subtitle: "Combining Multiple Conditions",
        bullets: [
          "Used to combine two or more relational expressions.",
          "`&&` (**Logical AND**): Returns true only if **both** operands are true.",
          "`||` (**Logical OR**): Returns true if **at least one** operand is true.",
          "`!` (**Logical NOT**): Reverses the logical state (True becomes False).",
          "**Short-Circuit Evaluation:** C stops evaluating `&&` if the first part is false, and stops `||` if the first part is true."
        ]
      },
      {
        title: "Assignment Operators",
        subtitle: "Storing Values",
        bullets: [
          "**Simple Assignment (`=`):** Assigns the value on the right to the variable on the left.",
          "**Shorthand (Compound) Assignment:** Combines arithmetic with assignment to make code concise.",
          "`a += b` is equivalent to `a = a + b`",
          "`a -= b` is equivalent to `a = a - b`",
          "`a *= b`, `a /= b`, `a %= b`",
          "This improves readability and sometimes execution speed."
        ]
      },
      {
        title: "Increment and Decrement Operators",
        subtitle: "Unary Operators `++` and `--`",
        bullets: [
          "Used to increase or decrease a variable's value by 1.",
          "**Prefix (`++i`):** Increments the value first, then uses it in the expression.",
          "**Postfix (`i++`):** Uses the current value in the expression first, then increments it."
        ],
        code: {
          title: "increment.c",
          code: `int x = 5, y;
y = ++x; // x=6, y=6
y = x++; // y=6, x=7`
        }
      },
      {
        title: "Operator Precedence and Associativity",
        subtitle: "The Order of Operations",
        bullets: [
          "**Precedence:** Determines which operator is evaluated first in a complex expression (like PEMDAS in math). `*` and `/` have higher precedence than `+` and `-`.",
          "**Associativity:** Determines the direction of evaluation (Left-to-Right or Right-to-Left) when operators have the same precedence.",
          "**Rule of Thumb:** Always use parentheses `()` to make your intentions clear and override default precedence."
        ]
      },
      {
        title: "Bitwise and Special Operators",
        subtitle: "Low-Level and Misc Operators",
        bullets: [
          "**Bitwise Operators:** Act on individual bits of data (Used in systems programming). `&` (AND), `|` (OR), `^` (XOR), `~` (NOT), `<<` (Left Shift), `>>` (Right Shift).",
          "**The `sizeof` Operator:** Returns the size of a data type in bytes.",
          "**The Comma Operator (`,`):** Used to link multiple expressions together (evaluated left to right).",
          "**Summary:** Operators are the tools that transform raw data into meaningful information."
        ]
      }
    ]
  },
  {
    id: 4,
    slug: "data-types",
    title: "Data Types",
    week: 2,
    description: "A structured overview of C data types, moving from fundamental concepts to specific memory sizes and ranges. It helps students understand how C manages memory for different kinds of information.",
    icon: "🔤",
    slides: [
      {
        title: "Introduction to Data Types",
        subtitle: "Understanding Data Types in C",
        bullets: [
          "**Definition:** A data type specifies the type of data that a variable can store, such as integers, characters, or floating-point numbers.",
          "**Why they matter:**"
        ],
        subBullets: {
          1: [
            "They determine how much **memory** to allocate.",
            "They define the **operations** allowed on the data.",
            "They help the compiler interpret the bit patterns in memory."
          ]
        },
        note: "**Key Categories:** Basic, Derived, Enumeration, and Void."
      },
      {
        title: "Classification of Data Types",
        subtitle: "The C Data Type Hierarchy",
        bullets: [
          "**Basic Types (Primary):** `int`, `char`, `float`, `double`.",
          "**Derived Types:** Arrays, Pointers, Structures, Unions.",
          "**Enumeration Type:** `enum`.",
          "**Void Type:** `void` (Represents the absence of a value)."
        ]
      },
      {
        title: "Integer Types (int)",
        subtitle: "Working with Whole Numbers",
        bullets: [
          "**Purpose:** Used to store whole numbers without fractions.",
          "**Keywords:** `int`, `short`, `long`.",
          "**Memory Size:** Typically **4 bytes** on modern 64-bit systems.",
          "**Format Specifier:** `%d` or `%i`.",
          "**Example:** `int age = 25;`",
          "**Range:** For a 4-byte int, the range is approximately -2,147,483,648 to 2,147,483,647."
        ]
      },
      {
        title: "Floating-Point Types",
        subtitle: "Handling Decimals and Precision",
        bullets: [
          "**`float`:** Size: 4 bytes. Precision: Up to 6-7 decimal places. Specifier: `%f`.",
          "**`double`:** Size: 8 bytes. Precision: Up to 15 decimal places (Double precision). Specifier: `%lf`.",
          "**`long double`:** 10 to 16 bytes for even higher precision."
        ]
      },
      {
        title: "Character Type (char)",
        subtitle: "Storing Text and Symbols",
        bullets: [
          "**Purpose:** Used to store a single character.",
          "**Memory Size:** 1 byte.",
          "**Format Specifier:** `%c`.",
          "**The ASCII Connection:** C treats characters as small integers. For example, `'A'` is stored as the value 65.",
          "**Example:** `char grade = 'A';`"
        ]
      },
      {
        title: "Type Qualifiers and Modifiers",
        subtitle: "Fine-Tuning Data Types",
        bullets: [
          "**Size Modifiers:** `short`: Reduces memory size (usually 2 bytes). `long`: Increases memory size.",
          "**Sign Modifiers:** `signed`: Can store both positive and negative values (default). `unsigned`: Stores only positive values (doubles the positive range).",
          "**Example:** `unsigned int positive_only = 500;`"
        ]
      },
      {
        title: "Size and Range Summary Table",
        subtitle: "Memory and Capacity at a Glance",
        table: {
          headers: ["Data Type", "Size (Bytes)", "Range (approx.)", "Specifier"],
          rows: [
            ["char", "1", "-128 to 127", "%c"],
            ["unsigned char", "1", "0 to 255", "%c"],
            ["int", "4", "-2B to +2B", "%d"],
            ["float", "4", "1.2E-38 to 3.4E+38", "%f"],
            ["double", "8", "2.3E-308 to 1.7E+308", "%lf"]
          ]
        }
      },
      {
        title: "The sizeof Operator",
        subtitle: "Checking Memory in Real-Time",
        bullets: [
          "Since data type sizes can vary between different architectures (32-bit vs 64-bit), C provides the `sizeof` operator.",
          "**Usage:** Returns the size of a type or variable in bytes.",
          "**Best Practice:** Always use `sizeof` when allocating memory or checking system compatibility to ensure your code is portable."
        ],
        code: {
          title: "sizeof_example.c",
          code: `printf("Size of int: %zu bytes", sizeof(int));`
        }
      }
    ]
  },
  {
    id: 5,
    slug: "conditional-statement",
    title: "Conditional Statement",
    week: 3,
    description: "Decision-making logic in C. It moves from simple binary choices to complex, multi-layered conditions, emphasizing the importance of logical flow and syntax.",
    icon: "🔀",
    slides: [
      {
        title: "Introduction to Decision Making",
        subtitle: "Decision Making in C",
        bullets: [
          "**Concept:** In programming, we often need to execute different blocks of code based on specific conditions.",
          "**The \"If\" Logic:** If a condition is true, do something; if not, do something else (or nothing).",
          "**Key Components:** **Relational Operators:** `==`, `!=`, `<`, `>`, `<=`, `>=` | **Logical Operators:** `&&` (AND), `||` (OR), `!` (NOT)",
          "**Goal:** Control the flow of the program rather than executing code linearly."
        ]
      },
      {
        title: "The Simple if Statement",
        subtitle: "The One-Way Decision",
        bullets: [
          "**Purpose:** Executes a block of code only if a specified condition is true.",
          "**Note:** If the body contains only one line, the curly braces `{}` are optional, but using them is a \"Best Practice\" to avoid errors."
        ],
        code: {
          title: "if_statement.c",
          code: `if (condition) {
    // code to execute if condition is true
}`
        }
      },
      {
        title: "The if-else Statement",
        subtitle: "The Two-Way Decision",
        bullets: [
          "**Purpose:** Provides an alternative path when the `if` condition is false.",
          "**Example:** Checking if a number is Even or Odd."
        ],
        code: {
          title: "if_else.c",
          code: `if (condition) {
   // code if true
} else {
   // code if false
}

// Example: Even or Odd
if (num % 2 == 0)
   printf("Even");
else
   printf("Odd");`
        }
      },
      {
        title: "The else-if Ladder",
        subtitle: "Multiple Conditions",
        bullets: [
          "**Purpose:** Used when there are more than two possible paths or outcomes.",
          "**How it works:** The compiler checks conditions from top to bottom. The first true condition is executed, and the rest are skipped."
        ],
        code: {
          title: "else_if.c",
          code: `if (condition1) { ... }
else if (condition2) { ... }
else if (condition3) { ... }
else { // default case }`
        }
      },
      {
        title: "Practical Example: Grading System",
        subtitle: "Implementing the Ladder",
        bullets: [
          "**Scenario:** Assigning grades based on marks.",
          "**Logic Tip:** Always order your conditions logically (usually from highest value to lowest) to ensure the correct block triggers."
        ],
        code: {
          title: "grading.c",
          code: `if (marks >= 80) {
    printf("Grade: A+");
} else if (marks >= 70) {
    printf("Grade: A");
} else if (marks >= 60) {
    printf("Grade: B");
} else {
    printf("Grade: F");
}`
        }
      },
      {
        title: "Nested if-else Statements",
        subtitle: "Decisions within Decisions",
        bullets: [
          "**Definition:** An `if` statement placed inside another `if` or `else` block.",
          "**Use Case:** When a second condition depends on the first one being true."
        ],
        code: {
          title: "nested_if.c",
          code: `if (age >= 18) {
    if (has_license) {
        printf("You can drive.");
    } else {
        printf("You need a license.");
    }
} else {
    printf("Too young to drive.");
}`
        }
      },
      {
        title: "Logical Operators in Conditions",
        subtitle: "Combining Conditions",
        bullets: [
          "**AND (`&&`):** Both conditions must be true. `if (age > 18 && age < 30)`",
          "**OR (`||`):** At least one condition must be true. `if (day == 'S' || day == 's')` // Checking for Saturday or Sunday",
          "**NOT (`!`):** Reverses the result. `if (!(age < 18))` // Same as `age >= 18`"
        ]
      },
      {
        title: "Common Pitfalls & Summary",
        subtitle: "Avoiding Errors",
        bullets: [
          "**The Assignment Trap:** Using `=` instead of `==`. `if (x = 5)` — This sets x to 5 and is always \"true\"! `if (x == 5)` — This correctly checks if x is 5.",
          "**Dangling Else:** An `else` always attaches to the nearest preceding `if` unless braces are used.",
          "**Summary:** Use `if` for single checks. Use `if-else` for binary choices. Use `else-if` for multiple mutually exclusive options."
        ]
      }
    ]
  },
  {
    id: 6,
    slug: "for-loop",
    title: "For Loop",
    week: 4,
    description: "Understanding not just the syntax of the for loop, but the underlying logic and execution flow that makes it the most popular looping construct in C.",
    icon: "🔄",
    slides: [
      {
        title: "Introduction to Loops",
        subtitle: "Why We Use Loops",
        bullets: [
          "**The Problem:** Repeating the same block of code multiple times is inefficient and hard to maintain.",
          "**The Solution:** Loops allow us to execute a block of code a specific number of times or until a condition is met.",
          "**Types of Loops in C:**"
        ],
        subBullets: {
          2: [
            "`for` loop (Deterministic/Counter-controlled)",
            "`while` loop (Entry-controlled)",
            "`do-while` loop (Exit-controlled)"
          ]
        },
        note: "**Focus:** Today we focus on the `for` loop, the most structured way to repeat tasks."
      },
      {
        title: "Syntax of the for Loop",
        subtitle: "The Structure of a For Loop",
        bullets: [
          "The `for` loop groups the three essential parts of a loop into one line:",
          "**Initialization:** Sets the starting value of a counter variable.",
          "**Condition:** The loop continues as long as this remains true.",
          "**Update:** Changes the counter variable after each iteration."
        ],
        code: {
          title: "for_syntax.c",
          code: `for (initialization; condition; increment/decrement) {
    // Body of the loop (statements to be repeated)
}`
        }
      },
      {
        title: "How it Works (Execution Flow)",
        subtitle: "The Step-by-Step Process",
        bullets: [
          "**Step 1:** The **Initialization** executes once.",
          "**Step 2:** The **Condition** is evaluated. If false, the loop ends.",
          "**Step 3:** The **Body** of the loop is executed.",
          "**Step 4:** The **Update** expression runs.",
          "**Step 5:** Go back to **Step 2**."
        ]
      },
      {
        title: "A Basic Example",
        subtitle: "Printing Numbers 1 to 5",
        bullets: [
          "**Analysis:** `i = 1`: Start at 1. `i <= 5`: Keep going while i is 5 or less. `i++`: Add 1 to i every time the loop finishes a round."
        ],
        code: {
          title: "print_numbers.c",
          code: `#include <stdio.h>
int main() {
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    return 0;
}`
        }
      },
      {
        title: "Variations in For Loops",
        subtitle: "Flexibility of the Syntax",
        bullets: [
          "**Decrementing Loops:** `for (int i = 10; i > 0; i--)` // Counts down from 10 to 1.",
          "**Different Increments:** `for (int i = 0; i <= 20; i += 2)` // Prints even numbers.",
          "**Multiple Expressions:** `for (i = 0, j = 10; i < j; i++, j--)` // You can manage two variables at once.",
          "**Infinite Loops:** `for ( ; ; )` // A loop with no exit condition (use with caution!)."
        ]
      },
      {
        title: "The break and continue Keywords",
        subtitle: "Altering Loop Control",
        bullets: [
          "**`break`:** Immediately exits the loop, regardless of the condition. Use case: Finding a specific value in a list and stopping early.",
          "**`continue`:** Skips the rest of the current iteration and jumps straight to the **Update** step. Use case: Skipping negative numbers in a calculation."
        ]
      },
      {
        title: "Nested For Loops",
        subtitle: "Loops Inside Loops",
        bullets: [
          "A nested loop is a loop inside the body of another loop.",
          "**Primary Use:** Processing 2D data (like grids or matrices).",
          "**Execution Logic:** For every one iteration of the outer loop, the inner loop completes its entire cycle."
        ],
        code: {
          title: "nested_loop.c",
          code: `for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        printf("* ");
    }
    printf("\\n");
}`
        }
      },
      {
        title: "Common Mistakes & Best Practices",
        subtitle: "Tips for Clean Coding",
        bullets: [
          "**Off-by-One Error:** Being careful with `<` vs `<=` (e.g., looping 10 times with an index starting at 0).",
          "**Infinite Loops:** Ensure your update expression actually moves the variable toward the exit condition.",
          "**Scope:** Variables declared inside the `for` statement (e.g., `int i`) are only accessible inside that loop.",
          "**Summary:** The `for` loop is your best tool when you know exactly how many times a task needs to be performed."
        ]
      }
    ]
  },
  {
    id: 7,
    slug: "array",
    title: "Array",
    week: 6,
    description: "Focusing on clarity, memory management, and practical syntax. It follows a logical flow from \"what is it?\" to \"how do we use it?\"",
    icon: "📊",
    slides: [
      {
        title: "Introduction to Arrays",
        subtitle: "Understanding Arrays in C",
        bullets: [
          "**Definition:** A collection of variables of the same data type stored in contiguous memory locations.",
          "**Why use them?** To handle multiple data points (like 100 student marks) without declaring 100 separate variables.",
          "**Key Characteristics:**"
        ],
        subBullets: {
          2: [
            "Fixed size (defined at compile time).",
            "Homogeneous (all elements must be the same type).",
            "Sequential memory allocation."
          ]
        }
      },
      {
        title: "Array Declaration & Initialization",
        subtitle: "Syntax and Memory Allocation",
        bullets: [
          "**Declaration:** `data_type array_name[array_size];` Example: `int marks[5];`",
          "**Initialization Styles:**"
        ],
        subBullets: {
          1: [
            "**Specific values:** `int age[3] = {20, 22, 19};`",
            "**Partial:** `int numbers[5] = {1, 2};` (Rest become 0).",
            "**Automatic size:** `int vals[] = {10, 20, 30};`"
          ]
        },
        note: "If an `int` is 4 bytes, `marks[5]` occupies 20 bytes of continuous space."
      },
      {
        title: "Accessing Elements & Indexing",
        subtitle: "The \"Zero-Based\" Rule",
        bullets: [
          "**Indexing:** In C, arrays always start at index `0`.",
          "**Range:** An array of size N has indices from 0 to N-1.",
          "**Accessing:** Use the subscript operator `[]`. `first_element = marks[0];` `last_element = marks[4];`",
          "**Warning:** Accessing `marks[5]` leads to **Array Out of Bounds** (undefined behavior/segmentation fault)."
        ]
      },
      {
        title: "Input and Output with Loops",
        subtitle: "Traversing the Array",
        bullets: [
          "Since arrays are sequential, we use `for` loops to process them."
        ],
        code: {
          title: "array_io.c",
          code: `// Reading values from user
for(int i = 0; i < 5; i++) {
    scanf("%d", &marks[i]);
}

// Printing values
for(int i = 0; i < 5; i++) {
    printf("%d ", marks[i]);
}`
        }
      },
      {
        title: "Memory Management (Deep Dive)",
        subtitle: "Contiguous Memory & Addresses",
        bullets: [
          "The name of the array (e.g., `marks`) acts as a pointer to the first element (`&marks[0]`).",
          "**Address Arithmetic:** Address of `marks[i]` = Base Address + (i × size_of_datatype).",
          "**Visualizing Addresses:** `marks[0]` at 1000, `marks[1]` at 1004 (if int is 4 bytes), `marks[2]` at 1008"
        ]
      },
      {
        title: "Multi-Dimensional Arrays",
        subtitle: "2D Arrays (Matrices)",
        bullets: [
          "**Concept:** An array of arrays. Primarily used for tables and matrices.",
          "**Declaration:** `int matrix[rows][cols];` Example: `int board[3][3]; // A 3x3 grid`",
          "**Nested Loops:** Used for traversal (outer loop for rows, inner for columns)."
        ],
        code: {
          title: "2d_array.c",
          code: `int table[2][3] = { {1, 2, 3}, {4, 5, 6} };`
        }
      },
      {
        title: "Common Operations",
        subtitle: "Searching and Sorting",
        bullets: [
          "**Linear Search:** Checking each element one by one to find a target value.",
          "**Finding Extremes:** Initialize `max = arr[0]`. Loop through, if `arr[i] > max`, update `max`.",
          "**Sum/Average:** Use a `sum` variable inside a loop to accumulate values."
        ]
      },
      {
        title: "Summary and Best Practices",
        subtitle: "Key Takeaways",
        bullets: [
          "**Do:** Always check your loop bounds to avoid crashes.",
          "**Don't:** Try to resize an array after it is declared (use dynamic memory allocation for that).",
          "**Pro-Tip:** Use `#define SIZE 10` for array sizes to make code maintainable.",
          "**Summary:** Arrays are the foundation for more complex data structures like Stacks, Queues, and Hash Tables."
        ]
      }
    ]
  },
  {
    id: 8,
    slug: "string",
    title: "String",
    week: 7,
    description: "Following a professional pedagogical structure, moving from the basic memory representation to the practical use of <string.h> library.",
    icon: "📝",
    slides: [
      {
        title: "Introduction to Strings in C",
        subtitle: "What is a String in C?",
        bullets: [
          "**Definition:** In C, a string is not a built-in data type. It is a one-dimensional array of characters terminated by a special character.",
          "**The Null Terminator (`\\0`):** Every string must end with the null character to tell the compiler where the string ends in memory.",
          "**Header File:** For advanced manipulation, we use `#include <string.h>`.",
          "**Example:** The string \"Hi\" is actually stored as `{'H', 'i', '\\0'}`."
        ]
      },
      {
        title: "Declaration and Initialization",
        subtitle: "How to Define Strings",
        bullets: [
          "**Option 1: Character Array** `char name[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};`",
          "**Option 2: String Literal (Most Common)** `char name[] = \"Hello\";` (The compiler automatically adds `\\0`).",
          "**Option 3: String Pointer** `char *str = \"Hello\";` (Stored in read-only memory).",
          "**Important Rule:** Always ensure the array size is Length + 1 to accommodate the null terminator."
        ]
      },
      {
        title: "Strings in Memory",
        subtitle: "The Memory Layout",
        bullets: [
          "Strings are stored in contiguous memory locations.",
          "Each character occupies 1 byte."
        ],
        table: {
          headers: ["Index", "0", "1", "2", "3", "4", "5", "6"],
          rows: [
            ["Char", "C", "-", "P", "r", "o", "g", "\\0"],
            ["Address", "1000", "1001", "1002", "1003", "1004", "1005", "1006"]
          ]
        }
      },
      {
        title: "Input and Output Operations",
        subtitle: "Reading and Writing Strings",
        bullets: [
          "**Standard Output:** `printf(\"%s\", name);` or `puts(name);`",
          "**Standard Input:** `scanf(\"%s\", name);` — **Note:** This stops reading at the first whitespace (space, tab).",
          "**Reading Multi-word Strings:** `fgets(name, sizeof(name), stdin);` — The safest way to read a full line including spaces."
        ]
      },
      {
        title: "Common String Functions (Part 1)",
        subtitle: "Using <string.h> for Manipulation",
        bullets: [
          "`strlen(s)`: Returns the length of the string (excluding `\\0`).",
          "`strcpy(dest, src)`: Copies the content of `src` to `dest`.",
          "`strcat(s1, s2)`: Concatenates (appends) `s2` to the end of `s1`."
        ],
        code: {
          title: "string_functions.c",
          code: `char s1[20] = "Hello ";
strcat(s1, "World"); // s1 becomes "Hello World"`
        }
      },
      {
        title: "Common String Functions (Part 2)",
        subtitle: "Comparing and Searching",
        bullets: [
          "`strcmp(s1, s2)`: Compares two strings lexicographically. Returns `0` if equal. Returns `> 0` if `s1` is \"greater\" than `s2`. Returns `< 0` if `s1` is \"lesser\" than `s2`.",
          "`strrev(s)`: Reverses the string (Note: non-standard in some compilers).",
          "`strlwr()` / `strupr()`: Converts string to lowercase or uppercase."
        ]
      },
      {
        title: "Array of Strings (2D Arrays)",
        subtitle: "Handling Multiple Strings",
        bullets: [
          "To store multiple names or words, we use a **2D character array**.",
          "**Syntax:** `char students[row_size][col_size];`",
          "**Accessing:** `colors[1]` refers to \"Green\".",
          "**Memory usage:** Each row has a fixed width of 10 bytes, regardless of the word length."
        ],
        code: {
          title: "array_of_strings.c",
          code: `char colors[3][10] = {"Red", "Green", "Blue"};`
        }
      },
      {
        title: "Important Tips and Security",
        subtitle: "Best Practices & Common Pitfalls",
        bullets: [
          "**Buffer Overflow:** Never use `gets()`; it doesn't check array bounds. Always use `fgets()`.",
          "**The `\\0` Trap:** Forgetting the null terminator when manually assigning characters leads to \"garbage\" values being printed.",
          "**Assignment vs Copying:** You cannot do `str1 = str2`; to copy strings in C. You must use `strcpy()`.",
          "**Constant Strings:** `char *ptr = \"Hello\";` creates a string literal that cannot be modified (attempting to do so causes a crash)."
        ]
      }
    ]
  },
  {
    id: 9,
    slug: "pointer",
    title: "Pointer",
    week: 9,
    description: "Designed to demystify pointers—often the most challenging topic for students—by focusing on the relationship between memory addresses and variable values.",
    icon: "👉",
    slides: [
      {
        title: "Introduction to Pointers",
        subtitle: "The Concept of Pointers",
        bullets: [
          "**Definition:** A pointer is a variable that stores the **memory address** of another variable.",
          "**Why use Pointers?**"
        ],
        subBullets: {
          1: [
            "Dynamic memory allocation.",
            "Efficient handling of arrays and strings.",
            "Passing arguments by reference (modifying values inside functions).",
            "Improving program execution speed."
          ]
        },
        note: "**Key Concept:** Every variable has a **Value** and an **Address**."
      },
      {
        title: "Pointer Syntax and Operators",
        subtitle: "Declaring and Initializing",
        bullets: [
          "**Declaration:** `data_type *pointer_name;` Example: `int *ptr;` (A pointer to an integer).",
          "**The Address-of Operator (`&`):** Returns the memory address of a variable.",
          "**The Dereferencing Operator (`*`):** Used to access the value stored at the address held by the pointer."
        ],
        code: {
          title: "pointer_init.c",
          code: `int x = 10;
int *ptr = &x; // ptr now holds the address of x`
        }
      },
      {
        title: "Memory Representation",
        subtitle: "Visualizing the Address",
        bullets: [
          "If `int x = 10` is stored at address `1004`: `x` contains `10`. `&x` is `1004`. `ptr` contains `1004`. `*ptr` (dereferencing) gives `10`.",
          "**Pointer Size:** On a 64-bit system, all pointers are typically 8 bytes, regardless of the data type they point to, because they all store an address."
        ]
      },
      {
        title: "Pointer Arithmetic",
        subtitle: "Navigating Memory",
        bullets: [
          "Pointers can be incremented (`++`) or decremented (`--`).",
          "**The Scale Factor:** Adding 1 to a pointer increases the address by the size of the data type.",
          "If `int *p` is at `2000`, `p + 1` will be `2004` (since an `int` is 4 bytes).",
          "If `char *p` is at `2000`, `p + 1` will be `2001`.",
          "This is the underlying logic behind how C navigates through arrays."
        ]
      },
      {
        title: "Pointers and Arrays",
        subtitle: "The Hidden Relationship",
        bullets: [
          "The name of an array is a **constant pointer** to its first element.",
          "`arr[i]` is internally treated by the compiler as `*(arr + i)`.",
          "Pointers can traverse arrays more efficiently than index-based access in some architectures."
        ],
        code: {
          title: "pointer_array.c",
          code: `int marks[3] = {10, 20, 30};
printf("%d", *(marks + 1)); // Prints 20`
        }
      },
      {
        title: "Call by Reference",
        subtitle: "Pointers in Functions",
        bullets: [
          "**Call by Value:** A copy of the variable is passed; the original remains unchanged.",
          "**Call by Reference:** The address is passed using pointers. Changes made inside the function affect the original variable."
        ],
        code: {
          title: "swap.c",
          code: `void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}`
        }
      },
      {
        title: "Types of Pointers",
        subtitle: "Special Pointer Cases",
        bullets: [
          "**NULL Pointer:** A pointer assigned `NULL` (or 0) to indicate it points to nothing. Always check if `(ptr != NULL)` before using.",
          "**Void Pointer (`void *`):** A \"generic\" pointer that can hold the address of any data type. Must be typecast before dereferencing.",
          "**Wild Pointer:** An uninitialized pointer pointing to a random memory location (dangerous!).",
          "**Dangling Pointer:** A pointer pointing to a memory location that has been deleted/freed."
        ]
      },
      {
        title: "Pointer to Pointer (Double Pointers)",
        subtitle: "Multiple Levels of Indirection",
        bullets: [
          "A pointer can store the address of another pointer.",
          "**Syntax:** `int **dptr;`",
          "**Visualization:** Variable x ← Pointer p1 ← Pointer p2",
          "Commonly used in dynamic 2D arrays or when you need to modify a pointer's value inside a function (passing a pointer by reference)."
        ]
      }
    ]
  },
  {
    id: 10,
    slug: "structure",
    title: "Structure",
    week: 11,
    description: "Helping students transition from basic data types to user-defined data types, emphasizing how structures allow us to model real-world objects in code.",
    icon: "🏗️",
    slides: [
      {
        title: "Introduction to Structures",
        subtitle: "Why We Need Structures",
        bullets: [
          "**Limitation of Arrays:** Arrays can only store elements of the same data type (**homogeneous**).",
          "**The Solution:** A **Structure** is a user-defined data type that allows you to group variables of *different* types under a single name (**heterogeneous**).",
          "**Real-world Analogy:** A \"Student\" isn't just an ID (int). A student has a Name (string), CGPA (float), and Age (int). A structure bundles these related attributes together."
        ]
      },
      {
        title: "Defining a Structure",
        subtitle: "The struct Keyword",
        bullets: [
          "**Note:** Defining a structure does **not** allocate memory; it only creates a blueprint/template."
        ],
        code: {
          title: "struct_definition.c",
          code: `struct TagName {
    data_type member1;
    data_type member2;
};

// Example:
struct Student {
    int id;
    char name[50];
    float cgpa;
};`
        }
      },
      {
        title: "Declaring and Initializing",
        subtitle: "Creating Structure Variables",
        bullets: [
          "**Declaration:** `struct Student s1;`",
          "**Initialization:** `struct Student s1 = {101, \"Rakib\", 3.78};`",
          "**Size of Structure:** The total size is the sum of the sizes of its members (plus potential padding for memory alignment)."
        ]
      },
      {
        title: "Accessing Structure Members",
        subtitle: "The Dot (.) Operator",
        bullets: [
          "To access or modify members of a structure variable, we use the **Dot Operator**.",
          "**Assigning Values:** `s1.id = 102;` `s1.cgpa = 3.90;`"
        ],
        code: {
          title: "struct_access.c",
          code: `printf("Enter ID: ");
scanf("%d", &s1.id);
printf("Student ID is %d", s1.id);`
        }
      },
      {
        title: "Array of Structures",
        subtitle: "Handling Multiple Records",
        bullets: [
          "If we need to store data for 50 students, we create an array of structures.",
          "**Syntax:** `struct Student class_list[50];`",
          "**Accessing:** `class_list[0].id = 1;`",
          "**Usage:** Perfectly suited for database-like management where each index in the array represents one complete record (a \"row\")."
        ]
      },
      {
        title: "Nested Structures",
        subtitle: "Structures within Structures",
        bullets: [
          "A member of a structure can be another structure.",
          "**Accessing:** `emp1.joinDate.year = 2026;`"
        ],
        code: {
          title: "nested_struct.c",
          code: `struct Date {
    int day, month, year;
};
struct Employee {
    int id;
    struct Date joinDate; // Nested structure
};`
        }
      },
      {
        title: "Pointers to Structures",
        subtitle: "The Arrow (->) Operator",
        bullets: [
          "We can create pointers that point to structure variables.",
          "**Syntax:** `struct Student *ptr = &s1;`",
          "**Accessing via Pointer:** Instead of `(*ptr).id`, C provides the **Arrow Operator**: `ptr->id`.",
          "This is essential when passing structures to functions or working with dynamic memory allocation."
        ]
      },
      {
        title: "Structures vs. Unions",
        subtitle: "Key Differences",
        table: {
          headers: ["Feature", "Structure (struct)", "Union (union)"],
          rows: [
            ["**Memory**", "Each member gets its own space.", "All members share the same space."],
            ["**Size**", "Sum of sizes of all members.", "Size of the largest member."],
            ["**Access**", "Can access all members at once.", "Can access only one member at a time."],
            ["**Use Case**", "Complex data modeling.", "Memory-efficient programming."]
          ]
        }
      }
    ]
  },
  {
    id: 11,
    slug: "union",
    title: "Union",
    week: 11,
    description: "Understanding unions - a user-defined data type where all members share the same memory location, optimizing memory usage.",
    icon: "🔗",
    slides: [
      {
        title: "Introduction to Unions",
        subtitle: "What is a Union?",
        bullets: [
          "**Definition:** A Union is a user-defined data type (similar to a `struct`) where all members share the same memory location.",
          "**The Core Concept:** While a structure allows you to store multiple values at once, a union allows you to store **only one** of its members at any given time.",
          "**Why use Unions?** Memory efficiency in embedded systems. Implementing \"variant\" types where a variable could be one of several types."
        ]
      },
      {
        title: "Defining and Declaring Unions",
        subtitle: "The union Keyword",
        bullets: [
          "**Declaration:** `union Data data;`",
          "**Key Difference:** In the example above, the total size of `union Data` will be 20 bytes (the size of the largest member), whereas a `struct` would be approximately 4 + 4 + 20 = 28 bytes."
        ],
        code: {
          title: "union_definition.c",
          code: `union Data {
    int i;
    float f;
    char str[20];
};`
        }
      },
      {
        title: "Memory Allocation (The Shared Concept)",
        subtitle: "How Unions Share Memory",
        bullets: [
          "In a Union, all members start at the **same memory address**.",
          "Changing the value of one member will overwrite the values of all other members.",
          "**Visual Representation:** Member A (int) starts at 0x100. Member B (char) starts at 0x100."
        ]
      },
      {
        title: "Accessing Union Members",
        subtitle: "The Dot (.) and Arrow (->) Operators",
        bullets: [
          "Accessing union members uses the same syntax as structures."
        ],
        code: {
          title: "union_access.c",
          code: `union Data myData;
myData.i = 10;
printf("%d", myData.i);

// Pointer Access:
union Data *ptr = &myData;
ptr->f = 220.5;`
        }
      },
      {
        title: "The \"One-at-a-Time\" Rule",
        subtitle: "Overwriting Data",
        bullets: [
          "Because memory is shared, assigning a new value to one member corrupts the previous member's data.",
          "**Best Practice:** Always keep track of which member is currently \"active\" in the union."
        ],
        code: {
          title: "union_overwrite.c",
          code: `union Data d;
d.i = 5;
d.f = 12.5; // d.i is now corrupted/lost
printf("%d", d.i); // This will print a garbage value`
        }
      },
      {
        title: "Unions vs. Structures (Comparison)",
        subtitle: "Comparison Table",
        table: {
          headers: ["Feature", "Structure (struct)", "Union (union)"],
          rows: [
            ["**Keyword**", "struct", "union"],
            ["**Memory Allocation**", "Distinct space for every member.", "Shared space for all members."],
            ["**Total Size**", "Sum of sizes of all members.", "Size of the largest member."],
            ["**Data Access**", "Can access all members simultaneously.", "Can only access one member effectively at a time."]
          ]
        }
      },
      {
        title: "Practical Use Case: Variant Types",
        subtitle: "When to Use Unions",
        bullets: [
          "**Embedded Programming:** When interacting with hardware registers that represent different data depending on the mode.",
          "**Memory-Constrained Systems:** Reducing RAM usage when you have a large list of objects that will never need more than one attribute at a time.",
          "**Type Punning:** Looking at the same bits of data in two different ways (e.g., viewing an `int` as four individual `char` bytes)."
        ]
      },
      {
        title: "Summary and Best Practices",
        subtitle: "Key Takeaways",
        bullets: [
          "Use `union` to save memory, not to group related data for simultaneous use.",
          "Always use the largest member's size as your memory benchmark.",
          "**Pro-Tip:** Often used inside a `struct` (known as a \"Tagged Union\") to create a flexible data record that tells you which union member is currently valid.",
          "**Caution:** Be careful with pointers; dereferencing the wrong type can lead to logic errors."
        ]
      }
    ]
  },
  {
    id: 12,
    slug: "function",
    title: "Function",
    week: 10,
    description: "Explaining the \"building blocks\" of modular programming. It moves from the basic concept of code reuse to the technical details of how data is passed between functions.",
    icon: "⚙️",
    slides: [
      {
        title: "Introduction to Functions",
        subtitle: "Modular Programming with Functions",
        bullets: [
          "**Definition:** A function is a self-contained block of code that performs a specific task.",
          "**The \"Divide and Conquer\" Principle:** Large programs are broken down into smaller, manageable, and reusable pieces.",
          "**Advantages:** **Reusability:** Write once, use many times. **Readability:** Makes the `main()` function cleaner. **Easier Debugging:** Test individual parts of the program independently.",
          "**Types:** Standard Library Functions (e.g., `printf()`) and User-defined Functions."
        ]
      },
      {
        title: "Anatomy of a Function",
        subtitle: "The Three Pillars of Functions",
        bullets: [
          "To use a function, you typically need three things:",
          "**1. Function Prototype (Declaration):** Tells the compiler about the function's name, return type, and parameters.",
          "**2. Function Definition:** The actual body where the code is written.",
          "**3. Function Call:** The statement that executes the function."
        ]
      },
      {
        title: "Function Syntax",
        subtitle: "Defining a Function",
        bullets: [
          "**Return Type:** The data type of the value the function sends back (e.g., `int`, `float`, `void` if nothing is returned).",
          "**Parameters:** Variables that receive data passed into the function."
        ],
        code: {
          title: "function_syntax.c",
          code: `return_type function_name(parameter_list) {
    // Body of the function
    return value;
}

// Example:
int add(int a, int b) {
    return a + b;
}`
        }
      },
      {
        title: "Parameters and Arguments",
        subtitle: "Passing Data to Functions",
        bullets: [
          "**Formal Parameters:** The variables defined in the function header (e.g., `int a` in the previous slide).",
          "**Actual Arguments:** The real values passed to the function during a call. Example: `result = add(10, 20);` (10 and 20 are arguments).",
          "**Mapping:** Arguments are mapped to parameters by position (the first argument goes to the first parameter)."
        ]
      },
      {
        title: "Call by Value",
        subtitle: "How Data is Copied",
        bullets: [
          "By default, C uses **Call by Value**.",
          "**The Mechanism:** A copy of the actual argument's value is passed to the formal parameter.",
          "**Key Fact:** Changes made to the parameter inside the function **do not affect** the original variable in the calling function.",
          "**Analogy:** Giving someone a photocopy of a document; they can scribble on it, but your original stays clean."
        ]
      },
      {
        title: "Call by Reference",
        subtitle: "Modifying Original Data",
        bullets: [
          "To change the original variable's value, we pass its **address** using pointers.",
          "**Usage:** Used when a function needs to \"return\" more than one value or modify a large data structure efficiently.",
          "**Requirement:** Requires knowledge of the Address-of (`&`) and Dereference (`*`) operators."
        ],
        code: {
          title: "call_by_reference.c",
          code: `void update(int *n) {
    *n = 20;
}`
        }
      },
      {
        title: "Scope and Lifetime in Functions",
        subtitle: "Where Variables Live",
        bullets: [
          "**Local Variables:** Declared inside a function. They are \"born\" when the function starts and \"die\" when it returns.",
          "**Global Variables:** Declared outside functions. They are accessible to all functions.",
          "**Static Variables:** Declared with the `static` keyword inside a function. They retain their value even after the function finishes execution."
        ]
      },
      {
        title: "Summary and Best Practices",
        subtitle: "Writing Better Functions",
        bullets: [
          "**Naming:** Use descriptive verbs (e.g., `calculateTotal` instead of `func1`).",
          "**Single Responsibility:** A function should do **one thing** and do it well.",
          "**Don't Repeat Yourself (DRY):** If you see the same code in three places, turn it into a function.",
          "**Return Early:** Use return statements to exit a function as soon as the result is known."
        ]
      }
    ]
  },
  {
    id: 13,
    slug: "recursion",
    title: "Recursion",
    week: 10,
    description: "Simplifying the \"mind-bending\" nature of recursion by focusing on the mechanics of the Function Stack and the necessity of base cases.",
    icon: "🔁",
    slides: [
      {
        title: "Introduction to Recursion",
        subtitle: "Thinking Recursively",
        bullets: [
          "**Definition:** A process in which a function calls itself directly or indirectly.",
          "**The Philosophy:** Solving a large problem by breaking it down into smaller sub-problems of the same type.",
          "**Key Ingredients:** 1. **Base Case:** The condition where the recursion stops. 2. **Recursive Step:** The part where the function calls itself with a modified argument.",
          "**Analogy:** A set of Russian Matryoshka dolls—each doll is a smaller version of the same thing."
        ]
      },
      {
        title: "How Recursion Works",
        subtitle: "The Mechanics of the Call",
        bullets: [
          "When a function calls itself, the current state of the function (variables, return address) is pushed onto the **Stack**.",
          "Each new call creates a new **Stack Frame**.",
          "The calls continue until the **Base Case** is reached.",
          "Once the base case returns, the stack begins to \"unwind,\" passing values back up to the previous callers."
        ]
      },
      {
        title: "Anatomy of a Recursive Function",
        subtitle: "Syntax and Structure",
        bullets: [
          "**Visualizing 3!:** factorial(3) returns 3 * factorial(2). factorial(2) returns 2 * factorial(1). factorial(1) returns 1 (Base Case reached!)."
        ],
        code: {
          title: "factorial.c",
          code: `int factorial(int n) {
    // 1. Base Case
    if (n <= 1)
        return 1;

    // 2. Recursive Step
    else
        return n * factorial(n - 1);
}`
        }
      },
      {
        title: "Recursion vs. Iteration",
        subtitle: "Which one to choose?",
        table: {
          headers: ["Feature", "Recursion", "Iteration (Loops)"],
          rows: [
            ["**Termination**", "Reaching the Base Case.", "Loop condition becomes false."],
            ["**Memory**", "High (uses Stack memory).", "Low (uses CPU cycles)."],
            ["**Code Size**", "Usually shorter and cleaner.", "Often longer."],
            ["**Speed**", "Can be slower due to overhead.", "Generally faster."]
          ]
        },
        note: "**Rule of Thumb:** Use recursion for problems with a naturally recursive structure (like Trees or Graphs)."
      },
      {
        title: "Types of Recursion",
        subtitle: "Direct vs. Indirect",
        bullets: [
          "**Direct Recursion:** Function A calls Function A.",
          "**Indirect Recursion:** Function A calls Function B, and Function B calls Function A.",
          "**Tail Recursion:** The recursive call is the *very last* action in the function. This is highly efficient because compilers can optimize the stack usage. Example: A function that just prints numbers from n to 1."
        ]
      },
      {
        title: "The Danger of Infinite Recursion",
        subtitle: "Stack Overflow",
        bullets: [
          "What happens if you forget the **Base Case**?",
          "The function keeps calling itself infinitely.",
          "The Stack Memory fills up completely.",
          "The program crashes with a **Stack Overflow Error**.",
          "**Prevention:** Always ensure your recursive step moves the input closer to the base case (e.g., n-1)."
        ]
      },
      {
        title: "Classic Recursive Problems",
        subtitle: "Famous Examples",
        bullets: [
          "**Fibonacci Series:** F(n) = F(n-1) + F(n-2).",
          "**Tower of Hanoi:** Moving disks between pegs following specific rules.",
          "**Binary Search:** Dividing a sorted array in half repeatedly.",
          "**Tree Traversals:** In-order, Pre-order, and Post-order (essential for Data Structures)."
        ]
      },
      {
        title: "Summary and Best Practices",
        subtitle: "Master the Loop of Logic",
        bullets: [
          "**Always** define the base case first.",
          "Verify that each recursive call makes the problem smaller.",
          "Be mindful of memory; if the recursion depth is too high (e.g., 1,000,000 calls), consider an iterative approach.",
          "**Summary:** Recursion is a powerful tool for writing elegant, readable code for complex problems."
        ]
      }
    ]
  },
  {
    id: 14,
    slug: "input-output",
    title: "Input/Output",
    week: 12,
    description: "Bridging the gap between basic user interaction (Console) and permanent data storage (Files), which is a critical milestone for any C programmer.",
    icon: "📥",
    slides: [
      {
        title: "Introduction to I/O Operations",
        subtitle: "Input and Output in C",
        bullets: [
          "**I/O Definition:** The process of feeding data into a program (Input) and getting results out (Output).",
          "**Two Main Categories:** 1. **Console I/O:** Interaction with the keyboard and screen. 2. **File I/O:** Reading from and writing to permanent storage (Hard Drive).",
          "**The `stdio.h` Header:** Standard Input/Output library required for all I/O functions."
        ]
      },
      {
        title: "Formatted Console I/O",
        subtitle: "Using printf and scanf",
        bullets: [
          "`printf()`: Sends formatted output to the standard output (screen). Syntax: `printf(\"format string\", variables);`",
          "`scanf()`: Receives formatted input from the standard input (keyboard). Syntax: `scanf(\"format string\", &variables);`",
          "**Format Specifiers Recap:** `%d` (Integer), `%f` (Float), `%c` (Char), `%s` (String).",
          "**Escape Sequences:** `\\n` (New line), `\\t` (Tab)."
        ]
      },
      {
        title: "Unformatted Console I/O",
        subtitle: "Character and String Based I/O",
        bullets: [
          "Sometimes we need to handle raw characters without formatting.",
          "**Single Characters:** `getchar()`: Reads a single character. `putchar()`: Displays a single character.",
          "**Strings (Lines):** `gets()` / `puts()`: Basic string I/O (Note: `gets` is deprecated). `fgets()`: The modern, secure way to read strings including spaces."
        ]
      },
      {
        title: "Introduction to File Handling",
        subtitle: "Why File I/O?",
        bullets: [
          "**Persistence:** Console data is lost when the program ends. Files allow data to be saved and reused.",
          "**The FILE Pointer:** In C, we communicate with files through a special pointer: `FILE *fptr;`",
          "**The Basic Workflow:** 1. Open the file (`fopen`). 2. Process (Read or Write). 3. Close the file (`fclose`)."
        ]
      },
      {
        title: "Opening and Closing Files",
        subtitle: "fopen() and fclose()",
        bullets: [
          "**Opening:** `fptr = fopen(\"filename.txt\", \"mode\");`",
          "**Common Modes:** `\"r\"`: Open for reading (fails if file doesn't exist). `\"w\"`: Open for writing (creates file or overwrites existing). `\"a\"`: Open for appending (adds to the end of the file).",
          "**Closing:** `fclose(fptr);` *Crucial:* Always close files to prevent data loss and free memory."
        ]
      },
      {
        title: "Reading and Writing to Files",
        subtitle: "File Manipulation Functions",
        bullets: [
          "**Formatted File I/O:** `fprintf(fptr, \"format\", ...)`: Like `printf`, but for files. `fscanf(fptr, \"format\", ...)`: Like `scanf`, but from files.",
          "**Character File I/O:** `fgetc(fptr)`: Reads one character. `fputc(ch, fptr)`: Writes one character.",
          "**String File I/O:** `fgets(str, n, fptr)`: Reads a line from the file. `fputs(str, fptr)`: Writes a string to the file."
        ]
      },
      {
        title: "Working with End-of-File (EOF)",
        subtitle: "Detecting the End of a File",
        bullets: [
          "When reading a file, we need to know when to stop.",
          "**The `feof()` Function:** Returns true if the end of the file has been reached.",
          "**The `EOF` Constant:** Many functions return the constant `EOF` (usually -1) when they hit the end."
        ],
        code: {
          title: "eof_example.c",
          code: `while ((ch = fgetc(fptr)) != EOF) {
    printf("%c", ch);
}`
        }
      },
      {
        title: "Error Handling and Best Practices",
        subtitle: "Safe File Operations",
        bullets: [
          "**Checking for NULL:** Always check if `fopen` succeeded.",
          "**Binary vs. Text:** Use `\"rb\"` or `\"wb\"` modes when dealing with non-text files (like images or data structures).",
          "**Buffer Flushing:** Use `fflush(fptr)` if you need to ensure data is written to the disk immediately."
        ],
        code: {
          title: "file_error.c",
          code: `if (fptr == NULL) {
    printf("Error: Could not open file.");
    return 1;
}`
        }
      }
    ]
  },
  {
    id: 15,
    slug: "advance-c-programming-concepts",
    title: "Advance C Programming Concepts",
    week: 13,
    description: "Covering a wide range of topics: starting with basic syntax (constants, operators), moving through control flow (switch, do-while), and ending with advanced memory management and system interaction.",
    icon: "🎓",
    slides: [
      {
        title: "Introduction to Advanced C Concepts",
        subtitle: "Expanding Your C Programming Toolkit",
        bullets: [
          "**Overview:** Transitioning from basic logic to system-level programming.",
          "**What we will cover:** Fixed values (Constants, Defines, Enums). Control Flow (Switch, Do-While). Memory Management (Malloc, Calloc). Multi-dimensional Data structures. System Interaction (Command-line arguments)."
        ]
      },
      {
        title: "Constants and Fixed Values",
        subtitle: "Using const in C",
        bullets: [
          "**Definition:** A variable declared with the `const` keyword becomes read-only after initialization.",
          "**Syntax:** `const int MAX_SPEED = 120;`",
          "**Why use them?** Safety: Prevents accidental modification. Readability: Makes the code easier to understand.",
          "**Scope:** Follows normal block scope rules."
        ]
      },
      {
        title: "The #define Preprocessor",
        subtitle: "Macro Definitions",
        bullets: [
          "**Syntax:** `#define PI 3.14159`",
          "**How it works:** The preprocessor performs a literal \"search and replace\" before the code is compiled.",
          "**Constants vs. Macros:** Macros do not occupy memory locations. Macros do not have a specific data type.",
          "**Pro-Tip:** Use `#define` for array sizes to make code maintenance easy."
        ]
      },
      {
        title: "Enumerations (enum) - Part 1",
        subtitle: "User-Defined Discrete Types",
        bullets: [
          "**Definition:** A special data type that consists of a set of named integer constants.",
          "**Default Values:** By default, Sun = 0, Mon = 1, etc.",
          "**Manual Assignment:** `enum Level {Low=1, Mid=5, High=10};`"
        ],
        code: {
          title: "enum_definition.c",
          code: `enum Weekday {Sun, Mon, Tue, Wed, Thu, Fri, Sat};`
        }
      },
      {
        title: "Enumerations (enum) - Part 2",
        subtitle: "Enum Usage and Benefits",
        bullets: [
          "**Benefits:** Replaces \"Magic Numbers\" (e.g., using `Wed` instead of 3). Makes code self-documenting. Type safety: Restricts a variable to a specific set of values."
        ],
        code: {
          title: "enum_usage.c",
          code: `enum Day today = Wed;
if (today == Wed) printf("Midweek!");`
        }
      },
      {
        title: "The Conditional (Ternary) Operator",
        subtitle: "The Inline If-Else",
        bullets: [
          "**Syntax:** `Condition ? Expression1 : Expression2;`",
          "**How it works:** If the condition is true, it returns Expression1; otherwise, it returns Expression2.",
          "**When to use:** Short, simple assignments where a full `if-else` block would be too bulky."
        ],
        code: {
          title: "ternary.c",
          code: `int max = (a > b) ? a : b;`
        }
      },
      {
        title: "The switch Statement - Part 1",
        subtitle: "Multiple Choice Logic",
        bullets: [
          "**Purpose:** An alternative to long `if-else if` chains when checking a single variable against multiple constant values.",
          "**Constraint:** The expression must result in an `int` or `char`."
        ],
        code: {
          title: "switch_statement.c",
          code: `switch(expression) {
   case value1: // code; break;
   case value2: // code; break;
   default: // code;
}`
        }
      },
      {
        title: "The switch Statement - Part 2",
        subtitle: "Break and Default",
        bullets: [
          "**The `break` Keyword:** Essential to prevent \"Fall-through\" (where the program executes all subsequent cases).",
          "**The `default` Case:** Acts like the `else` in an if-block; it runs if no cases match.",
          "**Efficiency:** Compilers often optimize switch statements into \"jump tables,\" making them faster than long `if-else` chains."
        ]
      },
      {
        title: "The do-while Loop",
        subtitle: "Exit-Controlled Loops",
        bullets: [
          "**Difference from `while`:** The condition is checked **after** the body is executed.",
          "**Guarantee:** The loop body will always run **at least once**.",
          "**Typical Use Case:** Menu-driven programs where you show the menu first, then ask for user input."
        ],
        code: {
          title: "do_while.c",
          code: `do {
    // code to execute
} while (condition);`
        }
      },
      {
        title: "Multi-dimensional Arrays - Part 1",
        subtitle: "Matrices and Tables",
        bullets: [
          "**Definition:** An array of arrays, most commonly used as a 2D grid (Rows and Columns).",
          "**Declaration:** `int matrix[3][4]; // 3 rows, 4 columns.`",
          "**Memory Layout:** Even though we visualize it as a grid, C stores it in **Row-Major Order** (one row after another in a single line of memory)."
        ]
      },
      {
        title: "Multi-dimensional Arrays - Part 2",
        subtitle: "Initialization and Access",
        bullets: [
          "**Accessing:** Use two indices: `value = grid[row][col];`",
          "**Nested Loops:** To traverse a 2D array, use an outer loop for rows and an inner loop for columns."
        ],
        code: {
          title: "2d_init.c",
          code: `int grid[2][2] = { {1, 2}, {3, 4} };`
        }
      },
      {
        title: "Introduction to Dynamic Memory Allocation",
        subtitle: "Memory Beyond the Stack",
        bullets: [
          "**Problem:** Standard arrays have fixed sizes at compile-time.",
          "**Solution:** Allocation at Runtime from the Heap.",
          "**The `<stdlib.h>` Library:** Contains the four essential functions: `malloc`, `calloc`, `realloc`, and `free`."
        ]
      },
      {
        title: "Using malloc()",
        subtitle: "Memory Allocation",
        bullets: [
          "**Stands for:** Memory Allocation.",
          "**Function:** Reserves a single block of memory of specified bytes.",
          "**Initialization:** It does **not** clear the memory (contains garbage values).",
          "**Syntax:** `ptr = (cast_type*) malloc(size);`"
        ],
        code: {
          title: "malloc.c",
          code: `int *p = (int*) malloc(5 * sizeof(int));`
        }
      },
      {
        title: "Using calloc()",
        subtitle: "Contiguous Allocation",
        bullets: [
          "**Function:** Allocates multiple blocks of memory of the same size.",
          "**Initialization:** It automatically initializes all bytes to **Zero**.",
          "**Syntax:** `ptr = (cast_type*) calloc(n, element_size);`",
          "**Difference:** Slower than `malloc` due to the zero-initialization step."
        ],
        code: {
          title: "calloc.c",
          code: `int *p = (int*) calloc(5, sizeof(int));`
        }
      },
      {
        title: "Memory Management: free()",
        subtitle: "Preventing Memory Leaks",
        bullets: [
          "**Manual Cleanup:** Unlike Java or Python, C does not have garbage collection.",
          "`free(ptr);`: This function releases the memory back to the system.",
          "**Dangling Pointer:** After freeing, the pointer still holds the address. Best practice is to set `ptr = NULL;` immediately after."
        ]
      },
      {
        title: "Command-Line Arguments - Part 1",
        subtitle: "Interacting with the OS",
        bullets: [
          "**Definition:** Passing parameters to the `main()` function at the time of program execution.",
          "**The New Main Signature:** `int main(int argc, char *argv[])`",
          "**argc (Argument Count):** Integer representing the number of arguments (including the program name)."
        ]
      },
      {
        title: "Command-Line Arguments - Part 2",
        subtitle: "The argv Array",
        bullets: [
          "**argv (Argument Vector):** An array of strings (pointers to characters).",
          "**Index 0:** `argv[0]` is always the name of the executable file.",
          "**Example Command:** `./prog hello 123` → `argc = 3`, `argv[1] = \"hello\"`, `argv[2] = \"123\"`"
        ]
      },
      {
        title: "Practical Command-Line Example",
        subtitle: "Processing Inputs",
        bullets: [
          "Arguments are always received as **Strings**.",
          "**Conversion:** Use functions like `atoi()` (ASCII to Integer) to convert arguments for math."
        ],
        code: {
          title: "cmdline.c",
          code: `int val = atoi(argv[2]); // Converts "123" to integer 123`
        }
      }
    ]
  }
];
