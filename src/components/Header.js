import React from "react";

function Header() {
  return (
    <div className="card text-center">
        <header className="grid bg-gradient-to-r from-sky-500 to-indigo-500">
            <h1 className="headertext grid justify-items-center justify-center m-3 text-4xl"> Marc Hamilton </h1>
            <nav className="">
                <ul className="header-nav grid justify-center sm:grid-cols-4 m-4">
                    <li><a href="/">About Me</a> </li>
                    <li><a href="/My-Projects">My Projects</a> </li>
                    <li><a href="#contact-me">Contact Me</a> </li>
                    <li><a href="#Resume">Resume</a> </li>
                </ul>
            </nav>
            
        </header>
    </div>
  );
}

export default Header;