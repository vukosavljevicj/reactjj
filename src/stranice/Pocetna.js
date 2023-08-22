import React, {useState} from 'react';
import PropTypes from 'prop-types';
import destinacije from '../podaci/destinacije.js';
import {Col, Container, Row} from "react-bootstrap";
import Destinacije from "../komponente/Destinacije";
import UcitanaDestinacija from "../komponente/UcitanaDestinacija";
import KupljenePonude from "../komponente/KupljenePonude";

const Pocetna = props => {

    const [ucitanaDestiancija, setUcitanaDestinacija] = useState(destinacije[0]);

    const ucitajDestinaciju = (destinacija) => {
        setUcitanaDestinacija(destinacija);
    }

    const dodajPonudu = (ponuda) => {
        props.dodajPonudu(ponuda);
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Destinacije destinacije={destinacije} ucitajDestinaciju={ucitajDestinaciju} />
                    </Col>
                    <Col>
                        <UcitanaDestinacija ucitanaDestinacija={ucitanaDestiancija}  dodajPonudu={dodajPonudu}/>
                    </Col>
                    <Col>
                        <h1>Kupljene ponude</h1>
                        <KupljenePonude kupljenePonude={props.ponude} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

Pocetna.propTypes = {
    dodajPonudu: PropTypes.func.isRequired,
    ponude: PropTypes.array.isRequired
};

export default Pocetna;