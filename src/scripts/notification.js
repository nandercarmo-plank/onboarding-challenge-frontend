let notificationId;

function successNotification(notificationDiv, textDivId, message) {

	clearTimeout(notificationId);

	const notificationPosition = notificationDiv.style.top;
	notificationDiv.style.top = "-100%";

	setTimeout(() => {

		notificationDiv.classList.remove("error-notification");
		notificationDiv.classList.add("success-notification");

		const textDiv = document.getElementById(textDivId);
		textDiv.textContent = message;

		notificationDiv.style.top = "0px";

		notificationId = setTimeout(() => { notificationDiv.style.top = "-100%"; }, 3000);

	}, notificationPosition != "-100%" ? 500 : 0);
}

function errorNotification(notificationDiv, textDivId, message) {

	clearTimeout(notificationId);

	const notificationPosition = notificationDiv.style.top;
	notificationDiv.style.top = "-100%";

	setTimeout(() => {

		notificationDiv.style.top = "-100%";

		notificationDiv.classList.remove("success-notification");
		notificationDiv.classList.add("error-notification");

		const textDiv = document.getElementById(textDivId);
		textDiv.textContent = message;

		notificationDiv.style.top = "0px";

		notificationId = setTimeout(() => { notificationDiv.style.top = "-100%"; }, 3000);

	}, notificationPosition != "-100%" ? 500 : 0);
}