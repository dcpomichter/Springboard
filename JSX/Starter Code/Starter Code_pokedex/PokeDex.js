function PokeDex(props) {
	return (
		<main>
			{props.pokeDex.map(poke => (
				<PokeCard name={poke.name} id={poke.id} type={poke.type} xp={poke.base_experience} key={poke.id} />
			))}
			<p>Total EXP: {props.xpTotal}</p>
			{props.isWinner ? <p><b>THIS HAND WINS!</b></p> : ""}
		</main>
	);
}
