
const ratingBtns = Array.from(document.querySelectorAll('.rating.btn'))
const cards = Array.from(document.querySelectorAll('.card'))
const rating = document.querySelector('#rating')

function select(evt) {
    ratingBtns.map((btn)=> {
        return btn.classList.remove('active')
    })
const currentBtn = evt.currentTarget
currentBtn.classList.add('active')
const value = currentBtn.textContent

rating .textContent = value
}

function submit() {
    cards{0}.classList.add('hidden')
    cards{1}.classList.remove('hidden')
}