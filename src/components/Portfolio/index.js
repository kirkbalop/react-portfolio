import React from 'react';
import Project from '../Projects';

function Portfolio() {
    const projects = [
        {
            name: 'Budget Tracker',
            description: 'A Progressive Web Application used to manage budgets using a NoSQL database and offline persistence for consistently great user experience.',
            // image
            technologies: [
                'JavaScript',
                'MongoDB',
                'Service Workers & IndexedDB',
                'Node.js',
                'Express'
            ],
            github: 'https://github.com/kirkbalop/budget-tracker',
            deployed: 'https://calm-mesa-12263.herokuapp.com'
        },
        {
            name: 'Wikipleiades',
            description:
                'An online, crowdsourced database of celestial bodies and objects for those interested in exploring beyond the scope of our world.',
            // image
            technologies: [
                'HTML/CSS',
                'JavaScript',
                'Node.js',
                'Express & MySQL2',
                'Heroku',
                'HandleBars'
            ],
            github: 'https://github.com/akramsabbah9/wikipleiades',
            deployed: 'https://enigmatic-savannah-82928.herokuapp.com'
        },
        {
            name: 'Work Day Scheduler',
            description: 'A daily planner set to hourly intervals with color-coding denoting past, present, and future tasks for optimal organization.',
            // image
            technologies: [
                'HTML/CSS',
                'JavaScript',
                'JQuery',
                'MomentJS'
            ],
            github: 'https://github.com/kirkbalop/daily-planner',
            deployed: 'https://kirkbalop.github.io/daily-planner'
        },
        {
            name: 'Password Generator',
            description: 'This application generates a password between 8 and 128 characters based on user-selected criteria.',
            // image
            technologies: [
                'HTML/CSS',
                'JavaScript'
            ],
            github: 'https://github.com/kirkbalop/password-gen',
            deployed: 'https://kirkbalop.github.io/password-ge/'
        }
    ]
    return (
		<section>
			 <div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project project={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project project={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project project={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project project={projects[3]}></Project>
					</li>
				</ul>
				{/* <ul className="flex-row mobile-row">
					<li className="padding">
						<Project project={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project project={projects[5]}></Project>
					</li>
				</ul> */}
			</div> 
		</section>
	);
}

export default Portfolio;