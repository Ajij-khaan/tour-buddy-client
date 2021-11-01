import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hook/useAuth';
import { useForm } from "react-hook-form";


const BookTour = () => {
    const { orderId } = useParams();

    const [tours, setTours] = useState([]);
    const [showTour, setShowTour] = useState([]);

    //Get user emial and apss
    const { user } = useAuth();

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


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const newOrder = { name: data.name, email: data.email, orderDetails: showTour };
        console.log(newOrder)

        fetch('http://localhost:5000/manageorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added the user');
                    reset();
                }
            })
    }


    return (
        <div>
            <Container className='text-'>
                <Row>
                    <Col sm={8} className=''>
                        <img src={showTour?.img} className='w-100 h-50' alt="" />
                        <div>
                            <h3 className="mt-3 text-uppercase fw-bold fs-4">{showTour?.name}</h3>
                            <div className='d-flex justify-content-between' >
                                <div className='d-flex ms-3'>
                                    <h3 className="mt-3 fw-bold text-danger">${showTour?.price}</h3>
                                    <p className='mt-4 fw-bold text-muted'> /Per Person</p>
                                </div>
                                <div className='text-danger '>
                                    <h3 className="me-3 mt-3 text-capitalize fs-5 fw-bold">{showTour?.Duration}</h3>
                                </div>
                            </div>
                            <div className='text-start'>
                                <h3 >OverView</h3>
                                <p >{showTour?.description}</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4} className='mt-5'>
                        <h1 className='text-center fw-bold fs-3'>Book Your Tour</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name",)} placeholder="Name" defaultValue={user?.displayName} className='p-3 border-2 border-danger mb-3 w-100 mt-3' />
                            <input {...register("email",)} placeholder="Email" defaultValue={user?.email} className='p-3 border-2 border-danger mb-3 w-100' />
                            <input {...register("address",)} placeholder="Shipping Address" className='p-3 border-2 border-danger mb-3 w-100' />
                            <br />
                            <input type="submit" value="Book Now" className='btn btn-danger text-white fw-bold px-5 w-100' />
                        </form>
                    </Col>
                </Row>
            </Container >

        </div >
    );
};

export default BookTour;