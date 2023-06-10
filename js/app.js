var inputbox = document.querySelector('.message');
var alertbutton = document.querySelector('.alert');

alertbutton.addEventListener('click',function(event){
    alert('welcome ' + inputbox.value);
})  