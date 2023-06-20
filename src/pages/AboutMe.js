import React from "react";
import Footer from "../components/Footer";
import ProfileImage from "../assets/Linked In Profile Picture.jpg"

function AboutMe() {
  return (
    <div className="bg-peach min-h-screen flex flex-col h-screen text-center">
        <section className="flex-grow content-center">
            <div className="rounded about-me-div my-24 p-4 m-8 grid md:grid-cols-2 place-items-center bg-night bg-opacity-50" id="about-me">
                <div className="px-3 py-1 w-8/12 rounded-full content-center bg-gradient-to-r from-night to-navy">
                    <img className="profile content-center rounded-full" src={ProfileImage} alt ="Marc" />
                </div>
                <p className="about-me-p m-10 text-xl">Hi, I'm a full stack developer still trying to figure out how I want to use my talents. I love animals and would love to be able to use my talents to help them, I haven't yet figured it out however I know i will. When I figure it out I hope you will be there to see.</p> 
            </div>    
        </section>

        <Footer />

    </div>
  );
}

export default AboutMe;