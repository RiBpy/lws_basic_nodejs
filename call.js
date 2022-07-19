const EventEmitter = require('events'); // import as class

// raising events
class Call extends EventEmitter {
    callArrived() {
        console.log('Call arrived');
        this.emit('callerTune', {
            Name: 'ABC',
            Add: 'UlaanBaatar',
        });
    }
}
module.exports = Call;
