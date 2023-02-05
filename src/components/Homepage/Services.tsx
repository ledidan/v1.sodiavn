import React from "react";
import styles from "@/styles/Homepage/Service.module.css";
import classNames from "classnames";
import Image from "next/image";
interface ServiceInfo {
  id: number;
  iconPath: String;
  title: string;
  description: string;
}
const serviceInfo: ServiceInfo[] = [
  {
    id: 1,
    iconPath: "/icons/what-1.png",
    title: "Market Research",
    description:
      "Fly two don't saying man day one made that darkness shall signs. Man into sea give ever winged reple",
  },
  {
    id: 2,
    iconPath: "/icons/what-2.png",
    title: "Creative Design",
    description:
      "Fly two don't saying man day one made that darkness shall signs. Man into sea give ever winged reple",
  },
  {
    id: 3,
    iconPath: "/icons/what-3.png",
    title: "Software Development",
    description:
      "Fly two don't saying man day one made that darkness shall signs. Man into sea give ever winged reple",
  },
];
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
            <div className="sectionTitle mb-70 text-center">
              <span>What We Do</span>
              <h2 className="text-2xl md:text-5xl font-bold mb-5">
                In a World of Technology, People Make the Difference
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-20 justify-center items-center">
          {serviceInfo.map(({ id, iconPath, title, description }) => (
            <div key={id} className="lg:w-1/4 md:w-1/2 pr-4 pl-4 mb-4">
              <div className={`${styles.service} text-center`}>
                <div className={styles.whatIcon}>
                  <span />
                  <Image
                    src={`${iconPath}`}
                    alt="Service Icon"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={styles.whatContent}>
                  <h4>{title}</h4>
                  <p>{description}</p>
                  <a href="#">More about research</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
