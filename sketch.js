let questions = [
  {
    question: "1. O que o campo mais fornece para a cidade?",
    options: ["Tecnologia", "Alimentos", "Indústria", "Transporte"],
    answer: 1
  },
  {
    question: "2. Como a cidade ajuda no desenvolvimento do campo?",
    options: ["Oferecendo lazer", "Comércio de produtos", "Mais trânsito", "Poluição"],
    answer: 1
  },
  {
    question: "3. Uma festa que celebra a união campo-cidade é:",
    options: ["Festa Junina", "Ano Novo", "Carnaval", "Black Friday"],
    answer: 0
  },
  {
    question: "4. Um benefício da conexão entre campo e cidade é:",
    options: ["Desemprego", "Fome", "Sustentabilidade", "Isolamento"],
    answer: 2
  },
  {
    question: "5. A troca entre campo e cidade promove:",
    options: ["Divisão", "Conflitos", "Parceria e cultura", "Desigualdade"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

function setup() {
  createCanvas(800, 400);
  textAlign(CENTER, CENTER);
  textSize(20);
  noLoop();
  showQuestion();
}

function showQuestion() {
  clear();
  background("#56ab2f");
  fill(255);
  text(questions[currentQuestion].question, width / 2, 80);

  for (let i = 0; i < 4; i++) {
    let btn = createButton(questions[currentQuestion].options[i]);
    btn.position(width / 2 - 100, 130 + i * 50);
    btn.mousePressed(() => checkAnswer(i));
  }
}

function checkAnswer(i) {
  if (i === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    removeElements();
    showQuestion();
  } else {
    removeElements();
    showResult();
  }
}

function showResult() {
  background("#2d572c");
  fill(255);
  textSize(26);
  text("Fim do Quiz!", width / 2, 120);
  text(`Você acertou ${score} de ${questions.length} perguntas.`, width / 2, 180);
}
