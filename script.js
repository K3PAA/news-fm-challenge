const navToggle = document.querySelector('.mobile-nav-toggle')
const nav = document.querySelector('.primary--navigation')
const iconOpen = document.querySelector('.icon-open')
const iconClose = document.querySelector('.icon-close')

navToggle.addEventListener('click', () => {
  iconOpen.classList.toggle('active')
  iconClose.classList.toggle('active')

  iconOpen.className.includes('active')
    ? nav.classList.remove('active')
    : nav.classList.add('active')
})
