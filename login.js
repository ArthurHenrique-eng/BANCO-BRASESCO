function entrarPagina (){
    var nome_usuario, senha_usuario;

    nome_usuario = document.getElementById('inpUsuario').value;
    senha_usuario = document.getElementById('inpSenha').value;

    if (nome_usuario === "Arthur" && senha_usuario === "123"){
        alert("Usuário logado com sucesso!");
        window.location.href = "contaBancaria.html";
    }
    else{
        alert("Usuário e/ou senha incorretos. Tente novamente.");
    }
}