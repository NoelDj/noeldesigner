"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
    
    fetch("https://api.flotiq.com/api/v1/content/portfolio", {
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
}

function handleItems(project) {    
    const copy = document.querySelector('template').content.cloneNode(true)

    copy.querySelector('.project-name').textContent = project.name
    copy.querySelector('.category').textContent = project.category
    copy.querySelector('.thumbnail').src = 'images/thumbnails/' + project.thumbnail
    copy.querySelector('.thumbnail').alt = project.name + ' portfolio design'

    copy.querySelector('.description').textContent = project.subheading

    copy.querySelector('.link').href = `project.html?id=${project.id}`


    copy.querySelector('.project').id = project.id
    document.querySelector('.content').appendChild(copy)
}


function changeString(string) {
    return string.toLowerCase().split(' ').join('-')
} 
