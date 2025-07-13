import ItemCard from './ItemCard'
import ItemAction from './ItemAction'

function InventoryDisplay({ inventory, removeItem }) {
    return (
        <>
            {inventory.map(({ name, qty, purpose, id }) => (
                <div key={id}>
                    <ItemCard
                        name={name}
                        qty={qty}
                        purpose={purpose}
                        id={id}
                    />
                    <ItemAction id={id} removeItem={removeItem} />
                </div>

            )
            )
            }
        </>
    )
}

export default InventoryDisplay
