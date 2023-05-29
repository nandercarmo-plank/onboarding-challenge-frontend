import { logo } from "../../resources/images";
import { LoadDiv, LoadImage } from "./styles/styles";

export const LoadingPage = () => {
	return (
		<LoadDiv>
			<LoadImage src={logo} />
			<h2>Loading</h2>
		</LoadDiv>
	);
}