const smoothScroll = () => {
  const scrolls = document.querySelectorAll('.scroll-link');

  scrolls.forEach((scroll) => {
    scroll.addEventListener('click', (event) => {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  })
}

export default smoothScroll();
