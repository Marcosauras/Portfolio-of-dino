import React from "react";
import AdoptAnimalsImg from "../assets/group-pets-dog-cat-bird-reptile-rabbit-isolated-whi_191971-5486.webp";

function MyProjects() {
  return (
    <div className="card text-center">
        <section> 
            <h2 className="big-words" id="My-Projects">My Projects</h2>

            <div className="work-links p-3 m-4 grid gap-4 place-items-center grid-cols-2">
                <figure className="rounded bg-gradient-to-r from-sky-500 to-indigo-500"> 
                    <a href="https://marcosauras.github.io/Adopt-Dont-Shop/">
                    <img className="object-cover p-1 rounded-lg " src={AdoptAnimalsImg} alt="Adopt-Dont-Shop"></img>
                    </a>
                    <figcaption className="text-center"><a href="https://marcosauras.github.io/Adopt-Dont-Shop/" >Adopt don't shop</a></figcaption>
                </figure>
                <figure className="rounded bg-gradient-to-r from-sky-500 to-indigo-500 col-span-1"> 
                    <a href="https://marcosauras.github.io/Horiseon/">
                    <img className="object-cover p-1 rounded-lg" src="./assets/images/Horiseon-Home-page-image.png" alt="Horiseon's home page"></img>
                    </a>
                    <figcaption className ="text-center"><a href="https://marcosauras.github.io/Horiseon/">Horiseon Webpage</a></figcaption>
                </figure>
                <figure className="rounded bg-gradient-to-r from-sky-500 to-indigo-500 col-span-1"> 
                    <a href="https://marcosauras.github.io/prework-study-guide/">
                    <img className="object-cover p-1 rounded-lg" src="./assets/images/Pen and paper.png" alt="Pen and paper"></img>
                    </a>
                    <figcaption className ="text-center"><a href="https://marcosauras.github.io/prework-study-guide/">Prework Study Guide</a></figcaption>
                </figure>
                <figure className="rounded bg-gradient-to-r from-sky-500 to-indigo-500 col-span-1"> 
                    <a href="https://lumogrindz.herokuapp.com/">
                    <img className="object-cover p-1 rounded-lg" src="./assets/images/Christmas-lights.png" alt="LumoGrindz"></img>
                    </a>
                    <figcaption className ="text-center"><a href="https://lumogrindz.herokuapp.com/"></a>LumoGrindz</figcaption>
                </figure>
                <figure className="rounded bg-gradient-to-r from-sky-500 to-indigo-500 col-span-1"> 
                    <a href="#">
                    <img className="object-cover p-1 rounded-lg" src="./assets/images/Beach-Vacation.png" alt="Towel on the sand on a vacation"></img>
                    </a>
                    <figcaption className ="text-center"><a href="#">(Fake link) Vacation spots</a></figcaption>
                </figure>
                <figure className="rounded bg-gradient-to-r from-sky-500 to-indigo-500 col-span-1"> 
                    <a href="https://lumogrindz.herokuapp.com/">
                    <img className="object-cover p-1 rounded-lg" src="./assets/images/box-of-toys.png" alt="LumoGrindz (working application)"></img>
                    </a>
                    <figcaption className ="text-center"><a href="#">(Fake link) Toy store</a></figcaption>
                </figure>
            </div>

        </section>
    </div>
  );
}

export default MyProjects;