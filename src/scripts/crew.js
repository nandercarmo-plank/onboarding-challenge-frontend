document.addEventListener("DOMContentLoaded", () => {
	var crewList = document.getElementById("crewList");
	renderCrewList(crewList);
});

function renderCrewList(crewListDiv, path = "../../assets/", shouldRenderButtons = true) {
	if (crewListDiv) {

		crewListDiv.innerHTML = "";

		fetch("http://localhost:80/crew")
			.then(response => response.json())
			.then(data => data.forEach(crew => renderCrew(
				crewListDiv,
				crew,
				["list-item", "crew"],
				path,
				shouldRenderButtons
			))).catch(error => handleRequestError(error, crewListDiv, "crew"));
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
		image1.onclick = () => console.log(`Edit crew ${crew.id}`);

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

function handleRequestError(error, parentDiv, colorClass) {
	if (parentDiv) {
		var childDiv = document.createElement("div");
		childDiv.classList.add("list-item");
		childDiv.classList.add(colorClass);
		childDiv.innerHTML = "<strong>Error: </strong> " + error.message;
		parentDiv.appendChild(childDiv);
	}
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