/*
 * Problem Statement:
 * Write a C program to determine if a student is eligible to sit for an exam.
 * Criteria:
 * - The student must have an attendance percentage of 75% or higher.
 * - The student must have paid their fees (represented by 1 for Yes, 0 for No).
 * 
 * Input: Attendance percentage and fee payment status.
 */

#include <stdio.h>

int main() {
    double attendance;
    int feesPaid;

    printf("Enter attendance percentage: ");
    scanf("%lf", &attendance);

    printf("Have you paid the fees? (1 for Yes, 0 for No): ");
    scanf("%d", &feesPaid);

    // Logic: Both conditions must be met
    if (attendance >= 75 && feesPaid == 1) {
        printf("Result: You are eligible for the exam.\n");
    } else {
        printf("Result: You are NOT eligible for the exam.\n");
        
        if (attendance < 75) {
            printf("- Reason: Attendance is below 75%%.\n");
        }
        if (feesPaid == 0) {
            printf("- Reason: Fees not paid.\n");
        }
    }

    return 0;
}
