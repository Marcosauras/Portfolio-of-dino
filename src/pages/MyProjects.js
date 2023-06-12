import React from "react";
import Footer from "../components/Footer";

import AdoptAnimalsImg from "../assets/group-pets-dog-cat-bird-reptile-rabbit-isolated-whi_191971-5486.webp";
import lights from "../assets/Christmas-lights.png";
// import corgiButt from "../assets/corgi_butt.png";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCube } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

function MyProjects() {
  return (
    <div className="bg-peach card text-center ">
          <h2 className="big-words text-4xl p-4" id="My-Projects">
            My Projects
          </h2>

          <div className="work-links p-3 m-4 grid gap-4 place-items-center grid-cols-1 xl:grid-cols-2">

            {/* Adopt don't shop */}
            <figure className="grid p-3 rounded bg-night bg-opacity-50 sm:grid-cols-2">
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
                      src="https://swiperjs.com/demos/images/nature-3.jpg"
                      alt="temp"
                    />
                  </SwiperSlide>
                </Swiper>
              </a>
              <figcaption className="text-center m-4">
                <a href="https://marcosauras.github.io/Adopt-Dont-Shop/" rel="noreferrer" target="_blank">
                  Adopt don't shop
                  <p className="m-2 block">
                    Find animals (dogs, cats, rabbits and birds) up for adoption
                    near you based off your zip code,
                  </p>
                </a>
              </figcaption>
            </figure>
            {/* LumoGrindz */}
            <figure className="grid p-3 rounded bg-night bg-opacity-50 sm:grid-cols-2 w-92">
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
                      src="https://swiperjs.com/demos/images/nature-4.jpg"
                      alt="temp"
                    />
                  </SwiperSlide>
                </Swiper>
              </a>
              <figcaption className="text-center m-4">
                <a href="https://lumogrindz.herokuapp.com/" rel="noreferrer" target="_blank"> LumoGrindz </a>
                <p className="m-2 block">
                  LumaGrindz is a website for workers to share information about
                  their jobs, so other workers can better understand the tasks
                  they will be handling.
                </p>
              </figcaption>
            </figure>
          </div>
          
        <Footer />
    </div>
  );
}

export default MyProjects;