function wrong1(){
    let a = document.getElementById("opt1")
    
    a.style.background = "#ffd970";
    
    setTimeout(()=>{
        a.style.background = "#ff4242"
    },2000)
}

function wrong2(){
    let a = document.getElementById("opt3")
    
    a.style.background = "#ffd970";
    
    setTimeout(()=>{
        a.style.background = "#ff4242"
    },2000)
}

function wrong3(){
    let a = document.getElementById("opt4")
    
    a.style.background = "#ffd970";
    
    setTimeout(()=>{
        a.style.background = "#ff4242"
    },2000)
}

function correct(){
    let a = document.getElementById("opt2")
    
    a.style.background = "#ffd970";
    
    setTimeout(()=>{
        a.style.background = "#55ff42"
    },2000)
}