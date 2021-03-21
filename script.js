document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.me').addEventListener('mouseover', () => {
        document.querySelector('.me').innerHTML = 'Work';
    })
    document.querySelector('.me').addEventListener('mouseleave', () => {
        document.querySelector('.me').innerHTML = 'Ben';
    })
})