import './Cards.css';

import React from 'react';
import {Card} from 'react-bootstrap'

function Cards(props) {
    return (
        <Card style={{ width: '12rem' }}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
                    <Card.Text>{props.text}</Card.Text>
                    <Card.Link href={props.addy1}>{props.link1}</Card.Link>
                    <Card.Link href={props.addy2}>{props.link2}</Card.Link>
                </Card.Body>
        </Card>
    )
}

export default Cards