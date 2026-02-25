/**
Write a C program to calculate speed (distance / time) based on user input.
**/
#include <stdio.h>

int main() {

    double distance;
    int time;

    printf("Enter distance (in km): ");
    scanf("%lf", &distance);

    printf("Enter time (in hours): ");
    scanf("%d", &time);

    double speed = distance / time;

    printf("Speed = %.2lf km/h\n", speed);

    return 0;
}
