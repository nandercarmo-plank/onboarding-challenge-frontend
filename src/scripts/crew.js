const crewList = document.getElementById("crewList");
const addCrewButton = document.getElementById("add-crew-button");
const closeAddCrewModalButton = document.getElementById("add-crew-modal-close-button");
const closeUpdateCrewModalButton = document.getElementById("update-crew-modal-close-button");
const addCrewModal = document.getElementById("add-crew-modal");
const updateCrewModal = document.getElementById("update-crew-modal");
const addCrewModalForm = document.getElementById("add-crew-modal-form");
const updateCrewModalForm = document.getElementById("update-crew-modal-form");

let updateCrewId;

document.addEventListener("DOMContentLoaded", () => {

	if (addCrewButton) addCrewButton.addEventListener("click", () => addCrewModal.style.display = "block");
	if (closeAddCrewModalButton) closeAddCrewModalButton.addEventListener("click", () => addCrewModal.style.display = "none");
	if (addCrewModalForm) addCrewModalForm.addEventListener("submit", (event) => addCrew(event));

	if (closeUpdateCrewModalButton) closeUpdateCrewModalButton.addEventListener("click", () => updateCrewModal.style.display = "none");
	if (updateCrewModalForm) updateCrewModalForm.addEventListener("submit", (event) => updateCrew(event));

	renderCrewList(crewList);
});

function renderCrewList(crewListDiv, path = "../../assets/", shouldRenderButtons = true) {
	if (crewListDiv) {

		crewListDiv.innerHTML = "";

		fetch("http://localhost:80/crew")
			.then(response => response.json())
			.then(data => {

				data.sort((a, b) => a.id - b.id);

				data.forEach(crew => renderCrew(
					crewListDiv,
					crew,
					["list-item", "crew"],
					path,
					shouldRenderButtons
				));

			}).catch(error => handleRequestError(error, crewListDiv, "crew"));
	}
}

function renderCrew(parentDiv, crew, crewClasses, path, shouldRenderButtons) {

	const containterDiv = document.createElement("div");
	containterDiv.classList.add("list-item-container");

	const crewDiv = document.createElement("div");
	crewClasses.forEach(crewClass => crewDiv.classList.add(crewClass));

	const contentDiv = document.createElement("div");
	contentDiv.classList.add("list-item-content");
	contentDiv.innerHTML = "" +
		"<strong>ID:</strong> " + crew.id +
		"<br><strong>Name:</strong> " + crew.name +
		"<br><strong>Crewmans:</strong><br>";
	crew.crewmans.forEach(crewman => renderCrewman(
		contentDiv,
		crewman,
		["sub-list-item"],
		false
	));

	const imagesDiv = document.createElement("div");
	imagesDiv.classList.add("list-item-image");

	if (shouldRenderButtons) {

		const image1 = document.createElement("img");
		image1.src = path + "edit-button.svg";
		image1.classList.add("button-icon");
		image1.onclick = () => editUpdateCrewModal(crew);

		imagesDiv.appendChild(image1);
	}

	crewDiv.appendChild(contentDiv);
	crewDiv.appendChild(imagesDiv);

	containterDiv.appendChild(crewDiv);

	if (shouldRenderButtons) {

		const image2 = document.createElement("img");

		image2.src = path + "delete-button.svg";
		image2.classList.add("button-icon");
		image2.onclick = () => deleteCrew(crew);

		containterDiv.appendChild(image2);
	}

	parentDiv.appendChild(containterDiv);
}

async function addCrew(event) {

	event.preventDefault();

	const createCrew = {
		name: `${document.getElementById("add-crew-form-name").value}`,
		crewmans: await JSON.parse(`[${document.getElementById("add-crew-form-crewmans").value}]`)
	};

	fetch(`http://localhost:80/crew`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(createCrew)
	}).then(async response => {

		if (response.ok) {

			const crewList = document.getElementById("crewList");
			renderCrewList(crewList);

			addCrewModal.style.display = "none";

		} else {
			const data = await response.json();
			alert(`Could not delete the crew of id ${crewId}:\n\n${data.message}`);
		}

	}).catch(error => alert('Sorry, an error ocurred:\n' + error));
}

async function updateCrew(event) {

	event.preventDefault();

	const createCrew = {
		name: `${document.getElementById("update-crew-form-name").value}`,
		crewmans: await JSON.parse(`[${document.getElementById("update-crew-form-crewmans").value}]`)
	};

	fetch(`http://localhost:80/crew/${updateCrewId}`, {
		method: 'PUT',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(createCrew)
	}).then(async response => {

		if (response.ok) {

			const crewList = document.getElementById("crewList");
			renderCrewList(crewList);

			updateCrewModal.style.display = "none";

		} else {
			const data = await response.json();
			alert(`Could not delete the crew of id ${crewId}:\n\n${data.message}`);
		}

	}).catch(error => alert('Sorry, an error ocurred:\n' + error));
}

function deleteCrew(crew) {

	const crewId = crew.id;

	console.log(`Delete crew ${crewId}`);

	fetch(`http://localhost:80/crew/${crewId}`, { method: 'DELETE' })
		.then(async response => {

			if (response.ok) {

				var crewListHome = document.getElementById("crewListHome");
				var crewList = document.getElementById("crewList");

				renderCrewList(crewListHome, false);
				renderCrewList(crewList);

			} else {
				const data = await response.json();
				alert(`Can not delete the crew of id ${crewId}:\n\n${data.message}`);
			}

		}).catch(error => alert('An error ocurred:\n' + error));
}

function editUpdateCrewModal(crew) {
	updateCrewId = crew.id;
	document.getElementById("update-crew-form-name").value = crew.name;
	document.getElementById("update-crew-form-crewmans").value = crew.crewmans.map(crewman => crewman.id).join(", ");
	updateCrewModal.style.display = "block";
}

function handleRequestError(error, parentDiv, colorClass) {
	if (parentDiv) {
		var childDiv = document.createElement("div");
		childDiv.classList.add("list-item");
		childDiv.classList.add(colorClass);
		childDiv.innerHTML = "<strong>Error: </strong> " + error.message;
		parentDiv.appendChild(childDiv);
	}
}