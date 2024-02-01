"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

const Banner = () => {
  return (
    <>
      <div className="px-8">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <video
              className="w-full max-h-[calc(100vh-20vh)] object-cover"
              autoPlay
              muted
              loop
            >
              <source
                src="https://demos.reytheme.com/frankfurt/wp-content/uploads/sites/15/2019/11/video1.mp4"
                type="video/mp4"
              ></source>
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              className="w-full max-h-[calc(100vh-20vh)] object-cover"
              autoPlay
              muted
              loop
            >
              <source
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                type="video/mp4"
              ></source>
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-16 bg-[#EBF5FB] max-h-[calc(100vh-20vh)] justify-between">
              <section>
                <Image
                isBlurred
                // as={NextImage}
                fill
                alt="banner image"
                classNames="m-5"
                src="https://reydemos.b-cdn.net/frankfurt/wp-content/uploads/sites/15/2019/11/img1.jpg"/>
              
                <div className="absolute top-[20rem] left-[25rem] self-center z-40">
                  <h2 className="text-3xl relative hover:-translate-x-6 hover:pr-10 left-0 bottom-0 font-bold bg-clip-border p-4 bg-gray-100">
                    TABLES & CHAIRS <br />
                    <span className="text-sm text-left end font-bold">
                      DISCOVER
                    </span>
                  </h2>
                </div>
              </section>
              <section>
                <Image 
                isBlurred
                fill
                alt="banner image"
                src="https://reydemos.b-cdn.net/frankfurt/wp-content/uploads/sites/15/2019/11/img2.jpg"/>
             
                <div className="absolute top-40 right-[38rem]  z-40">
                  <h2 className="text-3xl relative right-0 font-bold bg-clip-border p-4 bg-gray-100">
                    TABLES & CHAIRS <br />
                    <span className="text-sm text-left end font-bold">
                      DISCOVER
                    </span>
                  </h2>
                </div>
              </section>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
