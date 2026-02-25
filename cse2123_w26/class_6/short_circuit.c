/**
Write a C program to demonstrate short-circuit evaluation using && operator
**/
#include <stdio.h>

int main() {
    int a = 0, b = 5;

    if(a && (b / a)) {
        printf("This will not execute");
    } else {
        printf("Short-circuit prevents division by zero");
    }

    return 0;
}