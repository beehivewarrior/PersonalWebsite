import python from "../../img/python.svg";
import java from "../../img/java.svg";
import rjs from "../../img/react.svg";
import cloud from "../../img/cloud.svg";
import html from "../../img/html.svg";
import abacus from "../../img/abacus.svg";

export let SKILL_NAMES = [
    "Web Development",
    "Java",
    "Python",
    "React.js",
    "DevOps",
    "Managerial Accounting"
];

export let SKILL_DESCRIPTIONS = [
    "I have experience planning, building and deploying web applications under various use cases.",
    "A must know language in 2019, I can proficiently write Java code for a variety of purposes",
    "Python is my favorite language to write in. Take a look at my favorite Python projects.",
    "This website was written using the React.js Framework. You should see what else I can do with it.",
    "An application is worthless if your clients can't access. I can confidently deploy your app to the cloud.",
    "Before I got into Computer Science I was an accountant. My background in finance makes me a natural fit in FinTech."
];

export let SKILL_LINKS = [
    {
        name: "Python",
        link: "https://github.com/beehivewarrior?utf8=%E2%9C%93&tab=repositories&q=&type=&language=python"
    },
    {name: "Java", link: "https://github.com/beehivewarrior?utf8=%E2%9C%93&tab=repositories&q=&type=&language=java"},
    {name: "React.js", link: "https://github.com/beehivewarrior?utf8=%E2%9C%93&tab=repositories&q=reactjs"}
];

let WHOLE_LIST_OF_SKILLS = new Map();

for (let i = 0; i < SKILL_NAMES.length; i++) {
    WHOLE_LIST_OF_SKILLS.set(SKILL_DESCRIPTIONS[i], SKILL_NAMES[i],);
}

export let SKILL_IMAGES = [
    {skill: "Python", image: python},
    {skill: "Java", image: java},
    {skill: "React.js", image: rjs},
    {skill: "DevOps", image: cloud},
    {skill: "Web Development", image: html},
    {skill: "Managerial Accounting", image: abacus}
];

export default WHOLE_LIST_OF_SKILLS;