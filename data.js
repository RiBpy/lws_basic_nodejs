// (function (require,exports,module, __filename, __dirname) {
// IIFE function wraps everything in the file that's how we get these parameters.Normally its been hided
const a = 'Hello';
const array = ['one', 'two', 'three'];
const demo = () => 'Demo function';
demo();
// module.exports = array;
module.exports = {
    arr: array,
    A: a,
    demo, // sending with same name as declared
};
// });
