"use client";
import { useSession, signOut } from "next-auth/react";

export default function Header({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { data: session } = useSession();

  return (
    <>
      <div style={{ background:"#2E4A30", color:"#fff", fontSize:12, padding:"7px 0", textAlign:"center" }}>
        <span style={{ margin:"0 18px", opacity:.9 }}>🌿 <strong style={{ color:"#C8DEC9" }}>100% occasion</strong></span>
        <span style={{ margin:"0 18px", opacity:.9 }}>✓ <strong style={{ color:"#C8DEC9" }}>Identité vérifiée</strong> pour chaque vendeur</span>
        <span style={{ margin:"0 18px", opacity:.9 }}>🎁 <strong style={{ color:"#C8DEC9" }}>Annonces gratuites</strong> pour les particuliers</span>
        <span style={{ margin:"0 18px", opacity:.9 }}>♻️ <strong style={{ color:"#C8DEC9" }}>Économie circulaire suisse</strong></span>
      </div>
      <header style={{ background:"#F0EDE2", borderBottom:"1px solid #D9D9D0", position:"sticky", top:0, zIndex:100 }}>
        <div style={{ maxWidth:1120, margin:"0 auto", display:"flex", alignItems:"center", gap:14, padding:"10px 20px" }}>
          <div onClick={() => onNavigate("home")} style={{ display:"flex", alignItems:"center", gap:8, fontWeight:800, fontSize:19, color:"#2E4A30", cursor:"pointer", whiteSpace:"nowrap" }}>
            <div style={{ width:28, height:28, background:"#5A8C5C", borderRadius:"50% 50% 50% 0", display:"flex", alignItems:"center", justifyContent:"center" }}>🌿</div>
            reviv.ch
          </div>
          <div style={{ flex:1, display:"flex", alignItems:"center", gap:8, background:"#fff", border:"1px solid #D9D9D0", borderRadius:10, padding:"8px 12px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.3-4.3" stroke="#aaa" strokeWidth="2" strokeLinecap="round"/><circle cx="11" cy="11" r="7" stroke="#aaa" strokeWidth="2"/></svg>
            <input placeholder="Rechercher un objet, une marque, une catégorie…" style={{ border:0, outline:0, width:"100%", fontSize:14 }}/>
          </div>
          <nav style={{ display:"flex", alignItems:"center", gap:14, whiteSpace:"nowrap" }}>
            <a onClick={() => onNavigate("home")} style={{ fontSize:13, fontWeight:600, color:"#2E4A30", cursor:"pointer" }}>Parcourir</a>
            <a onClick={() => onNavigate("verify")} style={{ fontSize:13, fontWeight:600, color:"#2E4A30", cursor:"pointer" }}>Vérification</a>

            {session ? (
              <>
                <button onClick={() => onNavigate("publish")}
                  style={{ background:"#5A8C5C", color:"#fff", padding:"9px 15px", borderRadius:10, fontWeight:700, fontSize:13, border:"none", cursor:"pointer" }}>
                  + Publier une annonce
                </button>
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <div style={{ width:32, height:32, borderRadius:"50%", background:"#EAF3EB", border:"1px solid #C8DEC9", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700, fontSize:13, color:"#2E4A30" }}>
                    {session.user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <div style={{ fontSize:13 }}>
                    <div style={{ fontWeight:600, color:"#2E4A30" }}>{session.user?.name?.split(" ")[0]}</div>
                  </div>
                  <button onClick={() => signOut({ callbackUrl: "/" })}
                    style={{ fontSize:12, color:"#6B7B6C", background:"transparent", border:"1px solid #D9D9D0", borderRadius:6, padding:"4px 8px", cursor:"pointer" }}>
                    Déconnexion
                  </button>
                </div>
              </>
            ) : (
              <>
                <a href="/login" style={{ fontSize:13, fontWeight:600, color:"#2E4A30", cursor:"pointer" }}>Se connecter</a>
                <a href="/register" style={{ background:"#5A8C5C", color:"#fff", padding:"9px 15px", borderRadius:10, fontWeight:700, fontSize:13, textDecoration:"none" }}>
                  Créer un compte
                </a>
              </>
            )}
            <span style={{ fontSize:12, color:"#6B7B6C", fontWeight:500, border:"1px solid #D9D9D0", padding:"4px 8px", borderRadius:6 }}>FR · DE · IT</span>
          </nav>
        </div>
      </header>
    </>
  );
}
