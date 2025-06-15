import React from 'react'
import Hello from "../component/home/Hello.jsx";
import About from "../component/home/About.jsx";
import Skills from "../component/home/Skills.jsx";
import Project from "../component/home/Project.jsx";
import Contact from "../component/home/Contact.jsx";

function Home() {
  return (
    <>
        <div className='flex justify-center items-center'>
            <div className='w-6/12 px-3'>
            <Hello/>
            <About/>
            <Skills/>
            <Project/>
            <Contact/>
            </div>
        </div>
    </>
  )
}

export default Home