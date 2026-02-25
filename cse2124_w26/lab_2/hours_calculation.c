/**
Write a C program to calculate total study hours given total days, number of Fridays, and number of holidays. Assume weekdays are 8 hours and weekend/holidays are 4 hours.
**/
#include <stdio.h>

int main() {
    int total_days;
    int fridays;
    int holidays;
    printf("Enter total days: ");
    scanf("%d", &total_days);
    printf("Enter number of Fridays: ");
    scanf("%d", &fridays);
    printf("Enter number of holidays: ");
    scanf("%d", &holidays);

    int weekend_holiday_days = fridays + holidays;
    int weekdays = total_days - weekend_holiday_days;

    int total_hours = (weekdays * 8) + (weekend_holiday_days * 4);

    printf("Total study hours = %d\n", total_hours);

    return 0;
}