/*
 * Problem Statement:
 * Write a C program to check if a user has permission to update a Google Classroom name.
 * A person can update the name if they are either a Teacher or a Super Admin.
 * 
 * In this scenario:
 * - is_teacher is initialized to true.
 * - is_super_admin is initialized to false.
 */

#include <stdio.h>
#include <stdbool.h>

int main() {
    // Initializing boolean variables
    bool is_teacher = true;
    bool is_super_admin = false;

    // Check if either condition is true
    if (is_teacher || is_super_admin) {
        printf("Access Granted: You can update the classroom name.\n");
    } else {
        printf("Access Denied: You do not have permission to update the classroom name.\n");
    }

    return 0;
}
