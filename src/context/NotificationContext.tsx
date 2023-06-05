import { ReactNode, SetStateAction, createContext, useState } from "react";
import { SUCCESS_NOTIFICATION } from "../hooks/useNotification";

export type INotificationContext = {
	show: boolean;
	message: string;
	type: string;
	id: NodeJS.Timeout | undefined;
	setShow: React.Dispatch<SetStateAction<boolean>>;
	setMessage: React.Dispatch<SetStateAction<string>>;
	setType: React.Dispatch<SetStateAction<string>>;
	setId: React.Dispatch<SetStateAction<NodeJS.Timeout | undefined>>;
};

type INotificationProviderProps = {
	children: ReactNode;
};

export const NotificationContext = createContext({} as INotificationContext);

export const NotificationProvider = ({
	children,
}: INotificationProviderProps) => {
	const [show, setShow] = useState(false);
	const [type, setType] = useState(SUCCESS_NOTIFICATION);
	const [message, setMessage] = useState("");
	const [id, setId] = useState<NodeJS.Timeout>();

	return (
		<NotificationContext.Provider
			value={{
				show,
				setShow,
				type,
				setType,
				message,
				setMessage,
				id,
				setId,
			}}
		>
			{children}
		</NotificationContext.Provider>
	);
};
