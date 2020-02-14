var name1 = document.querySelector('.name1');
var diet = document.querySelector('.diet');
var likes = document.querySelector('.likes');
var dislikes = document.querySelector('.dislikes');
var submitBtn = document.getElementById('submit-button');
var cardContainer = document.getElementById('card-container');
var number = 0;

submitBtn.addEventListener('click', validateInputs);
cardContainer.addEventListener('click', deleteCard)

function createCard() {
  updateNumber()
  var opossum = new Opossum(name1.value, diet.value, likes.value, dislikes.value);
  cardContainer.insertAdjacentHTML("beforeend", `
  <article class="card">
    <div type='button' class="heart-container"></div>
    <img src='./assets/profile_${number}.png' class="image-container"/>
    <h4>name: <span class="p-name">${opossum.name}</span></h4>
    <h4>fav food: <span class="p-diet">${opossum.diet}</span></h4>
    <h4>likes: <span class="p-likes">${opossum.likes}</span></h4>
    <h4>dislikes: <span class="p-dislikes">${opossum.dislikes}</span></h4>
    <button class="remove-button" type="button" name="button">delete</button>
  </article>`)
  clearInputs();
}

function updateNumber() {
  if (number === 6) {
    number = 0
  }
  number++
}

function deleteCard(event) {
  if (event.target.classList.contains('remove-button')) {
    event.target.closest('.card').remove()
  }
}

function validateInputs() {
  if (!name1.value || !diet.value || !likes.value || !dislikes.value) {
    window.alert('You must enter all information!')
  } else {
    createCard();
  }
}

function clearInputs() {
  name1.value = ''
  diet.value = ''
  likes.value = ''
  dislikes.value = ''
}
