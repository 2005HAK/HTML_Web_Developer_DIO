/*

//funções

function soma(n1, n2){
    return n1+n2
}

alert(soma(5,10));


function setReplace(frase, nome, novonome){
    return frase.replace(nome, novonome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));


function validaIdade(idade){
    var validar;

    if(idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

function botao(){
    document.getElementById("agradecimento").innerHTML = "<b><i>Obrigado por clicar<i><b>";
}

function redirecionar(){
    window.open("https://youtube.com");//abre o link em uma nova aba
    //window.location.href = "https://youtube.com" //abre o lik na mesma pagina
}

function trocar(elemento){
    //document.getElementById("mouseMove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
   // alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mouseMove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}