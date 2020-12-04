import React from 'react';
import './App.css';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';

import Projects from './components/Projects'
import Contact from './components/Contact';
import Services from './components/Services'

import { Route } from 'react-router-dom';
import { ProductConsumer } from './Context/Context';


function App() {
  return (
    <ProductConsumer>
      {value => {
        const { setClass } = value;
        return (

          <div className={setClass ? "dark-mode-black" : "App"}>


            <Navbar />

            <Element name="Home">
              < Route exact path="/" component={Header} />
            </Element>

            <div className="basic">
              <Element name="About">
                < Route exact path="/" component={About} />
              </Element>




              <Element name="Services">
                < Route exact path="/" component={Services} />

              </Element>






            </div>


            <Element name="Contact">
              < Route exact path="/" component={Contact} />
            </Element>












          </div>




        )
      }}
    </ProductConsumer>
  );
}

export default App;