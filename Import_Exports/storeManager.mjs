import { addItem, removeItem, listItems } from "./inventory.mjs";
addItem("Rolls", "Jam", "Mustard", "Honey");
listItems();
removeItem("Mustard");
listItems();
