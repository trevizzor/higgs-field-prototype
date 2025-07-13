const boson = document.getElementById("boson");
const higgsField = document.getElementById("higgs-field");
const message = document.getElementById("message");

boson.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", null); // Required for Firefox
    boson.style.opacity = "0.5";
});

boson.addEventListener("dragend", () => {
    boson.style.opacity = "1";
});

higgsField.addEventListener("dragover", (e) => {
    e.preventDefault(); // Necessary to allow dropping
});

higgsField.addEventListener("drop", (e) => {
    e.preventDefault();
    message.textContent = "Mass acquired! The boson interacted with the Higgs field.";
    boson.style.backgroundColor = "#ffcc00";
    boson.textContent = "🟡";
});
