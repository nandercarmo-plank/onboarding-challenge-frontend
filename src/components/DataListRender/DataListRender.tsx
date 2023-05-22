import { ReactNode } from 'react';
import { ListItemContainerDiv } from "./styles/styles";

type DataListRenderProps = {
	children: ReactNode;
};

function DataListRender({ children }: DataListRenderProps) {
	return (
		<>
			<ListItemContainerDiv>{children}</ListItemContainerDiv>
		</>
	);
}

export {
	DataListRender
};
