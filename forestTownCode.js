// Pass a json file into this function to update the page, visually!
function displayContent(content) {
  // NOTE: content.name refers to "name" in json.
  document.title = `aaafile: ${content.drawingtitle}`;

  // targets the first element in the html with the id of "description", and changes the text content to content.description 
  // which is the json value for "description"
  const description = document.querySelector("#description");
  description.textContent = content.description;

  // targets the first element with the id of "photo", and changes/sets the photo source and alt text to the json values.
  const photo = document.querySelector("#comicThing");
  photo.setAttribute("src", content.image.src);
  photo.setAttribute("alt", content.image.alt);
}

// When page is loaded, get p which is the query string. 
const urlParams = new URLSearchParams(window.location.search);
const imageParameter = urlParams.get('p');
console.log(imageParameter);


document.addEventListener("click", async (event) => {
  if (imageParameter) {
    event.preventDefault();
    try {
      // When page is loaded, fetch the JSON associated with the query string, "p".
      const response = await fetch(`forestImagesJSON/${imageParameter}.json`);

      console.log(response);

      const json = await response.json(); // continued from above
      displayContent(json);
      console.log(json);  
    } catch (err) {
      console.error(err);
    }
  }
});
