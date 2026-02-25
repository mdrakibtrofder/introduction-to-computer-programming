/**
Write a C program to calculate the area of a rectangle based on user input.
**/
#include <stdio.h>

int main() {

    double length, width;

    printf("Enter length: ");
    scanf("%lf", &length);

    printf("Enter width: ");
    scanf("%lf", &width);

    double area = length * width;

    printf("Area of rectangle = %.2lf\n", area);

    return 0;
}
