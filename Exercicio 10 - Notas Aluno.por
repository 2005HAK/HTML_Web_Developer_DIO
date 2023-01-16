//Função do Algoritimo: Calcular a média aritimética
//Autor: Hebert A. Kubis

programa
{
	
	funcao inicio()
	{
		real nota1, nota2, nota3, nota4, media, faltas
		cadeia nome

		escreva("Digite o nome do aluno: ")
		leia(nome)
		escreva("Digite a nota 1: ")
		leia(nota1)
		escreva("Digite a nota 2: ")
		leia(nota2)
		escreva("Digite a nota 3: ")
		leia(nota3)
		escreva("Digite a nota 4: ")
		leia(nota4)

		media = (nota1 + nota2 + nota3 + nota4)/4

		escreva(media)

		escreva("\nDigite a quantidade de faltas: ")
		leia(faltas)
		
		//verifica se a média é maior ou igual a 7
		se(media >= 7){
			se(faltas > 50){
				escreva("O aluno(a) "+nome+" esta reprovado(a)")
			} senao {
				escreva("O aluno(a) "+nome+" esta aprovado(a)")
			}
		} senao {//media menor que 7
			escreva("O aluno(a) "+nome+" esta reprovado(a)")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 684; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */