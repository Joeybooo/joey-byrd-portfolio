import React from 'react';
import Profile from "../../src/assets/Profile.jpg"

function About() {
    return (
        <div className='about-container'>
            <h5>About Joey Byrd</h5>

            <img src='Profile' alt='profile-photo-joey-byrd' className='profile float-left'></img>

            <div className='mt-3'> 
                <p> fill with text about me </p>
                <p> contact info stuff
                    <a href='mailto:joeybyrd9999@gmail.com'>joeybyrd9999@gmail.com</a>
                    <a href='https://github.com/Joeybooo'>Github</a>
                    <a href='https://github.com/Joeybooo'>Link</a>
                </p>
            </div>
        </div>
    );
}

export default About;