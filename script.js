// Pega o formulario pelo id colocado no html
const form = document.getElementById('form-contato');

form.addEventListener('submit', function (evento) {
  evento.preventDefault(); // impede que a página recarregue ao enviar

  // Pega os valores digitados
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  // Validaçãos: campos vazios
  if (nome === '' || email === '' || mensagem === '') {
    alert('Por favor, preencha todos os campos.');
    return; // para a execução aqui, não envia
  }

  // Validação: formato de e-mail com expressão regular simples
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValido.test(email)) {
    alert('Por favor, insira um e-mail válido (exemplo: usuario@dominio.com).');
    return;
  }

  // Se passou nas validações, simula o envio
  alert('Mensagem enviada com sucesso!');
  form.reset(); // limpa os campos do formulário
});