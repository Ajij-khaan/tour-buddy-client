import React from 'react';
import { Carousel } from 'react-bootstrap';

const img1 = 'https://i.ibb.co/QFVZFJM/travel-2.jpg';
const img2 = 'https://i.ibb.co/bgrpDcq/cliff-ge8995adc9-1920.jpg';
const img3 = 'https://i.ibb.co/2PDNJR7/tower.jpg';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Amazing tour in Beach</h3>
                    <p>A beach is a landform alongside a body of water which consists of loose particles. The particles composing a beach are typically made from rock</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Rocking with Adventure</h3>
                    <p>An adventure is an exciting experience or undertaking that is typically bold, sometimes risky. Adventures may be activities with some potential for physical danger such as traveling, exploring, </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Tour in Eiffel Tower</h3>
                    <p>The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;