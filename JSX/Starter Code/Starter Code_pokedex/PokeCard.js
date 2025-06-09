function PokeCard({ name, id, type, xp }) {
	return (
		<div key={id} className="card">
			<p><b>{name}</b></p>
			<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
			<p>Type: {type}</p>
			<p>EXP: {xp}</p>
		</div>
	);
}
