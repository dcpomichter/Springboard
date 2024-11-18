var vactionDays = 0
function mysteryOperation(value) {
    for (let i = 0; i < value; i++) {
        const outcome = Math.random(); // Generates a random number between 0 and 1.

        try {
            if (outcome < 0.5) {
                console.log("The operation is completed successfully!");
                vactionDays += 16; //Updates vacationDays if the mission is Successful
            }
            else {
                throw new Error("The operation is failed mysteriously!");
            }
        } catch (e) {
            vactionDays += 4; //Updates vacationDays if the mission is a failure
        }
    }
    console.log(`You have earned ${vactionDays} Vaction Days this year!`)
}

mysteryOperation(20)
