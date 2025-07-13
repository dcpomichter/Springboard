import "./ItemCard.css"
function ItemCard({ name, qty, purpose, id }) {
    return (
        <div className="ItemCard">
            <h3 className="ItemCard-name">{name}</h3>
            <p className="ItemCard-qty">Quantity: {qty}</p>
            <p className="ItemCard-purpose">Purpose:
                <br />
                {purpose}
            </p>
        </div>
    )
}

export default ItemCard
