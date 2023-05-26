import { ReactNode } from "react";
import { ListItemContainerDiv } from "./styles/styles";

type DataListRenderProps = {
	children: ReactNode;
};

export const DataListRender = ({ children }: DataListRenderProps) => {
	return (
		<>
			<ListItemContainerDiv>{children}</ListItemContainerDiv>
		</>
	);
}
