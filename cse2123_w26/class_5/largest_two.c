/**
Write a C program to find the largest of two numbers
**/
#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);

    if(a > b) {
        printf("a is larger");
    } else {
        printf("b is larger or equal");
    }

    return 0;
}