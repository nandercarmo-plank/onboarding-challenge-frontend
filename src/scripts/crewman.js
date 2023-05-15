const crewmanList = document.getElementById("crewmanList");
const addCrewmanButton = document.getElementById("add-crewman-button");
const closeAddCrewmanModalButton = document.getElementById("add-crewman-modal-close-button");
const closeUpdateCrewmanModalButton = document.getElementById("update-crewman-modal-close-button");
const addCrewmanModal = document.getElementById("add-crewman-modal");
const updateCrewmanModal = document.getElementById("update-crewman-modal");
const addCrewmanModalForm = document.getElementById("add-crewman-modal-form");
const updateCrewmanModalForm = document.getElementById("update-crewman-modal-form");
const crewmanNotification = document.getElementById("crewman-notification");

let updateCrewmanId;

document.addEventListener("DOMContentLoaded", () => {

	if (addCrewmanButton) addCrewmanButton.addEventListener("click", () => addCrewmanModal.style.visibility = "visible");
	if (closeAddCrewmanModalButton) closeAddCrewmanModalButton.addEventListener("click", () => addCrewmanModal.style.visibility = "hidden");
	if (addCrewmanModalForm) addCrewmanModalForm.addEventListener("submit", (event) => addCrewman(event));

	if (closeUpdateCrewmanModalButton) closeUpdateCrewmanModalButton.addEventListener("click", () => updateCrewmanModal.style.visibility = "hidden");
	if (updateCrewmanModalForm) updateCrewmanModalForm.addEventListener("submit", (event) => updateCrewman(event));

	if (crewmanNotification) crewmanNotification.addEventListener("click", () => { crewmanNotification.style.top = "-100%"; });

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

			}).catch(() => errorNotification(crewmanNotification, "crewman-notification", "Sorry, an error ocurred!"));
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

			addCrewmanModal.style.visibility = "hidden";

			successNotification(crewmanNotification, "crewman-notification", "Crewman added!");

		} else errorNotification(crewmanNotification, "crewman-notification", "Sorry, crewman could not be added!");

	}).catch(() => errorNotification(crewmanNotification, "crewman-notification", "Sorry, an error ocurred!"));
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

			updateCrewmanModal.style.visibility = "hidden";

			successNotification(crewmanNotification, "crewman-notification", "Crewman updated!");

		} else errorNotification(crewmanNotification, "crewman-notification", "Sorry, crewman could not be updated!");

	}).catch(() => errorNotification(crewmanNotification, "crewman-notification", "Sorry, an error ocurred!"));
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

				successNotification(crewmanNotification, "crewman-notification", "Crewman deleted!");

			} else errorNotification(crewmanNotification, "crewman-notification", "Sorry, crewman could not be deleted!");

		}).catch(() => errorNotification(crewmanNotification, "crewman-notification", "Sorry, an error ocurred!"));
}

function editUpdateCrewmanModal(crewman) {
	updateCrewmanId = crewman.id;
	document.getElementById("update-crewman-form-name").value = crewman.name;
	document.getElementById("update-crewman-form-patent").value = crewman.patent;
	updateCrewmanModal.style.visibility = "visible";
}