function test()
{
    let text= document.getElementById('text').value;
    n=0;
    switch(text) {
    case "ổi" :
        n=20;
        break;
    case "dưa hấu" :
            n=20;
            break;
    case "táo" :
            n=30;
            break;    
    case "xoài" :
            n=30;
            break;
    case "cam" :
            n=40;
            break;
    case "chôm chôm" :
             n=40;
            break;       
    case "măng cụt" :
            n=50;
            break;
    default :
    document.getElementById('money').innerHTML="Chưa có giá của loại hỏa quả bạn chọn trong giỏ hàng !"
}
document.getElementById('money').innerHTML="Giá của "+text+" là "+n+" nghìn đồng !"
}