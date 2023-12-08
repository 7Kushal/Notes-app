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
        console.log('Titile =',argv.title)
        console.log('Content =',argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note')
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
// console.log(yargs.argv)