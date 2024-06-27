document.addEventListener("DOMContentLoaded", () => {
    const bar = document.querySelector(".bar");
    const cross = document.querySelector(".cross");
    const ul = document.getElementsByTagName("ul")[0];    
    bar.addEventListener("click",()=>{
        ul.style.display= 'flex'
        cross.style.display= 'block'
        bar.style.display= 'none'

    })
    cross.addEventListener("click",()=>{
        
        ul.style.display= 'none'
        cross.style.display= 'none'
        bar.style.display= 'block'
        

    })
});
