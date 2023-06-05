import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { NotificationProvider } from "./context/NotificationContext.tsx";

import "./locale/i18n.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<NotificationProvider>
			<App />
		</NotificationProvider>
	</React.StrictMode>
);
