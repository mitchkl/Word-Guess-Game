let wordList = ['tippet', 'leader', 'nymphs', 'backing', 'beadhead',
    'streamers', 'mending', 'backcasting', 'caddis', 'damselfly', 'dropper',
    'drag', 'hatch', 'hackle', 'hook', 'indicator', 'mayfly', 'trout', 'bass',
    'presentation', 'riffle', 'run'
];

let word = wordList[Math.floor(Math.random() * wordList.length)];
console.log(word);

let answerArray = [];


for (let i = 0; i < word.length; i++) {
    answerArray = (word.length * "_ ");
    console.log(answerArray);
}

document.addEventListener('keyup', event => {
    console.log('event.key', event.key);

    if (isInWord(event.key)) {
        console.log(event.key + ' is in word: ' + word);
    } else {
        // list wrong guesses
        console.log(event.key + ' is NOT in word: ' + word);
    }
});

// find letter in word

function isInWord(letter) {
    return word.includes(letter);
}