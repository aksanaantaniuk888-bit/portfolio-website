// Change About Me text on button click

// Change About Me text on button click
const aboutText = document.getElementById("about-text");
const aboutButton = document.getElementById("about-button");

const shortText = aboutText.textContent.trim();

const longText = `I'm a Software Engineer in Training at Techtonica with a background in medicine and patient care.

I graduated from Gomel State Medical University in Belarus in 2019 with a medical degree in General Medicine. My degree was evaluated for U.S. academic equivalency by Morningside Evaluations.

I worked as a Family Medicine Physician in Belarus from 2019 to 2021. During my medical studies, I also worked as a Nurse from 2017 to 2019.

I have research experience from medical school and presented my research at scientific conferences.

I also hold certifications in Basic Life Support (BLS), Nursing Assistant Certification (NAC) in Washington State, and Good Clinical Practice (GCP) through the NIDA Clinical Trials Network.

My medical background helped me develop strong problem-solving, critical thinking, communication, and teamwork skills. I'm now bringing these skills into software engineering as I continue learning and building projects at Techtonica.`;

aboutButton.addEventListener("click", () => {
    if (aboutButton.textContent === "Show More") {
        aboutText.textContent = longText;
        aboutButton.textContent = "Show Less";
    } else {
        aboutText.textContent = shortText;
        aboutButton.textContent = "Show More";
    }
});
// Make the paper plane fly when the Submit button is clicked
const submitButton = document.querySelector("#contact button");
const paperPlane = document.querySelector(".paper-plane");

submitButton.addEventListener("click", () => {
    event.preventDefault();
    paperPlane.classList.add("fly");
});