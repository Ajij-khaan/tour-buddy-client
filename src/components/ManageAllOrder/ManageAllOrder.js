import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageAllOrder = () => {

    const { user } = useAuth();
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/manageorder')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    console.log(allOrders)
    return (
        <div>
            <h1>This si manage order</h1>
            <h2>{user.email}</h2>
            {
                allOrders.map(order => <ManageOrder key={allOrders._id} order={order}></ManageOrder>)
            }
        </div>
    );
};

export default ManageAllOrder;