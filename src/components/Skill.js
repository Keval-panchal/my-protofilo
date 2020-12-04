import React from 'react';
import Title from './Title';
import { ProductConsumer } from '../Context/Context';

import Bounce from 'react-reveal/Bounce';


export default function Skill() {
    return (
        <ProductConsumer>
            {value => {
                const { setClass } = value;
                return (
                    <Bounce left delay={500} duration={2000} cascade>
                        <div className="skills">
                            <div className="container">
                                <Title title="Skills" color={setClass ? "#fefefe" : "gray"} />

                                <div className="skills-center">

                                    <div className="skills-web">
                                        <h4 className={setClass ? "dark-mode-orange" : ""}>programming and web development skills</h4>

                                        {value.devSkills.map(item => {
                                            return (
                                                <li key={item.id} className={setClass ? "dark-mode-lightWhite" : ""}>
                                                    <h3>{item.title}</h3><span className={setClass ? 'newBar bar' : 'bar'}><span className={item.percent}><p>{item.number}</p></span></span>
                                                </li>
                                            )
                                        })}
                                    </div>







                                </div>
                            </div>
                        </div>
                    </Bounce>
                )
            }}
        </ProductConsumer>
    )
}