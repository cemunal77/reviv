import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";

const db = mysql.createPool({
  host:     "z48a60.myd.infomaniak.com",
  port:     3306,
  user:     "z48a60_reviv",
  password: "3@6l94#ioK#I-QN",
  database: "z48a60_reviv",
  waitForConnections: true,
  connectionLimit: 5,
});

export async function POST(req: NextRequest) {
  try {
    const { email, password, firstName, lastName, city, canton, phone } = await req.json();

    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    // Vérifier si email existe déjà
    const [existing] = await db.execute("SELECT id FROM users WHERE email = ?", [email]) as any;
    if (existing.length > 0) {
      return NextResponse.json({ error: "Cet email est déjà utilisé" }, { status: 409 });
    }

    // Hasher le mot de passe
    const passwordHash = await bcrypt.hash(password, 12);

    // Créer l'utilisateur
    const [result] = await db.execute(
      "INSERT INTO users (email, passwordHash, firstName, lastName, city, canton, phone) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [email, passwordHash, firstName, lastName, city || null, canton || null, phone || null]
    ) as any;

    return NextResponse.json({
      success: true,
      user: { id: result.insertId, email, firstName, lastName },
    }, { status: 201 });

  } catch (err: any) {
    console.error("Register error:", err.message);
    return NextResponse.json({ error: "Erreur serveur: " + err.message }, { status: 500 });
  }
}
