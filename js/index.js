"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
    
    fetch("https://api.flotiq.com/api/v1/content/portfolio?limit=5", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'X-AUTH-TOKEN': '3e0038a25fb37877aca300260ceb0524'
            }
        })
        .then(response => {
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new TypeError("No JSON found.");
            }
            return response.json();
        })
        .then(handleData)
}

function handleData(items) {
    items.data.forEach(handleItems)
    allProjects()
    startGsap()
}

function handleItems(project) {    
    const copy = document.querySelector('template').content.cloneNode(true)

    copy.querySelector('.project-name').textContent = project.name
    copy.querySelector('.category').textContent = project.category
    copy.querySelector('.thumbnail').src = 'images/thumbnails/' + project.thumbnail
    copy.querySelector('.thumbnail').alt = project.name + ' portfolio design'

    copy.querySelector('.description').textContent = project.subheading

    copy.querySelector('.link').href = `project/${changeString(project.name)}/${project.id}`


    copy.querySelector('.project').id = project.id
    document.querySelector('.content').appendChild(copy)
}

function allProjects() {
    const card = document.createElement('article')
    card.classList.add("project")
    card.innerHTML = `<div class="img-box">
                            <img class="thumbnail" src="images/compressed/naturally.png" alt="">
                        </div>
                        <div class="article-text">
                            <h2 class="project-name" id="all-projects">All Projects</h2>
                            <a class="link" href="multimedia-projects">See All</a>
                        </div>`
    document.querySelector('.content').appendChild(card)
}


function changeString(string) {
    return string.toLowerCase().split(' ').join('-')
}

function startGsap() {
    let script = document.createElement('script');
    script.src = 'js/gsap.js';
    document.head.appendChild(script);
}   

const x = window.innerHeight;

window.addEventListener("scroll", function () {

    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

