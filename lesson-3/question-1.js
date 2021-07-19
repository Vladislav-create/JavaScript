let a = 2;

function simplicityCheck(num) {
    for (i = 2; i <= a; i++) {
        if (a % i !== 0) 
            continue;
        else if (a === i) {
            console.log(a);
        }
         else {
            break;
        }
    }
}

while (a <= 100) {
    simplicityCheck(a);
    a++;
}