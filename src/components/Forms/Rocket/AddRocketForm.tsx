import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ICreateRocketDto, IRocket } from "../../../dto/rocketDto";
import { StyledButton, StyledForm, StyledInput, StyledLabel } from "../styles/styles";

type AddRocketFormProps = {
	rocket?: IRocket;
	onSubmit: (rocket: ICreateRocketDto) => void;
};

export default function AddRocketForm({ onSubmit, rocket }: AddRocketFormProps) {

	const [name, setName] = useState<string>(rocket?.name ?? "");

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value);
	const handleOnSubmit = (event: FormEvent) => {
		event.preventDefault();
		onSubmit({
			name: name
		});
	}

	useEffect(() => { rocket && setName(rocket.name) }, [rocket]);

	return (
		<StyledForm onSubmit={handleOnSubmit}>
			<StyledLabel>Name:</StyledLabel>
			<StyledInput type="text" placeholder="Ex: Rocket I" value={name} onChange={handleOnChange} required />
			<StyledButton type="submit">
				<h4>Ok</h4>
			</StyledButton>
		</StyledForm>
	);
}