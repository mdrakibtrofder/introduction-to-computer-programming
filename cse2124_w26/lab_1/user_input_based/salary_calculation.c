#include <stdio.h>

int main() {

    int basic_salary;
    double bonus;

    printf("Enter basic salary: ");
    scanf("%d", &basic_salary);

    printf("Enter bonus amount: ");
    scanf("%lf", &bonus);

    double total_salary = basic_salary + bonus;

    printf("Total salary = %.2lf\n", total_salary);

    return 0;
}
