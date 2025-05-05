document.addEventListener("DOMContentLoaded", function () {
	const noteContainer = document.getElementById("note-container");
	const newNoteButton = document.getElementById("new-note-button");
	const colorForm = document.getElementById("color-form");
	const colorInput = document.getElementById("color-input");

	// TODO: Load the note color from the local storage.
	let noteColor = null
	if (localStorage.noteColor) {
		noteColor = localStorage.noteColor
	}
	// TODO: Load the note ID counter from the local storage.
	let noteIdCounter = 0; // Counter for assigning unique IDs to new notes.
	if (localStorage.noteIdCounter) {
		noteIdCounter = localStorage.noteIdCounter
	}

	// TODO: Load the notes from the local storage.
	if (localStorage.savedNotes) {
		for (let i = 0; i < localStorage.length; i++) {
			if (parseInt(localStorage.key(i)) >= 0) {
				const id = parseInt(localStorage.key(i));
				const content = localStorage.getItem(id);

				const note = document.createElement("textarea");
				note.setAttribute("data-note-id", id.toString()); // Stores the note ID to its data attribute.
				note.value = content; // Sets the note ID as value.
				note.className = "note"; // Sets a CSS class.
				note.style.backgroundColor = noteColor; // Sets the note's background color using the last selected note color.
				noteContainer.appendChild(note); // Appends it to the note container element as its child.
			}
		}
	}


	function addNewNote() {
		const id = noteIdCounter;
		const content = `Note ${id}`;

		const note = document.createElement("textarea");
		note.setAttribute("data-note-id", id.toString()); // Stores the note ID to its data attribute.
		note.value = content; // Sets the note ID as value.
		note.className = "note"; // Sets a CSS class.
		note.style.backgroundColor = noteColor; // Sets the note's background color using the last selected note color.
		noteContainer.appendChild(note); // Appends it to the note container element as its child.

		noteIdCounter++; // Increments the counter since the ID is used for this note.
		localStorage.setItem('noteIdCounter', noteIdCounter)
		// TODO: Add new note to the saved notes in the local storage.
		const savekey = note.dataset.noteId
		const value = note.value
		localStorage.setItem(savekey, value)
		if (!localStorage.savedNotes) {
			localStorage.setItem('savedNotes', true)
		}
	}

	colorForm.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevents the default event.

		const newColor = colorInput.value.trim();  // Removes whitespaces.

		const notes = document.querySelectorAll(".note");
		for (const note of notes) {
			note.style.backgroundColor = newColor;
		}

		colorInput.value = ""; // Clears the color input field after from submission.

		noteColor = newColor; // Updates the stored note color with the new selection.

		// TODO: Update the note color in the local storage.
		localStorage.setItem('noteColor', newColor)
	});

	newNoteButton.addEventListener("click", function () {
		addNewNote();
	});

	document.addEventListener("dblclick", function (event) {
		if (event.target.classList.contains("note")) {
			const id = event.target.dataset.noteId
			event.target.remove(); // Removes the clicked note.
			console.log(id)
			console.log(localStorage.getItem(id))
			// TODO: Delete the note from the saved notes in the local storage.
			if (localStorage.getItem(id))
				localStorage.removeItem(id)
		}
	});

	noteContainer.addEventListener("blur", function (event) {
		if (event.target.classList.contains("note")) {
			// TODO: Update the note from the saved notes in the local storage.
			const content = event.target.value
			const saveKey = event.target.dataset.noteId
			localStorage.setItem(saveKey, content)
		}
	}, true);

	window.addEventListener("keydown", function (event) {
		/* Ignores key presses made for color and note content inputs. */
		if (event.target.id === "color-input" || event.target.type === "textarea") {
			return;
		}

		/* Adds a new note when the "n" key is pressed. */
		if (event.key === "n" || event.key === "N") {
			addNewNote(); // Adds a new note.
		}
	});
});
