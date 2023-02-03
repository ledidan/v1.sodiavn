import React from "react";
import styles from "@/styles/Homepage/Feature.module.css";
export default function Feature() {
  return (
    <section className="relative pt-10 pb-10 overflow-hidden">
      <div>
        <span className="shape shape-circle shape-c-2" />
        <img className="shape shape-af-1  " src="/shape/shape-tri.png" />
        <img className="shape shape-af-2 " src="/shape/shape-zigzag.png" />
      </div>
      <div className="container mx-auto sm:px-4">
        <div className="flex flex-wrap justify-center ">
          <div className="lg:w-2/3 pr-4 pl-4 lg:mx-1/5">
            <div className="section-title-2 mb-70 text-center">
              <span>Awesome feature</span>
              <h2>
                Sometimes the best way to envision the future is to invent it.
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap  items-center">
          <div className="lg:w-1/2 pr-4 pl-4">
            <div className="feature-img wow fadeInLeft" data-wow-delay="1s">
              <img src="/bg/fea-img.png" />
            </div>
          </div>
          <div className="lg:w-1/2 pr-4 pl-4">
            <div className="flex flex-wrap  feature-parents">
              <div className="md:w-1/2 pr-4 pl-4">
                <div
                  className="single-feature-item mb-50 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="feature-icon mb-20">
                    <span />
                    <img src="/icons/fea-icon-1.png" />
                  </div>
                  <div className="feature-content">
                    <h4>User Analytics</h4>
                    <p>
                      Nascetur nisi luctus lacinian torque netus praesent proin
                      pede.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 pr-4 pl-4">
                <div
                  className="single-feature-item mb-50 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="feature-icon mb-20">
                    <span />
                    <img src="/icons/fea-icon-2.png" />
                  </div>
                  <div className="feature-content">
                    <h4>Multiple Layouts</h4>
                    <p>
                      Nascetur nisi luctus lacinian torque netus praesent proin
                      pede.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 pr-4 pl-4">
                <div
                  className="single-feature-item mb-50 wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="feature-icon mb-20">
                    <span />
                    <img src="/icons/fea-icon-3.png" />
                  </div>
                  <div className="feature-content">
                    <h4>Responsive design</h4>
                    <p>
                      Nascetur nisi luctus lacinian torque netus praesent proin
                      pede.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 pr-4 pl-4">
                <div
                  className="single-feature-item mb-50 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <div className="feature-icon mb-20">
                    <span />
                    <img src="/icons/fea-icon-4.png" />
                  </div>
                  <div className="feature-content">
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
      </div>
    </section>
  );
}
