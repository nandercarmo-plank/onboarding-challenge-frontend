import { logo } from "../resources/images";
import { NotFoundDiv } from "./styles/styles";

export const NotFoundPage = () => {
	return (
		<NotFoundDiv>
			<h1>Ooops!!!</h1>
			<img src={logo} />
			<h2>There's nothing to see here!</h2>
		</NotFoundDiv>
	);
}
