import { useTranslation } from "react-i18next";
import { logo } from "../../resources/images";
import { NotFoundDiv } from "./styles/styles";

export const NotFoundPage = () => {
	const { t } = useTranslation();

	return (
		<NotFoundDiv>
			<h1>{t("pages.not_found.text_h1")}</h1>
			<img src={logo} />
			<h2>{t("pages.not_found.text_h2")}</h2>
		</NotFoundDiv>
	);
};
