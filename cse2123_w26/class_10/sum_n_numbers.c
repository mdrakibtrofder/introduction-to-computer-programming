/**
Problem: Write a C program to calculate the sum of the first 5 natural numbers using a for loop.
**/
#include <stdio.h>

int main() {
    int sum = 0;
    for (int i = 1; i <= 5; i++) {
        sum += i;
    }
    printf("Sum of first 5 numbers is: %d\n", sum);
    return 0;
}
