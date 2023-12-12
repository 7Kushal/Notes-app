// this file will be doing all the work of storing data in an JSON file for
// Adding an Note 
// Removing(Deleting a note)
// Reading an note 

// as we are going to work with file system to store the data
const fs = require('fs')
const chalk = require('chalk')

//get notes function to get a note
const getnotes = ()=>{
    return "Your notes"
}

// To add an fresh note 
const addNode = (title,body)=>{
    // notes as JS objects 
    // Now we need to add the note in our store 
    console.log(notes)
    
    const isPresent = notes.find((note) => note.title === title)

    if(!isPresent){
    notes.push({
        title : title,
        body : body
    })
    
    console.log(chalk.green.inverse("Note is added😊"))
    }
    else{
        console.log(chalk.yellow("Same title note cannot be add 😒"))
    }

    saveNotes(notes)
}

// to save the notes 

const saveNotes =(note)=>{

    const entryJSON = JSON.stringify(note)
    fs.writeFileSync('notes.json',entryJSON)

}
// Read a note when a title is provided 

const readNote = (title)=>{
    const isPresent = notes.filter((note)=>note.title==title)
    if(isPresent.length>0){
        console.log("✔️")
        console.log(isPresent[0].body)
    }
    else
    console.log("Note not present ❌")
} 

// Remove an Note

const removeNote = (title)=>{
    // console.log(title)
    const notesToKeep = notes.filter((note) =>note.title != title)

    if(notesToKeep.length<notes.length){

        // We need to delete it from data Store now 

        console.log(chalk.red.inverse("Note is Removed"))
        console.log(notesToKeep)
        saveNotes(notesToKeep)
        }
        else{
            console.log("Not Present")
        }
}

const listNotes = ()=>{
    console.log(chalk.yellow.inverse("Your Notes ❤️"))
    notes.forEach(note => {
        console.log(chalk.green.inverse(note.title) + "-->" + 
        chalk.red.inverse(note.body))
    });   
}

// this will get all of the data from data file at once 
const loadnotes = ()=>{

    try {
        const dataBuffer = fs.readFileSync('notes.json') // data comes in form of an buffer 
        const dataJSON = dataBuffer.toString() // converted it into JSON string
        return JSON.parse(dataJSON)  // converts JSON into normal JS object
    } catch (error) {
        return []
    }
}
const notes = loadnotes() 
module.exports = {
    getnotes : getnotes,
    addNote : addNode,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}