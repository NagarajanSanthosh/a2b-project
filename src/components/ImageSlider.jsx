import React from 'react'
import '../styles/ImageSlider.css'
import { Container, Row, Col } from 'react-bootstrap';

const ImageSlider = () => {
    return (
        <div className='center'>
            <Container fluid className="h-100">
                <Row className="align-items-center h-100">
                    <Col className="text-center">
                        <div className="centered-content">                            
                            <h1>Today's Delight</h1>
                        </div>
                    </Col>
                </Row>
            </Container></div>
    )
}

export default ImageSlider