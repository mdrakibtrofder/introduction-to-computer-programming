/**
Write a C program to demonstrate fall-through behavior in switch
**/
#include <stdio.h>

int main() {
    int n = 2;

    switch(n) {
        case 1:
            printf("One\n");
        case 2:
            printf("Two\n");
        case 3:
            printf("Three\n");
        default:
            printf("Default");
    }

    return 0;
}