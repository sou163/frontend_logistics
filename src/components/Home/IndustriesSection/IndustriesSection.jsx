"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./IndustriesSection.module.css";

import industryCards from "@/data/industries";

const IndustriesSection = ({ onOpenModal }) => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const buttonControls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      buttonControls.start({
        opacity: 1,
        x: 0,
        transition: { delay: 0.6, duration: 1, ease: "easeOut" },
      });
    }
  }, [inView, buttonControls]);

  return (
    <section
      className={`container ${styles.industries}`}
      id="services"
      ref={sectionRef}
    >
      <h2>
        Solutions for <span>Every Sector</span>
      </h2>
      <p>From groceries to global brands, we adapt to your business needs</p>

      <Swiper
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: -30,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        className="mySwiper"
        grabCursor
        centeredSlides
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        navigation
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {industryCards.map((card, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className={styles.industryCard}>
              <img
                src={card.img}
                alt={card.alt}
                className={styles.industryImage}
              />
              <div className={styles.industryOverlay}>
                <div className={styles.overlayContent}>
                  <h1>{card.title}</h1>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div
        className={styles.btnContainer}
        initial={{ opacity: 0, x: -300 }}
        animate={buttonControls}
      >
        <button type="button" className={styles.ctaBtn} onClick={onOpenModal}>
          Let Us Help You
        </button>
      </motion.div>
    </section>
  );
};

export default IndustriesSection;
