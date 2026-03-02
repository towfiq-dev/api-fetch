const url = 'https://jsonplaceholder.typicode.com/todos'
const loadPost = ()=>{
  fetch(url)
  .then(response => response.json())
  .then(data => displayPost(data))
}
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false

const displayPost=(posts)=>{
  const attach = document.getElementById('container')
  attach.innerHTML = ''
  posts.forEach(post => {
    const createElement = document.createElement('div')
    createElement.style.backgroundColor = 'tomato'
    createElement.style.padding = '20px'
    createElement.style.border = '1px solid blue'
    createElement.style.margin = '20px'
    createElement.style.borderRadius = '15px'
    createElement.innerHTML = `
    <h3>${post.id}</h3>
    <h3>${post.userId}</h3>
    <p>${post.title}</p>
    <p>${post.completed == true? '<i class="fa-solid fa-calendar-check"></i>' : '<i class="fa-regular fa-calendar-check"></i>'}</p>
    `
    attach.appendChild(createElement)
  });
}