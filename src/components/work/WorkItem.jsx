import React from 'react'

const WorkItem = ({year, title, duration, details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-indigo-200'>
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-indigo-800 rounded-full mt-2 -left-1.5 border-white' />
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='inline-block px-2 py-1 font-semibold text-white bg-indigo-900/90 rounded-md'>{year}</span>
                <span className='text-lg font-semibold text-indigo-950/90'>{title}</span>
                <span className='my-1 text-sm font-normal leading-none text-stone-400'>{duration}</span>
                </p>
                <p className='text-justify mt-1'>{details}</p>
        </li>
    </ol>
  )
}

export default WorkItem