import IconGithub from "../assets/Icon/GithubFooter.svg";
import IconLinkedin from "../assets/Icon/LinkedinFooter.svg";
import IconInstagram from "../assets/Icon/InstagramFooter.svg";

export default function Footer() {
  return (
    <footer className="bg-secondary lg:px-[100px] xl:px-[150px] py-10 px-8">
      <div className="flex flex-col items-center border-2 border-white border-dashed rounded-xl py-8 font-ibm ">
        <h1 className="font-semibold text-2xl text-accent">RNF</h1>
        <h3 className="text-heading3 text-white font-semibold text-center leading-[120%]">
          Crafting interface, <br /> user-friendly web experiences.
        </h3>
        <p className="text-body font-regular leading-[120%] text-primary">
          Building seamless, responsive, and visually stunning websites.
        </p>
        {/* Icon Sosmed  */}
        <div className="flex space-x-4 mt-10 ">
          <img
            src={IconGithub}
            alt="Github"
            className="w-6 h-6 cursor-pointer transition-transform duration-200 hover:scale-110"
          />
          <img
            src={IconLinkedin}
            alt="Github"
            className="w-6 h-6 cursor-pointer transition-transform duration-200 hover:scale-110"
          />
          <img
            src={IconInstagram}
            alt="Github"
            className="w-6 h-6 cursor-pointer transition-transform duration-200 hover:scale-110"
          />
        </div>
      </div>
    </footer>
  );
}
