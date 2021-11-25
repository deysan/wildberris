const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link');

  const getData = () => {
    fetch('https://willberries-775aa-default-rtdb.europe-west1.firebasedatabase.app/db.json')
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('goods', JSON.stringify(data))
      })
  }

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      getData();
    })
  })
}

export default getGoods;
