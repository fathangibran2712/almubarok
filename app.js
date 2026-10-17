    const app = document.getElementById('app');
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.getElementById('menuToggle');
    const toast = document.getElementById('toast');
    document.getElementById('year').textContent = new Date().getFullYear();

    const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    function showToast(message){
      toast.textContent = message;
      toast.classList.add('show');
      clearTimeout(showToast.timer);
      showToast.timer = setTimeout(()=>toast.classList.remove('show'), 3000);
    }
    function setActiveNav(route){
      document.querySelectorAll('[data-route]').forEach(a=>{
        const active=a.dataset.route===route;
        a.classList.toggle('active',active);
        if(active)a.setAttribute('aria-current','page');
        else a.removeAttribute('aria-current');
      });
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded','false');
      menuToggle.textContent='☰';
      menuToggle.setAttribute('aria-label','Buka navigasi');
    }
    menuToggle.addEventListener('click',()=>{
      const open=navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded',String(open));
      menuToggle.textContent=open?'×':'☰';
      menuToggle.setAttribute('aria-label',open?'Tutup navigasi':'Buka navigasi');
    });
    document.addEventListener('keydown',event=>{
      if(event.key==='Escape' && navLinks.classList.contains('open')){
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded','false');
        menuToggle.setAttribute('aria-label','Buka navigasi');
        menuToggle.textContent='☰';
        menuToggle.focus();
      }
    });

    const homeTemplate = () => `
      <section class="hero">
        <div class="shell hero-grid">
          <div>
            <div class="admission-kicker">Penerimaan Santri Baru</div>
            <div class="eyebrow">Pondok Pesantren Darul Hadits Al-Mubarok</div>
            <h1>Menuntut ilmu.<br><em>Menjaga adab.</em></h1>
            <p class="lead">Lingkungan pendidikan Islam yang membimbing santri untuk mencintai ilmu, membiasakan adab, dan mengamalkan nilai-nilai kebaikan. Kenali informasi penerimaan dan langkah pendaftaran calon santri.</p>
            <div class="hero-actions">
              <a class="btn" href="#/info-ppdb">Informasi pendaftaran <span aria-hidden="true">↗</span></a>
              <a class="btn secondary" href="#/formulir-ppdb">Daftar sekarang</a>
            </div>
            <div class="micro-note">Pendaftaran dibuka untuk calon santri baru.</div>
          </div>
          <div class="hero-art" role="img" aria-label="Motto Pondok Pesantren Darul Hadits Al-Mubarok">
            <div class="art-kicker">Pondok Pesantren</div>
            <div class="art-title">Ilmu yang diamalkan.<br>Adab yang dijaga.</div>
            <div class="art-quote">Membina generasi yang berilmu, berakhlak mulia, dan bermanfaat bagi sesama.</div>
            <div class="art-seal">م<span>AL-MUBAROK</span></div>
          </div>
        </div>
      </section>
      <div class="ticker"><div class="shell ticker-inner"><span>Penerimaan santri baru</span><span class="dot">✳</span><span>Persyaratan pendaftaran</span><span class="dot">✳</span><span>Formulir calon santri</span></div></div>
      <section class="section white">
        <div class="shell">
          <div class="section-head">
            <div><div class="eyebrow">Alur pendaftaran</div><h2>Tiga langkah menuju pendaftaran.</h2></div>
            <p>Siapkan informasi calon santri dan wali agar pengisian formulir dapat dilakukan dengan lancar.</p>
          </div>
          <div class="principles">
            <article class="principle"><div class="number">01</div><h3>Siapkan data santri</h3><p>Nama lengkap, tanggal lahir, alamat, dan informasi sekolah sebelumnya.</p></article>
            <article class="principle"><div class="number">02</div><h3>Lengkapi data wali</h3><p>Nama wali, hubungan keluarga, serta nomor telepon yang aktif.</p></article>
            <article class="principle"><div class="number">03</div><h3>Periksa lalu kirim</h3><p>Tinjau kembali setiap isian sebelum mengirim formulir pendaftaran.</p></article>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="shell">
          <div class="callout">
            <div><div class="eyebrow">Penerimaan santri baru</div><h2>Mulai langkah baru bersama Darul Hadits Al-Mubarok.</h2><p>Pelajari persyaratan dan alur pendaftaran sebelum mengisi formulir calon santri.</p></div>
            <a class="btn gold" href="#/info-ppdb">Lihat persyaratan <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>`;

    const infoTemplate = () => `
      <section class="page-hero">
        <div class="shell">
          <div class="admission-kicker">Darul Hadits Al-Mubarok</div>
          <div class="eyebrow">Penerimaan santri baru</div>
          <h1>Informasi Pendaftaran</h1>
          <p>Persiapkan berkas dan data calon santri sebelum mengisi formulir. Ikuti tahapan pendaftaran agar proses berjalan lebih mudah.</p>
          <div class="hero-meta"><span>01 — Lengkapi data</span><span>02 — Periksa formulir</span><span>03 — Ikuti informasi panitia</span></div>
        </div>
      </section>
      <section class="section white">
        <div class="shell info-layout">
          <nav class="side-index" aria-label="Daftar isi informasi">
            <a href="#gambaran">Gambaran umum</a><a href="#persiapan">Data yang disiapkan</a><a href="#alur">Alur pendaftaran</a><a href="#ketentuan">Catatan penting</a>
          </nav>
          <div>
            <article class="info-block" id="gambaran"><div class="eyebrow">01 / Gambaran umum</div><h2>Selamat datang calon santri.</h2><p>Pondok Pesantren Darul Hadits Al-Mubarok membuka penerimaan santri baru. Calon santri dan orang tua dapat membaca persyaratan, menyiapkan data, lalu mengisi formulir pendaftaran melalui halaman ini.</p><div class="notice"><strong>Perhatian:</strong> pastikan seluruh data yang diisi sesuai dan dapat dihubungi. Informasi lanjutan mengenai proses penerimaan akan disampaikan melalui panitia pendaftaran.</div></article>
            <article class="info-block" id="persiapan"><div class="eyebrow">02 / Persiapan</div><h2>Persyaratan pendaftaran.</h2><p>Siapkan informasi berikut sebelum mulai mengisi formulir:</p><ul><li>Data diri calon santri, termasuk nama, tempat dan tanggal lahir.</li><li>Alamat tempat tinggal dan asal sekolah.</li><li>Nama orang tua atau wali serta hubungan dengan calon santri.</li><li>Nomor telepon aktif yang dapat dihubungi panitia.</li><li>Alamat email wali, jika tersedia.</li></ul></article>
            <article class="info-block" id="alur"><div class="eyebrow">03 / Alur pendaftaran</div><h2>Ikuti tahapan pendaftaran.</h2><ul><li><strong>Lengkapi formulir.</strong> Isi data calon santri dan orang tua atau wali.</li><li><strong>Periksa kembali.</strong> Pastikan ejaan nama dan informasi kontak sudah benar.</li><li><strong>Kirim pendaftaran.</strong> Selesaikan pengisian dan ikuti arahan panitia untuk tahapan berikutnya.</li></ul></article>
            <article class="info-block" id="ketentuan"><div class="eyebrow">04 / Informasi lanjutan</div><h2>Siapkan diri untuk tahapan berikutnya.</h2><p>Informasi mengenai jadwal, kelengkapan berkas, dan tahapan seleksi dapat diperoleh dari panitia penerimaan santri baru. Pastikan nomor telepon wali yang dicantumkan selalu aktif.</p><a class="btn" href="#/formulir-ppdb">Isi formulir pendaftaran <span aria-hidden="true">↗</span></a></article>
          </div>
        </div>
      </section>`;

    const formState = {step:1, data:{nama:'',panggilan:'',jk:'',lahir:'',tanggal:'',alamat:'',asal:'',namaWali:'',hubungan:'',telepon:'',email:'',catatan:''}, errors:{}};
    const steps = ['Data calon santri','Data orang tua / wali','Periksa data'];
    function localDateValue(date=new Date()){
      const offset=date.getTimezoneOffset()*60000;
      return new Date(date.getTime()-offset).toISOString().slice(0,10);
    }
    function field(name,label,placeholder='',opts={}){
      const value=formState.data[name] || '';
      const required=opts.required!==false;
      const error=formState.errors[name]||'';
      const errorAttrs=`aria-invalid="${error?'true':'false'}" aria-describedby="${name}-error"`;
      let control='';
      if(opts.options){
        control=`<select id="${name}" name="${name}" ${errorAttrs} ${required?'required':''}><option value="">Pilih ${label.toLowerCase()}</option>${opts.options.map(o=>`<option value="${escapeHTML(o)}" ${value===o?'selected':''}>${escapeHTML(o)}</option>`).join('')}</select>`;
      } else if(opts.textarea){
        control=`<textarea id="${name}" name="${name}" placeholder="${escapeHTML(placeholder)}" ${errorAttrs} ${required?'required':''} ${opts.maxlength?`maxlength="${opts.maxlength}"`:''}>${escapeHTML(value)}</textarea>`;
      } else {
        const maxDate=opts.type==='date'?`max="${localDateValue()}"`:'';
        control=`<input id="${name}" name="${name}" type="${opts.type||'text'}" value="${escapeHTML(value)}" placeholder="${escapeHTML(placeholder)}" ${errorAttrs} ${required?'required':''} ${opts.autocomplete?`autocomplete="${opts.autocomplete}"`:''} ${opts.inputmode?`inputmode="${opts.inputmode}"`:''} ${opts.maxlength?`maxlength="${opts.maxlength}"`:''} ${maxDate}>`;
      }
      return `<div class="field ${opts.full?'full':''}"><label for="${name}">${label}${required?' <span class="req">*</span>':' <span class="optional">(opsional)</span>'}</label>${control}<div class="form-error" id="${name}-error" data-error="${name}" aria-live="polite">${escapeHTML(error)}</div></div>`;
    }
    function renderStepper(){
      return `<div class="stepper" role="group" aria-label="Tahapan formulir">${steps.map((s,i)=>`<div class="step ${formState.step===i+1?'active':''} ${formState.step>i+1?'done':''}" ${formState.step===i+1?'aria-current="step"':''}><span class="circle" aria-hidden="true">${formState.step>i+1?'✓':i+1}</span><span>${s}</span></div>`).join('')}</div>`;
    }
    function reviewRows(items){
      return `<div class="review-list">${items.map(([label,key])=>`<div class="review-row"><div class="key">${label}</div><div class="value">${escapeHTML(formState.data[key]||'—')}</div></div>`).join('')}</div>`;
    }
    function renderForm(){
      const content = formState.step===1 ? `
        <h2>Data calon santri</h2><p class="sub">Lengkapi identitas calon santri. Kolom bertanda * wajib diisi.</p>
        <div class="fields">
          ${field('nama','Nama lengkap','Sesuai dokumen identitas',{autocomplete:'name',maxlength:100})}
          ${field('panggilan','Nama panggilan','Nama yang biasa digunakan',{required:false,autocomplete:'nickname',maxlength:60})}
          ${field('jk','Jenis kelamin','',{options:['Laki-laki','Perempuan']})}
          ${field('lahir','Tempat lahir','Kota / kabupaten',{maxlength:80})}
          ${field('tanggal','Tanggal lahir','',{type:'date'})}
          ${field('asal','Asal sekolah','Nama sekolah sebelumnya',{full:true,required:false,maxlength:120})}
          ${field('alamat','Alamat tempat tinggal','Jalan, kelurahan/desa, kecamatan, kota/kabupaten',{textarea:true,full:true,autocomplete:'street-address',maxlength:300})}
        </div>` : formState.step===2 ? `
        <h2>Data orang tua / wali</h2><p class="sub">Cantumkan kontak wali yang aktif untuk keperluan informasi pendaftaran.</p>
        <div class="fields">
          ${field('namaWali','Nama orang tua / wali','Nama lengkap',{autocomplete:'name',maxlength:100})}
          ${field('hubungan','Hubungan dengan calon santri','',{options:['Ayah','Ibu','Wali']})}
          ${field('telepon','Nomor telepon aktif','Contoh: 08xxxxxxxxxx',{type:'tel',autocomplete:'tel',inputmode:'tel',maxlength:20})}
          ${field('email','Alamat email','nama@email.com',{type:'email',autocomplete:'email',required:false,maxlength:120})}
          ${field('catatan','Catatan tambahan','Tuliskan hal yang perlu diketahui (jika ada)',{textarea:true,full:true,required:false,maxlength:300})}
        </div>` : `
        <h2>Periksa kembali data</h2><p class="sub">Pastikan data sudah benar. Anda masih bisa kembali untuk memperbaikinya.</p>
        <h3 style="margin:24px 0 12px;color:var(--green)">Calon santri</h3>
        ${reviewRows([['Nama lengkap','nama'],['Nama panggilan','panggilan'],['Jenis kelamin','jk'],['Tempat lahir','lahir'],['Tanggal lahir','tanggal'],['Asal sekolah','asal'],['Alamat','alamat']])}
        <h3 style="margin:25px 0 12px;color:var(--green)">Orang tua / wali</h3>
        ${reviewRows([['Nama orang tua / wali','namaWali'],['Hubungan','hubungan'],['Nomor telepon','telepon'],['Email','email'],['Catatan','catatan']])}
        <div class="notice">Periksa kembali ejaan nama, tanggal lahir, dan nomor telepon sebelum mengirim formulir.</div>`;
      app.innerHTML = `<section class="form-wrap"><div class="shell"><div class="form-intro"><div class="admission-kicker">Penerimaan santri baru</div><div class="eyebrow" style="justify-content:center">Pondok Pesantren Darul Hadits Al-Mubarok</div><h1>Formulir Pendaftaran</h1><p>Lengkapi data calon santri dan orang tua atau wali. Pastikan informasi kontak dapat dihubungi.</p></div><div class="form-card">${renderStepper()}<form id="admissionForm" aria-label="Formulir pendaftaran calon santri" novalidate><div class="form-content">${content}<div class="form-actions"><span class="quiet">${formState.step===3?'Periksa data sebelum mengirim.':'Data dapat diperiksa kembali sebelum dikirim.'}</span><div style="display:flex;gap:9px">${formState.step>1?'<button class="btn secondary" type="button" id="prevStep">Kembali</button>':''}<button class="btn" type="submit">${formState.step===3?'Kirim pendaftaran':'Lanjutkan'} <span aria-hidden="true">→</span></button></div></div></div></form></div></div></section>`;
      const form=document.getElementById('admissionForm');
      form.addEventListener('submit',handleFormSubmit);
      form.querySelectorAll('input,select,textarea').forEach(el=>{
        el.addEventListener('input',()=>{formState.data[el.name]=el.value;delete formState.errors[el.name];el.setAttribute('aria-invalid','false');const error=form.querySelector(`[data-error="${el.name}"]`);if(error)error.textContent='';});
        el.addEventListener('change',()=>{formState.data[el.name]=el.value;});
      });
      const prev=document.getElementById('prevStep');
      if(prev)prev.addEventListener('click',()=>{saveVisibleFields();formState.step--;renderForm();window.scrollTo({top:0,behavior:'smooth'});});
    }
    function saveVisibleFields(){
      document.querySelectorAll('#admissionForm input,#admissionForm select,#admissionForm textarea').forEach(el=>formState.data[el.name]=el.value);
    }
    function validateStep(){
      saveVisibleFields();formState.errors={};
      const requiredByStep=formState.step===1?['nama','jk','lahir','tanggal','alamat']:['namaWali','hubungan','telepon'];
      requiredByStep.forEach(key=>{if(!String(formState.data[key]||'').trim())formState.errors[key]='Bagian ini perlu diisi.';});
      if(formState.step===2 && formState.data.telepon && !/^[0-9+()\-\s]{8,20}$/.test(formState.data.telepon.trim()))formState.errors.telepon='Periksa kembali format nomor telepon.';
      if(formState.step===2 && formState.data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.data.email.trim()))formState.errors.email='Format email belum sesuai.';
      if(formState.step===1 && formState.data.tanggal && formState.data.tanggal>localDateValue())formState.errors.tanggal='Tanggal lahir tidak boleh di masa depan.';
      return Object.keys(formState.errors).length===0;
    }
    function handleFormSubmit(event){
      event.preventDefault();
      if(formState.step<3){
        if(!validateStep()){const key=Object.keys(formState.errors)[0];renderForm();const el=document.getElementById(key);if(el)el.focus();return;}
        formState.step++;renderForm();window.scrollTo({top:0,behavior:'smooth'});return;
      }
      saveVisibleFields();
      app.innerHTML=`<section class="form-wrap"><div class="shell"><div class="form-card"><div class="form-content success-panel"><div class="success-icon">✓</div><div class="eyebrow" style="justify-content:center">Formulir selesai</div><h2>Terima kasih, pendaftaran telah dilengkapi.</h2><p>Data calon santri dan orang tua atau wali sudah diisi. Pastikan nomor telepon yang dicantumkan selalu aktif untuk menerima informasi selanjutnya.</p><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><button class="btn secondary" id="editForm" type="button">Periksa data</button><a class="btn" href="#/">Kembali ke beranda</a></div></div></div></div></section>`;
      document.getElementById('editForm').addEventListener('click',()=>{formState.step=3;renderForm();window.scrollTo({top:0,behavior:'smooth'});});
      window.scrollTo({top:0,behavior:'smooth'});
    }

    function render(){
      const route=(location.hash.replace(/^#/, '')||'/').split('?')[0];
      setActiveNav(route);
      document.title=route==='/info-ppdb'?'Informasi Pendaftaran — Darul Hadits Al-Mubarok':route==='/formulir-ppdb'?'Formulir Pendaftaran — Darul Hadits Al-Mubarok':route==='/'?'Penerimaan Santri Baru — Darul Hadits Al-Mubarok':'Halaman tidak ditemukan — Darul Hadits Al-Mubarok';
      if(route==='/info-ppdb')app.innerHTML=infoTemplate();
      else if(route==='/formulir-ppdb')renderForm();
      else if(route==='/')app.innerHTML=homeTemplate();
      else app.innerHTML=`<section class="not-found"><div class="shell"><div class="admission-kicker">404 · Halaman tidak ditemukan</div><h1>Halaman tidak ditemukan.</h1><p>Alamat yang dibuka tidak tersedia. Silakan kembali ke halaman utama.</p><a class="btn" href="#/">Kembali ke beranda</a></div></section>`;
      app.focus({preventScroll:true});
    }
    window.addEventListener('hashchange',render);
    document.addEventListener('click',e=>{
      const link=e.target.closest('a[href^="#/"]');
      if(link && location.hash===link.getAttribute('href')){render();}
    });
    render();
