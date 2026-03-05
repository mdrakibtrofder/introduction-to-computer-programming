/**
Problem: Write a C program to print all even numbers between 1 and 20 using a for loop.
**/
#include <stdio.h>

int main() {
    printf("Even numbers between 1 and 20:\n");
    for (int i = 2; i <= 20; i += 2) {
        printf("%d ", i);
    }
    printf("\n");
    return 0;
}
