import { useState } from "react";
import ItemForm from './ItemForm'
import InventoryDisplay from './InventoryDisplay'
import { v4 as uuid } from "uuid";

function SpacecraftBuilder() {
    const initialInventory = []
    const [inventory, setInventory] = useState(initialInventory)

    const addItem = (newItem) => {
        setInventory(inventory => [...inventory, { ...newItem, id: uuid() }])
    }

    const removeItem = (id) => {
        setInventory(inventory => inventory.filter(item => item.id !== id))
    }

    return (
        <>
            <h1>Spacecraft Builder</h1>
            <h3>Inventory Form:</h3>
            <ItemForm addItem={addItem} />
            <h3>Inventory</h3>
            <InventoryDisplay inventory={inventory} removeItem={removeItem} />
        </>
    )
}

export default SpacecraftBuilder
