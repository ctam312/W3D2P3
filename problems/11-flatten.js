/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
    const res = [];
    arr.forEach(el => {
        if (Array.isArray(el)) { //is array checks true false
            res.push(...flatten(el))
        } else {
            res.push(el)
        }
    })
    return res;
}

flatten([1, [2, [3]]]); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
