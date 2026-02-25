/**
Write a C program to display formatted output using \t and format specifiers
**/
#include <stdio.h>

int main() {
    printf("ID\tName\tScore\n");
    printf("1\tJohn\t%d\n", 90);
    printf("2\tAlice\t%d", 85);
    return 0;
}