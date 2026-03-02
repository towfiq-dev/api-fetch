const url = 'https://jsonplaceholder.typicode.com/posts'
const loadData =()=>{
  fetch(url)
  .then(response=> response.json())
  .then(data => displayPost(data))
}
const displayPost = (posts)=>{
  const docs = document.getElementById('section-id')
  posts.forEach(posts => {
    const createUl = document.createElement('li')
    createUl.innerText = posts.title

    docs.appendChild(createUl)
  })
}