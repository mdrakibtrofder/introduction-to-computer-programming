/**
Write a C program to print integer, float, and character using printf format specifiers
**/
#include <stdio.h>

int main() {
    int a = 10;
    float b = 3.1416;
    char c = 'A';

    printf("Integer: %d\nFloat: %.2f\nCharacter: %c", a, b, c);
    return 0;
}