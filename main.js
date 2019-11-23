const verifyBtn = document.getElementById("verifyBtn");

function verifyBankNumber(e){
    e.preventDefault();

var accountNumber  = document.getElementById("inputNumber").value
var bankCode  = document.getElementById("select").value

var query = new URL("https://api.paystack.co/bank/resolve");
query.searchParams.append("account_number", accountNumber)
query.searchParams.append("bank_code",bankCode)


fetch(query,  {
    headers:  {
        'Content-Type': 'application/json', 
        'Authorization' : 'Bearer sk_test_0c1e84888146cb4e9e3d48c29d2b4354c67d7032'
    }
})
.then(response  => response.json())
.then(data => {
    if (data.message.includes("resolved")) {
        alert(data.data.account_name  +" is a verified account number")
    }else {
        alert(data.message)
    }
   
})
.catch(error => console.log(error.response.code))



console.log(accountNumber)
console.log(bankCode)

}

verifyBtn.addEventListener('click', verifyBankNumber);

window.addEventListener('load', function () {
    //your code right here;
    fetch("https://api.paystack.co/bank")
    .then(response => response.json())
    .then(bank  => {
       
    this.console.log(bank.data)
      var select = this.document.getElementById("select")
      bank.data.forEach(element => {
      var el = document.createElement("option");
      el.textContent = element.name;
      el.value = element.code;
      select.appendChild(el)
          
      });

    })
    .catch(error => console.log(error))

    }, false);

