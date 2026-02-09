const APIKEY = "ea07ea6d6664c9a5b5a188d427e6ae71"
const URL = `https://gnews.io/api/v4/top-headlines?category=general&lang=he&country=il&max=10&apikey=${APIKEY}`
const container = document.getElementsByClassName('news')


function goHome() {

    document.getElementById('news').style.display = 'block'
    document.getElementById('create-story').style.display = 'none'
}

function goForm() {

    document.getElementById('news').style.display = 'none'
    document.getElementById('create-story').style.display = 'block'
}

const news = fetch(URL).then((data) => data.json()).then((data) => { return data.articles })

const articles = async () => {

    // container.innerHTML = ""
    let time = 0
    const data = await news
    for (const article of data) {

        if (time === 4) {

            break
        }



        container[time].innerHTML += `<div class="title">
                        <img width="100rem" height="100rem" src="${article.image}" alt="">
                        <div>
                            <p>${article.source.name}</p>
                            <h2 class="news-title">${article.title}</h2>
                        </div>
                    </div>
                    <p class="text-paragraph">${article.description}</p>`
        time += 1
    }
    
}
const preview = document.getElementById('imageForm')
const fileInput = document.querySelector("input[type=file]");

            fileInput.addEventListener("change", previewFile);

            function previewFile() {
            const file = fileInput.files[0];
            const reader = new FileReader();

            reader.addEventListener("load", () => {
            preview.src = reader.result;
        });

        if (file) {
        reader.readAsDataURL(file);
        }
}
document.getElementById("send").addEventListener("click",(event)=> {
    event.preventDefault()

        const title = document.getElementById('title').value
        const story = document.getElementById('story').value
        const articles = document.getElementById('articles')
        const article = document.createElement('article')
        article.className = 'news'
        article.innerHTML = `<div class="title">
                        <img width="100rem" height="100rem" src="${preview.src}" alt="">
                        <div>
                            <h2 class="news-title">${title}</h2>
                        </div>
                    </div>
                    <p class="text-paragraph">${story}</p>`

        console.log(article);
        
        articles.append(article)


    }
)

articles()
