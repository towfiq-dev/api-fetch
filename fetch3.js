const url = 'http://127.0.0.1:5500/api.txt'
const displayData = () => {
fetch(url)
.then(response => response.json())
.then(data => {
const docs = document.getElementById('section-data')
docs.innerText = data
})
}