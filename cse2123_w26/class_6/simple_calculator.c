#include <stdio.h>

int main() {
    int a = 10, b = 5;
    char op = '+';

    switch(op) {
        case '+':
            printf("Sum = %d\n", a + b);
            break;
        case '-':
            printf("Difference = %d\n", a - b);
            break;
        case '*':
            printf("Multiplication = %d\n", a * b);
            break;
        case '/':
            printf("Division = %d\n", a / b);
            break;
        default:
            printf("Invalid operator\n");
    }

    return 0;
}