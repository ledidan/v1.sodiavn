import React from "react";
import styles from "@/styles/Homepage/Feature.module.css";
import classNames from "classnames";
export default function Feature() {
  return (
    <section className="relative pt-10 pb-10 overflow-hidden">
      <div>
        <span
          className={classNames(
            styles.shape,
            styles.shapeCircle,
            styles.shapeC2
          )}
        />
        <img
          className={classNames(styles.shape, styles.shapeAf1)}
          src="/shape/shape-tri.png"
        />
        <img
          className={classNames(styles.shape, styles.shapeAf)}
          src="/shape/shape-zigzag.png"
        />
      </div>
      <div className="container mx-auto sm:px-4">
        <div className="flex flex-wrap justify-center ">
          <div className="lg:w-2/3 pr-4 pl-4 lg:mx-1/5">
            <div className={`${styles.sectionTitle} mb-16 text-center`}>
              <span>Awesome feature</span>
              <h2>
                Sometimes the best way to envision the future is to invent it.
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center ">
          <div className="lg:w-1/2 pr-4 pl-4">
            <img src="/bg/fea-img.png" />
          </div>
          <div
            className={`${styles.featureParents} flex flex-wrap lg:w-1/2 pr-4 pl-4`}
          >
            <div className="md:w-1/2 pr-3 pl-4">
              <div className={`${styles.singleItem} mb-10`}>
                <div className={`${styles.featureIcon} mb-2`}>
                  <span />
                  <img src="/icons/fea-icon-1.png" />
                </div>
                <div className={styles.featureContent}>
                  <h4>User Analytics</h4>
                  <p>
                    Nascetur nisi luctus lacinian torque netus praesent proin
                    pede.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 pr-4 pl-4">
              <div className={`${styles.singleItem} mb-12`}>
                <div className={`${styles.featureIcon} mb-5`}>
                  <span />
                  <img src="/icons/fea-icon-2.png" />
                </div>
                <div className={styles.featureContent}>
                  <h4>Multiple Layouts</h4>
                  <p>
                    Nascetur nisi luctus lacinian torque netus praesent proin
                    pede.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 pr-4 pl-4">
              <div className={`${styles.singleItem} mb-12`}>
                <div className={`${styles.featureIcon} mb-5`}>
                  <span />
                  <img src="/icons/fea-icon-3.png" />
                </div>
                <div className={styles.featureContent}>
                  <h4>Responsive design</h4>
                  <p>
                    Nascetur nisi luctus lacinian torque netus praesent proin
                    pede.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 pr-4 pl-4">
              <div className={`${styles.singleItem} mb-12`}>
                <div className={`${styles.featureIcon} mb-5`}>
                  <span />
                  <img src="/icons/fea-icon-4.png" />
                </div>
                <div className={styles.featureContent}>
                  <h4>Best Supported</h4>
                  <p>
                    Nascetur nisi luctus lacinian torque netus praesent proin
                    pede.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
