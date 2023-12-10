// this file will be doing all the work of storing data in an JSON file for
// Adding an Note 
// Removing(Deleting a note)
// Reading an note 

// as we are going to work with file system to store the data
const fs = require('fs')

//get notes function to get a note
const getnotes = function(){
    return "Your notes"
}

// To add an fresh note

const addNode = function(title,body){
    const notes = loadnotes()  // notes as JS objects 
    // Now we need to add the note in our store 
    console.log(notes)
    
    const isPresent = notes.filter( function (note){
        return note.title === title
    })

    if(isPresent==false){
    notes.push({
        title : title,
        body : body
    })
    console.log("Note is added")
    }
    else{
        console.log("We cannot add this note")
    }

    saveNotes(notes)
}

// to save the notes 

const saveNotes = function(note){

    const entryJSON = JSON.stringify(note)
    fs.writeFileSync('notes.json',entryJSON)

}

// Remove an Note

const removeNote = function(title){
    // console.log(title)
    const notes = loadnotes() 
    const isPresent = notes.filter( function (note){
        return note.title === title
    })

    console.log(isPresent)

    if(isPresent.length==1){

        // We need to delete it from data Store now 

        
        removeByTitle(notes,title)
        console.log("Note is Removed")
        console.log(notes)
        saveNotes(notes)
        }
        else{
            console.log("Not Present")
        }
}

// this will get all of the data from data file at once 
const loadnotes = function(){

    try {
        const dataBuffer = fs.readFileSync('notes.json') // data comes in form of an buffer 
        const dataJSON = dataBuffer.toString() // converted it into JSON string
        return JSON.parse(dataJSON)  // converts JSON into normal JS object
    } catch (error) {
        return []
    }
    
}

const removeByTitle = (arr, title) => {
    const requiredIndex = arr.findIndex(el => {
    return el.title === String(title);
    });
     if(requiredIndex === -1){
     return false;
     };
     return !!arr.splice(requiredIndex, 1);
    };

module.exports = {
    getnotes : getnotes,
    addNote : addNode,
    removeNote:removeNote
}