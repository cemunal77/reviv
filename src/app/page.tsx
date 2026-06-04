export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: revivHTML }} />
    </>
  );
}

const revivHTML = `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Reviv.ch</title>
<style>
:root{--sage:#5A8C5C;--sage-light:#C8DEC9;--sage-bg:#EAF3EB;--beige:#F0EDE2;--dark:#2E4A30;--muted:#6B7B6C;--border:#D9D9D0;--white:#FFFFFF;--light:#F7F7F4;--text:#1A1A1A;--r:10px;--rl:14px}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Inter,system-ui,-apple-system,sans-serif;color:var(--text);background:#fff;font-size:14px;line-height:1.5}
a{text-decoration:none;color:inherit}button{cursor:pointer;font-family:inherit}
.hide{display:none!important}
header{background:var(--beige);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:100}
.topbar{max-width:1120px;margin:0 auto;display:flex;align-items:center;gap:14px;padding:10px 20px}
.logo{display:flex;align-items:center;gap:8px;font-weight:800;font-size:19px;color:var(--dark);white-space:nowrap;cursor:pointer}
.logo-leaf{width:28px;height:28px;background:var(--sage);border-radius:50% 50% 50% 0;display:flex;align-items:center;justify-content:center}
.search-bar{flex:1;display:flex;align-items:center;gap:8px;background:#fff;border:1px solid var(--border);border-radius:var(--r);padding:8px 12px}
.search-bar input{border:0;outline:0;width:100%;font-size:14px;background:transparent}
.nav{display:flex;align-items:center;gap:14px;white-space:nowrap}
.nav a{font-size:13px;font-weight:600;color:var(--dark);cursor:pointer}
.btn-primary{background:var(--sage);color:#fff;padding:9px 15px;border-radius:var(--r);font-weight:700;font-size:13px;border:none;transition:background .15s}
.btn-primary:hover{background:#4a7a4c}
.btn-secondary{background:transparent;border:1.5px solid var(--sage);color:var(--sage);padding:9px 15px;border-radius:var(--r);font-weight:700;font-size:13px}
.lang{font-size:12px;color:var(--muted);font-weight:500;border:1px solid var(--border);padding:4px 8px;border-radius:6px}
.trustbar{background:var(--dark);color:#fff;font-size:12px;padding:7px 0;text-align:center}
.trustbar span{margin:0 18px;opacity:.9}
.trustbar strong{color:var(--sage-light)}
.page{display:none}.page.active{display:block}
.hero{background:linear-gradient(160deg,var(--beige) 60%,var(--sage-bg) 100%);padding:32px 0 24px;border-bottom:1px solid var(--border)}
.hero-inner{max-width:1120px;margin:0 auto;padding:0 20px;display:flex;align-items:center;gap:32px}
.hero-text h1{font-size:30px;font-weight:800;color:var(--dark);line-height:1.15;margin-bottom:8px}
.hero-text p{color:var(--muted);font-size:14px;margin-bottom:18px}
.hero-badges{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px}
.badge-pill{background:#fff;border:1px solid var(--sage-light);color:var(--sage);padding:5px 11px;border-radius:999px;font-size:12px;font-weight:700}
.hero-cta{display:flex;gap:10px}
.hero-visual{flex:1;min-width:220px;background:#fff;border:1px solid var(--border);border-radius:var(--rl);padding:16px;display:grid;grid-template-columns:1fr 1fr;gap:8px}
.mini-stat{background:var(--light);border-radius:8px;padding:10px 12px;text-align:center}
.mini-stat .num{font-size:22px;font-weight:800;color:var(--dark)}
.mini-stat .lbl{font-size:11px;color:var(--muted);margin-top:2px}
.filters{max-width:1120px;margin:0 auto;padding:16px 20px 0;display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.filter-chip{padding:7px 13px;border-radius:999px;border:1px solid var(--border);font-size:13px;background:#fff;cursor:pointer;transition:all .15s}
.filter-chip:hover,.filter-chip.active{background:var(--sage);color:#fff;border-color:var(--sage)}
.filter-label{font-size:12px;font-weight:600;color:var(--muted)}
main.home{max-width:1120px;margin:0 auto;padding:20px}
.section-header{display:flex;align-items:center;justify-content:space-between;margin:20px 0 12px}
.section-title{font-size:17px;font-weight:800;color:var(--dark);display:flex;align-items:center;gap:8px}
.section-title .dot{width:8px;height:8px;background:var(--sage);border-radius:50%}
.see-all{font-size:13px;color:var(--sage);font-weight:600;cursor:pointer}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.card{border:1px solid var(--border);border-radius:var(--rl);overflow:hidden;background:#fff;transition:transform .15s,box-shadow .15s;cursor:pointer}
.card:hover{transform:translateY(-2px);box-shadow:0 4px 16px rgba(0,0,0,.08)}
.card.hot{border-color:var(--sage-light);box-shadow:0 0 0 2px var(--sage-light)}
.imgph{height:155px;position:relative;display:flex;align-items:center;justify-content:center}
.bg1{background:#dce8dc}.bg2{background:#dde4ec}.bg3{background:#ede8dc}.bg4{background:#e8dce8}.bg5{background:#dce8e4}.bg6{background:#e8e4dc}
.timer-badge{position:absolute;top:9px;right:9px;background:#111;color:#fff;font-weight:700;padding:4px 9px;border-radius:20px;font-size:11px}
.timer-badge.urgent{background:#c0392b}
.free-badge{position:absolute;top:9px;left:9px;background:var(--sage);color:#fff;font-size:10px;font-weight:700;padding:3px 7px;border-radius:999px}
.card-body{padding:11px 13px}
.card-title{font-weight:700;font-size:14px;color:#222;margin-bottom:5px;line-height:1.2}
.card-meta{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px}
.price{font-size:15px;font-weight:800;color:var(--dark)}
.location{font-size:12px;color:var(--muted)}
.card-foot{display:flex;justify-content:space-between;align-items:center}
.condition{font-size:11px;color:var(--muted);background:var(--light);padding:2px 7px;border-radius:999px}
.verified-badge{display:inline-flex;align-items:center;gap:4px;background:var(--sage-bg);border:1px solid var(--sage-light);color:var(--sage);padding:2px 7px;border-radius:999px;font-size:11px;font-weight:700}
.cat-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:10px}
.cat-card{background:var(--light);border:1px solid var(--border);border-radius:var(--r);padding:14px 8px;text-align:center;cursor:pointer;transition:all .15s}
.cat-card:hover{background:var(--sage-bg);border-color:var(--sage-light)}
.cat-icon{font-size:24px;margin-bottom:6px}
.cat-name{font-size:12px;font-weight:600;color:var(--dark)}
.cat-count{font-size:10px;color:var(--muted)}
.charte{background:var(--dark);color:#fff;border-radius:var(--rl);padding:22px 28px;margin:24px 0;display:flex;align-items:center;gap:32px}
.charte h3{font-size:16px;font-weight:800;margin-bottom:6px;color:var(--sage-light)}
.charte p{font-size:13px;opacity:.8;line-height:1.6}
.charte-points{display:flex;gap:20px;flex:1}
.charte-point{display:flex;align-items:flex-start;gap:8px;font-size:12px;opacity:.85}
.charte-point .icon{background:var(--sage);width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.listing-wrap{max-width:1120px;margin:0 auto;padding:24px 20px}
.breadcrumb{font-size:13px;color:var(--muted);margin-bottom:18px;display:flex;gap:6px;align-items:center}
.breadcrumb span{cursor:pointer;color:var(--sage)}
.listing-grid{display:grid;grid-template-columns:1fr 340px;gap:28px;align-items:start}
.gallery{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:0}
.gallery-main{grid-column:1/-1;background:var(--light);border-radius:var(--rl);height:300px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border)}
.gallery-thumb{background:var(--light);border-radius:var(--r);height:100px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);cursor:pointer}
.listing-info{margin-top:20px}
.listing-info h1{font-size:22px;font-weight:800;color:var(--dark);margin-bottom:8px}
.listing-meta{display:flex;gap:12px;margin-bottom:14px;flex-wrap:wrap}
.meta-pill{background:var(--light);border:1px solid var(--border);border-radius:999px;padding:4px 10px;font-size:12px;color:var(--muted)}
.listing-desc{font-size:14px;color:#444;line-height:1.7;margin-bottom:20px}
.sidebar-card{background:#fff;border:1px solid var(--border);border-radius:var(--rl);padding:20px;margin-bottom:14px}
.listing-price{font-size:32px;font-weight:800;color:var(--dark);margin-bottom:4px}
.listing-price-sub{font-size:12px;color:var(--sage);font-weight:600;margin-bottom:16px}
.btn-ask{width:100%;background:var(--sage);color:#fff;border:none;border-radius:var(--r);padding:13px;font-size:15px;font-weight:700;margin-bottom:8px}
.btn-ask:hover{background:#4a7a4c}
.btn-fav{width:100%;background:#fff;border:1.5px solid var(--border);border-radius:var(--r);padding:12px;font-size:14px;font-weight:600;color:var(--muted)}
.seller-info{display:flex;align-items:center;gap:12px;margin-bottom:14px}
.seller-avatar{width:44px;height:44px;border-radius:50%;background:var(--sage-bg);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;color:var(--sage)}
.seller-name{font-weight:700;font-size:14px;color:var(--dark)}
.seller-since{font-size:12px;color:var(--muted)}
.seller-stats{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.seller-stat{background:var(--light);border-radius:8px;padding:8px 10px;text-align:center}
.seller-stat .n{font-size:16px;font-weight:800;color:var(--dark)}
.seller-stat .l{font-size:11px;color:var(--muted)}
.qa-section{margin-top:28px}
.qa-title{font-size:17px;font-weight:800;color:var(--dark);margin-bottom:4px;display:flex;align-items:center;gap:8px}
.qa-sub{font-size:13px;color:var(--muted);margin-bottom:16px}
.qa-input-row{display:flex;gap:8px;margin-bottom:20px}
.qa-input{flex:1;border:1px solid var(--border);border-radius:var(--r);padding:10px 12px;font-size:14px;font-family:inherit;outline:none}
.qa-input:focus{border-color:var(--sage)}
.btn-qa{background:var(--sage);color:#fff;border:none;border-radius:var(--r);padding:10px 16px;font-weight:700;font-size:13px;white-space:nowrap}
.qa-list{display:flex;flex-direction:column;gap:14px}
.qa-item{border:1px solid var(--border);border-radius:var(--r);overflow:hidden}
.qa-question{padding:12px 14px;background:var(--light);display:flex;gap:10px;align-items:flex-start}
.qa-avatar{width:28px;height:28px;border-radius:50%;background:var(--border);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--muted);flex-shrink:0}
.qa-q-text{font-size:13px;color:var(--text);flex:1}
.qa-q-meta{font-size:11px;color:var(--muted);margin-top:2px}
.qa-answer{padding:12px 14px;background:#fff;display:flex;gap:10px;align-items:flex-start;border-top:1px solid var(--border)}
.qa-seller-av{width:28px;height:28px;border-radius:50%;background:var(--sage-bg);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--sage);flex-shrink:0}
.qa-a-text{font-size:13px;color:var(--text);flex:1}
.qa-a-meta{font-size:11px;color:var(--muted);margin-top:2px}
.qa-reply-row{padding:10px 14px;background:#fff;border-top:1px dashed var(--border);display:flex;gap:8px}
.qa-reply-input{flex:1;border:1px solid var(--border);border-radius:8px;padding:7px 10px;font-size:13px;font-family:inherit;outline:none}
.qa-reply-input:focus{border-color:var(--sage)}
.btn-reply{background:var(--dark);color:#fff;border:none;border-radius:8px;padding:7px 12px;font-size:12px;font-weight:700}
.no-answer{padding:10px 14px;font-size:12px;color:var(--muted);font-style:italic;background:#fff;border-top:1px solid var(--border)}
.publish-wrap{max-width:760px;margin:0 auto;padding:32px 20px}
.publish-wrap h1{font-size:24px;font-weight:800;color:var(--dark);margin-bottom:6px}
.publish-wrap .subtitle{font-size:14px;color:var(--muted);margin-bottom:28px}
.steps-bar{display:flex;gap:0;margin-bottom:32px;border-radius:var(--r);overflow:hidden;border:1px solid var(--border)}
.step-tab{flex:1;padding:10px;text-align:center;font-size:12px;font-weight:600;color:var(--muted);background:var(--light);border-right:1px solid var(--border);transition:all .2s}
.step-tab:last-child{border-right:none}
.step-tab.active{background:var(--sage);color:#fff}
.step-tab.done{background:var(--sage-bg);color:var(--sage)}
.step-content{display:none}.step-content.active{display:block}
.form-group{margin-bottom:18px}
.form-label{font-size:13px;font-weight:600;color:var(--dark);margin-bottom:6px;display:block}
.form-label span{color:var(--muted);font-weight:400}
.form-input{width:100%;border:1px solid var(--border);border-radius:var(--r);padding:10px 12px;font-size:14px;font-family:inherit;outline:none;transition:border .15s}
.form-input:focus{border-color:var(--sage)}
.form-textarea{resize:vertical;min-height:90px}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.upload-zone{border:2px dashed var(--border);border-radius:var(--rl);padding:32px;text-align:center;color:var(--muted);cursor:pointer;transition:all .15s}
.upload-zone:hover{border-color:var(--sage);background:var(--sage-bg)}
.upload-zone .upload-icon{font-size:32px;margin-bottom:8px}
.photo-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:12px}
.photo-preview{background:var(--light);border-radius:8px;aspect-ratio:1;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);font-size:22px;position:relative}
.photo-del{position:absolute;top:4px;right:4px;background:#c0392b;color:#fff;border:none;border-radius:50%;width:18px;height:18px;font-size:11px;line-height:1;display:flex;align-items:center;justify-content:center}
.condition-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.condition-opt{border:1.5px solid var(--border);border-radius:var(--r);padding:12px 8px;text-align:center;cursor:pointer;transition:all .15s}
.condition-opt:hover{border-color:var(--sage)}
.condition-opt.selected{border-color:var(--sage);background:var(--sage-bg)}
.condition-opt .co-icon{font-size:20px;margin-bottom:4px}
.condition-opt .co-label{font-size:12px;font-weight:600;color:var(--dark)}
.condition-opt .co-sub{font-size:11px;color:var(--muted)}
.preview-card{border:1px solid var(--sage-light);border-radius:var(--rl);overflow:hidden;max-width:220px}
.preview-card .pimg{height:120px;background:var(--sage-bg);display:flex;align-items:center;justify-content:center;font-size:32px}
.preview-card .pbody{padding:10px}
.step-nav{display:flex;justify-content:space-between;margin-top:24px;padding-top:18px;border-top:1px solid var(--border)}
.select-input{appearance:none;background:#fff url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23666' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat right 12px center;padding-right:32px}
.verify-wrap{max-width:560px;margin:0 auto;padding:40px 20px}
.verify-wrap h1{font-size:24px;font-weight:800;color:var(--dark);margin-bottom:6px}
.verify-wrap .subtitle{font-size:14px;color:var(--muted);margin-bottom:28px}
.verify-steps{display:flex;flex-direction:column;gap:0;margin-bottom:28px}
.vstep{display:flex;gap:16px;align-items:flex-start;padding:16px 0;border-bottom:1px solid var(--border)}
.vstep:last-child{border-bottom:none}
.vstep-num{width:32px;height:32px;border-radius:50%;background:var(--sage);color:#fff;font-weight:800;font-size:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.vstep-num.done{background:var(--sage-bg);color:var(--sage)}
.vstep-num.locked{background:var(--light);color:var(--muted)}
.vstep-title{font-weight:700;font-size:14px;color:var(--dark);margin-bottom:3px}
.vstep-desc{font-size:13px;color:var(--muted);margin-bottom:10px}
.vstep-content{margin-top:10px}
.upload-doc{border:2px dashed var(--border);border-radius:var(--r);padding:20px;text-align:center;cursor:pointer;color:var(--muted);transition:all .15s}
.upload-doc:hover{border-color:var(--sage);background:var(--sage-bg)}
.upload-doc-done{border:1.5px solid var(--sage);border-radius:var(--r);padding:12px 16px;background:var(--sage-bg);display:flex;align-items:center;gap:10px;color:var(--sage);font-weight:600;font-size:13px}
.info-box{background:var(--light);border:1px solid var(--border);border-radius:var(--r);padding:12px 14px;font-size:13px;color:var(--muted);line-height:1.6;margin-top:8px}
.status-badge{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:999px;font-size:13px;font-weight:700}
.status-pending{background:#FEF3C7;color:#92400E}
.status-verified{background:var(--sage-bg);color:var(--sage)}
footer{border-top:1px solid var(--border);margin-top:32px;background:var(--light)}
.foot-inner{max-width:1120px;margin:0 auto;padding:18px 20px;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--muted)}
.foot-links{display:flex;gap:18px}
.foot-links a{color:var(--muted);cursor:pointer}
</style>
</head>
<body>
<div class="trustbar">
  <span>🌿 <strong>100% occasion</strong></span>
  <span>✓ <strong>Identité vérifiée</strong> pour chaque vendeur</span>
  <span>🎁 <strong>Annonces gratuites</strong> pour les particuliers</span>
  <span>♻️ <strong>Économie circulaire suisse</strong></span>
</div>
<header>
  <div class="topbar">
    <div class="logo" onclick="showPage('home')">
      <div class="logo-leaf">🌿</div>
      reviv.ch
    </div>
    <div class="search-bar">
      <input placeholder="Rechercher un objet, une marque, une catégorie…"/>
    </div>
    <nav class="nav">
      <a onclick="showPage('home')">Parcourir</a>
      <a onclick="showPage('verify')">Vérification</a>
      <button class="btn-primary" onclick="showPage('publish')">+ Publier une annonce</button>
      <span class="lang">FR · DE · IT</span>
    </nav>
  </div>
</header>

<div id="page-home" class="page active">
  <section class="hero">
    <div class="hero-inner">
      <div style="flex:1.2">
        <h1 style="color:var(--dark)">Rien ne se perd,<br>tout se revend.</h1>
        <p style="color:var(--muted);margin-bottom:18px">La marketplace 100% circulaire de Suisse — uniquement des objets d'occasion, entre particuliers vérifiés, sans frais.</p>
        <div class="hero-badges">
          <span class="badge-pill">✓ Vendeurs vérifiés</span>
          <span class="badge-pill">♻️ 0 produit neuf</span>
          <span class="badge-pill">🎁 Annonces gratuites</span>
          <span class="badge-pill">🇨🇭 Suisse uniquement</span>
        </div>
        <div class="hero-cta">
          <button class="btn-primary" style="font-size:14px;padding:11px 20px" onclick="showPage('publish')">Commencer à vendre</button>
          <button class="btn-secondary" style="font-size:14px;padding:11px 20px">Parcourir les annonces</button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="mini-stat"><div class="num">14 820</div><div class="lbl">Annonces actives</div></div>
        <div class="mini-stat"><div class="num">8 340</div><div class="lbl">Vendeurs vérifiés</div></div>
        <div class="mini-stat"><div class="num">CHF 0.–</div><div class="lbl">Pour publier</div></div>
        <div class="mini-stat"><div class="num">2 681 kg</div><div class="lbl">CO₂ économisés</div></div>
      </div>
    </div>
  </section>
  <div class="filters">
    <span class="filter-label">Filtrer :</span>
    <span class="filter-chip active" onclick="setFilter(this)">Tout</span>
    <span class="filter-chip" onclick="setFilter(this)">Électronique</span>
    <span class="filter-chip" onclick="setFilter(this)">Vélos</span>
    <span class="filter-chip" onclick="setFilter(this)">Maison</span>
    <span class="filter-chip" onclick="setFilter(this)">Outils</span>
    <span class="filter-chip" onclick="setFilter(this)">Vêtements</span>
  </div>
  <main class="home">
    <div class="section-header">
      <h2 class="section-title"><span class="dot"></span> Finissant bientôt</h2>
      <span class="see-all">Voir tout →</span>
    </div>
    <div class="grid">
      <article class="card hot" onclick="showPage('listing')">
        <div class="imgph bg1" style="font-size:48px">🚲<div class="timer-badge urgent" id="t1">🔴 00:25:18</div><div class="free-badge">GRATUIT</div></div>
        <div class="card-body"><div class="card-title">Vélo gravel reconditionné Kona</div><div class="card-meta"><span class="price">CHF 220.–</span><span class="location">📍 Lausanne</span></div><div class="card-foot"><span class="condition">Très bon état</span><span class="verified-badge">✓ Vérifié</span></div></div>
      </article>
      <article class="card" onclick="showPage('listing')">
        <div class="imgph bg2" style="font-size:48px">🔧<div class="timer-badge" id="t2">⏱ 01:12:03</div><div class="free-badge">GRATUIT</div></div>
        <div class="card-body"><div class="card-title">Perceuse Makita 18V + 2 batteries</div><div class="card-meta"><span class="price">CHF 75.–</span><span class="location">📍 Genève</span></div><div class="card-foot"><span class="condition">Bon état</span><span class="verified-badge">✓ Vérifié</span></div></div>
      </article>
      <article class="card" onclick="showPage('listing')">
        <div class="imgph bg3" style="font-size:48px">📱<div class="timer-badge" id="t3">⏱ 02:44:55</div><div class="free-badge">GRATUIT</div></div>
        <div class="card-body"><div class="card-title">iPhone 12 128 Go — reconditionné</div><div class="card-meta"><span class="price">CHF 260.–</span><span class="location">📍 Nyon</span></div><div class="card-foot"><span class="condition">Reconditionné</span><span class="verified-badge">✓ Vérifié</span></div></div>
      </article>
    </div>
    <div class="section-header"><h2 class="section-title"><span class="dot"></span> Nouvelles annonces</h2><span class="see-all">Voir tout →</span></div>
    <div class="grid">
      <article class="card" onclick="showPage('listing')">
        <div class="imgph bg4" style="font-size:48px">👕<div class="timer-badge" id="t4">⏱ 03:51:09</div><div class="free-badge">GRATUIT</div></div>
        <div class="card-body"><div class="card-title">Blouson Patagonia — taille M</div><div class="card-meta"><span class="price">CHF 40.–</span><span class="location">📍 Fribourg</span></div><div class="card-foot"><span class="condition">Bon état</span><span class="verified-badge">✓ Vérifié</span></div></div>
      </article>
      <article class="card" onclick="showPage('listing')">
        <div class="imgph bg5" style="font-size:48px">💡<div class="timer-badge" id="t5">⏱ 05:22:48</div><div class="free-badge">GRATUIT</div></div>
        <div class="card-body"><div class="card-title">Lampe de bureau vintage</div><div class="card-meta"><span class="price">CHF 18.–</span><span class="location">📍 Sion</span></div><div class="card-foot"><span class="condition">Bon état</span><span class="verified-badge">✓ Vérifié</span></div></div>
      </article>
      <article class="card" onclick="showPage('listing')">
        <div class="imgph bg6" style="font-size:48px">☕<div class="timer-badge" id="t6">⏱ 06:10:33</div><div class="free-badge">GRATUIT</div></div>
        <div class="card-body"><div class="card-title">Cafetière italienne Bialetti 6T</div><div class="card-meta"><span class="price">CHF 12.–</span><span class="location">📍 Lugano</span></div><div class="card-foot"><span class="condition">Comme neuf</span><span class="verified-badge">✓ Vérifié</span></div></div>
      </article>
    </div>
    <div class="section-header" style="margin-top:28px"><h2 class="section-title"><span class="dot"></span> Catégories</h2></div>
    <div class="cat-grid">
      <div class="cat-card"><div class="cat-icon">📱</div><div class="cat-name">Électronique</div><div class="cat-count">3 241 annonces</div></div>
      <div class="cat-card"><div class="cat-icon">🚲</div><div class="cat-name">Vélos</div><div class="cat-count">842 annonces</div></div>
      <div class="cat-card"><div class="cat-icon">🛋️</div><div class="cat-name">Maison</div><div class="cat-count">2 104 annonces</div></div>
      <div class="cat-card"><div class="cat-icon">🔧</div><div class="cat-name">Outils</div><div class="cat-count">1 037 annonces</div></div>
      <div class="cat-card"><div class="cat-icon">👕</div><div class="cat-name">Vêtements</div><div class="cat-count">4 580 annonces</div></div>
      <div class="cat-card"><div class="cat-icon">⚙️</div><div class="cat-name">Pièces détachées</div><div class="cat-count">672 annonces</div></div>
    </div>
    <div class="charte">
      <div style="flex:1.2"><h3>La Charte Reviv</h3><p>Reviv.ch n'accepte que les objets d'occasion vendus par des particuliers dont l'identité et l'adresse en Suisse ont été vérifiées.</p></div>
      <div class="charte-points">
        <div class="charte-point"><div class="icon">✓</div><div><strong style="display:block">Identité vérifiée</strong>Carte d'identité contrôlée</div></div>
        <div class="charte-point"><div class="icon">✓</div><div><strong style="display:block">Adresse vérifiée</strong>Domicile en Suisse confirmé</div></div>
        <div class="charte-point"><div class="icon">✓</div><div><strong style="display:block">0 produit neuf</strong>Uniquement d'occasion</div></div>
      </div>
    </div>
  </main>
</div>

<div id="page-listing" class="page">
  <div class="listing-wrap">
    <div class="breadcrumb"><span onclick="showPage('home')">Accueil</span> › <span>Vélos</span> › Vélo gravel reconditionné Kona</div>
    <div class="listing-grid">
      <div>
        <div class="gallery">
          <div class="gallery-main bg1" style="font-size:64px">🚲</div>
          <div class="gallery-thumb bg1" style="font-size:28px">🚲</div>
          <div class="gallery-thumb bg5" style="font-size:28px">🔍</div>
          <div class="gallery-thumb bg2" style="font-size:28px">📐</div>
          <div class="gallery-thumb bg3" style="font-size:28px">🔩</div>
        </div>
        <div class="listing-info">
          <h1>Vélo gravel reconditionné Kona</h1>
          <div class="listing-meta">
            <span class="meta-pill">🚲 Vélos</span>
            <span class="meta-pill">📍 Lausanne, VD</span>
            <span class="meta-pill">⭐ Très bon état</span>
            <span class="meta-pill">🕐 Publiée il y a 2h</span>
          </div>
          <p class="listing-desc">Vélo gravel Kona Libre taille M (54 cm), année 2020. Cadre aluminium, fourche carbone, groupe Shimano GRX 1x11. Révision complète effectuée en mars 2025. Vendu avec sacoche de guidon Ortlieb et pompe de rechange.</p>
          <div style="background:var(--light);border-radius:var(--r);padding:14px 16px;font-size:13px;color:var(--muted);border:1px solid var(--border)">
            ℹ️ <strong style="color:var(--dark)">Pas de messagerie privée sur Reviv.ch</strong> — posez vos questions publiquement ci-dessous.
          </div>
        </div>
        <div class="qa-section">
          <div class="qa-title"><span class="dot" style="width:8px;height:8px;background:var(--sage);border-radius:50%;display:inline-block"></span> Questions & Réponses</div>
          <p class="qa-sub">Toutes les questions sont publiques. Seul le vendeur peut répondre.</p>
          <div class="qa-input-row">
            <input class="qa-input" id="newQ" placeholder="Posez une question sur cette annonce…"/>
            <button class="btn-qa" onclick="addQuestion()">Poser ma question</button>
          </div>
          <div class="qa-list" id="qa-list">
            <div class="qa-item">
              <div class="qa-question"><div class="qa-avatar">ML</div><div><div class="qa-q-text">La fourche carbone est intacte ?</div><div class="qa-q-meta">Marie L. · il y a 45 min</div></div></div>
              <div class="qa-answer"><div class="qa-seller-av">TH</div><div><div class="qa-a-text">Bonjour, oui parfaitement intacte, vérifiée lors de la révision.</div><div class="qa-a-meta">✓ Thomas H. (vendeur) · il y a 30 min</div></div></div>
            </div>
            <div class="qa-item">
              <div class="qa-question"><div class="qa-avatar">SC</div><div><div class="qa-q-text">Uniquement retrait sur place ?</div><div class="qa-q-meta">Sophie C. · il y a 2h</div></div></div>
              <div class="qa-answer"><div class="qa-seller-av">TH</div><div><div class="qa-a-text">Oui, uniquement retrait à Lausanne, métro M2 station Grancy.</div><div class="qa-a-meta">✓ Thomas H. (vendeur) · il y a 1h45</div></div></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="sidebar-card">
          <div class="listing-price">CHF 220.–</div>
          <div class="listing-price-sub">🎁 Annonce gratuite · ♻️ Objet d'occasion</div>
          <button class="btn-ask" onclick="document.getElementById('newQ').focus()">💬 Poser une question</button>
          <button class="btn-fav">♡ Sauvegarder l'annonce</button>
        </div>
        <div class="sidebar-card">
          <div class="seller-info">
            <div class="seller-avatar">TH</div>
            <div><div class="seller-name">Thomas H.</div><div class="seller-since">Membre depuis jan. 2024</div></div>
          </div>
          <div style="margin-bottom:12px"><span class="verified-badge">✓ Identité vérifiée</span></div>
          <div class="seller-stats">
            <div class="seller-stat"><div class="n">12</div><div class="l">Annonces</div></div>
            <div class="seller-stat"><div class="n">100%</div><div class="l">Réponses</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="page-publish" class="page">
  <div class="publish-wrap">
    <h1>Publier une annonce</h1>
    <p class="subtitle">Gratuit pour les particuliers · Identité vérifiée requise</p>
    <div class="steps-bar">
      <div class="step-tab active" id="stab-1">1. Photos</div>
      <div class="step-tab" id="stab-2">2. Description</div>
      <div class="step-tab" id="stab-3">3. Prix & détails</div>
      <div class="step-tab" id="stab-4">4. Aperçu</div>
    </div>
    <div class="step-content active" id="step-1">
      <div class="form-group">
        <label class="form-label">Photos <span>(min. 1, max. 8)</span></label>
        <div class="upload-zone" onclick="addPhoto()"><div class="upload-icon">📷</div><div style="font-weight:600;color:var(--dark)">Cliquez pour ajouter des photos</div></div>
        <div class="photo-grid" id="photo-grid"></div>
      </div>
      <div class="step-nav"><span></span><button class="btn-primary" onclick="goStep(2)">Suivant →</button></div>
    </div>
    <div class="step-content" id="step-2">
      <div class="form-group"><label class="form-label">Titre</label><input class="form-input" id="pub-title" placeholder="Ex : Vélo de route Trek taille 54"/></div>
      <div class="form-group"><label class="form-label">Catégorie</label><select class="form-input select-input"><option>Choisir…</option><option>Électronique</option><option>Vélos</option><option>Maison</option><option>Outils</option><option>Vêtements</option></select></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-input form-textarea" placeholder="Décrivez l'objet honnêtement…"></textarea></div>
      <div class="form-group"><label class="form-label">État</label>
        <div class="condition-grid">
          <div class="condition-opt" onclick="selectCondition(this,'Comme neuf')"><div class="co-icon">✨</div><div class="co-label">Comme neuf</div></div>
          <div class="condition-opt" onclick="selectCondition(this,'Très bon état')"><div class="co-icon">👍</div><div class="co-label">Très bon état</div></div>
          <div class="condition-opt" onclick="selectCondition(this,'Bon état')"><div class="co-icon">✅</div><div class="co-label">Bon état</div></div>
          <div class="condition-opt" onclick="selectCondition(this,'À réparer')"><div class="co-icon">🔧</div><div class="co-label">À réparer</div></div>
        </div>
      </div>
      <div class="step-nav"><button class="btn-secondary" onclick="goStep(1)">← Retour</button><button class="btn-primary" onclick="goStep(3)">Suivant →</button></div>
    </div>
    <div class="step-content" id="step-3">
      <div class="form-row">
        <div class="form-group"><label class="form-label">Prix (CHF)</label><input class="form-input" id="pub-price" type="number" placeholder="0"/></div>
        <div class="form-group"><label class="form-label">Type de vente</label><select class="form-input select-input"><option>Prix fixe</option><option>Enchère</option><option>Gratuit</option></select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Ville</label><input class="form-input" id="pub-city" placeholder="Ex : Lausanne"/></div>
        <div class="form-group"><label class="form-label">Canton</label><select class="form-input select-input"><option>Canton…</option><option>VD</option><option>GE</option><option>ZH</option><option>BE</option><option>VS</option></select></div>
      </div>
      <div class="info-box">🎁 <strong>Publication 100% gratuite</strong> pour les particuliers.</div>
      <div class="step-nav"><button class="btn-secondary" onclick="goStep(2)">← Retour</button><button class="btn-primary" onclick="goStep(4)">Aperçu →</button></div>
    </div>
    <div class="step-content" id="step-4">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">
        <div>
          <h3 style="font-size:15px;font-weight:700;color:var(--dark);margin-bottom:12px">Aperçu</h3>
          <div class="preview-card">
            <div class="pimg" id="preview-img">📦</div>
            <div class="pbody">
              <div style="font-weight:700;font-size:13px;margin-bottom:4px" id="preview-title">Votre titre</div>
              <div style="font-size:15px;font-weight:800;color:var(--dark)" id="preview-price">CHF —</div>
            </div>
          </div>
        </div>
        <div>
          <h3 style="font-size:15px;font-weight:700;color:var(--dark);margin-bottom:12px">Récapitulatif</h3>
          <div style="font-size:13px;display:flex;flex-direction:column;gap:8px">
            <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)"><span style="color:var(--muted)">Publication</span><strong style="color:var(--sage)">Gratuite</strong></div>
            <div style="display:flex;justify-content:space-between;padding:8px 0"><span style="color:var(--muted)">Commission</span><strong style="color:var(--sage)">0%</strong></div>
          </div>
        </div>
      </div>
      <div class="step-nav"><button class="btn-secondary" onclick="goStep(3)">← Retour</button><button class="btn-primary" style="padding:12px 28px" onclick="publishDone()">🌿 Publier</button></div>
    </div>
    <div class="step-content" id="step-done" style="text-align:center;padding:40px 0">
      <div style="font-size:56px;margin-bottom:16px">🎉</div>
      <h2 style="font-size:22px;font-weight:800;color:var(--dark);margin-bottom:8px">Annonce publiée !</h2>
      <div style="display:flex;gap:12px;justify-content:center;margin-top:16px">
        <button class="btn-primary" onclick="showPage('listing')">Voir mon annonce</button>
        <button class="btn-secondary" onclick="showPage('home')">Retour à l'accueil</button>
      </div>
    </div>
  </div>
</div>

<div id="page-verify" class="page">
  <div class="verify-wrap">
    <h1>Vérification d'identité</h1>
    <p class="subtitle">Obligatoire pour publier · Rapide et sécurisé</p>
    <div style="background:var(--sage-bg);border:1px solid var(--sage-light);border-radius:var(--r);padding:14px 16px;margin-bottom:24px;font-size:13px;color:var(--sage)">
      🔒 Vos données restent privées. Seul le badge "Vendeur vérifié" est visible publiquement.
    </div>
    <div class="verify-steps">
      <div class="vstep"><div class="vstep-num done">✓</div><div><div class="vstep-title">Créer un compte</div><div class="vstep-desc">Email confirmé.</div><span class="status-badge status-verified">✓ Complété</span></div></div>
      <div class="vstep"><div class="vstep-num">2</div><div style="flex:1"><div class="vstep-title">Pièce d'identité</div><div class="vstep-desc">Carte d'identité, passeport ou permis de séjour valide.</div><div class="upload-doc" onclick="simulateIdUpload()" id="id-upload-zone"><div style="font-size:28px;margin-bottom:6px">🪪</div><div style="font-weight:600;color:var(--dark);font-size:13px">Cliquez pour envoyer</div></div><div id="id-done" class="upload-doc-done hide">✅ carte-identite.jpg <span id="id-status" class="status-badge status-pending" style="margin-left:auto">⏳ En vérification</span></div></div></div>
      <div class="vstep"><div class="vstep-num locked" id="vnum-3">3</div><div style="flex:1"><div class="vstep-title" style="color:var(--muted)">Confirmation d'adresse</div><div class="vstep-desc">Facture ou relevé bancaire de moins de 3 mois.</div><div class="upload-doc" style="opacity:.5;pointer-events:none" onclick="simulateAddrUpload()" id="addr-upload-zone"><div style="font-size:28px;margin-bottom:6px">🏠</div><div style="font-weight:600;color:var(--dark);font-size:13px">Disponible après l'étape 2</div></div><div id="addr-done" class="upload-doc-done hide">✅ facture.pdf <span id="addr-status" class="status-badge status-pending" style="margin-left:auto">⏳ En vérification</span></div></div></div>
      <div class="vstep" id="vstep4" style="opacity:.4"><div class="vstep-num locked">4</div><div><div class="vstep-title" style="color:var(--muted)">Badge vérifié activé</div><div class="vstep-desc">Délai : 24h ouvrables après validation des documents.</div></div></div>
    </div>
    <button class="btn-primary" onclick="showPage('publish')">→ Continuer vers la publication</button>
  </div>
</div>

<footer>
  <div class="foot-inner">
    <div class="foot-links"><a>Charte</a><a>Règles</a><a onclick="showPage('verify')">Vérification</a><a>FAQ</a><a>Contact</a></div>
    <div>© 2026 Reviv.ch — économie circulaire suisse 🌿</div>
  </div>
</footer>

<script>
function showPage(id){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById('page-'+id).classList.add('active');window.scrollTo({top:0,behavior:'smooth'})}
function setFilter(el){document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));el.classList.add('active')}
const tIds=['t1','t2','t3','t4','t5','t6'];
function pad(n){return String(n).padStart(2,'0')}
setInterval(()=>{tIds.forEach(id=>{const el=document.getElementById(id);if(!el)return;const m=el.textContent.match(/(\d{2}):(\d{2}):(\d{2})$/);if(!m)return;let h=+m[1],min=+m[2],s=+m[3];if(s>0)s--;else if(min>0){min--;s=59}else if(h>0){h--;min=59;s=59}el.textContent=el.textContent.replace(/\d{2}:\d{2}:\d{2}/,pad(h)+':'+pad(min)+':'+pad(s))})},1000);
let curStep=1,selCond='',photos=[];
function goStep(n){document.getElementById('step-'+curStep).classList.remove('active');document.getElementById('stab-'+curStep).classList.remove('active');document.getElementById('stab-'+curStep).classList.add('done');curStep=n;document.getElementById('step-'+n).classList.add('active');document.getElementById('stab-'+n).classList.add('active');const t=document.getElementById('pub-title')?.value;const p=document.getElementById('pub-price')?.value;if(t)document.getElementById('preview-title').textContent=t;if(p)document.getElementById('preview-price').textContent='CHF '+p+'.–';if(photos.length)document.getElementById('preview-img').textContent=photos[0]}
function selectCondition(el,v){document.querySelectorAll('.condition-opt').forEach(o=>o.classList.remove('selected'));el.classList.add('selected');selCond=v}
const emojis=['📱','🚲','👕','🔧','💡','📚'];
function addPhoto(){if(photos.length>=8)return;const e=emojis[photos.length%emojis.length];photos.push(e);const g=document.getElementById('photo-grid');const d=document.createElement('div');d.className='photo-preview';d.innerHTML=e+'<button class="photo-del" onclick="this.parentElement.remove()">✕</button>';g.appendChild(d)}
function publishDone(){document.getElementById('step-4').classList.remove('active');document.getElementById('step-done').classList.add('active');document.querySelectorAll('.step-tab').forEach(t=>{t.classList.remove('active');t.classList.add('done')})}
function addQuestion(){const inp=document.getElementById('newQ');const txt=inp.value.trim();if(!txt)return;const list=document.getElementById('qa-list');const item=document.createElement('div');item.className='qa-item';item.innerHTML='<div class="qa-question"><div class="qa-avatar">Moi</div><div><div class="qa-q-text">'+txt+'</div><div class="qa-q-meta">Vous · à l\'instant</div></div></div><div class="no-answer">Pas encore de réponse.</div>';list.prepend(item);inp.value=''}
function simulateIdUpload(){document.getElementById('id-upload-zone').classList.add('hide');document.getElementById('id-done').classList.remove('hide');const az=document.getElementById('addr-upload-zone');az.style.opacity='1';az.style.pointerEvents='auto';setTimeout(()=>{document.getElementById('id-status').className='status-badge status-verified';document.getElementById('id-status').textContent='✓ Confirmée'},2500)}
function simulateAddrUpload(){document.getElementById('addr-upload-zone').classList.add('hide');document.getElementById('addr-done').classList.remove('hide');document.getElementById('vnum-3').textContent='✓';document.getElementById('vnum-3').className='vstep-num done';setTimeout(()=>{document.getElementById('addr-status').className='status-badge status-verified';document.getElementById('addr-status').textContent='✓ Confirmée';document.getElementById('vstep4').style.opacity='1'},2500)}
</script>
</body>
</html>
`;