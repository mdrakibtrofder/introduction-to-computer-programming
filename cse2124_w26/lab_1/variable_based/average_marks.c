/**
Write a C program to calculate the average marks of three subjects using variables.
**/
#include <stdio.h>

int main() {

    int engineering_materials_mark, mechanics_of_solids_mark, details_of_construction_mark;

    engineering_materials_mark = 89;
    mechanics_of_solids_mark = 92;
    details_of_construction_mark = 95;

    double average = (engineering_materials_mark + mechanics_of_solids_mark + details_of_construction_mark) / 3.0;

    printf("Average marks = %.2lf\n", average);

    return 0;
}
