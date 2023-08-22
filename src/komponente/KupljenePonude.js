import React from 'react';
import PropTypes from 'prop-types';
import {Accordion} from "react-bootstrap";

const KupljenePonude = props => {
    return (
        <>
            <h1>Kupljene ponude {props.kupljenePonude.length}</h1>
            <Accordion defaultActiveKey="0">

                {
                    props.kupljenePonude.map((ponuda, index) => {
                        return (
                            <Accordion.Item key={index} eventKey={index}>
                                <Accordion.Header>{ponuda.destinacija.nazivDestinacije}</Accordion.Header>
                                <Accordion.Body>
                                    <h3>Ukupna cena: {ponuda.ukupnaCena}&euro;</h3>
                                    <img className="img img-fluid" src={ponuda.destinacija.slika} alt={ponuda.destinacija.nazivDestinacije} />
                                    <h3>Cena destinacije: {ponuda.destinacija.cena}&euro;</h3>
                                    <p>Izabrani izleti</p>
                                    <ul>
                                    {
                                        ponuda.izleti.map((izlet, index) => {
                                            return (
                                                <li> {izlet.nazivIzleta} ({izlet.cena})</li>
                                            );
                                        })
                                    };
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        );
                    })
                }
            </Accordion>
        </>
    );
};

KupljenePonude.propTypes = {
    kupljenePonude: PropTypes.array.isRequired
};

export default KupljenePonude;