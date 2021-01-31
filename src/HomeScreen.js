import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import HighLights from './HighLights';
import portrait from './portrait.png';

const HomeScreen = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 1 }} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div className={'mb-5'}>
                            <h1 className={'mb-1'} style={{ fontSize: '2.5rem' }}><b>ZITO NAMURO</b></h1>
                            <h6 className={'m-0 mb-5'}>Web Developer • Student</h6>
                            <img src={portrait} />
                        </div>
                        <div className={'mb-5'} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <motion.a href={'https://github.com/pottozito'} initial={{ opacity: 0 }} animate={{ y: [10, 0], opacity: [0, 1] }} transition={{ duration: 0.4, delay: 0.6 }} className={'px-3'}>GitHub <FontAwesomeIcon size='xs' icon={faChevronRight} /></motion.a>
                            <motion.a href={'https://www.linkedin.com/in/pottozito/'} initial={{ opacity: 0 }} animate={{ y: [10, 0], opacity: [0, 1] }} transition={{ duration: 0.4, delay: 0.8 }} className={'px-3'}>LinkedIn <FontAwesomeIcon size='xs' icon={faChevronRight} /></motion.a>
                            <motion.a href={'mailto:namuro@uwindsor.ca'} initial={{ opacity: 0 }} animate={{ y: [10, 0], opacity: [0, 1] }} transition={{ duration: 0.4, delay: 1.0 }} className={'px-3'}>Email <FontAwesomeIcon size='xs' icon={faChevronRight} /></motion.a>
                        </div>
                        <div>
                            <h6 className={'mb-3'}>Recent Highlights</h6>
                            <HighLights />
                        </div>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
}

export default HomeScreen;
