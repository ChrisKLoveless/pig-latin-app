Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
code: pigLatin('a');
Expected Output: 'away'

Test: "It will add way to the end of mulitple letter words beginning with a vowel"
code: pigLatin('away');
Expected Output: "awayway"


Test: "It should add 'ay' to end of words containing multiple consonants"
code: pigLatin('code');
Expected Output: 'codeay'