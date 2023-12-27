
function adicionarContato(){
    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value

    if(nome.trim()==="" || telefone.trim()===""){
        alert("Por favor preencha todos os campos")
        return
    }

    let tabela = document.getElementById("tabelaContatos")
    let novaLinha = tabela.insertRow(tabela.rows.length)

    let celulaNome = novaLinha.insertCell(0)
    let celulaTelefone = novaLinha.insertCell(1)
    let celulaImagem = novaLinha.insertCell(2)
    let celulaExcluir = novaLinha.insertCell(3)

    celulaNome.innerHTML = nome
    celulaTelefone.innerHTML = telefone
    celulaImagem.innerHTML = '<img src="./images/telefone-fixo.png" alt="logo telefone">'
    celulaExcluir.innerHTML = '<button class="excluir" onclick="excluirContato(this)">Excluir</button>'

    document.getElementById("nome").value = ""
    document.getElementById("telefone").value = ""

}

function excluirContato(botao) {
    var linha = botao.parentNode.parentNode;
    linha.parentNode.removeChild(linha);
}