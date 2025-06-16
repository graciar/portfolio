import React from 'react'

function ProjectItem({title, desc, tech, link}) {
  return (
    <>
    <div className='w-9/12 lg:w-6/12 mx-2 p-5 justify-center shadow-lg hover:scale-[1.02] transition-transform duration-300 cursor-pointer'>
        <p className='text-lg font-semibold '>{title}</p>
        <p>{desc}</p><br />
        <p><strong>Tech:</strong> {tech}</p>
        <a href={link} target="_blank" className='underline text-center text-gray-500 py-2 text-xs hover:text-black'>View Code</a>
    </div>
    </>
)
}

export default ProjectItem