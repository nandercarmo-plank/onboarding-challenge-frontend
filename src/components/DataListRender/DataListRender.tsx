import { ReactNode } from 'react';
import { ListItemContainerDiv } from "./styles/styles";

type DataListRenderProps = {
	children: ReactNode;
};

export default function DataListRender({ children }: DataListRenderProps) {
	return (
		<>
			<ListItemContainerDiv>{children}</ListItemContainerDiv>
		</>
	);
}