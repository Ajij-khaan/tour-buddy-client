import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const BookTour = () => {
    const { orderId } = useParams();

    const [tours, setTours] = useState([]);
    const [showTour, setShowTour] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])

    console.log(orderId)

    //Set each time service with id and set dpendency
    useEffect(() => {
        setShowTour(tours.find(tour => (tour._id === orderId)));
    }, [tours])

    console.log(showTour);



    return (
        <div>
            {/* this is my order {orderId} */}

            <div className="font-body bg-light">
                <h1 className="text-center fw-bold mt-3">Service Details</h1>
                <Container>
                    <div className="mt-3 d-flex justify-content-center">

                        <img src={showTour?.img} alt="" />
                    </div>
                    <h3 className="mt-3">{showTour?.name}</h3>
                    <p className="mt-3">{showTour?.description}</p>
                </Container>
            </div>


        </div>
    );
};

export default BookTour;