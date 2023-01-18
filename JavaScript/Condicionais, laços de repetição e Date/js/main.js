/*
var idade = prompt("Qual sua idade?");

//estrutura condicional

if(idade >= 18){
    alert("maior de idade");
} else {
    alert("menor de idade");
}
*/
//laços de repetição

var count = 0;

//while

while (count <= 5){
    console.log(count);
    count++;
}

//for

for(var i = 0; i < 10; i++){
    console.log("contador: "+i);
}

//date
/*
var d = new Date();

alert(d);//mostra a data completa

alert(d.getMonth()+1);//mostra o mês atual (precisa de +1 pois começa do 0)

alert(d.getMinutes());//mostra os minutos atual

alert(d.getDay());//mostra o dia atual

alert(d.getHours());//mostra o dia atual
*/
var data = new Date();

var idade = data.getFullYear() - prompt("Digite o ano em que nasceu: ");

alert("Você tem "+idade+" anos");//idade provavelmente errada, pois não considera dia e mes