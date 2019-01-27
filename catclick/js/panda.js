let dataArray=[{name:'bird',url:'picture/bird.jpg'},
               {name:'cat',url:'picture/cat.jpg'},
               {name:'dog',url:'picture/dog.jpg'},
               {name:'pig',url:'picture/pig.jpg'},
               {name:'panda',url:'picture/panda.jpg'}];

let plist=document.createElement('ol');
document.body.appendChild(plist);

let disDiv=document.createElement('div');
document.body.appendChild(disDiv);

let disp=document.createElement('p');
disDiv.appendChild(disp);

let disimg=document.createElement('img');
disDiv.appendChild(disimg);

for(let i=0;i<dataArray.length;i++){
    let item=document.createElement('li');
    plist.appendChild(item);

    item.textContent=dataArray[i].name;

    item.addEventListener('click',(function (copyi) {
        return function (){
            disp.textContent='name:'+dataArray[copyi].name+' clickTime: ';
            disimg.src=dataArray[copyi].url;
            let clickTime=0;

            disimg.addEventListener('click',function(){
                clickTime++;
                disp.textContent='name:'+dataArray[copyi].name+' clickTime: '+clickTime;
            })
        };
    })(i));
}
