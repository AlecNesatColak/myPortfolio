import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const FrontEnd = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Figma",
    "Adobe XD",
  ];

  const BackEnd = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "Java",
    "C",
    "C++",
    "C#",
  ];

  const Others = [
    "TypeScript",
    "Next.js",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "AWS",
    "Git",
  ];

  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[35vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/dc65266a-aac4-454a-ad4d-f28f695c16dc/s2MLOhZ4Pu.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white font-semibold">
            I am a computer science student at the University of Waterloo. I am
            passionate about software development and I am always looking for
            new opportunities to learn and grow as a developer. I am currently
            looking for an Internship or full time position while I stay on
            course to graduate in May 2025.
          </p>
          <p className="text-white font-semibold ">
            I have experience working with React, Node.js, Express.js, MongoDB,
            Python, Java, C, C++, and C#. I am also familiar with TypeScript,
            Next.js, GraphQL, and PostgreSQL. I am currently learning about
            Docker, Kubernetes, and AWS. I am also interested in learning more
            about machine learning and artificial intelligence.
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-secondary text-xl py-5">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10">
          {FrontEnd.map((skill) => (
            <div className="text-white font-semibold bg-secondary border border-primary px-5 py-2  mr-5 mb-5">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-secondary text-xl py-5">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10">
          {BackEnd.map((skill) => (
            <div className="text-white font-semibold bg-secondary border border-primary px-5 py-2  mr-5 mb-5">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-secondary text-xl py-5">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10">
          {Others.map((skill) => (
            <div className="text-white font-semibold bg-secondary border border-primary px-5 py-2  mr-5 mb-5">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
