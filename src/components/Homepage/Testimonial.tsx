import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from "next";
interface PeopleSay {
  id: number;
  name: string;
  avatar: string;
  description: string;
}

const peopleSay: PeopleSay[] = [
  {
    id: 1,
    name: "Kenzie Edgar",
    avatar: "https://i.pravatar.cc/100?img=1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti",
  },
  {
    id: 2,
    name: "Kenzie Edgar",
    avatar: "https://i.pravatar.cc/100?img=2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti",
  },
  {
    id: 3,
    name: "Kenzie Edgar",
    avatar: "https://i.pravatar.cc/100?img=3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti",
  },
  {
    id: 4,
    name: "Kenzie Edgar",
    avatar: "https://i.pravatar.cc/100?img=4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti",
  },
  {
    id: 5,
    name: "Kenzie Edgar",
    avatar: "https://i.pravatar.cc/100?img=5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti",
  },
  {
    id: 6,
    name: "Kenzie Edgar",
    avatar: "https://i.pravatar.cc/100?img=6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti",
  },
];
export default function Testimonial() {
  return (
    <div className="min-w-screen bg-gray-50 flex items-center justify-center py-10">
      <div className="w-full bg-white  border-gray-200 px-5 py-4 md:py-10">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <div className="sectionTitle">
              <span>Testimonials</span>
              <h2 className="text-2xl md:text-7xl font-bold mb-5">
                What people <br /> are saying.
              </h2>
              <h3 className="text-xl mb-5 font-light">
                Uy tín luôn đi đầu với chúng tôi
              </h3>
            </div>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1" />
              <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1" />
              <span className="inline-block w-40 h-1 rounded-full bg-red-500" />
              <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1" />
              <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1" />
            </div>
          </div>
          <div className="-mx-3 md:flex flex-wrap items-start">
            {peopleSay.map(({ id, avatar, name, description }) => (
              <div className="lg:w-1/3 px-3 md:w-1/3">
                <div
                  key={id}
                  className="w-full mx-auto rounded-md bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
                >
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <Image
                        loader={() => avatar}
                        src={avatar}
                        alt="Testimonial avatar"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        {name}
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      {description}
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
