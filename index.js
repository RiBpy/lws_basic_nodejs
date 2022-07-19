const call = require('./call'); // importing exported Call class from call.js file.

const Call = new call(); // making real instance of imported Call class

// event register...what should do while an event is been raised
Call.on('callerTune', ({ Name, Add }) => {
    console.log(`pick up the phone because ${Name} is calling from ${Add}`);
});

Call.callArrived();
