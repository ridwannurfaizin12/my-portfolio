import AboutMe from "../assets/image/AboutMe.webp";

export default function About() {
  return (
    <div className="lg:px-[100px] xl:px-[150px]">
      {/* label + Heading 2 */}
      <div className="flex flex-col px-[150px] text-center space-y-2">
        <div className="font-ibm font-regular text-black">
          <span className="bg-label rounded-[990px] text-body px-4 py-3">
            Get to know me
          </span>
        </div>
        <h2 className="font-ibm text-heading2 font-semibold">
          A Frontend Developer's <span className="text-accent">Journey</span>
        </h2>
      </div>
      {/* imgage + desc */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 p-6">
        <img
          src={AboutMe}
          alt="About Me"
          className="w-[335px] h-[324px] object-cover rounded-lg mx-auto"
        />
        <p className="text-body font-regular font-ibm leading-relaxed p-4 rounded-lg">
          Hello! I'm <span className="font-semibold text-accent">Rizwan</span>,
          a passionate Frontend Developer based in Yogyakarta. I specialize in
          turning innovative ideas into intuitive and engaging web interfaces.
          My journey in development is all about bringing digital visions to
          life, one pixel and one line of code at a time. I thrive on the
          challenge of transforming complex concepts into seamless user
          experiences.
          <br />
          <br />
          Whether it's building responsive layouts, optimizing performance, or
          implementing dynamic features, I'm dedicated to creating interfaces
          that are not only functional but also a joy to interact with. I
          believe in clean code, elegant design, and the continuous pursuit of
          new technologies to deliver the best possible web solutions.
        </p>
      </div>
    </div>
  );
}
