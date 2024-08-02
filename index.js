let select=document.querySelectorAll(`.currency`)
let btn=document.getElementById('btn')
let input=document.getElementById('input')
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displayDropDown(res))


function displayDropDown(res){
    let currency=Object.entries(res)
    for(let i=0;i<currency.length;i++){
        let opt=`<option value="${currency[i][0]}">${currency[i][0]}</option>`
        select[0].innerHTML+=opt
        select[1].innerHTML+=opt
    }
}
btn.addEventListener('click',()=>{
    let currency1=select[0].value
    let currency2=select[1].value
    let inputVal=input.value
    if(currency1===currency2){
        alert("choose other currency")
    }
    else{
        convert(currency1,currency2,inputVal)
    }
})
function convert(currency1,currency2,inputVal){
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${inputVal}&from=${currency1}&to=${currency2}`)
  .then(resp => resp.json())
  .then((data) => {
    document.getElementById('result').value=Object.values(data.rates)[0]
  });
}