const particles = document.querySelectorAll(".particle");
const higgsField = document.getElementById("higgs-field");
const message = document.getElementById("message");
const howDoWeKnowBtn = document.getElementById("howDoWeKnowBtn");
const howDoWeKnowPanel = document.getElementById("howDoWeKnowPanel");
const closePanelBtn = document.getElementById("closePanelBtn");

particles.forEach(particle => {
    particle.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", particle.id);
    });
});

higgsField.addEventListener("dragover", (e) => {
    e.preventDefault();
});

higgsField.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    handleInteraction(id);
});

function handleInteraction(id) {
    switch (id) {
        case "higgs":
        case "wboson":
        case "zboson":
            message.textContent = `${capitalize(id)} gains mass in the Higgs field.`;
            break;
        case "photon":
            message.textContent = "The photon does not interact with the Higgs field. It remains massless.";
            break;
        case "gluon":
            message.textContent = "The gluon does not gain mass from the Higgs field. It carries the strong force.";
            break;
        default:
            message.textContent = "";
    }
}

howDoWeKnowBtn.addEventListener("click", () => {
    howDoWeKnowPanel.classList.remove("hidden");
});

closePanelBtn.addEventListener("click", () => {
    howDoWeKnowPanel.classList.add("hidden");
});

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
