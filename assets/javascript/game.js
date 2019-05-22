let wordList = ['tippet', 'leader', 'nymphs', 'backing', 'beadhead',
    'streamers', 'mending', 'backcasting', 'caddis', 'damselfly', 'dropper',
    'drag', 'hatch', 'hackle', 'hook', 'indicator', 'mayfly', 'trout', 'bass',
    'presentation', 'riffle', 'run'
];

let word = wordList[Math.floor(Math.random() * wordList.length)];

let answerArray = [];
for (let i = 0; i < wordList.length; i++) {
    answerArray[i] = "_";
}