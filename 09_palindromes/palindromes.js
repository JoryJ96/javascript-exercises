const palindromes = function (string) {
    string.replace(/\W/g, '');

    let formattedString = string.split(" ");
    let left = formattedString.slice(0, 1);
    let right = formattedString.slice(-1, 1);

    while (formattedString.length > 1) {
        if (left != right) {
            return false;
        }
        left = formattedString.slice(0, 1);
        right = formattedString.slice(-1, 1);
    }

    return true;
};

function charCheck(char) {
    switch (char) {
        case "!":
            return true;
        case "?":
            return true;
        case ".":
            return true;
    }

    return false;
}

// Do not edit below this line
module.exports = palindromes;
