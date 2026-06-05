"use client";
import { useState, useEffect } from "react";
import { useSession, signOut, SessionProvider } from "next-auth/react";

const C = {
  sage:"#5A8C5C", sageL:"#C8DEC9", sageBg:"#EAF3EB",
  beige:"#F0EDE2", dark:"#2E4A30", muted:"#6B7B6C",
  border:"#D9D9D0", light:"#F7F7F4", text:"#1A1A1A",
};
const r = 10, rl = 14;
const pill = (bg: string, color: string): React.CSSProperties => ({
  display:"inline-flex", alignItems:"center", gap:4, background:bg,
  border:`1px solid ${C.sageL}`, color, padding:"2px 8px",
  borderRadius:999, fontSize:11, fontWeight:700,
});

function useTimer(init: string) {
  const [t, setT] = useState(init);
  useEffect(() => {
    const id = setInterval(() => {
      setT(prev => {
        const m = prev.match(/(\d{2}):(\d{2}):(\d{2})$/);
        if (!m) return prev;
        let [h, min, s] = [+m[1], +m[2], +m[3]];
        if (s > 0) s--; else if (min > 0) { min--; s = 59; } else if (h > 0) { h--; min = 59; s = 59; }
        const pad = (n: number) => String(n).padStart(2, "0");
        return prev.replace(/\d{2}:\d{2}:\d{2}$/, `${pad(h)}:${pad(min)}:${pad(s)}`);
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function TrustBar() {
  return (
    <div style={{ background:C.dark, color:"#fff", fontSize:12, padding:"7px 0", textAlign:"center" }}>
      {[["🌿","100% occasion"],["✓","Identité vérifiée pour chaque vendeur"],["🎁","Annonces gratuites pour les particuliers"],["♻️","Économie circulaire suisse"]].map(([icon, text]) => (
        <span key={text} style={{ margin:"0 18px", opacity:.9 }}>{icon} <strong style={{ color:C.sageL }}>{text}</strong></span>
      ))}
    </div>
  );
}

function Header({ go }: { go: (p: string) => void }) {
  const { data: session } = useSession();
  return (
    <header style={{ background:C.beige, borderBottom:`1px solid ${C.border}`, position:"sticky", top:0, zIndex:100 }}>
      <div style={{ maxWidth:1120, margin:"0 auto", display:"flex", alignItems:"center", gap:14, padding:"10px 20px" }}>
        <div onClick={() => go("home")} style={{ display:"flex", alignItems:"center", gap:8, fontWeight:800, fontSize:19, color:C.dark, cursor:"pointer", whiteSpace:"nowrap" }}>
          <div style={{ width:28, height:28, background:C.sage, borderRadius:"50% 50% 50% 0", display:"flex", alignItems:"center", justifyContent:"center" }}>🌿</div>
          reviv.ch
        </div>
        <div style={{ flex:1, display:"flex", alignItems:"center", gap:8, background:"#fff", border:`1px solid ${C.border}`, borderRadius:r, padding:"8px 12px" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.3-4.3" stroke="#aaa" strokeWidth="2" strokeLinecap="round"/><circle cx="11" cy="11" r="7" stroke="#aaa" strokeWidth="2"/></svg>
          <input placeholder="Rechercher un objet, une marque, une catégorie…" style={{ border:0, outline:0, width:"100%", fontSize:14 }}/>
        </div>
        <nav style={{ display:"flex", alignItems:"center", gap:14, whiteSpace:"nowrap" }}>
          <span onClick={() => go("home")} style={{ fontSize:13, fontWeight:600, color:C.dark, cursor:"pointer" }}>Parcourir</span>
          <span onClick={() => go("verify")} style={{ fontSize:13, fontWeight:600, color:C.dark, cursor:"pointer" }}>Vérification</span>
          {session ? (
            <>
              <button onClick={() => go("publish")} style={{ background:C.sage, color:"#fff", padding:"9px 15px", borderRadius:r, fontWeight:700, fontSize:13, border:"none", cursor:"pointer" }}>
                + Publier une annonce
              </button>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <div style={{ width:32, height:32, borderRadius:"50%", background:C.sageBg, border:`1px solid ${C.sageL}`, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700, fontSize:13, color:C.dark }}>
                  {session.user?.name?.charAt(0).toUpperCase()}
                </div>
                <span style={{ fontSize:13, fontWeight:600, color:C.dark }}>{session.user?.name?.split(" ")[0]}</span>
                <button onClick={() => signOut({ callbackUrl:"/" })} style={{ fontSize:12, color:C.muted, background:"transparent", border:`1px solid ${C.border}`, borderRadius:6, padding:"4px 8px", cursor:"pointer" }}>
                  Déconnexion
                </button>
              </div>
            </>
          ) : (
            <>
              <a href="/login" style={{ fontSize:13, fontWeight:600, color:C.dark, textDecoration:"none" }}>Se connecter</a>
              <a href="/register" style={{ background:C.sage, color:"#fff", padding:"9px 15px", borderRadius:r, fontWeight:700, fontSize:13, textDecoration:"none" }}>
                Créer un compte
              </a>
            </>
          )}
          <span style={{ fontSize:12, color:C.muted, border:`1px solid ${C.border}`, padding:"4px 8px", borderRadius:6 }}>FR · DE · IT</span>
        </nav>
      </div>
    </header>
  );
}

function Card({ title, price, city, condition, emoji, bg, timerId, hot, onClick }: any) {
  const t = useTimer(timerId);
  const urgent = t.startsWith("00:");
  return (
    <article onClick={onClick} style={{ border:`1px solid ${hot ? C.sageL : C.border}`, borderRadius:rl, overflow:"hidden", background:"#fff", cursor:"pointer", transition:"transform .15s, box-shadow .15s", boxShadow: hot ? `0 0 0 2px ${C.sageL}` : "none" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,.08)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = hot ? `0 0 0 2px ${C.sageL}` : "none"; }}>
      <div style={{ height:155, background:bg, position:"relative", display:"flex", alignItems:"center", justifyContent:"center", fontSize:48 }}>
        {emoji}
        <div style={{ position:"absolute", top:9, right:9, background: urgent ? "#c0392b" : "#111", color:"#fff", fontWeight:700, padding:"4px 9px", borderRadius:20, fontSize:11 }}>{t}</div>
        <div style={{ position:"absolute", top:9, left:9, background:C.sage, color:"#fff", fontSize:10, fontWeight:700, padding:"3px 7px", borderRadius:999 }}>GRATUIT</div>
      </div>
      <div style={{ padding:"11px 13px" }}>
        <div style={{ fontWeight:700, fontSize:14, color:"#222", marginBottom:5 }}>{title}</div>
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
          <span style={{ fontSize:15, fontWeight:800, color:C.dark }}>{price}</span>
          <span style={{ fontSize:12, color:C.muted }}>📍 {city}</span>
        </div>
        <div style={{ display:"flex", justifyContent:"space-between" }}>
          <span style={{ fontSize:11, color:C.muted, background:C.light, padding:"2px 7px", borderRadius:999 }}>{condition}</span>
          <span style={pill(C.sageBg, C.sage)}>✓ Vérifié</span>
        </div>
      </div>
    </article>
  );
}

function HomePage({ go }: { go: (p: string) => void }) {
  const [filter, setFilter] = useState("Tout");
  const filters = ["Tout","Électronique","Vélos","Maison","Outils","Vêtements","Sports","Livres"];
  const cards1 = [
    { title:"Vélo gravel reconditionné Kona", price:"CHF 220.–", city:"Lausanne", condition:"Très bon état", emoji:"🚲", bg:"#dce8dc", timerId:"🔴 00:25:18", hot:true },
    { title:"Perceuse Makita 18V + 2 batteries", price:"CHF 75.–", city:"Genève", condition:"Bon état", emoji:"🔧", bg:"#dde4ec", timerId:"⏱ 01:12:03", hot:false },
    { title:"iPhone 12 128 Go — reconditionné", price:"CHF 260.–", city:"Nyon", condition:"Reconditionné", emoji:"📱", bg:"#ede8dc", timerId:"⏱ 02:44:55", hot:false },
  ];
  const cards2 = [
    { title:"Blouson Patagonia — taille M", price:"CHF 40.–", city:"Fribourg", condition:"Bon état", emoji:"👕", bg:"#e8dce8", timerId:"⏱ 03:51:09", hot:false },
    { title:"Lampe de bureau vintage", price:"CHF 18.–", city:"Sion", condition:"Bon état", emoji:"💡", bg:"#dce8e4", timerId:"⏱ 05:22:48", hot:false },
    { title:"Cafetière italienne Bialetti 6T", price:"CHF 12.–", city:"Lugano", condition:"Comme neuf", emoji:"☕", bg:"#e8e4dc", timerId:"⏱ 06:10:33", hot:false },
  ];
  const cats = [["📱","Électronique","3 241"],["🚲","Vélos","842"],["🛋️","Maison","2 104"],["🔧","Outils","1 037"],["👕","Vêtements","4 580"],["⚙️","Pièces détachées","672"]];

  return (
    <>
      <section style={{ background:`linear-gradient(160deg, ${C.beige} 60%, ${C.sageBg} 100%)`, padding:"32px 0 24px", borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:1120, margin:"0 auto", padding:"0 20px", display:"flex", alignItems:"center", gap:32 }}>
          <div style={{ flex:1.2 }}>
            <h1 style={{ fontSize:30, fontWeight:800, color:C.dark, lineHeight:1.15, marginBottom:8 }}>Rien ne se perd,<br/>tout se revend.</h1>
            <p style={{ color:C.muted, fontSize:14, marginBottom:18 }}>La marketplace 100% circulaire de Suisse — uniquement des objets d&apos;occasion,<br/>entre particuliers vérifiés, sans frais.</p>
            <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:18 }}>
              {["✓ Vendeurs vérifiés","♻️ 0 produit neuf","🎁 Annonces gratuites","🇨🇭 Suisse uniquement"].map(t => (
                <span key={t} style={{ background:"#fff", border:`1px solid ${C.sageL}`, color:C.sage, padding:"5px 11px", borderRadius:999, fontSize:12, fontWeight:700 }}>{t}</span>
              ))}
            </div>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={() => go("publish")} style={{ background:C.sage, color:"#fff", padding:"11px 20px", borderRadius:r, fontWeight:700, fontSize:14, border:"none", cursor:"pointer" }}>Commencer à vendre</button>
              <button style={{ background:"transparent", border:`1.5px solid ${C.sage}`, color:C.sage, padding:"11px 20px", borderRadius:r, fontWeight:700, fontSize:14, cursor:"pointer" }}>Parcourir les annonces</button>
            </div>
          </div>
          <div style={{ flex:1, background:"#fff", border:`1px solid ${C.border}`, borderRadius:rl, padding:16, display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
            {[["14 820","Annonces actives"],["8 340","Vendeurs vérifiés"],["CHF 0.–","Pour publier"],["2 681 kg","CO₂ économisés"]].map(([n,l]) => (
              <div key={l} style={{ background:C.light, borderRadius:8, padding:"10px 12px", textAlign:"center" }}>
                <div style={{ fontSize:22, fontWeight:800, color:C.dark }}>{n}</div>
                <div style={{ fontSize:11, color:C.muted, marginTop:2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth:1120, margin:"0 auto", padding:"16px 20px 0", display:"flex", gap:8, alignItems:"center", flexWrap:"wrap" }}>
        <span style={{ fontSize:12, fontWeight:600, color:C.muted }}>Filtrer :</span>
        {filters.map(f => (
          <span key={f} onClick={() => setFilter(f)} style={{ padding:"7px 13px", borderRadius:999, border:`1px solid ${filter===f ? C.sage : C.border}`, fontSize:13, background: filter===f ? C.sage : "#fff", color: filter===f ? "#fff" : C.text, cursor:"pointer" }}>{f}</span>
        ))}
      </div>

      <main style={{ maxWidth:1120, margin:"0 auto", padding:20 }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", margin:"20px 0 12px" }}>
          <h2 style={{ fontSize:17, fontWeight:800, color:C.dark, display:"flex", alignItems:"center", gap:8 }}>
            <span style={{ width:8, height:8, background:C.sage, borderRadius:"50%", display:"inline-block" }}></span> Finissant bientôt
          </h2>
          <span style={{ fontSize:13, color:C.sage, fontWeight:600, cursor:"pointer" }}>Voir tout →</span>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }}>
          {cards1.map(c => <Card key={c.title} {...c} onClick={() => go("listing")} />)}
        </div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", margin:"28px 0 12px" }}>
          <h2 style={{ fontSize:17, fontWeight:800, color:C.dark, display:"flex", alignItems:"center", gap:8 }}>
            <span style={{ width:8, height:8, background:C.sage, borderRadius:"50%", display:"inline-block" }}></span> Nouvelles annonces
          </h2>
          <span style={{ fontSize:13, color:C.sage, fontWeight:600, cursor:"pointer" }}>Voir tout →</span>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }}>
          {cards2.map(c => <Card key={c.title} {...c} onClick={() => go("listing")} />)}
        </div>
        <div style={{ display:"flex", alignItems:"center", margin:"28px 0 12px" }}>
          <h2 style={{ fontSize:17, fontWeight:800, color:C.dark, display:"flex", alignItems:"center", gap:8 }}>
            <span style={{ width:8, height:8, background:C.sage, borderRadius:"50%", display:"inline-block" }}></span> Catégories
          </h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:10, marginBottom:28 }}>
          {cats.map(([icon,name,count]) => (
            <div key={name} style={{ background:C.light, border:`1px solid ${C.border}`, borderRadius:r, padding:"14px 8px", textAlign:"center", cursor:"pointer" }}>
              <div style={{ fontSize:24, marginBottom:6 }}>{icon}</div>
              <div style={{ fontSize:12, fontWeight:600, color:C.dark }}>{name}</div>
              <div style={{ fontSize:10, color:C.muted }}>{count} annonces</div>
            </div>
          ))}
        </div>
        <div style={{ background:C.dark, color:"#fff", borderRadius:rl, padding:"22px 28px", marginBottom:24, display:"flex", alignItems:"center", gap:32 }}>
          <div style={{ flex:1.2 }}>
            <h3 style={{ fontSize:16, fontWeight:800, marginBottom:6, color:C.sageL }}>La Charte Reviv</h3>
            <p style={{ fontSize:13, opacity:.8, lineHeight:1.6 }}>Reviv.ch n&apos;accepte que les objets d&apos;occasion vendus par des particuliers dont l&apos;identité et l&apos;adresse en Suisse ont été vérifiées.</p>
          </div>
          <div style={{ display:"flex", gap:20, flex:1 }}>
            {[["Identité vérifiée","Carte d'identité contrôlée"],["Adresse vérifiée","Domicile en Suisse confirmé"],["0 produit neuf","Uniquement d'occasion"]].map(([t,d]) => (
              <div key={t} style={{ display:"flex", alignItems:"flex-start", gap:8, fontSize:12, opacity:.85 }}>
                <div style={{ background:C.sage, width:22, height:22, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1, fontSize:11 }}>✓</div>
                <div><strong style={{ display:"block", marginBottom:2 }}>{t}</strong>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

function ListingPage({ go }: { go: (p: string) => void }) {
  const { data: session } = useSession();
  const [questions, setQuestions] = useState([
    { id:1, author:"ML", question:"La fourche carbone est intacte ?", answer:"Oui parfaitement intacte, vérifiée lors de la révision.", time:"il y a 45 min" },
    { id:2, author:"SC", question:"Uniquement retrait sur place ?", answer:"Oui, uniquement à Lausanne, métro M2 station Grancy.", time:"il y a 2h" },
  ]);
  const [newQ, setNewQ] = useState("");

  const addQ = () => {
    if (!newQ.trim()) return;
    setQuestions(q => [{ id: Date.now(), author: session?.user?.name?.charAt(0).toUpperCase() || "?", question: newQ, answer: "", time: "à l'instant" }, ...q]);
    setNewQ("");
  };

  return (
    <div style={{ maxWidth:1120, margin:"0 auto", padding:"24px 20px" }}>
      <div style={{ fontSize:13, color:C.muted, marginBottom:18, display:"flex", gap:6 }}>
        <span onClick={() => go("home")} style={{ cursor:"pointer", color:C.sage }}>Accueil</span> ›
        <span style={{ cursor:"pointer", color:C.sage }}>Vélos</span> › Vélo gravel reconditionné Kona
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 340px", gap:28, alignItems:"start" }}>
        <div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
            <div style={{ gridColumn:"1/-1", background:"#dce8dc", borderRadius:rl, height:300, display:"flex", alignItems:"center", justifyContent:"center", fontSize:80, border:`1px solid ${C.border}` }}>🚲</div>
            {["🚲","🔍","📐","🔩"].map(e => (
              <div key={e} style={{ background:C.light, borderRadius:r, height:100, display:"flex", alignItems:"center", justifyContent:"center", fontSize:32, border:`1px solid ${C.border}`, cursor:"pointer" }}>{e}</div>
            ))}
          </div>
          <div style={{ marginTop:20 }}>
            <h1 style={{ fontSize:22, fontWeight:800, color:C.dark, marginBottom:8 }}>Vélo gravel reconditionné Kona</h1>
            <div style={{ display:"flex", gap:12, marginBottom:14, flexWrap:"wrap" }}>
              {["🚲 Vélos","📍 Lausanne, VD","⭐ Très bon état","🕐 Publiée il y a 2h"].map(t => (
                <span key={t} style={{ background:C.light, border:`1px solid ${C.border}`, borderRadius:999, padding:"4px 10px", fontSize:12, color:C.muted }}>{t}</span>
              ))}
            </div>
            <p style={{ fontSize:14, color:"#444", lineHeight:1.7, marginBottom:20 }}>Vélo gravel Kona Libre taille M (54 cm), année 2020. Cadre aluminium, fourche carbone, groupe Shimano GRX 1x11. Révision complète effectuée en mars 2025. Vendu avec sacoche de guidon Ortlieb.</p>
            <div style={{ background:C.light, borderRadius:r, padding:"14px 16px", fontSize:13, color:C.muted, border:`1px solid ${C.border}` }}>
              ℹ️ <strong style={{ color:C.dark }}>Pas de messagerie privée sur Reviv.ch</strong> — posez vos questions publiquement ci-dessous.
            </div>
          </div>
          <div style={{ marginTop:28 }}>
            <h2 style={{ fontSize:17, fontWeight:800, color:C.dark, marginBottom:4, display:"flex", alignItems:"center", gap:8 }}>
              <span style={{ width:8, height:8, background:C.sage, borderRadius:"50%", display:"inline-block" }}></span> Questions & Réponses
            </h2>
            <p style={{ fontSize:13, color:C.muted, marginBottom:16 }}>Toutes les questions sont publiques. Seul le vendeur peut répondre.</p>
            <div style={{ display:"flex", gap:8, marginBottom:20 }}>
              <input value={newQ} onChange={e => setNewQ(e.target.value)} onKeyDown={e => e.key==="Enter" && addQ()}
                placeholder="Posez une question sur cette annonce…"
                style={{ flex:1, border:`1px solid ${C.border}`, borderRadius:r, padding:"10px 12px", fontSize:14, outline:"none" }}/>
              <button onClick={addQ} style={{ background:C.sage, color:"#fff", border:"none", borderRadius:r, padding:"10px 16px", fontWeight:700, fontSize:13, cursor:"pointer" }}>
                Poser ma question
              </button>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {questions.map(q => (
                <div key={q.id} style={{ border:`1px solid ${C.border}`, borderRadius:r, overflow:"hidden" }}>
                  <div style={{ padding:"12px 14px", background:C.light, display:"flex", gap:10 }}>
                    <div style={{ width:28, height:28, borderRadius:"50%", background:C.border, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.muted, flexShrink:0 }}>{q.author}</div>
                    <div><div style={{ fontSize:13 }}>{q.question}</div><div style={{ fontSize:11, color:C.muted, marginTop:2 }}>{q.time}</div></div>
                  </div>
                  {q.answer ? (
                    <div style={{ padding:"12px 14px", background:"#fff", display:"flex", gap:10, borderTop:`1px solid ${C.border}` }}>
                      <div style={{ width:28, height:28, borderRadius:"50%", background:C.sageBg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.sage, flexShrink:0 }}>TH</div>
                      <div><div style={{ fontSize:13 }}>{q.answer}</div><div style={{ fontSize:11, color:C.muted, marginTop:2 }}>✓ Thomas H. (vendeur)</div></div>
                    </div>
                  ) : (
                    <div style={{ padding:"10px 14px", fontSize:12, color:C.muted, fontStyle:"italic", background:"#fff", borderTop:`1px solid ${C.border}` }}>Pas encore de réponse.</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:rl, padding:20, marginBottom:14 }}>
            <div style={{ fontSize:32, fontWeight:800, color:C.dark, marginBottom:4 }}>CHF 220.–</div>
            <div style={{ fontSize:12, color:C.sage, fontWeight:600, marginBottom:16 }}>🎁 Annonce gratuite · ♻️ Objet d&apos;occasion</div>
            <button style={{ width:"100%", background:C.sage, color:"#fff", border:"none", borderRadius:r, padding:13, fontSize:15, fontWeight:700, marginBottom:8, cursor:"pointer" }}>
              💬 Poser une question
            </button>
            <button style={{ width:"100%", background:"#fff", border:`1.5px solid ${C.border}`, borderRadius:r, padding:12, fontSize:14, fontWeight:600, color:C.muted, cursor:"pointer" }}>
              ♡ Sauvegarder l&apos;annonce
            </button>
          </div>
          <div style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:rl, padding:20, marginBottom:14 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:14 }}>
              <div style={{ width:44, height:44, borderRadius:"50%", background:C.sageBg, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700, fontSize:16, color:C.sage }}>TH</div>
              <div><div style={{ fontWeight:700, fontSize:14, color:C.dark }}>Thomas H.</div><div style={{ fontSize:12, color:C.muted }}>Membre depuis jan. 2024</div></div>
            </div>
            <div style={{ marginBottom:12 }}><span style={pill(C.sageBg, C.sage)}>✓ Identité vérifiée</span></div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
              {[["12","Annonces"],["100%","Réponses"]].map(([n,l]) => (
                <div key={l} style={{ background:C.light, borderRadius:8, padding:"8px 10px", textAlign:"center" }}>
                  <div style={{ fontSize:16, fontWeight:800, color:C.dark }}>{n}</div>
                  <div style={{ fontSize:11, color:C.muted }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background:C.sageBg, border:`1px solid ${C.sageL}`, borderRadius:r, padding:"12px 14px", fontSize:12, color:C.sage }}>
            🌿 <strong>Impact estimé</strong> : environ <strong>18 kg de CO₂</strong> économisés par rapport à l&apos;achat neuf.
          </div>
        </div>
      </div>
    </div>
  );
}

function PublishPage({ go }: { go: (p: string) => void }) {
  const { data: session } = useSession();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ title:"", category:"", description:"", condition:"", price:"", city:"" });
  const [photos, setPhotos] = useState<string[]>([]);
  const emojis = ["📱","🚲","👕","🔧","💡","📚","⚙️","🛋️"];

  if (!session) return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", minHeight:"60vh", flexDirection:"column", gap:16 }}>
      <div style={{ fontSize:48 }}>🔒</div>
      <h2 style={{ fontSize:20, fontWeight:800, color:C.dark }}>Connexion requise</h2>
      <p style={{ color:C.muted }}>Vous devez être connecté pour publier une annonce.</p>
      <a href="/login" style={{ background:C.sage, color:"#fff", padding:"11px 24px", borderRadius:r, fontWeight:700, textDecoration:"none" }}>Se connecter</a>
    </div>
  );

  const tabs = ["1. Photos","2. Description","3. Prix & détails","4. Aperçu"];
  const conditions = [["✨","Comme neuf","Jamais utilisé"],["👍","Très bon état","Légères traces"],["✅","Bon état","Quelques marques"],["🔧","À réparer","Défauts fonctionnels"]];

  return (
    <div style={{ maxWidth:760, margin:"0 auto", padding:"32px 20px" }}>
      <h1 style={{ fontSize:24, fontWeight:800, color:C.dark, marginBottom:6 }}>Publier une annonce</h1>
      <p style={{ fontSize:14, color:C.muted, marginBottom:28 }}>Gratuit pour les particuliers · Identité vérifiée requise</p>
      <div style={{ display:"flex", marginBottom:32, borderRadius:r, overflow:"hidden", border:`1px solid ${C.border}` }}>
        {tabs.map((t, i) => (
          <div key={t} style={{ flex:1, padding:10, textAlign:"center", fontSize:12, fontWeight:600, background: step===i+1 ? C.sage : step>i+1 ? C.sageBg : C.light, color: step===i+1 ? "#fff" : step>i+1 ? C.sage : C.muted, borderRight: i<3 ? `1px solid ${C.border}` : "none" }}>{t}</div>
        ))}
      </div>
      {step===1 && (
        <div>
          <div onClick={() => { if(photos.length<8) setPhotos(p => [...p, emojis[p.length%8]]); }}
            style={{ border:`2px dashed ${C.border}`, borderRadius:rl, padding:32, textAlign:"center", color:C.muted, cursor:"pointer" }}>
            <div style={{ fontSize:32, marginBottom:8 }}>📷</div>
            <div style={{ fontWeight:600, color:C.dark }}>Cliquez pour ajouter des photos</div>
          </div>
          {photos.length > 0 && (
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, marginTop:12 }}>
              {photos.map((e, i) => (
                <div key={i} style={{ background:C.light, borderRadius:8, aspectRatio:"1", display:"flex", alignItems:"center", justifyContent:"center", fontSize:28, border:`1px solid ${C.border}`, position:"relative" }}>
                  {e}
                  <button onClick={() => setPhotos(p => p.filter((_,j) => j!==i))} style={{ position:"absolute", top:4, right:4, background:"#c0392b", color:"#fff", border:"none", borderRadius:"50%", width:18, height:18, fontSize:11, cursor:"pointer" }}>✕</button>
                </div>
              ))}
            </div>
          )}
          <div style={{ display:"flex", justifyContent:"flex-end", marginTop:24, paddingTop:18, borderTop:`1px solid ${C.border}` }}>
            <button onClick={() => setStep(2)} style={{ background:C.sage, color:"#fff", border:"none", borderRadius:r, padding:"10px 20px", fontWeight:700, cursor:"pointer" }}>Suivant →</button>
          </div>
        </div>
      )}
      {step===2 && (
        <div>
          <div style={{ marginBottom:18 }}>
            <label style={{ fontSize:13, fontWeight:600, color:C.dark, display:"block", marginBottom:6 }}>Titre</label>
            <input value={form.title} onChange={e => setForm(f => ({...f,title:e.target.value}))} placeholder="Ex: Vélo de route Trek taille 54" style={{ width:"100%", border:`1px solid ${C.border}`, borderRadius:r, padding:"10px 12px", fontSize:14, outline:"none", boxSizing:"border-box" }}/>
          </div>
          <div style={{ marginBottom:18 }}>
            <label style={{ fontSize:13, fontWeight:600, color:C.dark, display:"block", marginBottom:6 }}>Description</label>
            <textarea value={form.description} onChange={e => setForm(f => ({...f,description:e.target.value}))} placeholder="Décrivez honnêtement l'objet…" style={{ width:"100%", border:`1px solid ${C.border}`, borderRadius:r, padding:"10px 12px", fontSize:14, outline:"none", minHeight:90, resize:"vertical", boxSizing:"border-box", fontFamily:"inherit" }}/>
          </div>
          <div style={{ marginBottom:18 }}>
            <label style={{ fontSize:13, fontWeight:600, color:C.dark, display:"block", marginBottom:6 }}>État</label>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8 }}>
              {conditions.map(([icon,label,sub]) => (
                <div key={label} onClick={() => setForm(f => ({...f,condition:label}))}
                  style={{ border:`1.5px solid ${form.condition===label ? C.sage : C.border}`, borderRadius:r, padding:"12px 8px", textAlign:"center", cursor:"pointer", background: form.condition===label ? C.sageBg : "#fff" }}>
                  <div style={{ fontSize:20, marginBottom:4 }}>{icon}</div>
                  <div style={{ fontSize:12, fontWeight:600, color:C.dark }}>{label}</div>
                  <div style={{ fontSize:11, color:C.muted }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", marginTop:24, paddingTop:18, borderTop:`1px solid ${C.border}` }}>
            <button onClick={() => setStep(1)} style={{ background:"transparent", border:`1.5px solid ${C.sage}`, color:C.sage, borderRadius:r, padding:"10px 20px", fontWeight:700, cursor:"pointer" }}>← Retour</button>
            <button onClick={() => setStep(3)} style={{ background:C.sage, color:"#fff", border:"none", borderRadius:r, padding:"10px 20px", fontWeight:700, cursor:"pointer" }}>Suivant →</button>
          </div>
        </div>
      )}
      {step===3 && (
        <div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:18 }}>
            <div>
              <label style={{ fontSize:13, fontWeight:600, color:C.dark, display:"block", marginBottom:6 }}>Prix (CHF)</label>
              <input type="number" value={form.price} onChange={e => setForm(f => ({...f,price:e.target.value}))} placeholder="0" style={{ width:"100%", border:`1px solid ${C.border}`, borderRadius:r, padding:"10px 12px", fontSize:14, outline:"none", boxSizing:"border-box" }}/>
            </div>
            <div>
              <label style={{ fontSize:13, fontWeight:600, color:C.dark, display:"block", marginBottom:6 }}>Ville</label>
              <input value={form.city} onChange={e => setForm(f => ({...f,city:e.target.value}))} placeholder="Ex: Lausanne" style={{ width:"100%", border:`1px solid ${C.border}`, borderRadius:r, padding:"10px 12px", fontSize:14, outline:"none", boxSizing:"border-box" }}/>
            </div>
          </div>
          <div style={{ background:C.sageBg, border:`1px solid ${C.sageL}`, borderRadius:r, padding:"12px 14px", fontSize:13, color:C.sage, marginBottom:18 }}>
            🎁 <strong>Publication 100% gratuite</strong> pour les particuliers. Aucune commission sur la vente.
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", marginTop:24, paddingTop:18, borderTop:`1px solid ${C.border}` }}>
            <button onClick={() => setStep(2)} style={{ background:"transparent", border:`1.5px solid ${C.sage}`, color:C.sage, borderRadius:r, padding:"10px 20px", fontWeight:700, cursor:"pointer" }}>← Retour</button>
            <button onClick={() => setStep(4)} style={{ background:C.sage, color:"#fff", border:"none", borderRadius:r, padding:"10px 20px", fontWeight:700, cursor:"pointer" }}>Aperçu →</button>
          </div>
        </div>
      )}
      {step===4 && (
        <div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24 }}>
            <div>
              <h3 style={{ fontSize:15, fontWeight:700, color:C.dark, marginBottom:12 }}>Aperçu</h3>
              <div style={{ border:`1px solid ${C.sageL}`, borderRadius:rl, overflow:"hidden", maxWidth:220 }}>
                <div style={{ height:120, background:C.sageBg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:40 }}>{photos[0] || "📦"}</div>
                <div style={{ padding:10 }}>
                  <div style={{ fontWeight:700, fontSize:13, marginBottom:4 }}>{form.title || "Votre titre"}</div>
                  <div style={{ fontSize:15, fontWeight:800, color:C.dark }}>{form.price ? `CHF ${form.price}.–` : "CHF —"}</div>
                </div>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize:15, fontWeight:700, color:C.dark, marginBottom:12 }}>Récapitulatif</h3>
              {[["Publication","Gratuite"],["Commission","0%"],["Identité","✓ Vérifiée"],["Visibilité","Publique"]].map(([k,v]) => (
                <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"8px 0", borderBottom:`1px solid ${C.border}`, fontSize:13 }}>
                  <span style={{ color:C.muted }}>{k}</span>
                  <strong style={{ color: k==="Commission"||k==="Publication" ? C.sage : C.text }}>{v}</strong>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", marginTop:24, paddingTop:18, borderTop:`1px solid ${C.border}` }}>
            <button onClick={() => setStep(3)} style={{ background:"transparent", border:`1.5px solid ${C.sage}`, color:C.sage, borderRadius:r, padding:"10px 20px", fontWeight:700, cursor:"pointer" }}>← Retour</button>
            <button onClick={() => setStep(5)} style={{ background:C.sage, color:"#fff", border:"none", borderRadius:r, padding:"12px 28px", fontWeight:700, fontSize:15, cursor:"pointer" }}>🌿 Publier mon annonce</button>
          </div>
        </div>
      )}
      {step===5 && (
        <div style={{ textAlign:"center", padding:"40px 0" }}>
          <div style={{ fontSize:56, marginBottom:16 }}>🎉</div>
          <h2 style={{ fontSize:22, fontWeight:800, color:C.dark, marginBottom:8 }}>Annonce publiée !</h2>
          <div style={{ display:"flex", gap:12, justifyContent:"center", marginTop:16 }}>
            <button onClick={() => go("listing")} style={{ background:C.sage, color:"#fff", border:"none", borderRadius:r, padding:"11px 20px", fontWeight:700, cursor:"pointer" }}>Voir mon annonce</button>
            <button onClick={() => go("home")} style={{ background:"transparent", border:`1.5px solid ${C.sage}`, color:C.sage, borderRadius:r, padding:"11px 20px", fontWeight:700, cursor:"pointer" }}>Retour à l&apos;accueil</button>
          </div>
        </div>
      )}
    </div>
  );
}

function VerifyPage() {
  const [idDone, setIdDone] = useState(false);
  const [addrDone, setAddrDone] = useState(false);
  const [idVerified, setIdVerified] = useState(false);
  const [addrVerified, setAddrVerified] = useState(false);

  return (
    <div style={{ maxWidth:560, margin:"0 auto", padding:"40px 20px" }}>
      <h1 style={{ fontSize:24, fontWeight:800, color:C.dark, marginBottom:6 }}>Vérification d&apos;identité</h1>
      <p style={{ fontSize:14, color:C.muted, marginBottom:28 }}>Obligatoire pour publier · Rapide et sécurisé</p>
      <div style={{ background:C.sageBg, border:`1px solid ${C.sageL}`, borderRadius:r, padding:"14px 16px", marginBottom:24, fontSize:13, color:C.sage }}>
        🔒 Vos données restent privées. Seul le badge &quot;Vendeur vérifié&quot; est visible publiquement.
      </div>
      {[
        { num:"✓", label:"Créer un compte", desc:"Email confirmé.", done:true, verified:true, action:null },
        { num:"2", label:"Pièce d'identité", desc:"Carte d'identité, passeport ou permis valide.", done:idDone, verified:idVerified,
          action: !idDone
            ? <div onClick={() => { setIdDone(true); setTimeout(() => setIdVerified(true), 2500); }} style={{ border:`2px dashed ${C.border}`, borderRadius:r, padding:20, textAlign:"center", cursor:"pointer", color:C.muted }}><div style={{ fontSize:28, marginBottom:6 }}>🪪</div><div style={{ fontWeight:600, color:C.dark, fontSize:13 }}>Cliquez pour envoyer</div></div>
            : <div style={{ border:`1.5px solid ${C.sage}`, borderRadius:r, padding:"12px 16px", background:C.sageBg, display:"flex", alignItems:"center", gap:10, color:C.sage, fontWeight:600, fontSize:13 }}>✅ Document envoyé <span style={{ marginLeft:"auto", background: idVerified ? C.sageBg : "#FEF3C7", color: idVerified ? C.sage : "#92400E", padding:"3px 9px", borderRadius:999, fontSize:11 }}>{idVerified ? "✓ Confirmée" : "⏳ En vérification"}</span></div>
        },
        { num:"3", label:"Confirmation d'adresse", desc:"Facture ou relevé de moins de 3 mois.", done:addrDone, verified:addrVerified,
          action: !addrDone
            ? <div onClick={idVerified ? () => { setAddrDone(true); setTimeout(() => setAddrVerified(true), 2500); } : undefined} style={{ border:`2px dashed ${C.border}`, borderRadius:r, padding:20, textAlign:"center", cursor: idVerified ? "pointer" : "default", color:C.muted, opacity: idVerified ? 1 : .5 }}><div style={{ fontSize:28, marginBottom:6 }}>🏠</div><div style={{ fontWeight:600, color:C.dark, fontSize:13 }}>{idVerified ? "Cliquez pour envoyer" : "Disponible après étape 2"}</div></div>
            : <div style={{ border:`1.5px solid ${C.sage}`, borderRadius:r, padding:"12px 16px", background:C.sageBg, display:"flex", alignItems:"center", gap:10, color:C.sage, fontWeight:600, fontSize:13 }}>✅ Document envoyé <span style={{ marginLeft:"auto", background: addrVerified ? C.sageBg : "#FEF3C7", color: addrVerified ? C.sage : "#92400E", padding:"3px 9px", borderRadius:999, fontSize:11 }}>{addrVerified ? "✓ Confirmée" : "⏳ En vérification"}</span></div>
        },
        { num:"4", label:"Badge vérifié activé", desc:"Délai : 24h ouvrables après validation.", done:false, verified:false, action:null },
      ].map((step, i) => (
        <div key={i} style={{ display:"flex", gap:16, alignItems:"flex-start", padding:"16px 0", borderBottom:`1px solid ${C.border}`, opacity: i===3 && !addrVerified ? .4 : 1 }}>
          <div style={{ width:32, height:32, borderRadius:"50%", background: step.verified ? C.sageBg : i===0 ? C.sage : C.light, color: step.verified ? C.sage : i===0 ? "#fff" : C.muted, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:14, flexShrink:0 }}>{step.verified ? "✓" : step.num}</div>
          <div style={{ flex:1 }}>
            <div style={{ fontWeight:700, fontSize:14, color: i===3 && !addrVerified ? C.muted : C.dark, marginBottom:3 }}>{step.label}</div>
            <div style={{ fontSize:13, color:C.muted, marginBottom: step.action ? 10 : 0 }}>{step.desc}</div>
            {step.action}
          </div>
        </div>
      ))}
    </div>
  );
}

function Footer({ go }: { go: (p: string) => void }) {
  return (
    <footer style={{ borderTop:`1px solid ${C.border}`, marginTop:32, background:C.light }}>
      <div style={{ maxWidth:1120, margin:"0 auto", padding:"18px 20px", display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:12, color:C.muted }}>
        <div style={{ display:"flex", gap:18 }}>
          {["Charte","Règles","FAQ","Contact","Blog"].map(l => <span key={l} style={{ cursor:"pointer" }}>{l}</span>)}
          <span onClick={() => go("verify")} style={{ cursor:"pointer" }}>Vérification</span>
        </div>
        <div>© 2026 Reviv.ch — économie circulaire suisse 🌿</div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [page, setPage] = useState("home");
  const go = (p: string) => { setPage(p); window.scrollTo({ top:0, behavior:"smooth" }); };

  return (
    <SessionProvider>
      <div style={{ fontFamily:"Inter,system-ui,sans-serif", color:C.text, background:"#fff", minHeight:"100vh" }}>
        <TrustBar />
        <Header go={go} />
        {page==="home"    && <HomePage go={go} />}
        {page==="listing" && <ListingPage go={go} />}
        {page==="publish" && <PublishPage go={go} />}
        {page==="verify"  && <VerifyPage />}
        <Footer go={go} />
      </div>
    </SessionProvider>
  );
}