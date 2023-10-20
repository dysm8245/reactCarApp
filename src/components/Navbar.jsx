
const Navbar = () =>{

    return(
        <nav className="flex grow h-12 bg-yellow-300">
            <div className="flex justify-start items-center grow">
                <h1 className="mx-16 font-bold">
                    Car Inventory
                </h1>
            </div>
            <div className="flex justify-end items-center">
                <ul className="inline-flex">
                    <li className="mx-5 hover:text-white">
                        <a href="/">Home</a>
                    </li>
                    <li className="mx-5 hover:text-white">
                        <a href="/cars">Cars</a>
                    </li>
                    <li className="mx-5 hover:text-white">
                        <a href="/signin">Sign-In</a>
                    </li>
                    <li className="mx-5 hover:text-white">
                        <a href="/signup">Sign-Up</a>
                    </li>
                    <li className="mx-5 hover:text-white">
                        <a href="/signout">Sign-Out</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar