const router = require("express").Router();
const {
  Intro,
  About,
  Project,
  Experience,
  Course,
  Contact,
} = require("../models/portfolioModel");

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const experiences = await Experience.find();
    const courses = await Course.find();
    const contacts = await Contact.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects: projects,
      experiences: experiences,
      courses: courses,
      contacts: contacts[0],
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
