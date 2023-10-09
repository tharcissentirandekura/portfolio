let count = 0;

var text = " Tharcisse Ntirandekura";

var speed = 50;

function autotype(){
    if (count < text.length){
        document.getElementsByClassName("name").innerHtml += text.charAt(count);
        count ++ ;
        setTimeout(autotype,speed);
    }
}
