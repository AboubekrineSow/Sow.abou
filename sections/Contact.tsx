import SectionBadge from "@/components/SectionBadge";
import Icons from "@/components/Icons";
import RevealContent from "@/components/ReavealContent";

function Contact() {
  return (
    <RevealContent style="flex flex-col items-center">
      <>
        <SectionBadge sectionName="Mes contacts" />
        <p className="text-center font-gilroy text-2xl font-extrabold md:text-5xl">
          Envie d&apos;échanger avec moi ?
        </p>
        <a href="mailto:abbakr100@gmail.com" target="_blank">
          <div className="mb-6 mt-10 flex items-center gap-4 text-lg font-bold sm:text-xl">
            <Icons name="mail" size={20} /> abbakr100@gmail.com
          </div>
        </a>
        <div className="flex gap-7">
          <a href="https://github.com/aboubekrineSow" target="_blank">
            <Icons name={"github"} size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/aboubakar-sedigh-sow-166537217/"
            target="_blank"
          >
            <Icons name={"linkedin"} size={30} />
          </a>
        </div>
      </>
    </RevealContent>
  );
}

export default Contact;
