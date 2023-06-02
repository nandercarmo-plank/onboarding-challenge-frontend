import { useState, type MouseEvent } from "react";

import { useTranslation } from "react-i18next";
import { type ICrewDto, type IUpdateCrewDto } from "../../../dto/CrewDto";
import { type IUseCrew } from "../../../hooks/useCrew";
import { LoadingPage } from "../../../pages/LoadingPage/LoadingPage";
import { deleteButton } from "../../../resources/images";
import { CrewForm } from "../../Forms/Crew/CrewForm";
import { Modal } from "../../Modal/Modal";
import { ListDiv, ListItem, ListItemContainerDiv } from "../styles/styles";
import { CrewData } from "./CrewData";

type ICrewProps = {
	isSubItem?: boolean;
	renderButtons?: boolean;
	crews: ICrewDto[];
	setCrews?: IUseCrew;
};

export const Crew = ({
	isSubItem = false,
	renderButtons = true,
	crews,
	setCrews,
}: ICrewProps) => {
	const { t } = useTranslation();

	const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
	const [isDataViewModalVisible, setDataViewModalVisible] = useState(false);
	const [clickedCrew, setClickedCrew] = useState<ICrewDto>(crews[0]);

	const onSubmitUpdateForm = (updateCrewDto: IUpdateCrewDto) => {
		if (setCrews != null) {
			setUpdateModalVisibility(false);
			setCrews.editCrew(clickedCrew?.id ?? 0, updateCrewDto);
		}
	};

	const onDeleteCrew = (crewId: number) => {
		if (setCrews != null) {
			setCrews.deleteCrew(crewId);
		}
	};

	const openUpdateCrewModal = (
		event: MouseEvent<HTMLImageElement>,
		crew: ICrewDto
	) => {
		event.stopPropagation();
		setClickedCrew(crew);
		setUpdateModalVisibility(true);
	};

	const openDataViewModal = (crew: ICrewDto) => {
		if (!isSubItem) {
			setClickedCrew(crew);
			setDataViewModalVisible(true);
		}
	};

	return setCrews === undefined || setCrews.isDataLoaded() ? (
		<ListItemContainerDiv>
			<ListDiv>
				{crews.map((crew) => {
					return (
						<ListItemContainerDiv key={crew.id}>
							<ListItem
								className={
									isSubItem ? "sub-list-item" : "crew list-item"
								}
								onClick={() => {
									openDataViewModal(crew);
								}}
							>
								<CrewData
									crew={crew}
									renderButtons={!isSubItem}
									openUpdateCrewModal={openUpdateCrewModal}
								/>
							</ListItem>
							{renderButtons && (
								<img
									src={deleteButton}
									onClick={() => {
										onDeleteCrew(crew.id);
									}}
								/>
							)}
						</ListItemContainerDiv>
					);
				})}
				<Modal
					title={t("components.data_renders.crew.update_modal_title")}
					visible={isUpdateModalVisible}
					setVisible={setUpdateModalVisibility}
				>
					<CrewForm onSubmit={onSubmitUpdateForm} crew={clickedCrew} />
				</Modal>
			</ListDiv>
			<Modal
				title={t("components.data_renders.crew.data_view_modal_title")}
				visible={isDataViewModalVisible}
				setVisible={setDataViewModalVisible}
				className="crew-modal"
			>
				<CrewData
					crew={clickedCrew}
					renderButtons={false}
					renderNestedData={true}
				/>
			</Modal>
		</ListItemContainerDiv>
	) : (
		<LoadingPage />
	);
};
