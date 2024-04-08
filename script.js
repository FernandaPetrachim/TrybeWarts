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

const areaText = () => {
  const textArea = document.querySelector('#textarea');
  textArea.addEventListener('input', () => {
    document.querySelector('#counter').innerText = `${500 - textArea.value.length}`;
  });
};
areaText();

// const formInfos = document.querySelector('#form-data');
// const nome = document.querySelector('#input-name');
// const sobrenome = document.querySelector('#input-lastname')
// const emails = document.querySelector('#input-email');
// const house = document.querySelector('#house');
// const familia = document.querySelectorAll('input[name="family"]');
// const materias = document.querySelectorAll('.subject');
// const avaliação = document.querySelectorAll('input[name="rate"]');
// const formulario = document.querySelector('#evaluation-form');
// const texto = document.querySelector('textarea');

// buttonSubmit.addEventListener('click', (event) => {
//     event.preventDefault();
//     let familiachecked = '';
//     for (let index1 = 0; index1 < familia.length; index1 += 1) {
//     if (familia[index1].checked) {
//         familiachecked = familia[index1].value;
//         }
//     }
//     let materiasSelecionadas = '';
//     for (let index2 = 0; index2 < materias.length; index2 += 1) {
//         if (materias[index2].checked) {
//             materiasSelecionadas += `${materias[index2].value}, `;
//         }
//     }
//     let avaliaçãoselecionada = '';
//     for (let index3 = 0; index3 < avaliação.length; index3 += 1) {
//         if (avaliação[index3].checked) {
//             avaliaçãoselecionada = avaliação[index3].value;
//         }
//     }

//     let infos = [`Nome: ${nome.value} ${sobrenome.value}`, `Email: ${emails.value}`, `Casa: ${house.value}`, `Família: ${familiachecked}`, `Matérias: ${materiasSelecionadas}`, `Avaliação: ${avaliaçãoselecionada}`, `Observações: ${texto.value}`];
//     for (let index = 0; index < infos.length; index += 1) {
//         const parag = document.createElement('p');
//         parag.innerText = infos[index];
//         formInfos.appendChild(parag);
//     }
//     formulario.style.display = 'none';
//     formInfos.style.display = 'block';
// })

const formInfos = document.querySelector('#form-data');
const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const emails = document.querySelector('#input-email');
const house = document.querySelector('#house');
const familia = document.querySelectorAll('input[name="family"]');
const materias = document.querySelectorAll('.subject');
const avaliação = document.querySelectorAll('input[name="rate"]');
const formulario = document.querySelector('#evaluation-form');
const texto = document.querySelector('textarea');

formInfos.style.display = 'none';

const familySelect = () => {
  let familiachecked = '';
  for (let index1 = 0; index1 < familia.length; index1 += 1) {
    if (familia[index1].checked) {
      familiachecked = familia[index1].value;
    }
  } return familiachecked;
};
const materiasSelect = () => {
  let materiasSelecionadas = '';
  for (let index2 = 0; index2 < materias.length; index2 += 1) {
    if (materias[index2].checked) {
      materiasSelecionadas += `${materias[index2].value}, `;
    }
  } return materiasSelecionadas;
};
const avaliaçõesSelect = () => {
  let avaliaçãoselecionada = '';
  for (let index3 = 0; index3 < avaliação.length; index3 += 1) {
    if (avaliação[index3].checked) {
      avaliaçãoselecionada = avaliação[index3].value;
    }
  } return avaliaçãoselecionada;
};

buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const matSelec = `Matérias: ${materiasSelect()}`;
  const fam = `Família: ${familySelect()}`;
  const aval = `Avaliação: ${avaliaçõesSelect()}`;
  const nomeInfos = `Nome: ${nome.value} ${sobrenome.value}`;
  const emailInfos = `Email: ${emails.value}`;
  const casaInfos = `Casa: ${house.value}`;
  const obs = `Observações: ${texto.value}`;
  const infos = [nomeInfos, emailInfos, casaInfos, fam, matSelec, aval, obs];
  for (let index = 0; index < infos.length; index += 1) {
    const parag = document.createElement('p');
    parag.innerText = infos[index];
    formInfos.appendChild(parag);
  }
  formulario.style.display = 'none';
  formInfos.style.display = 'block';
});
