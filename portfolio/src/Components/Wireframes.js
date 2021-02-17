import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel'

function wireframes() {

    return (
        <div>
            <br />
            <img src="https://see.fontimg.com/api/renderfont4/pALD/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjM0EzODM4IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/V2lyZWZyYW1lcw/wonderbar.png"/>
            <br />
            <div className="wireframes">
                <Carousel>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dzgeqcksj/image/upload/v1613519679/Screen_Shot_2021-02-02_at_3.48.53_PM_hbb4cl.png"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dzgeqcksj/image/upload/v1613519336/Screen_Shot_2021-01-20_at_11.00.18_AM_uy2poc.png"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dzgeqcksj/image/upload/v1613519529/Screen_Shot_2021-01-20_at_11.00.36_AM_yrcxa2.png"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dzgeqcksj/image/upload/v1613519485/Screen_Shot_2021-01-20_at_11.00.02_AM_oy5qed.png"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dzgeqcksj/image/upload/v1613519422/Screen_Shot_2021-01-20_at_1.15.06_PM_ut9vex.png"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>The Record Collection</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dzgeqcksj/image/upload/v1613580847/sepi_n9qldw.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default wireframes;