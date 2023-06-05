import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ICreateLaunchDto, ILaunchDto } from "../../../dto/LaunchDto";
import {
	StyledButton,
	StyledForm,
	StyledInput,
	StyledLabel,
	StyledSelect,
} from "../styles/styles";

type LaunchFormProps = {
	launch?: ILaunchDto;
	onSubmit: (launch: ICreateLaunchDto) => void;
};

export const LaunchForm = ({ onSubmit, launch }: LaunchFormProps) => {
	const { t } = useTranslation();

	const [launchCode, setLaunchCode] = useState<string>(
		launch?.launchCode ?? ""
	);

	const [date, setDate] = useState<string>(launch?.date ?? "");
	const [success, setSuccess] = useState<boolean>(launch?.success ?? true);
	const [rocketId, setRocketId] = useState<number>(launch?.rocket?.id ?? 0);
	const [crewId, setCrewId] = useState<number>(launch?.crew?.id ?? 0);

	const handleOnChangeLaunchCode = (event: ChangeEvent<HTMLInputElement>) => {
		setLaunchCode(event.target.value);
	};

	const handleOnChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
		setDate(event.target.value);
	};

	const handleOnChangeSuccess = (event: ChangeEvent<HTMLSelectElement>) => {
		setSuccess(event.target.value == "true");
	};

	const handleOnChangeRocketId = (event: ChangeEvent<HTMLInputElement>) => {
		setRocketId(parseInt(event.target.value));
	};

	const handleOnChangeCrewId = (event: ChangeEvent<HTMLInputElement>) => {
		setCrewId(parseInt(event.target.value));
	};

	const handleOnSubmit = (event: FormEvent) => {
		event.preventDefault();
		onSubmit({
			launchCode,
			date,
			success,
			rocketId,
			crewId: crewId != 0 ? crewId : undefined,
		});
	};

	useEffect(() => {
		if (launch) {
			setLaunchCode(launch.launchCode);
			setDate(launch.date);
			setSuccess(launch.success);
			setRocketId(launch.rocket.id);
			setCrewId(launch.crew?.id ?? 0);
		}
	}, [launch]);

	return (
		<StyledForm className="launch-form" onSubmit={handleOnSubmit}>
			<StyledLabel>{t("components.forms.launch.launch_code")}:</StyledLabel>
			<StyledInput
				className="input-launch_code"
				type="text"
				placeholder="Ex: Launch IV"
				value={launchCode}
				onChange={handleOnChangeLaunchCode}
				required
			/>
			<StyledLabel>{t("components.forms.launch.date")}:</StyledLabel>
			<StyledInput
				className="input-date"
				type="date"
				value={date}
				onChange={handleOnChangeDate}
				required
			/>
			<StyledLabel>{t("components.forms.launch.success")}:</StyledLabel>
			<StyledSelect
				className="input-success"
				required
				value={success ? "true" : "false"}
				onChange={handleOnChangeSuccess}
			>
				<option value="true">
					{t("components.forms.launch.launch_succeed")}
				</option>
				<option value="false">
					{t("components.forms.launch.launch_failed")}
				</option>
			</StyledSelect>
			<StyledLabel>{t("components.forms.launch.rocket")}:</StyledLabel>
			<StyledInput
				className="input-rocket_id"
				type="number"
				placeholder="Ex: 1"
				value={rocketId}
				onChange={handleOnChangeRocketId}
				required
			/>
			<StyledLabel>{t("components.forms.launch.crew")}:</StyledLabel>
			<StyledInput
				className="input-crew_id"
				type="number"
				placeholder="Ex: 2"
				value={crewId}
				onChange={handleOnChangeCrewId}
			/>
			<StyledButton className="button-launch-form" type="submit">
				<h4>Ok</h4>
			</StyledButton>
		</StyledForm>
	);
};
