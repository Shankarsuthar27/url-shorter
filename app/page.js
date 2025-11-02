import React from 'react'; // Using standard React import

// Removed Next.js specific imports for Image, localFont, and Link

export default function Home() {
  return (
   <main>
      {/* - We use `grid-cols-1` for mobile (stacking content vertically)
        - We switch to `grid-cols-2` on medium screens (`md:`) and up
        - `min-h-[100vh]` ensures it takes at least the full viewport height on mobile
        - `md:min-h-[60vh]` sets a minimum height for larger screens
      */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[100vh] md:min-h-[60vh] bg-zinc-200">
        
        {/* - This is the text content block
          - `order-last md:order-first` makes the text appear *below* the image on mobile
          - `p-8` adds padding
          - `text-center` and `items-center` center-aligns all content
        */}
        <div className="flex flex-col gap-6 items-center justify-center p-8 text-center order-last md:order-first">

          {/* - Removed the custom poppins font class, using Tailwind's defaults */}
          <p className={`text-3xl lg:text-4xl font-bold`}>The best URL shortener in the Market</p>
          
          {/* - `max-w-lg` constrains the width of the paragraph for better readability
            - `text-zinc-700` softens the text color slightly
          */}
          <p className="max-w-lg text-zinc-700">
            We are the best, straightforward URL shortener. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium suscipit ea architecto, quaerat laboriosam praesentium obcaecati accusamus cupiditate accusantium.
          </p>
          
          {/* - `justify-center` aligns the buttons in the middle
            - Replaced Next.js `Link` components with standard `a` tags
          */}
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
        
        {/* - This is the image block
          - `order-first md:order-last` makes the image appear *above* the text on mobile
          - `min-h-[40vh]` gives the image container a minimum height on mobile
          - `md:h-full` makes it fill the parent's height on desktop
        */}
        <div className="flex justify-center items-center relative w-full min-h-[40vh] md:h-full order-first md:order-last p-8">

          {/* - Replaced Next.js `Image` with a standard `img` tag
            - Added classes to control size and fit, mimicking the original props
          */}
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

