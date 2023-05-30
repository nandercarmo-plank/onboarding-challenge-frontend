import { useContext } from "react";
import {
	INotificationContext,
	NotificationContext,
} from "../context/NotificationContext";

export type INotificationActions = {
	showNotification: (message: string, success: boolean) => void;
	hideNotification: () => void;
};

export const SUCCESS_NOTIFICATION = "success";
export const ERROR_NOTIFICATION = "error";

export const useNotification = (): [
	INotificationContext,
	INotificationActions
] => {
	const notification = useContext(NotificationContext);

	const showNotification = (message: string, success: boolean) => {
		notification.id && clearTimeout(notification.id);

		hideNotification();

		setTimeout(() => {
			notification.setType(
				success ? SUCCESS_NOTIFICATION : ERROR_NOTIFICATION
			);
			notification.setMessage(message);
			notification.setShow(true);
			notification.setId(setTimeout(hideNotification, 2500));
		}, 250);
	};

	const hideNotification = () => {
		notification.setShow(false);
	};

	return [notification, { showNotification, hideNotification }];
};
