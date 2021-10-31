import React, { useRef } from 'react';

const AddTourPackage = () => {
    const id = useRef();
    const name = useRef();
    const price = useRef();
    const duration = useRef();
    const description = useRef();
    const img = useRef();
    return (
        <div>
            <h1>Please add a Tour Package</h1>
            <form>
                <input type="text" ref={name} placeholder="name" />
                <input type="text" ref={price} placeholder="price" />
                <input type="text" ref={duration} placeholder="duration" />
                <input type="text" ref={description} placeholder="description" />
                <input type="text" ref={img} placeholder="img" />

            </form>

        </div>
    );
};

export default AddTourPackage;