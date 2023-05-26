import { ReactNode, SetStateAction } from "react";
import { ModalContentDiv, ModalDiv, ModalHeaderDiv, StyledSpan } from "./styles/styles";

type ModalProps = {
	children: ReactNode;
	visible?: boolean;
	setVisible: React.Dispatch<SetStateAction<boolean>>;
	title: string;
};

export const Modal = ({ children, visible, setVisible, title }: ModalProps) => {
	return (
		<ModalDiv style={{ visibility: visible ? "visible" : "hidden" }}>
			<ModalContentDiv>
				<ModalHeaderDiv>
					<h2>{title}</h2>
					<StyledSpan onClick={() => setVisible(false)}>&times;</StyledSpan>
				</ModalHeaderDiv>
				{children}
			</ModalContentDiv>
		</ModalDiv>
	);
}
