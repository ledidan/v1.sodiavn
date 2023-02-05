import React from "react";
import styles from "@/styles/Homepage/Feature.module.css";
import classNames from "classnames";
import Image from "next/image";
interface IconFeature {
  id: number;
  iconImage: string;
  title: string;
  desc: string;
}
const iconFeature: IconFeature[] = [
  {
    id: 1,
    iconImage: "/icons/fea-icon-1.png",
    title: "User Analytics",
    desc: "Nascetur nisi luctus lacinian torque netus praesent proin pede.",
  },
  {
    id: 2,
    iconImage: "/icons/fea-icon-2.png",
    title: "Multiple Layouts",
    desc: "Nascetur nisi luctus lacinian torque netus praesent proin pede.",
  },
  {
    id: 3,
    iconImage: "/icons/fea-icon-3.png",
    title: "Responsive design",
    desc: "Nascetur nisi luctus lacinian torque netus praesent proin pede.",
  },
  {
    id: 4,
    iconImage: "/icons/fea-icon-4.png",
    title: "Best Supported",
    desc: "Nascetur nisi luctus lacinian torque netus praesent proin pede.",
  },
];

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
            <div className={`sectionTitle mb-16 text-center`}>
              <span>Awesome feature</span>
              <h2 className="sectionTitle text-2xl md:text-5xl font-bold mb-6">
                Sometimes the best way to envision the future is to invent it.
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center ">
          <div className="lg:w-1/2 pr-4 pl-4">
            <img src="/bg/fea-img.png" />
          </div>
          <div className="flex flex-wrap lg:w-1/2 pr-4 pl-4">
            {iconFeature.map(({ id, iconImage, title, desc }) => (
              <div key={id} className="md:w-1/2 pr-3 pl-4">
                <div className={`${styles.singleItem} mb-10`}>
                  <div className={`${styles.featureIcon} mb-2`}>
                    <span className={styles[`featureIcon-${id}`]} />
                    <Image
                      src={iconImage}
                      alt="Icon Feature"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className={styles.featureContent}>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
