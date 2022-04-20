const tasbih = document.getElementById("tasbih");
const audio = new Audio('https://github.com/muslimDevCommunity/tasbeeh/blob/main/asset/audio/Pocket.mp3?raw=true');

let tasbeehNum = localStorage.clickcount;

tasbih.innerHTML=localStorage.clickcount;

window.addEventListener("click", () => {

    updateNum()
    tasbih.innerHTML=tasbeehNum;
    checkGoal();
});

window.addEventListener("touchstar", () => {
    updateNum();
    tasbih.innerHTML=tasbeehNum;
    checkGoal();
});

window.addEventListener("keydown", (i) => {
    if (i.keyCode == 32 || i.keyCode == 13 || i.keyCode == 38)
    {
        updateNum();
        tasbih.innerHTML=tasbeehNum;
        checkGoal();
    }
});

function updateNum(){
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
        tasbeehNum = Number(localStorage.clickcount);
      }else{
        localStorage.clickcount = 0;
        tasbeehNum = localStorage.clickcount;
      }
}



function checkGoal(){    
    if (tasbeehNum == 50)
    {
        document.getElementById("n50").classList.add("done");
        audio.play();
        
    }
    if (tasbeehNum == 100){
        document.getElementById("n100").classList.add("done");
        audio.play();
        
    }
    if (tasbeehNum == 500){
        document.getElementById("n500").classList.add("done");
        audio.play();
    }
}

function initGoal(){    
    if (tasbeehNum >= 50)
    {
        document.getElementById("n50").classList.add("done");
    }
    if (tasbeehNum >= 100){
        document.getElementById("n100").classList.add("done");
    }
    if (tasbeehNum >= 500){
        document.getElementById("n500").classList.add("done");
    }
}


initGoal();



function reset(){
    localStorage.clear();
    localStorage.clickcount = -1;
    tasbeehNum = localStorage.clickcount;
    tasbih.innerHTML= tasbeehNum;
    location.reload();
}