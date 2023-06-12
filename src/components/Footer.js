import React from "react";

function Footer() {
  return (
    <div className="sticky-0">
        <footer className="bg-gradient-to-r from-night to-navy">
        <h2 className="big-words" id="contact-me">Ways to Contact Me:</h2>

        <div className="contact-me">
            <ul>
                <li><a href="https://www.linkedin.com/in/marc-hamilton-488240192/">LinkedIn </a></li>
                <li><a href="https://github.com/Marcosauras">Github</a></li>
                <li>Mhamilton1300@outlook.com</li>
                <li>804.832.7988</li>
            </ul>
        </div>
        </footer>
    </div>
  );
}

export default Footer;