import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const { _id, name, img, description } = props.tour;
    return (
        <div>
            <div className="">
                <Col>
                    <Card className="border-1 border-primary">
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description.slice(0, 250)}
                            </Card.Text>
                            <Link to={`/booktour/${_id}`}> <button className="btn btn-primary ">Book Tour</button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div >
    );
};

export default Package;