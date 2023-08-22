import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ja from '../slike/ja.jpeg';

const OMeni = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>O meni</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci alias
                            asperiores atque autem beatae commodi consequatur cumque cupiditate delectus dicta
                            dignissimos dolor doloremque doloribus dolorum ducimus ea earum eius eligendi eos
                            error est et eum eveniet excepturi exercitationem expedita explicabo facere fugiat
                            fugit hic id illum impedit in incidunt ipsa ipsum iste iure iusto labore laboriosam
                        </p>
                    </Col>
                    <Col>
                        <img className="img img-fluid" src={ja} alt="jovana"/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default OMeni;