const perguntas = [
  {
    pergunta: "O que é Psicologia?",
    respostas: [
      "Estudo da mente humana",
      "Prática de exercícios físicos",
      "Estudo dos animais",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é considerado o pai da Psicologia?",
    respostas: [
      "Sigmund Freud",
      "John Watson",
      "William James",
    ],
    correta: 2
  },
  {
    pergunta: "O que é o Psicodrama?",
    respostas: [
      "Uma técnica de relaxamento",
      "Um método terapêutico de representação dramática",
      "Um tipo de medicamento psiquiátrico",
    ],
    correta: 1
  },
  {
    pergunta: "Quem desenvolveu a técnica do Psicodrama?",
    respostas: [
      "Carl Rogers",
      "Fritz Perls",
      "Jacob Levy Moreno",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o objetivo principal do Psicodrama?",
    respostas: [
      "Estudo da mente inconsciente",
      "Exploração do passado",
      "Expressão e resolução de conflitos através da dramatização",
    ],
    correta: 2
  },
  {
    pergunta: "O que é o conceito de 'transferência' na Psicologia?",
    respostas: [
      "Transferência de conhecimento entre terapeuta e paciente",
      "Transferência de sentimentos do paciente para o terapeuta",
      "Transferência de medicamentos na terapia",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o principal enfoque da Psicologia Comportamental?",
    respostas: [
      "Estudo do inconsciente",
      "Análise do comportamento observável",
      "Ênfase na introspecção",
    ],
    correta: 1
  },
  {
    pergunta: "O que é a 'Terapia Cognitivo-Comportamental'?",
    respostas: [
      "Uma abordagem que enfoca pensamentos e comportamentos",
      "Uma técnica de hipnose",
      "Uma prática baseada em medicamentos",
    ],
    correta: 0
  },
  {
    pergunta: "O que é o 'Efeito Placebo' na Psicologia?",
    respostas: [
      "Melhoria real devido à administração de um tratamento inativo",
      "Efeito colateral de medicamentos",
      "Ilusão de melhoria",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é associado à teoria da Hierarquia de Necessidades?",
    respostas: [
      "Albert Bandura",
      "B.F. Skinner",
      "Abraham Maslow",
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
  