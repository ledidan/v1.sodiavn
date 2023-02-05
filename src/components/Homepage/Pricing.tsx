import React from "react";
import styles from "@/styles/Homepage/Pricing.module.css";
import Image from "next/image";
interface PricePlan {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  checkIcon: String[];
  unCheckIcon: String[];
}
const pricePlan: PricePlan[] = [
  {
    id: 1,
    imageUrl: "/price/price-tab1.png",
    name: "Standard Plan",
    price: 49,
    checkIcon: ["2 Team Members", "20GB Cloud Storage", "Integration help"],
    unCheckIcon: [
      "Sketch Files",
      "API Access",
      "Complete documentation",
      "24x7 phone & email support",
    ],
  },
  {
    id: 2,
    name: "Professional Plan",
    imageUrl: "/price/price-tab2.png",
    price: 60,
    checkIcon: ["2 Team Members", "20GB Cloud Storage", "Integration help"],
    unCheckIcon: [
      "Sketch Files",
      "API Access",
      "Complete documentation",
      "24x7 phone & email support",
    ],
  },
  {
    id: 3,
    name: "Enterprise Plan",
    imageUrl: "/price/price-tab3.png",
    price: 100,
    checkIcon: ["2 Team Members", "20GB Cloud Storage", "Integration help"],
    unCheckIcon: [
      "Sketch Files",
      "API Access",
      "Complete documentation",
      "24x7 phone & email support",
    ],
  },
];
export default function Pricing() {
  return (
    <section className="relative pt-4 pb-10">
      <div>
        <img className="shape shape-pr-1" src="/shape/shape-c-1.png" />
        <img className="shape shape-pr-2" src="/shape/shape-c-2.png" />
      </div>
      <div className="container mx-auto sm:px-4">
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-1/2 pr-4 pl-4 lg:mx-1/4">
            <div className="sectionTitle mb-70 text-center">
              <span>Pricing plan</span>
              <h2 className="text-2xl md:text-5xl font-bold mb-6">
                No Extra Charges! Choose your Plan.
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="price-tab">
            <ul
              className={`${styles.priceTabMenu} flex flex-wrap list-none pl-0 mb-0 mt-4 justify-center`}
            >
              <li>
                <a
                  className="active"
                  id="monthly-tab"
                  data-toggle="tab"
                  href="#monthly"
                  role="tab"
                >
                  Monthly
                </a>
              </li>
              <li>
                <a id="annual-tab" data-toggle="tab" href="#annual" role="tab">
                  Annual
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="flex flex-wrap items-center justify-center">
                {pricePlan.map((service: PricePlan) => (
                  <div
                    key={service.id}
                    className="lg:w-1/3 md:w-1/2 sm:w-full pr-4 pl-4 mb-4"
                  >
                    <div className="relative w-full max-w-sm p-12 bg-white border border-gray-200 rounded-sm shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                      <div
                        className={`${styles.priceImg} pb-6 mb-4 flex align-center justify-center`}
                      >
                        <Image
                          src={`${service.imageUrl}`}
                          alt="PricePlan Image"
                          width={200}
                          height={200}
                        />
                      </div>
                      <h5 className="mb-14 text-xl font-bold text-gray-500 dark:text-gray-400 text-center">
                        {service.name}
                      </h5>
                      <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-5xl font-extrabold tracking-tight">
                          {service.price}
                        </span>
                        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                          /month
                        </span>
                      </div>
                      {/* List */}
                      <ul role="list" className="space-y-5 my-7">
                        {service.checkIcon.map((item, index) => (
                          <li key={index} className="flex space-x-3">
                            {/* Icon */}
                            <svg
                              aria-hidden="true"
                              className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Check icon</title>
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                              {item}
                            </span>
                          </li>
                        ))}
                        {service.unCheckIcon.map((item, index) => (
                          <li
                            key={index}
                            className="flex space-x-3 line-through decoration-gray-500"
                          >
                            {/* Icon */}
                            <svg
                              aria-hidden="true"
                              className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Uncheck icon</title>
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <button type="button" className="btn btn-squ-orange">
                        Choose plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
