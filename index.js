// heart count function

function totalheart(){
    const countheartE1=document.getElementById('heart-count')
    const currentHeart=parseInt(countheartE1.innerText)
    const neWCount=currentHeart+1;
    countheartE1.innerText=neWCount
    return neWCount
}


// calling function

function calingHotline(text){

    const coinMoneyE1=document.getElementById('coin')
    const coinMoney=parseInt(coinMoneyE1.innerText)
    if(coinMoney>=20)
    {
       alert('📞'+ ' ' +'Calling' +' '+text)
        const finalMoney=coinMoney-20;
        coinMoneyE1.innerText=finalMoney;
    }
   else{
    alert('❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ টি কয়েন লাগবে')
   }
}

// heart click code

document.getElementById('national-heart').addEventListener('click',function(){
    totalheart('');
})
document.getElementById('police-heart').addEventListener('click',function(){
    totalheart('');
})
document.getElementById('fire-heart').addEventListener('click',function(){
    totalheart('');
})
document.getElementById('ambulance-heart').addEventListener('click',function(){
    totalheart('');
})
document.getElementById('Women-child-heart').addEventListener('click',function(){
    totalheart('');
})
document.getElementById('helpline-heart').addEventListener('click',function(){
    totalheart('');
})
document.getElementById('electricity-heart').addEventListener('click',function(){
    totalheart('');
})
document.getElementById('brac-heart').addEventListener('click',function(){
    totalheart('');
})
document.getElementById('railway-heart').addEventListener('click',function(){
    totalheart('');
})



// calling button code

document.getElementById('national-call').addEventListener('click',function(){
    
    const serviceText=document.getElementById('national-text').innerText
    const serviceNumber=document.getElementById('national-service-num').innerText
    const servicetextfinal=serviceText+" "+serviceNumber
    calingHotline(servicetextfinal)
})
document.getElementById('police-call').addEventListener('click',function(){
    
    const serviceText=document.getElementById('police-service-text').innerText
    const serviceNumber=document.getElementById('police-service-num').innerText
    const servicetextfinal=serviceText+" "+serviceNumber
    calingHotline(servicetextfinal)
})
document.getElementById('fire-call').addEventListener('click',function(){
    
    const serviceText=document.getElementById('fire-service-text').innerText
    const serviceNumber=document.getElementById('fire-service-num').innerText
    const servicetextfinal=serviceText+" "+serviceNumber
    calingHotline(servicetextfinal)
})
document.getElementById('ambulance-call').addEventListener('click',function(){
    
    const serviceText=document.getElementById('ambulance-service-text').innerText
    const serviceNumber=document.getElementById('ambulance-service-num').innerText
    const servicetextfinal=serviceText+" "+serviceNumber
    calingHotline(servicetextfinal)
})
document.getElementById('Women-child-call').addEventListener('click',function(){
    
    const serviceText=document.getElementById('Women-child-text').innerText
    const serviceNumber=document.getElementById('Women-child-num').innerText
    const servicetextfinal=serviceText+" "+serviceNumber
    calingHotline(servicetextfinal)
})
document.getElementById('helpline-service-call').addEventListener('click',function(){
    
    const serviceText=document.getElementById('helpline-service-text').innerText
    const serviceNumber=document.getElementById('helpline-service-num').innerText
    const servicetextfinal=serviceText+" "+serviceNumber
    calingHotline(servicetextfinal)
})
document.getElementById('electricity-call').addEventListener('click',function(){
    
    const serviceText=document.getElementById('electricity-text').innerText
    const serviceNumber=document.getElementById('electricity-num').innerText
    const servicetextfinal=serviceText+" "+serviceNumber
    calingHotline(servicetextfinal)
})
document.getElementById('brac-call').addEventListener('click',function(){
    
    const serviceText=document.getElementById('brac-text').innerText
    const serviceNumber=document.getElementById('brac-num').innerText
    const servicetextfinal=serviceText+" "+serviceNumber
    calingHotline(servicetextfinal)
})
document.getElementById('railway-call').addEventListener('click',function(){
    
    const serviceText=document.getElementById('railway-text').innerText
    const serviceNumber=document.getElementById('railway-num').innerText
    const servicetextfinal=serviceText+" "+serviceNumber
    calingHotline(servicetextfinal)
})