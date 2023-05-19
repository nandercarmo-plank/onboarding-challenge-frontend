import { crewButton, crewmanButton, homeButton, launchButton, logo, rocketButton } from "../../resources/images";
import { Header } from "./styles/styles";

export default function Navbar() {
	return (
		<>
			<Header>
				<a href="">
					<img src={logo}/>
				</a>
				<h2>Onboarding<br/>Challenge</h2>
				<nav>
					<ul>
						<li>
							<a href="index.html">
								<img src={homeButton}/>
								<h3>Home</h3>
							</a>
						</li>
						<li>
							<a href="view/rocket.html">
								<img src={rocketButton}/>
								<h3>Rocket</h3>
							</a>
						</li>
						<li>
							<a href="view/crewman.html">
								<img src={crewmanButton}/>
								<h3>Crewman</h3>
							</a>
						</li>
						<li>
							<a href="view/crew.html">
								<img src={crewButton}/>
								<h3>Crew</h3>
							</a>
						</li>
						<li>
							<a href="view/launch.html">
								<img src={launchButton}/>
								<h3>Launch</h3>
							</a>
						</li>
					</ul>
				</nav>
			</Header>
		</>
	);
}