import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card} from "react-bootstrap";

const Destinacije = props => {

    const onDestinacijaClick = (destinacija) => {
        props.ucitajDestinaciju(destinacija);
    }

    return (
        <>
            <h1>Pogledajte nase destinacije</h1>
            {
                props.destinacije.map((destinacija, index) => {
                    return (
                        <Card key={index} className="mt-2" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={destinacija.slika} />
                            <Card.Body>
                                <Card.Title>{destinacija.nazivDestinacije}</Card.Title>
                                <Card.Text>
                                   Cena destinacije:  {destinacija.cena}&euro;
                                </Card.Text>
                                <Button onClick={() => {onDestinacijaClick(destinacija)}} variant="primary">Ucitaj destinaciju</Button>
                            </Card.Body>
                        </Card>
                    );
                })};

        </>
    );
};

Destinacije.propTypes = {
    destinacije: PropTypes.array.isRequired,
    ucitajDestinaciju: PropTypes.func.isRequired
};

export default Destinacije;