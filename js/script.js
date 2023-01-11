const url = 'https://aws.random.cat/meow';
const image = document.querySelector('.img');
const button = document.querySelector('.btn')

async function fetchRes() {
   try {
     button.disabled = true;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      image.src = data.file;
      setTimeout(timeOut, 2500);
      //задержка позволяет дождаться отрисовки картины в браузере
   } catch (err) {
      console.log(err)
   }
}

function timeOut() { button.disabled = false }

fetchRes();

button.addEventListener("click", fetchRes);