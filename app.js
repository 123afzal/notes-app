/**
 * Created by Syed Afzal
 */

console.log("App is starting now");
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes')

let input = yargs.argv._[0];
let argv = yargs.argv;
console.log("Input Command : ",input);
console.log("Process : ",process.argv);
console.log("Yargs : ",yargs.argv);

if(input === "add"){
    let note = notes.addNote(argv.title, argv.body);
    if(note){
        notes.logNote(note)
    } else{
        console.log("Title already taken");
    }
} else if(input === "remove"){
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? "Note was removed" : "Not was not Found"
    console.log(message);
} else if(input === "list"){
    let list = notes.getAll();
    if(list){
        list.map((note)=>{
            notes.logNote(note);
        })
    } else{
        console.log("No notes are in DB");
    }
} else if(input === "read"){
    let note = notes.getNote(argv.title);
    if(note){
        console.log("Note Found");
        notes.logNote(note);
    } else{
        console.log("No note is present of that name");
    }
} else{
    console.log("Command did not exist");
}


