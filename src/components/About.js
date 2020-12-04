import React from 'react';
import Title from './Title';
import AboutLogo from '../images/keval.png';
import { ProductConsumer } from '../Context/Context';
import Bounce from 'react-reveal/Bounce';
export default function About() {
    return (
        <ProductConsumer>
            {value => {

                const { setClass } = value;
                return (
                    <section className="about">
                        <div className="container">
                            <Bounce left delay={500} duration={2000} cascade>
                                <Title title="About" color={setClass ? "#fefefe" : "grey"} />
                                <div className="about-center">
                                    <div className="about-logo">
                                        <img src={AboutLogo} alt="logo" />
                                    </div>

                                    <div className={setClass ? "about-texts dark-mode-white" : "about-texts"}>
                                        <div className={setClass ? "dark-mode-orange" : "profile"}>
                                            <h2>My profile</h2>

                                        </div>
                                        <div className="name">
                                            <p><span className={setClass ? "dark-mode-orange" : " "}>Name:</span>keval panchal</p>
                                        </div>

                                        <div className="age">
                                            <p><span className={setClass ? "dark-mode-orange" : " "} >Age:</span>21</p>
                                        </div>

                                        <div className="adress">
                                            <p><span className={setClass ? "dark-mode-orange" : " "}>Address:</span>Ahemdabad(Gujrat),india</p>
                                        </div>

                                        <div className="email">
                                            <p><span className={setClass ? "dark-mode-orange" : " "}   >Email</span><a href="mailto:kevalpan16@gmail.com" className={setClass ? "dark-mode-mail" : " "}>kevalpan16s@gmail.com</a></p>
                                        </div>

                                        <div className="phone">
                                            <p><span className={setClass ? "dark-mode-orange" : " "}>phone:</span>+(91) 9537311628</p>
                                        </div>



                                        <div className={setClass ? "about-media dark-mode-orangeBack" : "about-media"}>

                                            <a href="https://instagram.com/bunty_panchal_?igshid=icqv44pd8ej1" target="_blank" rel="noopener noreeferrer" ><i className="fab fa-instagram"></i></a>

                                            <a href="https://www.linkedin.com/in/keval-panchal-82a51a133" target="_blank" rel="noopener noreeferrer" ><i className="fab fa-linkedin"></i></a>

                                            <a href="https://www.youtube.com/channel/UCarYD6WjjdXRqBZhPF9ppHQ/videos?view_as=subscriber" target="_blank" rel="noopener noreeferrer" ><i className="fab fa-facebook-square"></i></a>

                                            <a href="https://twitter.com/buntypanchal11?s=08" target="_blank" rel="noopener noreeferrer" ><i className="fab fa-twitter"></i></a>
                                        </div>

                                    </div>
                                </div>

                                <div className={setClass ? "dark-mode-lightWhite generally" : "generally"}>
                                    <span className={setClass ? "dark-mode-orange" : ""}> Career,</span><p>i graduated from Hashmukh goswami college of engineering as Information Technology. The web development came in my life when i wanted to create a website for my self..and that was..it became my hobby and then a second job that i like so much. Below you will see my overall  skills that i have in all fields in my life.</p>

                                    <div className="certificates">
                                        <h4>My certificates</h4>
                                        <p>* Degree as <b>Information Technology from Hashmukh goswami college of engineering.</b></p>



                                        <p>* Certificates in responsive  <b>C++,Python</b></p>


                                    </div>
                                </div>
                            </Bounce>
                        </div>
                    </section>
                )
            }}
        </ProductConsumer>
    )
}


