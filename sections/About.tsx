"use client";

import RevealContent from "@/components/ReavealContent";
import SectionBadge from "@/components/SectionBadge";
import { motion } from "framer-motion";
import Image from "next/image";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1 }}
    >
      <RevealContent>
        <>
          <SectionBadge sectionName="Qui suis-je ?" />
          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="w-12/12 mb-6 flex justify-center md:w-5/12 md:self-start">
              <Image
                src={"/images/me.jpg"}
                className="self-center dark:hidden"
                alt=""
                height={400}
                width={400}
              />
              <Image
                src={"/images/me.png"}
                className="hidden self-center dark:block"
                alt=""
                height={400}
                width={400}
              />
            </div>
            <div className="w-12/12 md:w-7/12 xl:w-5/12">
              <h2 className="mb-6 text-3xl font-bold">A propos de moi</h2>
              <div className="flex flex-col gap-4">
                <p>Bienvenue ! Je m&apos;appelle Aboubekrine Sow, j&apos;ai 25 ans
                   et je suis passionné par le développement informatique et les nouvelles
                   technologies depuis 2019.
                </p>
                <p>
                   Je travaille principalement avec Spring Boot et Angular, et j&apos;aime 
                   concevoir des applications modernes et performantes offrant une expérience
                   utilisateur fluide et agréable.
                </p>
                <p>
                   Mon expertise va au-delà du développement, car j&apos;ai également formé des
                   étudiants et des collègues, partagé mes connaissances sur des technologies modernes,
                   et contribué à l&apos;optimisation de projets en m&apos;intéressant aux domaines du SEO,
                  de l&apos;accessibilité numérique et de la cybersécurité.
                </p>
                <p>
                   Passionné par la cybersécurité, je m&apos;intéresse aux enjeux liés à la protection des données,
                   aux bonnes pratiques en matière de sécurité applicative et à l&apos;analyse des vulnérabilités.
                </p>
                <p>
                   En dehors de mon activité professionnelle, je suis passionné de sport, j&apos;aime regarder des
                   films, jouer aux jeux vidéo et explorer de nouvelles technologies. Ces loisirs enrichissent ma 
                   créativité et me permettent de maintenir un équilibre dans ma vie.
                </p>

              </div>
            </div>
          </div>
        </>
      </RevealContent>
    </motion.div>
  );
}

export default About;
