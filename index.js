// heart count function

function totalheart(){
    const countheartE1=document.getElementById('heart-count')
    const currentHeart=parseInt(countheartE1.innerText)
    const neWCount=currentHeart+1;
    countheartE1.innerText=neWCount
    return neWCount
}


// calling function

function calingHotline(serviceName,serviceNumber){

    const coinMoneyE1=document.getElementById('coin')
    const coinMoney=parseInt(coinMoneyE1.innerText)
    if(coinMoney>=20)
    {
       alert('📞'+ ' ' +'Calling' +' '+serviceName+' '+serviceNumber)
        setHistroy(serviceName,serviceNumber)
        const finalMoney=coinMoney-20;
        coinMoneyE1.innerText=finalMoney;
        
    }
   else{
    alert('❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ টি কয়েন লাগবে')
   }
}


// clear function

function setHistroy(serviceName,serviceNumber)
{
const previousElement=document.getElementById('history-content')

    const currentTime=new Date().toLocaleTimeString()
        previousElement.innerHTML +=` <div class="bg-[#fafafa] rounded-[8px] grid grid-cols-12 gap-3  p-2 m-3 ">
         <div class="col-span-7">
          <h3 class="font-semibold text-[11px]"id="railway-text">${serviceName} </h3>
          <h2 class="text-[#5c5c5c]">${serviceNumber}</h2>
         
         </div>
          <div class="col-span-5  text-[12px]">
             <span>${currentTime}</span>
          </div>
      </div>`
    
   

   
}

//copy count function
function totalcopy(id){
    const countCopyE1=document.getElementById('copy-text')
    const currentCopy=parseInt(countCopyE1.innerText)
    const neWCount=currentCopy+1;
    countCopyE1.innerText=neWCount
     const serviceNumber=document.getElementById(id).innerText
     navigator.clipboard.writeText(serviceNumber)
    alert("Copied: "+serviceNumber)
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
    
    calingHotline(serviceText,serviceNumber)
 
})
document.getElementById('police-call').addEventListener('click',function(){
    
    const serviceText=document.getElementById('police-service-text').innerText
    const serviceNumber=document.getElementById('police-service-num').innerText
    calingHotline(serviceText,serviceNumber)
})
document.getElementById('fire-call').addEventListener('click',function(){
    
    const serviceText=document.getElementById('fire-service-text').innerText
    const serviceNumber=document.getElementById('fire-service-num').innerText
     calingHotline(serviceText,serviceNumber)
    
})
document.getElementById('ambulance-call').addEventListener('click',function(){
    
    const serviceText=document.getElementById('ambulance-service-text').innerText
    const serviceNumber=document.getElementById('ambulance-service-num').innerText
    calingHotline(serviceText,serviceNumber)
     
})
document.getElementById('Women-child-call').addEventListener('click',function(){
    
    const serviceText=document.getElementById('Women-child-text').innerText
    const serviceNumber=document.getElementById('Women-child-num').innerText
    calingHotline(serviceText,serviceNumber)
    
})
document.getElementById('helpline-service-call').addEventListener('click',function(){
    
    const serviceText=document.getElementById('helpline-service-text').innerText
    const serviceNumber=document.getElementById('helpline-service-num').innerText
     calingHotline(serviceText,serviceNumber)
     
})
document.getElementById('electricity-call').addEventListener('click',function(){
    
    const serviceText=document.getElementById('electricity-text').innerText
    const serviceNumber=document.getElementById('electricity-num').innerText
   calingHotline(serviceText,serviceNumber)
     
})
document.getElementById('brac-call').addEventListener('click',function(){
    
    const serviceText=document.getElementById('brac-text').innerText
    const serviceNumber=document.getElementById('brac-num').innerText
     calingHotline(serviceText,serviceNumber)
     
})
document.getElementById('railway-call').addEventListener('click',function(){
    
    const serviceText=document.getElementById('railway-text').innerText
    const serviceNumber=document.getElementById('railway-num').innerText
     calingHotline(serviceText,serviceNumber)
     
})

// clear button task

document.getElementById('clear-button').addEventListener('click',function(){
const historyDiv=document.getElementById('history-content')
historyDiv.innerHTML='';
})








// copy icon er task

document.getElementById('national-copy-icon').addEventListener('click',function(){
    totalcopy('national-service-num')

})
document.getElementById('police-copy-icon').addEventListener('click',function(){
    totalcopy('police-service-num')

})
document.getElementById('fire-copy-icon').addEventListener('click',function(){
    totalcopy('fire-service-num')

})
document.getElementById('ambulance-copy-icon').addEventListener('click',function(){
    totalcopy('ambulance-service-num')

})
document.getElementById('Women-child-copy').addEventListener('click',function(){
    totalcopy('Women-child-num')

})
document.getElementById('helpline-copy-icon').addEventListener('click',function(){
    totalcopy('helpline-service-num')

})
document.getElementById('electricity-copy-icon').addEventListener('click',function(){
    totalcopy('electricity-num')

})
document.getElementById('brac-copy-icon').addEventListener('click',function(){
    totalcopy('brac-num')

})
document.getElementById('railway-copy-icon').addEventListener('click',function(){
    totalcopy('railway-num')

})