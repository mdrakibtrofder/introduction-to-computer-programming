#include <stdio.h>

int main() {
 

    int lemon_price_before_ramadan;
    int lemon_current_price;
    lemon_price_before_ramadan = 15;
    lemon_current_price = 25;
    int price_difference;
    price_difference = lemon_current_price - lemon_price_before_ramadan;

    printf("Lemon price increases %0.2lf", price_difference);
    return 0;
}
