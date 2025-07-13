function ItemAction({ id, removeItem }) {
    const handleClick = (e) => {
        removeItem(id)
    }

    return (
        <div className="ItemAction">
            <button className="ItemAction-remove" onClick={handleClick}>Remove</button>
        </div>
    )
}

export default ItemAction
