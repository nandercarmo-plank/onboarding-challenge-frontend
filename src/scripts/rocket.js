const rocketList = document.getElementById("rocketList");
const addRocketButton = document.getElementById("add-rocket-button");
const closeAddRocketModalButton = document.getElementById("add-rocket-modal-close-button");
const closeUpdateRocketModalButton = document.getElementById("update-rocket-modal-close-button");
const addRocketModal = document.getElementById("add-rocket-modal");
const updateRocketModal = document.getElementById("update-rocket-modal");
const addRocketModalForm = document.getElementById("add-rocket-modal-form");
const updateRocketModalForm = document.getElementById("update-rocket-modal-form");

let updateRocketId;

document.addEventListener("DOMContentLoaded", () => {

	if (addRocketButton) addRocketButton.addEventListener("click", () => addRocketModal.style.display = "block");
	if (closeAddRocketModalButton) closeAddRocketModalButton.addEventListener("click", () => addRocketModal.style.display = "none");
	if (addRocketModalForm) addRocketModalForm.addEventListener("submit", (event) => addRocket(event));

	if (closeUpdateRocketModalButton) closeUpdateRocketModalButton.addEventListener("click", () => updateRocketModal.style.display = "none");
	if (updateRocketModalForm) updateRocketModalForm.addEventListener("submit", (event) => updateRocket(event));

	renderRocketList(rocketList);
});

function renderRocketList(rocketListDiv, path = "../../assets/", shouldRenderButtons = true) {
	if (rocketListDiv) {

		rocketListDiv.innerHTML = "";

		fetch("http://localhost:80/rocket")
			.then(response => response.json())
			.then(data => {

				data.sort((a, b) => a.id - b.id);

				data.forEach(rocket => renderRocket(
					rocketListDiv,
					rocket,
					["list-item", "rocket"],
					path,
					shouldRenderButtons
				));

			}).catch(error => handleRequestError(error, rocketListDiv, "rocket"));
	}
}

function renderRocket(parentDiv, rocket, rocketClasses, path, shouldRenderButtons) {

	const containterDiv = document.createElement("div");
	containterDiv.classList.add("list-item-container");

	const rocketDiv = document.createElement("div");
	rocketClasses.forEach(rocketClass => rocketDiv.classList.add(rocketClass));

	const contentDiv = document.createElement("div");
	contentDiv.classList.add("list-item-content");
	contentDiv.innerHTML = "" +
		"<strong>ID:</strong> " + rocket.id +
		"<br><strong>Name:</strong> " + rocket.name;

	const imagesDiv = document.createElement("div");
	imagesDiv.classList.add("list-item-image");


	if (shouldRenderButtons) {

		const image1 = document.createElement("img");

		image1.src = path + "edit-button.svg";
		image1.classList.add("button-icon");
		image1.onclick = () => editUpdateRocketModal(rocket);

		imagesDiv.appendChild(image1);
	}

	rocketDiv.appendChild(contentDiv);
	rocketDiv.appendChild(imagesDiv);

	containterDiv.appendChild(rocketDiv);

	if (shouldRenderButtons) {

		const image2 = document.createElement("img");

		image2.src = path + "delete-button.svg";
		image2.classList.add("button-icon");
		image2.onclick = () => deleteRocket(rocket);

		containterDiv.appendChild(image2);
	}

	parentDiv.appendChild(containterDiv);
}

function addRocket(event) {

	event.preventDefault();

	const createRocket = {
		name: `${document.getElementById("add-rocket-form-name").value}`
	};

	fetch(`http://localhost:80/rocket`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(createRocket)
	}).then(async response => {

		if (response.ok) {

			const rocketList = document.getElementById("rocketList");
			renderRocketList(rocketList);

			addRocketModal.style.display = "none";

		} else {
			const data = await response.json();
			alert(`Could not create rocket\n\n${data.message}`);
		}

	}).catch(error => alert('Sorry, an error ocurred:\n' + error));

}

function updateRocket(event) {

	event.preventDefault();

	const createRocket = {
		name: `${document.getElementById("update-rocket-form-name").value}`
	};

	fetch(`http://localhost:80/rocket/${updateRocketId}`, {
		method: 'PUT',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(createRocket)
	}).then(async response => {

		if (response.ok) {

			const rocketList = document.getElementById("rocketList");
			renderRocketList(rocketList);

			updateRocketModal.style.display = "none";

		} else {
			const data = await response.json();
			alert(`Could not update rocket:\n\n${data.message}`);
		}

	}).catch(error => alert('Sorry, an error ocurred:\n' + error));

}

function deleteRocket(rocket) {

	const rocketId = rocket.id;

	console.log(`Delete rocket ${rocketId}`);

	fetch(`http://localhost:80/rocket/${rocketId}`, { method: 'DELETE' })
		.then(async response => {

			if (response.ok) {

				const rocketListHome = document.getElementById("rocketListHome");
				const rocketList = document.getElementById("rocketList");

				renderRocketList(rocketListHome, false);
				renderRocketList(rocketList);

			} else {
				const data = await response.json();
				alert(`Could not delete the rocket of id ${rocketId}:\n\n${data.message}`);
			}

		}).catch(error => alert('Sorry, an error ocurred:\n' + error));
}

function editUpdateRocketModal(rocket) {
	updateRocketId = rocket.id;
	document.getElementById("update-rocket-form-name").value = rocket.name
	updateRocketModal.style.display = "block";
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