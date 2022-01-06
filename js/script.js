'use strict';
const form = document.getElementById('form_id');
const [
	emailErr,
	passwordErr,
	markErr
] = document.querySelectorAll('.errors');
const inputEmail = document.getElementById('email_input');
const emailLabel = document.querySelector('.input-email_label');
const inputPassword = document.getElementById('password-input');
const passLabel = document.querySelector('.input-password_label');
const checkBox = document.querySelector('.checkbox-click');
const mark = document.querySelector('.form-login__checkbox-mark');

inputEmail.addEventListener('keyup', function () {
	const email = inputEmail.value;
	 if (email == '') {
		emailErr.innerHTML = 'Поле обязательно для заполнения';
		inputEmail.style.border = '2px solid #CB2424';
		emailLabel.style.color = '#CB2424';
	} else if (!validateEmail(email)) {
		emailErr.innerHTML = 'Email невалидный';
		inputEmail.style.border = '2px solid #CB2424';
		emailLabel.style.color = '#CB2424';
	} else {
		 emailErr.innerHTML = '';
		 inputEmail.style.border = '2px solid #787878';
		 emailLabel.style.color = '#787878';
	 }
});

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

inputPassword.addEventListener('keyup', function() {
	const pass = inputPassword.value;
	if (pass == '') {
		passwordErr.innerHTML = 'Поле обязательно для заполнения';
		inputPassword.style.border = '2px solid #CB2424';
		passLabel.style.color = '#CB2424';
	}
	else if (pass.length < 8) {
		passwordErr.innerHTML = 'Пароль должен содержать как минимум 8 символов';
		inputPassword.style.border = '2px solid #CB2424';
		passLabel.style.color = '#CB2424';
	} else {
		passwordErr.innerHTML = '';
		inputPassword.style.border = '2px solid #787878';
		passLabel.style.color = '#787878';
	}
});

checkBox.addEventListener('click', (event) => {
	if (!checkBox.checked) {
		markErr.innerHTML = 'Поле обязательно для заполнения';
		mark.style.borderColor = '#CB2424';
		mark.style.color = '#CB2424';
	} else {
		markErr.innerHTML = '';
		mark.style.borderColor = '#787878';
		mark.style.color = '#787878'
	}
})


form.addEventListener('submit', (event) => {
	const email = inputEmail.value;
	const pass = inputPassword.value;

		if (email == '') {
			emailErr.innerHTML = 'Поле обязательно для заполнения';
			inputEmail.style.border = '2px solid #CB2424';
			emailLabel.style.color = '#CB2424';
		} else if (!validateEmail(email)) {
			emailErr.innerHTML = 'Email невалидный';
			inputEmail.style.border = '2px solid #CB2424';
			emailLabel.style.color = '#CB2424';
		} else {
			emailErr.innerHTML = '';
			inputEmail.style.border = '2px solid #787878';
			emailLabel.style.color = '#787878';
		}

		if (pass == false) {
			passwordErr.innerHTML = 'Поле обязательно для заполнения';
			inputPassword.style.border = '2px solid #CB2424';
			passLabel.style.color = '#CB2424';
		}
		else if (pass.length < 8) {
			passwordErr.innerHTML = 'Пароль должен содержать как минимум 8 символов';
			inputPassword.style.border = '2px solid #CB2424';
			passLabel.style.color = '#CB2424';
		} else {
			passwordErr.innerHTML = '';
			inputPassword.style.border = '2px solid #787878';
			passLabel.style.color = '#787878';
		}

		if (!checkBox.checked) {
			markErr.innerHTML = 'Поле обязательно для заполнения';
			mark.style.borderColor = '#CB2424';
			mark.style.color = '#CB2424';
		} else {
			markErr.innerHTML = '';
			mark.style.borderColor = '#787878';
			mark.style.color = '#787878'
		}

		if (!checkBox.checked || pass.length < 8 || !validateEmail(email)) {
			console.log('Не все поля заполнены');
		} else {
			for (let i = 0; i < form.length - 1; i++) {
				console.log('Сохранённое значение:', form.elements[i].value)}
		}

	event.preventDefault();
});



