let lightImg = document.querySelector('.lightImg');
let on = document.querySelector('.on');
let off = document.querySelector('.off');

on.addEventListener('click', function(){
    lightImg.src =`./img/pic_bulbon.gif`

});
off.addEventListener('click', function(){
    lightImg.src =`./img/pic_bulboff.gif`
 
});


