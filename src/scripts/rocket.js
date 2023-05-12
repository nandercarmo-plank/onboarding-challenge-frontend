const rocketList = document.getElementById("rocketList");
const addRocketButton = document.getElementById("add-rocket-button");
const closeAddRocketModalButton = document.getElementById("add-rocket-modal-close-button");
const modal = document.getElementById("add-rocket-modal");

document.addEventListener("DOMContentLoaded", () => {

	addRocketButton.addEventListener("click", () => modal.style.display = "block");
	closeAddRocketModalButton.addEventListener("click", () => modal.style.display = "none");

	renderRocketList(rocketList);
});

function renderRocketList(rocketListDiv, path = "../../assets/", shouldRenderButtons = true) {
	if (rocketListDiv) {

		rocketListDiv.innerHTML = "";

		fetch("http://localhost:80/rocket")
			.then(response => response.json())
			.then(data => data.forEach(rocket => renderRocket(
				rocketListDiv,
				rocket,
				["list-item", "rocket"],
				path,
				shouldRenderButtons
			))).catch(error => handleRequestError(error, rocketListDiv, "rocket"));
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
		image1.onclick = () => console.log(`Edit rocket ${rocket.id}`);

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

function handleRequestError(error, parentDiv, colorClass) {
	if (parentDiv) {
		const childDiv = document.createElement("div");
		childDiv.classList.add("list-item");
		childDiv.classList.add(colorClass);
		childDiv.innerHTML = "<strong>Error: </strong> " + error.message;
		parentDiv.appendChild(childDiv);
	}
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
				alert(`Can not delete the rocket of id ${rocketId}:\n\n${data.message}`);
			}

		}).catch(error => alert('An error ocurred:\n' + error));
}