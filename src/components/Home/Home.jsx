import React, { useState } from 'react'
import { Fade as Hamburger } from 'hamburger-react'
function Home() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <header className='w-full h-16 px-5 py-3'>
                <nav className='flex'>
                    <a className="flex text-2xl  items-center">
                        <h1 className="font-extrabold ">RO<span className="text-lime-600">Y</span>AL</h1>
                        <span className="font-thin">WOOD</span>
                    </a>
                    <div className="w-full relative">
                        <div className={` ${isOpen ? "right-0" : "-right-[1500px]"}duration-500 w-full  hidden md:flex  items-center justify-between pl-10 absolute`}  >

                            <ul className="flex text-lg uppercase font-thin">
                                <li className="p-2">
                                    <a className="nav-link">Home</a>
                                </li>
                                <li className="p-2">
                                    <a className="nav-link"> About</a>
                                </li>
                                <li className="p-2">
                                    <a className="nav-link">Shop </a>
                                </li>
                                <li className="p-2">
                                    <a className="nav-link"> Furniture </a>
                                </li>
                                <li className="p-2">
                                    <a className="nav-link">Contact us</a>
                                </li>
                            </ul>

                            <div className="flex px-5 items-center gap-5">
                                <a href="">
                                    <img src="" alt="" />
                                    <span>
                                        Login
                                    </span>
                                </a>
                                <form className=" bg-white my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                    <button className=" my-2 my-sm-0 " type="submit">000</button>
                                </form>
                            </div>
                        </div>
                        <div >

                        </div>
                    </div>

                    <button><Hamburger direction="right" onToggle={setOpen} /></button>
                </nav>
            </header>

            { isOpen ?(<ul className="flex text-lg uppercase font-thin flex-col duration-500 bg-blue-gray-600">
                <li className="p-2">
                    <a className="nav-link">Home</a>
                </li>
                <li className="p-2">
                    <a className="nav-link"> About</a>
                </li>
                <li className="p-2">
                    <a className="nav-link">Shop </a>
                </li>
                <li className="p-2">
                    <a className="nav-link"> Furniture </a>
                </li>
                <li className="p-2">
                    <a className="nav-link">Contact us</a>
                </li>
            </ul>):''}

        </>
    )
}

export default Home