const crewmanList = document.getElementById("crewmanList");
const addCrewmanButton = document.getElementById("add-crewman-button");
const closeAddCrewmanModalButton = document.getElementById("add-crewman-modal-close-button");
const closeUpdateCrewmanModalButton = document.getElementById("update-crewman-modal-close-button");
const addCrewmanModal = document.getElementById("add-crewman-modal");
const updateCrewmanModal = document.getElementById("update-crewman-modal");
const addCrewmanModalForm = document.getElementById("add-crewman-modal-form");
const updateCrewmanModalForm = document.getElementById("update-crewman-modal-form");

let updateCrewmanId;

document.addEventListener("DOMContentLoaded", () => {

	if (addCrewmanButton) addCrewmanButton.addEventListener("click", () => addCrewmanModal.style.display = "block");
	if (closeAddCrewmanModalButton) closeAddCrewmanModalButton.addEventListener("click", () => addCrewmanModal.style.display = "none");
	if (addCrewmanModalForm) addCrewmanModalForm.addEventListener("submit", (event) => addCrewman(event));

	if (closeUpdateCrewmanModalButton) closeUpdateCrewmanModalButton.addEventListener("click", () => updateCrewmanModal.style.display = "none");
	if (updateCrewmanModalForm) updateCrewmanModalForm.addEventListener("submit", (event) => updateCrewman(event));

	renderCrewmanList(crewmanList);
});

function renderCrewmanList(crewmanListDiv, path = "../../assets/", shouldRenderButtons = true) {
	if (crewmanListDiv) {

		crewmanListDiv.innerHTML = "";

		fetch("http://localhost:80/crewman")
			.then(response => response.json())
			.then(data => {

				data.sort((a, b) => a.id - b.id);

				data.forEach(crewman => renderCrewman(
					crewmanListDiv,
					crewman,
					["list-item", "crewman"],
					path,
					shouldRenderButtons
				));

			}).catch(error => handleRequestError(error, crewmanListDiv, "crewman"));
	}
}

function renderCrewman(parentDiv, crewman, crewmanClasses, path, shouldRenderButtons) {

	const containterDiv = document.createElement("div");
	containterDiv.classList.add("list-item-container");

	const crewmanDiv = document.createElement("div");
	crewmanClasses.forEach(crewmanClass => crewmanDiv.classList.add(crewmanClass));

	const contentDiv = document.createElement("div");
	contentDiv.classList.add("list-item-content");
	contentDiv.innerHTML = "" +
		"<strong>ID:</strong> " + crewman.id +
		"<br><strong>Name:</strong> " + crewman.name +
		"<br><strong>Patent:</strong> " + crewman.patent;

	const imagesDiv = document.createElement("div");
	imagesDiv.classList.add("list-item-image");

	if (shouldRenderButtons) {

		const image1 = document.createElement("img");
		image1.src = path + "edit-button.svg";
		image1.classList.add("button-icon");
		image1.onclick = () => editUpdateCrewmanModal(crewman);

		imagesDiv.appendChild(image1);
	}

	crewmanDiv.appendChild(contentDiv);
	crewmanDiv.appendChild(imagesDiv);

	containterDiv.appendChild(crewmanDiv);

	if (shouldRenderButtons) {

		const image2 = document.createElement("img");

		image2.src = path + "delete-button.svg";
		image2.classList.add("button-icon");
		image2.onclick = () => deleteCrewman(crewman);

		containterDiv.appendChild(image2);
	}

	parentDiv.appendChild(containterDiv);
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

function addCrewman(event) {

	event.preventDefault();

	const createCrewman = {
		name: `${document.getElementById("add-crewman-form-name").value}`,
		patent: `${document.getElementById("add-crewman-form-patent").value}`
	};

	fetch(`http://localhost:80/crewman`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(createCrewman)
	}).then(async response => {

		if (response.ok) {

			const crewmanList = document.getElementById("crewmanList");
			renderCrewmanList(crewmanList);

			addCrewmanModal.style.display = "none";

		} else {
			const data = await response.json();
			alert(`Could not create crewman:\n\n${data.message}`);
		}

	}).catch(error => alert('Sorry, an error ocurred:\n' + error));
}

function updateCrewman(event) {

	event.preventDefault();

	const createCrewman = {
		name: `${document.getElementById("update-crewman-form-name").value}`,
		patent: `${document.getElementById("update-crewman-form-patent").value}`
	};

	fetch(`http://localhost:80/crewman/${updateCrewmanId}`, {
		method: 'PUT',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(createCrewman)
	}).then(async response => {

		if (response.ok) {

			const crewmanList = document.getElementById("crewmanList");
			renderCrewmanList(crewmanList);

			updateCrewmanModal.style.display = "none";

		} else {
			const data = await response.json();
			alert(`Could not update crewman\n\n${data.message}`);
		}

	}).catch(error => alert('Sorry, an error ocurred:\n' + error));
}

function deleteCrewman(crewman) {

	const crewmanId = crewman.id;

	console.log(`Delete crewman ${crewmanId}`);

	fetch(`http://localhost:80/crewman/${crewmanId}`, { method: 'DELETE' })
		.then(async response => {

			if (response.ok) {

				var crewmanListHome = document.getElementById("crewmanListHome");
				var crewmanList = document.getElementById("crewmanList");

				renderCrewmanList(crewmanListHome, false);
				renderCrewmanList(crewmanList);

			} else {
				const data = await response.json();
				alert(`Can not delete the crewman of id ${crewmanId}:\n\n${data.message}`);
			}

		}).catch(error => alert('An error ocurred:\n' + error));
}

function editUpdateCrewmanModal(crewman) {
	updateCrewmanId = crewman.id;
	document.getElementById("update-crewman-form-name").value = crewman.name;
	document.getElementById("update-crewman-form-patent").value = crewman.patent;
	updateCrewmanModal.style.display = "block";
}

function handleRequestError(error, parentDiv, colorClass) {
	if (parentDiv) {
		const childDiv = document.createElement("div");
		childDiv.classList.add("list-item");
		childDiv.classList.add(colorClass);
		childDiv.innerHTML = "<strong>Error: </strong> " + error.message;
		parentDiv.appendChild(childDiv);
	}
}