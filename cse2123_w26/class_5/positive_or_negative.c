/**
Write a C program to check whether a number is positive or negative
**/
#include <stdio.h>

int main() {
    int num = -3;

    if (num >= 0) {
        printf("Positive number\n");
    } else {
        printf("Negative number\n");
    }

    return 0;
}