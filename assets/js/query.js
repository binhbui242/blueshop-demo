window.onload = function() {
    var input = document.getElementById('soluong');
    var p1 = document.getElementById('tinhtam');
    var p=document.getElementById('tongtien');
    input.addEventListener('change',function(){
        p1.innerHTML=input.value*279000 + " đ";
        p.innerHTML=p1.innerHTML;
    })
}
function increase()
{
    var value = parseInt(document.getElementById('sl').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('sl').value = value;
}
function reduction()
{
    var value = parseInt(document.getElementById('sl').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value==0){
        value=0;
    } else{
        value--;
    }
    document.getElementById('sl').value = value;
}
function doimauXS(){
    document.getElementById('xs').style.backgroundColor= "#2A4793";
    document.getElementById('xs').style.color="#fff";
    document.getElementById('s').style.backgroundColor="#ffff";
    document.getElementById('s').style.color="#000000";
    document.getElementById('m').style.backgroundColor="#ffff";
    document.getElementById('m').style.color="#000000";
    document.getElementById('l').style.backgroundColor="#ffff";
    document.getElementById('l').style.color="#000000";
    document.getElementById('xl').style.backgroundColor="#ffff";
    document.getElementById('xl').style.color="#000000";
    document.getElementById('xxl').style.backgroundColor="#ffff";
    document.getElementById('xxl').style.color="#000000";
    document.getElementById('3xl').style.backgroundColor="#ffff";
    document.getElementById('3xl').style.color="#000000";
    document.getElementById('4xl').style.backgroundColor="#ffff";
    document.getElementById('4xl').style.color="#000000";
    document.getElementById('5xl').style.backgroundColor="#ffff";
    document.getElementById('5xl').style.color="#000000";
}
function doimauS(){
    document.getElementById('s').style.backgroundColor= "#2A4793";
    document.getElementById('s').style.color="#fff";
    document.getElementById('xs').style.backgroundColor="#ffff";
    document.getElementById('xs').style.color="#000000";
    document.getElementById('m').style.backgroundColor="#ffff";
    document.getElementById('m').style.color="#000000";
    document.getElementById('l').style.backgroundColor="#ffff";
    document.getElementById('l').style.color="#000000";
    document.getElementById('xl').style.backgroundColor="#ffff";
    document.getElementById('xl').style.color="#000000";
    document.getElementById('xxl').style.backgroundColor="#ffff";
    document.getElementById('xxl').style.color="#000000";
    document.getElementById('3xl').style.backgroundColor="#ffff";
    document.getElementById('3xl').style.color="#000000";
    document.getElementById('4xl').style.backgroundColor="#ffff";
    document.getElementById('4xl').style.color="#000000";
    document.getElementById('5xl').style.backgroundColor="#ffff";
    document.getElementById('5xl').style.color="#000000";
}
function doimauM(){
    document.getElementById('m').style.backgroundColor= "#2A4793";
    document.getElementById('m').style.color="#fff";
    document.getElementById('xs').style.backgroundColor="#ffff";
    document.getElementById('xs').style.color="#000000";
    document.getElementById('s').style.backgroundColor="#ffff";
    document.getElementById('s').style.color="#000000";
    document.getElementById('l').style.backgroundColor="#ffff";
    document.getElementById('l').style.color="#000000";
    document.getElementById('xl').style.backgroundColor="#ffff";
    document.getElementById('xl').style.color="#000000";
    document.getElementById('xxl').style.backgroundColor="#ffff";
    document.getElementById('xxl').style.color="#000000";
    document.getElementById('3xl').style.backgroundColor="#ffff";
    document.getElementById('3xl').style.color="#000000";
    document.getElementById('4xl').style.backgroundColor="#ffff";
    document.getElementById('4xl').style.color="#000000";
    document.getElementById('5xl').style.backgroundColor="#ffff";
    document.getElementById('5xl').style.color="#000000";
}
function doimauL(){
    document.getElementById('l').style.backgroundColor= "#2A4793";
    document.getElementById('l').style.color="#fff";
    document.getElementById('xs').style.backgroundColor="#ffff";
    document.getElementById('xs').style.color="#000000";
    document.getElementById('m').style.backgroundColor="#ffff";
    document.getElementById('m').style.color="#000000";
    document.getElementById('s').style.backgroundColor="#ffff";
    document.getElementById('s').style.color="#000000";
    document.getElementById('xl').style.backgroundColor="#ffff";
    document.getElementById('xl').style.color="#000000";
    document.getElementById('xxl').style.backgroundColor="#ffff";
    document.getElementById('xxl').style.color="#000000";
    document.getElementById('3xl').style.backgroundColor="#ffff";
    document.getElementById('3xl').style.color="#000000";
    document.getElementById('4xl').style.backgroundColor="#ffff";
    document.getElementById('4xl').style.color="#000000";
    document.getElementById('5xl').style.backgroundColor="#ffff";
    document.getElementById('5xl').style.color="#000000";
}
function doimauXL(){
    document.getElementById('xl').style.backgroundColor= "#2A4793";
    document.getElementById('xl').style.color="#fff";
    document.getElementById('xs').style.backgroundColor="#ffff";
    document.getElementById('xs').style.color="#000000";
    document.getElementById('m').style.backgroundColor="#ffff";
    document.getElementById('m').style.color="#000000";
    document.getElementById('l').style.backgroundColor="#ffff";
    document.getElementById('l').style.color="#000000";
    document.getElementById('s').style.backgroundColor="#ffff";
    document.getElementById('s').style.color="#000000";
    document.getElementById('xxl').style.backgroundColor="#ffff";
    document.getElementById('xxl').style.color="#000000";
    document.getElementById('3xl').style.backgroundColor="#ffff";
    document.getElementById('3xl').style.color="#000000";
    document.getElementById('4xl').style.backgroundColor="#ffff";
    document.getElementById('4xl').style.color="#000000";
    document.getElementById('5xl').style.backgroundColor="#ffff";
    document.getElementById('5xl').style.color="#000000";
}
function doimauXXL(){
    document.getElementById('xxl').style.backgroundColor= "#2A4793";
    document.getElementById('xxl').style.color="#fff";
    document.getElementById('xs').style.backgroundColor="#ffff";
    document.getElementById('xs').style.color="#000000";
    document.getElementById('m').style.backgroundColor="#ffff";
    document.getElementById('m').style.color="#000000";
    document.getElementById('l').style.backgroundColor="#ffff";
    document.getElementById('l').style.color="#000000";
    document.getElementById('xl').style.backgroundColor="#ffff";
    document.getElementById('xl').style.color="#000000";
    document.getElementById('s').style.backgroundColor="#ffff";
    document.getElementById('s').style.color="#000000";
    document.getElementById('3xl').style.backgroundColor="#ffff";
    document.getElementById('3xl').style.color="#000000";
    document.getElementById('4xl').style.backgroundColor="#ffff";
    document.getElementById('4xl').style.color="#000000";
    document.getElementById('5xl').style.backgroundColor="#ffff";
    document.getElementById('5xl').style.color="#000000";
}
function doimau3XL(){
    document.getElementById('3xl').style.backgroundColor= "#2A4793";
    document.getElementById('3xl').style.color="#fff";
    document.getElementById('xs').style.backgroundColor="#ffff";
    document.getElementById('xs').style.color="#000000";
    document.getElementById('m').style.backgroundColor="#ffff";
    document.getElementById('m').style.color="#000000";
    document.getElementById('l').style.backgroundColor="#ffff";
    document.getElementById('l').style.color="#000000";
    document.getElementById('xl').style.backgroundColor="#ffff";
    document.getElementById('xl').style.color="#000000";
    document.getElementById('xxl').style.backgroundColor="#ffff";
    document.getElementById('xxl').style.color="#000000";
    document.getElementById('s').style.backgroundColor="#ffff";
    document.getElementById('s').style.color="#000000";
    document.getElementById('4xl').style.backgroundColor="#ffff";
    document.getElementById('4xl').style.color="#000000";
    document.getElementById('5xl').style.backgroundColor="#ffff";
    document.getElementById('5xl').style.color="#000000";
}
function doimau4XL(){
    document.getElementById('4xl').style.backgroundColor= "#2A4793";
    document.getElementById('4xl').style.color="#fff";
    document.getElementById('xs').style.backgroundColor="#ffff";
    document.getElementById('xs').style.color="#000000";
    document.getElementById('m').style.backgroundColor="#ffff";
    document.getElementById('m').style.color="#000000";
    document.getElementById('l').style.backgroundColor="#ffff";
    document.getElementById('l').style.color="#000000";
    document.getElementById('xl').style.backgroundColor="#ffff";
    document.getElementById('xl').style.color="#000000";
    document.getElementById('xxl').style.backgroundColor="#ffff";
    document.getElementById('xxl').style.color="#000000";
    document.getElementById('3xl').style.backgroundColor="#ffff";
    document.getElementById('3xl').style.color="#000000";
    document.getElementById('s').style.backgroundColor="#ffff";
    document.getElementById('s').style.color="#000000";
    document.getElementById('5xl').style.backgroundColor="#ffff";
    document.getElementById('5xl').style.color="#000000";
}
function doimau5XL(){
    document.getElementById('5xl').style.backgroundColor= "#2A4793";
    document.getElementById('5xl').style.color="#fff";
    document.getElementById('xs').style.backgroundColor="#ffff";
    document.getElementById('xs').style.color="#000000";
    document.getElementById('m').style.backgroundColor="#ffff";
    document.getElementById('m').style.color="#000000";
    document.getElementById('l').style.backgroundColor="#ffff";
    document.getElementById('l').style.color="#000000";
    document.getElementById('xl').style.backgroundColor="#ffff";
    document.getElementById('xl').style.color="#000000";
    document.getElementById('xxl').style.backgroundColor="#ffff";
    document.getElementById('xxl').style.color="#000000";
    document.getElementById('3xl').style.backgroundColor="#ffff";
    document.getElementById('3xl').style.color="#000000";
    document.getElementById('4xl').style.backgroundColor="#ffff";
    document.getElementById('4xl').style.color="#000000";
    document.getElementById('s').style.backgroundColor="#ffff";
    document.getElementById('s').style.color="#000000";
}
