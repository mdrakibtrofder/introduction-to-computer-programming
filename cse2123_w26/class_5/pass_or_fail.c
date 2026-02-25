/**
Write a C program to check whether a student passed or failed (pass mark 50)
**/
#include <stdio.h>

int main() {
    int marks = 40;

    if (marks >= 50) {
        printf("Pass\n");
    } else {
        printf("Fail\n");
    }

    return 0;
}