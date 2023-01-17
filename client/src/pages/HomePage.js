import React from "react";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/api/v1/login", {
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
    console.log(data);
    if (data.user) {
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    } else {
      alert("Username ou password incorretos");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className={styles.homePage}>
      <section className={styles.headerSection}>
        <h1>Bem-vindo Log Project</h1>
        <p>
          O Log Project é uma aplicação de gestão de tarefas para equipas. Ele
          permite que os utilizadores criem tarefas, atribuam-nas a membros da
          equipa e acompanhem o progresso através de uma interface intuitiva.
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
            <button type="submit">Login</button>
          </div>

          <span>
            Ainda não tens conta?{" "}
            <a href="/register">
              <u>Regista-te</u>
            </a>
          </span>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
