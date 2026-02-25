/**
Write a C program demonstrating assignment (=) inside if condition instead of comparison (==)
**/
#include <stdio.h>

int main() {
    int a = 5;

    if(a = 0) {
        printf("Condition is TRUE");
    } else {
        printf("Condition is FALSE");
    }

    return 0;
}