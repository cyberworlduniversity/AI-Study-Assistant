const subjects = [
  ['🐍','Python','Variables, data types, functions, loops, OOP and programming fundamentals.'],
  ['☕','Java','Classes, objects, inheritance, interfaces, exceptions and collections.'],
  ['🌐','HTML','Semantic elements, headings, forms, tables, links and page structure.'],
  ['🎨','CSS','Selectors, box model, Flexbox, Grid, responsive design and animations.'],
  ['⚡','JavaScript','Variables, functions, arrays, objects, DOM, events and web interactivity.'],
  ['🗄️','SQL','SELECT, filtering, grouping, joins, CRUD and relational database concepts.'],
  ['🛡️','Cybersecurity','CIA triad, authentication, threats, network security and safe defense concepts.'],
  ['🤖','AI Basics','Artificial intelligence, machine learning, models, data and common AI concepts.']
];

const notes = [
  ['HTML','Semantic HTML','Semantic elements describe meaning. Common examples are header, nav, main, section, article and footer.'],
  ['HTML','Forms','HTML forms collect user input with elements such as input, label, select, textarea and button.'],
  ['CSS','Box Model','Every element has content, padding, border and margin. Understanding the box model helps control layout.'],
  ['CSS','Flexbox','Flexbox is useful for one-dimensional layouts. display:flex works with properties such as justify-content and align-items.'],
  ['JavaScript','DOM','The Document Object Model represents a page as objects that JavaScript can read and modify.'],
  ['JavaScript','Events','Events allow pages to react to actions such as clicks, typing, input and form submission.'],
  ['SQL','JOIN','JOIN combines related rows from tables. INNER JOIN returns matches; LEFT JOIN keeps every row from the left table.'],
  ['SQL','CRUD','CRUD means Create, Read, Update and Delete, the basic operations used with stored data.'],
  ['Cybersecurity','CIA Triad','Confidentiality limits unauthorized access, Integrity protects correctness, and Availability keeps systems usable.'],
  ['Python','Variables','A Python variable is a name referring to a value. Python determines the value type at runtime.'],
  ['Python','Functions','Functions are reusable blocks of code defined with def. They can accept parameters and return values.'],
  ['Java','OOP','Object-oriented programming uses concepts including classes, objects, encapsulation, inheritance and polymorphism.'],
  ['AI','Machine Learning','Machine learning uses data to learn patterns that can support predictions or decisions.']
];

const knowledge = [
  [['hello','hi','hey'], 'Hello! 👋 I’m your AI Study Assistant. Ask me about Python, Java, HTML, CSS, JavaScript, SQL, AI, cybersecurity or general study concepts.'],
  [['help','what can you do'], 'I can explain concepts, definitions, examples and basic exam topics. Try: “Explain Python variables”, “What is the DOM?”, “Explain SQL JOIN”, “What is OOP?”, or “What is the CIA triad?”'],
  [['python','variable'], 'Python variables are names that refer to values. Example: <code>name = "Student"</code>. Common Python types include int, float, str, bool, list, tuple, set and dict.'],
  [['python','data type'], 'Python has common built-in data types such as int, float, str, bool, list, tuple, set and dict. Use <code>type(value)</code> to inspect a value’s type.'],
  [['python','loop','for loop','while loop'], 'Loops repeat code. A <code>for</code> loop is commonly used to iterate over a sequence, while a <code>while</code> loop repeats while a condition is true.'],
  [['python','function'], 'A Python function is a reusable block of code defined with <code>def</code>. It can accept parameters and return a result with <code>return</code>.'],
  [['python','list'], 'A Python list is an ordered, mutable collection. Example: <code>numbers = [10, 20, 30]</code>.'],
  [['python','dictionary','dict'], 'A Python dictionary stores key-value pairs. Example: <code>student = {"name": "Alex", "age": 20}</code>.'],
  [['python','class','oop'], 'Python supports OOP. A class is a blueprint for objects. Core ideas include encapsulation, inheritance, polymorphism and abstraction.'],
  [['java','class','object'], 'In Java, a class defines data and behavior, while an object is an instance of a class. Java is strongly typed and commonly uses object-oriented programming.'],
  [['java','inheritance'], 'Java inheritance allows one class to acquire accessible properties and behavior from another class. It is commonly expressed with the <code>extends</code> keyword.'],
  [['java','exception'], 'Java exceptions represent abnormal conditions during program execution. Code can handle them using <code>try</code>, <code>catch</code> and <code>finally</code>.'],
  [['html','html'], 'HTML (HyperText Markup Language) structures web content. Common elements include headings, paragraphs, links, images, lists, forms and semantic sections.'],
  [['html','semantic'], 'Semantic HTML uses elements whose names describe their purpose, such as <code>header</code>, <code>nav</code>, <code>main</code>, <code>article</code> and <code>footer</code>.'],
  [['html','form'], 'HTML forms collect input from users. Common controls include input, label, select, textarea and button.'],
  [['css','css'], 'CSS (Cascading Style Sheets) controls presentation. Important topics include selectors, colors, spacing, the box model, Flexbox, Grid and responsive design.'],
  [['css','flexbox'], 'Flexbox is a CSS layout system for arranging items along one dimension. Useful properties include display:flex, justify-content, align-items and gap.'],
  [['css','grid'], 'CSS Grid is a two-dimensional layout system. It is useful for controlling rows and columns with properties such as grid-template-columns and gap.'],
  [['css','responsive'], 'Responsive design makes a website adapt to different screen sizes. CSS media queries, flexible layouts and relative units are common techniques.'],
  [['javascript','javascript','js'], 'JavaScript adds behavior and interactivity to web pages. Learn variables, functions, arrays, objects, DOM manipulation, events and asynchronous programming.'],
  [['javascript','dom'], 'The DOM (Document Object Model) represents an HTML document as a tree of objects. JavaScript can select elements, change content and respond to events.'],
  [['javascript','event'], 'A JavaScript event represents an action such as a click, input, key press or form submission. Event listeners let code respond to these actions.'],
  [['javascript','array'], 'A JavaScript array is an ordered collection. Example: <code>const subjects = ["HTML", "CSS", "JavaScript"];</code>.'],
  [['javascript','function'], 'A JavaScript function is a reusable block of code. It may accept parameters and return a value. Functions can be declared with function syntax or arrow syntax.'],
  [['sql','sql'], 'SQL (Structured Query Language) is used to work with relational databases. Important commands include SELECT, INSERT, UPDATE, DELETE, CREATE and JOIN.'],
  [['sql','select'], 'SELECT retrieves data from a table. Example: <code>SELECT name FROM students;</code>. Use WHERE to filter rows.'],
  [['sql','where'], 'WHERE filters rows based on a condition. Example: <code>SELECT * FROM students WHERE mark >= 50;</code>.'],
  [['sql','join'], 'SQL JOINs combine related data from tables. INNER JOIN returns matching rows, while LEFT JOIN keeps all rows from the left table plus matching rows from the right.'],
  [['sql','primary key'], 'A primary key uniquely identifies each row in a table. It should contain unique, non-null values.'],
  [['sql','foreign key'], 'A foreign key links a column in one table to a key in another table, helping represent relationships between tables.'],
  [['cybersecurity','security'], 'Cybersecurity protects systems, networks, applications and data. Key foundations include authentication, authorization, secure coding, backups, monitoring and incident response.'],
  [['cybersecurity','threat'], 'A cybersecurity threat is a potential cause of harm to a system or its data. Examples include phishing, malware, credential theft and unauthorized access.'],
  [['cybersecurity','phishing'], 'Phishing is a social-engineering technique that attempts to trick people into revealing information or taking an unsafe action. Check senders, links and unexpected requests carefully.'],
  [['cia','triad','confidentiality','integrity','availability'], 'The CIA triad is a core security model: Confidentiality limits unauthorized access, Integrity protects data from improper change, and Availability keeps systems and services usable.'],
  [['authentication','authorization'], 'Authentication verifies who a user is. Authorization determines what an authenticated user is allowed to access or do.'],
  [['network','osi'], 'The OSI model has seven conceptual layers: Physical, Data Link, Network, Transport, Session, Presentation and Application.'],
  [['network','tcp','udp'], 'TCP is connection-oriented and provides reliable, ordered delivery. UDP is connectionless and has lower overhead but does not provide the same delivery guarantees.'],
  [['ai','artificial intelligence'], 'Artificial intelligence is the field of building systems that perform tasks associated with human intelligence, such as recognizing patterns, understanding language and making predictions.'],
  [['machine learning','ml'], 'Machine learning is a branch of AI where systems learn patterns from data. Common categories include supervised, unsupervised and reinforcement learning.'],
  [['algorithm'], 'An algorithm is a finite, ordered set of steps for solving a problem or completing a task. Good algorithms aim for correctness and appropriate efficiency.'],
  [['database'], 'A database is an organized collection of data. A relational database stores data in tables and commonly uses SQL to query and manage it.'],
  [['api'], 'An API (Application Programming Interface) defines how software components communicate. Web APIs commonly use HTTP requests and structured data such as JSON.'],
  [['http','https'], 'HTTP is a protocol used for web communication. HTTPS is HTTP protected with TLS, helping provide confidentiality and integrity for data in transit.'],
  [['git','github'], 'Git is a version-control system used to track code changes. GitHub is a platform for hosting Git repositories and collaborating on software projects.'],
  [['study','exam'], 'For exam preparation: understand the concept first, write a short definition, learn one example, practice questions, then review mistakes.'],
  [['thank','thanks'], 'You’re welcome! 📚 Keep learning and ask your next question whenever you’re ready.']
];

const subjectGrid = document.getElementById('subjectGrid');
const notesGrid = document.getElementById('notesGrid');
function renderSubjects(filter='') {
  subjectGrid.innerHTML = subjects.filter(s => s.join(' ').toLowerCase().includes(filter.toLowerCase())).map(s => `<article class="subject-card"><div class="subject-icon">${s[0]}</div><h3>${s[1]}</h3><p>${s[2]}</p><button class="card-ask" data-question="Explain ${s[1]}">Ask about ${s[1]} →</button></article>`).join('') || '<p>No subjects found.</p>';
  document.querySelectorAll('.card-ask').forEach(b => b.addEventListener('click', () => askQuestion(b.dataset.question)));
}
function renderNotes(filter='') {
  notesGrid.innerHTML = notes.filter(n => n.join(' ').toLowerCase().includes(filter.toLowerCase())).map(n => `<article class="note-card"><small>${n[0]}</small><h3>${n[1]}</h3><p>${n[2]}</p><button class="text-btn" data-note="${n[1]}">Ask Assistant →</button></article>`).join('') || '<p>No notes found.</p>';
  document.querySelectorAll('[data-note]').forEach(b => b.addEventListener('click', () => askQuestion(`Explain ${b.dataset.note}`)));
}
renderSubjects(); renderNotes();
document.getElementById('noteSearch').addEventListener('input', e => renderNotes(e.target.value));

const chatBox = document.getElementById('chatBox');
const chatInput = document.getElementById('chatInput');
function escapeHtml(s) { return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c])); }
function addBubble(text, type) { const d=document.createElement('div'); d.className=`bubble ${type}`; d.innerHTML=type==='bot'?text.replace(/\n/g,'<br>'):escapeHtml(text); chatBox.appendChild(d); chatBox.scrollTop=chatBox.scrollHeight; }
function answerFor(text) {
  const q=text.toLowerCase().replace(/[^a-z0-9\s?]/g,' ');
  let best=null,bestScore=0;
  for(const [keys,answer] of knowledge){let score=0;for(const key of keys){const k=key.toLowerCase();if(q.includes(k)) score += k.length>3?2:1;}if(score>bestScore){bestScore=score;best=answer;}}
  if(best) return best;
  return 'I don’t have a specific answer for that yet. Try asking about Python, Java, HTML, CSS, JavaScript, SQL, AI, cybersecurity, networking, Git/GitHub, databases or exam preparation.';
}
function askQuestion(text) { document.getElementById('assistant').scrollIntoView({behavior:'smooth'}); addBubble(text,'user'); chatInput.value=''; setTimeout(()=>addBubble(answerFor(text),'bot'),180); }
document.getElementById('chatForm').addEventListener('submit',e=>{e.preventDefault();const text=chatInput.value.trim();if(text) askQuestion(text);});
document.querySelectorAll('[data-question]').forEach(b=>b.addEventListener('click',()=>{chatInput.value=b.dataset.question;chatInput.focus();}));
document.getElementById('clearChat').addEventListener('click',()=>{chatBox.innerHTML='<div class="bubble bot">Chat cleared. What would you like to study?</div>';});

const questions=[
 {q:'Which language is commonly used for web page behavior?',o:['HTML','CSS','JavaScript','SQL'],a:2},
 {q:'What does CSS mainly control?',o:['Database records','Web page presentation','Server hardware','Email accounts'],a:1},
 {q:'Which SQL command retrieves data?',o:['SELECT','PUSH','SHOWDATA','FETCHALL'],a:0},
 {q:'What does the C in the CIA triad stand for?',o:['Control','Confidentiality','Connection','Code'],a:1},
 {q:'Which Python keyword defines a function?',o:['func','define','def','function'],a:2},
 {q:'What does DOM stand for?',o:['Data Object Model','Document Object Model','Digital Output Method','Document Order Map'],a:1},
 {q:'Which HTML element is normally used for the main page heading?',o:['<h1>','<head>','<title>','<header>'],a:0},
 {q:'Which JavaScript method selects an element by its ID?',o:['getElementById()','selectId()','findId()','queryId()'],a:0},
 {q:'What does a primary key do in a relational table?',o:['Stores images','Uniquely identifies rows','Encrypts the database','Creates a website'],a:1},
 {q:'Which model has seven layers?',o:['CIA','OSI','CRUD','MVC'],a:1},
 {q:'What is phishing?',o:['A database query','A social-engineering technique','A CSS layout','A programming loop'],a:1},
 {q:'Which Java keyword is used to inherit from a class?',o:['inherits','extends','using','parent'],a:1}
];
let quizOrder=[...questions].sort(()=>Math.random()-0.5).slice(0,5), qi=0, score=0, selected=null;
function renderQuestion(){const x=quizOrder[qi];selected=null;document.getElementById('quizProgress').textContent=`Question ${qi+1} of ${quizOrder.length}`;document.getElementById('quizScore').textContent=`Score: ${score}`;document.getElementById('quizQuestion').textContent=x.q;document.getElementById('quizResult').textContent='';document.getElementById('nextBtn').textContent=qi===quizOrder.length-1?'Finish Quiz':'Next Question';document.getElementById('quizOptions').innerHTML=x.o.map((o,i)=>`<button class="quiz-option" data-i="${i}">${o}</button>`).join('');document.querySelectorAll('.quiz-option').forEach(b=>b.addEventListener('click',()=>chooseAnswer(Number(b.dataset.i))))}
function chooseAnswer(i){if(selected!==null)return;selected=i;const x=quizOrder[qi];document.querySelectorAll('.quiz-option').forEach((b,n)=>{b.disabled=true;if(n===x.a)b.classList.add('correct');if(n===i&&i!==x.a)b.classList.add('wrong')});if(i===x.a)score++;document.getElementById('quizScore').textContent=`Score: ${score}`;document.getElementById('quizResult').textContent=i===x.a?'Correct! 🎉':'Not quite — review the topic and try again.';}
document.getElementById('nextBtn').addEventListener('click',()=>{if(selected===null){document.getElementById('quizResult').textContent='Choose an answer first.';return;}if(qi<quizOrder.length-1){qi++;renderQuestion();}else{document.getElementById('quizResult').textContent=`Quiz complete! You scored ${score}/${quizOrder.length}.`;document.getElementById('nextBtn').textContent='Restart Quiz';document.getElementById('nextBtn').onclick=()=>{quizOrder=[...questions].sort(()=>Math.random()-0.5).slice(0,5);qi=0;score=0;selected=null;document.getElementById('nextBtn').onclick=null;renderQuestion();};}});renderQuestion();

const menuBtn=document.getElementById('menuBtn'),navLinks=document.getElementById('navLinks');menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
const themeBtn=document.getElementById('themeBtn');if(localStorage.getItem('study_theme')==='light')document.body.classList.add('light');function updateThemeIcon(){themeBtn.textContent=document.body.classList.contains('light')?'☀':'☾'}updateThemeIcon();themeBtn.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('study_theme',document.body.classList.contains('light')?'light':'dark');updateThemeIcon()});

const modal=document.getElementById('authModal'),authTitle=document.getElementById('authTitle'),authText=document.getElementById('authText'),authName=document.getElementById('authName'),authSubmit=document.getElementById('authSubmit'),authForm=document.getElementById('authForm');
let authMode='login';
function openAuth(mode){authMode=mode;modal.classList.add('show');modal.setAttribute('aria-hidden','false');authName.parentElement.style.display=mode==='register'?'grid':'none';authTitle.textContent=mode==='register'?'Student Register':'Student Login';authText.textContent=mode==='register'?'Create your student profile on this browser.':'Login to your student profile on this browser.';authSubmit.textContent=mode==='register'?'Create Account':'Login';authEmail.value='';authPassword.value='';authName.value='';setTimeout(()=>authEmail.focus(),50)}
function closeAuth(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true');}
document.getElementById('loginBtn').addEventListener('click',()=>openAuth('login'));document.getElementById('registerBtn').addEventListener('click',()=>openAuth('register'));document.getElementById('modalClose').addEventListener('click',closeAuth);modal.addEventListener('click',e=>{if(e.target===modal)closeAuth()});
const authEmail=document.getElementById('authEmail'),authPassword=document.getElementById('authPassword');
authForm.addEventListener('submit',e=>{e.preventDefault();const name=authName.value.trim()||'Student';const email=authEmail.value.trim();localStorage.setItem('study_student',JSON.stringify({name,email}));closeAuth();alert(authMode==='register'?`Welcome, ${name}! Your demo student account is ready.`:`Welcome back, ${name}!`);});

document.getElementById('year').textContent=new Date().getFullYear();
