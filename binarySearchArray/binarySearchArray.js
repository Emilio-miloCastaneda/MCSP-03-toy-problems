/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

//var binarySearch = function(array, target) {
//    if(array.length >= 0) {
//        if(target > array.length) {
//            return null
//        } else {
//            for(var i = 0; i < array.length; i++) {
//                if(i === target) {
//                    return array[target];
//                }
//            }
//        }
//    } 
//};

const binarySearch = function(array, target) {
    let element;
    if(array.length > 0) {
        for(let i =0; i < array.length; i++) {
            let ele = array[i];
            element = ele;
            if(ele === target) {
                return i;
            }
        }
    }
    return null;
}

var bombaclat = [1,2,3,4,5,6,23,56,32,678,31,43,7,7654,3] 

console.log(binarySearch(bombaclat, 678))


