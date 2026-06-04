"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    const res = await signIn("credentials", {
      email, password, redirect: false,
    });
    setLoading(false);
    if (res?.error) setError("Email ou mot de passe incorrect");
    else router.push("/");
  };

  return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", minHeight:"100vh", background:"#F0EDE2", fontFamily:"Inter,system-ui,sans-serif" }}>
      <div style={{ background:"#fff", border:"1px solid #D9D9D0", borderRadius:14, padding:"36px 32px", width:380 }}>
        <div style={{ textAlign:"center", marginBottom:24 }}>
          <div style={{ fontSize:28, fontWeight:800, color:"#2E4A30" }}>🌿 reviv.ch</div>
          <div style={{ fontSize:13, color:"#6B7B6C", marginTop:4 }}>Connectez-vous à votre compte</div>
        </div>
        {error && <div style={{ background:"#FEE2E2", color:"#991B1B", borderRadius:8, padding:"10px 14px", fontSize:13, marginBottom:14 }}>{error}</div>}
        <div style={{ marginBottom:14 }}>
          <label style={{ fontSize:13, fontWeight:600, color:"#2E4A30", display:"block", marginBottom:6 }}>Email</label>
          <input style={{ width:"100%", border:"1px solid #D9D9D0", borderRadius:10, padding:"10px 12px", fontSize:14, outline:"none", boxSizing:"border-box" }}
            type="email" placeholder="votre@email.ch" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div style={{ marginBottom:20 }}>
          <label style={{ fontSize:13, fontWeight:600, color:"#2E4A30", display:"block", marginBottom:6 }}>Mot de passe</label>
          <input style={{ width:"100%", border:"1px solid #D9D9D0", borderRadius:10, padding:"10px 12px", fontSize:14, outline:"none", boxSizing:"border-box" }}
            type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleLogin()} />
        </div>
        <button onClick={handleLogin} disabled={loading}
          style={{ width:"100%", background:"#5A8C5C", color:"#fff", border:"none", borderRadius:10, padding:"12px", fontWeight:700, fontSize:15, cursor:"pointer" }}>
          {loading ? "Connexion…" : "Se connecter"}
        </button>
        <div style={{ textAlign:"center", marginTop:16, fontSize:13, color:"#6B7B6C" }}>
          Pas encore de compte ?{" "}
          <a href="/register" style={{ color:"#5A8C5C", fontWeight:600 }}>S&apos;inscrire</a>
        </div>
      </div>
    </div>
  );
}
