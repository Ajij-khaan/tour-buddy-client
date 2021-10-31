import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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


            <h1>Book Now</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",)} placeholder="Name" defaultValue={user?.displayName} />
                <input {...register("email",)} placeholder="Email" defaultValue={user?.email} />
                <input {...register("address",)} placeholder="Address" />
                <input type="submit" value="Book Now" />
            </form>

        </div>
    );
};

export default BookTour;