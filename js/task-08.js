const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert(
      'All fields are due buti orders! \n Всі поля повині бути заповнені',
    );
  }

  const user = {};
  user.email = email.value;
  user.password = password.value;

  console.log(user);
  event.currentTarget.reset();
}
