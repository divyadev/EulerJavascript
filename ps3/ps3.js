function isprime(inp) {
    for (var z = 2; z < inp / 2; z++) {
        if (inp % z === 0) {
            return false;
        }
    }
    return true;
}


function primeFactor() {
    var num = 600851475143;

    var maxBound = Math.round(num / 2);

    var count = 0;

    for (var i = maxBound; i >= 2; i--, count++) {
        if (num % i === 0 && isprime(i)) {
            alert(i);
            break;
        }
        //console.log("currently processing:" + i);
        if (count === 100000000) {
            console.log("i at" + i + "<br/>");
            count = 0;
        }
    }
    //alert(y);
}
