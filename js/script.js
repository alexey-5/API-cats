const url = 'http://aws.random.cat/meow';
//const url_2 ='https://images.unsplash.com/photo-1525923838299-2312b60f6d69';
const image = document.querySelector('.img');
const button = document.querySelector('.btn')

async function fetchRes() {
   try {
     button.disabled = true;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      image.src = data.file;
      setTimeout(timeOut, 3000);
      //задержка позволяет дождаться отрисовки картины в браузере
   } catch (err) {
      console.log(err)
   }
}

function timeOut() { button.disabled = false }

fetchRes();

button.addEventListener("click", fetchRes);