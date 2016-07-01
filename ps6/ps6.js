function sumOfSquares(inp){
    var x = 0;
    for(var i=1;i<=inp;i++){

        x= x + i*i;
    }
    return x;
}
function squareOfSum(inp){
    var y = 0;
    for (var i= 1;i<=inp;i++){

        y= y +i;
        
    }
    var z= y*y;
    return z;
}
function sumSquareDiff(){
    alert(squareOfSum(100)-sumOfSquares(100));
}