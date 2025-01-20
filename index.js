for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonvalue=this.innerHTML;
        makesound(buttonvalue);
        animation(buttonvalue);
    });
}

document.addEventListener("keydown",function(event){
    makesound(event.key);
    animation(event.key);
});

function sound(a){
    var audio=new Audio("sounds/"+a+".mp3");
    audio.play();
}

function makesound(key){
    switch(key){
        case("w"):
            sound("crash");
            break;
        case("a"):
            sound("kick-bass");
            break;
        case("s"):
            sound("snare");
            break;
        case("d"):
            sound("tom-1");
            break;
        case("j"):
            sound("tom-2");
            break;
        case("k"):
            sound("tom-3");
            break;
        case("l"):
            sound("tom-4");
            break;
        default:
            console.log(key);
    }
}

function animation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100)
}