import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.image}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Skills  &".split("")}
                        idx={9}
                    />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={" Experience".split("")}
                        idx={10}
                    />
                </h1>
                <div className="Skills">
                    <div className="cata">
                     <h2>
                     <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Languages".split("")}
                        idx={15}
                    />
                     </h2>
                        <ul>
                            <li><span>Javascript</span></li>
                            <li><span>Ruby</span></li>
                            <li><span>Html</span></li>
                            <li><span>CSS</span></li>
                        </ul>
                    </div>
                    <div className="cata">
                     <h2>
                     <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Frameworks".split("")}
                        idx={15}
                    />
                     </h2>
                        <ul>
                            <li><span>Bootstrap</span></li>
                            <li><span>React</span></li>
                            <li><span>Ruby onRails</span></li>
                            
                        </ul>
                    </div>
                    <div className="cata">
                     <h2>
                     <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Skills".split("")}
                        idx={15}
                    />
                     </h2>
                        <ul>
                            <li><span>Githaub</span></li>
                            <li><span>Gitllab</span></li>
                            <li><span>TDD</span></li>
                            <li><span>Git</span></li>
                            <li><span>Redux.js</span></li>
                            <li><span>Mentoring</span></li>
                            <li><span>Netlify</span></li>
                            <li><span>jQuery</span></li>
                            <li><span>Pair Programming</span></li>
                            <li><span>Chrome Developer Tools</span></li>
                        </ul>
                    </div>
                </div>
                    
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
            
        </>
    );
}

export default Portfolio;