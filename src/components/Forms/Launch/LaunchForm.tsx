import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ICreateLaunchDto, ILaunchDto } from "../../../dto/LaunchDto";
import { StyledButton, StyledForm, StyledInput, StyledLabel, StyledSelect } from "../styles/styles";

type LaunchFormProps = {
	launch?: ILaunchDto;
	onSubmit: (launch: ICreateLaunchDto) => void;
};

function LaunchForm({ onSubmit, launch }: LaunchFormProps) {

	const [launchCode, setLaunchCode] = useState<string>(launch?.launchCode ?? "");
	const [date, setDate] = useState<string>(launch?.date ?? "");
	const [success, setSuccess] = useState<boolean>(launch?.success ?? true);
	const [rocketId, setRocketId] = useState<number>(launch?.rocket?.id ?? 0);
	const [crewId, setCrewId] = useState<number>(launch?.crew?.id ?? 0);

	const handleOnChangeLaunchCode = (event: ChangeEvent<HTMLInputElement>) => setLaunchCode(event.target.value);
	const handleOnChangeDate = (event: ChangeEvent<HTMLInputElement>) => setDate(event.target.value);
	const handleOnChangeSuccess = (event: ChangeEvent<HTMLSelectElement>) => setSuccess(event.target.value == "true");
	const handleOnChangeRocketId = (event: ChangeEvent<HTMLInputElement>) => setRocketId(parseInt(event.target.value));
	const handleOnChangeCrewId = (event: ChangeEvent<HTMLInputElement>) => setCrewId(parseInt(event.target.value));
	const handleOnSubmit = (event: FormEvent) => {
		event.preventDefault();
		onSubmit({
			launchCode,
			date,
			success,
			rocketId,
			crewId: (crewId != 0) ? crewId : undefined
		});
	}

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
		<StyledForm onSubmit={handleOnSubmit}>
			<StyledLabel>Launch Code:</StyledLabel>
			<StyledInput type="text" placeholder="Ex: Launch IV" value={launchCode} onChange={handleOnChangeLaunchCode} required />
			<StyledLabel>Date:</StyledLabel>
			<StyledInput type="date" value={date} onChange={handleOnChangeDate} required />
			<StyledLabel>Success status:</StyledLabel>
			<StyledSelect required value={success ? "true" : "false"} onChange={handleOnChangeSuccess}>
				<option value="true">Succeed</option>
				<option value="false">Failed</option>
			</StyledSelect>
			<StyledLabel>Rocket Id:</StyledLabel>
			<StyledInput type="number" placeholder="Ex: 1" value={rocketId} onChange={handleOnChangeRocketId} required />
			<StyledLabel>Crew Id (optional):</StyledLabel>
			<StyledInput type="number" placeholder="Ex: 2" value={crewId} onChange={handleOnChangeCrewId} />
			<StyledButton type="submit">
				<h4>Ok</h4>
			</StyledButton>
		</StyledForm>
	);
}

export {
	LaunchForm
};
