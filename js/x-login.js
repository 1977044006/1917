//from判断
var form=document.querySelector('form');
var user=document.querySelector('.user');
var pass=document.querySelector('.pass');
form.onsubmit=function(){
    if (!user.value || !pass.value) {
        
        return false;
    }
}