
function fibonacciSum() {
    var sum = 0;
    var x = 1;
    var y = 2;
    var fibosum = 2;
    while (sum < 4000000) {

        sum = x + y;
        x = y;
        y = sum;
        if (sum % 2 === 0) {

            fibosum = fibosum + sum;

        }
    }
    alert(fibosum);

}