import { KneelDiamonds } from "./KneelDiamonds.js";

const mainContainer = document.querySelector("#container");

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds();
};

renderAllHTML();

// add event listener for the custom stateChanged event, calls the renderAllHTML() function to regenerate the HTML so that new state is shown to the user.

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
});

