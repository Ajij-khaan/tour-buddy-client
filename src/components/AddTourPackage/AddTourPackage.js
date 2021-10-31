import React, { useRef } from 'react';

const AddTourPackage = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const durationRef = useRef();
    const descriptionRef = useRef();
    const imgRef = useRef();


    const handleAddTour = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const duration = durationRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgRef.current.value;

        const newUser = { name, price, duration, description, img };

        fetch('http://localhost:5000/tours', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added the user');
                    e.target.reset();
                }
            })


        e.preventDefault()
    }

    return (
        <div>
            <h1>Please add a Tour Package</h1>
            <form onSubmit={handleAddTour}>
                <input type="text" ref={nameRef} placeholder="name" />
                <input type="text" ref={priceRef} placeholder="price" />
                <input type="text" ref={durationRef} placeholder="duration" />
                <input type="text" ref={descriptionRef} placeholder="description" />
                <input type="text" ref={imgRef} placeholder="img" />
                <input type="submit" value="Submit" />

            </form>

        </div>
    );
};

export default AddTourPackage;