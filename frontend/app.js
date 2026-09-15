const API = '/api';

async function api(path, options = {}) {
  const headers = {'Content-Type':'application/json', ...(options.headers || {})};
  const token = localStorage.getItem('study_token');
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await fetch(API + path, {...options, headers});
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || 'Request failed');
  return data;
}

const setMessage = (text, ok = false) => {
  const el = document.getElementById('message');
  if (el) { el.textContent = text; el.style.color = ok ? '#67e8f9' : '#ff8f9c'; }
};

const registerForm = document.getElementById('registerForm');
if (registerForm) registerForm.addEventListener('submit', async e => {
  e.preventDefault(); setMessage('Creating account...');
  try {
    const data = await api('/auth/register', {method:'POST', body:JSON.stringify({name:name.value,email:email.value,password:password.value})});
    localStorage.setItem('study_token', data.token); location.href='/dashboard.html';
  } catch (err) { setMessage(err.message); }
});

const loginForm = document.getElementById('loginForm');
if (loginForm) loginForm.addEventListener('submit', async e => {
  e.preventDefault(); setMessage('Signing in...');
  try {
    const data = await api('/auth/login', {method:'POST', body:JSON.stringify({email:email.value,password:password.value})});
    localStorage.setItem('study_token', data.token); location.href='/dashboard.html';
  } catch (err) { setMessage(err.message); }
});

const chatBox = document.getElementById('chatBox');
function addBubble(text, type) { const div=document.createElement('div'); div.className=`bubble ${type}`; div.textContent=text; chatBox.appendChild(div); chatBox.scrollTop=chatBox.scrollHeight; }

if (chatBox) {
  if (!localStorage.getItem('study_token')) location.href='/login.html';
  api('/me').then(data => { document.getElementById('userName').textContent = data.user.name; }).catch(() => { localStorage.removeItem('study_token'); location.href='/login.html'; });
  document.querySelectorAll('[data-question]').forEach(btn => btn.addEventListener('click', () => { document.getElementById('chatInput').value=btn.dataset.question; document.getElementById('chatInput').focus(); }));
}

const chatForm = document.getElementById('chatForm');
if (chatForm) chatForm.addEventListener('submit', async e => {
  e.preventDefault(); const input=document.getElementById('chatInput'); const text=input.value.trim(); if(!text)return;
  addBubble(text,'user'); input.value='';
  try { const data=await api('/chat',{method:'POST',body:JSON.stringify({message:text})}); addBubble(data.answer,'bot'); }
  catch(err){ addBubble(err.message,'bot'); }
});

const logout = document.getElementById('logoutBtn');
if (logout) logout.addEventListener('click', () => { localStorage.removeItem('study_token'); location.href='/'; });
