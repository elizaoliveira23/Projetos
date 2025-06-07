//aqui no  getelementbyid peguei o botão e depois coloquei a função de "escutador" de botão usando o  addeventlistener para "monitorar" o botão e toda vez que acontecer um click no botão a função vai acessar o valor no input no caso (interesse-input) e mostrar esse valor.//
document.getElementById('AdicionarButton').addEventListener('click', function() {
    const input = document.getElementById('Interesse-input');
    const valorInput = input.value.trim();
    //essa const mostra os valores do input e a funçao trim já descarta quando for digitado apenas espaços em branco.//
    console.log(valorInput)
     if(valorInput){
        // se tiver um valor no 'inputvalor' quero pegar esse valor,e criar uma tag chamada li,depois armazenar o valor do input nessa 'li' e pegar a 'li' e colocar dentro da ul que no caso é a ''Lista-interesses''
        const itemLista = document.createElement('li');
        itemLista.textContent = valorInput;
        document.getElementById('Lista-interesses').appendChild(itemLista)
        //a função appendChild pega um elemento e adiciona a outro elemento
        input.value = ''; //esse input.value = ''; está limpando o campo de input depois que a gente adiciona um valor
     }
     document.getElementById('LimparButton').addEventListener('click', function() {
        document.getElementById('Lista-interesses').innerHTML = '';

     })
});