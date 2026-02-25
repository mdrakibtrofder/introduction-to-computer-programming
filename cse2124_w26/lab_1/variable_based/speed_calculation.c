/**
Write a C program to calculate speed (distance / time) using variables.
**/
#include <stdio.h>

int main() {

    double distance;
    int time;

    distance = 120;
    time = 2;

    double speed = distance / time;

    printf("Speed = %.2lf km/h\n", speed);

    return 0;
}
