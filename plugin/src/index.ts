import { extractData } from './utils';
import { sendData } from './http';

// Função para injetar o botão na página
function injectButton() {
  const button = document.createElement('button');
  button.textContent = 'Extrair Dados';

  button.style.position = "fixed";
  button.style.width = "50px";
  button.style.height = "50px";
  button.style.borderRadius = "50%";
  button.style.bottom = "25px";
  button.style.right = "15px";
  button.style.padding = "0";
  button.style.backgroundColor = "#003087";
  button.style.color = "#FFFFFF";

  button.addEventListener('click', () => {
    extractData()
      .then(data => {
        sendData(data)
          .then(() => {
            console.log('Dados enviados com sucesso!');
            alert('Dados enviados com sucesso!');
          })
          .catch(error => {
            alert(`Erro ao enviar dados: ${error.message}`);
          });
      })
      .catch(error => {
        alert(error.message);
      });
  });

  document.body.appendChild(button);
}

// Injeta o botão na página
injectButton();