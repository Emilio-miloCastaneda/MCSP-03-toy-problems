// Write a function that takes as its input a string
// and returns an array of arrays as shown below
// sorted in descending order by frequency
// and then by ascending order by character.

// "aaabbc" => [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// "mississippi" => [ [ "i]", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// "" => [ ]

// function characterFrequency(string) {
    // 
    // /* Original result for reference */
    // 
    //create an empty array
    //create an empty object
    //loop through the string to go to each of the characters
    //    if the character is not in the object as an existing key/value pair, create it and set the value to one.
    //    else increment its count
    // let arr = [];
    // let obj1 = {};

    // for(let i = 0; i < string.length; i++) {
        // if(!obj1[string[i]]) {
        //    return obj1[string[i]] = 1;
    //    } else if(obj1[string[i]]) {
        //    return obj1[string[i]]++;    
    //    }
    // }
    // for(let key in obj1) {
        // arr.push(arr[key, obj1[key]])
    // }
    // return arr;
// }
// 
/* Correct Answer */

characterFrequency = (string) => {
    let arr = [];
    let obj1 = {};
    for(let letter of string) {
        if(!obj1[letter]) {
            obj1[letter] = 0;
        }
        obj1[letter]++;
    }
    for(let key in obj1) {
        let tuple = [key, obj1[key]];
        arr.push(tuple);
    }
    arr.sort((a, b) => {
        if(a[1] > b[1]) {
            return -1;
        }
        if(a[1] < b[1]) {
            return 1
        }
        if(a[1] === b[1]) {
            if(a[0] > b[0]) {
                return 1;
            } else {
                return -1;
            }
        }
        return arr;
    })
}

console.log(characterFrequency('aaabbc'));