var smartPhones = ['iphone','ipad','windows ce','android','blackberry',
    'nokia','webos','opera mini','sonyericsson','opera mobi','iemobile'];
    
for(var i in smartPhones){
    if(navigator.userAgent.toLocaleLowerCase().match(new RegExp(smartPhones[i]))){
        document.location.href='http://ziihoyam.dothome.co.kr/mobile.html';
    }
}
