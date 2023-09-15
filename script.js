const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the players array
const team = players;

// Create a shallow copy of the players array
const team1 = players.slice();

// Create a shallow copy of the person object
const cap1 = Object.assign({}, person);

// Now you have the desired variables: team, team1, and cap1
console.log("team:", team);
console.log("team1:", team1);
console.log("cap1:", cap1);
