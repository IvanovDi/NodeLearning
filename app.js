console.log('Starting app.');

const fs = require('fs');
const notes = require('./notes');
const _ = require('lodash');
const yargs = require('yargs');
const configYrgs = require('./configYargs');

const argv = configYrgs.argv;

// let command = process.argv[2];
// console.log(command);

// console.log('Process ', process.argv);
// console.log('Yargs ', argv);

if (command === 'add') {
    console.log('Adding new note');
    let note = notes.addNote(argv.title, argv.body);

    note ? notes.logNote(note) : console.log('duplicate title');
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
    note = notes.getNote(argv.title);
    console.log(note);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}
