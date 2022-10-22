const pageForm = document.querySelector('form');

pageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(pageForm);

  fetch('http://localhost:8080/user/add', {
    body: formData,
    method: 'POST',
  });
  /*.then((res) => {
    location.reload();
  });+*/
});
