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
    "Before I got into Computer Science I was an accountant. I am extremely adept at combining these two disciplines."
];

let SKILLSWOLE = new Map();

for (let i = 0; i < SKILL_NAMES.length; i++) {
    SKILLSWOLE.set(SKILL_DESCRIPTIONS[i], SKILL_NAMES[i],);
}

export default SKILLSWOLE;