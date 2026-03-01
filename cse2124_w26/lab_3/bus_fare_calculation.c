/*
 * Problem Statement:
 * Write a C program that calculates the bus fare for a passenger based on their age:
 * - If age is less than 10, the fare is 0 (Free).
 * - For all other ages, the full base fare is charged.
 * (Assume base fare is 50.00 units).
 */

#include <stdio.h>

int main() {
    int age;
    double base_fare = 50.0;
    double final_fare;
    age = 19;

    if (age < 10) {
        final_fare = 0;
    } else {
        final_fare = base_fare;
    }

    printf("Bus fare is %lf", final_fare);

    return 0;
}
