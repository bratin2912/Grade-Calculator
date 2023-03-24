let inputValue = document.querySelectorAll('.inp');
let btn = document.getElementById('form-btn');
let grand_total = document.getElementById('total');
let ave = document.getElementById('ave');
let grade = document.getElementById('grade');
let length = inputValue.length;
const calculate = () => {
    let total = 0;
    let count = 0;
    for (let i = 0; i < length; i++) {
        if (+inputValue[i].value > 100) {
            alert('Please enter marks in range of 100')
            break;
        }
        else if(inputValue[i].value==="") {
            alert('Please fill all the field first')
            break;
        }
        else {
            total += +inputValue[i].value;
            count++;
        }
    }
    if (count == 5) {
        let average = total / 5;
        grand_total.innerText = `Total marks ${total}`;
        ave.innerText = `Your average marks are ${average}`;
        if (average >= 90) {
            grade.innerText = `You got A grade`
        }
        else if (average >= 80) {
            grade.innerText = `You got B grade`
        }
        else if (average >= 70) {
            grade.innerText = `You got C grade`
        }
        else if (average >= 60) {
            grade.innerText = `You got D grade`
        }
        else {
            grade.innerText = `You got F grade`
        }

    }
    else{
        for (let i = 0; i < length; i++){
            inputValue[i].value="";
        }
    }

}





btn.addEventListener('click', calculate)