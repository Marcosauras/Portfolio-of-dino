import React from "react";
import Footer from "../components/Footer";
import ProfileImage from "../assets/Profile picture.jpg"

function AboutMe() {
  return (
    <div className="bg-gradient-to-b from-Dark_Blue via-Navy_Blue-500 to-Baby_Blue min-h-screen flex flex-col h-screen text-center">
        <section className="flex-grow content-center">
            <div className="rounded about-me-div my-24 p-4 m-8 grid md:grid-cols-2 place-items-center bg-night bg-opacity-50" id="about-me">
                <div className="px-3 py-1 w-8/12 rounded-full content-center bg-gradient-to-l from-Dark_Blue to-Baby_Blue">
                    <img className="profile content-center rounded-full" src={ProfileImage} alt ="Marc" />
                </div>
                <p className="about-me-p m-10 text-2xl">Hi, I'm Marc, a Sophomore at Oregon State University majoring in Applied Computer Science. I'm passionate about using my skills to help others and would love to apply my talents to make others safer.</p> 
            </div>    
        </section>

        <Footer />

    </div>
  );
}

export default AboutMe;