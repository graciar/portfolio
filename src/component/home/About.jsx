import React from 'react'

function About() {
  return (
    <>
    <div className='bg-white flex items-center '>
        <div className=' flex flex-col items-center'>

            <div className="text-lg text-justify tracking-wide leading-relaxed rounded-xl">
                <p className=''>
                    I'm a student currently pursuing a degree in Informatics at President University, I’m actively learning and building projects focusing on the back-end.
                    My journey into development started through university projects, where I started using tools like HTML, CSS, JavaScript, and frameworks such as React and Tailwind CSS. 
                    My enthusiasm has led me to explore and now focus more on backend development. 
                    For my concentration, I chose Cyber Security, and I spent a whole semester focusing on it. So, I got to learn a lot about keeping stuff secure.
                </p><br />
                <p>
                    While I don’t have official industry experience yet, I’ve worked on academic and self-initiated projects that have helped me sharpen my skills and deepen my understanding of modern web development. 
                    I’m currently seeking internship opportunities where I can grow as a developer, collaborate with others, and contribute to meaningful, real-world projects.
                </p><br />
                
            </div>

            {/* <div className='my-3 py-2 px-5 border-blue-900 bg-blue-900 tracking-wider text-gray-50 rounded-md'>
                <a href="">My Resume</a>
            </div> */}
        </div>
    </div>
    </>
  )
}

export default About