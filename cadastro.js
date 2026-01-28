function salvar() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Preencha usuário e senha!");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    if (!usuarios) {
        usuarios = [];
    }

    let existe = usuarios.find(u => u.username === username);
    if (existe) {
        alert("Nome já cadastrado!");
        return;
    }

    // 👉 CRIAR USUÁRIO
    let novoUsuario = {
        username: username,
        password: password
    };

    // 👉 ADICIONAR AO ARRAY
    usuarios.push(novoUsuario);

    // 👉 SALVAR NO LOCALSTORAGE
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");

    // (opcional) limpar campos
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}


function login() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    if (!usuarios) {
        alert("Nenhum usuário cadastrado!");
        return;
    }

    let usuarioValido = usuarios.find(
        u => u.username === username && u.password === password
    );

    if (!usuarioValido) {
        alert("Email ou senha incorretos!");
        return;
    }

    localStorage.setItem("usuarioLogado", username);
    window.location.href = "telaInicial.html";
}
