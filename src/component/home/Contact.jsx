import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";

function Contact() {
  return (
    <div className='h-60 flex justify-center'>
        <div className="p-10 text-center">
            <p className='text-3xl font-bold my-3'>Contact Me!</p>
            <p className='mb-3'>i'm actively seeking internship opportunities and excited to collaborate on projects.</p>
            <div className='flex flex-row justify-center'>
                <a href="#">
                    <FaLinkedin
                        className=" text-4xl mx-3 transition duration-300 cursor-pointer"
                    />
                </a>
                {/* <a href="https://github.com/graciar">  
                    <FaGithub 
                        className=" text-4xl mx-3 transition duration-300 cursor-pointer"
                    />
                </a> */}
                <a href="mailto:gracia.rumondor25@email.com">  
                    <IoMdMailOpen  
                        className=" text-4xl mx-3 transition duration-300 cursor-pointer"
                    />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact