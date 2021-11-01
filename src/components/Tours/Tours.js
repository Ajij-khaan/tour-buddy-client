import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Tour from '../Tour/Tour'

const Package = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])

    console.log(tours);
    return (
        <div className="bg-light" >
            <h1 id="popular-tours" className="font-body fw-bold mb-4 pt-5 fs-1 text-danger">MOST POPULAR TOURS</h1>
            <Container className="mb-5">
                <Row id="services" xs={1} md={2} lg={3} className="g-4 mt-5border-primary">
                    {
                        tours.map(tour => <Tour key={tour._id} tour={tour}></Tour>)
                    }
                </Row>

            </Container>
        </div>
    );
};

export default Package;