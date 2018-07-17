// var obj = {
//     name: "Dima"
// };
//
// var stringObj= JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Dima", "age": 35}';
//
// var person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var origingalNote = {
    title: 'Some note',
    body: 'some body'
};

var originalNoteString = JSON.stringify(origingalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

note = JSON.parse(noteString);

console.log(typeof note);
console.log(note);