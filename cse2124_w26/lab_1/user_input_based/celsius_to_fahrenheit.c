/**
Write a C program to convert temperature from Celsius to Fahrenheit based on user input.
**/
#include <stdio.h>

int main() {

    double celsius;

    printf("Enter temperature in Celsius: ");
    scanf("%lf", &celsius);

    double fahrenheit = (celsius * 9 / 5) + 32;

    printf("Temperature in Fahrenheit = %.2lf\n", fahrenheit);

    return 0;
}
