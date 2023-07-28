import React from 'react'

const ProjectItem = ({ img , title, dev, hv, hc}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-indigo-400 rounded-xl group hover:bg-gradient-to-r from-indigo-200 to-indigo-900'>
      <img src={img} alt={title} className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block w-full h-full px-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-3xl font-bold text-white tracking-wider text-center pt-2 h-auto'>
          {title}
        </h3>
        <p className='pb-2 pt-2 text-white text-center'>{dev}</p>
        <div className='max-w-[200px] flex justify-around m-auto'>
        <a href={hv} className='w-[80px]'>
          <p className='text-center p-1 px-4 rounded-lg bg-white text-indigo-800 font-bold cursor-pointer text-lg hover:scale-110  duration-200 '>View</p>
        </a>
        <a href={hc} className='w-[80px]'>
          <p className='text-center p-1 px-4 rounded-lg bg-white text-indigo-800 font-bold cursor-pointer text-lg hover:scale-110  duration-200 '>Code</p>
        </a>  
        </div>    
      </div>
    </div>
  )
}

export default ProjectItem