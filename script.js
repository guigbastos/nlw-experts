const perguntas = [
  {
    pergunta: "Qual país sediou a Copa do Mundo de 2014?",
    respostas: [
      "Brasil",
      "Alemanha",
      "Espanha",
      "África do Sul",
      "Rússia",
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o artilheiro da Copa do Mundo de 2018?",
    respostas: [
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Harry Kane",
      "Neymar",
      "Kylian Mbappé",
    ],
    correta: 4
  },
  {
    pergunta: "Quantos gols Lionel Messi marcou na Copa do Mundo de 2014?",
    respostas: [
      "3",
      "4",
      "6",
      "1",
      "0",
    ],
    correta: 2
  },
  {
    pergunta: "Quem venceu a Bola de Ouro da FIFA em 2019?",
    respostas: [
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Virgil van Dijk",
      "Neymar",
      "Mohamed Salah",
    ],
    correta: 2
  },
  {
    pergunta: "Em qual país ocorreu a Eurocopa de 2016?",
    respostas: [
      "Espanha",
      "Itália",
      "Alemanha",
      "Portugal",
      "França",
    ],
    correta: 4
  },
  {
    pergunta: "Quem venceu a Liga dos Campeões da UEFA na temporada 2016/2017?",
    respostas: [
      "Real Madrid",
      "Barcelona",
      "Liverpool",
      "Bayern de Munique",
      "Chelsea",
    ],
    correta: 0
  },
  {
    pergunta: "Quantos títulos da Premier League o Manchester City conquistou até 2022?",
    respostas: [
      "3",
      "5",
      "7",
      "2",
      "9",
    ],
    correta: 1
  },
  {
    pergunta: "Qual seleção venceu a Copa do Mundo Feminina da FIFA em 2019?",
    respostas: [
      "Brasil",
      "Alemanha",
      "Estados Unidos",
      "Suécia",
      "França",
    ],
    correta: 2
  },
  {
    pergunta: "Quem foi o artilheiro da Copa América de 2015?",
    respostas: [
      "Lionel Messi",
      "Neymar",
      "Sergio Agüero",
      "Alexis Sánchez",
      "James Rodríguez",
    ],
    correta: 3
  },
  {
    pergunta: "Qual clube ganhou a Liga dos Campeões da UEFA na temporada 2020/2021?",
    respostas: [
      "Manchester City",
      "Paris Saint-Germain",
      "Chelsea",
      "Real Madrid",
      "Bayern de Munique",
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
  