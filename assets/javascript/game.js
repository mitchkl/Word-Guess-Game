//Array of Words
let wordList = ['tippet', 'leader', 'nymphs', 'backing', 'beadhead',
    'streamers', 'mending', 'backcasting', 'caddis', 'damselfly', 'dropper',
    'drag', 'hatch', 'hackle', 'hook', 'indicator', 'mayfly', 'trout', 'bass',
    'presentation', 'riffle', 'run'
];
//Selects a random word
let word = wordList[Math.floor(Math.random() * wordList.length)];
console.log(word);
//answerArray to put the lines for word on screen
let answerArray = [];

for (let i = 0; i < word.length; i++) {
    answerArray[i] = ("_ ");
    console.log(answerArray);
    document.getElementById('answerArray').textContent = answerArray.join(' ');

}

//let remaingLetters = word.length;

//captures key's pressed and wether the key pressed is in the word or not
document.addEventListener('keyup', event => {
    console.log('event.key', event.key);

    if (isInWord(event.key)) {
        console.log(event.key + ' is in word: ' + word);
        //document.getElementById('answerArray').textContent = answerArray;
        return answerArray.includes(word);

    } else {
        // list wrong guesses
        console.log(event.key + ' is NOT in word: ' + word);
    }
});

// find letter in word
let letter = [];


//find letter in word

function isInWord(letter) {
    return word.includes(letter);
}



//I just cant figure out how to make it all work together. I think i need another array to put the letters that they have
//pressed, if the push a correct letter it needs to go to the current word line and if it is not in the word it needs to 
//go to the guessed letters. also need a variable to keep track of remaining guess's and wins.