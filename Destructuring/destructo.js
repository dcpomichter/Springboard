/* Task 1: Unveiling the Coordinates */
const coordinates = { x: 34, y: 42, z: 67 };
const { x, y } = coordinates;
console.log(`The coordinates are, ${x} by ${y}`);

/* Task 2: The Map of Secrets */
const locations = {
    first: "Cave of Wonders",
    second: "Lake of Mystery",
    third: "Mount of Ages",
    fourth: "Desert of Shadows"
};
const { first, second, ...remaining } = locations;
console.log(`The Key areas: ${first} and ${second}`);

/* Task 3: The Mysterious Door */
const doorCode = {
    upper: "Alpha",
    lower: "Omega"
};
const { upper, middle = remaining.third, lower } = doorCode;
console.log(`The Door Code is ${upper}, ${middle}, ${lower}`);

/* Task 4: The Guardian's Riddle */
const riddle = {
    ancientWord: "Sphinx",
    modernWord: "Cat"
};
const { ancientWord: translation } = riddle;
console.log(`The guardian's riddle translates to '${translation}'`);

/* Task 5: The Array of Elements */
const elements = ["Fire", "Water", "Earth", "Air"];
const [element1, element2] = elements;
console.log(`The essential elements are ${element1} and ${element2}`);

/* Task 6: Skipping Stones */
const stones = [1, 2, 3, 4, 5, 6];
const [one, , , , , six] = stones;
console.log(`We need only skip stones ${one} and ${six}`);

/* Task 7: The Array of Shadows */
const shadows = ["Darkness", "Silence", "Whisper", "Echo"];
const [visible, ...hidden] = shadows;
console.log(`The Cave of Shadows reveals the ${visible} but hides ${hidden}`);

/* Task 8: The Wise Function */
const secretPath = {
    direction: "North",
    distance: "75ft"
};
function revealPath({ direction, distance }) {
    console.log(`You must head ${direction} for ${distance}`);
};
revealPath(secretPath);

/* Task 9: The Scroll of Defaults */
const ingredientList = {
    ingredient1: "Oil"
};
function mixPotion({ ingredient1 = "Water", ingredient2 = "Fireflower" }) {
    console.log(`You mix ${ingredient1} and ${ingredient2} to make a Potion of Clarity!`);
};
mixPotion(ingredientList);

/* Task 10: The Array Spell */
const owlWisdom = ["Manotony's", "Greaseball", "Unholy"];
function castSpell([left, right, middle]) {
    console.log(`Destructo casts ${left} ${middle} ${right}`);
};
castSpell(owlWisdom);

/* Task 11: The Nested Secret */
const nestedSecret = { outer: { inner: "The Final Key" } };
const { outer: { inner } } = nestedSecret;
console.log(`Destructo reveals that ${inner} is the great secret.`);

/* Task 12: The Swap of Fate */
let stoneA = "Emerald";
let stoneB = "Ruby";
[stoneA, stoneB] = [stoneB, stoneA];
console.log(stoneA);
console.log(stoneB);
