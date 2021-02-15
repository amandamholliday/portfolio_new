import React from 'react';
import '../App.css';
// import { Link } from 'react-router-dom';


function projects() {

    return (
        <div>
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