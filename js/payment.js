const paymentBlock1 = document.querySelector('.block-one')
const paymentBlock2 = document.querySelector('.block-two')
const paymentBlock3 = document.querySelector('.block-three')


//отображение цены при наведении на блоки
//----хочу сократить функцию, но тогда при наведении отображаются сразу все три цены, а я хотела отдельно
let blocks  = [paymentBlock1, paymentBlock2, paymentBlock3]
let priceOnBlock1 = document.querySelector('.payment__on-click')
let priceOnBlock2 = document.querySelector('.payment__on-click2')
let priceOnBlock3 = document.querySelector('.payment__on-click3')

for (block of blocks) {
    block.addEventListener('mouseover', function(){
        priceOnBlock1.style.display = "block";
        priceOnBlock2.style.display = "block";
        priceOnBlock3.style.display = "block";

    })
    block.addEventListener('mouseleave', function(){
        priceOnBlock1.style.display = "none";
        priceOnBlock2.style.display = "none";
        priceOnBlock3.style.display = "none";
    })
}
// paymentBlock1.addEventListener('mouseover', function(){
//     document.querySelector('.payment__on-click').style.display = "block";
// })
// paymentBlock1.addEventListener('mouseleave', function(){
//     document.querySelector('.payment__on-click').style.display = "none";
// })

// paymentBlock2.addEventListener('mouseover', function(){
//     document.querySelector('.payment__on-click2').style.display = "block";
// })
// paymentBlock2.addEventListener('mouseleave', function(){
//     document.querySelector('.payment__on-click2').style.display = "none";
// })

// paymentBlock3.addEventListener('mouseover', function(){
//     document.querySelector('.payment__on-click3').style.display = "block";
// })
// paymentBlock3.addEventListener('mouseleave', function(){
//     document.querySelector('.payment__on-click3').style.display = "none";
// })


const packageName = document.querySelector('.main-block__package-name-js')
const valideDate = document.querySelector('.main-block__valid-date-js')
const ExpiryDate = document.querySelector('.main-block__exp-date-js');
const totalSum = document.querySelector('.main-block__total-js');


let today = new Date();
let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
let oneWeek = new Date(today.getTime() + (7*24 * 60 * 60 * 1000));
let oneMonth = new Date(today.getTime() + (30*24 * 60 * 60 * 1000));

    //возвращаемся к первому шагу и очищаем инпут
    const firstStepBlock = document.querySelector('.payment__first-step')
    const stepOneText =  document.querySelector('.payment__text_one')
    const stepTwoText = document.querySelector('.payment__text_two')
    const secondStepGo = document.querySelector('.payment__second-step')
    const backTostepOne = document.querySelector('.step-one')

    backTostepOne.addEventListener('click', function(){
        secondStepGo.style.display = "none";
        firstStepBlock.style.display = "block";
        stepOneText.classList.add("payment__text_chosen");
        stepTwoText.classList.remove("payment__text_chosen");
    })
    function clearInput(){
        packageName.innerHTML = "";
        valideDate.innerHTML ="";
        ExpiryDate.innerHTML="";
        totalSum.innerHTML=""
        }
    

//все названия, тариффы
packageNames = ["Premium 1 day", "Premium 1 week", "Premium 1 month"]
tariffs = ["0.49$", "1.99$", "5.99$"]
//придаем цвет тарифам
let linesWithColor =[ExpiryDate,valideDate,packageName,totalSum]
for (let i = 0; i < linesWithColor.length; i++) {
    linesWithColor[i].classList.add('main-block__blue');
}


//наверное можно сократить распределение по пакетам, но я еще не нашла способ
//первый пакет
paymentBlock1.addEventListener('click', function(){
    clearInput()
    firstStepBlock.style.display = "none";
    stepTwoText.classList.add("payment__text_chosen");
    stepOneText.classList.remove("payment__text_chosen");
    secondStepGo.style.display="block"
    //все отобразили, заполняем пакет:
    packageName.innerHTML += ` ${packageNames[0]} `
    valideDate.innerHTML += ` ${today} `
    ExpiryDate.innerHTML +=  ` ${tomorrow} `
    totalSum.innerHTML+= `${tariffs[0]}`
})

// второй пакет
paymentBlock2.addEventListener('click', function(){
    clearInput()
    firstStepBlock.style.display = "none";
    stepTwoText.classList.add("payment__text_chosen");
    stepOneText.classList.remove("payment__text_chosen");
    secondStepGo.style.display="block"
    //все отобразили, заполняем пакет:
    packageName.innerHTML += ` ${packageNames[1]} `
    valideDate.innerHTML += ` ${today} `
    ExpiryDate.innerHTML +=  ` ${oneWeek} `
    totalSum.innerHTML+= `${tariffs[1]}`
})


//третий пакет
paymentBlock3.addEventListener('click', function(){
    clearInput()
    firstStepBlock.style.display = "none";
    stepTwoText.classList.add("payment__text_chosen");
    stepOneText.classList.remove("payment__text_chosen");
    secondStepGo.style.display="block"
    //все отобразили, заполняем пакет:
    packageName.innerHTML += ` ${packageNames[2]} `
    valideDate.innerHTML += ` ${today} `
    ExpiryDate.innerHTML +=  ` ${oneMonth} `
    totalSum.innerHTML+= `${tariffs[2]}`
})


// 
// const buttonConfirm = document.querySelector('.main-block__submit')

// buttonConfirm.addEventListener('click', function(){
//     document.querySelector(".main-block__bank-card").style.display = "block"
// })

// aria-selected="false"



//выбираем платежную систему

const momoPay = document.getElementById('momo');
const paypalPay = document.getElementById('paypals');
const visaPay = document.getElementById('visa');
const zaloPay = document.getElementById('zalopay');

const pays = [momoPay,paypalPay,visaPay,zaloPay]

const visaTab = document.getElementById('visa-tab')
const paypalTab = document.getElementById('paypal-tab')
const momoTab = document.getElementById('momo-tab')
const zalopayTab = document.getElementById('zalopay-tab')
const tabs = [visaTab,paypalTab,momoTab,zalopayTab]

const buttonConfirm = document.querySelector('.main-block__submit')

function clearSelected(){
    momoTab.ariaSelected="false";
    momoTab.classList.remove('active')
    paypalTab.ariaSelected= "false";
    paypalTab.classList.remove('active')
    zalopayTab.ariaSelected= "false";
    zalopayTab.classList.remove('active')
    visaTab.ariaSelected= "false";
    visaTab.classList.remove('active')

}

buttonConfirm.addEventListener('click', function(){
    clearSelected()
if (momoPay.checked ) {
    momoTab.ariaSelected= "true";
    momoTab.classList.add('active')
}
else if (paypalPay.checked ) {
    paypalTab.ariaSelected= "true";
    paypalTab.classList.add('active')
}
else if (zaloPay.checked ) {
    zalopayTab.ariaSelected= "true";
    zalopayTab.classList.add('active')
}
else if (visaPay.checked ) {
    visaTab.ariaSelected= "true";
    visaTab.classList.add('active')
}
})

//выделяются все
// Array.from(pays).forEach((elem) => {
//     if (elem.checked) {
//         Array.from(tabs).forEach((e) => {
//             e.ariaSelected="true";
//             e.classList.add('active')
//         })
//     }
// })


const confirmPayment = document.querySelector('.bank__button-confirm')
const inputName =  document.getElementById('input__border')
const inputCard = document.getElementById('input__border2')
const ExpDate = document.getElementById('input__border3')
const cvc =  document.getElementById('input__border4')
const paymentErrors = document.querySelector('.payment-errors')

function checkName(inputName) {
    const letters = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    if(inputName.value.match(letters)){
        return true;
    }
    else {
        paymentErrors.classList.add('payment-errors__style')
        paymentErrors.innerHTML="Введите корректное имя и фамилию"
        inputName.focus();
        return false;
    }
}
function checkCard (inputCard) {
    let cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if(inputCard.value.match(cardno))
            {
        return true;
            }
        else
            {
        paymentErrors.classList.add('payment-errors__style')
        paymentErrors.innerHTML="Неверный номер карты Visa"
            return false;
            }
    }
function checkExpDate (ExpDate) {
    let date =/^((0[1-9])|(1[0-2]))\/((2009)|(20[1-2][0-9]))$/;
    if(ExpDate.value.match(date))
            {
        return true;
            }
        else
            {
                paymentErrors.classList.add('payment-errors__style')
                paymentErrors.innerHTML="Неверный expiration date"
            return false;
            }
    }
    function checkCvc (cvc) {
        let correctCvc =/^[0-9]{3}$/;
        if(cvc.value.match(correctCvc))
                {
            return true;
                }
            else
                {
                    paymentErrors.classList.add('payment-errors__style')
                    paymentErrors.innerHTML="Неверный cvc"
                return false;
                }
        }
confirmPayment.addEventListener('click', function(){
if (visaTab.classList.contains('active')){
    if (checkName(inputName)) {
        if(checkCard(inputCard) ) {
            if(checkExpDate(ExpDate) ){
                if(checkCvc(cvc)){
                    paymentErrors.innerHTML=""
                    alert (`${inputName.value}, ваша оплата проходит проверку`)
                }
            }
        }
    }
    return false;
}
}
)

