import React from "react";
import styles from "@/styles/Homepage/Hero.module.css";
import Image from "next/image";
export default function Hero() {
  return (
    <section className={`${styles.sliderArea} relative overflow-hidden`}>
      <div className={styles.sliderPadding}>
        <div>
          <img
            src="/shape/shape1.png"
            className={`${styles.shape} ${styles.shape1}`}
          />
          <img
            src="/shape/shape2.png"
            className={`${styles.shape} ${styles.shape2}`}
          />
          <img
            src="/shape/shape3.png"
            className={`${styles.shape} ${styles.shape3}`}
          />
          <img
            src="/shape/shape4.png"
            className={`${styles.shape} ${styles.shape4}`}
          />
          <img
            src="/shape/shape5.png"
            className={`${styles.shape} ${styles.shape5}`}
          />
          <img
            src="/shape/shape6.png"
            className={`${styles.shape} ${styles.shape6}`}
          />
        </div>
        <div
          className={`${styles.singleSlider} ${styles.sliderHeight} flex items-center`}
        >
          <div className="container mx-auto sm:px-4">
            <div className="flex flex-wrap items-center justify-evenly">
              <div className="xl:w-2/5 pr-4 pl-4 lg:w-1/2 ">
                <div className={`${styles.sliderText}`}>
                  <h2>
                    <span>Effortlessly</span> Manages All Your Information
                  </h2>
                  <a href="#" className="font-extrabold btn btn-squ-bg">
                    Free trial
                  </a>
                </div>
              </div>
              <div className="xl:w-1/2 pr-4 xl:mx-1/6 lg:w-1/2 pl-4 hidden lg:block">
                <div
                  className="slider-img slider-img-2-1 mt-40 wow fadeInRight"
                  data-wow-delay="1.5s"
                >
                  <Image
                    src="/slider/sass.png"
                    alt="sass slider"
                    width={700}
                    height={700}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
