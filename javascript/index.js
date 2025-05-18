function showRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateRecipe(event) {
  event.preventDefault();

  let userElement = document.querySelector("#user-instructions");
  let apikey = "e1054aod00e03d00aeectb39af13a2bb";
  let context = "You are a chef that know easy and fast recipes";
  let prompt = `Provide a recipe that includes ${userElement.value} as one of the ingredients, separate with a line and capitalize and bold the title of the recipe. Separate each line and the ingredients with a <br/> element`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
  axios.get(apiUrl).then(showRecipe);
  let generatingElement = document.querySelector("#recipe");
  generatingElement.innerHTML = `Generating recipe that includes <strong>${userElement.value} </strong> as an ingredient`;
}

let formElement = document.querySelector("#formElement");
formElement.addEventListener("submit", generateRecipe);
