let sendBtn = document.getElementById('send-btn');
let inputEl = document.getElementById('input-el');
let chatContainer = document.getElementById('chat-container');
let yesBtn;
let backBtn;

var user = {message:"", counter:0 };


setTimeout(function(){
  chatbotSendMessage("Olá! Sou o Hamsa, o cisne do Yôga Yuga, e estou aqui para ajudá-lo(a) a navegar pelo nosso site!")
},800);
setTimeout(function(){
  chatbotSendMessage("Ajude-me a entender a sua dúvida. Você deseja saber sobre:")
},2000);

setTimeout(function(){
  initializeOptions();
}, 3400);


function initializeOptions(){

  let options = [
    {
      title: "Aulas Individuais",
      suboptions: [
        {
          subtitle: "Horário das aulas",
          text: "Disponibilizamos um calendário <a href='#' target='_blank'>aqui</a> com os horários disponíveis, onde você poderá selecionar quantas aulas quiser, nos horários desejados!"
        },
        {
          subtitle: "Conteúdo das aulas",
          text: "As aulas individuais podem ser personalizadas e totalmente moldadas aos seus objetivos e ao seu nível de prática."
        },
        {
          subtitle: "Política de cancelamento",
          text: "Caso não possa mais fazer aula no horário escolhido, você poderá cancelar a aula até 2 dias antes do horário marcado."
        }
      ]
    },
    {
      title: "Aulas Ao Vivo Online",
      suboptions: [
        {
          subtitle: "Planos",
          text: "Temos 3 tipos de planos para aulas gravadas: 1. mensal; 2. anual; e 3. aulas avulsas. Você vai encontrar mais informações sobre esse assunto <a href='#' target='_blank'>aqui</a>."
        },
        {
          subtitle: "Horários das Aulas",
          text: "Temos 3 tipos de planos para aulas gravadas: 1. mensal; 2. anual; e 3. aulas avulsas. Você vai encontrar mais informações sobre esse assunto <a href='#' target='_blank'>aqui</a>."
        },
        {
          subtitle: "Conteúdo das aulas",
          text: "Ministramos aulas práticas e teóricas. O cronograma varia conforme o avanço e as necessidades da turma."
        }
      ]
    },
    {
      title: "Aulas Gravadas",
      suboptions: [
        {
          subtitle: "Planos",
          text: "Temos 2 tipos de planos para aulas gravadas: 1. mensal; 2. anual. Você pode consultar mais informações <a href='#' target='_blank'>aqui</a>."
        },
        {
          subtitle: "Quantidade de Aulas",
          text: "Você pode fazer quantas aulas quiser, não há limite. Atualmente temos cerca de 100 aulas disponíveis que serão disponibilizadas no momento da sua assinatura. E estamos trabalhando para aumentar esse número."
        },
        {
          subtitle: "Nível de Dificuldade",
          text: "Nossas aulas vão do iniciante ao intermediário. E incluem aulas práticas e teóricas, para expandir o seu conhecimento da melhor forma! Caso você tenha alguma limitação física, recomendamos que busque orientação do seu médico."
        }
      ]
    },
    {
      title: "Outro",
      text: "Queremos ouvir você! Caso a sua dúvida não tenha sido sanada, por favor nos mande uma mensagem pelo nosso <a href='#' target='_blank'>Fale Conosco</a>."
    },
  ];


  for (let i=0; i < options.length; i++){
    let titleBtn = document.createElement('div');
    titleBtn.classList.add('chatbot-message');
    titleBtn.classList.add('title-btn');
    titleBtn.innerHTML = options[i].title;
    titleBtn.animate( [{easing:"ease-in", opacity:0.4},{opacity:1}], {duration:100});
    chatContainer.appendChild(titleBtn);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    titleBtn.addEventListener('click', function(){
      if (options[i].title === "Outro") {
        setTimeout(function(){
          chatbotSendMessage(options[i].text);
        },400);
        setTimeout(function(){
          finalize();
        },1200);
      } else {
        setTimeout(function(){
          chatbotSendMessage(`Aqui estão as opções para ${options[i].title}:`)
        },400);
        for(let j = 0; j < options[i].suboptions.length; j++){
          setTimeout(function(){
            let subtitleBtn = document.createElement('div');
            subtitleBtn.classList.add('chatbot-message');
            subtitleBtn.classList.add('subtitle-btn');
            subtitleBtn.innerHTML = options[i].suboptions[j].subtitle;
            subtitleBtn.animate( [{easing:"ease-in", opacity:0.4},{opacity:1}], {duration:100});
            chatContainer.appendChild(subtitleBtn);
            chatContainer.scrollTop = chatContainer.scrollHeight;

            subtitleBtn.addEventListener('click', function(){
              setTimeout(function(){
                chatbotSendMessage(`Sobre ${options[i].suboptions[j].subtitle}:`)
              },400);
              setTimeout(function(){
                chatbotSendMessage(options[i].suboptions[j].text);
              },1000);
              chatContainer.scrollTop = chatContainer.scrollHeight;
              setTimeout(function(){
                finalize();
              }, 2000);
            });
          },1000);
        }
      }
      chatContainer.scrollTop = chatContainer.scrollHeight;
    });
  }
};

function chatbotSendMessage(messageText){
  let messageElement = document.createElement('div');
  messageElement.classList.add('chatbot-message');
  messageElement.innerHTML = `Hamsa: ${messageText}`
  messageElement.animate( [{easing:"ease-in", opacity:0.4},{opacity:1}], {duration:100});
  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function sendMessage(messageText){
  let messageElement = document.createElement('div');
  messageElement.classList.add('user-message');
  messageElement.innerHTML = `You: ${messageText}`
  messageElement.animate( [{easing:"ease-in", opacity:0.4},{opacity:1}], {duration:100});
  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight;
};

function finalize(){
  setTimeout(function(){
    chatbotSendMessage("Consegui ajudar?");
  },2000);
  
  setTimeout(function(){
    yesBtn = document.createElement('div');
    yesBtn.classList.add('chatbot-message');
    yesBtn.classList.add('title-btn');
    yesBtn.innerHTML = "Sim"
    chatContainer.appendChild(yesBtn);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    backBtn = document.createElement('div');
    backBtn.classList.add('chatbot-message');
    backBtn.classList.add('title-btn');
    backBtn.innerHTML = "Voltar ao menu inicial"
    chatContainer.appendChild(backBtn);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    yesBtn.addEventListener('click', function(){
      setTimeout(function(){
        chatbotSendMessage("Oba! Espero vê-lo(a) navegando pelas nossas aulas!");
      },400);
    })
    
    backBtn.addEventListener('click', function(){
      setTimeout(function(){
        chatbotSendMessage("Ajude-me a entender a sua dúvida. Você deseja saber sobre:")
      },400);
      setTimeout(function(){
        initializeOptions();
      }, 1000);
    })
  },2800);
}

sendBtn.addEventListener('click', function(e){
  if(inputEl.value == ""){
    alert('Por favor, digite uma mensagem.');
  }else{ 
    let messageText = inputEl.value;
    user.message = messageText;
    sendMessage(messageText);
    inputEl.value="";
    processMessage();
    assistantResponse(messageText);
  }
});

inputEl.addEventListener('keypress', function(e){
  if (e.key === 'Enter') {
    e.preventDefault();
    if (inputEl.value === "") {
      alert('Por favor, digite uma mensagem.');
    } else {
      let messageText = inputEl.value;
      user.message = messageText;
      sendMessage(messageText);
      inputEl.value = "";
      processMessage();
      assistantResponse(messageText);
    }
  }
});

let arrayOfPossibleMEssages = [

  {"message":"como você está?", "response": "Estou bem, obrigado por perguntar!"},
  {"message":"quem é você?", "response": "Eu sou um cisne! Estou aqui para te ajudar a navegar pelas águas turbulentas da vida!"},
  {"message":"quero fazer yoga", "response": "Você é uma pessoa diferenciada por perceber a importância do Yôga!"},
  {"message":"quero fazer Yôga", "response": "Você é uma pessoa diferenciada por perceber a importância do Yôga!"},
  {"message":"quero fazer ioga", "response": "Você é uma pessoa diferenciada por perceber a importância do Yôga!"},
  {"message":"quero praticar", "response": "Você é uma pessoa diferenciada por perceber a importância do Yôga!"},
  {"message":"como posso começar as aulas?", "response": "Comece escolhendo o plano que melhor se encaixar nos seus planos: individual, ao vivo ou aulas gravadas!"},
  {"message":"tenho hérnia", "response": "No caso de alguma limitação física, indicamos que você busque orientação médica antes de fazer as aulas."},
  {"message":"tenho problema no joelho", "response": "No caso de alguma limitação física, indicamos que você busque orientação médica antes de fazer as aulas."},
  {"message":"sou idoso, posso praticar?", "response": "Não temos contra-indicações nesse caso. Mas no caso de alguma limitação física, indicamos que você busque orientação médica antes de fazer as aulas."},
  {"message":"posso praticar?", "response": "Pode! Apenas no caso de alguma limitação física, indicamos que você busque orientação médica antes de fazer as aulas."},
  {"message":"sinto dor nas costas", "response": "O Yôga pode te ajudar a melhorar as suas dores! Nas aulas, trabalhamos fortalecimento e flexibilidade dos músculos, o que resulta numa maior saúde física e ausência de dores."},
  {"message":"tenho dor nas costas", "response": "O Yôga pode te ajudar a melhorar as suas dores! Nas aulas, trabalhamos fortalecimento e flexibilidade dos músculos, o que resulta numa maior saúde física e ausência de dores."},
  {"message":"tenho dor", "response": "O Yôga pode te ajudar a melhorar as suas dores! Nas aulas, trabalhamos fortalecimento e flexibilidade dos músculos, o que resulta numa maior saúde física e ausência de dores."},
  {"message":"tenho ansiedade", "response": "O Yôga pode te ajudar a melhorar a sua ansiedade. Com as aulas você vai se sentir mais sereno(a). Além disso, nossas aulas sobre a filosofia do Yôga visam fazer com que o aluno enxergue o mundo com maior clareza, reduzindo pensamentos desnecessários."},
  {"message":"o que é yoga?", "response": "Yôga é uma filosofia prática, que visa a expansão da consciência. Mas mesmo que você não tenha esse objetivo, o Yôga é uma ferramenta poderosa para desenvolver: flexibilidade, força física e mental, inteligência emocional, intuição, capacidade pulmonar, maior controle das suas energias e emoções, aumento da concentração, entre muitos outros benefícios!"},
  {"message":"o que é ioga?", "response": "Yôga é uma filosofia prática, que visa a expansão da consciência. Mas mesmo que você não tenha esse objetivo, o Yôga é uma ferramenta poderosa para desenvolver: flexibilidade, força física e mental, inteligência emocional, intuição, capacidade pulmonar, maior controle das suas energias e emoções, aumento da concentração, entre muitos outros benefícios!"},
  {"message":"o que é Yôga?", "response": "Yôga é uma filosofia prática, que visa a expansão da consciência. Mas mesmo que você não tenha esse objetivo, o Yôga é uma ferramenta poderosa para desenvolver: flexibilidade, força física e mental, inteligência emocional, intuição, capacidade pulmonar, maior controle das suas energias e emoções, aumento da concentração, entre muitos outros benefícios!"}
];

function processMessage(){
  if(user.message.length > 5){
    let result = arrayOfPossibleMEssages.filter(val => val.message.includes(user.message.toLocaleLowerCase()));
    if(result.length > 0){
      var response = result[0].response;
      setTimeout(function(){
        chatbotSendMessage(response);
      },1500);
    } else {
      setTimeout(function(){
        chatbotSendMessage("Eu sinto muito, ainda estou em treinamento e não entendi a sua pergunta. Digite 'menu' para voltar ao menu principal.");
      },1500);
    }
  } else if (user.message == "quem" || user.message == "o que"){
    setTimeout(function(){
      chatbotSendMessage("?");
    },1500);
  } else if(user.message == "ioga" || user.message == "Yôga" || user.message == "iôga"|| user.message == "yoga" || user.message == "ióga"){
    setTimeout(function(){
      chatbotSendMessage("Yôga significa união! Mas seu significado vai muito além da superfície, mergulhe conosco nessa jornada!")
    },800);
  } else if(user.message == "menu" || user.message == "Menu"){
    setTimeout(function(){
      chatbotSendMessage("Ajude-me a entender a sua dúvida. Você deseja saber sobre:")
    },800);
    setTimeout(function(){
      initializeOptions();
    },1500);
  } else {
    setTimeout(function(){
      chatbotSendMessage("Por favor, me mande uma mensagem completa ou digite 'menu' para voltar ao menu principal.")
    },1500);
  }
}