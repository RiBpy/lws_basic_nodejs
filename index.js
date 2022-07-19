const os = require('os');
const fs = require('fs');
const EventEmitter = require('events'); // import as class

const emitter = new EventEmitter(); // emitter to raise event ...

// const _ = require('./data');

// const b = 'Bangladesh';
// console.log(_.arr);
// console.log(`${_.A} ${b}`);

// os
// console.log(os.cpus());
// console.log(os.homedir());
// console.log(os.freemem() / (1000 * 1000));
// console.log(os.arch());

// fs(file system)
// fs.writeFileSync('file.txt', 'written file from fs core module of node');
// to add text to a previously declared file..
// fs.appendFileSync('file.txt', "These modules don't need to be import");

// const fileData = fs.readFileSync('file.txt');
// console.log(fileData.toString()); // to convert buffer data into string
// or
// fs.readFile('file.txt', (err, data) => {
//     // same as readFileSync..but it works async. way
//        console.log(err);
//     console.log(data.toString());
// });

// events module
// event register...what should do while an event is been raised
emitter.on('callerTune', (person) => {
    console.log(`pick up the phone because ${person}`);
});
// event raise using emitter...that means phone is ringing...
emitter.emit('callerTune', 'Someone is calling'); // emitter.emit('callerTune', {name:"A",add:"Hatiya"})..multiple parameter as object
