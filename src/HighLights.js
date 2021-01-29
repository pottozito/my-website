import logo from './logo.svg';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';

function HighLights() {

    const [page, setPage] = useState(0)

    const nextPage = () => {
        page > 1 ? setPage(0) : setPage(page + 1)
    }

    return (
        <Container style={{ backgroundColor: 'white', borderRadius: '5px', height: '150px' }}>
            <p>Text</p>
        </Container>
    );
}

export default HighLights;
