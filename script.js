const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const buttonEntrar = document.querySelector('#buttonEntrar');
buttonEntrar.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const buttonSubmit = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
buttonSubmit.disabled = true;
checkbox.addEventListener('click', () => {
  buttonSubmit.disabled = false;
});


const textAreaLength = () => {
  const textArea = document.querySelector('#textarea');
  textArea.addEventListener('input', () => {
    document.querySelector('#counter').innerText = `${500 - textArea.value.length}`;
  });
};
textAreaLength();

