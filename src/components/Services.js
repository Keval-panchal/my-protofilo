import React, { useState } from 'react';
import Title from './Title';
import { ProductConsumer } from '../Context/Context';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Services() {

    return (
        <>
            <ProductConsumer>

                {value => {
                    const { setClass } = value;
                    return (
                        <div className="projects">
                            <div className="container">
                                <Title title="Services" color={setClass ? "#fefefe" : "gray"} />

                                <div className="projects-center">

                                    <VerticalTimeline className="service">
                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--work"

                                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}


                                        >
                                            <div className="icon">
                                                <div className="brush">
                                                    <i class="fas fa-paint-brush"></i>
                                                </div>
                                                <div className="name">
                                                    <h4 classname="servicename">
                                                        WEB DESIGN
                                                        </h4>

                                                </div>
                                            </div>
                                            <div className="data">
                                                <p classname="servicedetail">A new website from the first idea to the successful launch . Together with you I make an appealing design that suits your business. I design using the latest techniques and trends. '
                                                 </p>
                                            </div>
                                        </VerticalTimelineElement>


                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--work"


                                        >
                                            <div className="icon">
                                                <div className="brush">
                                                    <i class="fas fa-tools"></i>
                                                </div>
                                                <div className="name">
                                                    <h4 classname="servicename">
                                                        WEB DEVELOPMENT
                                                        </h4>

                                                </div>
                                            </div>
                                            <div className="data">
                                                <p classname="servicedetail">I develop custom websites,keeping them unique,functional and modern.Considering the latest technologies like HTML5,CSS3,PYTHON,REACTJS and more.</p>
                                            </div>
                                        </VerticalTimelineElement>
                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--education"

                                        >
                                            <div className="icon">
                                                <div className="brush">
                                                    <i class="fas fa-mobile-alt"></i>
                                                </div>
                                                <div className="name">
                                                    <h4 classname="servicename">
                                                        RESPONSIVE DESIGN
                                                        </h4>

                                                </div>
                                            </div>
                                            <div className="data">
                                                <p classname="servicedetail">A website must be properly viewed on a wide variety of screens. I make sure that your website is always optimally usable on any device, any operating system and any web browser.

</p>
                                            </div>
                                        </VerticalTimelineElement>
                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--education"


                                        >
                                            <div className="icon">
                                                <div className="brush">
                                                    <i class="fas fa-redo"></i>
                                                </div>
                                                <div className="name">
                                                    <h4 classname="servicename">
                                                        WEBSITE RESTYLING
                                                        </h4>

                                                </div>
                                            </div>
                                            <div className="data">
                                                <p classname="servicedetail">your website out of date or need some improvement? I can help you to update it into a modern, user-friendly and responsive website that will convert more visitors into customers and boost your conversion rate.    </p>
                                            </div>
                                        </VerticalTimelineElement>
                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--education"


                                        >
                                            <div className="icon">
                                                <div className="brush">
                                                    <i class="fas fa-shopping-bag"></i>
                                                </div>
                                                <div className="name">
                                                    <h4 classname="servicename">
                                                        E-COMMERCE & <br />SHOPIFY
                                                        </h4>

                                                        

                                                </div>
                                            </div>
                                            <div className="data">
                                                <p classname="servicedetail">If you need an online shop, let me help you build a professional solution according to your requirements and getting your online business up and running. I’ve worked with Shopify, WooCommerce and various other e-Commerce systems. </p>
                                            </div>
                                        </VerticalTimelineElement>
                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--education"


                                        >
                                            <div className="icon">
                                                <div className="brush">
                                                    <i class="fas fa-cogs"></i>
                                                </div>
                                                <div className="name">
                                                    <h4 classname="servicename">
                                                        MAINTENANCE &
                                                <br />SUPPORT
                                                        </h4>

                                                </div>
                                            </div>
                                            <div className="data">
                                                <p classname="servicedetail">From building your first website to maintaining your existing applications. I provide on-going support and maintenance services to ensure that your website always runs smoothly. I provide honest advice and the best possible support for you to reach your goals.</p>
                                            </div>
                                        </VerticalTimelineElement>
                                        <VerticalTimelineElement />
                                    </VerticalTimeline>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>

        </>

    );
}
