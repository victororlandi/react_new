import { useState, useEffect } from "react";

export default function Letreiro() {
  const textoCompleto = "Conheça a Fatec";
  const [textoExibido, setTextoExibido] = useState("");

  useEffect(() => {
    let indice = 0;

    const interval = setInterval(() => {
      setTextoExibido((prev) => {
        if (indice >= textoCompleto.length) {
          indice = 0;
          return "";
        } else {
          indice++;
          return textoCompleto.slice(0, indice);
        }
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return <div style={{ color: 'red'}}>{textoExibido}</div>;
}