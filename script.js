const elresult=document.querySelector('.text');
let score=prompt('Xurmatli talaba balingizni kiriting',0)-0;
if(score<80){
    elresult.textContent=('Siz talabalikka tavsiya etilmadingiz');
}else if(score>=80 && score<100){
    alert('Siz supper kontrakt asosida o\'qishga tavsiya etildingiz.O\'qishni xohlaysizmi');
    let money=prompt('Kontrakt miqdori yiliga 3000$ qancha pulingiz bor');
    if(money>=3000){
        elresult.textContent=('Siz o\'qishga kirdingiz');
    }else{
        elresult.textContent=('Siz o\'qishga kirolmadingiz');
    }    
}else if(score>=100 && score<150){
    alert('Siz kontrakt asosida o\'qishga qabul qilindizngiz.O\'qishni xohlaysizmi');
    let money1=prompt('Kontrakt miqdori yiliga 2000$ qancha pulingiz bor');
    if(money1>=2000){
        elresult.textContent=('Siz o\'qishga kirdingiz');
    }else{
        elresult.textContent=('Siz o\'qishga kirolmadingiz');
    }
}else if(score>=150 && score<=200){
    elresult.textContent=('Siz grant asosida o\'qishga qabul qilindizngiz');
}else if(score>200){
    alert('Balingizni qaytadan kiriting!');
}