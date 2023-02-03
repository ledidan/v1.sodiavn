import React from "react";

export default function Services() {
  return (
    <section className="what-we-do-area pb-120 relative fix">
      <div className="shape-action">
        <span className="shape shape-circle shape-c-3 " />
        <img className="shape shape-wh-1" src="/shape/shape-sq.png" />
      </div>
      <div className="container mx-auto sm:px-4">
        <div className="flex flex-wrap ">
          <div className="lg:w-2/3 pr-4 pl-4 lg:mx-1/5">
            <div className="section-title-2 mb-70 text-center">
              <span>What We Do</span>
              <h2>In a World of Technology, People Make the Difference</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap ">
          <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 ">
            <div
              className="single-what-we-item text-center mb-30 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="what-icon">
                <span />
                <img src="/icons/what-1.png" />
              </div>
              <div className="what-content">
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
            <div
              className="single-what-we-item text-center mb-30 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="what-icon">
                <span />
                <img src="/icons/what-2.png" />
              </div>
              <div className="what-content">
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
            <div
              className="single-what-we-item text-center mb-30 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="what-icon">
                <span />
                <img src="/icons/what-3.png" />
              </div>
              <div className="what-content">
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
