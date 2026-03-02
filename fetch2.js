// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
const display=()=>{
  fetch('http://127.0.0.1:5500/api.txt')
.then(response => response.json())
.then(data => {
  const docs =  document.getElementById('display')
  docs.innerText = data
})
}