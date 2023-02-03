import React from "react";
import styles from "@/styles/Homepage/Service.module.css";
import classNames from "classnames";
export default function Services() {
  return (
    <section className="pb-28 relative overflow-hidden ">
      <div className="shape-action">
        <span
          className={classNames(
            styles.shape,
            styles.shapeCircle,
            styles.shapeC3
          )}
        />
        <img
          className={classNames(styles.shape, styles.shapeW1)}
          src="/shape/shape-sq.png"
        />
      </div>
      <div className="container mx-auto sm:px-4">
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-2/3 pr-4 pl-4 lg:mx-1/5">
            <div className={`${styles.sectionTitle} mb-70 text-center`}>
              <span>What We Do</span>
              <h2>In a World of Technology, People Make the Difference</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-20 justify-center items-center">
          <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 ">
            <div className={`${styles.service} text-center`}>
              <div className={styles.whatIcon}>
                <span />
                <img src="/icons/what-1.png" />
              </div>
              <div className={styles.whatContent}>
                <h4>Market Research</h4>
                <p>
                  Fly two don't saying man day one made that darkness shall
                  signs. Man into sea give ever winged reple
                </p>
                <a href="#">More about research</a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 ">
            <div className={`${styles.service} text-center`}>
              <div className={styles.whatIcon}>
                <span />
                <img src="/icons/what-2.png" />
              </div>
              <div className={styles.whatContent}>
                <h4>Creative Design</h4>
                <p>
                  Fly two don't saying man day one made that darkness shall
                  signs. Man into sea give ever winged reple
                </p>
                <a href="#">More about research</a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 ">
            <div className={`${styles.service} text-center `}>
              <div className={styles.whatIcon}>
                <span />
                <img src="/icons/what-3.png" />
              </div>
              <div className={styles.whatContent}>
                <h4>Software Development</h4>
                <p>
                  Fly two don't saying man day one made that darkness shall
                  signs. Man into sea give ever winged reple
                </p>
                <a href="#">More about research</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
