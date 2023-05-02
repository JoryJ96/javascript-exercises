const removeFromArray = function(array) {
    let elementsToRemove = [];
    let elementsToKeep = [];

    // Populate a set/array to check each value of the passed in array against
    for (let i = 1; i < removeFromArray.arguments.length; i++) {
        elementsToRemove.push(removeFromArray.arguments[i]);
    }

    for (let j = 0; j < array.length; j++) {
        if (!(elementsToRemove.includes(array[j]))) {
            elementsToKeep.push(array[j]);
        }
    }

    return elementsToKeep;
};

// Do not edit below this line
module.exports = removeFromArray;
