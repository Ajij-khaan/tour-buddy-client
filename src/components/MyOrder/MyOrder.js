import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';


const MyOrder = () => {

    const { user } = useAuth();
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/manageorder')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    const myOrder = allOrders.filter(order => order.email === user.email);
    // setAllOrders(myOrder);
    // console.log(myOrder);
    return (
        <div>
            <h1>This si My order</h1>
            <h2>{user?.email}</h2>
            {
                myOrder.map(order =>
                    <div>
                        <h1>This si asingle order {order.name}</h1>
                        <h1>This si asingle order {order.email}</h1>
                        <h1>This si asingle order {order._id}</h1>

                    </div>
                )
            }
        </div>
    );
};

export default MyOrder;