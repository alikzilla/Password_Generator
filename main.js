const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialSigns = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}',
    ';', ':', '<', '>', '.', ',', '/', '?', '|'];

const generateBtn = document.querySelector('.button');
let textField = document.querySelector('.value');
let lengthCheck = document.querySelector('.length');
let upperCheck = document.querySelector('.upper');
let lowerCheck = document.querySelector('.lower');
let digitCheck = document.querySelector('.digit');
let specialCheck = document.querySelector('.special');
let imageYes = document.querySelector('.image1');
let imageNo = document.querySelector('.image');
let imageYes1 = document.querySelector('.image3');
let imageNo1 = document.querySelector('.image2');
let imageYes2 = document.querySelector('.image5');
let imageNo2 = document.querySelector('.image4');
let imageYes3 = document.querySelector('.image7');
let imageNo3 = document.querySelector('.image6');
let imageYes4 = document.querySelector('.image9');
let imageNo4 = document.querySelector('.image8');


generateBtn.addEventListener('click', generate);

textField.addEventListener('input', function (){
    let item = textField.value;
    checkLength(item);
    checkForUpper(item);
    checkForLower(item);
    checkForDigits(item);
    checkForSpecial(item);
});

function generate() {
    let password = create();
    if(checkLength(password) && checkForSpecial(password) && checkForLower(password) &&
        checkForUpper(password) && checkForDigits(password)){
        textField.value = password;
    }else{
        generate();
    }
}

function create(){
    let password = "";
    while (password.length <= 12) {
        let numOfArray = Math.floor(Math.random() * 4);
        switch (numOfArray) {
            case 0:
                let upperIndex = Math.floor(Math.random() * uppercaseLetters.length);
                password += uppercaseLetters[upperIndex];
                break;
            case 1:
                let lowerIndex = Math.floor(Math.random() * lowercaseLetters.length);
                password += lowercaseLetters[lowerIndex];
                break;
            case 2:
                let numbersIndex = Math.floor(Math.random() * numbers.length);
                password += numbers[numbersIndex];
                break;
            case 3:
                let specialIndex = Math.floor(Math.random() * specialSigns.length);
                password += specialSigns[specialIndex];
                break;
        }
    }
    return password;
}

function checkLength(password){
    if(password.length >= 8){
        lengthCheck.classList.add('active');
        imageYes.style.display = "block";
        imageNo.style.display = "none";
        return true;
    }
    lengthCheck.classList.remove('active');
    imageYes.style.display = "none";
    imageNo.style.display = "block";
	return false;
}

function checkForDigits(password){
    for (let i = 0; i < password.length; i++) {
        if( !isNaN(password.charAt(i)) ){
            digitCheck.classList.add('active');
            imageYes3.style.display = "block";
            imageNo3.style.display = "none";
            return true;
        }
    }
    digitCheck.classList.remove('active');
    imageYes3.style.display = "none";
    imageNo3.style.display = "block";
    return false;
}

function checkForUpper(password) {
    const uppercaseRegex = /[A-Z]/;
    if(uppercaseRegex.test(password)){
        upperCheck.classList.add('active');
        imageYes1.style.display = "block";
        imageNo1.style.display = "none";
        return true;
    }
    upperCheck.classList.remove('active');
    imageYes1.style.display = "none";
    imageNo1.style.display = "block";
    return false;
}

function checkForLower(password) {
    const lowercaseRegex = /[a-z]/;
    if(lowercaseRegex.test(password)){
        lowerCheck.classList.add('active');
        imageYes2.style.display = "block";
        imageNo2.style.display = "none";
        return true;
    }
    lowerCheck.classList.remove('active');
    imageYes2.style.display = "none";
    imageNo2.style.display = "block";
    return false;
}

function checkForSpecial(password) {
    for (let i = 0; i < password.length; i++) {
        if (specialSigns.includes(password.charAt(i))) {
            specialCheck.classList.add('active');
            imageYes4.style.display = "block";
            imageNo4.style.display = "none";
            return true;
        }
    }
    specialCheck.classList.remove('active');
    imageYes4.style.display = "none";
    imageNo4.style.display = "block";
    return false;
}

function checkAll(password){
    checkForUpper(password);
    checkForLower(password);
    checkForDigits(password);
    checkForSpecial(password);
}