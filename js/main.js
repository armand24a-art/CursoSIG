document.addEventListener('DOMContentLoaded',()=>{
  const hamburger=document.querySelector('.hamburger');
  const nav=document.querySelector('.navbar-nav');
  if(hamburger&&nav){
    hamburger.addEventListener('click',()=>{nav.classList.toggle('open');hamburger.classList.toggle('active')});
    document.querySelectorAll('.navbar-nav a').forEach(l=>{l.addEventListener('click',()=>{nav.classList.remove('open');hamburger.classList.remove('active')})});
  }

  const obs=new IntersectionObserver(e=>{e.forEach(en=>{if(en.isIntersecting)en.target.classList.add('visible')})},{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));

  window.addEventListener('scroll',()=>{
    const nb=document.querySelector('.navbar');
    if(!nb)return;
    nb.style.boxShadow=window.pageYOffset>80?'0 2px 30px rgba(13,33,55,0.12)':'0 1px 20px rgba(13,33,55,0.06)';
  });

  const secs=document.querySelectorAll('section[id]');
  window.addEventListener('scroll',()=>{
    const sy=window.pageYOffset+100;
    secs.forEach(s=>{
      const t=s.offsetTop,h=s.offsetHeight,id=s.getAttribute('id');
      const ln=document.querySelector(`.navbar-nav a[href="#${id}"]`);
      if(ln){if(sy>=t&&sy<t+h)ln.classList.add('active');else ln.classList.remove('active')}
    });
  });

  document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const grp=btn.closest('.tabs');
      grp.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const tgt=btn.dataset.tab;
      const pan=grp.nextElementSibling;
      if(pan){pan.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
        const tc=pan.querySelector('#'+tgt);if(tc)tc.classList.add('active')}
    });
  });

  document.querySelectorAll('.file-upload').forEach(area=>{
    const inp=area.querySelector('input[type="file"]');
    if(!inp)return;
    area.addEventListener('click',()=>inp.click());
    area.addEventListener('dragover',e=>{e.preventDefault();area.style.borderColor='var(--accent)';area.style.background='#eef8fc'});
    area.addEventListener('dragleave',()=>{area.style.borderColor='';area.style.background=''});
    area.addEventListener('drop',e=>{e.preventDefault();area.style.borderColor='';area.style.background='';inp.files=e.dataTransfer.files;updList(area,inp.files)});
    inp.addEventListener('change',()=>updList(area,inp.files));
  });
  function updList(a,files){
    const l=a.querySelector('.file-list');if(!l)return;l.innerHTML='';
    Array.from(files).forEach(f=>{
      const li=document.createElement('li');
      li.style.cssText='display:flex;align-items:center;gap:8px;padding:5px 0;font-size:0.86rem';
      li.innerHTML=`<span style="color:var(--accent)">&#128196;</span>${f.name} <span style="color:var(--text-light);font-size:0.76rem">(${(f.size/1024).toFixed(1)} KB)</span>`;
      l.appendChild(li);
    });
  }

  const sf=document.getElementById('submissionForm');
  if(sf){sf.addEventListener('submit',e=>{
    e.preventDefault();
    const m=document.getElementById('submitMsg');
    if(m){m.style.display='block';m.scrollIntoView({behavior:'smooth',block:'center'})}
    sf.reset();
  })}

  document.querySelectorAll('[data-modal]').forEach(tr=>{
    tr.addEventListener('click',e=>{e.preventDefault();const m=document.getElementById(tr.dataset.modal);if(m)m.classList.add('active')});
  });
  document.querySelectorAll('.modal-close').forEach(b=>{b.addEventListener('click',()=>{b.closest('.modal-overlay').classList.remove('active')})});
  document.querySelectorAll('.modal-overlay').forEach(o=>{o.addEventListener('click',e=>{if(e.target===o)o.classList.remove('active')})});

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      const h=this.getAttribute('href');if(h==='#')return;e.preventDefault();
      const t=document.querySelector(h);
      if(t){window.scrollTo({top:t.getBoundingClientRect().top+window.pageYOffset-80,behavior:'smooth'})}
    });
  });
});
