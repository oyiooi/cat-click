let clickNumber=0,
    image=document.querySelector('img');

    image.addEventListener('click',function(){
        clickNumber++;
        document.querySelector('p').innerText='clicknumber:'+clickNumber;
    })

    