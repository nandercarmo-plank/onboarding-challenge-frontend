import { ReactNode, SetStateAction } from "react";
import {
	ModalContentDiv,
	ModalDiv,
	ModalHeaderDiv,
	StyledSpan,
} from "./styles/styles";

type ModalProps = {
	children: ReactNode;
	visible?: boolean;
	setVisible: React.Dispatch<SetStateAction<boolean>>;
	title: string;
	className?: string;
};

export const Modal = ({
	children,
	visible,
	setVisible,
	title,
	className,
}: ModalProps) => {
	return visible ? (
		<ModalDiv className="modal-div">
			<ModalContentDiv className={className}>
				<ModalHeaderDiv>
					<h2>{title}</h2>
					<StyledSpan onClick={() => setVisible(false)}>
						&times;
					</StyledSpan>
				</ModalHeaderDiv>
				{children}
			</ModalContentDiv>
		</ModalDiv>
	) : (
		<></>
	);
};
