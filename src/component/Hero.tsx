import Indicator from "../assets/Icon/Indicator.svg";
import Profile from "../assets/image/Profile.webp";

export default function Hero() {
  return (
    <section className="font-ibm relative mt-[112px] px-4 sm:px-6 lg:px-[100px] xl:px-[150px]">
      <div className="flex flex-col-reverse lg:flex-row items-center py-6  rounded-2xl">
        {/* Text Section */}
        <div className="flex-1 w-full text-center lg:text-left mt-6 lg:mt-0 sm:px-[100px] md:px-[100px] lg:px-0">
          <span className="font-regular mb-4 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs text-gray-600 ring-1 ring-gray-500/10 ring-inset">
            <img src={Indicator} alt="" className="mr-2" />
            Available For Work
          </span>

          <h1 className="font-heading1 leading-[120%] mb-4 text-default text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            //Frontend Developer Transforms{" "}
            <span className="text-accent">(Ideas)</span> into{" "}
            <span className="text-accent">Interfaces</span>
          </h1>

          <p className="text-gray-body text-xs leading-[120%] sm:text-xs md:text-body mb-6">
            Bringing your digital ideas to vibrant life, Rizwan is a Frontend
            Developer in Yogyakarta known for his innovative approach and
            ability to transform complex concepts into intuitive and engaging
            web experiences.
          </p>

          <button className="text-white bg-accent font-medium py-3 px-6 rounded-lg hover:bg-purple-950 transition duration-500 text-sm sm:text-base md:text-lg">
            Contact Me
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full flex justify-center">
          <img
            src={Profile}
            alt="Hero"
            className="w-[250px] sm:w-[300px] md:w-[350px] h-auto max-lg:hidden"
          />
        </div>
      </div>
    </section>
  );
}
