import { useState, useEffect } from "react";

export default function Relogio() {
  const getHoraAtual = () => {
    const agora = new Date();

    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    return `${horas}:${minutos}:${segundos}`;
  };

  const [hora, setHora] = useState(getHoraAtual());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(getHoraAtual());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
      <h1 style={{ color: 'red'}}>{hora}</h1>
  );
}