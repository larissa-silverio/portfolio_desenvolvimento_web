function digitarFrase(frase, elemento, repetir = false, velocidade = 100) {
  let i = 0;

  // Função interna para gerenciar a digitação
  const digitar = () => {
    if (i < frase.length) {
      elemento.innerHTML += frase.charAt(i);
      i++;
      setTimeout(digitar, velocidade); // Espera o tempo definido antes de digitar a próxima letra
    } else {
      if (repetir) {
        setTimeout(() => {
          elemento.innerHTML = ""; // Limpa o elemento
          i = 0; // Reseta o índice
          setTimeout(digitar, 1000); // Espera 1 segundo antes de reiniciar
        }, 1000); // Espera 1 segundo antes de limpar
      }
    }
  };

  digitar(); // Inicia a digitação
}
