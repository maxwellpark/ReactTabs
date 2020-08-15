import React from 'react';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from './SearchBar';
import SubmitButton from './SubmitButton';
import Song from './Song'; 

const Layout = ({getContent, address}) => {
    const col1Width = 3; 
    const col2Width = 6; 
    const col3Width = 1; 

    return(
        <>
        <Header />
        <Container fluid>
        <Row>
            <Col xs={col1Width} />
            <Col xs={col2Width}>
                <SearchBar />
            </Col>
            <Col xs={col3Width}>
                <SubmitButton getContent={getContent}>Submit</SubmitButton>
            </Col>
        </Row>
        {/* Placeholder */}
        <Song id={27} address={address} title={"Stairway to Heaven"} artist={"Led Zeppelin"}/>
    </Container>
    </>
    );
};

export default Layout; 