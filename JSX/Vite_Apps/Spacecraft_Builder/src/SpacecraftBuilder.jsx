import { useState } from "react";
import ItemForm from './ItemForm'
import InventoryDisplay from './InventoryDisplay'

function SpacecraftBuilder() {
    const [inventory, setInventory] = useState({})
    return (
        <>
            <ItemForm />
            <InventoryDisplay />
        </>
    )
}

export default SpacecraftBuilder
