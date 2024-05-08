import React from 'react'

import sab from"./images/vid3.jpg"

import Common from './Common';

const About = () => {
  return (
    <>
      <Common  name="Welcome to About page" imgsrc={sab} visit="/contact" btname="Contact Now"/>
    </>
  )
}

export default About
