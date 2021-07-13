import './Header.css';

import React from 'react';
import headshot from './headshot.jpg'

import {Container, Row, Col, Button} from 'react-bootstrap'

function Header() {
    return (
        <Container className = 'header'>
            <Row>
                <Col xs={3}>
                    <img className = 'headshot' src={headshot} alt='headshot'></img>
                </Col>
                <Col xs = {9}>
                    
                    <div className='heading'>
                    Nikhil Ghate
                    </div>
                    
                    <div>
                        <Button href="NikhilGhate_Resume.pdf" target = "_blank" className = 'headerButton'>Resume</Button>
                        <Button href="mailto:nghate@terpmail.umd.edu" target = "_blank" className = 'headerButton'>Email</Button>
                        <Button href="https://www.linkedin.com/in/nikhilghate1/" target = "_blank" className = 'headerButton'>LinkedIn</Button>
                        <Button href="https://github.com/nghate1" target = "_blank" className = 'headerButton'>GitHub</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Header