const fibonacci = function(n) {
    let arr = [1, 1];   // array with first two numbers in Fibonacci sequence
    
    if (n <= 0) return "OOPS";

    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }

    return arr[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
