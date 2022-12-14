/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.getElementById("submit-btn").addEventListener("click", (event) => { 
    let searchValue = document.getElementById("search").value;
    event.preventDefault();
    document.getElementById("output").innerHTML=
    searchValue * 2.2046 +
    " lb <br/>" +
    searchValue * 0.001 +
    " g <br/>" +
    searchValue + 35.274 +
    " oz <br/>";
}); 