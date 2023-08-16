

const modalshowing = document.querySelector("#modalDiv");

setTimeout(function(){
    modalshowing.classList.add("open-modal");
    document.body.style.overflow="hidden";
});

           
    
    

function closemodal()
{
    document.querySelector('#modalDiv').style.visibility="hidden";
    document.body.style.overflow="initial";
}




