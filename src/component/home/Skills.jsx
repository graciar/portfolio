import React from 'react'

function Skills() {
  return (
    <div className=" bg-white flex flex-col items-center py-12">
        <h2 className="text-2xl font-semibold mb-8 tracking-wide ">Here's the tech stack I use to build my web projects...</h2>
        
        <div className=''>
            <ul className="w-full flex flex-row">
                {/* Backend */}
                <li className="p-7">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Backend</h3>
                <p className="text-gray-700">Flask, Laravel, MySQL, PostgreSQL</p>
                </li>

                {/* Frontend */}
                <li className="p-7">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Frontend</h3>
                <p className="text-gray-700">HTML, CSS, JavaScript, React, Tailwind</p>
                </li>

                {/* Tools */}
                <li className="p-7">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Tools</h3>
                <p className="text-gray-700">Git, GitHub</p>
                </li>
            </ul>
        </div>
        
    </div>
  );

}

export default Skills