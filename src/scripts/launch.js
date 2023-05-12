document.addEventListener("DOMContentLoaded", () => {
	var launchList = document.getElementById("launchList");
	renderLaunchList(launchList);
});

function renderLaunchList(launchListDiv, path = "../../assets/", shouldRenderButtons = true) {
	if (launchListDiv) {

		launchListDiv.innerHTML = "";

		fetch("http://localhost:80/launch")
			.then(response => response.json())
			.then(data => data.forEach(launch => renderLaunch(
				launchListDiv,
				launch,
				["list-item", "launch"],
				path,
				shouldRenderButtons
			))).catch(error => handleRequestError(error, launchListDiv, "launch"));
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
		image1.onclick = () => console.log(`Edit launch ${launch.id}`);

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

function handleRequestError(error, parentDiv, colorClass) {
	if (parentDiv) {
		var childDiv = document.createElement("div");
		childDiv.classList.add("list-item");
		childDiv.classList.add(colorClass);
		childDiv.innerHTML = "<strong>Error: </strong> " + error.message;
		parentDiv.appendChild(childDiv);
	}
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

			} else {
				const data = await response.json();
				alert(`Can not delete the launch of id ${launchId}:\n\n${data.message}`);
			}

		}).catch(error => alert('An error ocurred:\n' + error));
}