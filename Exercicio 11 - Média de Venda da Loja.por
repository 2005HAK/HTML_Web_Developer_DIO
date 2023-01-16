programa
{
	
	funcao inicio()
	{
		real jan, fev, mar, abr, media

		escreva("Lucro de janeiro: ")
		leia(jan)
		escreva("Lucro de fevereiro: ")
		leia(fev)
		escreva("Lucro de março: ")
		leia(mar)
		escreva("Lucro de abril: ")
		leia(abr)

		media = (jan + fev + mar + abr)/4

		se(media > 5000) {
			escreva("Parabéns! Voce terá um abono de 10%")
		} senao {
		 	escreva("Parabéns! Voce terá um abono de somente 3%")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 421; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */