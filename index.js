function click_1() {
   let  a = +prompt("Nhập vào khoảng  dự đoán của bạn");

   let r = Math.floor(Math.random(a) * 10);
    console.log(r);
   let b = +prompt("Nhập số mà bạn dự đoán")
    let count = 0;
    while (r != b) {
        count++;
        if(count==4){
            alert('Bạn đã hết lượt ');
        }
        else if (r<b){
            alert('Số bạn đoán lớn hơn');
        }
        else
            alert(' Số bạn đoán nhỏ hơn ');
        b = +prompt("Nhập số mà bạn dự đoán")

    }
    if (count==4){
        alert('Bạn đã hết lượt ')
    }
    else {
        alert('Chúc Mừng Bạn')
    }

}
