import { useNotification } from "../../hooks/useNotification";
import { NotificationDiv } from "./styles/styles";

export function Notification() {

	const [notification, notificationActions] = useNotification();
	const style = {
		visible: notification.show ? "visible" : "hidden",
		top: notification.show ? "0px" : "-100%"
	}

	return (
		<NotificationDiv className={notification.type} style={style} onClick={notificationActions.hideNotification} >
			{notification.message}
		</NotificationDiv>
	);
}
