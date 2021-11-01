import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <>


                <Container>
                    <Row className="bg-light mt-5 font-body">
                        <Col className=" d-flex align-items-center justify-content-center text-start">
                            <div>
                                <p className="fs-1text-start fw-bold fs-1 text-dark text-uppercase">We’re Trusted by
                                    More Than <span className='fst-italic text-danger'> 84,106 </span>
                                    Clients!</p>
                            </div>
                        </Col>
                        <Col>
                            <img src="https://i.ibb.co/9VmWqYz/mountain.jpg" alt="" className="w-100" />
                        </Col>
                    </Row>
                </Container>


            </>
        </div>
    );
};

export default Banner;