//function tocaSom(idElementoAudio){
    //document.querySelector(idElementoAudio).play();
//}
//let lista = document.querySelectorAll(".tecla");
//let contador=0;
//while(contador< lista.length){
  //  const efeito = lista[contador].classList[1];
    //const idAudio = "#som_"+efeito;
    //lista[contador].onclick = function(){
      //  tocaSom(idAudio);
    //}
    //contador++;
//}
let lista = document.querySelectorAll(".tecla");

let contador = 0;

function tocaSom(idElementoAudio){
    contador = 0
    while (contador < lista.length) {
        const efeito = lista[contador].classList[1];
        const idAudio = "#som_" + efeito;
        let audio = document.querySelector(idAudio)
        audio.pause()
        audio.correntTime = 0
        contador++
    }
    document.querySelector(idElementoAudio).play()
}

contador = 0
while (contador < lista.length){
  const efeito = lista[contador].classList[1];
  const idAudio = "#som_" + efeito;
  lista[contador].onclick = function () {
    tocaSom(idAudio);
  }
  contador++;
}