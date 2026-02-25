/**
Write a C program to take integer, float, and character as input and print them
**/
#include <stdio.h>

int main() {
    int a;
    float b;
    char c;

    scanf("%d %f %c", &a, &b, &c);

    printf("Integer=%d, Float=%.2f, Char=%c", a, b, c);
    return 0;
}