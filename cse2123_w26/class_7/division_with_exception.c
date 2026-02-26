/*
 * Problem Statement:
 * Write a C program that takes two integers as input and divides the first by the second.
 */
#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);

    int c = a/b;

    printf("%d", c);

    return 0;
}