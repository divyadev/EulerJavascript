/**
 * Created by kingsly on 6/27/2016.
 */
function getOddSum() {
    var sum=0, i=0;
    for(i=1;i<=10;i++) {
        if(i % 2 === 1) {
            sum += i;
        }
    }
    alert("Sum of odd numbers 1 to 10=" + sum);
}