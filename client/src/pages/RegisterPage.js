import React from "react";
import styles from "../styles/RegisterPage.module.css";

const RegisterPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [registed, setRegisted] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    setRegisted(true);
    console.log(data);
  };
  const handleClick = () => {
    document.location.href = "/";
  };

  return (
    <div className={styles.homePage}>
      {registed ? (
        <div style={{ textAlign: "center" }}>
          <h2>Obrigado {username}!</h2>
          <p>Agora é só fazeres login.</p>
          <button onClick={handleClick}>Login</button>
        </div>
      ) : (
        <div>
          <section className={styles.headerSection}>
            <h1>Bem-vindo</h1>
            <h3>Regista-te no Log Project</h3>
            <p>
              O Log Project é uma aplicação de gestão de tarefas para equipas.
              Ele permite que os utilizadores criem tarefas, atribuam-nas a
              membros da equipa e acompanhem o progresso. A interface é
              intuitiva e fácil de usar, permitindo que os utilizadores
              adicionem tarefas, editem detalhes e marquem tarefas como
              concluídas com facilidade.{" "}
            </p>
          </section>
          <section className={styles.sectionForm}>
            {/* <h2>Login</h2> */}
            <form onSubmit={handleSubmit}>
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className={styles.buttonSection}>
                <button type="submit">Registar</button>
              </div>
            </form>
            <button>
              <a href="/"> Voltar à página inicial</a>
            </button>
          </section>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
