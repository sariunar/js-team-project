const paymentBlock1 = document.querySelector('.block-one')
const paymentBlock2 = document.querySelector('.block-two')
const paymentBlock3 = document.querySelector('.block-three')


//отображение цены при наведении на блоки
paymentBlock1.addEventListener('mouseover', function(){
    document.querySelector('.payment__on-click').style.display = "block";
})
paymentBlock1.addEventListener('mouseleave', function(){
    document.querySelector('.payment__on-click').style.display = "none";
})

paymentBlock2.addEventListener('mouseover', function(){
    document.querySelector('.payment__on-click2').style.display = "block";
})
paymentBlock2.addEventListener('mouseleave', function(){
    document.querySelector('.payment__on-click2').style.display = "none";
})

paymentBlock3.addEventListener('mouseover', function(){
    document.querySelector('.payment__on-click3').style.display = "block";
})
paymentBlock3.addEventListener('mouseleave', function(){
    document.querySelector('.payment__on-click3').style.display = "none";
})


const packageName = document.querySelector('.main-block__package-name-js')
const valideDate = document.querySelector('.main-block__valid-date-js')
const ExpiryDate = document.querySelector('.main-block__exp-date-js');
const totalSum = document.querySelector('.main-block__total-js');


let today = new Date();
let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
let oneWeek = new Date(today.getTime() + (7*24 * 60 * 60 * 1000));
let oneMonth = new Date(today.getTime() + (30*24 * 60 * 60 * 1000));

    //возвращаемся к первому шагу и очищаем инпут
    const backTostepOne = document.querySelector('.step-one')
    backTostepOne.addEventListener('click', function(){
        document.querySelector('.second-page').style.display = "none";
        document.querySelector('.payment__invisible').style.display = "block";
        document.querySelector('.payment__text_one').classList.add("payment__text_chosen");
        document.querySelector('.payment__text_two').classList.remove("payment__text_chosen");
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
ExpiryDate.classList.add("main-block__blue")
valideDate.classList.add("main-block__blue")
packageName.classList.add("main-block__blue")
totalSum.classList.add("main-block__blue")

//первый пакет
paymentBlock1.addEventListener('click', function(){
    clearInput()
    document.querySelector('.payment__invisible').style.display = "none";
    document.querySelector('.payment__text_two').classList.add("payment__text_chosen");
    document.querySelector('.payment__text_one').classList.remove("payment__text_chosen");
    document.querySelector('.second-page').style.display="block"
    //все отобразили, заполняем пакет:
    packageName.innerHTML += ` ${packageNames[0]} `
    valideDate.innerHTML += ` ${today} `
    ExpiryDate.innerHTML +=  ` ${tomorrow} `
    totalSum.innerHTML+= `${tariffs[0]}`
})

// второй пакет
paymentBlock2.addEventListener('click', function(){
    clearInput()
    document.querySelector('.payment__invisible').style.display = "none";
    document.querySelector('.payment__text_two').classList.add("payment__text_chosen");
    document.querySelector('.payment__text_one').classList.remove("payment__text_chosen");
    document.querySelector('.second-page').style.display="block"
    //все отобразили, заполняем пакет:
    packageName.innerHTML += ` ${packageNames[1]} `
    valideDate.innerHTML += ` ${today} `
    ExpiryDate.innerHTML +=  ` ${oneWeek} `
    totalSum.innerHTML+= `${tariffs[1]}`
})


//третий пакет
paymentBlock3.addEventListener('click', function(){
    clearInput()
    document.querySelector('.payment__invisible').style.display = "none";
    document.querySelector('.payment__text_two').classList.add("payment__text_chosen");
    document.querySelector('.payment__text_one').classList.remove("payment__text_chosen");
    document.querySelector('.second-page').style.display="block"
    //все отобразили, заполняем пакет:
    packageName.innerHTML += ` ${packageNames[2]} `
    valideDate.innerHTML += ` ${today} `
    ExpiryDate.innerHTML +=  ` ${oneMonth} `
    totalSum.innerHTML+= `${tariffs[2]}`
})


// 
const buttonConfirm = document.querySelector('.main-block__submit')