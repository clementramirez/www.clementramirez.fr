import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';
import DarkVariantExample from '../components/Carousell';

const TypingTitle = () => {
  return (
    <TypeAnimation
      sequence={[
        'Hi !', // Types 'One'
        2000, // Waits 1s
        "I'm Clément !", // Deletes 'One' and types 'Two'
        3000, // Waits 2s
        'Welcome to my website !', // Deletes 'Two' and types 'Three'
        2000, // Waits 1s
      ]}
      wrapper="div"
      cursor={false}
      className="type"
      repeat={Infinity}
      speed={{type: 'keyStrokeDelayInMs', value: 250}}
      deletionSpeed={50}
      style={{ fontSize: '8cqw', textAlign : 'center', display: 'inline-block', height: '80%'}}
    />
  );
};

const AboutMe = () => {
  return (
    <div className="container text-center">
      <div className="custom-blockquote row">
        <div className='col align-self-start'>
          <span className="quote">“</span>
        </div>
        <div className='col-6 align-self-center'>
        <p style={{ fontSize: '1.5cqw' }}>
        Passionate about digital electronics, computer science and robotics since I was very young, these fields have always been at the heart of my life and will be, I hope, in my future job.
        </p>
        </div>
        <div className='col align-self-end'>
          <span className="quote">”</span>
        </div>
      </div>
    </div>
  );
};


const Home = () => {
  return (
    <div>
      <div className='container-fluid d-flex justify-content-center align-items-center typing-zone-div'>
        <TypingTitle />
      </div>
      <div className='container-fluid d-flex justify-content-center align-items-center aboutme-zone-div'>
        <AboutMe />
      </div>
      <div className='container-fluid justify-content-center align-items-center' style={{ backgroundColor: 'lightgrey' }}>
          <h1 className='text-center'>Personal Projects</h1>
          <DarkVariantExample />
      </div>
    </div>
  );
};

export default Home;
