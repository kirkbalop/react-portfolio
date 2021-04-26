import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/KirkBalop"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={process.env.PUBLIC_URL + `/assets/logos/github-logo.png`}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="www.linkedin.com/in/kirk-balopoulos-255407104
                    "
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={process.env.PUBLIC_URL + `/assets/logos/linkedin-logo.png`}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;