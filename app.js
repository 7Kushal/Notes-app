// const validator = require( 'validator' )
const chalk = require('chalk');
const notes = require('./notes')
const yargs = require('yargs')

//Customize yargs version

yargs.command({
    command : 'add',
    describe: 'Add a note',
    builder : {
              title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
              } 
              ,
              body: {
                describe: 'Note Content',
                demandOption:true,
                type:'string'
              }
    },
    handler: function(argv){
        console.log('title =',argv.title)
        console.log('body =',argv.body)
        notes.addNote(argv.title,argv.body)
        // here we are getting arguments values from yargs and we need to utilize them and store in data store
        
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder : {
        title : {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
        }
    },
    handler: function(argv){
        console.log(argv.title)
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Printing the note list',
    handler:function(){
        console.log('Listing down the notes')
    }
})

yargs.command({
    command:'read',
    describe:'reading',
    handler: function(){
        console.log('reading the notes')
    }
})
yargs.parse()
console.log(yargs.argv)