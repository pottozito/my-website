import './App.css';
import { useState, useEffect } from 'react'; import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from "framer-motion";
import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import slime from './slime.gif'
import telus from './telus.png'
import click from './click.png'
import { Button } from 'react-bootstrap';

const variants = {
    enter: (direction) => {
        return {
            x: -50 * direction,
            opacity: 0
        };
    },
    center: {
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            x: 50 * direction,
            opacity: 0
        };
    }
};

const content = [
    { title: 'Platformer Game', text: 'Made With Unity', release: 'In Development', img: slime },
    { title: 'pottozito.com', text: 'Made with React', release: 'Febuary 2021', img: click },
    { title: 'Hired @ TELUS', text: 'Full Stack Developer', release: 'January 2021', img: telus }
]

const HighLights = () => {

    const [page, setPage] = useState(0)
    const [seconds, setSeconds] = useState(0);
    const [direction, setDirection] = useState(1);

    const nextPage = () => {
        setSeconds(0)
        setDirection(1)
        page >= (content.length - 1) ? setPage(0) : setPage(page + 1)
    }

    const prevPage = () => {
        setSeconds(0)
        setDirection(-1)
        page < 1 ? setPage(content.length - 1) : setPage(page - 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 2) {
                nextPage()
            } else {
                setSeconds(seconds => seconds + 1)
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [nextPage, seconds]);

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50px' }}>
                    <motion.div onClick={() => prevPage()} whileHover={{ x: -5 }}>
                        <FontAwesomeIcon className={'m-3'} size='s' icon={faChevronLeft} />
                    </motion.div>
                </div>
                <div style={{ width: '75%', maxWidth: '400px' }}>
                    <AnimatePresence initial={false} exitBeforeEnter custom={direction}>
                        <motion.div
                            style={{ height: '120px', textAlign: 'center' }}
                            className={'mb-5'}
                            custom={direction}
                            key={page}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}>
                            <div className={'mb-2'}>
                                <h4 className={'m-0'}>{content[page]['title']}</h4>
                                <small className={'text-muted m-0'}>{content[page]['release']} | {content[page]['text']}</small>
                            </div>
                            <img className={'p-2'} src={content[page]['img']} />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50px' }}>
                    <motion.div onClick={() => nextPage()} whileHover={{ x: 5 }}>
                        <FontAwesomeIcon className={'m-3'} size='s' icon={faChevronRight} />
                    </motion.div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', fontSize: '6pt' }}>
                {content.map(function (element, i) {
                    return (
                        <motion.div
                            onClick={() => setPage(i)}
                            key={i}
                            animate={page === i ? 'zoom' : 'unzoom'}
                            whileHover={{
                                y: -10
                            }}
                            variants={{
                                unzoom: {
                                    y: 0
                                },
                                zoom: {
                                    y: -10
                                }
                            }}>
                            <FontAwesomeIcon className={'m-3'} size='xs' icon={faCircle} />
                        </motion.div>
                    )
                })}
            </div>
        </>
    )
    /*


    const nextPage = () => {
        setSeconds(0)
        page >= (content.length - 1) ? setPage(0) : setPage(page + 1)
    }

    return (
        <div>
            <div className={'mb-3'} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <div style={{ width: '75%', maxWidth: '400px' }}>
                    <AnimatePresence exitBeforeEnter>
                        <motion.div
                            style={{ height: '120px', textAlign: 'center',  }}
                            key={page}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={variants}
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30, duration: 0.1 },
                                opacity: { duration: 0.1 }
                            }}>
                            <div className={'mb-2'}>
                                <h4 className={'m-0'}>{content[page]['title']}</h4>
                                <small className={'text-muted m-0'}>{content[page]['release']} | {content[page]['text']}</small>
                            </div>
                            <img className={'p-2'} src={content[page]['img']}></img>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            
        </div>
    );
    */
}

export default HighLights;
