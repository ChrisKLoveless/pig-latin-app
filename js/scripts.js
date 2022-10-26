//Business Logic

function pigLatin(str) {
    let firstVowel = str.match(/[aeiou]/);
    let firstPosition = str.indexOf(firstVowel);

    if (firstPosition > 0) {
        return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay';
    }
    return str + 'way';
}

//Not with RegEx finding first vowel

function findFirstVowelPosition(str) {
    for (var i = 0; i < str.length; i++) {
        if ('aeiou'.indexOf(str[i]) !== -1) {
            return i;
        }
    }
}

//test area
console.log(pigLatin(''))