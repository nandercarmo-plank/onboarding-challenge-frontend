import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { type ICreateCrewDto, type ICrewDto } from "../../../dto/CrewDto";
import {
	StyledButton,
	StyledForm,
	StyledInput,
	StyledLabel,
} from "../styles/styles";

type CrewFormProps = {
	crew?: ICrewDto;
	onSubmit: (crew: ICreateCrewDto) => void;
};

export const CrewForm = ({ onSubmit, crew }: CrewFormProps) => {
	const [name, setName] = useState<string>(crew?.name ?? "");
	const [crewmans, setCrewmans] = useState<string>(
		crew?.crewmans?.map((crewman) => crewman.id).join(", ") ?? ""
	);

	const handleOnChangeName = (event: ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const handleOnChangeCrewmans = (event: ChangeEvent<HTMLInputElement>) => {
		setCrewmans(event.target.value);
	};

	const handleOnSubmit = (event: FormEvent) => {
		event.preventDefault();
		onSubmit({
			name,
			crewmans: JSON.parse(`[${crewmans}]`),
		});
	};

	useEffect(() => {
		if (crew != null) {
			setName(crew.name);
			setCrewmans(
				crew?.crewmans?.map((crewman) => crewman.id).join(", ") ?? ""
			);
		}
	}, [crew]);

	return (
		<StyledForm onSubmit={handleOnSubmit}>
			<StyledLabel>Name:</StyledLabel>
			<StyledInput
				type="text"
				placeholder="Ex: Crew III"
				value={name}
				onChange={handleOnChangeName}
				required
			/>
			<StyledLabel>Crewmans:</StyledLabel>
			<StyledInput
				type="text"
				placeholder="Ex: 1, 2, 3"
				value={crewmans}
				onChange={handleOnChangeCrewmans}
			/>
			<StyledButton type="submit">
				<h4>Ok</h4>
			</StyledButton>
		</StyledForm>
	);
};
