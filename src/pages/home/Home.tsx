import { useHistory } from "react-router-dom";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";

import "./styles.scss";

import { Button } from "../../components/button";
import { useAuth } from "../../hooks/useAuth";
import { FormEvent, useState } from "react";
import { database } from "../../services/firebase";
export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Room does not exists.");
      return;
    }

    if (roomRef.val().endedAt) {
      alert("Room already closed.");
      return;
    }

    history.push(`/rooms/${roomCode}`);
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
          <img src={logoImg} alt="Logo" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button>Entrar na sala</Button>
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => setIsDarkTheme(!isDarkTheme)}
              />
              <span className="slider round"></span>
            </label>
          </form>
        </div>
      </main>
    </div>
  );
}
