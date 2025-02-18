const inventory = [];
export function addItem(...item) {
    inventory.push(...item)
    console.log(`Added Item(s): ${item}`)
};
export function removeItem(item) {
    const removed = inventory.findIndex(function (value) {
        return value === item
    })
    if (removed != -1) {
        inventory.splice(removed, 1)
        console.log(`Removed: ${item}`)
    } else {
        console.log(`${item} not in Inventory`)
    }
};
export function listItems() {
    for (const item of inventory) {
        console.log(`-> ${item}`)
    }
}
