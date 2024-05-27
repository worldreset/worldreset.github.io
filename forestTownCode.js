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
  
// When a link is clicked: update the page for that creature.
// From a user perspective, this will look like the loading of a new page.
document.addEventListener("click", async (event) => {
  const dailypost = event.target.getAttribute("data-dailypost"); // a constant is created (creature) that contains attributes of data-creature in html.
  if (dailypost) {
    event.preventDefault();
    try {
      const response = await fetch(`forestImagesJSON/${dailypost}.json`); // fetch the json from the specified creature. The file path is shown.
      const json = await response.json(); // continued from above
      displayContent(json);
      // Add a new entry to the history.
      // This simulates loading a new page.
      history.pushState(json, "", dailypost);
    } catch (err) {
      console.error(err);
    }
  }
});
  
// Handle forward/back buttons
window.addEventListener("popstate", (event) => {
  // If a state has been provided, we have a "simulated" page
  // and we update the current page.
  if (event.state) {
    // Simulate the loading of the previous page
    displayContent(event.state);
  }
});
  
// Create state on page load and replace the current history with it
// NOTE: Essentially, once the page starts up, it will make a URL and save it in history, which can be any animal page that is default.
const image = document.querySelector("#comicThing");
const initialState = {
  description: document.querySelector("#description").textContent,
  image: {
    src: image.getAttribute("src"),
    alt: image.getAttribute("alt"),
  },
  name: "Home",
};
history.replaceState(initialState, "", document.location.href);
