import React from "react"

const Navbar=({theme,setTheme})=>{
    return (
        <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24,xl:px-40 sticky top-0 z-20 backup-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">

            <img  src={theme ==="dark"?assets.ClassNamelogo_dark:assets.logo} ClassName="w-32 sm:w-40" alt="" />

            <div className="">
                <a href="#"className="sm:hover:border-b">Home</a>

                 <a href="services"className="sm:hover:border-b">Services</a>
               
                 <a href="#our-work"className="sm:hover:border-b">Our Work</a>

                  <a href="#our-work"className="sm:hover:border-b">ontact Us</a>
            </div>

        </div>
    )
}

export default Navbar