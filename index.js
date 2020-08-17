// Code your solution here
let findMatching = function(drivers, string) {
  return drivers.filter( current => current.toLowerCase() === string.toLowerCase());
}

let fuzzyMatch = function(drivers, string) {
  return drivers.filter( function(current) {
    console.log(current[0])
  });
}

let matchName = function(drivers, string) {
  return drivers.filter( current => current.name === string);
}

let array = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
