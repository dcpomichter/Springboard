function App() {
	const spacePhenomena = [
		{ id: 1, name: "Asteroid Belt", emoji: "☄️" },
		{ id: 2, name: "Galactic Nebula", emoji: "🌌" },
		{ id: 3, name: "Black Hole", emoji: "🕳️" },
		{ id: 4, name: "Supernova Explosion", emoji: "💥" },
		{ id: 5, name: "Pulsar", emoji: "⚡" },
		{ id: 6, name: "Quasar", emoji: "💫" },
		{ id: 7, name: "Exoplanet", emoji: "🪐" },
		{ id: 8, name: "Interstellar Cloud", emoji: "☁️" },
		{ id: 9, name: "Gamma-Ray Burst", emoji: "🌠" },
		{ id: 10, name: "Magnetic Field Reversal", emoji: "🧲" }
	];

	const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];
	const status = () => {
		const idx = Math.floor(Math.random() * observationStatuses.length)
		return idx
	}
	let obsStat = ''
	return (
		<div>
			<h1>Space Phenomena Tracker</h1>
			{spacePhenomena.map(phenom => (
				<main>
					<h3 key={phenom.id}>{phenom.name}: {phenom.emoji}</h3>
					<ul>
						<li >Observation Status: {obsStat = observationStatuses[status()]}</li>
						<li>Additional Note: {obsStat === "🚀 Prime for Study" ? 'Ensure Advanced Study equipment is packed!' : 'Observe and report as available.'}</li>
					</ul>
				</main>
			))}
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
