function slideColor(){
    var phoneImg=document.querySelector('.phone_imgs');
    document.querySelector('.black').addEventListener('click',()=>{
    phoneImg.style.transform="translate(0px)";
})
    document.querySelector('.yellow').addEventListener('click',()=>{
    phoneImg.style.transform='translate(-350px)';
});
    document.querySelector('.green').addEventListener('click',()=>{
    phoneImg.style.transform='translate(-700px)';
});
    document.querySelector('.purple').addEventListener('click',()=>{
    phoneImg.style.transform='translate(-1050px)';
});
}