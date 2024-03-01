document.querySelector('.menu-burger').addEventListener('click', (e) => {
    e.target.classList.toggle('open')
    document.querySelector('.menu').classList.toggle('active')
    document.body.classList.toggle('hide-overflow')

})

document.querySelector('#close').addEventListener('click', (e) => {
    document.querySelector('.menu').classList.remove('active')
    document.querySelector('#main-menu-button').classList.remove('open')
    document.body.classList.remove('hide-overflow')
})

document.querySelectorAll('.page-links a').forEach(a => {
    a.addEventListener('click', (e) => {
        document.body.classList.remove('hide-overflow')
        document.querySelector('.menu').classList.remove('active')
        document.querySelector('#main-menu-button').classList.remove('open')
    })
})