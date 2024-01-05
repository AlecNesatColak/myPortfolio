import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    name: "Alec-Nesat Colak",
    email: "acolak9@ufl.edu",
    phone: "727-458-8263",
    github: "github.com/alecnesatcolak",
    linkedin: "linkedin.com/in/alecnesatcolak",
  };
  return (
    <div>
      <SectionTitle title="Contact" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-secondary">{"{"}</h1>
          {Object.keys(user).map((key) => (
            <h1>
              <span className="text-primary">{key}: </span>
              <span className="text-secondary">'{user[key]}',</span>
            </h1>
          ))}
          <h1 className="text-secondary">{"}"}</h1>
        </div>
        <div className="h-[400px]">Image</div>
      </div>
    </div>
  );
}

export default Contact;
