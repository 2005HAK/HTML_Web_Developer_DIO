//Array

var lista = ["Maça", "Pera", "Laranja"];

console.log(lista);
console.log(lista[1]);//mostra o elemento na posição indicada
//alert(lista[2]);

lista.push("Uva");//coloca um elemento na ultima posição

console.log(lista);

lista.pop();//retira o ultimo elemento

console.log(lista);

console.log(lista.length);//mostra o tamanho da lista

console.log(lista.reverse());//mostra a lista ao contrario

console.log(lista.toString());//transforma a lista em string

console.log(lista[0]);//mostra o primeiro elemento do array

console.log(lista.toString()[0]);//mostra o primeiro elemento da string do array

console.log(lista.join(" - "));//separa os elentos pelo elemento especificado entre aspas

//Dicionário

var fruta = {nome:"Maça", cor:"Vermelha", condicao:"Boa"};

console.log(fruta);//mostra o dicionário fruta

console.log(fruta.nome);//mostra o elemento em nome

//alert(fruta.cor);

//Lista de dicionários

var frutas = [{nome:"Maça", cor:"Vermelha", condicao:"Boa"}, {nome:"Uva", cor:"Verde", condicao:"Ruim"}]

console.log(frutas);

console.log(frutas[1]);

const monthNumber = prompt("Qual mês deseja?");

//TODO: Complete o JSON "months" com os meses faltantes.
const months = [
  {mes: "January"},
  {mes: "February"},
  {mes: "March"},
  {mes: "April"},
  {mes: "May"},
  {mes: "June"},
  {mes: "Juiy"},
  {mes: "August"},
  {mes: "September"},
  {mes: "October"},
  {mes: "November"},
  {mes: "December"}
];

console.log(months[monthNumber-1].mes);