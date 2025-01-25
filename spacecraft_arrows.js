activateHyperdrive = () => { console.log("Hyperdrive Activated!") };
activateHyperdrive();
scanForLife = () => console.log("No lifeforms detected");
scanForLife();
currentCoordinates = (x, y, z) => console.log("Current Spatial Coordinates: (" + x + "," + y + "," + z + ")");
currentCoordinates(320.85, 547.25, 821.65);
let spacecraft = {
    name: "S.S. Spaceship",
    receiveMessage: (text) => {
        console.log("Message Received: " + text);
        console.log("This ship is named " + this.name);
    }
};
spacecraft.receiveMessage("Ready to Land");
/*when trying to use the 'this' keyword in the Arrow Function to reference to 'name' property of the
*spacecraft object it returns 'undefined' instead of the property because the 'this' keyword is looking at the Global 'Window'
*object instead of the local object.
*/
