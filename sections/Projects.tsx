import ProjectCard from "@/components/ProjectCard";
import RevealContent from "@/components/ReavealContent";
import SectionBadge from "@/components/SectionBadge";

function Projects() {
  return (
    <>
      <RevealContent>
        <>
          <SectionBadge sectionName={"Mes projets"} />
          <h2 className="mb-6 text-center text-3xl font-extrabold md:mb-10">
            Quelques projets personnels
          </h2>
        </>
      </RevealContent>
      <div className="flex flex-col gap-12 lg:gap-20">
        <ProjectCard
          name={"Mon portfolio"}
          description={
            "Mon site personnel dédié au développement(portfolio), un projet en constante évolution où je partage mes projets personnels, mon parcours, ainsi que mes informations de contact."
          }
          technologies={[
            "Next JS",
            "React.JS",
            "Tailwind CSS",
            "Framer motion",
            "Responsive",
            "Shadcn",
          ]}
          imageSrc={"/images/Screenshot"}
          imagePosition={"right"}
          githubLink={""}
          directLink={"https://sow-abou.vercel.app/"}
        />
        <ProjectCard
          name={"snapface (Front-end)"}
          description={
            ""
          }
          technologies={[
            "Angular 17 ",
            "HTML",
            "CSS",
            "Json-server",
            "Github",
          ]}
          imageSrc={""}
          imagePosition={"left"}
          githubLink={"https://github.com/aboubekrineSow/"}
          directLink={""}
        />
        <ProjectCard
          name={"gestion des produits (Front-end)"}
          description={
            "gestion des produits"
          }
          technologies={["Angular 11", "HTML", "CSS"]}
          imageSrc={""}
          imagePosition={"right"}
          githubLink={"https://github.com/aboubekrineSow/"}
        />
        <ProjectCard
          name={"gestion des complexes sportive"}
          description={
            "un projet academique"
          }
          technologies={[
            "Java",
            "Spring boot",
            "Spring security",
            "Spring Data JPA",
            "Rest API",
            "Refine JS",
            "MySQL",
          ]}
          imageSrc={""}
          imagePosition={"left"}
          directLink={""}
        />
        
      </div>
    </>
  );
}

export default Projects;
