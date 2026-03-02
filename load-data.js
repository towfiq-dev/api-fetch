const url = 'http://jsonplaceholder.typicode.com/users'
const loadData =() => {
  fetch(url)
  .then(response => response.json())
  .then(data => displayData(data))
}

const displayData=(data)=>{
const section = document.getElementById('section-id')
for(const user of data){
  const p = document.createElement('p')
  p.innerText = user.phone
  section.appendChild(p)
}
}