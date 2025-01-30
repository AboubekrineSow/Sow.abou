import SectionBadge from "@/components/SectionBadge";
import Experience from "@/components/Experience";
import RevealContent from "@/components/ReavealContent";

function Experiences() {
  return (
    <>
      <RevealContent>
        <>
          <SectionBadge sectionName={"Mon parcours"} />
          <h2 className="mb-6 text-center text-3xl font-extrabold md:mb-10">
            Mon parcours professionnel en résumé
          </h2>
        </>
      </RevealContent>
      <div className="flex flex-col gap-12">
        <Experience
          post={"Developpeur Fullstack"}
          dateStart={"03/2024"}
          dateEnd={"10/2024"}
          company={"Agiwise"}
        >
          <p>Participation à la modernisation des applications de Maroc Telecom en tant que développeur full-stack.</p>
          <p>
            Migration d'applications legacy (Struts) vers des solutions modernes basées sur Spring Boot et Angular. 
            Refonte de l'architecture logicielle et mise en œuvre des meilleures pratiques de développement.
          </p>
          <p>
            Tâches réalisées : développement et tests, correction d’anomalies, déploiement des applications sur JBoss EAP, 
            alimentation de CMS Liferay et collaboration avec les équipes fonctionnelles pour assurer la réussite des projets.
          </p>
          <p>
            Technologies utilisées : Spring Boot, Angular, JHipster, Oracle, GitHub, Jira.
          </p>
    
        </Experience>
        <Experience
          post={"Développeur FullStack .NET"}
          dateStart={"02/2022"}
          dateEnd={"06/2022"}
          company={"Wafasoft SA"}
        >
          <p>Stage en développement logiciel au sein de Wafasoft, Mauritanie.</p> 
          <p> Analyse des besoins clients, conception et developpement solution
            adaptée aux exigence locale, tout en garantissant la qualité et la satisfaction utilisateur. 
          </p>
          <p> Développement d'applications de gestion de avec C# et ASP.NET MVC, 
              intégration de bases de données SQL Server, et mise en œuvre de fonctionnalités
              pour améliorer l'efficacité opérationnelle. 
          </p> 
          <p> Technologies utilisées : C#, ASP.NET MVC, SQL Server, Entity Framework, Git. </p>
        </Experience>
        <Experience
          post={"Développeur web"}
          dateStart={"09/2021"}
          dateEnd={"10/2021"}
          company={"SNIM"}
        >
          <p>Développeur sur un projet de Gestion des Stagiaires.</p>
          <p>
            Conception et développement d'une application de gestion de stagiaires utilisant HTML, CSS, Bootstrap, JavaScript, PHP, 
            et une base de données MySQL.
          </p>
          <p>
            Gestion des demandes de stage, des programmes de stage, et des données des stagiaires. 
            Travail autonome avec une approche clean code, en suivant les méthodologies agiles.
          </p>
       </Experience>
      </div>
    </>
  );
}

export default Experiences;
