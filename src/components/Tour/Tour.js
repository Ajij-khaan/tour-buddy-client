import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const { _id, name, price, Duration, img, description } = props.tour;
    return (
        <div>
            <div className="">
                <Col>
                    <Card className="border-1 ">
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title className='fs-5 fw-bold text-dark'>{name}</Card.Title>
                            <div className='d-flex justify-content-center'>
                                <div className='mx-3 d-flex justify-content-center'>
                                    <p className='text-danger fw-bold fs-3'>${price}</p>
                                    <p className='mt-2 text-muted fw-bold'>/ Per Person</p>
                                </div>
                                <p className='mx-3 text-muted fw-bold mt-2'>{Duration}</p>
                            </div>
                            <Card.Text className='text-dark'>{description.slice(0, 200)}</Card.Text>
                            <Link to={`/booktour/${_id}`}> <button className="btn btn-danger w-100 fw-bold ">Book Tour</button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div >
    );
};

export default Package;