
     async function getJoke() {
      const url = "https://official-joke-api.appspot.com/random_joke";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const joke = await response.json();
        displayJoke(joke);
      } catch (error) {
        document.getElementById("joke-container").innerHTML = 
          "<p>⚠️ Couldn't fetch a joke, try again!</p>";
      }
    }

    function displayJoke(joke) {
      document.getElementById("joke-container").innerHTML = `
        <p class="setup">${joke.setup}</p>
        <p class="punchline">${joke.punchline}</p>
      `;
    }