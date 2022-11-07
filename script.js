//Aluna Larissa Resende

/*Instruções:
Menu (Pipoca 10s, Macarrão 8s, Carne 15s, Feijão 12s, Brigadeiro 8s)
Usuário pode alterar o tempo padrão, aumentando de acordo com a sua vontade
Se o tempo for maior que 2x o necessário exibir a msg que a comida queimou
Se o tempo for menor que o padrão, exibir msg tempo insuficiente
Se o tempo for 3x maior, o microondas deve exibir kabumm
No final de cada tarea, microondas deve exibir Prato pronto, bom apetite!!!*/


const menu = {
   "1": {nome: 'Pipoca', tempo: 10},
   "2": {nome: 'Macarrão', tempo: 8},
   "3": {nome: 'Carne', tempo: 15},
   "4": {nome: 'Feijão', tempo: 12},
   "5": {nome: 'Brigadeiro', tempo: 8},

}

tempoPreparo = (idPrato, tempo) => {
 let prato = menu[idPrato];
 if (!prato){
    console.log('Ops, temos um problema, esse prato não existe !')
 }else{
    if (tempo < prato.tempo) {
        console.log('Tempo insuficiente');
    }       if (tempo > prato.tempo * 2){
        console.log('A comida queimou');
    }           if (tempo > prato.tempo * 3){
        console.log('Kabumm!');
    } else {
        console.log( 'Prato pronto, bom apetite!!!');
    }
  }
}

