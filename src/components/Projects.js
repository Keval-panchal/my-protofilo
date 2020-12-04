import React from 'react';
import Title from './Title';
import { ProductConsumer } from '../Context/Context';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Projects() {
    return (
        <ProductConsumer>

            {value => {
                const { setClass } = value;
                return (
                    <div className="projects">
                        <div className="container">
                            <Title title="Projects" color={setClass ? "#fefefe" : "gray"} />

                            <div className="projects-center">
                                
                            <VerticalTimeline>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                        date="2020 - present"

                                    >
                                        <h3 className="vertical-timeline-element-title">spotify-clone</h3>
                                        <h4 className="vertical-timeline-element-subtitle">React.js firebase</h4>
                                        <p>
                                        Ahemdabad(Gujrat),india
                                    
  </p>
                                    </VerticalTimelineElement>
                                  
                                    
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        date="june 2020"

                                    >
                                        <h3 className="vertical-timeline-element-title">instagram-clone</h3>
                                        <h4 className="vertical-timeline-element-subtitle">React.js,firebase</h4>
                                        <p>
                                            Ahemdabad(Gujrat),india
    </p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="April 2020"

                                    >
                                        <h3 className="vertical-timeline-element-title">Netflix -clone</h3>
                                        <h4 className="vertical-timeline-element-subtitle">React.js,firebase</h4>
                                        <p>
                                            Ahemdabad(Gujrat),india
    </p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="march-2020"

                                    >
                                        <h3 className="vertical-timeline-element-title">
                                            Amazone-clone
                                        </h3>
                                        <h4 className="vertical-timeline-element-subtitle">React.js,firebase</h4>
                                        <p>Ahemdabad(Gujrat),india
                                            
    </p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="2019 - 2020"

                                    >
                                        <h3 className="vertical-timeline-element-title">Crop disease prediction</h3>
                                        <h4 className="vertical-timeline-element-subtitle">python machinelearrning,html,css,javascript</h4>
                                        <p>
                                            Ahemdabad(Gujrat),india
    </p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement

                                    />
                                </VerticalTimeline>
                            </div>
                        </div>
                    </div>
                )
            }}
        </ProductConsumer>
    )
}