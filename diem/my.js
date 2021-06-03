function test()
{
    var n,diem=0;
    let toan=+ document.getElementById('toan').value; 
    let van=+ document.getElementById('van').value; 
    let anh=+ document.getElementById('anh').value; 
    let khuvuc=+ document.getElementById('khuvuc').value; 
    switch (khuvuc)
    {
        case 1:
            n=0.75;
            break;
        case 3:
            n=0.5;
            break;
        case 2:
            n=0.25;
            break;
        case 4:
            n=0;
            break;
    }
    diem=(toan+van+anh+n);
    document.getElementById('diem').innerHTML="Điểm thi khối D của bạn là : "+diem;
}