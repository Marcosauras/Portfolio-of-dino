import React from "react";
import Footer from "../components/Footer";
// photos for adopt-don't-shop
import AdoptAnimalsImg from "../assets/group-pets-dog-cat-bird-reptile-rabbit-isolated-whi_191971-5486.webp";
import dog from "../assets/Screenshot of dog for adoption.png"
import cat from "../assets/cat-for-adoption.png"
// photos for LumoGrindz
import lights from "../assets/Christmas-lights.png";
import bee from "../assets/LumoGrindz_logo.png";
// import corgiButt from "../assets/corgi_butt.png";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCube } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

function MyProjects() {
  return (
    <div className="flex flex-col h-screen text-center bg-gradient-to-b from-Dark_Blue to-Baby_Blue">
          <h2 className="big-words text-4xl p-4" id="My-Projects">
            My Projects
          </h2>

          <div className="work-links p-3 m-4 flex-grow grid gap-4 place-items-center grid-cols-1 xl:grid-cols-2">

            {/* Adopt don't shop */}
            <figure className="grid p-3 rounded bg-Navy_Blue bg-opacity-50 sm:grid-cols-2">
              <a href="https://marcosauras.github.io/Adopt-Dont-Shop/" rel="noreferrer" target="_blank">
                <Swiper
                  effect={"cube"}
                  grabCursor={true}
                  loop={true}
                  autoplay={{
                    delay: 4850,
                    disableOnInteraction: false,
                  }}
                  cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                  }}
                  pagination={true}
                  navigation={true}
                  modules={[EffectCube, Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      className="object-cover w-full h-full"
                      src={AdoptAnimalsImg}
                      alt="Adopt-Dont-Shop"
                    ></img>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={dog}
                      alt="brown dog for adoption"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={cat}
                      alt="black cat for adoption"
                    />
                  </SwiperSlide>
                </Swiper>
              </a>
              <figcaption className="text-center m-4 ">
                <a href="https://marcosauras.github.io/Adopt-Dont-Shop/" rel="noreferrer" target="_blank" className="font-bold hover:text-night">
                  Adopt don't shop
                  </a>
                  <p className="m-2 block ">
                    Find animals (dogs, cats, rabbits and birds) up for adoption
                    near you based off your zip code,
                  </p>
                  <p>Click here to see how my team and I created this website</p>
                <a href="https://github.com/Marcosauras/Adopt-Dont-Shop?organization=Marcosauras&organization=Marcosauras" rel="noreferrer" target="_blank" className="font-bold hover:text-night"> Adopt Don't Shop Github </a>

              </figcaption>
            </figure>
            {/* LumoGrindz */}
            <figure className="grid p-3 rounded bg-Navy_Blue bg-opacity-50 sm:grid-cols-2 w-92">
              <a href="https://lumogrindz.herokuapp.com/" rel="noreferrer" target="_blank">
                <Swiper
                  effect={"cube"}
                  grabCursor={true}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                  }}
                  pagination={true}
                  navigation={true}
                  modules={[EffectCube, Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      className="object-cover w-full h-full"
                      src={lights}
                      alt="LumoGrindz"
                    ></img>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={bee}
                      alt="yellow bee logo"
                    />
                  </SwiperSlide>
                </Swiper>
              </a>
              <figcaption className="text-center m-4">
                <a href="https://lumogrindz.herokuapp.com/" rel="noreferrer" target="_blank" className="font-bold hover:text-night"> LumoGrindz </a>
                <p className="m-2 block">
                  LumaGrindz is a website for workers to share information about
                  their jobs, so other workers can better understand the tasks
                  they will be handling.
                </p>
                <p>Click here to see how my team and I created this website</p>
                <a href="https://github.com/Marcosauras/LumoGrindz?organization=Marcosauras&organization=Marcosauras" rel="noreferrer" target="_blank" className="font-bold hover:text-night"> LumoGrindz Github </a>

              </figcaption>


            </figure>
          </div>
          
        <Footer />
    </div>
  );
}

export default MyProjects;