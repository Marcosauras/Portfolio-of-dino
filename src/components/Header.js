import React from "react";

function Header() {
  return (
    <div className="card text-center">
        <header className="grid bg-night">
            <h1 className="header-text grid justify-items-center justify-center m-3 text-4xl"> Marc Hamilton </h1>
            <nav className="">
                <ul className="header-nav grid justify-center sm:grid-cols-3 m-4">
                    <li><a className="hover:text-gradient " href="/">About Me</a> </li>
                    <li><a className="hover:text-gradient " href="/My-Projects">My Projects</a> </li>
                    <li><a className="hover:text-gradient " href="/contact-me">Contact Me</a> </li>
                </ul>
            </nav>
            
        </header>
    </div>
  );
}

export default Header;