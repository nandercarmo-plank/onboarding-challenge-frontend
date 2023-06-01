import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ICreateRocketDto, IRocketDto } from "../../../dto/RocketDto";
import {
	StyledButton,
	StyledForm,
	StyledInput,
	StyledLabel,
} from "../styles/styles";

type RocketFormProps = {
	rocket?: IRocketDto;
	onSubmit: (rocket: ICreateRocketDto) => void;
};

export const RocketForm = ({ onSubmit, rocket }: RocketFormProps) => {
	const { t } = useTranslation();

	const [name, setName] = useState<string>(rocket?.name ?? "");

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const handleOnSubmit = (event: FormEvent) => {
		event.preventDefault();
		onSubmit({
			name: name,
		});
	};

	useEffect(() => {
		rocket && setName(rocket.name);
	}, [rocket]);

	return (
		<StyledForm onSubmit={handleOnSubmit}>
			<StyledLabel>{t("components.forms.rocket.name")}:</StyledLabel>
			<StyledInput
				type="text"
				placeholder="Ex: Rocket I"
				value={name}
				onChange={handleOnChange}
				required
			/>
			<StyledButton type="submit">
				<h4>Ok</h4>
			</StyledButton>
		</StyledForm>
	);
};
