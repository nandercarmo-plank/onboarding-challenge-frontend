document.addEventListener("DOMContentLoaded", () => {
	var crewmanList = document.getElementById("crewmanList");
	renderCrewmanList(crewmanList);
});

function renderCrewmanList(crewmanListDiv, path = "../../assets/", shouldRenderButtons = true) {
	if (crewmanListDiv) {

		crewmanListDiv.innerHTML = "";

		fetch("http://localhost:80/crewman")
			.then(response => response.json())
			.then(data => data.forEach(crewman => renderCrewman(
				crewmanListDiv,
				crewman,
				["list-item", "crewman"],
				path,
				shouldRenderButtons
			))).catch(error => handleRequestError(error, crewmanListDiv, "crewman"));
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
		image1.onclick = () => console.log(`Edit crewman ${crewman.id}`);

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