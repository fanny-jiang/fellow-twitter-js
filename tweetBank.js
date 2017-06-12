const _ = require('lodash')

var data = []

function add (name, content) {
  data.push({ name: name, content: content, id: data.length });
}

// returns a copy of the data array, prevents mutation of the original data
function list () {
  return _.cloneDeep(data);
}

// looks through the array and returns an array of only the objects for which the properties passed in exist
function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

// _.cloneDeep(): recursively clones value or data set so that you don't mutate the actual data
// _.filter(): Iterates over elements of collection, returning an array of all elements predicate returns truthy for.

/*

Test the modules:
// add(name, content)
add('Fanny', 'This is so cool')
console.log('tweet data', data)
console.log('list: ', list())

var tweetBank = require('./tweetBank')
tweetBank.find({ name: 'Scott Claujure' })

*/
