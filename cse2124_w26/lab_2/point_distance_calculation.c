/**
Write a C program to calculate the distance between two points (x1, y1) and (x2, y2).
**/
#include <stdio.h>
#include <math.h>

int main() {
    double x1, y1, x2, y2, distance;

    printf("Enter x1");
    scanf("%lf", &x1);

    printf("Enter y1");
    scanf("%lf", &y1);

    printf("Enter x2");
    scanf("%lf", &x2);

    printf("Enter y2");
    scanf("%lf", &y2);

    distance = sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1));

    printf("Distance = %.2f\n", distance);

    return 0;
}