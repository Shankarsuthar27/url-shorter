import React from 'react'; 



export default function Home() {
  return (
   <main>
     
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[100vh] md:min-h-[60vh] bg-zinc-200">
        
       
        <div className="flex flex-col gap-6 items-center justify-center p-8 text-center order-last md:order-first">

         
          <p className={`text-3xl lg:text-4xl font-bold`}>The best URL shortener in the Market</p>
          
        
          <p className="max-w-lg text-zinc-700">
            We are the best, straightforward URL shortener. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium suscipit ea architecto, quaerat laboriosam praesentium obcaecati accusamus cupiditate accusantium.
          </p>
          
          <div className='flex gap-4 justify-center'>
            <a 
              href="/shorten"
              className='bg-purple-500 shadow-lg px-6 py-2 rounded-lg font-bold text-white transform transition-transform hover:scale-105 no-underline'
            >
              Try Now
            </a>
            <a 
              href="/github"
              className='bg-gray-800 shadow-lg px-6 py-2 rounded-lg font-bold text-white transform transition-transform hover:scale-105 no-underline'
            >
              GitHub
            </a>
          </div>
        </div>
        
       
        <div className="flex justify-center items-center relative w-full min-h-[40vh] md:h-full order-first md:order-last p-8">

         
          <img 
            className="mix-blend-darken object-contain w-full h-auto max-h-[40vh] md:max-h-full" 
            alt="a vector graphic of a person renaming a file" 
            src={"/rename.jpg"} 
          />

        </div>
      </section>
    </main>
  );
}

