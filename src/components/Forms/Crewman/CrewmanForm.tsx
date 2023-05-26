import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ICreateCrewmanDto, ICrewmanDto } from "../../../dto/CrewmanDto";
import { StyledButton, StyledForm, StyledInput, StyledLabel } from "../styles/styles";

type CrewmanFormProps = {
	crewman?: ICrewmanDto;
	onSubmit: (crewman: ICreateCrewmanDto) => void;
};

export const CrewmanForm = ({ onSubmit, crewman }: CrewmanFormProps) => {

	const [name, setName] = useState<string>(crewman?.name ?? "");
	const [patent, setPatent] = useState<string>(crewman?.patent ?? "");

	const handleOnChangeName = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value);
	const handleOnChangePatent = (event: ChangeEvent<HTMLInputElement>) => setPatent(event.target.value);
	const handleOnSubmit = (event: FormEvent) => {
		event.preventDefault();
		onSubmit({
			name: name,
			patent: patent
		});
	}

	useEffect(() => {
		if (crewman) {
			setName(crewman.name);
			setPatent(crewman.patent);
		}
	}, [crewman]);

	return (
		<StyledForm onSubmit={handleOnSubmit}>
			<StyledLabel>Name:</StyledLabel>
			<StyledInput type="text" placeholder="Ex: Crewman II" value={name} onChange={handleOnChangeName} required></StyledInput>
			<StyledLabel>Patent:</StyledLabel>
			<StyledInput type="text" placeholder="Ex: Captain" value={patent} onChange={handleOnChangePatent} required></StyledInput>
			<StyledButton type="submit">
				<h4>Ok</h4>
			</StyledButton>
		</StyledForm>
	);
}
