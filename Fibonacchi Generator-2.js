function fibonacciGenerator (n) {

    var output = [];

    var fNum = -1;

    var sNum = 1;

    var sum = 0;

   

    for(var i=0; i<n; i++){       

        sum = fNum + sNum;

        output.push(sum);

        fNum = sNum;

        sNum = sum;

    }

    return output;

}