/*
 * Problem Statement:
 * Write a C program that calculates the bus fare for a passenger based on their age:
 * - If age is less than 10, the fare is 0 (Free).
 * - If age is 60 or above, the passenger gets a 50% discount on the base fare.
 * - For all other ages, the full base fare is charged.
 * (Assume base fare is 50.00 units).
 */

#include <stdio.h>

int main() {
    int age;
    float base_fare = 50.0;
    float final_fare;

    printf("Enter passenger age: ");
    scanf("%d", &age);

    if (age < 10) {
        final_fare = 0;
        printf("Passenger age is %d. Fare is Free!\n", age);
    } else if (age >= 60) {
        final_fare = base_fare * 0.5;
        printf("Senior Citizen Discount applied. Fare: %.2f\n", final_fare);
    } else {
        final_fare = base_fare;
        printf("Regular Fare: %.2f\n", final_fare);
    }

    return 0;
}
