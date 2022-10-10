/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

function showData() {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((cars) => {
        let result = "";
        for (let i = 0; i < cars.length; i++) {
          result +=
            "<b>Gamintojas:</b> " +
            cars[i].brand +
            "</br> <b>Pagaminti automobiliai:w </b>" +
            cars[i].models.toString() +
            "</br></br>";
        }
        document.getElementById("output").innerHTML = result;
      });
  }
  showData();