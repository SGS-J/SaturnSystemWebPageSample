const pageForm = document.querySelector('form');
const btn = document.querySelector('.btn-submit');

pageForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

btn.addEventListener('click', (e) => {
  const formData = new FormData(pageForm);

  const res = fetch('http://localhost:8080/user/add', {
    body: formData,
    method: 'POST',
  }).catch((error) => {
    console.log(error);
  });
  console.log(res);
  /*.then((res) => {
    location.reload();
  });+*/
});
