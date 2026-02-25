/**
Write a C program to demonstrate width and precision in printf
**/
#include <stdio.h>

int main() {
    int num = 123;
    float pi = 3.1415926;

    printf("Number with width: %5d\n", num);
    printf("Float with precision: %.3f", pi);
    return 0;
}