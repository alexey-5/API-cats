const url1 = 'https://aws.random.cat/meow';
const url2 = 'https://dog.ceo/api/breeds/image/random';
let urlEnd = 'https://aws.random.cat/meow';

const image = document.querySelector('.img');
const button = document.querySelector('.btn1')
const buttonTopic = document.querySelector('.btn2')

let topic = true // коты 

async function fetchRes() {
   try {
      button.disabled = true;
      const response = await fetch(urlEnd);
      const data = await response.json();
      console.log(data);

        if (topic === true)  image.src = data.file;
         else image.src = data.message;
      setTimeout(timeOut, 2500);
      //задержка позволяет дождаться отрисовки картины в браузере
   } catch (err) {
      console.log(err)
   }
}

function timeOut() { button.disabled = false }// отключение кнопки
function topicSelector() { // перек. темы
   topic = !topic
   if (topic === true) {
      buttonTopic.innerHTML = 'Котики';
      urlEnd = url1;
   }
   else {
      buttonTopic.innerHTML = 'Пёсики';
      urlEnd = url2;
   }
   fetchRes();
}
fetchRes();

button.addEventListener("click", fetchRes);
buttonTopic.addEventListener("click", topicSelector);