let nameInput = document.getElementById('name');
let optionSelect = document.getElementById('option');
let submitButton = document.getElementById('submit');
let resultDiv = document.getElementById('result');

submitButton.addEventListener('click', () => {
 let name = nameInput.value;
 let option = optionSelect.value;

  if (option === 'hide') {
    resultDiv.innerHTML = `<button id="show-button">Show</button>`;
    document.getElementById('show-button').addEventListener('click', () => {
      resultDiv.innerHTML = `<p>Your name is: ${name}</p>`;
    });
  } else if (option === 'show') {
    resultDiv.innerHTML = `<p>Your name is: ${name}</p>`;
    resultDiv.innerHTML += `<button id="hide-button">Hide</button>`;
    document.getElementById('hide-button').addEventListener('click', () => {
      resultDiv.innerHTML = `<button id="show-button">Show</button>`;
      document.getElementById('show-button').addEventListener('click', () => {
        resultDiv.innerHTML = `<p>Your name is: ${name}</p>`;
      });
    });
  }
});