import React from 'react';
import magi from '../assets/images/magi-about-image.png'

const About = () => {
  const whatIDo = [
    {
      icon: "bx-laptop",
      heading: 'Full Stack Development',
      content: 'Building complete web applications from database and backend logic to responsive frontend interfaces.'
    },
    {
      icon: "bx-code-curly",
      heading: 'Backend Development',
      content: 'Developing REST APIs and server-side applications using Java, Spring Boot, PHP, and CodeIgniter 4.'
    },
    {
      icon: "bx-code-alt",
      heading: 'Frontend Development',
      content: 'Creating responsive and user-friendly interfaces using HTML, CSS, JavaScript, React.js, jQuery, and AJAX.'
    },
    {
      icon: "bx-data",
      heading: 'Database Development',
      content: 'Designing MySQL databases, writing queries and joins, working with stored procedures, and optimizing database operations.'
    },
    {
      icon: "bx-link",
      heading: 'API & System Integration',
      content: 'Integrating REST APIs and external hardware systems such as eSSL biometric devices into business applications.'
    },
  ]

  return (
    <section id='about' className='container px-6 py-8 md:p-10 lg:p-15 mx-auto w-full mt-25'>
      <div className='grid lg:grid-cols-2 grid-cols-reverse gap-5 m-auto'>
        <div className="flex items-center justify-center">
          <div className='w-[80%]  overflow-hidden rounded-3xl glow-border '>
            <img className='w-full animate-fade-in animation-delay-100' src={magi} alt="Magendiran" />
          </div>
        </div>
        <div className=''>
          <h2 className='text-primary text-4xl md:text-5xl font-bold text-center md:text-start glow-text mt-5 md:mt-0'>About Me</h2>
          <p className='text-[18px] my-4 leading-relaxed animate-fade-in animation-delay-200 text-muted-foreground'>I'm a Full Stack Developer with 1.5+ years of hands-on experience building enterprise web applications, HRMS platforms, REST APIs, and business-oriented web solutions.</p>
          <p className='text-[18px] my-4 leading-relaxed animate-fade-in animation-delay-300 text-muted-foreground'>My development experience spans Java, Spring Boot, PHP, CodeIgniter 4, JavaScript, React.js, and MySQL.</p>
          <p className='text-[18px] my-4 leading-relaxed animate-fade-in animation-delay-400 text-muted-foreground'>At my previous role, I worked on production applications used by real organizations, including an HRMS that manages employee records, attendance, payroll, and accounts. I also integrated an eSSL biometric device to automate attendance collection.</p>
          <p className='text-[18px] my-4 leading-relaxed animate-fade-in animation-delay-500 text-muted-foreground'>I enjoy working across the complete development cycle — understanding requirements, designing database structures, developing backend logic, creating responsive interfaces, integrating APIs, testing, and improving existing applications.</p>
          <p className='text-[18px] my-4 leading-relaxed animate-fade-in animation-delay-600 text-muted-foreground'>I'm currently strengthening my expertise in React.js, JWT-based security, and cloud deployment.</p>
        </div>
      </div>
      <div className="mt-15 md:mt-25">
        <div className='mb-5 md:mb-0'>
          <h3 className='text-center text-2xl font-bold text-primary'>What I Do</h3>
        </div>
        <div className="md:p-10  w-full max-w-[1020px] flex flex-col gap-5 mx-auto ">
          {whatIDo.map((data, idx) => (
            <div className='bg-secondery rounded-3xl px-5 py-4 flex gap-5 box-shadow'>
              <div className=''>
                <div className='w-10 h-10 rounded-xl  bg-primary/20 flex items-center justify-center'>
                  <i className={`bx ${data.icon} text-2xl text-primary`} ></i>
                </div>
              </div>
              <div>
                <h3 className='text-xl mb-3'>{data.heading}</h3>
                <p className='text-muted-foreground'>{data.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About