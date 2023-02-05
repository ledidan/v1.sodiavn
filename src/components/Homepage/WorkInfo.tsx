import React from "react";
import styles from "@/styles/Homepage/WorkInfo.module.css";
export default function WorkInfo() {
  return (
    <>
      <section className="pb-10 ">
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap items-center justify-center">
            <div className="lg:w-1/3 pr-4 pl-4">
              <div className={`${styles.featureContent} mb-28`}>
                <div className={`${styles.featureListIcon} mb-16`}>
                  <span />
                  <img src="/icons/fea-list.png" />
                </div>
                <h3>Runs faster, Costs less And never breaks</h3>
                <span>
                  Binged do forth have their which void in above moved all
                  brought is prese the mode ken him together
                </span>
                <p>
                  There evening days two forth let fruitful wherein yielding dry
                  for one waters of and over all divide over place, abundantly
                  Upon dominion i image seed gathered you
                </p>
                <div className="feature-list-btn">
                  <a href="#" className="btn btn-squ">
                    learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-3/2 pr-4 pl-4">
              <div className="featureImage pl-10 mb-28">
                <img src="/bg/fea-list-right-img.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-list-area relative">
        <div className="shape-action">
          <span className="shape shape-circle shapeC4 " />
        </div>
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap justify-center  items-center">
            <div className="lg:w-1/3 pr-4 pl-4 lg:order-2">
              <div className={`${styles.featureContent} mb-10`}>
                <div className={`${styles.featureListIcon} mb-24`}>
                  <span />
                  <img src="/icons/fea-list.png" />
                </div>
                <h3>Setting the Standard in Device Programming</h3>
                <span>
                  Binged do forth have their which void in above moved all
                  brought is prese the mode ken him together
                </span>
                <p>
                  There evening days two forth let fruitful wherein yielding dry
                  for one waters of and over all divide over place, abundantly
                  Upon dominion i image seed gathered you
                </p>
                <div className="feature-list-btn">
                  <a href="#" className="btn btn-squ">
                    learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2  pr-4 pl-4">
              <div className="featureImage-left pr-5 mb-28">
                <img src="/bg/fea-list-left-img.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
