// const inputChange = document.querySelector('input#font-size-control')
// const abracadabra = document.querySelector('span#text')

// inputChange.addEventListener('change', e => {
//     abracadabra.style.fontSize = `${e.target.value }px`
// })


const fontSizeControlInput = document.querySelector('#font-size-control');
const textChange = document.querySelector('#text');

fontSizeControlInput.addEventListener('input', onInputChange);

function onInputChange({ target: { value } }) {
  textChange.style.fontSize = `${value}px`;
}

