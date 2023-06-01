import { GitHub, Language, LinkedIn, Wysiwyg } from "@mui/icons-material";
import {
	Box,
	Container,
	Grid,
	IconButton,
	Link,
	Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { theme } from "../../styles/theme";

export const Footer = () => {
	const {
		t,
		i18n: { language, changeLanguage },
	} = useTranslation();

	return (
		<Box
			sx={{
				width: "100%",
				height: "auto",
				borderRadius: "10px",
				paddingTop: "1rem",
				paddingBottom: "1rem",
				marginTop: "10px",
			}}
		>
			<Container maxWidth="lg" sx={{ marginBottom: "1px" }}>
				<Grid container direction="column" alignItems="center">
					<Grid item xs={12}>
						<Typography
							sx={{
								fontFamily: "Courier New, Courier, monospace",
								fontWeight: "bold",
								color: theme.fontColor,
							}}
							variant="subtitle1"
						>
							{`${new Date().getFullYear()} | Onboarding Challenge | ${t(
								"components.footer.fellowship"
							)}`}
						</Typography>
					</Grid>
				</Grid>
				<Grid
					container
					direction="row"
					alignItems="center"
					justifyContent="center"
				>
					<IconButton
						sx={{ color: theme.fontColor }}
						component={Link}
						href="https://www.joinplank.com/fellowship"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Wysiwyg />
					</IconButton>
					<IconButton
						sx={{ color: theme.fontColor }}
						component={Link}
						href="https://github.com/nandercarmo-plank/onboarding-challenge-frontend"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GitHub />
					</IconButton>
					<IconButton
						sx={{ color: theme.fontColor }}
						component={Link}
						href="https://linkedin.com/in/nander-carmo"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedIn />
					</IconButton>
					<IconButton
						sx={{ color: theme.fontColor }}
						component={Link}
						href="#"
						rel="noopener noreferrer"
						onClick={() =>
							changeLanguage(language === "en" ? "pt" : "en")
						}
					>
						<Language />
					</IconButton>
				</Grid>
			</Container>
		</Box>
	);
};
