import React from 'react';
import Project from '../Projects';

function Portfolio() {
    const projects = [
        {
            name: 'Budget Tracker',
            description: 'A Progressive Web Application used to manage budgets using a NoSQL database and offline persistence for consistently great user experience.',
            image: 'BudgetTracker.png',
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
            image: 'WikiPleiades.png',
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
            image: 'WorkdayScheduler.png',
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
            image: 'PasswordGen.png',
            technologies: [
                'HTML/CSS',
                'JavaScript'
            ],
            github: 'https://github.com/kirkbalop/password-gen',
            deployed: 'https://kirkbalop.github.io/password-gen'
        },
        {
            name: 'Food Festival',
            description: 'A Progressive Web Application for potential attendees of a regional food fest including ticketing and schedule.',
            image: 'FoodFest.png',
            technologies: [
                'HTML/CSS',
                'JavaSctipt',
                'WebPack'
            ],
            github: 'https://github.com/kirkbalop/food-festival',
            deployed:'https://kirkbalop.github.io/food-festival/'
        },
        {
            name: 'Run Buddy',
            description: 'A webpage advertising a company devoted to helping people exercise and get in shape.',
            image: 'RunBuddy.png',
            technologies: [
                'HTML/CSS',
            ],
            github: 'https://github.com/kirkbalop/run-buddy',
            deployed: 'https://kirkbalop.github.io/run-buddy'
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
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project project={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project project={projects[5]}></Project>
					</li>
				</ul>
			</div> 
		</section>
	);
}

export default Portfolio;