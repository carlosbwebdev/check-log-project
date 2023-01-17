import React, { useEffect } from "react";
import styles from "../styles/Dashboard.module.css";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [token, setToken] = React.useState(false);
  const [username, setUsername] = React.useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);
      if (!user) {
        // se nao existir user
        localStorage.removeItem("token");
        navigate("/register");
      } else {
        // se existir user
        setUsername(user.username);
        setToken(true);
      }
    } else {
      // se aceder a pagina /dashboard sem estar logado
      setToken(false);
      console.log("token expirado");
    }
  }, [navigate]);

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleGoBack = () => {
    navigate("/register");
  };

  return (
    <div className={styles.dashboardPage}>
      {token ? (
        <section className={styles.dashboardSection}>
          <h1>Bem-vindo ao dashboard</h1>
          <section>
            <p>Ola {username}!</p>
          </section>
          <button onClick={handleClick}>Logout</button>
        </section>
      ) : (
        <section className={styles.dashboardSection}>
          <h1>Bem-vindo ao Log Project</h1>
          <p>Primeiro tens que te registar, clica em baixo!</p>
          <button onClick={handleGoBack}>Registar</button>
        </section>
      )}
    </div>
  );
};

export default Dashboard;
