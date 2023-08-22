import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Alert} from "react-bootstrap";
import {FaPlus, FaMinus} from "react-icons/fa";

const JedanIzlet = props => {

    const [dodat, setDodat] = useState(false);

    return (
        <>
            <Alert variant={dodat ? 'success' : 'primary'}>
                <Alert.Heading>{props.izlet.nazivIzleta}</Alert.Heading>
                <p>
                    {props.izlet.opis}
                </p>
                <hr />
                <p className="mb-0">
                    Cena izleta: {props.izlet.cena}&euro;
                </p>
                <button onClick={() => {
                    setDodat(true);
                    props.dodajIzlet(props.izlet);
                } } disabled={dodat} className="btn btn-success m-1">Dodaj izlet <FaPlus/></button>

                <button onClick={() => {
                    setDodat(false);
                    props.izbrisiIzlet(props.izlet);
                }} disabled={!dodat} className="btn btn-danger m-1">Izbrisi izlet <FaMinus /></button>
            </Alert>
        </>
    );
};

JedanIzlet.propTypes = {
    izlet: PropTypes.object.isRequired,
    dodajIzlet: PropTypes.func.isRequired,
    izbrisiIzlet: PropTypes.func.isRequired
};

export default JedanIzlet;