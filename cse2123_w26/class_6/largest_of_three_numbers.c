#include <stdio.h>

int main() {
    int a = 5, b = 8, c = 3;

    if (a > b && a > c) {
        printf("a is largest\n");
    } else if (b > c) {
        printf("b is largest\n");
    } else {
        printf("c is largest\n");
    }

    return 0;
}