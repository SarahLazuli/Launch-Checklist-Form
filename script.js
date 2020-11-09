// Write your JavaScript code here!

window.addEventListener("load", function() {
   fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
      response.json().then(function(json) {
         let missionTarget = document.getElementById("missionTarget");
         let planet = json[4];
         missionTarget.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${planet.name}</li>
            <li>Diameter: ${planet.diameter}</li>
            <li>Star: ${planet.star}</li>
            <li>Distance from Earth: ${planet.distance}</li>
            <li>Number of Moons: ${planet.moons}</li>
         </ol>
         <img src="${planet.image}">`;
      });
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();

      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      let faultyItemsList = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      let fieldsFilled = true;
      let fieldsCorrect = true;

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         fieldsFilled = false;
      } else if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("Make sure to enter valid information for each field!");
         fieldsCorrect = false;
      }

      pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
      copilotStatus.innerHTML = `Pilot ${copilotNameInput.value} is ready for launch`;

      if (cargoMassInput.value > 10000 && fuelLevelInput.value < 10000) {
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         faultyItemsList.style.visibility = 'visible';
         launchStatus.style.color = 'red';
         fuelStatus.innerHTML = `Fuel level too low for launch`;
         cargoStatus.innerHTML = `Cargo mass too high for launch`;
      } else if (fuelLevelInput.value < 10000) {
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         faultyItemsList.style.visibility = 'visible';
         launchStatus.style.color = 'red';
         fuelStatus.innerHTML = `Fuel level too low for launch`;
         cargoStatus.innerHTML = `Cargo mass low enough for launch`;
      } else if (cargoMassInput.value > 10000) {
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         faultyItemsList.style.visibility = 'visible';
         launchStatus.style.color = 'red';
         fuelStatus.innerHTML = `Fuel level high enough for launch`;
         cargoStatus.innerHTML = `Cargo mass too high for launch`;
      } else if (fieldsCorrect === false || fieldsFilled === false) {
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = 'red';
         faultyItemsList.style.visibility = 'hidden';
      } else {
         launchStatus.innerHTML = `Shuttle is ready for launch`;
         launchStatus.style.color = 'green';
         faultyItemsList.style.visibility = 'hidden';
      }
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
