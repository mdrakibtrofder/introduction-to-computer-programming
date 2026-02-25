/**
Write a C program to determine the grade based on marks
**/
#include <stdio.h>

int main() {
    int marks = 75;

    if (marks >= 80) {
        printf("Grade A\n");
    } else if (marks >= 60) {
        printf("Grade B\n");
    } else if (marks >= 40) {
        printf("Grade C\n");
    } else {
        printf("Fail\n");
    }

    return 0;
}