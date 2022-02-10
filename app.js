
this.addEventListener("mousemove", function(e){

    let body=document.querySelector('body');
    let bubble=document.createElement('span');
    let a=e.offsetX;
    let b=e.offsetY;
    bubble.style.left='a'+'px';
    bubble.style.top='a'+'px';
    bubble.style.right='b'+'px';
    bubble.style.top='a'+'px';
 
    let size=Math.random()*170;
    bubble.style.width=20 + size + "px";
    bubble.style.height=20 + size + "px";
    body.appendChild(bubble);


    setTimeout(function(){
     bubble.remove();
    },5000);
 

});

