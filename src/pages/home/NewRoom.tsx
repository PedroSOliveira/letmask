import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/button";
import { useAuth } from "../../hooks/useAuth";

import "./styles.scss";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import { database } from "../../services/firebase";

export function NewRoom() {
  const [newRoom, setNewRoom] = useState("");
  const history = useHistory();
  const { user } = useAuth();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <div id="page-auth" className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <aside className="aside-auth">
        <img className="illustration" src={illustrationImg} alt="Ilustração" />
        <strong>Crie salas em Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Crie uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button>Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala já existente?{" "}
            <Link to="/"> Clique aqui</Link>
          </p>
          <label style={{ margin: "0 auto" }} className="switch">
            <input
              type="checkbox"
              onChange={() => setIsDarkTheme(!isDarkTheme)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </main>
    </div>
  );
}
