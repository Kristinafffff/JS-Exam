/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;

    this.sum = function () {
        console.log(this.value1 + this.value2);
    };

    this.subtraction = function () {
        console.log(this.value1 - this.value2);
    };

    this.multiplication = function () {
        console.log(this.value1 * this.value2);
    };

    this.division = function () {
        console.log(this.value1/ this.value2);
    };

    this.print = function () {
        this.sum();
        this.subtraction();
        this.multiplication();
        this.division();
    };
}

const answer = new Calculator(5, 6);
answer.print();