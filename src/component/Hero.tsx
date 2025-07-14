import Indicator from "../assets/Icon/Indicator.svg";
import ImgHero from "../assets/image/Img.webp";

export default function Hero() {
  return (
    <section className="font-ibm relative mt-[112px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:px-[150px] py-4">
        {/* Text Section */}
        <div className="flex flex-col items-start max-xl:text-center max-xl:items-center">
          <span className="font-regular mb-4 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs text-gray-600 ring-1 ring-gray-500/10 ring-inset">
            <img src={Indicator} alt="" className="mr-2" />
            Available For Work
          </span>
          <h1 className="font-heading1 text-heading1 leading-[120%] mb-2 max-md:text-[38px] max-sm:text-[32px]">
            //Frontend Developer Transforms{" "}
            <span className="text-accent">(Ideas)</span> into{" "}
            <span className="text-accent">Interfaces</span>
          </h1>
          <p className="text-gray-body text-body leading-[120%] mb-10 sm:text-[12px]">
            Bringing your digital ideas to vibrant life, Rizwan is a Frontend
            Developer in Yogyakarta known for his innovative approach and
            ability to transform complex concepts into intuitive and engaging
            web experiences.
          </p>
          <button className="text-white bg-accent py-3 px-4 rounded-lg hover:bg-purple-950 transition duration-700 cursor-pointer sm:py-2 sm:px-3">
            Contact Me
          </button>
        </div>

        {/* Image Section */}
        <img
          src={ImgHero}
          alt="Hero"
          className="w-[300px] sm:w-[350px] min-lg:w-[400px] h-auto max-xl:hidden"
        />
      </div>
    </section>
  );
}
