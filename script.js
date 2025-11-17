// Theme toggle persisted en localStorage
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  function setTheme(theme){
    if(theme === 'dark'){
      root.setAttribute('data-theme','dark');
      if(toggle) toggle.textContent = '☀️';
    } else {
      root.removeAttribute('data-theme');
      if(toggle) toggle.textContent = '🌙';
    }
    localStorage.setItem('site-theme', theme);
  }

  // init
  const saved = localStorage.getItem('site-theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(saved);

  if(toggle){
    toggle.addEventListener('click', ()=>{
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
})();