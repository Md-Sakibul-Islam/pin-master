
// generatePin function 
function generatePin() {
    let pin = Math.round(Math.random() * 9000) + 1000;
    return pin;

}

// click generate button and set pin
document.getElementById('go-pin').addEventListener('click', function () {
    let pin = generatePin();
    document.getElementById('display-pin').value = pin;
});

// click key for set input field password 
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedValue = document.getElementById('typed-pin');
    if (isNaN(number)) {
        if (number == 'C') {
            typedValue.value = '';
        }
        if (number == '<') {
            // remove one by one number in input field 
            const values = document.getElementById('typed-pin').value;
            const removeValues = values.slice(0, values.length - 1);
            document.getElementById('typed-pin').value = removeValues;

        }
    } else {
        // showing multiple number in input field 
        const preTypedValue = typedValue.value;
        const newValue = preTypedValue + number;
        typedValue.value = newValue;
    }



})
// tryLeft function for 3 times 
function tryLeft(){
  const tryValue =  document.getElementById('try-content').innerText;
  
        const leftValue = parseInt(tryValue) - 1;
    
        if(leftValue == -1){
      
               const btn= document.getElementById('submitBtn');
               btn.style.cursor = 'not-allowed'
               btn.style.setAttribute('disable','true');
            
        }
        document.getElementById('try-content').innerText= leftValue;
}

document.getElementById('submitBtn').addEventListener('click', function () {
    const pin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-pin').value;
  
    if (pin == typedPin && pin != '') {
        matched.style.display = 'block';
        unMatched.style.display = 'none';
    } else {
        unMatched.style.display = 'block';
        matched.style.display = 'none';
        tryLeft();
    }
});