import React from 'react';
import Title from './Title';
import { ProductConsumer } from '../Context/Context';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

import Formpage from '../components/Formpage'

export default function Contact() {


    const scrollToElement = (element) => {
        scroller.scrollTo(element, {

            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -80


        })
    }




    return (
        <ProductConsumer>
            {value => {
                const { setClass } = value;
                return (
                    <React.Fragment>
                        <Title title="Contact" color={setClass ? "#fefefe" : "gray"} />
                        <div className={setClass ? "dark-mode-blue contact" : "contact"}>
                            <div className="container">
                                <Formpage />
                                <div className="contact-center">



                                    <div className="contact-media">
                                        <h3 className={setClass ? "dark-mode-orange " : " "}>Media</h3>
                                        <div className="media-items">

                                            <li> <a href="https://instagram.com/bunty_panchal_?igshid=icqv44pd8ej1" target="_blank" rel="noopener noreeferrer" ><i className="fab fa-instagram"></i>instagram</a> </li>

                                            <li> <a href="https://www.linkedin.com/in/keval-panchal-82a51a133" target="_blank" rel="noopener noreeferrer" ><i className="fab fa-linkedin"></i>Linkedin</a>
                                            </li>

                                            <li> <a href="https://www.facebook.com/keval.panchal.908" target="_blank" rel="noopener noreeferrer" ><i className="fab fa-facebook-square"></i>Facebook</a></li>

                                            <li> <a href="https://twitter.com/buntypanchal11?s=08" target="_blank" rel="noopener noreeferrer" ><i className="fab fa-twitter"></i>Twitter</a></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={setClass ? "dark-mode-blue created" : "created"}>
                            <div className="container">
                                <p>Designed and created by keval panchal {year() > 2020 ? "2019 - " : ""}{year()}</p>
                            </div>
                        </div>
                    </React.Fragment>
                )
            }}
        </ProductConsumer>
    )
}

// year function
let year = () => {
    let year = new Date().getFullYear();
    return year
}