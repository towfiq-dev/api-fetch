const url = 'https://jsonplaceholder.typicode.com/posts'
const loadPost = ()=>{
  fetch(url)
  .then(response => response.json())
  .then(data => displayPost(data))
}
// body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
// id: 1
// title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
// userId: 1

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
    <h1>${post.title}</h1>
    <h3>${post.id}</h3>
    <h3>${post.userId}</h3>
    <p>${post.body}</p>
    `
    attach.appendChild(createElement)
  });
}