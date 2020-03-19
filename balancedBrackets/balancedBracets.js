// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false
// str: "[{]}"                    |   false
const isBalanced = str => {
    const LB = ['[','(','{']
    const RB = [']',')','}']
    const leftCount = 0;
    const rightCount = 0; 

    for(let i = 0; i < str.length; i++) {
        let countL;
        let countR;
        if(str[i] === LB[0] || LB[1] || LB[2]) {
            countL++
        } else if(str[i] === RB[0] || RB[1] || RB[2]) {
            countR++
        }
        if(leftCount == rightCount) {
            return true;
        } else {
            return false;
        }
    };
};

    //if the string contains brackets check to see if the brackets have an even occurence of opening and closing brackets in the string
        //go to each element in the string and see if it corresponds to the left or right bracket
        //if they have an even occurence of left and right brackets 
            //increment the left and right count by one and store the total.
    //if the left total is not equal to the right total
        //return false
    //else return true

    /* I believe i was close to solving it but granted for me it was using what i felt most comfortable with and that is for loops and arrays*/

    console.log(isBalanced('[{]}'))