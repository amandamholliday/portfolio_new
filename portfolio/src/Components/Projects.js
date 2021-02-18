import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';


function projects() {

    return (
        <div className="projects">
            <br />
            <img src="https://see.fontimg.com/api/renderfont4/pALD/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjM0EzODM4IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TXkgUHJvamVjdHM/wonderbar.png"/>
            <br />
            <h2>
                <Link to="/wireframes">
                    See My Wireframes
                </Link>
            </h2>
            <CardColumns>
                <Card border="dark">
                    <Card.Title><b>Laugh Map</b></Card.Title>
                    <Card.Img variant="top" src="https://res.cloudinary.com/dzgeqcksj/image/upload/c_scale,w_714/v1612301418/Screen_Shot_2021-02-02_at_4.27.07_PM_x8eps4.png" />
                    <Card.Body>
                    <Card.Text>
                        My final project I built during SEI bootcamp. This is my favorite project which I'm continously improving everyday. It's a website that integrates PredictHQ APIs and Google Maps API to display comedy shows that are happening in cities around the world. You can search by city and it will return events within a 100 mile radius with date, time, address, and location on google maps.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><a target="_blank" href="https://github.com/amandamholliday/final-project"><u><b>Github</b></u></a>  |</small>
                        <small className="text-muted">    <a target="_blank" href="https://laughmap.herokuapp.com/"><u><b>Live Site</b></u></a></small>
                    </Card.Footer>
                </Card>
                <Card border="dark">
                    <Card.Title><b>The Record Collection</b></Card.Title>
                    <Card.Img variant="top" src="https://res.cloudinary.com/dzgeqcksj/image/upload/c_scale,q_100,w_813/v1612319334/Record_Collection_dcfkvy.png" />
                    <Card.Body>
                    <Card.Text>
                    A group project where we created a catalog for viynl records that are organized by Genre, Artists, and Album names. Ideally, this would be a tool used by record stores to help organize their inventory. Made with Ruby, React, Javascript, CSS, and HTML.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><a target="_blank" href="https://github.com/benritter522/Record-Collection-Client"><u><b>Github</b></u></a>  |</small>
                        <small className="text-muted">    <a target="_blank" href=""><u><b>Live Site</b></u></a>(in progress)</small>
                    </Card.Footer>
                </Card>
                <Card className="text-center" border="dark">
                <Card.Title><b>The Traveler</b></Card.Title>
                    <Card.Img variant="top" src="https://res.cloudinary.com/dzgeqcksj/image/upload/v1607567905/Screen_Shot_2020-12-09_at_9.25.18_PM_n8ep7x.png" />
                    <Card.Body>
                    <Card.Text>
                    My very frist project - an original game built with pure Javascript, HTML, and CSS. The concept is that the player is a traveler stuck in a teleport and must identify 10 locations correctly before time runs out or else they are stuck in the teleport forever.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><a target="_blank" href="https://github.com/amandamholliday/project_1_margaret"><u><b>Github</b></u></a>  |</small>
                        <small className="text-muted">    <a target="_blank" href="https://amandamholliday.github.io/project_1_margaret/"><u><b>Live Site</b></u></a></small>
                    </Card.Footer>
                </Card>
                <Card border="dark">
                    <Card.Title><b>Motivation Machine</b></Card.Title>
                    <Card.Img variant="top" src="https://res.cloudinary.com/dzgeqcksj/image/upload/c_scale,w_620/v1612301391/Screen_Shot_2021-02-02_at_3.32.13_PM_fvxgft.png" />
                    <Card.Body>
                    <Card.Text>
                    An app I designed when I got frustrated trying to build something with lack of motivation. This was built to help stay organinized with a wall of postable sticky notes, a page full of random facts for inspiration, and a self timer to help productivity. Built using React, React Router, and Javascript, CSS & HTML.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><a target="_blank" href="https://github.com/amandamholliday/project_3"><u><b>Github</b></u></a>  |</small>
                        <small className="text-muted">    <a target="_blank" href="https://motivation-machine.herokuapp.com/"><u><b>Live Site</b></u></a></small>
                    </Card.Footer>
                </Card>
                <Card border="dark">
                    <Card.Title>This Portfolio Site</Card.Title>
                    <Card.Img variant="top" src="https://res.cloudinary.com/dzgeqcksj/image/upload/v1613630033/Screen_Shot_2021-02-18_at_1.26.34_AM_1_aau9ip.png" />
                    <Card.Body>
                    <Card.Text>
                    I built this portfolio you're currently viewing with React, Bootstrap, HTML & CSS. Background image was something I hand drew and digitalized with Adobe Capture.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><a target="_blank" href="https://github.com/amandamholliday/portfolio_new"><u><b>Github</b></u></a>  |</small>
                        <small className="text-muted">    <a target="_blank" href=""><u><b>Live Site</b></u></a></small>
                    </Card.Footer>
                </Card>
            </CardColumns>
                <div className="projectlinks">
                </div>
        </div>
    )
}

export default projects;