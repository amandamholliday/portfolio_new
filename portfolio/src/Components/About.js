import React from 'react';
import '../App.css';


function About() {

    return (
        <div>
            <br />
            <img src="https://see.fontimg.com/api/renderfont4/pALD/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjM0EzODM4IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/QWJvdXQgTWU/wonderbar.png"/>
            <div className="aboutme">
                <h2>Hi! I'm Amanda.</h2>
                <p className="paragraph">
                    I'm a creative software engineer & full stack web developer. My passion for art and originality leads me to be constantly eager to build from my unique ideas. 
                    <br />
                       With an extensive work background in customer service roles, management, and hospitality - my ability to communicate with clients (as well as my team) makes me a valuable, reliable, morale booster in any role.
                </p>
                <h3>Languages:</h3>
                    <div className="languages">
                        <li>HTML </li>
                        <li>CSS </li>
                        <li>JavaScript </li>
                        <li>React </li>
                        <li>Ruby on Rails</li>
                        <li>Node.js </li>
                        <li>Boostrap</li>
                        <li>SQL</li>
                    </div>
            </div>
        </div>
    )
}

export default About;