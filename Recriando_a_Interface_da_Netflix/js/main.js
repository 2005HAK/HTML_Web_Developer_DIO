function muda(elemento) {
    var capa = document.getElementById("filme-principal");
    var titulo = document.getElementById("titulo");
    var descricao = document.getElementById("descricao");
    var valor = Number(elemento);

    switch (valor) {
        case 1:
            capa.style.backgroundImage = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url(/Recriando_a_Interface_da_Netflix/img/solo.jpg)";
            titulo.innerHTML = "Solo Leveling"
            descricao.innerHTML = "Dez anos atrás, depois do “Portal” que conecta o mundo real com um mundo de montros se abriu, algumas pessoas comuns receberam o poder de caçar os monstros do portal. Eles são conhecidos como caçadores. Porém, nem todos os caçadores são fortes. Meu nome é Sung Jin-Woo, um caçador de rank E. Eu sou alguém que tem que arriscar a própria vida nas dungeons mais fracas, “O mais fraco do mundo”. Sem ter nenhuma habilidade à disposição, eu mal consigo dinheiro nas dungeons de baixo nível… Ao menos até eu encontrar uma dungeon escondida com a maior dificuldade dentro do Rank D! No fim, enquanto aceitava minha morte, eu ganhei um novo poder.";
            break;
        case 2:
            capa.style.backgroundImage = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url(/Recriando_a_Interface_da_Netflix/img/tbate.jpg)";
            titulo.innerHTML = "The Beginning After The End"
            descricao.innerHTML = "The Beginning After The End segue a vida do falecido Rei Gray após sua morte prematura e misteriosa. Renascido como Arthur Leywin, ele busca corrigir seus erros do passado no vibrante novo continente de Dicathen, um mundo de magia e criaturas fantásticas. Equipado com o conhecimento de um poderoso rei de trinta e poucos anos, Arthur navega em sua nova vida como o filho mágico de dois aventureiros aposentados e ganha propósito em cada uma de suas experiências - algo que faltou em sua vida anterior.";
            break;
        case 3:
            capa.style.backgroundImage = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url(/Recriando_a_Interface_da_Netflix/img/max.jpg)";
            titulo.innerHTML = "Solo Max Level Newbie"
            descricao.innerHTML = "Jinhyuk, o personagem principal, um viciado completo, foi o único a ter visto o final da [Torre dos Testes], mas à medida que a popularidade do jogo diminui, fica difícil manter a vida com o jogo. Jinhyuk quer terminar o jogo assim porque ele viu o final. Naquele mesmo dia, a [Torre dos Testes] se tornou uma realidade. Jinhyuk, que conhece todos os elementos do jogo, controla tudo mais rápido do que qualquer um! “Vou te mostrar o que é um profissional de verdade.”";
            break;
        case 4:
            capa.style.backgroundImage = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url(/Recriando_a_Interface_da_Netflix/img/mercenary.jpg)";
            titulo.innerHTML = "Dimensional Mercenary"
            descricao.innerHTML = "Você gostaria de encontrar um trabalho? Mesmo se isso custasse sua alma? Se sim, então você encontrou o lugar certo. Nosso site de aconselhamento de trabalho, SoSe, reune esses que querem até mesmo vender sua alma por um emprego, isso mesmo, pessoas como você. Já negociou com anjos ou demônios? Um free-lancer de 30 anos de idade chamado Chul Ho Kang fez um negócio nesse site estranho, e qual seria a proposta que ele aceitaria vender a alma? Dinheiro, é claro! Um convite para outro mundo para o mais fraco e oprimido da sociedade para uma chance de mudar tudo! Essa é a missão dada para Chul Ho KanG!";
            break;
        case 5:
            capa.style.backgroundImage = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url(/Recriando_a_Interface_da_Netflix/img/return.jpg)";
            titulo.innerHTML = "Return of the Disaster-Class Hero"
            descricao.innerHTML = "O mundo é consumido pelas trevas, onde monstros emergem das masmorras, podendo levar o mundo à destruição, mas há esperança. A ascensão dos caçadores (Despertados) tornou possível lutar contra esses monstros. Os mais fortes desses caçadores são conhecidos como heróis ou, os 13 zodíacos. Esta é a história de 1 desses 13 heróis.";
            break;
        case 6:
            capa.style.backgroundImage = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url(/Recriando_a_Interface_da_Netflix/img/onePiece.jpg)";
            titulo.innerHTML = "One Piece"
            descricao.innerHTML = "Houve um homem que conquistou tudo aquilo que o mundo tinha a oferecer, o lendário Rei dos Piratas, Gold Roger. Capturado e condenado à execução pelo Governo Mundial, suas últimas palavras lançaram legiões aos mares. 'Meu tesouro? Se quiserem, podem pegá-lo. Procurem-no! Ele contém tudo que este mundo pode oferecer!'. Foi a revelação do maior tesouro, o One Piece, cobiçado por homens de todo o mundo, sonhando com fama e riqueza imensuráveis... Assim começou a Grande Era dos Piratas!";
            break;
        case 7:
            capa.style.backgroundImage = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url(/Recriando_a_Interface_da_Netflix/img/world.jpg)";
            titulo.innerHTML = "The World After the End"
            descricao.innerHTML = "Esta é a história de um homem que não voltou quando todos retornaram ao passado. Os humanos foram convocados de repente para se tornarem “Andarilhos” e precisavam limpar a torre para salvar o mundo… 77º Andar: A Pedra do Retorno foi descoberta. Andarilhos podiam agora retornar ao passado. Lentamente, todos foram embora… A última esperança da humanidade, “Carpe Diem”, foi formada com as pessoas que se recusaram a abandonar o mundo… O último Andarilho chegou ao 100º andar. Ele não sabia mais no que crer.";
            break;
    }
}