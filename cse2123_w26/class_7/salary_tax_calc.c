/*
 * Problem Statement:
 * Write a C program that calculates the tax for a given salary based on the following rules:
 * - If salary is over 300,000, the tax is 7,000.
 * - If salary is over 100,000, the tax is 3,000.
 * - If salary is over 50,000, the tax is 2,000.
 * 
 * Performance Check: Calculate the tax for an initial salary value of 150,000.
 */

#include <stdio.h>

int main() {
    // Initial salary value as specified in the problem
    double salary = 150000;
    int tax = 0;

    if (salary > 300000) {
        tax = 7000;
    } else if (salary > 100000) {
        tax = 3000;
    } else if (salary > 50000) {
        tax = 2000;
    } else {
        tax = 0;
    }

    printf("Salary: %.2f\n", salary);
    printf("Calculated Tax: %d\n", tax);

    return 0;
}
