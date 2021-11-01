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
            <h1 className='text-uppercase fw-bold text-danger my-5'>Please Add a TOUR PACKAGE</h1>
            <form onSubmit={handleAddTour}>
                <input type="text" ref={nameRef} placeholder="Tour Package Name" className='p-3 borer border-danger mb-2 w-50' />
                <br />
                <input type="text" ref={priceRef} placeholder="Price" className='p-3 borer border-danger mb-2  w-50' />
                <br />
                <input type="text" ref={durationRef} placeholder="Duration. ex: 3 Day / 4 Night" className='p-3 borer border-danger mb-2  w-50' />
                <br />
                <input type="text" ref={descriptionRef} placeholder="Description" className='p-3 borer border-danger mb-2  w-50' />
                <br />
                <input type="text" ref={imgRef} placeholder="Image URL" className='p-3 borer border-danger mb-2  w-50' />
                <br />
                <input type="submit" value="Submit" className='p-3 btn btn-danger mb-2  w-50' />

            </form>

        </div>
    );
};

export default AddTourPackage;