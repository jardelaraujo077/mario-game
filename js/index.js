const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const pontosMarcado = document.querySelector('.pontos');
const ranking = document.querySelector('.ranking');
let ponto = 0
let jogador = 1;
const pular = () =>{   
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
  
   

}
const loop = setInterval(() => {
    const pipePosicao = pipe.offsetLeft;
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px','');

    if (ponto >= 500) {
        pipe.style.animation = 'pipe 3s linear infinite';
        
    }
    if (ponto >= 1000) {
        pipe.style.animation = 'pipe 2s linear infinite';

    }
    if (ponto >= 2000) {
        pipe.style.animation = 'pipe 1s linear infinite';

    }
    if (ponto >= 3000) {
        pipe.style.animation = 'pipe 600ms linear infinite';

    }
    if (ponto >= 5000) {
        pipe.style.animation = 'pipe 100ms linear infinite';

    }

    if (pipePosicao <= 70 && marioPosicao < 90 && pipePosicao > 0){
        pipe.getElementsByClassName.animation = 'none';
        pipe.style.left = `${pipePosicao}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosicao}px`;
        mario.src = './img/game-over.png';
        mario.style.width = '50px';
        mario.style.marginLeft = '50px';
        clearInterval(loop)       
        if (jogador <= 3) {

      
        var nome = prompt("Digite o seu nome:");
        data = {
            nome: nome,
            pontos: ponto+1
        }
        window.localStorage.setItem(`pessoa-${jogador}`, JSON.stringify(data));
        var pessoa = window.localStorage.getItem(`pessoa-${jogador}`);
        pessoa = JSON.parse(pessoa)
        ranking.innerHTML = pessoa.nome + ' ' + pessoa.pontos
        }
       


       }
       ponto++;
    pontosMarcado.innerHTML = ponto
    
    
}, 10);

document.addEventListener('keydown',pular);