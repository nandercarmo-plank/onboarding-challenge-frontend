document.addEventListener("DOMContentLoaded", () => {

	var rocketList = document.getElementById("rocketListHome");
	var crewmanList = document.getElementById("crewmanListHome");
	var crewList = document.getElementById("crewListHome");
	var launchList = document.getElementById("launchListHome");

	renderRocketList(rocketList, "../assets/", false);
	renderCrewmanList(crewmanList, "../assets/", false);
	renderCrewList(crewList, "../assets/", false);
	renderLaunchList(launchList, "../assets/", false);
});