const paymentBlock1 = document.querySelector('.block-one')
const paymentBlock2 = document.querySelector('.block-two')
const paymentBlock3 = document.querySelector('.block-three')

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