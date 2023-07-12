import React from 'react';
import Bannerabout from '../Bannerabout/Bannerabout';
import AboutText from '../AboutText/AboutText';
import Aboutsection from '../Aboutsection/Aboutsection';
import AboutTeam from '../AboutTeam/AboutTeam';

const About = () => {
    return (
        <div>
            <Bannerabout></Bannerabout>
            <AboutText></AboutText>
            <Aboutsection></Aboutsection>
            <AboutTeam></AboutTeam>
        </div>
    );
};

export default About;