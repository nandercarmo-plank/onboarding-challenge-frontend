const launchList = document.getElementById("launchList");
const addLaunchButton = document.getElementById("add-launch-button");
const closeAddLaunchModalButton = document.getElementById("add-launch-modal-close-button");
const closeUpdateLaunchModalButton = document.getElementById("update-launch-modal-close-button");
const addLaunchModal = document.getElementById("add-launch-modal");
const updateLaunchModal = document.getElementById("update-launch-modal");
const addLaunchModalForm = document.getElementById("add-launch-modal-form");
const updateLaunchModalForm = document.getElementById("update-launch-modal-form");
const launchNotification = document.getElementById("launch-notification");

let updateLaunchId;

document.addEventListener("DOMContentLoaded", () => {

	if (addLaunchButton) addLaunchButton.addEventListener("click", () => addLaunchModal.style.visibility = "visible");
	if (closeAddLaunchModalButton) closeAddLaunchModalButton.addEventListener("click", () => addLaunchModal.style.visibility = "hidden");
	if (addLaunchModalForm) addLaunchModalForm.addEventListener("submit", (event) => addLaunch(event));

	if (closeUpdateLaunchModalButton) closeUpdateLaunchModalButton.addEventListener("click", () => updateLaunchModal.style.visibility = "hidden");
	if (updateLaunchModalForm) updateLaunchModalForm.addEventListener("submit", (event) => updateLaunch(event));

	if (launchNotification) launchNotification.addEventListener("click", () => { launchNotification.style.top = "-100%"; });

	renderLaunchList(launchList);
});

function renderLaunchList(launchListDiv, path = "../../assets/", shouldRenderButtons = true) {
	if (launchListDiv) {

		launchListDiv.innerHTML = "";

		fetch("http://localhost:80/launch")
			.then(response => response.json())
			.then(data => {

				data.sort((a, b) => a.id - b.id);

				data.forEach(launch => renderLaunch(
					launchListDiv,
					launch,
					["list-item", "launch"],
					path,
					shouldRenderButtons
				));

			}).catch(() => errorNotification(launchNotification, "launch-notification", "Sorry, an error ocurred!"));
	}
}

function renderLaunch(parentDiv, launch, launchClasses, path, shouldRenderButtons) {

	const containterDiv = document.createElement("div");
	containterDiv.classList.add("list-item-container");

	const launchDiv = document.createElement("div");
	launchClasses.forEach(launchClass => launchDiv.classList.add(launchClass));

	const contentDiv = document.createElement("div");
	contentDiv.classList.add("list-item-content");
	contentDiv.innerHTML = "" +
		"<strong>ID:</strong> " + launch.id +
		"<br><strong>Name:</strong> " + launch.launchCode +
		"<br><strong>Date:</strong> " + launch.date +
		"<br><strong>Success:</strong> " + launch.success +
		"<br><strong>Rocket:</strong>";
	renderRocket(contentDiv, launch.rocket, ["sub-list-item"], false);
	if (launch.crew) {
		contentDiv.innerHTML += "<br><strong>Crew:</strong>";
		renderCrew(contentDiv, launch.crew, ["sub-list-item"], false);
	}

	const imagesDiv = document.createElement("div");
	imagesDiv.classList.add("list-item-image");

	if (shouldRenderButtons) {

		const image1 = document.createElement("img");
		image1.src = path + "edit-button.svg";
		image1.classList.add("button-icon");
		image1.onclick = () => editUpdateLaunchModal(launch);

		imagesDiv.appendChild(image1);
	}

	launchDiv.appendChild(contentDiv);
	launchDiv.appendChild(imagesDiv);

	containterDiv.appendChild(launchDiv);

	if (shouldRenderButtons) {

		const image2 = document.createElement("img");

		image2.src = path + "delete-button.svg";
		image2.classList.add("button-icon");
		image2.onclick = () => deleteLaunch(launch);

		containterDiv.appendChild(image2);
	}

	parentDiv.appendChild(containterDiv);
}

function addLaunch(event) {

	event.preventDefault();

	const createLaunch = {
		launchCode: document.getElementById("add-launch-form-launch-code").value,
		date: document.getElementById("add-launch-form-date").value,
		success: document.getElementById("add-launch-form-success").value === "true",
		rocketId: parseInt(document.getElementById("add-launch-form-rocket").value),
		crewId: parseInt(document.getElementById("add-launch-form-crew").value)
	};

	fetch(`http://localhost:80/launch`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(createLaunch)
	}).then(async response => {

		if (response.ok) {

			const launchList = document.getElementById("launchList");
			renderLaunchList(launchList);

			addLaunchModal.style.visibility = "hidden";

			successNotification(launchNotification, "launch-notification", "Launch added!");

		} else errorNotification(launchNotification, "launch-notification", "Sorry, launch could not be added!");

	}).catch(() => errorNotification(launchNotification, "launch-notification", "Sorry, an error ocurred!"));
}

function updateLaunch(event) {

	event.preventDefault();

	const createLaunch = {
		launchCode: document.getElementById("update-launch-form-launch-code").value,
		date: document.getElementById("update-launch-form-date").value,
		success: document.getElementById("update-launch-form-success").value === "true",
		rocketId: parseInt(document.getElementById("update-launch-form-rocket").value),
		crewId: parseInt(document.getElementById("update-launch-form-crew").value)
	};

	fetch(`http://localhost:80/launch/${updateLaunchId}`, {
		method: 'PUT',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(createLaunch)
	}).then(async response => {

		if (response.ok) {

			const launchList = document.getElementById("launchList");
			renderLaunchList(launchList);

			updateLaunchModal.style.visibility = "hidden";

			successNotification(launchNotification, "launch-notification", "Launch updated!");

		} else errorNotification(launchNotification, "launch-notification", "Sorry, launch could not be updated!");

	}).catch(() => errorNotification(launchNotification, "launch-notification", "Sorry, an error ocurred!"));
}

function deleteLaunch(launch) {

	const launchId = launch.id;

	console.log(`Delete launch ${launchId}`);

	fetch(`http://localhost:80/launch/${launchId}`, { method: 'DELETE' })
		.then(async response => {

			if (response.ok) {

				var launchListHome = document.getElementById("launchListHome");
				var launchList = document.getElementById("launchList");

				renderLaunchList(launchListHome, false);
				renderLaunchList(launchList);

				successNotification(launchNotification, "launch-notification", "Launch deleted!");

			} else errorNotification(launchNotification, "launch-notification", "Sorry, launch could not be deleted!");

		}).catch(() => errorNotification(launchNotification, "launch-notification", "Sorry, an error ocurred!"));
}

function editUpdateLaunchModal(launch) {
	updateLaunchId = launch.id;
	document.getElementById("update-launch-form-launch-code").value = launch.launchCode;
	document.getElementById("update-launch-form-date").value = launch.date
	document.getElementById("update-launch-form-success").value = launch.success ? "true" : "false";
	document.getElementById("update-launch-form-rocket").value = launch.rocket.id;
	document.getElementById("update-launch-form-crew").value = launch.crew.id;
	updateLaunchModal.style.visibility = "visible";
}