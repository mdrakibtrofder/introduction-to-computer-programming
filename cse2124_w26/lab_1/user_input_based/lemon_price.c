#include <stdio.h>

int main() {
 
    int lemon_price_before_ramadan;
    int lemon_current_price;


    printf("Price before ramadan: ");
    scanf("%d", &lemon_price_before_ramadan);

    printf("Price currently at ramadan: ");
    scanf("%d", &lemon_current_price);

    int price_difference = lemon_current_price - lemon_price_before_ramadan;

    printf("Lemon price increases %d", price_difference);
    return 0;
}
