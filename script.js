const perguntas = [
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Atribuição",
        "Igualdade estrita",
        "Igualdade solta",
      ],
      correta: 1
    },
    {
      pergunta: "Como você adiciona um comentário de uma linha em JavaScript?",
      respostas: [
        "//",
        "/*",
        "#",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de escrever uma função em JavaScript?",
      respostas: [
        "function = minhaFuncao() {}",
        "let minhaFuncao = function() {}",
        "function minhaFuncao() {}",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Documento de Objeto Móvel",
        "Distribuição de Objetos Móveis",
        "Modelo de Objeto do Documento",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento pelo seu ID",
        "Seleciona um elemento pelo nome da classe",
        "Seleciona um elemento pelo tipo de tag",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'parseInt()' em JavaScript?",
      respostas: [
        "Converter uma string para um número inteiro",
        "Arredondar um número para o inteiro mais próximo",
        "Converter um número para uma string",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '&&' representa em JavaScript?",
      respostas: [
        "OU lógico",
        "E lógico",
        "Negação lógica",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Nenhuma, ambos comparam valores de forma estrita",
        "O primeiro compara apenas valores, o segundo compara valores e tipos",
        "O primeiro compara valores e tipos, o segundo compara apenas valores",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma closure em JavaScript?",
      respostas: [
        "Uma função que retorna um valor",
        "Um objeto que armazena dados",
        "Uma função que tem acesso às variáveis de seu escopo externo",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta //true ou false
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)  
  }
  