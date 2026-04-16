export interface CodingProblem {
  question: string;
  answer: string;
}

export const chapterProblems: Record<string, CodingProblem[]> = {
  "introduction-to-c-programming": [
    {
      question: "Write a C program to print \"Hello, World!\" on the screen.",
      answer: `#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`
    },
    {
      question: "Write a C program to print your name, age, and city each on a new line.",
      answer: `#include <stdio.h>

int main() {
    printf("Name: John\\n");
    printf("Age: 20\\n");
    printf("City: Dhaka\\n");
    return 0;
}`
    },
    {
      question: "Write a C program that prints the result of 15 + 27 using printf.",
      answer: `#include <stdio.h>

int main() {
    printf("Sum = %d", 15 + 27);
    return 0;
}`
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
}`
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
}`
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
}`
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
}`
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
}`
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
}`
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
}`
    },
    {
      question: "Write a C program to demonstrate implicit and explicit type casting.",
      answer: `#include <stdio.h>

int main() {
    int a = 5, b = 2;
    float result1 = a / b;          // Implicit: 2.000000
    float result2 = (float)a / b;   // Explicit: 2.500000
    printf("Implicit: %f\\n", result1);
    printf("Explicit: %f\\n", result2);
    return 0;
}`
    },
    {
      question: "Write a C program to print the ASCII value of a character entered by the user.",
      answer: `#include <stdio.h>

int main() {
    char ch = 'A';
    printf("ASCII value of %c = %d", ch, ch);
    return 0;
}`
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
}`
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
}`
    },
    {
      question: "Write a C program to assign a grade (A, B, C, D, F) based on marks using else-if ladder.",
      answer: `#include <stdio.h>

int main() {
    int marks = 78;
    if (marks >= 90)
        printf("Grade: A");
    else if (marks >= 80)
        printf("Grade: B");
    else if (marks >= 70)
        printf("Grade: C");
    else if (marks >= 60)
        printf("Grade: D");
    else
        printf("Grade: F");
    return 0;
}`
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
}`
    },
    {
      question: "Write a C program to find the factorial of a number using a for loop.",
      answer: `#include <stdio.h>

int main() {
    int n = 5;
    long long fact = 1;
    for (int i = 1; i <= n; i++) {
        fact *= i;
    }
    printf("Factorial of %d = %lld", n, fact);
    return 0;
}`
    },
    {
      question: "Write a C program to print the sum of first N natural numbers using a while loop.",
      answer: `#include <stdio.h>

int main() {
    int n = 10, i = 1, sum = 0;
    while (i <= n) {
        sum += i;
        i++;
    }
    printf("Sum = %d", sum);
    return 0;
}`
    }
  ],
  "array": [
    {
      question: "Write a C program to find the largest element in an array.",
      answer: `#include <stdio.h>

int main() {
    int arr[] = {12, 45, 7, 23, 56, 34};
    int n = 6, max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    printf("Largest element: %d", max);
    return 0;
}`
    },
    {
      question: "Write a C program to reverse an array.",
      answer: `#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;
    for (int i = 0; i < n / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    return 0;
}`
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
}`
    }
  ],
  "string": [
    {
      question: "Write a C program to find the length of a string without using strlen().",
      answer: `#include <stdio.h>

int main() {
    char str[] = "Hello";
    int len = 0;
    while (str[len] != '\\0')
        len++;
    printf("Length: %d", len);
    return 0;
}`
    },
    {
      question: "Write a C program to check if a string is a palindrome.",
      answer: `#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "madam";
    int len = strlen(str), isPalin = 1;
    for (int i = 0; i < len / 2; i++) {
        if (str[i] != str[len - 1 - i]) {
            isPalin = 0;
            break;
        }
    }
    printf("%s is %sa palindrome", str, isPalin ? "" : "not ");
    return 0;
}`
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
}`
    }
  ],
  "pointer": [
    {
      question: "Write a C program to swap two numbers using pointers.",
      answer: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    swap(&x, &y);
    printf("x = %d, y = %d", x, y);
    return 0;
}`
    },
    {
      question: "Write a C program to access array elements using pointers.",
      answer: `#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr;
    for (int i = 0; i < 5; i++) {
        printf("arr[%d] = %d\\n", i, *(ptr + i));
    }
    return 0;
}`
    },
    {
      question: "Write a C program to find the length of a string using a pointer.",
      answer: `#include <stdio.h>

int main() {
    char str[] = "Pointer";
    char *ptr = str;
    int len = 0;
    while (*ptr != '\\0') {
        len++;
        ptr++;
    }
    printf("Length: %d", len);
    return 0;
}`
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
    printf("Name: %s\\nRoll: %d\\nMarks: %.1f",
           s.name, s.roll, s.marks);
    return 0;
}`
    },
    {
      question: "Write a C program to pass a structure to a function and print its members.",
      answer: `#include <stdio.h>

struct Point {
    int x, y;
};

void display(struct Point p) {
    printf("(%d, %d)", p.x, p.y);
}

int main() {
    struct Point p1 = {3, 7};
    display(p1);
    return 0;
}`
    },
    {
      question: "Write a C program to create an array of structures to store 3 books (title, price).",
      answer: `#include <stdio.h>

struct Book {
    char title[50];
    float price;
};

int main() {
    struct Book books[3] = {
        {"C Programming", 350.0},
        {"Data Structures", 450.0},
        {"Algorithms", 500.0}
    };
    for (int i = 0; i < 3; i++)
        printf("%s - $%.0f\\n", books[i].title, books[i].price);
    return 0;
}`
    }
  ],
  "union": [
    {
      question: "Write a C program to demonstrate the difference between struct and union in terms of memory size.",
      answer: `#include <stdio.h>

struct S { int i; float f; char c; };
union U { int i; float f; char c; };

int main() {
    printf("Struct size: %lu\\n", sizeof(struct S));
    printf("Union size: %lu\\n", sizeof(union U));
    return 0;
}`
    },
    {
      question: "Write a C program to store and access different data types using a union.",
      answer: `#include <stdio.h>

union Data {
    int i;
    float f;
    char c;
};

int main() {
    union Data d;
    d.i = 42;
    printf("Integer: %d\\n", d.i);
    d.f = 3.14;
    printf("Float: %.2f\\n", d.f);
    d.c = 'A';
    printf("Char: %c\\n", d.c);
    return 0;
}`
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
}`
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
}`
    },
    {
      question: "Write a C function to calculate the power of a number (base^exponent).",
      answer: `#include <stdio.h>

long long power(int base, int exp) {
    long long result = 1;
    for (int i = 0; i < exp; i++)
        result *= base;
    return result;
}

int main() {
    printf("2^10 = %lld", power(2, 10));
    return 0;
}`
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
}`
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
    for (int i = 0; i < 10; i++)
        printf("%d ", fibonacci(i));
    return 0;
}`
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
}`
    },
    {
      question: "Write a recursive C function to reverse a string.",
      answer: `#include <stdio.h>
#include <string.h>

void reverse(char str[], int start, int end) {
    if (start >= end) return;
    char temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    reverse(str, start + 1, end - 1);
}

int main() {
    char str[] = "Hello";
    reverse(str, 0, strlen(str) - 1);
    printf("%s", str);
    return 0;
}`
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
}`
    },
    {
      question: "Write a C program to count the number of characters in a file.",
      answer: `#include <stdio.h>

int main() {
    FILE *fp = fopen("test.txt", "r");
    int count = 0;
    while (fgetc(fp) != EOF)
        count++;
    fclose(fp);
    printf("Characters: %d", count);
    return 0;
}`
    },
    {
      question: "Write a C program to copy contents from one file to another.",
      answer: `#include <stdio.h>

int main() {
    FILE *src = fopen("source.txt", "r");
    FILE *dest = fopen("dest.txt", "w");
    char ch;
    while ((ch = fgetc(src)) != EOF)
        fputc(ch, dest);
    fclose(src);
    fclose(dest);
    printf("File copied successfully!");
    return 0;
}`
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
    for (int i = 0; i < n; i++)
        sum += arr[i];
    printf("Average: %.2f", sum / n);
    free(arr);
    return 0;
}`
    },
    {
      question: "Write a C program to use a function pointer to call different arithmetic operations.",
      answer: `#include <stdio.h>

int add(int a, int b) { return a + b; }
int sub(int a, int b) { return a - b; }

int main() {
    int (*operation)(int, int);
    operation = add;
    printf("Add: %d\\n", operation(10, 5));
    operation = sub;
    printf("Sub: %d\\n", operation(10, 5));
    return 0;
}`
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
}`
    }
  ]
};
