import React from 'react'

const hero = () => {
  return (
    <div>

<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="Project" src="/project1.png"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900">This is my static resume project</h1>
      <p className="mb-8 leading-relaxed">By utilizing core typescripts alone with HTML & CSS I made Static resume builder after getting a lot of hard work on it and by ulitizing by all energy I delivered my best.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href="https://github.com/Sameer98764" target='_blank'> Visit My Github</a></button>
        
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default hero