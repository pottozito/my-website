import './App.css';
import { useState, useEffect } from 'react'; import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from "framer-motion";
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import slime from './slime.gif'
import telus from './telus.png'
import click from './click.png'

const variants = {
    enter: {
        x: -100,
        opacity: 0
    },
    center: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: 100,
        opacity: 0
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

    const nextPage = () => {
        setSeconds(0)
        page >= (content.length - 1) ? setPage(0) : setPage(page + 1)
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
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', fontSize: '6pt' }}>
                {content.map(function (i) {
                    return (
                        <motion.div key={i} animate={page === i ? 'zoom' : 'unzoom'} variants={{
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
        </div>
    );
}

export default HighLights;
