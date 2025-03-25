import "../css/TodoApp.css";
import "../App.css";
import "../css/Home.css";
import { useState } from "react";

export default function Home() {
  const [selectedDetail, setSelectedDetail] = useState("");

  //console.log("Home renderizou!");  ✅ Testa se o componente está a ser chamado

  const dados = [
    {
      id: 1,
      title: "TodoApp",
      description:
        "O TodoApp permite criar, editar e apagar tarefas de forma simples e intuitiva.",
    },
    {
      id: 2,
      title: "TodoApp2",
      description:
        "Esta versão do TodoApp guarda as tarefas no Local Storage para que não se percam ao recarregar a página.",
    },
    {
      id: 3,
      title: "TodoApp3",
      description:
        "O TodoAppContador adiciona um contador de tarefas completas para melhor controlo da produtividade.",
    },
  ];

  return (
    <div className="home-container">
      <h1>Bem-vindo!</h1>
      <p>Escolhe uma das opções.</p>
    </div>
  );
}
