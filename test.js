function sortedArr(arr1, arr2){

    if(arr1[arr1.length-1] < arr2[arr2.length-1]){
        var str = arr1.concat(arr2);
    }
    else{
        var str = arr2.concat(arr1);
    }
    return str;
}

n2 = [45, 51, 70];
n1 = [4, 7, 10];
console.log(sortedArr(n1, n2));