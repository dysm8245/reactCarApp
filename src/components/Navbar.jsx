import { useState } from "react"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }
  return (
    <>
        <nav className="flex grow h-12 bg-yellow-300">
            <div className="flex justify-start items-center grow">
                <h1 className="mx-16 font-bold">
                    Car Inventory
                </h1>
            </div>
            <div className="hidden sm:block justify-end items-center mt-3 mr-2">
                <ul className="inline-flex space-x-5">
                    <li className="hover:text-white">
                        <a href="/">Home</a>
                    </li>
                    <li className="hover:text-white">
                        <a href="/cars">Cars</a>
                    </li>
                    <li className="hover:text-white">
                        <a href="/signin">Sign-In</a>
                    </li>
                    <li className="hover:text-white">
                        <a href="/signup">Sign-Up</a>
                    </li>
                    <li className="hover:text-white">
                        <a href="/signout">Sign-Out</a>
                    </li>
                </ul>
            </div>
            <div className="flex sm:hidden justify-end items-center mr-2">
                <button onClick={handleOpen} className="w-5 h-5"><i className="fa-solid fa-bars"></i></button>
            </div>
        </nav>
        {open?(
            <div className="flex grow justify-end">
                <div className="grid grid-cols-1 sm:hidden absolute bg-slate-200">
                    <div className="flex w-32 border border-black justify-center rounded-lg">
                        <a href="/">Home</a>
                    </div>
                    <div className="flex w-32 border border-black justify-center rounded-lg">
                        <a href="/cars">Cars</a>
                    </div>
                    <div className="flex w-32 border border-black justify-center rounded-lg">
                        <a href="/signin">Sign-In</a>
                    </div>
                    <div className="flex w-32 border border-black justify-center rounded-lg">
                        <a href="/signup">Sign-Up</a>
                    </div>
                    <div className="flex w-32 border border-black justify-center rounded-lg">
                        <a href="/signout">Sign-Out</a>
                    </div>
                </div>
            </div>
        ):(
            <></>
        )}
        
    </>
  )
}

export default Navbar