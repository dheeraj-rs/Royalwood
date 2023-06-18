import React, { useState } from 'react'
import { Fade as Hamburger } from 'hamburger-react'


function Home1() {
    const [isOpen, setOpen] = useState(false)
  return (
    <header className="bg-blue-gray-500">
    <div className="px-5 relative">
      <nav className="w-full flex  justify-between bg-light-blue-700">
        {/* logo */}
        <a className="flex text-2xl  items-center">
            <h1 className="font-extrabold ">RO<span className="text-lime-600">Y</span>AL</h1>
            <span className="font-thin">WOOD</span>
          </a>

        <button >
        <Hamburger direction="right" />
        </button>

        <div className="w-max flex px-4  h-16 absolute right-20 ">

          <ul className="bg-blue-gray-100 flex  ">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html"> About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="shop.html">Shop </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="furniture.html"> Furniture </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact us</a>
            </li>
          </ul>

          <div className="flex">
            <a href="">
              <img src="" alt=""/>
              <span>
                Login
              </span>
            </a>
            <form className=" bg-white my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
              <button className=" my-2 my-sm-0 " type="submit">000</button>
            </form>
          </div>
        </div>  

      </nav>
    </div>
  </header>
  )
}

export default Home1


