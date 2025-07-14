import Project1 from "../assets/image/Project1.jpg";
import Project2 from "../assets/image/Project2.jpg";
import Project3 from "../assets/image/Project3.jpg";
import ArrowUpRightButton from "../assets/Icon/ArrowUpRightButton.svg";
import TailwindLabel from "../assets/Icon/TailwindLabel.svg";
import ReactLabel from "../assets/Icon/ReactLabel.svg";
import TypescriptLabel from "../assets/Icon/TypescriptLabel.svg";

const data = [
  {
    id: 1,
    img: Project1,
    title: "Lorem Ipsum is simply dummy",
    desc: "Lorem Ipsum is simply dummy text...",
    labels: [
      { icon: TailwindLabel, name: "Tailwind" },
      { icon: ReactLabel, name: "React" },
      { icon: TypescriptLabel, name: "Typescript" },
    ],
    button: ArrowUpRightButton,
  },
  {
    id: 2,
    img: Project2,
    title: "Lorem Ipsum is simply dummy",
    desc: "Lorem Ipsum is simply dummy text...",
    labels: [
      { icon: TailwindLabel, name: "Tailwind" },
      { icon: ReactLabel, name: "React" },
      { icon: TypescriptLabel, name: "Typescript" },
    ],
    button: ArrowUpRightButton,
  },
  {
    id: 3,
    img: Project3,
    title: "Lorem Ipsum is simply dummy",
    desc: "Lorem Ipsum is simply dummy text...",
    labels: [
      { icon: TailwindLabel, name: "Tailwind" },
      { icon: ReactLabel, name: "React" },
      { icon: TypescriptLabel, name: "Typescript" },
    ],
    button: ArrowUpRightButton,
  },
];

export default function Projects() {
  return (
    <section className="w-full">
      <div className="font-ibm leading-[120%] lg:px-[100px] xl:px-[150px] py-10 mb-6 max-lg:px-6">
        <div className="flex flex-col">
          <div className="font-heading1 text-heading2">
            Featured <span className="text-accent">Works</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {data.map((item) => (
              <div key={item.id}>
                <img
                  src={item.img}
                  alt="Project"
                  className="mb-3 rounded-xl object-cover"
                />
                {/* title, button, desc, and label */}
                <div className="font-ibm flex flex-col">
                  {/* title + button */}
                  <div className="flex justify-between pr-4">
                    <div className="text-heading4 font-medium mb-2 leading-[120%]">
                      {item.title}
                    </div>
                    <img
                      src={item.button}
                      alt="Detail Project"
                      className="w-6 h-6 cursor-pointer transition-transform duration-200 hover:scale-110"
                    />
                  </div>

                  <div className="text-body font-regular text-text3 mb-2 leading-[120%]">
                    {item.desc}
                  </div>
                  {/* Dinamis Label */}
                  <div className="flex gap-3 flex-wrap mt-6">
                    {item.labels.map((label, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 py-[4px] pl-2 pr-4 bg-label rounded-[990px]"
                      >
                        <img
                          src={label.icon}
                          alt={label.name}
                          className="w-3 h-3"
                        />
                        <p className="text-body text-black font-regular font-ibm leading-[120%]">
                          {label.name}
                        </p>
                      </div>
                    ))}
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
