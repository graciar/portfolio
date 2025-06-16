import React from 'react'

function Skills() {
  return (
    <div className=" bg-white flex flex-col items-center py-12">
        <p className="text-xl lg:text-2xl font-semibold mb-8 tracking-wide ">Here's the tech stack I use to build my web projects...</p>
        
        <div className=''>
            <ul className="w-full flex flex-col lg:flex-row ">
                <li className="p-7 lg:w-4/12">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Backend</h3>
                <p className="text-gray-700">Flask, Laravel, MySQL, PostgreSQL</p>
                </li>

                <li className="p-7 lg:w-4/12">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Frontend</h3>
                <p className="text-gray-700">React, Tailwind</p>
                </li>

                <li className="p-7 lg:w-4/12">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Tools</h3>
                <p className="text-gray-700">Git, GitHub</p>
                </li>
            </ul>
        </div>
        
    </div>
  );

}

export default Skills