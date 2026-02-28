/**
Write a C program to determine which location is closest to a given point
among Saidpur, Boraibari, and Kamalpur using latitude and longitude.
**/
#include <stdio.h>

int main() {
    // Given locations
    float lat1 = 25.778, lon1 = 88.897;  // Saidpur
    float lat2 = 25.513, lon2 = 89.856;  // Boraibari
    float lat3 = 25.286, lon3 = 89.863;  // Kamalpur

    // User input location
    float lat, lon;
    scanf("%f %f", &lat, &lon);

    // Distance calculation (simple squared distance)
    float d1 = (lat - lat1)*(lat - lat1) + (lon - lon1)*(lon - lon1);
    float d2 = (lat - lat2)*(lat - lat2) + (lon - lon2)*(lon - lon2);
    float d3 = (lat - lat3)*(lat - lat3) + (lon - lon3)*(lon - lon3);

    // Compare using conditional statements
    if(d1 < d2 && d1 < d3) {
        printf("Closest location: Saidpur");
    } 
    else if(d2 < d1 && d2 < d3) {
        printf("Closest location: Boraibari");
    } 
    else {
        printf("Closest location: Kamalpur");
    }

    return 0;
}