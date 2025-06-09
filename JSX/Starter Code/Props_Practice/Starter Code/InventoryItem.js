function InventoryItem({ name, type, quantity = 0, price = 0 }) {
	return (
		<div>
			<h2>
				<li key={name}>
					<p>Item: {name}</p>
					<p>Type: {type}</p>
					<p>Quantity: {quantity}
						<Message>
							{quantity < 5 ? "(⛔ Low Stock, replenish at next dock.)" : ""}
						</Message>
					</p>
					<p>Price: ➰{price}
						<Message>
							{price * quantity > 1000 ? "(⚠ High Value! Beware Space Piracy!)" : ""}
						</Message>
					</p>
				</li>
			</h2>
		</div>
	);
}
