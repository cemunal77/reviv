"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", password:"", confirm:"", city:"", canton:"", phone:"" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleRegister = async () => {
    setError("");
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      setError("Veuillez remplir tous les champs obligatoires"); return;
    }
    if (form.password !== form.confirm) {
      setError("Les mots de passe ne correspondent pas"); return;
    }
    if (form.password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères"); return;
    }
    setLoading(true);
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) { setError(data.error || "Erreur lors de l'inscription"); return; }
    router.push("/login?registered=1");
  };

  const inp: React.CSSProperties = { width:"100%", border:"1px solid #D9D9D0", borderRadius:10, padding:"10px 12px", fontSize:14, outline:"none", boxSizing:"border-box" };
  const lbl: React.CSSProperties = { fontSize:13, fontWeight:600, color:"#2E4A30", display:"block", marginBottom:6 };

  return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", minHeight:"100vh", background:"#F0EDE2", fontFamily:"Inter,system-ui,sans-serif", padding:"24px 0" }}>
      <div style={{ background:"#fff", border:"1px solid #D9D9D0", borderRadius:14, padding:"36px 32px", width:440 }}>
        <div style={{ textAlign:"center", marginBottom:24 }}>
          <div style={{ fontSize:28, fontWeight:800, color:"#2E4A30" }}>🌿 reviv.ch</div>
          <div style={{ fontSize:13, color:"#6B7B6C", marginTop:4 }}>Créez votre compte gratuitement</div>
        </div>

        {error && <div style={{ background:"#FEE2E2", color:"#991B1B", borderRadius:8, padding:"10px 14px", fontSize:13, marginBottom:14 }}>{error}</div>}

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:12 }}>
          <div><label style={lbl}>Prénom *</label><input style={inp} placeholder="Jean" value={form.firstName} onChange={set("firstName")} /></div>
          <div><label style={lbl}>Nom *</label><input style={inp} placeholder="Dupont" value={form.lastName} onChange={set("lastName")} /></div>
        </div>

        <div style={{ marginBottom:12 }}>
          <label style={lbl}>Email *</label>
          <input style={inp} type="email" placeholder="jean.dupont@email.ch" value={form.email} onChange={set("email")} />
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:12 }}>
          <div><label style={lbl}>Mot de passe *</label><input style={inp} type="password" placeholder="Min. 8 caractères" value={form.password} onChange={set("password")} /></div>
          <div><label style={lbl}>Confirmation *</label><input style={inp} type="password" placeholder="Répétez" value={form.confirm} onChange={set("confirm")} /></div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:12 }}>
          <div><label style={lbl}>Ville</label><input style={inp} placeholder="Lausanne" value={form.city} onChange={set("city")} /></div>
          <div>
            <label style={lbl}>Canton</label>
            <select style={{ ...inp, appearance:"none" }} value={form.canton} onChange={set("canton")}>
              <option value="">Canton…</option>
              {["VD","GE","ZH","BE","VS","FR","NE","TI","BS","AG","SG","LU","SZ","ZG","AR","AI","GL","GR","JU","NW","OW","SH","SO","TG","UR"].map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div style={{ marginBottom:20 }}>
          <label style={lbl}>Téléphone <span style={{ fontWeight:400, color:"#6B7B6C" }}>(optionnel)</span></label>
          <input style={inp} placeholder="+41 79 000 00 00" value={form.phone} onChange={set("phone")} />
        </div>

        <div style={{ background:"#EAF3EB", border:"1px solid #C8DEC9", borderRadius:8, padding:"10px 14px", fontSize:12, color:"#2E4A30", marginBottom:20 }}>
          🔒 Votre mot de passe est chiffré. Vos données ne sont jamais revendues. Hébergement 100% suisse.
        </div>

        <button onClick={handleRegister} disabled={loading}
          style={{ width:"100%", background:"#5A8C5C", color:"#fff", border:"none", borderRadius:10, padding:"12px", fontWeight:700, fontSize:15, cursor:"pointer" }}>
          {loading ? "Création du compte…" : "Créer mon compte gratuitement"}
        </button>

        <div style={{ textAlign:"center", marginTop:16, fontSize:13, color:"#6B7B6C" }}>
          Déjà un compte ?{" "}
          <a href="/login" style={{ color:"#5A8C5C", fontWeight:600 }}>Se connecter</a>
        </div>
      </div>
    </div>
  );
}
