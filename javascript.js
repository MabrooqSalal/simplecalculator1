display=(val)=>{
    document.getElementById('result').value+=val

}
sum=()=>{
    var res=document.getElementById('result').value
    let re=eval(res)
    document.getElementById('result').value=re

}
clearS=()=>{
    document.getElementById('result').value=" "
}