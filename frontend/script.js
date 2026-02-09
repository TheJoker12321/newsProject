const APIKEY = "e14892a224088180c7dc641eadda1c2e"
const URL = `https://gnews.io/api/v4/search?q=Google&lang=en&max=5&apikey=${APIKEY}`

function goHome() {

    document.getElementById('news').style.display = 'block'
    document.getElementById('create-story').style.display = 'none'
}

function goForm() {

    document.getElementById('news').style.display = 'none'
    document.getElementById('create-story').style.display = 'block'
}

const data = fetch(URL).then((data) => data.json()).then((user) => user.articles)

for (const article of data) {

    console.log(article);
    
}