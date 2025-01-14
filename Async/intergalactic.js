let oneTimeTasks = [];
let monitoringTaskId;
function addOneTimeTask(func, delay) {
    oneTimeTasks.push({ task: func, timeout: delay });
}
function runOneTimeTasks() {
    for (let i = 0; i < oneTimeTasks.length; oneTimeTasks.shift()) {
        setTimeout(oneTimeTasks[i].task, oneTimeTasks[i].timeout)
    };
}
function startMonitoring() {
    monitoringTaskId = setInterval(function () {
        console.log("\nMonitoring Station Parameters...");
        const powerLevel = (Math.random() * 2) > 0.2 ? "Stable" : "Unstable";
        const oxygenLevel = Math.random().toFixed(2) * 100;
        console.log(`Power Reading: ${powerLevel}\nOxygen Levels: ${oxygenLevel}%\n`)
    }, 5000)
}
function stopMonitoring() {
    clearInterval(monitoringTaskId);
    console.log("Monitoring Stopped")
}
function startCountdown(dur) {
    const countdown = setInterval(function () {
        if (dur == 0) {
            clearInterval(countdown)
            console.log("We have Liftoff!")
        } else {
            console.log("T-Minus " + dur)
            dur--
        }
    }, 1000)
}
function scheduleMission() {
    startMonitoring()
    checkFuel = () => console.log("Fuel Levels Optimal")
    systemReq = () => console.log("Systems Online, no Faults detected")
    computationReq = () => console.log("Launch Sequence Computations in progress")
    computationComp = () => console.log("Launch Sequence computed, data transfer in progress")
    transferData = () => console.log("Data transferred, Launch Sequence Ready")
    addOneTimeTask(checkFuel, 5000)
    addOneTimeTask(systemReq, 8000)
    addOneTimeTask(computationReq, 11000)
    addOneTimeTask(computationComp, 15000)
    addOneTimeTask(transferData, 19000)
    addOneTimeTask(stopMonitoring, 22000)
    addOneTimeTask(function () { startCountdown(10); }, 23000)

    runOneTimeTasks()
}

scheduleMission(); // Starts the mission.
