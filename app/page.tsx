"use client"
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const handlerClickLogin = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_URL_FETCH+'/api/urloauthmp?token=APP_USR-2177546216458649-092922-f369b39a1c0cdc2696cb75f2d82f927d-124296181');
    const res = await response.json();
    window.location.href = res.data;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button onClick={handlerClickLogin} style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "5px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          display: "block",
        }}>
          Integracion con Mercado Pago
        </button>
      </main>
    </div>
  );
}
