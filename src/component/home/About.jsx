import React from 'react'

function About() {
  return (
    <>
    <div className='flex items-center '>
        <div className='flex flex-col items-center'>

            <div className="text-lg text-justify tracking-wide leading-relaxed rounded-xl">
                <p className=''>
                    I'm a student currently pursuing a degree in Informatics at President University, I’m actively learning and building projects focusing on the back-end.
                    My journey into development started through university projects, where I started using tools like HTML, CSS, JavaScript, and frameworks such as React and Tailwind CSS. 
                    Currently, I focus on backend development and learn by working on hands-on projects.
                    For my concentration, I chose Cyber Security, and I spent a whole semester focusing on it. So, I got to learn a lot about keeping stuff secure.
                </p><br />
                <p>
                    While I don’t have official industry experience yet, I’ve worked on academic and self-initiated projects that have strengthened my skills and deepen my understanding of web development. 
                    I’m currently seeking internship opportunities where I can grow as a developer, collaborate with others, and contribute to real-world projects. You can find my resume <a href="#" className='underline hover:text-red-400'>here</a> for more details.
                </p><br />
                
            </div>

        </div>
    </div>
    </>
  )
}

export default About