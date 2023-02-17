/*      AUTHORIZATION CHANGE        */

let button = document.querySelector(".login-form__btn");
let form = document.querySelector('#login__form');
let errors = [];

//Проверка для каждого поля (поля получаем по одному в функции ниже в цикле)
function checkValidity(input) {
    let validity = input.validity;
    let inpName = input.name;

    if (input.value == "") {
        errors.push(`Поле ${inpName} не заполнено`); }

    if (validity.patternMismatch) 
		{ errors.push(`Неверный формат заполнения ${inpName}`); }
    
		if (validity.tooLong) 
		{ let maxlength = input.maxLength;
			errors.push(`Слишком длинное значение ${inpName}! Максимальная длина:  ` + maxlength + `<br>`); }
    
		if (validity.tooShort) 
		{ let minlength = input.minLength;
			errors.push(`Слишком короткое значение ${inpName}! Минимальная длина: ` + minlength + `<br>`); }

        if (validity = false) {
            alert('Welcome!');
        }
}

button.addEventListener('click', ()=>{
//Проверка для всех полей
	//получаем все инпуты
    let inputs = document.querySelectorAll("input");

    regexp = /[A-Za-zА-Яа-яЁё]/gi; 

	//перебираем их и на каждый вызываем функцию валидации
    for (let input of inputs) {
        //console.log(input);
        checkValidity(input);
    }

	//выводим ошибки в div 
    let errorDiv = document.querySelector('.errors__info');
    errorDiv.innerHTML = errors.join('\n');

    if (errors.length == 0) {
        alert(`Welcome, ${document.getElementById("email__input").value}`);
        location.reload(); //перезагружаем страницу, если всё введено корректно, 
        //чтобы очистить поля для дальнейшего ввода
    }

    errors = []; //чистим массив

});