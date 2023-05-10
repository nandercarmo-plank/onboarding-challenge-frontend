document.addEventListener("DOMContentLoaded", () => {
	var crewList = document.getElementById("crewList");
	renderCrewList(crewList);
});

function renderCrewList(crewListDiv) {
	fetch("http://localhost:80/crew")
		.then(response => response.json())
		.then(data => data.forEach(crew => renderCrew(
			crewListDiv,
			crew,
			["list-item", "crew"]
		))).catch(error => handleRequestError(error, crewListDiv, "crew"));
}

function renderCrew(parentDiv, crew, crewClasses) {
	const crewDiv = document.createElement("div");
	crewClasses.forEach(crewClass => crewDiv.classList.add(crewClass));
	crewDiv.innerHTML = "" +
		"<strong>ID:</strong> " + crew.id +
		"<br><strong>Name:</strong> " + crew.name +
		"<br><strong>Crewmans:</strong><br>";
	crew.crewmans.forEach(crewman => renderCrewman(
		crewDiv,
		crewman,
		["sub-list-item"]
	));
	parentDiv.appendChild(crewDiv);
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