/* Task 1: Track Animal Sightings */
animalSighting = (...sighted) => {
    sighted.forEach(x => console.log("You Sighted a " + x));
};
/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
const mergedHabitats = [...forestHabitats, ...savannahHabitats];
/* Task 3: Update Conservation Status */
const rhinoStatus = {
    population: 500,
    status: "Endangered"
};
const rhinoStatusUpdate = { ...rhinoStatus, status: "Stable" }
/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
    name: "Leo",
    age: 5,
    species: "Lion"
};
const lionProfileCopy = { ...lionProfile, genetics: { sexualDimorphism: true, sizeRange: "Medium", reproduction: "Sexual" } };


// Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * When you make a shallow copy it only creates a new path or object for the highest level
 * of nested properties and objects. Any additional layers are mapped to the same data and
 * so changes to them will change the original and the copy even if you only change the copy.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
    waterQuality: "Good",
    foodSupply: {
        herbivores: "Abundant",
        carnivores: "Sufficient"
    }
};
console.log(ecosystemHealth);
const ecosystemHealthUpdate = { ...ecosystemHealth };
ecosystemHealthUpdate.foodSupply.herbivores = "Scarce";
console.log(ecosystemHealth);
/*
 * Observations:
 * When we update the nested property of a shallow copy it is mapped back to the original
 * data and so it changes both the copy and the original object.
 */
