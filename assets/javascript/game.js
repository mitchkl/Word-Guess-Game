let wordList = ['tippet', 'leader', 'nymphs', 'backing', 'beadhead',
    'streamers', 'mending', 'backcasting', 'caddis', 'damselfly', 'dropper',
    'drag', 'hatch', 'hackle', 'hook', 'indicator', 'mayfly', 'trout', 'bass',
    'presentation', 'riffle', 'run'
];
let answerArray = [];
let wins = 0;
let guessRemaining = 10;
let lettersGuessed = [];
let word = wordList[Math.floor(Math.random() * wordList.length)];

console.log(word)

for (let i = 0; i < word.length; i++) {
    answerArray[i] = ("_");
    document.getElementById('answerArray').textContent = answerArray.join(' ');
}
keyEvent();

function keyEvent() {
    document.onkeyup = function(e) {
        //let keyVariable = e.key;
        lettersGuessed.push(e.key);
        console.log(lettersGuessed);
        for (let i = 0; i < word.length; i++) {
            if (lettersGuessed.includes(word[i])) {
                let currentWord = lettersGuessed;
                document.getElementById('answerArray').textContent = currentWord.join('');
                console.log(lettersGuessed);
                console.log(word[i] + 'what');
            } else if (!lettersGuessed.includes(word[i])) {
                document.getElementById('guessedLetters').textContent = lettersGuessed.join(',');
            }

        }
        //document.getElementById('guessedLetters').textContent = lettersGuessed.join(',')
    }
}



function isInWord(letter) {
    return word.includes(letter);
}

/*
];let wordList = ['tippet', 'leader', 'nymphs', 'backing', 'beadhead',
    'streamers', 'mending', 'backcasting', 'caddis', 'damselfly', 'dropper',
    'drag', 'hatch', 'hackle', 'hook', 'indicator', 'mayfly', 'trout', 'bass',
    'presentation', 'riffle', 'run'
//Selects a random word
let word = wordList[Math.floor(Math.random() * wordList.length)];
console.log(word);
let wins = 0;
let remainingGuess = 8;
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
    //console.log('event.key', event.key);
    if (isInWord(event.key, letter)) {
        console.log(event.key + ' is in word: ' + letter);
        document.getElementById('answerArray').textContent = answerArray = letter;
        return answerArray.includes(letter);

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
//go to the guessed letters. also need a variable to keep track of remaining guess's and wins.*/