import React from "react";
import Footer from "../components/Footer";
import ProfileImage from "../assets/Linked In Profile Picture.jpg"

function AboutMe() {
  return (
    <div className="flex flex-col h-screen text-center">
        <section className="flex-grow content-center">
            <div className="about-me-div my-24 m-8 grid md:grid-cols-2 place-items-center" id="about-me">
                <div className="px-3 py-1 w-8/12 rounded-full content-center bg-gradient-to-r from-night to-navy">
                    <img className="profile content-center rounded-full" src={ProfileImage} alt ="Marc" />
                </div>
                <p className="about-me-p m-10 text-xl">Tacos taste good</p> 
            </div>    
        </section>

        <Footer />

    </div>
  );
}

export default AboutMe;