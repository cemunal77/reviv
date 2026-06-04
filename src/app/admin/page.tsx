"use client";
import { useState } from "react";

const ADMIN_PASSWORD = "Reviv202319%_%@";

type VerifStatus = "PENDING" | "APPROVED" | "REJECTED";
type ListingStatus = "ACTIVE" | "DELETED";
type UserStatus = "ACTIVE" | "SUSPENDED";

interface Verification {
  id: number; name: string; email: string; city: string; submittedAt: string;
  idStatus: VerifStatus; addrStatus: VerifStatus; globalStatus: VerifStatus; note: string;
}
interface Listing {
  id: number; title: string; seller: string; price: number; city: string;
  category: string; status: ListingStatus; createdAt: string; reported: boolean;
}
interface User {
  id: number; name: string; email: string; city: string; verified: boolean;
  listings: number; status: UserStatus; joinedAt: string;
}

const initVerifs: Verification[] = [
  { id:1, name:"Sophie Martin", email:"sophie.m@gmail.com", city:"Lausanne", submittedAt:"04.06.2026 08:12", idStatus:"PENDING", addrStatus:"PENDING", globalStatus:"PENDING", note:"" },
  { id:2, name:"Luca Bernasconi", email:"luca.b@gmail.com", city:"Lugano", submittedAt:"03.06.2026 17:45", idStatus:"APPROVED", addrStatus:"PENDING", globalStatus:"PENDING", note:"" },
  { id:3, name:"Émilie Rochat", email:"emilie.r@bluewin.ch", city:"Fribourg", submittedAt:"03.06.2026 14:20", idStatus:"PENDING", addrStatus:"PENDING", globalStatus:"PENDING", note:"" },
  { id:4, name:"Marc Dubois", email:"marc.d@hotmail.com", city:"Genève", submittedAt:"02.06.2026 11:05", idStatus:"APPROVED", addrStatus:"APPROVED", globalStatus:"APPROVED", note:"" },
];
const initListings: Listing[] = [
  { id:1, title:"Vélo gravel Kona reconditionné", seller:"Thomas H.", price:220, city:"Lausanne", category:"Vélos", status:"ACTIVE", createdAt:"04.06.2026", reported:false },
  { id:2, title:"Perceuse Makita 18V", seller:"Jean-Pierre V.", price:75, city:"Genève", category:"Outils", status:"ACTIVE", createdAt:"04.06.2026", reported:true },
  { id:3, title:"iPhone 12 128Go", seller:"Anna K.", price:260, city:"Nyon", category:"Électronique", status:"ACTIVE", createdAt:"03.06.2026", reported:false },
  { id:4, title:"Blouson Patagonia M", seller:"Sophie M.", price:40, city:"Fribourg", category:"Vêtements", status:"ACTIVE", createdAt:"03.06.2026", reported:false },
  { id:5, title:"Cafetière Bialetti 6T", seller:"Luca B.", price:12, city:"Lugano", category:"Maison", status:"ACTIVE", createdAt:"02.06.2026", reported:false },
];
const initUsers: User[] = [
  { id:1, name:"Thomas Hofmann", email:"thomas.h@gmail.com", city:"Lausanne", verified:true, listings:12, status:"ACTIVE", joinedAt:"jan. 2024" },
  { id:2, name:"Sophie Martin", email:"sophie.m@gmail.com", city:"Lausanne", verified:false, listings:0, status:"ACTIVE", joinedAt:"juin 2026" },
  { id:3, name:"Luca Bernasconi", email:"luca.b@gmail.com", city:"Lugano", verified:false, listings:2, status:"ACTIVE", joinedAt:"mai 2026" },
  { id:4, name:"Marc Dubois", email:"marc.d@hotmail.com", city:"Genève", verified:true, listings:5, status:"ACTIVE", joinedAt:"mars 2025" },
  { id:5, name:"Anna Keller", email:"anna.k@gmail.com", city:"Nyon", verified:true, listings:8, status:"SUSPENDED", joinedAt:"nov. 2024" },
];

const badge = (c: string): React.CSSProperties => ({
  display:"inline-flex", alignItems:"center", padding:"3px 9px", borderRadius:999,
  fontSize:11, fontWeight:700,
  background: c==="APPROVED"||c==="ACTIVE" ? "#EAF3EB" : c==="PENDING" ? "#FEF3C7" : "#FEE2E2",
  color: c==="APPROVED"||c==="ACTIVE" ? "#2E4A30" : c==="PENDING" ? "#92400E" : "#991B1B",
});
const btnSm = (c: string): React.CSSProperties => ({
  background:c, color:"#fff", border:"none", borderRadius:6,
  padding:"5px 10px", fontSize:11, fontWeight:700, cursor:"pointer", marginRight:4,
});

const s: Record<string, React.CSSProperties> = {
  body:        { fontFamily:"Inter,system-ui,sans-serif", background:"#F7F7F4", minHeight:"100vh", color:"#1A1A1A" },
  loginWrap:   { display:"flex", alignItems:"center", justifyContent:"center", minHeight:"100vh", background:"#F0EDE2" },
  loginCard:   { background:"#fff", border:"1px solid #D9D9D0", borderRadius:14, padding:"36px 32px", width:360, textAlign:"center" },
  logo:        { fontSize:28, fontWeight:800, color:"#2E4A30", marginBottom:4 },
  logoSub:     { fontSize:13, color:"#6B7B6C", marginBottom:24 },
  input:       { width:"100%", border:"1px solid #D9D9D0", borderRadius:10, padding:"10px 12px", fontSize:14, outline:"none", marginBottom:12, boxSizing:"border-box" },
  btnGreen:    { background:"#5A8C5C", color:"#fff", border:"none", borderRadius:10, padding:"11px 20px", fontWeight:700, fontSize:14, cursor:"pointer", width:"100%" },
  err:         { color:"#c0392b", fontSize:13, marginBottom:10 },
  sidebar:     { width:220, background:"#2E4A30", minHeight:"100vh", padding:"24px 0", flexShrink:0 },
  sideTitle:   { color:"#C8DEC9", fontSize:18, fontWeight:800, padding:"0 20px 20px", borderBottom:"1px solid rgba(255,255,255,.1)", marginBottom:8 },
  sideItem:    { display:"block", padding:"10px 20px", color:"rgba(255,255,255,.8)", fontSize:14, fontWeight:600, cursor:"pointer", border:"none", background:"transparent", width:"100%", textAlign:"left" },
  sideItemActive: { background:"rgba(255,255,255,.1)", color:"#fff", borderLeft:"3px solid #C8DEC9" },
  main:        { flex:1, padding:28, overflowY:"auto" },
  h1:          { fontSize:22, fontWeight:800, color:"#2E4A30", marginBottom:20 },
  statsGrid:   { display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14, marginBottom:28 },
  statCard:    { background:"#fff", border:"1px solid #D9D9D0", borderRadius:12, padding:"16px 18px" },
  statNum:     { fontSize:28, fontWeight:800, color:"#2E4A30" },
  statLbl:     { fontSize:12, color:"#6B7B6C", marginTop:2 },
  table:       { width:"100%", borderCollapse:"collapse", background:"#fff", borderRadius:12, overflow:"hidden", border:"1px solid #D9D9D0" },
  th:          { background:"#F7F7F4", padding:"10px 14px", textAlign:"left", fontSize:12, fontWeight:700, color:"#6B7B6C", borderBottom:"1px solid #D9D9D0" },
  td:          { padding:"11px 14px", fontSize:13, borderBottom:"1px solid #f0f0ee", verticalAlign:"middle" },
  sectionCard: { background:"#fff", border:"1px solid #D9D9D0", borderRadius:12, marginBottom:20, overflow:"hidden" },
  sectionHead: { padding:"14px 18px", borderBottom:"1px solid #D9D9D0", display:"flex", justifyContent:"space-between", alignItems:"center" },
  sectionTitle:{ fontSize:15, fontWeight:800, color:"#2E4A30" },
  modalOverlay:{ position:"fixed", inset:0, background:"rgba(0,0,0,.4)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:1000 },
  modalCard:   { background:"#fff", borderRadius:14, padding:28, width:440, maxWidth:"90vw" },
};

export default function AdminPage() {
  const [auth, setAuth] = useState(false);
  const [pw, setPw] = useState("");
  const [pwErr, setPwErr] = useState(false);
  const [tab, setTab] = useState("dashboard");
  const [verifs, setVerifs] = useState(initVerifs);
  const [listings, setListings] = useState(initListings);
  const [users, setUsers] = useState(initUsers);
  const [modal, setModal] = useState<Verification | null>(null);
  const [rejectNote, setRejectNote] = useState("");

  if (!auth) return (
    <div style={s.loginWrap}>
      <div style={s.loginCard}>
        <div style={s.logo}>🌿 reviv.ch</div>
        <div style={s.logoSub}>Panneau d&apos;administration</div>
        {pwErr && <div style={s.err}>Mot de passe incorrect</div>}
        <input style={s.input} type="password" placeholder="Mot de passe admin" value={pw}
          onChange={e => setPw(e.target.value)}
          onKeyDown={e => { if (e.key==="Enter") { if (pw===ADMIN_PASSWORD) setAuth(true); else setPwErr(true); }}} />
        <button style={s.btnGreen} onClick={() => { if (pw===ADMIN_PASSWORD){setAuth(true);setPwErr(false);}else setPwErr(true); }}>
          Accéder au panneau admin
        </button>
      </div>
    </div>
  );

  const pendingVerifs   = verifs.filter(v => v.globalStatus==="PENDING").length;
  const reportedListings= listings.filter(l => l.reported).length;
  const activeListings  = listings.filter(l => l.status==="ACTIVE").length;

  const approveVerif = (id: number) => setVerifs(v => v.map(x => x.id===id ? {...x, idStatus:"APPROVED", addrStatus:"APPROVED", globalStatus:"APPROVED"} : x));
  const rejectVerif  = (id: number, note: string) => { setVerifs(v => v.map(x => x.id===id ? {...x, globalStatus:"REJECTED", note} : x)); setModal(null); setRejectNote(""); };
  const deleteListing= (id: number) => setListings(l => l.map(x => x.id===id ? {...x, status:"DELETED" as ListingStatus} : x));
  const toggleUser   = (id: number) => setUsers(u => u.map(x => x.id===id ? {...x, status: x.status==="ACTIVE" ? "SUSPENDED" as UserStatus : "ACTIVE" as UserStatus} : x));

  const tabs = [
    { id:"dashboard", label:"📊 Dashboard" },
    { id:"verifs",    label:`✅ Vérifications${pendingVerifs>0?` (${pendingVerifs})`:""}`},
    { id:"listings",  label:`📋 Annonces${reportedListings>0?` ⚠️${reportedListings}`:""}`},
    { id:"users",     label:"👥 Utilisateurs" },
  ];

  return (
    <div style={{...s.body, display:"flex"}}>
      <div style={s.sidebar}>
        <div style={s.sideTitle}>🌿 reviv.ch<br/><span style={{fontSize:11,fontWeight:400,opacity:.7}}>Administration</span></div>
        {tabs.map(t => (
          <button key={t.id} style={{...s.sideItem,...(tab===t.id?s.sideItemActive:{})}} onClick={()=>setTab(t.id)}>{t.label}</button>
        ))}
        <div style={{padding:"20px", borderTop:"1px solid rgba(255,255,255,.1)", marginTop:40}}>
          <button style={{...s.sideItem, color:"rgba(255,100,100,.8)", fontSize:13}} onClick={()=>setAuth(false)}>🚪 Se déconnecter</button>
        </div>
      </div>

      <div style={s.main}>

        {tab==="dashboard" && <>
          <h1 style={s.h1}>Dashboard</h1>
          <div style={s.statsGrid}>
            <div style={s.statCard}><div style={s.statNum}>{activeListings}</div><div style={s.statLbl}>Annonces actives</div></div>
            <div style={s.statCard}><div style={s.statNum}>{users.length}</div><div style={s.statLbl}>Utilisateurs</div></div>
            <div style={s.statCard}><div style={{...s.statNum, color:pendingVerifs>0?"#92400E":"#2E4A30"}}>{pendingVerifs}</div><div style={s.statLbl}>Vérifications en attente</div></div>
            <div style={s.statCard}><div style={{...s.statNum, color:reportedListings>0?"#991B1B":"#2E4A30"}}>{reportedListings}</div><div style={s.statLbl}>Annonces signalées</div></div>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
            <div style={s.sectionCard}>
              <div style={s.sectionHead}>
                <span style={s.sectionTitle}>Vérifications en attente</span>
                <button style={{...btnSm("#5A8C5C"), marginRight:0}} onClick={()=>setTab("verifs")}>Voir tout</button>
              </div>
              {verifs.filter(v=>v.globalStatus==="PENDING").slice(0,3).map(v=>(
                <div key={v.id} style={{padding:"10px 18px",borderBottom:"1px solid #f0f0ee",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div><div style={{fontWeight:600,fontSize:13}}>{v.name}</div><div style={{fontSize:12,color:"#6B7B6C"}}>{v.city} · {v.submittedAt}</div></div>
                  <span style={badge("PENDING")}>En attente</span>
                </div>
              ))}
              {pendingVerifs===0 && <div style={{padding:"16px 18px",fontSize:13,color:"#6B7B6C"}}>Aucune vérification en attente ✅</div>}
            </div>
            <div style={s.sectionCard}>
              <div style={s.sectionHead}>
                <span style={s.sectionTitle}>Annonces signalées</span>
                <button style={{...btnSm("#5A8C5C"), marginRight:0}} onClick={()=>setTab("listings")}>Voir tout</button>
              </div>
              {listings.filter(l=>l.reported).map(l=>(
                <div key={l.id} style={{padding:"10px 18px",borderBottom:"1px solid #f0f0ee",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div><div style={{fontWeight:600,fontSize:13}}>{l.title}</div><div style={{fontSize:12,color:"#6B7B6C"}}>{l.seller} · CHF {l.price}.–</div></div>
                  <span style={{...badge("REJECTED"),fontSize:11}}>⚠️ Signalée</span>
                </div>
              ))}
              {reportedListings===0 && <div style={{padding:"16px 18px",fontSize:13,color:"#6B7B6C"}}>Aucune annonce signalée ✅</div>}
            </div>
          </div>
        </>}

        {tab==="verifs" && <>
          <h1 style={s.h1}>Vérifications d&apos;identité</h1>
          <table style={s.table}>
            <thead><tr>
              <th style={s.th}>Utilisateur</th><th style={s.th}>Ville</th><th style={s.th}>Soumis le</th>
              <th style={s.th}>Pièce d&apos;identité</th><th style={s.th}>Adresse</th><th style={s.th}>Statut</th><th style={s.th}>Actions</th>
            </tr></thead>
            <tbody>{verifs.map(v=>(
              <tr key={v.id}>
                <td style={s.td}><div style={{fontWeight:600}}>{v.name}</div><div style={{fontSize:12,color:"#6B7B6C"}}>{v.email}</div></td>
                <td style={s.td}>{v.city}</td>
                <td style={s.td}>{v.submittedAt}</td>
                <td style={s.td}><span style={badge(v.idStatus)}>{v.idStatus==="APPROVED"?"✓ Validée":v.idStatus==="REJECTED"?"✗ Rejetée":"En attente"}</span></td>
                <td style={s.td}><span style={badge(v.addrStatus)}>{v.addrStatus==="APPROVED"?"✓ Validée":v.addrStatus==="REJECTED"?"✗ Rejetée":"En attente"}</span></td>
                <td style={s.td}><span style={badge(v.globalStatus)}>{v.globalStatus==="APPROVED"?"✓ Vérifié":v.globalStatus==="REJECTED"?"✗ Rejeté":"⏳ En attente"}</span></td>
                <td style={s.td}>
                  {v.globalStatus==="PENDING" && <>
                    <button style={btnSm("#5A8C5C")} onClick={()=>approveVerif(v.id)}>✓ Approuver</button>
                    <button style={btnSm("#c0392b")} onClick={()=>{setModal(v);setRejectNote("");}}>✗ Rejeter</button>
                  </>}
                  {v.globalStatus==="APPROVED" && <span style={{fontSize:12,color:"#5A8C5C",fontWeight:600}}>Approuvé</span>}
                  {v.globalStatus==="REJECTED" && <span style={{fontSize:12,color:"#c0392b",fontWeight:600}}>Rejeté{v.note?` — ${v.note}`:""}</span>}
                </td>
              </tr>
            ))}</tbody>
          </table>
        </>}

        {tab==="listings" && <>
          <h1 style={s.h1}>Gestion des annonces</h1>
          <table style={s.table}>
            <thead><tr>
              <th style={s.th}>Annonce</th><th style={s.th}>Vendeur</th><th style={s.th}>Prix</th>
              <th style={s.th}>Ville</th><th style={s.th}>Catégorie</th><th style={s.th}>Statut</th><th style={s.th}>Actions</th>
            </tr></thead>
            <tbody>{listings.map(l=>(
              <tr key={l.id} style={{opacity:l.status==="DELETED"?.5:1}}>
                <td style={s.td}><div style={{fontWeight:600}}>{l.title}</div><div style={{fontSize:12,color:"#6B7B6C"}}>{l.createdAt}{l.reported&&<span style={{color:"#c0392b",marginLeft:6}}>⚠️ Signalée</span>}</div></td>
                <td style={s.td}>{l.seller}</td>
                <td style={s.td}>CHF {l.price}.–</td>
                <td style={s.td}>{l.city}</td>
                <td style={s.td}>{l.category}</td>
                <td style={s.td}><span style={badge(l.status)}>{l.status==="ACTIVE"?"Active":"Supprimée"}</span></td>
                <td style={s.td}>{l.status==="ACTIVE"
                  ? <button style={btnSm("#c0392b")} onClick={()=>deleteListing(l.id)}>🗑 Supprimer</button>
                  : <span style={{fontSize:12,color:"#6B7B6C"}}>Supprimée</span>}
                </td>
              </tr>
            ))}</tbody>
          </table>
        </>}

        {tab==="users" && <>
          <h1 style={s.h1}>Gestion des utilisateurs</h1>
          <table style={s.table}>
            <thead><tr>
              <th style={s.th}>Utilisateur</th><th style={s.th}>Ville</th><th style={s.th}>Membre depuis</th>
              <th style={s.th}>Annonces</th><th style={s.th}>Vérification</th><th style={s.th}>Statut</th><th style={s.th}>Actions</th>
            </tr></thead>
            <tbody>{users.map(u=>(
              <tr key={u.id}>
                <td style={s.td}><div style={{fontWeight:600}}>{u.name}</div><div style={{fontSize:12,color:"#6B7B6C"}}>{u.email}</div></td>
                <td style={s.td}>{u.city}</td>
                <td style={s.td}>{u.joinedAt}</td>
                <td style={s.td}>{u.listings}</td>
                <td style={s.td}><span style={badge(u.verified?"APPROVED":"PENDING")}>{u.verified?"✓ Vérifié":"Non vérifié"}</span></td>
                <td style={s.td}><span style={badge(u.status)}>{u.status==="ACTIVE"?"Actif":"Suspendu"}</span></td>
                <td style={s.td}><button style={btnSm(u.status==="ACTIVE"?"#e67e22":"#5A8C5C")} onClick={()=>toggleUser(u.id)}>{u.status==="ACTIVE"?"⏸ Suspendre":"▶ Réactiver"}</button></td>
              </tr>
            ))}</tbody>
          </table>
        </>}
      </div>

      {modal && (
        <div style={s.modalOverlay} onClick={()=>setModal(null)}>
          <div style={s.modalCard} onClick={e=>e.stopPropagation()}>
            <h3 style={{fontSize:16,fontWeight:800,color:"#2E4A30",marginBottom:6}}>Rejeter la vérification</h3>
            <p style={{fontSize:13,color:"#6B7B6C",marginBottom:16}}>Dossier de <strong>{modal.name}</strong>.</p>
            <textarea style={{...s.input, minHeight:80, resize:"vertical", marginBottom:16}}
              placeholder="Raison du rejet…" value={rejectNote} onChange={e=>setRejectNote(e.target.value)} />
            <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
              <button style={{...btnSm("#6B7B6C"),padding:"8px 16px",fontSize:13}} onClick={()=>setModal(null)}>Annuler</button>
              <button style={{...btnSm("#c0392b"),padding:"8px 16px",fontSize:13}} onClick={()=>rejectVerif(modal.id,rejectNote)}>Confirmer le rejet</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}