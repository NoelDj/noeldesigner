window.addEventListener("DOMContentLoaded", init)

const url = new URLSearchParams(window.location.search)
const id = url.get("id")
const project = url.get("title")
var path = window.location.pathname;
const parts = path.substr(1).split('/');
console.log(parts[2],id)
console.log(project)

function init() {
    fetch("https://api.flotiq.com/api/v1/content/portfolio/" + parts[2]||id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'X-AUTH-TOKEN': '3e0038a25fb37877aca300260ceb0524'
            }
        })
        .then(response => {
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new TypeError("Oops, we haven't got JSON!");
            }
            return response.json();
        })
        .then(showProjects)
}


function showProjects(project) {

    document.title = "Noel's portfolio - " + project.name

    document.querySelector('h1').textContent = project.name

    document.querySelector('h2').textContent = project.subheading

    document.querySelector('#link').href = project.link

    document.querySelector('.thumbnail').src = '../../images/thumbnails/' + project.thumbnail

    document.querySelector('article').innerHTML = project.content



}