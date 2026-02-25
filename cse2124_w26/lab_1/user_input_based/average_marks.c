#include <stdio.h>

int main() {

    int engineering_materials_mark, mechanics_of_solids_mark, details_of_construction_mark;

    printf("Enter engineering materials mark: ");
    scanf("%d", &engineering_materials_mark);

    printf("Enter mechanics of solids mark: ");
    scanf("%d", &mechanics_of_solids_mark);

    printf("Enter details of construction mark: ");
    scanf("%d", &details_of_construction_mark);

    double average = (engineering_materials_mark + mechanics_of_solids_mark + details_of_construction_mark) / 3.0;

    printf("Average marks = %.2lf\n", average);

    return 0;
}
