import React from 'react';
// import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';


function projects() {

    return (
        <div>
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title that wraps to a new line</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="p-3">
                    <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card bg="primary" text="white" className="text-center p-3">
                    <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                </Card>
                <Card className="text-center">
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img src="holder.js/100px160" />
                </Card>
                <Card className="text-right">
                    <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
            <h1>Projects Page</h1>
            <h2>Laugh Map</h2>
                <p>My final project I built during SEI bootcamp. This is my favorite project which I'm continously improving everyday. It's a website that integrates PredictHQ APIs and Google Maps API to display comedy shows that are happening in cities around the world. You can search by city and it will return events within a 100 mile radius with date, time, address, and location on google maps.</p>
                <div className="projectlinks">
                    <a href="https://laughmap.herokuapp.com/">
                        go to site
                    </a>
                    <a href="https://github.com/amandamholliday/final-project">
                        view on github
                    </a>
                    <a href to="/">
                        wireframes
                    </a>
                </div>
            <h2>The Record Collection</h2>
                <p>A group project where we created a catalog for viynl records that are organized by Genre, Artists, and Album names. Ideally, this would be a tool used by record stores to help organize their inventory. Made with Ruby, React, Javascript, CSS, and HTML.</p>
            <h2>The Traveler</h2>
                <p>My very frist project - an original game built with pure Javascript. The concept is that the player is a traveler stuck in a teleport and must identify 10 locations correctly before time runs out or else they are stuck in the teleport forever.</p>
            <h2>Motivation Machine</h2>
                <p>An app I designed when I got frustrated trying to build something with lack of motivation. This was built to help stay organinized with a wall of postable sticky notes, a page full of random facts for inspiration, and a self timer to help productivity. Built using React, React Router, and Javascript, CSS & HTML.</p>
            <h2>This portfolio</h2>
                <p>I built this portfolio you're currently viewing with React.</p>
        </div>
    )
}

export default projects;