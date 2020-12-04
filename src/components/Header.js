import React from 'react';
import headerImg from '../images/g.jpg';
import { ProductConsumer } from '../Context/Context';
import Bounce from 'react-reveal/Bounce';

export default function Header() {
    return (
        <ProductConsumer>
            {(value) => {
                const { setClass, darkMode } = value;
                return (
                    <section className="header">
                        <img src={headerImg} alt="header" />
                        <div className="inside-container">
                            <div className="texts">

                                <Bounce right delay={500} duration={2000} cascade>
                                    <h1>HELLO I'm keval panchal .</h1>
                                </Bounce>



                                <Bounce left delay={2000} duration={2000} cascade>
                                    <h2>I am developer specialized in  web developer and web design.</h2>
                                    <h2>Take a look my work  and if you like it I would love to hear form you!  </h2>

                                </Bounce>


                                <Bounce bottom delay={4000} duration={2000} >
                                    <a href="mailto:kevalpan16@gmail.com" className=" contactBtn">Contact</a>
                                </Bounce>




                            </div>
                        </div>

                        {/* dark mode button */}
                        <div className="btnMode">
                            <div className={setClass ? "btnIcons newBtnIcons" : "btnIcons"} onClick={darkMode}>
                                <i className="fas fa-moon"></i>
                                <div className={setClass ? "newBall ball" : "ball"}></div>
                                <i className="fas fa-sun"></i>
                            </div>
                        </div>

                        {/*end of dark mode button */}




                    </section>
                )
            }}
        </ProductConsumer>
    )
}
