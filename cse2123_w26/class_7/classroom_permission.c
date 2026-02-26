/*
 * Problem Statement:
 * Write a C program to check if a user has permission to update a Google Classroom name.
 * Permission Rule:
 * - Only users with the role 'teacher' or 'super admin' can update the classroom name.
 * - Other users are not allowed to make updates.
 */

#include <stdio.h>
#include <string.h>

int main() {
    char role[50];

    printf("Enter your role: ");
    // Using scanf with string to get the role. Note: this doesn't handle spaces well, 
    // but roles like 'teacher' or 'superadmin' are usually single words.
    scanf("%s", role);

    // Check for permissions
    if (strcmp(role, "teacher") == 0 || strcmp(role, "superadmin") == 0) {
        printf("Access Granted: You can update the classroom name.\n");
    } else {
        printf("Access Denied: You do not have permission to update the classroom name.\n");
    }

    return 0;
}
