/**
 * Created by Syed Afzal
 */
const fs = require("fs");

console.log("Starting Note File");

let fetchNotes = () =>{
    try{
        let noteString = fs.readFileSync("notes-data.json");
        return JSON.parse(noteString)
    } catch (e){
        return [];
    }
};

let saveNotes = (notes) =>{
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

let addNote = (title, body) =>{
    console.log("Add Note", title + " " + body);
    let note = {
        title,
        body
    };
    let notes = fetchNotes();

    let filteredDuplicates = notes.filter((note)=>{
        return note.title === title;
    });

    if(filteredDuplicates.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

let getAll = () => {
    return fetchNotes();
};

let getNote = (title) => {
    let notes = fetchNotes();
    let filteredNote = notes.filter((note) => note.title === title);
    return filteredNote[0];
};

let removeNote = (title) =>{
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return filteredNotes.length !== notes.length;
};

let logNote = (note) =>{
    console.log("_______");
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`)
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
