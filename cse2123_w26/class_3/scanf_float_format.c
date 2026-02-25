/**
Write a C program to take a float input and print it with 2 decimal places
**/
#include <stdio.h>

int main() {
    float num;
    scanf("%f", &num);

    printf("Formatted value: %.2f", num);
    return 0;
}