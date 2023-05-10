document.addEventListener("DOMContentLoaded", () => {
	var launchList = document.getElementById("launchList");
	renderLaunchList(launchList);
});

function renderLaunchList(launchListDiv) {
	fetch("http://localhost:80/launch")
		.then(response => response.json())
		.then(data => data.forEach(launch => renderLaunch(
			launchListDiv,
			launch,
			["list-item", "launch"]
		))).catch(error => handleRequestError(error, launchListDiv, "launch"));
}

function renderLaunch(parentDiv, launch, launchClasses) {
	const launchDiv = document.createElement("div");
	launchClasses.forEach(launchClass => launchDiv.classList.add(launchClass));
	launchDiv.innerHTML = "" +
		"<strong>ID:</strong> " + launch.id +
		"<br><strong>Name:</strong> " + launch.launchCode +
		"<br><strong>Date:</strong> " + launch.date +
		"<br><strong>Success:</strong> " + launch.success +
		"<br><strong>Rocket:</strong>";
	renderRocket(launchDiv, launch.rocket, ["sub-list-item"]);
	if (launch.crew) {
		launchDiv.innerHTML += "<br><strong>Crew:</strong>";
		renderCrew(launchDiv, launch.crew, ["sub-list-item"]);
	}
	parentDiv.appendChild(launchDiv);
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