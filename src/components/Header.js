import React from "react";

function Header() {
  return (
    <div className="card text-center">
        <header className="grid bg-Dark_Blue">
            <h1 className="header-text grid justify-items-center justify-center m-3 text-4xl"> Marc Hamilton </h1>
            <nav className="">
                <ul className="header-nav grid justify-center sm:grid-cols-2 m-4">
                    <li><a className="mb-5 rounded inline-block px-2 py-1 sm:px-7 sm:py-4 bg-Baby_ text-white font-medium text-sm leading-snug uppercase hover:bg-Navy_Blue  hover:text-Baby_Blue focus:bg-Navy_Blue focus:outline-none focus:ring-0 active:bg-Navy_Blue transition duration-150 ease-in-out" href="/">About Me</a> </li>
                    <li><a className="mb-5 rounded inline-block px-2 py-1 sm:px-7 sm:py-4 bg-Baby_ text-white font-medium text-sm leading-snug uppercase hover:bg-Navy_Blue  hover:text-Baby_Blue focus:bg-Navy_Blue focus:outline-none focus:ring-0 active:bg-Navy_Blue transition duration-150 ease-in-out" href="/My-Projects">My Projects</a> </li>
                </ul>
            </nav>
            
        </header>
    </div>
  );
}

export default Header;