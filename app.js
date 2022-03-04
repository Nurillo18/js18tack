var numbers = [1,3,5,9,];

function add (arr) {
    var number = 0;
    for(var i = 0; i < arr.length; i++){
        number += arr[i];
    }
    return number

}

console.log(add(numbers));