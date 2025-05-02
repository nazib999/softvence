import React from 'react'
import {assets} from "./assets/index.js";
import Topbar from "./sections/Topbar.jsx";
import Header from "./sections/Header.jsx";
import LiveAi from "./sections/LiveAi.jsx";
import Courses from './sections/Courses.jsx';
import FrequentQuestion from './sections/TestimonialCarousel.jsx';
import Accordian from './sections/Accordian.jsx';
import Footer from './sections/Footer.jsx';
import TestimonialCarousel from './sections/TestimonialCarousel.jsx';

const App = () => {
    return (
        <main className={''}>
            <Header/>
            <Topbar/>
            <LiveAi/>
            <Courses/>
            <Accordian/>
            <TestimonialCarousel/>
            <Footer/>
        </main>
    )
}
export default App
