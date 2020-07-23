const possibleHexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']; 
const hexValues = [0, 0, 0, 0, 0, 0]; 
const clickButton = document.querySelector('#btn'); 
const hexValue = document.querySelector('#hex-value');  

clickButton.addEventListener('click', () => {
    hexValues.forEach(function(item, index, array) {
       array[index] = possibleHexValues[parseInt(Math.random() * possibleHexValues.length)];
    })
    const hexValuesString = hexValues.join(''); 
    const randomisedHexValue = `#${hexValuesString}`;
    document.body.style.backgroundColor = randomisedHexValue; 
    hexValue.innerText = randomisedHexValue; 
})
