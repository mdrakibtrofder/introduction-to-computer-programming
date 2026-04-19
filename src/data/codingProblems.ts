export interface CodingProblem {
  question: string;
  answer: string;
  filename: string;
  output: string;
}

export const chapterProblems: Record<string, CodingProblem[]> = {
  "introduction-to-c-programming": [
    {
      question: "Write a C program to print \"Hello, World!\" on the screen.",
      answer: `#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`,
      filename: "print_hello_world_on_the.c",
      output: `Hello, World!`
    },
    {
      question: "Write a C program to print your name, age, and city each on a new line.",
      answer: `#include <stdio.h>

int main() {
    printf("Name: John\\n");
    printf("Age: 20\\n");
    printf("City: Dhaka\\n");
    return 0;
}`,
      filename: "print_your_name_age_and.c",
      output: `Name: John
Age: 20
City: Dhaka`
    },
    {
      question: "Write a C program that prints the result of 15 + 27 using printf.",
      answer: `#include <stdio.h>

int main() {
    printf("Sum = %d", 15 + 27);
    return 0;
}`,
      filename: "prints_the_result_of_15.c",
      output: `Sum = 42`
    },
    {
      question: "Write a C program to print a simple pattern using asterisks (a 4x4 square).",
      answer: `#include <stdio.h>

int main() {
    printf("****\\n");
    printf("****\\n");
    printf("****\\n");
    printf("****\\n");
    return 0;
}`,
      filename: "print_a_simple_pattern_using.c",
      output: `****
****
****
****`
    },
    {
      question: "Write a C program that prints the difference and product of two numbers (20 and 5).",
      answer: `#include <stdio.h>

int main() {
    printf("Difference = %d\\n", 20 - 5);
    printf("Product = %d\\n", 20 * 5);
    return 0;
}`,
      filename: "prints_the_difference_and_product.c",
      output: `Difference = 15
Product = 100`
    },
    {
      question: "Write a C program to print a tab-separated list of three programming languages.",
      answer: `#include <stdio.h>

int main() {
    printf("C\\tC++\\tPython\\n");
    return 0;
}`,
      filename: "print_a_tab_separated_list.c",
      output: `C	C++	Python`
    },
    {
      question: "Write a C program that uses comments and prints \"Learning C is fun!\".",
      answer: `#include <stdio.h>

/* This program demonstrates comments */
int main() {
    // Print a friendly message
    printf("Learning C is fun!");
    return 0;
}`,
      filename: "uses_comments_and_prints_learning.c",
      output: `Learning C is fun!`
    },
    {
      question: "Write a C program to print the area of a rectangle with length 10 and width 5.",
      answer: `#include <stdio.h>

int main() {
    int length = 10, width = 5;
    printf("Area = %d", length * width);
    return 0;
}`,
      filename: "print_the_area_of_a.c",
      output: `Area = 50`
    }
  ],
  "algorithm-development-and-representation": [
    {
      question: "Write a C program that implements the pseudocode: INPUT a, b → OUTPUT their sum.",
      answer: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("Sum = %d", a + b);
    return 0;
}`,
      filename: "sum_of_two_numbers.c",
      output: `Sum = 12`
    },
    {
      question: "Write a C program (from a flowchart) that reads a number and prints whether it is Even or Odd.",
      answer: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    if (n % 2 == 0)
        printf("Even");
    else
        printf("Odd");
    return 0;
}`,
      filename: "check_even_or_odd.c",
      output: `Even`
    },
    {
      question: "Write a C program that finds the largest of three numbers (translate the IF-ELSE pseudocode).",
      answer: `#include <stdio.h>

int main() {
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);
    int max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    printf("Largest = %d", max);
    return 0;
}`,
      filename: "largest_of_three_numbers.c",
      output: `Largest = 25`
    },
    {
      question: "Write a C program that calculates the sum of numbers from 1 to N using a loop (FOR pseudocode).",
      answer: `#include <stdio.h>

int main() {
    int n, sum = 0;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    printf("Sum = %d", sum);
    return 0;
}`,
      filename: "sum_from_1_to_n.c",
      output: `Sum = 55`
    },
    {
      question: "Write a C program that reads marks and prints the grade (A: ≥80, B: ≥70, C: ≥60, F: otherwise).",
      answer: `#include <stdio.h>

int main() {
    int marks;
    scanf("%d", &marks);
    if (marks >= 80) printf("Grade: A");
    else if (marks >= 70) printf("Grade: B");
    else if (marks >= 60) printf("Grade: C");
    else printf("Grade: F");
    return 0;
}`,
      filename: "calculate_student_grade.c",
      output: `Grade: A`
    },
    {
      question: "Write a C program that counts how many digits are in a given positive integer (loop algorithm).",
      answer: `#include <stdio.h>

int main() {
    int n, count = 0;
    scanf("%d", &n);
    while (n > 0) {
        n /= 10;
        count++;
    }
    printf("Digits = %d", count);
    return 0;
}`,
      filename: "count_digits_in_number.c",
      output: `Digits = 4`
    },
    {
      question: "Write a C program that prints the multiplication table of N (flowchart with a loop).",
      answer: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= 10; i++) {
        printf("%d x %d = %d\\n", n, i, n * i);
    }
    return 0;
}`,
      filename: "multiplication_table.c",
      output: `5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`
    },
    {
      question: "Write a C program that checks whether a year is a leap year (translate the leap-year pseudocode).",
      answer: `#include <stdio.h>

int main() {
    int year;
    scanf("%d", &year);
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
        printf("%d is a Leap Year", year);
    else
        printf("%d is NOT a Leap Year", year);
    return 0;
}`,
      filename: "check_leap_year.c",
      output: `2024 is a Leap Year`
    }
  ],
  "variables": [
    {
      question: "Write a C program to declare two integer variables, assign values, and print their sum.",
      answer: `#include <stdio.h>

int main() {
    int a = 10, b = 20;
    int sum = a + b;
    printf("Sum = %d", sum);
    return 0;
}`,
      filename: "declare_two_integer_variables_assign.c",
      output: `Sum = 30`
    },
    {
      question: "Write a C program to swap two numbers using a temporary variable.",
      answer: `#include <stdio.h>

int main() {
    int a = 5, b = 10, temp;
    temp = a;
    a = b;
    b = temp;
    printf("a = %d, b = %d", a, b);
    return 0;
}`,
      filename: "swap_two_numbers_using_a.c",
      output: `a = 10, b = 5`
    },
    {
      question: "Write a C program to find the size of int, float, double, and char data types.",
      answer: `#include <stdio.h>

int main() {
    printf("int: %lu bytes\\n", sizeof(int));
    printf("float: %lu bytes\\n", sizeof(float));
    printf("double: %lu bytes\\n", sizeof(double));
    printf("char: %lu byte\\n", sizeof(char));
    return 0;
}`,
      filename: "find_the_size_of_int.c",
      output: `int: 4 bytes
float: 4 bytes
double: 8 bytes
char: 1 byte`
    },
    {
      question: "Write a C program to swap two numbers WITHOUT using a temporary variable.",
      answer: `#include <stdio.h>

int main() {
    int a = 7, b = 3;
    a = a + b;
    b = a - b;
    a = a - b;
    printf("a = %d, b = %d", a, b);
    return 0;
}`,
      filename: "swap_two_numbers_without_using.c",
      output: `a = 3, b = 7`
    },
    {
      question: "Write a C program to compute the average of three numbers stored in variables.",
      answer: `#include <stdio.h>

int main() {
    int a = 10, b = 20, c = 30;
    float avg = (a + b + c) / 3.0;
    printf("Average = %.2f", avg);
    return 0;
}`,
      filename: "compute_the_average_of_three.c",
      output: `Average = 20.00`
    },
    {
      question: "Write a C program that uses a constant (using #define) for PI and prints area of a circle.",
      answer: `#include <stdio.h>
#define PI 3.14159

int main() {
    float radius = 5.0;
    printf("Area = %.2f", PI * radius * radius);
    return 0;
}`,
      filename: "uses_a_constant_using_define.c",
      output: `Area = 78.54`
    },
    {
      question: "Write a C program that takes an integer input from the user and prints it.",
      answer: `#include <stdio.h>

int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    printf("You entered: %d", num);
    return 0;
}`,
      filename: "takes_an_integer_input_from.c",
      output: `Enter a number: You entered: 32754`
    },
    {
      question: "Write a C program to demonstrate global vs local variable scope.",
      answer: `#include <stdio.h>

int globalVar = 100; // global

void show() {
    int localVar = 50; // local
    printf("Local: %d, Global: %d\\n", localVar, globalVar);
}

int main() {
    show();
    printf("Global from main: %d", globalVar);
    return 0;
}`,
      filename: "demonstrate_global_vs_local_variable.c",
      output: `Local: 50, Global: 100
Global from main: 100`
    }
  ],
  "expression-and-operators": [
    {
      question: "Write a C program to check whether a number is even or odd using the modulus operator.",
      answer: `#include <stdio.h>

int main() {
    int num = 7;
    if (num % 2 == 0)
        printf("%d is Even", num);
    else
        printf("%d is Odd", num);
    return 0;
}`,
      filename: "check_whether_a_number_is.c",
      output: `7 is Odd`
    },
    {
      question: "Write a C program to demonstrate pre-increment and post-increment operators.",
      answer: `#include <stdio.h>

int main() {
    int a = 5;
    printf("Post-increment: %d\\n", a++);
    printf("After post: %d\\n", a);
    printf("Pre-increment: %d\\n", ++a);
    return 0;
}`,
      filename: "demonstrate_pre_increment_and_post.c",
      output: `Post-increment: 5
After post: 6
Pre-increment: 7`
    },
    {
      question: "Write a C program to find the largest of three numbers using logical operators.",
      answer: `#include <stdio.h>

int main() {
    int a = 10, b = 25, c = 15;
    if (a >= b && a >= c)
        printf("Largest: %d", a);
    else if (b >= a && b >= c)
        printf("Largest: %d", b);
    else
        printf("Largest: %d", c);
    return 0;
}`,
      filename: "find_the_largest_of_three.c",
      output: `Largest: 25`
    },
    {
      question: "Write a C program to demonstrate the ternary (conditional) operator to find max of two numbers.",
      answer: `#include <stdio.h>

int main() {
    int a = 12, b = 8;
    int max = (a > b) ? a : b;
    printf("Max = %d", max);
    return 0;
}`,
      filename: "demonstrate_the_ternary_conditional_operator.c",
      output: `Max = 12`
    },
    {
      question: "Write a C program to perform bitwise AND, OR, XOR, and NOT on two integers.",
      answer: `#include <stdio.h>

int main() {
    int a = 12, b = 10;
    printf("AND = %d\\n", a & b);
    printf("OR  = %d\\n", a | b);
    printf("XOR = %d\\n", a ^ b);
    printf("NOT a = %d\\n", ~a);
    return 0;
}`,
      filename: "perform_bitwise_and_or_xor.c",
      output: `AND = 8
OR  = 14
XOR = 6
NOT a = -13`
    },
    {
      question: "Write a C program to demonstrate left shift and right shift operators.",
      answer: `#include <stdio.h>

int main() {
    int n = 8;
    printf("Left shift by 2: %d\\n", n << 2);
    printf("Right shift by 1: %d\\n", n >> 1);
    return 0;
}`,
      filename: "demonstrate_left_shift_and_right.c",
      output: `Left shift by 2: 32
Right shift by 1: 4`
    },
    {
      question: "Write a C program to compute compound interest given principal, rate, and time.",
      answer: `#include <stdio.h>
#include <math.h>

int main() {
    double p = 1000, r = 5, t = 2;
    double amount = p * pow((1 + r / 100), t);
    printf("Compound Interest = %.2f", amount - p);
    return 0;
}`,
      filename: "compute_compound_interest_given_principal.c",
      output: `Compound Interest = 102.50`
    },
    {
      question: "Write a C program to evaluate the expression: (a + b) * (c - d) / e using user input.",
      answer: `#include <stdio.h>

int main() {
    int a = 5, b = 3, c = 10, d = 4, e = 2;
    int result = (a + b) * (c - d) / e;
    printf("Result = %d", result);
    return 0;
}`,
      filename: "evaluate_the_expression_a_b.c",
      output: `Result = 24`
    }
  ],
  "data-types": [
    {
      question: "Write a C program to convert a temperature from Celsius to Fahrenheit using float.",
      answer: `#include <stdio.h>

int main() {
    float celsius = 37.0;
    float fahrenheit = (celsius * 9 / 5) + 32;
    printf("%.2f C = %.2f F", celsius, fahrenheit);
    return 0;
}`,
      filename: "convert_a_temperature_from_celsius.c",
      output: `37.00 C = 98.60 F`
    },
    {
      question: "Write a C program to demonstrate implicit and explicit type casting.",
      answer: `#include <stdio.h>

int main() {
    int a = 5, b = 2;
    float result1 = a / b;          // Implicit
    float result2 = (float)a / b;   // Explicit
    printf("Implicit: %f\\n", result1);
    printf("Explicit: %f\\n", result2);
    return 0;
}`,
      filename: "demonstrate_implicit_and_explicit_type.c",
      output: `Implicit: 2.000000
Explicit: 2.500000`
    },
    {
      question: "Write a C program to print the ASCII value of a character entered by the user.",
      answer: `#include <stdio.h>

int main() {
    char ch = 'A';
    printf("ASCII value of %c = %d", ch, ch);
    return 0;
}`,
      filename: "print_the_ascii_value_of.c",
      output: `ASCII value of A = 65`
    },
    {
      question: "Write a C program to display the range of signed and unsigned int (using limits.h).",
      answer: `#include <stdio.h>
#include <limits.h>

int main() {
    printf("INT_MIN  = %d\\n", INT_MIN);
    printf("INT_MAX  = %d\\n", INT_MAX);
    printf("UINT_MAX = %u\\n", UINT_MAX);
    return 0;
}`,
      filename: "display_the_range_of_signed.c",
      output: `INT_MIN  = -2147483648
INT_MAX  = 2147483647
UINT_MAX = 4294967295`
    },
    {
      question: "Write a C program to convert lowercase character to uppercase using type conversion.",
      answer: `#include <stdio.h>

int main() {
    char ch = 'g';
    char upper = ch - 32;
    printf("Uppercase: %c", upper);
    return 0;
}`,
      filename: "convert_lowercase_character_to_uppercase.c",
      output: `Uppercase: G`
    },
    {
      question: "Write a C program to demonstrate the use of long, short, and unsigned data types.",
      answer: `#include <stdio.h>

int main() {
    short s = 32000;
    long l = 1234567890L;
    unsigned int u = 4000000000U;
    printf("short = %d\\nlong = %ld\\nunsigned = %u", s, l, u);
    return 0;
}`,
      filename: "demonstrate_the_use_of_long.c",
      output: `short = 32000
long = 1234567890
unsigned = 4000000000`
    },
    {
      question: "Write a C program to compute the area of a circle using double precision.",
      answer: `#include <stdio.h>

int main() {
    double radius = 7.5;
    double area = 3.141592653589793 * radius * radius;
    printf("Area = %.4lf", area);
    return 0;
}`,
      filename: "compute_the_area_of_a.c",
      output: `Area = 176.7146`
    },
    {
      question: "Write a C program to convert a float number to int and observe truncation.",
      answer: `#include <stdio.h>

int main() {
    float f = 9.78;
    int i = (int)f;
    printf("Float: %.2f, Int: %d", f, i);
    return 0;
}`,
      filename: "convert_a_float_number_to.c",
      output: `Float: 9.78, Int: 9`
    }
  ],
  "conditional-statement": [
    {
      question: "Write a C program to check if a year is a leap year using if-else.",
      answer: `#include <stdio.h>

int main() {
    int year = 2024;
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
        printf("%d is a Leap Year", year);
    else
        printf("%d is Not a Leap Year", year);
    return 0;
}`,
      filename: "check_if_a_year_is.c",
      output: `2024 is a Leap Year`
    },
    {
      question: "Write a C program to create a simple calculator using switch-case (+, -, *, /).",
      answer: `#include <stdio.h>

int main() {
    float a = 10, b = 3;
    char op = '+';
    switch (op) {
        case '+': printf("%.2f", a + b); break;
        case '-': printf("%.2f", a - b); break;
        case '*': printf("%.2f", a * b); break;
        case '/': printf("%.2f", a / b); break;
        default: printf("Invalid operator");
    }
    return 0;
}`,
      filename: "create_a_simple_calculator_using.c",
      output: `13.00`
    },
    {
      question: "Write a C program to assign a grade (A, B, C, D, F) based on marks using else-if ladder.",
      answer: `#include <stdio.h>

int main() {
    int marks = 78;
    if (marks >= 90)      printf("Grade: A");
    else if (marks >= 80) printf("Grade: B");
    else if (marks >= 70) printf("Grade: C");
    else if (marks >= 60) printf("Grade: D");
    else                  printf("Grade: F");
    return 0;
}`,
      filename: "assign_a_grade_a_b.c",
      output: `Grade: C`
    },
    {
      question: "Write a C program to check whether a number is positive, negative, or zero.",
      answer: `#include <stdio.h>

int main() {
    int n = -5;
    if (n > 0)       printf("Positive");
    else if (n < 0)  printf("Negative");
    else             printf("Zero");
    return 0;
}`,
      filename: "check_whether_a_number_is.c",
      output: `Negative`
    },
    {
      question: "Write a C program to find the largest of three numbers using nested if.",
      answer: `#include <stdio.h>

int main() {
    int a = 4, b = 9, c = 6;
    if (a > b) {
        if (a > c) printf("Largest = %d", a);
        else       printf("Largest = %d", c);
    } else {
        if (b > c) printf("Largest = %d", b);
        else       printf("Largest = %d", c);
    }
    return 0;
}`,
      filename: "find_the_largest_of_three.c",
      output: `Largest = 9`
    },
    {
      question: "Write a C program to check if a character is a vowel or consonant using switch.",
      answer: `#include <stdio.h>

int main() {
    char ch = 'e';
    switch (ch) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
            printf("Vowel"); break;
        default:
            printf("Consonant");
    }
    return 0;
}`,
      filename: "check_if_a_character_is.c",
      output: `Vowel`
    },
    {
      question: "Write a C program to determine whether a triangle is equilateral, isosceles, or scalene.",
      answer: `#include <stdio.h>

int main() {
    int a = 5, b = 5, c = 5;
    if (a == b && b == c)      printf("Equilateral");
    else if (a == b || b == c || a == c) printf("Isosceles");
    else                       printf("Scalene");
    return 0;
}`,
      filename: "determine_whether_a_triangle_is.c",
      output: `Equilateral`
    },
    {
      question: "Write a C program to check whether a given number is divisible by both 5 and 11.",
      answer: `#include <stdio.h>

int main() {
    int n = 55;
    if (n % 5 == 0 && n % 11 == 0)
        printf("%d is divisible by both 5 and 11", n);
    else
        printf("%d is not divisible by both", n);
    return 0;
}`,
      filename: "check_whether_a_given_number.c",
      output: `55 is divisible by both 5 and 11`
    }
  ],
  "for-loop": [
    {
      question: "Write a C program to print the multiplication table of a given number using a for loop.",
      answer: `#include <stdio.h>

int main() {
    int num = 5;
    for (int i = 1; i <= 10; i++) {
        printf("%d x %d = %d\\n", num, i, num * i);
    }
    return 0;
}`,
      filename: "print_the_multiplication_table_of.c",
      output: `5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`
    },
    {
      question: "Write a C program to find the factorial of a number using a for loop.",
      answer: `#include <stdio.h>

int main() {
    int n = 5;
    long long fact = 1;
    for (int i = 1; i <= n; i++) fact *= i;
    printf("Factorial of %d = %lld", n, fact);
    return 0;
}`,
      filename: "find_the_factorial_of_a.c",
      output: `Factorial of 5 = 120`
    },
    {
      question: "Write a C program to print the sum of first N natural numbers using a while loop.",
      answer: `#include <stdio.h>

int main() {
    int n = 10, i = 1, sum = 0;
    while (i <= n) { sum += i; i++; }
    printf("Sum = %d", sum);
    return 0;
}`,
      filename: "print_the_sum_of_first.c",
      output: `Sum = 55`
    },
    {
      question: "Write a C program to print the Fibonacci series up to N terms using a for loop.",
      answer: `#include <stdio.h>

int main() {
    int n = 10, a = 0, b = 1, c;
    for (int i = 0; i < n; i++) {
        printf("%d ", a);
        c = a + b; a = b; b = c;
    }
    return 0;
}`,
      filename: "print_the_fibonacci_series_up.c",
      output: `0 1 1 2 3 5 8 13 21 34`
    },
    {
      question: "Write a C program to count the number of digits in an integer using a while loop.",
      answer: `#include <stdio.h>

int main() {
    int n = 12345, count = 0;
    while (n != 0) { n /= 10; count++; }
    printf("Digits = %d", count);
    return 0;
}`,
      filename: "count_the_number_of_digits.c",
      output: `Digits = 5`
    },
    {
      question: "Write a C program to reverse a number using a loop.",
      answer: `#include <stdio.h>

int main() {
    int n = 1234, rev = 0;
    while (n > 0) {
        rev = rev * 10 + n % 10;
        n /= 10;
    }
    printf("Reversed = %d", rev);
    return 0;
}`,
      filename: "reverse_a_number_using_a.c",
      output: `Reversed = 4321`
    },
    {
      question: "Write a C program to print a right-angled triangle pattern of stars (5 rows).",
      answer: `#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= i; j++) printf("* ");
        printf("\\n");
    }
    return 0;
}`,
      filename: "print_a_right_angled_triangle.c",
      output: `* 
* * 
* * * 
* * * * 
* * * * *`
    },
    {
      question: "Write a C program to check whether a number is prime using a for loop.",
      answer: `#include <stdio.h>

int main() {
    int n = 29, isPrime = 1;
    if (n < 2) isPrime = 0;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) { isPrime = 0; break; }
    }
    printf("%d is %s", n, isPrime ? "Prime" : "Not Prime");
    return 0;
}`,
      filename: "check_whether_a_number_is.c",
      output: `29 is Prime`
    }
  ],
  "array": [
    {
      question: "Write a C program to find the largest element in an array.",
      answer: `#include <stdio.h>

int main() {
    int arr[] = {12, 45, 7, 23, 56, 34};
    int n = 6, max = arr[0];
    for (int i = 1; i < n; i++)
        if (arr[i] > max) max = arr[i];
    printf("Largest element: %d", max);
    return 0;
}`,
      filename: "find_the_largest_element_in.c",
      output: `Largest element: 56`
    },
    {
      question: "Write a C program to reverse an array.",
      answer: `#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;
    for (int i = 0; i < n / 2; i++) {
        int t = arr[i]; arr[i] = arr[n-1-i]; arr[n-1-i] = t;
    }
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    return 0;
}`,
      filename: "reverse_an_array.c",
      output: `5 4 3 2 1`
    },
    {
      question: "Write a C program to find the sum of all elements in a 2D array (3x3 matrix).",
      answer: `#include <stdio.h>

int main() {
    int matrix[3][3] = {{1,2,3},{4,5,6},{7,8,9}};
    int sum = 0;
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++)
            sum += matrix[i][j];
    printf("Sum = %d", sum);
    return 0;
}`,
      filename: "find_the_sum_of_all.c",
      output: `Sum = 45`
    },
    {
      question: "Write a C program to find the smallest element in an array.",
      answer: `#include <stdio.h>

int main() {
    int arr[] = {25, 8, 14, 3, 19};
    int n = 5, min = arr[0];
    for (int i = 1; i < n; i++)
        if (arr[i] < min) min = arr[i];
    printf("Smallest = %d", min);
    return 0;
}`,
      filename: "find_the_smallest_element_in.c",
      output: `Smallest = 3`
    },
    {
      question: "Write a C program to compute the average of array elements.",
      answer: `#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int n = 5, sum = 0;
    for (int i = 0; i < n; i++) sum += arr[i];
    printf("Average = %.2f", (float)sum / n);
    return 0;
}`,
      filename: "compute_the_average_of_array.c",
      output: `Average = 30.00`
    },
    {
      question: "Write a C program to perform linear search in an array.",
      answer: `#include <stdio.h>

int main() {
    int arr[] = {4, 8, 15, 16, 23, 42};
    int n = 6, key = 16, idx = -1;
    for (int i = 0; i < n; i++)
        if (arr[i] == key) { idx = i; break; }
    if (idx != -1) printf("Found at index %d", idx);
    else           printf("Not found");
    return 0;
}`,
      filename: "perform_linear_search_in_an.c",
      output: `Found at index 3`
    },
    {
      question: "Write a C program to sort an array in ascending order using bubble sort.",
      answer: `#include <stdio.h>

int main() {
    int arr[] = {5, 2, 8, 1, 9}, n = 5;
    for (int i = 0; i < n - 1; i++)
        for (int j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j+1]) {
                int t = arr[j]; arr[j] = arr[j+1]; arr[j+1] = t;
            }
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    return 0;
}`,
      filename: "sort_an_array_in_ascending.c",
      output: `1 2 5 8 9`
    },
    {
      question: "Write a C program to add two 2x2 matrices.",
      answer: `#include <stdio.h>

int main() {
    int A[2][2] = {{1,2},{3,4}};
    int B[2][2] = {{5,6},{7,8}};
    int C[2][2];
    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 2; j++)
            C[i][j] = A[i][j] + B[i][j];
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) printf("%d ", C[i][j]);
        printf("\\n");
    }
    return 0;
}`,
      filename: "add_two_2x2_matrices.c",
      output: `6 8 
10 12`
    }
  ],
  "string": [
    {
      question: "Write a C program to find the length of a string without using strlen().",
      answer: `#include <stdio.h>

int main() {
    char str[] = "Hello";
    int len = 0;
    while (str[len] != '\\0') len++;
    printf("Length: %d", len);
    return 0;
}`,
      filename: "find_the_length_of_a.c",
      output: `Length: 5`
    },
    {
      question: "Write a C program to check if a string is a palindrome.",
      answer: `#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "madam";
    int len = strlen(str), isPalin = 1;
    for (int i = 0; i < len / 2; i++)
        if (str[i] != str[len - 1 - i]) { isPalin = 0; break; }
    printf("%s is %sa palindrome", str, isPalin ? "" : "not ");
    return 0;
}`,
      filename: "check_if_a_string_is.c",
      output: `madam is a palindrome`
    },
    {
      question: "Write a C program to count the number of vowels in a string.",
      answer: `#include <stdio.h>

int main() {
    char str[] = "Hello World";
    int count = 0;
    for (int i = 0; str[i] != '\\0'; i++) {
        char c = str[i];
        if (c=='a'||c=='e'||c=='i'||c=='o'||c=='u'||
            c=='A'||c=='E'||c=='I'||c=='O'||c=='U')
            count++;
    }
    printf("Vowels: %d", count);
    return 0;
}`,
      filename: "count_the_number_of_vowels.c",
      output: `Vowels: 3`
    },
    {
      question: "Write a C program to convert a string to uppercase.",
      answer: `#include <stdio.h>
#include <ctype.h>

int main() {
    char str[] = "hello world";
    for (int i = 0; str[i]; i++)
        str[i] = toupper(str[i]);
    printf("%s", str);
    return 0;
}`,
      filename: "convert_a_string_to_uppercase.c",
      output: `HELLO WORLD`
    },
    {
      question: "Write a C program to concatenate two strings without using strcat().",
      answer: `#include <stdio.h>

int main() {
    char a[100] = "Hello, ";
    char b[] = "World!";
    int i = 0, j = 0;
    while (a[i] != '\\0') i++;
    while (b[j] != '\\0') a[i++] = b[j++];
    a[i] = '\\0';
    printf("%s", a);
    return 0;
}`,
      filename: "concatenate_two_strings_without_using.c",
      output: `Hello, World!`
    },
    {
      question: "Write a C program to count the number of words in a string.",
      answer: `#include <stdio.h>

int main() {
    char str[] = "C programming is fun";
    int count = 1;
    for (int i = 0; str[i] != '\\0'; i++)
        if (str[i] == ' ') count++;
    printf("Words: %d", count);
    return 0;
}`,
      filename: "count_the_number_of_words.c",
      output: `Words: 4`
    },
    {
      question: "Write a C program to compare two strings without using strcmp().",
      answer: `#include <stdio.h>

int main() {
    char a[] = "hello", b[] = "hello";
    int i = 0, equal = 1;
    while (a[i] != '\\0' || b[i] != '\\0') {
        if (a[i] != b[i]) { equal = 0; break; }
        i++;
    }
    printf("Strings are %s", equal ? "equal" : "not equal");
    return 0;
}`,
      filename: "compare_two_strings_without_using.c",
      output: `Strings are equal`
    },
    {
      question: "Write a C program to reverse a string in place.",
      answer: `#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Programming";
    int n = strlen(str);
    for (int i = 0; i < n / 2; i++) {
        char t = str[i]; str[i] = str[n-1-i]; str[n-1-i] = t;
    }
    printf("%s", str);
    return 0;
}`,
      filename: "reverse_a_string_in_place.c",
      output: `gnimmargorP`
    }
  ],
  "pointer": [
    {
      question: "Write a C program to swap two numbers using pointers.",
      answer: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a; *a = *b; *b = temp;
}

int main() {
    int x = 10, y = 20;
    swap(&x, &y);
    printf("x = %d, y = %d", x, y);
    return 0;
}`,
      filename: "swap_two_numbers_using_pointers.c",
      output: `x = 20, y = 10`
    },
    {
      question: "Write a C program to access array elements using pointers.",
      answer: `#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr;
    for (int i = 0; i < 5; i++)
        printf("arr[%d] = %d\\n", i, *(ptr + i));
    return 0;
}`,
      filename: "access_array_elements_using_pointers.c",
      output: `arr[0] = 10
arr[1] = 20
arr[2] = 30
arr[3] = 40
arr[4] = 50`
    },
    {
      question: "Write a C program to find the length of a string using a pointer.",
      answer: `#include <stdio.h>

int main() {
    char str[] = "Pointer";
    char *ptr = str;
    int len = 0;
    while (*ptr != '\\0') { len++; ptr++; }
    printf("Length: %d", len);
    return 0;
}`,
      filename: "find_the_length_of_a.c",
      output: `Length: 7`
    },
    {
      question: "Write a C program to print the address and value of a variable using a pointer.",
      answer: `#include <stdio.h>

int main() {
    int n = 42;
    int *p = &n;
    printf("Address: %p\\n", (void*)p);
    printf("Value:   %d\\n", *p);
    return 0;
}`,
      filename: "print_the_address_and_value.c",
      output: `Address: 0x7f120a903354
Value:   42`
    },
    {
      question: "Write a C program to find the sum of array elements using pointer arithmetic.",
      answer: `#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int *p = arr, sum = 0;
    for (int i = 0; i < 5; i++) sum += *(p + i);
    printf("Sum = %d", sum);
    return 0;
}`,
      filename: "find_the_sum_of_array.c",
      output: `Sum = 15`
    },
    {
      question: "Write a C program to demonstrate a pointer to a pointer (double pointer).",
      answer: `#include <stdio.h>

int main() {
    int x = 10;
    int *p = &x;
    int **pp = &p;
    printf("x = %d\\n", x);
    printf("*p = %d\\n", *p);
    printf("**pp = %d\\n", **pp);
    return 0;
}`,
      filename: "demonstrate_a_pointer_to_a.c",
      output: `x = 10
*p = 10
**pp = 10`
    },
    {
      question: "Write a C program to copy one string to another using pointers.",
      answer: `#include <stdio.h>

int main() {
    char src[] = "Hello", dest[20];
    char *s = src, *d = dest;
    while ((*d++ = *s++) != '\\0');
    printf("Copied: %s", dest);
    return 0;
}`,
      filename: "copy_one_string_to_another.c",
      output: `Copied: Hello`
    },
    {
      question: "Write a C program to find the largest element in an array using pointers.",
      answer: `#include <stdio.h>

int main() {
    int arr[] = {3, 19, 7, 42, 11};
    int *p = arr, max = *p;
    for (int i = 1; i < 5; i++)
        if (*(p + i) > max) max = *(p + i);
    printf("Largest = %d", max);
    return 0;
}`,
      filename: "find_the_largest_element_in.c",
      output: `Largest = 42`
    }
  ],
  "structure": [
    {
      question: "Write a C program to store and display student info (name, roll, marks) using a structure.",
      answer: `#include <stdio.h>

struct Student {
    char name[50];
    int roll;
    float marks;
};

int main() {
    struct Student s = {"Alice", 101, 92.5};
    printf("Name: %s\\nRoll: %d\\nMarks: %.1f", s.name, s.roll, s.marks);
    return 0;
}`,
      filename: "store_and_display_student_info.c",
      output: `Name: Alice
Roll: 101
Marks: 92.5`
    },
    {
      question: "Write a C program to pass a structure to a function and print its members.",
      answer: `#include <stdio.h>

struct Point { int x, y; };

void display(struct Point p) {
    printf("(%d, %d)", p.x, p.y);
}

int main() {
    struct Point p1 = {3, 7};
    display(p1);
    return 0;
}`,
      filename: "pass_a_structure_to_a.c",
      output: `(3, 7)`
    },
    {
      question: "Write a C program to create an array of structures to store 3 books (title, price).",
      answer: `#include <stdio.h>

struct Book { char title[50]; float price; };

int main() {
    struct Book books[3] = {
        {"C Programming", 350.0},
        {"Data Structures", 450.0},
        {"Algorithms", 500.0}
    };
    for (int i = 0; i < 3; i++)
        printf("%s - $%.0f\\n", books[i].title, books[i].price);
    return 0;
}`,
      filename: "create_an_array_of_structures.c",
      output: `C Programming - $350
Data Structures - $450
Algorithms - $500`
    },
    {
      question: "Write a C program using a nested structure (Address inside Employee).",
      answer: `#include <stdio.h>

struct Address { char city[30]; int zip; };
struct Employee {
    char name[30];
    struct Address addr;
};

int main() {
    struct Employee e = {"Bob", {"Dhaka", 1207}};
    printf("%s lives in %s (%d)", e.name, e.addr.city, e.addr.zip);
    return 0;
}`,
      filename: "using_a_nested_structure_address.c",
      output: `Bob lives in Dhaka (1207)`
    },
    {
      question: "Write a C program using a pointer to a structure to access its members.",
      answer: `#include <stdio.h>

struct Car { char model[20]; int year; };

int main() {
    struct Car c = {"Toyota", 2023};
    struct Car *p = &c;
    printf("%s (%d)", p->model, p->year);
    return 0;
}`,
      filename: "using_a_pointer_to_a.c",
      output: `Toyota (2023)`
    },
    {
      question: "Write a C program to compute the total marks of 3 students stored in an array of structures.",
      answer: `#include <stdio.h>

struct Student { char name[20]; int marks; };

int main() {
    struct Student s[3] = {{"A", 80}, {"B", 75}, {"C", 90}};
    int total = 0;
    for (int i = 0; i < 3; i++) total += s[i].marks;
    printf("Total = %d", total);
    return 0;
}`,
      filename: "compute_the_total_marks_of.c",
      output: `Total = 245`
    },
    {
      question: "Write a C program using typedef with a structure to represent a Date.",
      answer: `#include <stdio.h>

typedef struct {
    int day, month, year;
} Date;

int main() {
    Date today = {18, 4, 2026};
    printf("Date: %02d/%02d/%d", today.day, today.month, today.year);
    return 0;
}`,
      filename: "using_typedef_with_a_structure.c",
      output: `Date: 18/04/2026`
    },
    {
      question: "Write a C program to find the student with the highest marks from an array of structures.",
      answer: `#include <stdio.h>

struct Student { char name[20]; int marks; };

int main() {
    struct Student s[3] = {{"A", 80}, {"B", 95}, {"C", 70}};
    int idx = 0;
    for (int i = 1; i < 3; i++)
        if (s[i].marks > s[idx].marks) idx = i;
    printf("Top: %s (%d)", s[idx].name, s[idx].marks);
    return 0;
}`,
      filename: "find_the_student_with_the.c",
      output: `Top: B (95)`
    }
  ],
  "union": [
    {
      question: "Write a C program to demonstrate the difference between struct and union in terms of memory size.",
      answer: `#include <stdio.h>

struct S { int i; float f; char c; };
union U  { int i; float f; char c; };

int main() {
    printf("Struct size: %lu\\n", sizeof(struct S));
    printf("Union size: %lu\\n", sizeof(union U));
    return 0;
}`,
      filename: "demonstrate_the_difference_between_struct.c",
      output: `Struct size: 12
Union size: 4`
    },
    {
      question: "Write a C program to store and access different data types using a union.",
      answer: `#include <stdio.h>

union Data { int i; float f; char c; };

int main() {
    union Data d;
    d.i = 42;   printf("Integer: %d\\n", d.i);
    d.f = 3.14; printf("Float: %.2f\\n", d.f);
    d.c = 'A';  printf("Char: %c\\n", d.c);
    return 0;
}`,
      filename: "store_and_access_different_data.c",
      output: `Integer: 42
Float: 3.14
Char: A`
    },
    {
      question: "Write a C program using an enum inside a union to represent a shape type.",
      answer: `#include <stdio.h>

enum Shape { CIRCLE, RECTANGLE };

union Dimension {
    float radius;
    struct { float width, height; } rect;
};

int main() {
    enum Shape s = CIRCLE;
    union Dimension d;
    d.radius = 5.0;
    if (s == CIRCLE)
        printf("Circle radius: %.1f\\n", d.radius);
    return 0;
}`,
      filename: "using_an_enum_inside_a.c",
      output: `Circle radius: 5.0`
    },
    {
      question: "Write a C program to use a union to interpret bytes of an int as chars.",
      answer: `#include <stdio.h>

union Bytes {
    int n;
    char b[4];
};

int main() {
    union Bytes u;
    u.n = 0x41424344;
    for (int i = 0; i < 4; i++)
        printf("Byte %d = %c\\n", i, u.b[i]);
    return 0;
}`,
      filename: "use_a_union_to_interpret.c",
      output: `Byte 0 = D
Byte 1 = C
Byte 2 = B
Byte 3 = A`
    },
    {
      question: "Write a C program using a union inside a struct (tagged union) to store either int or float.",
      answer: `#include <stdio.h>

struct Value {
    int type; // 0 = int, 1 = float
    union { int i; float f; } data;
};

int main() {
    struct Value v;
    v.type = 1; v.data.f = 9.81;
    if (v.type == 0) printf("Int: %d", v.data.i);
    else             printf("Float: %.2f", v.data.f);
    return 0;
}`,
      filename: "using_a_union_inside_a.c",
      output: `Float: 9.81`
    },
    {
      question: "Write a C program to use a union pointer to access its members.",
      answer: `#include <stdio.h>

union Num { int i; float f; };

int main() {
    union Num n;
    union Num *p = &n;
    p->i = 100;
    printf("Int via pointer: %d\\n", p->i);
    p->f = 2.5;
    printf("Float via pointer: %.2f\\n", p->f);
    return 0;
}`,
      filename: "use_a_union_pointer_to.c",
      output: `Int via pointer: 100
Float via pointer: 2.50`
    },
    {
      question: "Write a C program to demonstrate that all union members share the same memory address.",
      answer: `#include <stdio.h>

union Test { int i; float f; char c; };

int main() {
    union Test t;
    printf("&i = %p\\n", (void*)&t.i);
    printf("&f = %p\\n", (void*)&t.f);
    printf("&c = %p\\n", (void*)&t.c);
    return 0;
}`,
      filename: "demonstrate_that_all_union_members.c",
      output: `&i = 0x7fe77082035c
&f = 0x7fe77082035c
&c = 0x7fe77082035c`
    },
    {
      question: "Write a C program using an array of unions to store 3 different values.",
      answer: `#include <stdio.h>

union Item { int i; float f; };

int main() {
    union Item items[3];
    items[0].i = 10;
    items[1].f = 3.14;
    items[2].i = 99;
    printf("%d %.2f %d", items[0].i, items[1].f, items[2].i);
    return 0;
}`,
      filename: "using_an_array_of_unions.c",
      output: `10 3.14 99`
    }
  ],
  "function": [
    {
      question: "Write a C function to check whether a number is prime.",
      answer: `#include <stdio.h>

int isPrime(int n) {
    if (n <= 1) return 0;
    for (int i = 2; i * i <= n; i++)
        if (n % i == 0) return 0;
    return 1;
}

int main() {
    int num = 17;
    printf("%d is %s", num, isPrime(num) ? "Prime" : "Not Prime");
    return 0;
}`,
      filename: "write_a_c_function_to.c",
      output: `17 is Prime`
    },
    {
      question: "Write a C function to calculate the power of a number (base^exponent).",
      answer: `#include <stdio.h>

long long power(int base, int exp) {
    long long result = 1;
    for (int i = 0; i < exp; i++) result *= base;
    return result;
}

int main() {
    printf("2^10 = %lld", power(2, 10));
    return 0;
}`,
      filename: "write_a_c_function_to.c",
      output: `2^10 = 1024`
    },
    {
      question: "Write a C program using call by reference to find the maximum and minimum of an array.",
      answer: `#include <stdio.h>

void findMinMax(int arr[], int n, int *min, int *max) {
    *min = *max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] < *min) *min = arr[i];
        if (arr[i] > *max) *max = arr[i];
    }
}

int main() {
    int arr[] = {3, 7, 1, 9, 4};
    int min, max;
    findMinMax(arr, 5, &min, &max);
    printf("Min: %d, Max: %d", min, max);
    return 0;
}`,
      filename: "using_call_by_reference_to.c",
      output: `Min: 1, Max: 9`
    },
    {
      question: "Write a C function to compute the GCD of two numbers.",
      answer: `#include <stdio.h>

int gcd(int a, int b) {
    while (b != 0) { int t = b; b = a % b; a = t; }
    return a;
}

int main() {
    printf("GCD(36, 60) = %d", gcd(36, 60));
    return 0;
}`,
      filename: "write_a_c_function_to.c",
      output: `GCD(36, 60) = 12`
    },
    {
      question: "Write a C function to check whether a number is a perfect number.",
      answer: `#include <stdio.h>

int isPerfect(int n) {
    int sum = 0;
    for (int i = 1; i < n; i++)
        if (n % i == 0) sum += i;
    return sum == n;
}

int main() {
    printf("28 is %s", isPerfect(28) ? "Perfect" : "Not Perfect");
    return 0;
}`,
      filename: "write_a_c_function_to.c",
      output: `28 is Perfect`
    },
    {
      question: "Write a C function that returns the square of an integer.",
      answer: `#include <stdio.h>

int square(int n) { return n * n; }

int main() {
    printf("Square of 9 = %d", square(9));
    return 0;
}`,
      filename: "write_a_c_function_that.c",
      output: `Square of 9 = 81`
    },
    {
      question: "Write a C function to count the number of digits in an integer.",
      answer: `#include <stdio.h>

int countDigits(int n) {
    int count = 0;
    if (n == 0) return 1;
    while (n != 0) { n /= 10; count++; }
    return count;
}

int main() {
    printf("Digits in 90876 = %d", countDigits(90876));
    return 0;
}`,
      filename: "write_a_c_function_to.c",
      output: `Digits in 90876 = 5`
    },
    {
      question: "Write a C function that takes an array and returns its sum.",
      answer: `#include <stdio.h>

int sumArray(int arr[], int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) sum += arr[i];
    return sum;
}

int main() {
    int a[] = {1, 2, 3, 4, 5};
    printf("Sum = %d", sumArray(a, 5));
    return 0;
}`,
      filename: "write_a_c_function_that.c",
      output: `Sum = 15`
    }
  ],
  "recursion": [
    {
      question: "Write a recursive C function to calculate the nth Fibonacci number.",
      answer: `#include <stdio.h>

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    for (int i = 0; i < 10; i++) printf("%d ", fibonacci(i));
    return 0;
}`,
      filename: "write_a_recursive_c_function.c",
      output: `0 1 1 2 3 5 8 13 21 34`
    },
    {
      question: "Write a recursive C function to find the sum of digits of a number.",
      answer: `#include <stdio.h>

int sumDigits(int n) {
    if (n == 0) return 0;
    return (n % 10) + sumDigits(n / 10);
}

int main() {
    printf("Sum of digits of 1234 = %d", sumDigits(1234));
    return 0;
}`,
      filename: "write_a_recursive_c_function.c",
      output: `Sum of digits of 1234 = 10`
    },
    {
      question: "Write a recursive C function to reverse a string.",
      answer: `#include <stdio.h>
#include <string.h>

void reverse(char str[], int s, int e) {
    if (s >= e) return;
    char t = str[s]; str[s] = str[e]; str[e] = t;
    reverse(str, s + 1, e - 1);
}

int main() {
    char str[] = "Hello";
    reverse(str, 0, strlen(str) - 1);
    printf("%s", str);
    return 0;
}`,
      filename: "write_a_recursive_c_function.c",
      output: `olleH`
    },
    {
      question: "Write a recursive C function to compute factorial of N.",
      answer: `#include <stdio.h>

long long fact(int n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}

int main() {
    printf("6! = %lld", fact(6));
    return 0;
}`,
      filename: "write_a_recursive_c_function.c",
      output: `6! = 720`
    },
    {
      question: "Write a recursive C function to compute the power (base^exp).",
      answer: `#include <stdio.h>

long long power(int b, int e) {
    if (e == 0) return 1;
    return b * power(b, e - 1);
}

int main() {
    printf("3^5 = %lld", power(3, 5));
    return 0;
}`,
      filename: "write_a_recursive_c_function.c",
      output: `3^5 = 243`
    },
    {
      question: "Write a recursive C function to compute the GCD of two numbers.",
      answer: `#include <stdio.h>

int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

int main() {
    printf("GCD(48, 18) = %d", gcd(48, 18));
    return 0;
}`,
      filename: "write_a_recursive_c_function.c",
      output: `GCD(48, 18) = 6`
    },
    {
      question: "Write a recursive C function to compute the sum of first N natural numbers.",
      answer: `#include <stdio.h>

int sumN(int n) {
    if (n == 0) return 0;
    return n + sumN(n - 1);
}

int main() {
    printf("Sum 1..100 = %d", sumN(100));
    return 0;
}`,
      filename: "write_a_recursive_c_function.c",
      output: `Sum 1..100 = 5050`
    },
    {
      question: "Write a recursive C function to perform binary search on a sorted array.",
      answer: `#include <stdio.h>

int bsearch_r(int a[], int lo, int hi, int key) {
    if (lo > hi) return -1;
    int mid = (lo + hi) / 2;
    if (a[mid] == key) return mid;
    if (key < a[mid]) return bsearch_r(a, lo, mid - 1, key);
    return bsearch_r(a, mid + 1, hi, key);
}

int main() {
    int a[] = {1, 3, 5, 7, 9, 11};
    printf("Index = %d", bsearch_r(a, 0, 5, 7));
    return 0;
}`,
      filename: "write_a_recursive_c_function.c",
      output: `Index = 3`
    }
  ],
  "input-output": [
    {
      question: "Write a C program to read and write a string to a file.",
      answer: `#include <stdio.h>

int main() {
    FILE *fp = fopen("output.txt", "w");
    fprintf(fp, "Hello, File!");
    fclose(fp);

    char buffer[100];
    fp = fopen("output.txt", "r");
    fgets(buffer, 100, fp);
    printf("Read: %s", buffer);
    fclose(fp);
    return 0;
}`,
      filename: "read_and_write_a_string.c",
      output: `Read: Hello, File!`
    },
    {
      question: "Write a C program to count the number of characters in a file.",
      answer: `#include <stdio.h>

int main() {
    FILE *fp = fopen("test.txt", "r");
    int count = 0;
    while (fgetc(fp) != EOF) count++;
    fclose(fp);
    printf("Characters: %d", count);
    return 0;
}`,
      filename: "count_the_number_of_characters.c",
      output: `// Output depends on user input`
    },
    {
      question: "Write a C program to copy contents from one file to another.",
      answer: `#include <stdio.h>

int main() {
    FILE *src = fopen("source.txt", "r");
    FILE *dest = fopen("dest.txt", "w");
    char ch;
    while ((ch = fgetc(src)) != EOF) fputc(ch, dest);
    fclose(src); fclose(dest);
    printf("File copied successfully!");
    return 0;
}`,
      filename: "copy_contents_from_one_file.c",
      output: `// Output depends on user input`
    },
    {
      question: "Write a C program to count the number of lines in a file.",
      answer: `#include <stdio.h>

int main() {
    FILE *fp = fopen("test.txt", "r");
    int lines = 0; char ch;
    while ((ch = fgetc(fp)) != EOF)
        if (ch == '\\n') lines++;
    fclose(fp);
    printf("Lines: %d", lines);
    return 0;
}`,
      filename: "count_the_number_of_lines.c",
      output: `// Output depends on user input`
    },
    {
      question: "Write a C program to append text to an existing file.",
      answer: `#include <stdio.h>

int main() {
    FILE *fp = fopen("notes.txt", "a");
    fprintf(fp, "New line appended.\\n");
    fclose(fp);
    printf("Appended successfully!");
    return 0;
}`,
      filename: "append_text_to_an_existing.c",
      output: `Appended successfully!`
    },
    {
      question: "Write a C program to read a number from the user using scanf and print its square.",
      answer: `#include <stdio.h>

int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    printf("Square = %d", n * n);
    return 0;
}`,
      filename: "read_a_number_from_the.c",
      output: `Enter a number: Square = 1069290000`
    },
    {
      question: "Write a C program to write 5 integers to a file using fprintf.",
      answer: `#include <stdio.h>

int main() {
    FILE *fp = fopen("nums.txt", "w");
    for (int i = 1; i <= 5; i++)
        fprintf(fp, "%d\\n", i * 10);
    fclose(fp);
    printf("Written!");
    return 0;
}`,
      filename: "write_5_integers_to_a.c",
      output: `Written!`
    },
    {
      question: "Write a C program to read integers from a file and print their sum.",
      answer: `#include <stdio.h>

int main() {
    FILE *fp = fopen("nums.txt", "r");
    int n, sum = 0;
    while (fscanf(fp, "%d", &n) == 1) sum += n;
    fclose(fp);
    printf("Sum = %d", sum);
    return 0;
}`,
      filename: "read_integers_from_a_file.c",
      output: `Sum = 150`
    }
  ],
  "advance-c-programming-concepts": [
    {
      question: "Write a C program to dynamically allocate memory for an array using malloc and find its average.",
      answer: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 5;
    int *arr = (int *)malloc(n * sizeof(int));
    arr[0]=10; arr[1]=20; arr[2]=30; arr[3]=40; arr[4]=50;
    float sum = 0;
    for (int i = 0; i < n; i++) sum += arr[i];
    printf("Average: %.2f", sum / n);
    free(arr);
    return 0;
}`,
      filename: "dynamically_allocate_memory_for_an.c",
      output: `Average: 30.00`
    },
    {
      question: "Write a C program to use a function pointer to call different arithmetic operations.",
      answer: `#include <stdio.h>

int add(int a, int b) { return a + b; }
int sub(int a, int b) { return a - b; }

int main() {
    int (*op)(int, int);
    op = add; printf("Add: %d\\n", op(10, 5));
    op = sub; printf("Sub: %d\\n", op(10, 5));
    return 0;
}`,
      filename: "use_a_function_pointer_to.c",
      output: `Add: 15
Sub: 5`
    },
    {
      question: "Write a C program to demonstrate the use of command line arguments.",
      answer: `#include <stdio.h>

int main(int argc, char *argv[]) {
    printf("Program: %s\\n", argv[0]);
    printf("Arguments: %d\\n", argc - 1);
    for (int i = 1; i < argc; i++)
        printf("arg[%d] = %s\\n", i, argv[i]);
    return 0;
}`,
      filename: "demonstrate_the_use_of_command.c",
      output: `Program: /tmp/cprobs/p114.out
Arguments: 0`
    },
    {
      question: "Write a C program to resize a dynamic array using realloc.",
      answer: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr = (int *)malloc(3 * sizeof(int));
    arr[0]=1; arr[1]=2; arr[2]=3;
    arr = (int *)realloc(arr, 5 * sizeof(int));
    arr[3]=4; arr[4]=5;
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);
    free(arr);
    return 0;
}`,
      filename: "resize_a_dynamic_array_using.c",
      output: `1 2 3 4 5`
    },
    {
      question: "Write a C program to use calloc to allocate and zero-initialize an array.",
      answer: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 5;
    int *arr = (int *)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    free(arr);
    return 0;
}`,
      filename: "use_calloc_to_allocate_and.c",
      output: `0 0 0 0 0`
    },
    {
      question: "Write a C program using bit manipulation to check if a number is a power of 2.",
      answer: `#include <stdio.h>

int isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}

int main() {
    printf("16: %s\\n", isPowerOfTwo(16) ? "Yes" : "No");
    printf("18: %s\\n", isPowerOfTwo(18) ? "Yes" : "No");
    return 0;
}`,
      filename: "using_bit_manipulation_to_check.c",
      output: `16: Yes
18: No`
    },
    {
      question: "Write a C program to demonstrate a simple linked list node creation using malloc.",
      answer: `#include <stdio.h>
#include <stdlib.h>

struct Node { int data; struct Node *next; };

int main() {
    struct Node *head = (struct Node*)malloc(sizeof(struct Node));
    head->data = 10;
    head->next = (struct Node*)malloc(sizeof(struct Node));
    head->next->data = 20;
    head->next->next = NULL;

    struct Node *p = head;
    while (p != NULL) { printf("%d ", p->data); p = p->next; }
    free(head->next); free(head);
    return 0;
}`,
      filename: "demonstrate_a_simple_linked_list.c",
      output: `10 20`
    },
    {
      question: "Write a C program using a function pointer array to act as a small calculator.",
      answer: `#include <stdio.h>

int add(int a, int b) { return a + b; }
int sub(int a, int b) { return a - b; }
int mul(int a, int b) { return a * b; }

int main() {
    int (*ops[3])(int, int) = {add, sub, mul};
    const char *names[] = {"Add", "Sub", "Mul"};
    for (int i = 0; i < 3; i++)
        printf("%s(6,3) = %d\\n", names[i], ops[i](6, 3));
    return 0;
}`,
      filename: "using_a_function_pointer_array.c",
      output: `Add(6,3) = 9
Sub(6,3) = 3
Mul(6,3) = 18`
    }
  ]
};
