// const validationInput = document.querySelector('#validation-input');

// const validationInputLength = function () {
//   if (validationInput.value.length === Number(validationInput.dataset.length)) {
//     validationInput.classList.add('valid');
//   } else {
//     validationInput.classList.add('invalid');
//   }
// };

// validationInput.addEventListener('focus', () => {
//   validationInput.classList = '';
// });
// validationInput.addEventListener('blur', validationInputLength);

const input = document.querySelector('#validation-input');

const inputBorder = function (event) {
  input.classList.add('invalid');

  switch (event.currentTarget.value.length) {
    case Number(event.target.dataset.length):
      input.classList.replace('invalid', 'valid');
      break;
    case 0:
      input.classList.remove('invalid', 'valid');
      break;
  }
};
input.addEventListener('input', inputBorder);
