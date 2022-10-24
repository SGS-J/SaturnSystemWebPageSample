const pageForm = document.querySelector('form');
const btn = document.querySelector('.btn-submit');

pageForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

btn.addEventListener('click', (e) => {
  const formData = new FormData(pageForm);

  fetch('http://localhost:8080/user/add', {
    body: formData,
    method: 'POST',
  })
    .then((res) => {
      res.json().then((json) => {
        console.log(json);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  /*.then((res) => {
    location.reload();
  });+*/
});
