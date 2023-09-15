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

// Attach the variables to the window object
window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
