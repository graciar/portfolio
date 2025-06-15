import React from 'react'
import { FaGithub } from "react-icons/fa";
import ProjectItem from './ProjectItem'

function Project() {
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
        <p className='text-2xl font-bold py-5 tracking-widest'>Projects</p>
        <div>
        <p>check out my project code and documentation on GitHub <a href="https://github.com/graciar"className='underline hover:text-red-400'>here</a>.</p>
        </div>
        <div className='w-full flex py-7'>
            <ProjectItem
                title="Inventory Management System"
                desc="A simple web app CRUD to manage stock, products, and suppliers."
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