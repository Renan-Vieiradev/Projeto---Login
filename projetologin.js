const form = document.getElementById("suporteform");
const feedback = document.getElementById("aviso");
const emailInput = document.getElementById("caixa-email");

// Validação somente no envio
form.addEventListener("submit", function(e){
    e.preventDefault();
    const nome = document.getElementById("caixa-nome").value.trim();
    const email = emailInput.value.trim();
    const nasc = document.getElementByID("nasc").value.trim();
    const senha = document.getElementByID("senha").value.trim();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!nome || !email || !date || !senha){
feedback.textContent = "Erro: Preencha todos os campos!";
feedback.className = "feedback error";
feedback.style.display = "block";
return;
}

if(!emailRegex.test(email)){
feedback.textContent = "Erro: E-mail inválido!";
feedback.className = "feedback error";
feedback.style.display = "block";
return;
}

feedback.textContent = "Solicitação enviada com sucesso!";
feedback.className = "feedback success";
feedback.style.display = "block";
form.reset();

setTimeout(() => { feedback.style.display="none"; }, 10000);
});
