document.addEventListener("DOMContentLoaded", () => {

	var rocketList = document.getElementById("rocketList");
	var crewmanList = document.getElementById("crewmanList");
	var crewList = document.getElementById("crewList");
	var launchList = document.getElementById("launchList");

	renderRocketList(rocketList);
	renderCrewmanList(crewmanList);
	renderCrewList(crewList);
	renderLaunchList(launchList);
});