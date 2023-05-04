const card1 = document.querySelector('.card')
const card2 = document.querySelector('.c2')
const w_alert = document.querySelector('.alert')
const arrRating = document.querySelectorAll('.rating ul li')
const o_rating = document.getElementById('y-rating')
const tsubmit = document.querySelector('.submit-button')
let v_rating = 0;
let active

for (let i = 0; i < arrRating.length; i++) {
 
    arrRating[i].addEventListener('click', () => {
        v_rating = arrRating[i].innerText
        for (let j = 0; j < arrRating.length; j++) {
            arrRating[j].classList = 'f'
        }
        arrRating[i].classList = 'rating-active'
        return false
    })
}

tsubmit.addEventListener('click', () => {
    if(v_rating == 0){
        w_alert.style.display = 'block'
    } else {
        card1.style.display = 'none'
        card2.style.display = 'block'
        o_rating.innerHTML = v_rating
    }
})