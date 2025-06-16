import React from 'react'
import ProjectItem from './ProjectItem'

function Project() {
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
        <p className='text-xl py-2 lg:text-2xl lg:py-5 font-bold tracking-widest'>Projects</p>
        <div>
        <p className='text-center text-sm lg:text-base'>check out my project code and documentation on <a href="https://github.com/graciar" className='underline hover:text-red-400'>GitHub</a>.</p>
        </div>
        <div className='w-full flex flex-col items-center lg:flex-row py-7'>
            <ProjectItem
                title="Inventory Management System"
                desc="A simple web app CRUD to manage stock and products."
                tech="PHP, MySQL, Bootstrap"
                link="https://github.com/graciar/CRUD"
            />

            <ProjectItem
                title="Event Management System"
                desc="A simple web app for managing and organizing events."
                tech="Laravel, MySQL, Bootstrap"
                link="https://github.com/graciar/laravel-crud"
            />
        </div>

    </div>
    </>
  )
}

export default Project