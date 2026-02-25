/**
Write a C program showing the effect of semicolon after if statement
**/
#include <stdio.h>

int main() {
    int a = 10;

    if(a > 5);  // mistake: semicolon ends the if
    {
        printf("This block always executes");
    }

    return 0;
}