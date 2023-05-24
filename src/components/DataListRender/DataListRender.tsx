import { ReactNode } from "react";
import { ListItemContainerDiv } from "./styles/styles";

type DataListRenderProps = {
	children: ReactNode;
};

function DataListRender({ children }: DataListRenderProps) {

	const oi = (number: number) => console.log(number)
	oi(1)

	return (
		<>
			<ListItemContainerDiv>{children}</ListItemContainerDiv>
		</>
	);
}

export {
	DataListRender
};
