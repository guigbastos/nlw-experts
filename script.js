const perguntas = [
  {
    pergunta: "Qual teórico desenvolveu a teoria da Gestalt na Psicologia?",
    respostas: [
      "Sigmund Freud",
      "B.F. Skinner",
      "John Watson",
      "Carl Rogers",
      "Max Wertheimer",
    ],
    correta: 4
  },
  {
    pergunta: "O que é o complexo de Édipo na psicanálise freudiana?",
    respostas: [
      "Medo de lugares fechados",
      "Conflito entre pai e filho",
      "Atração por objetos inanimados",
      "Incapacidade de expressar emoções",
      "Inveja do mesmo sexo",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a principal crítica à teoria behaviorista na Psicologia?",
    respostas: [
      "Foco excessivo no inconsciente",
      "Desconsideração dos processos mentais internos",
      "Ênfase exagerada na teoria cognitiva",
      "Ênfase excessiva na abordagem humanista",
      "Desprezo pela observação do comportamento",
    ],
    correta: 1
  },
  {
    pergunta: "Quem é conhecido como o fundador da psicologia analítica?",
    respostas: [
      "Carl Rogers",
      "Fritz Perls",
      "Erik Erikson",
      "Carl Jung",
      "Abraham Maslow",
    ],
    correta: 3
  },
  {
    pergunta: "O que é a 'sombra' na teoria de Carl Jung?",
    respostas: [
      "Parte inconsciente da personalidade",
      "Estágio do desenvolvimento infantil",
      "Conceito da teoria humanista",
      "Processo de aprendizagem cognitiva",
      "Técnica de relaxamento",
    ],
    correta: 0
  },
  {
    pergunta: "Qual termo é usado para descrever a tendência de atribuir características humanas a objetos inanimados?",
    respostas: [
      "Projeção",
      "Introversão",
      "Deslocamento",
      "Antropomorfismo",
      "Catarse",
    ],
    correta: 3
  },
  {
    pergunta: "O que é o 'Princípio da Realidade' na teoria psicanalítica de Freud?",
    respostas: [
      "Tendência de buscar prazer imediato",
      "Necessidade de enfrentar a realidade e adiar a gratificação",
      "Repressão de memórias traumáticas",
      "Busca constante pela autorrealização",
      "Atração por objetos inanimados",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o principal conceito na teoria do condicionamento operante de B.F. Skinner?",
    respostas: [
      "Inconsciente coletivo",
      "Reforço positivo e negativo",
      "Sombra",
      "Introspecção",
      "Transferência",
    ],
    correta: 1
  },
  {
    pergunta: "O que é um 'delírio' na psicopatologia?",
    respostas: [
      "Ilusão sensorial",
      "Crença falsa e irracional",
      "Estado de euforia",
      "Transtorno de personalidade",
      "Fobia social",
    ],
    correta: 1
  },
  {
    pergunta: "Quem desenvolveu a teoria da 'Psicologia Humanista'?",
    respostas: [
      "B.F. Skinner",
      "John Watson",
      "Carl Jung",
      "Carl Rogers",
      "Sigmund Freud",
    ],
    correta: 3
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
  