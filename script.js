const Fila = (localSaida) =>{
    let localSaida = _locaSaida;
    let dados = [];
 const tamanho = () => dados.length;
 const estaVazia = () => dados.length < 1;
 const enfileirar = valor => {
    dados.push(valor);
    imprimir();
 }
const desenfileirar = () => {
 dados.splice(0,1);
 imprimir();

}
const imprimir = () => {
    console.log(dados);
    dado_saida = "";
    for(let i = 0; i < tamanho(); i++){
        dados.saida += dados[i].id + "("+dados[i].item+") ";
    }
    document.getElementById(localSaida).innerHTML = dado_saida;
}
return {
    enfileirar, desenfileirar

    }
}
const gerarItem = () => Math.floor(Math.random() * (15 - 3) + 2);
const tamanhoInicialFila = 15;
(function(){
    for(let i =; i <= tamanhoInicialFila; i++ ){
        F1.enfileirar(Cliente("P"+i,geralItens()));
    }

})();