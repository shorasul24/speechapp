const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  if(e.results[0].isFinal){
    if (text.includes('Hello')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Hello';
      texts.appendChild(p)
    }
    if (text.includes('How are you')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'I am fine';
      texts.appendChild(p)
    }
    if (text.includes("What's your name") || text.includes('What is your name')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'My name is Memory';
      texts.appendChild(p)
    }
    if (text.includes('When were you made')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'It has been 3 days since I made it';
      texts.appendChild(p)
    }
    if (text.includes('Where are you made')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'I was made by a man';
      texts.appendChild(p)
    }
    if (text.includes('What can you serve')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'I have the opportunity to answer questions';
      texts.appendChild(p)
    }
    if (text.includes('May I ask you a question')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Yes of course';
      texts.appendChild(p)
    }
    if (text.includes('How old am I')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'You are 23 years old';
      texts.appendChild(p)
    }
    if (text.includes('Where do I live')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'You live in Uzbekistan';
      texts.appendChild(p)
    }
    if (text.includes('Open')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'opening youtube channel';
      texts.appendChild(p)
      console.log('opening youtube')
      window.open('https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2996.1288222465087!2d69.20191968822604!3d41.32781203619716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1632918373138!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy')
    }
    p = document.createElement('p');
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();