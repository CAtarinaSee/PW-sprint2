import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { depositar, levantar } from "./AtmSlice";
import "../css/Atm.css"; // Importa o CSS para estilizar a máquina multibanco

const Atm = () => {
  const saldo = useSelector((state) => state.atm.saldo);
  const dispatch = useDispatch();
  const [valor, setValor] = useState(0);
  const [mensagem, setMensagem] = useState(""); // Estado para exibir a mensagem de erro

  const handleLevantar = () => {
    if (valor > saldo) {
      setMensagem("Saldo insuficiente!"); // Define a mensagem de erro
      setTimeout(() => setMensagem(""), 3000); // Remove a mensagem após 3 segundos
    } else {
      dispatch(levantar(valor));
      setMensagem(""); // Limpa a mensagem se o levantamento for bem-sucedido
    }
  };

  return (
    <div className="atm-container">
      <h1>Máquina Multibanco</h1>
      <p className="saldo">Saldo Atual: {saldo} €</p>
      <div className="input-container">
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
        />
        <button onClick={() => dispatch(depositar(valor))}>Depositar</button>
        <button onClick={handleLevantar}>Levantar</button>
      </div>
      {mensagem && <p className="mensagem-erro">{mensagem}</p>}{" "}
      {/* Mostra a mensagem de erro */}
    </div>
  );
};

export default Atm;
