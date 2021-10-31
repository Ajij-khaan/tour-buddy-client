import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';


const ManageAllOrder = () => {

    const { user } = useAuth();
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/manageorder')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    const handleDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/manageorder/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount !== 0) {
                    alert('deleted Successfully');
                    console.log(data);
                    const remain = allOrders.filter(order => order._id !== id);
                    setAllOrders(remain);
                }
            })
    }

    console.log(allOrders);

    return (
        <div>
            <h1>This si manage order</h1>
            <h2>{user.email}</h2>
            {
                allOrders.map(order =>
                    <div>
                        <h1>This si asingle order {order.name}</h1>
                        <h1>This si asingle order {order.email}</h1>
                        <h1>This si asingle order {order._id}</h1>
                        <button onClick={() => handleDelete(order._id)}>Delete User</button>
                    </div>
                )
            }

        </div>
    );
};

export default ManageAllOrder;