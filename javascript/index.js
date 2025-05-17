function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "The recipe will appear here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("#formElement");
formElement.addEventListener("submit", generatePoem);
