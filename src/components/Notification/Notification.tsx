import { NotificationDiv } from "./styles/styles";

export type NotificationProps = {
	visible: boolean;
	type: string;
	message: string;
	hideFunction: () => void;
};

export const Notification = ({
	visible,
	type,
	message,
	hideFunction,
}: NotificationProps) => {
	const style = {
		visible: visible ? "visible" : "hidden",
		top: visible ? "0px" : "-100%",
	};

	return (
		<NotificationDiv className={type} style={style} onClick={hideFunction}>
			{message}
		</NotificationDiv>
	);
};
