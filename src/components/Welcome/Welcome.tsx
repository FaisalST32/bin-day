import React from "react";
import { IonButton, IonicSlides } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Scrollbar } from "swiper/modules";
import { Swiper as SwiperInterface } from "swiper";
import { useState } from "react";
import "./Welcome.css";
import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@ionic/react/css/ionic-swiper.css";
import binImage from "../../assets/bin.jpg";

export const Welcome: React.FC = () => {
  const [slidesRef, setSlidesRef] = useState<SwiperInterface>();

  const slideWillChange = () => {
    console.log("Slide will change");
  };

  const slideDidChange = () => {
    console.log("Slide did change");

    if (!slidesRef) return;

    console.table({
      isBeginning: slidesRef.isBeginning,
      isEnd: slidesRef.isEnd,
    });
  };
  return (
    <Swiper
      modules={[Keyboard, Pagination, Scrollbar, Pagination, IonicSlides]}
      pagination={true}
      style={{ height: "100%" }}
    >
      <SwiperSlide>
        <div className="slide">
          <div className="image-container">
            <img src={new URL("../../assets/bin.jpg", import.meta.url).href} />
          </div>
          <div className="logo-container">
            <img
              src={new URL("../../assets/Bin_Day.png", import.meta.url).href}
            />
          </div>
          <div className="slide-text">
            <div>Welcome to Bin Day!</div>
            <br />
            <div>
              The answer to the question, <em>"Is it bin day today, honey?"</em>
            </div>
          </div>
          <div className="button">
            <IonButton color="danger">Take me there!</IonButton>
          </div>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide> */}
    </Swiper>
  );
};
