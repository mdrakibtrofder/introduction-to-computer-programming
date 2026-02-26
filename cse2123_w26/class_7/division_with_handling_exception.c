/*
 * Problem Statement:
 * Write a C program that takes two integers as input and divides the first by the second.
 * Ensure the program handles the case where the divisor is zero by displaying an 
 * appropriate error message.
 */
#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);

    if(b == 0) {
        printf("Division by zero is not allowed");
    } else {
        int c;
        c = a/b;
        printf("%d", c);
    }

    return 0;
}