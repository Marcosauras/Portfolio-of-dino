import React from "react";
// for the spring animations
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// profile Image about me
import ProfileImage from "../assets/Linked In Profile Picture.jpg"

function AboutMe() {
  return (
    <div className="card text-center">
        <section className="content-center">
            <div className="about-me-div my-24 m-8 grid md:grid-cols-2 place-items-center" id="about-me">
                <div className="px-3 py-1 w-8/12 rounded-full content-center bg-gradient-to-r from-sky-500 to-indigo-500">
                    <img className="profile content-center rounded-full" src={ProfileImage} alt ="Marc" />
                </div>
                <p className="about-me-p m-10 text-xl">You may be asking. Who is Marc Hamilton? Well that's what I'm here for. I'm 21 year old male with an amazing husband, 10 siblings and 2 pets, Foster (my cat)
                and Hamlet (my dog). Growing up in a big family has taught me how import it is to work together and how proper communication can help increase how quickly a task gets completed.
                </p> 
            </div>    
        </section>



    </div>
  );
}

export default AboutMe;