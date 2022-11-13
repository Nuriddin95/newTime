// result = (money / 100) * percenage) + money


// Javobi id=result (innerText orqali)

  
function calculate(){
    var money = document.getElementById("money").value;
    var percentage = document.getElementById("percentage").value;
    var result = document.getElementById("result");
    result.innerText = (money * percentage) / 100;
}
