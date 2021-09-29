var texts = document.querySelectorAll('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';
var p = document.createElement('p');

recognition.addEventListener('result', (e)=> {
   texts.appendChild(p);
   const text = Array.from(e.results)
   .map(result => result[0])
   .map(result => result.transcript)
   .join('');

   p.innerHTML = text;
   if(e.results[0].isFinal){
      if(text.includes('hello')){
         p = document.createElement('p');
         p.classList.add('replay');
         p.innerHTML = 'Salom';
         texts.appendChild(p); 
      }
      if(text.includes('how are you')){
         p = document.createElement('p');
         p.classList.add('replay');
         p.innerHTML = 'I am fine';
         texts.appendChild(p); 
      }
      if(text.includes('what is your name')){
         p = document.createElement('p');
         p.classList.add('replay');
         p.innerHTML = 'My name is Memory';
         texts.appendChild(p);
      }
      if(text.includes('When were you made?')){
         p = document.createElement('p');
         p.classList.add('replay');
         p.innerHTML = 'It has been 3 days since I made it.';
         texts.appendChild(p);
      }
      if(text.includes('Where are you made?')){
         p = document.createElement('p');
         p.classList.add('replay');
         p.innerHTML = 'I was made by a man.';
         texts.appendChild(p);
      }
      if(text.includes('What can you serve?')){
         p = document.createElement('p');
         p.classList.add('replay');
         p.innerHTML = 'I have the opportunity to answer questions.';
         texts.appendChild(p);
      }
      if(text.includes('May I ask you a question?')){
         p = document.createElement('p');
         p.classList.add('replay');
         p.innerHTML = 'Yes of course.';
         texts.appendChild(p);
      }
      if(text.includes('How old am I?')){
         p = document.createElement('p');
         p.classList.add('replay');
         p.innerHTML = 'You are 23 years old.';
         texts.appendChild(p);
      }
      if(text.includes('Where do I live')){
         p = document.createElement('p');
         p.classList.add('replay');
         p.innerHTML = 'You live in Uzbekistan';
         texts.appendChild(p);
      }
      if(text.includes('Where do I live')){
         p = document.createElement('p');
         p.classList.add('replay');
         p.innerHTML = 'You live in Uzbekistan';
         texts.appendChild(p);
      }
      p = document.createElement('p');
   }
});

recognition.addEventListener('end', ()=>{
   recognition.start();
 })
 
 recognition.start();