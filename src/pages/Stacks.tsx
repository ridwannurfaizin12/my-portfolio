import IconHtml from "../assets/Icon/Html5Stacks.svg";
import IconCss from "../assets/Icon/Css3Satcks.svg";
import IconJavascript from "../assets/Icon/JavascriptStacks.svg";
import IconReact from "../assets/Icon//ReactStacks.svg";
import IconTypescript from "../assets/Icon/TypescriptStacks.svg";
import IconBootstrap from "../assets/Icon/BootstrapStacks.svg";
import IconTailwind from "../assets/Icon/TailwindStacks .svg";

export default function Stacks() {
  return (
    <div className="lg:px-[100px] xl:px-[150px] py-10 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Kolom 1 - Judul */}
        <h2 className="font-ibm text-heading3 text-black leading-[120%]">
          Tech{" "}
          <span className="text-accent">
            Stack <br />
          </span>
          For Crafting Interface
        </h2>

        {/* Kolom 2 - Ikon Stack */}
        <div className="flex justify-center flex-wrap gap-6">
          <img src={IconHtml} alt="HTML 5" className="w-8 h-8" />
          <img src={IconCss} alt="CSS 3" className="w-8 h-8" />
          <img src={IconJavascript} alt="JavaScript" className="w-8 h-8" />
          <img src={IconReact} alt="React" className="w-8 h-8" />
          <img src={IconTypescript} alt="TypeScript" className="w-8 h-8" />
          <img src={IconBootstrap} alt="Bootstrap" className="w-8 h-8" />
          <img src={IconTailwind} alt="Tailwind CSS" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}
