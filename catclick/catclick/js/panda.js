/*
let clickNumber=0,
    image=document.querySelector('img');

    image.addEventListener('click',function(){
        clickNumber++;
        document.querySelector('p').innerText='name:panda;clicknumber:'+clickNumber;
    })
*/
function Cat (name,source) {
    this.name=name;
    this.source=source;
}

Cat.prototype.createACat=function(){
    let div,
        p,
        image,
        clickNumber=0;

    div=document.createElement('div');
    p=document.createElement('p');
    image=document.createElement('img');

    document.body.appendChild(div);
    div.appendChild(p);
    div.appendChild(image);

    image.src=this.source;
    p.innerText='name:'+this.name+';clickNumber:'+clickNumber;

    image.addEventListener('click',function(){
       clickNumber++;
       p.innerText='name:'+this.name+';clickNumber:'+clickNumber; 
    })
};

let first=new Cat('panda','picture/panda.jpg');
first.createACat();

let second=new Cat('cat','picture/cat.jpg');
second.createACat();