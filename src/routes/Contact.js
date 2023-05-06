import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Formee from '../components/Formee';


function Contact() {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="Lets have a chat"/>
      <Formee />
      <Footer />
    </div>
  )
}

export default Contact