/**
Write a C program to calculate total salary (basic + bonus) using variables.
**/
#include <stdio.h>

int main() {

    int basic_salary;
    double bonus;

    basic_salary = 72000;
    bonus = 40000;

    double total_salary = basic_salary + bonus;

    printf("Total salary = %.2lf\n", total_salary);

    return 0;
}
