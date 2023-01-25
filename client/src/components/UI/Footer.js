import React, { useEffect } from "react";
import styles from "../../styles/UI/Footer.module.css";

const Footer = () => {
  // This state variable is used to store the current time and it is initialized with the current time
  const [currentTime, setCurrentTime] = React.useState(
    new Date().toLocaleTimeString("pt-PT")
  );
  const currentDate = new Date().toLocaleDateString("pt-PT");

  // This useEffect is used to update the current time every second and set it to the currentTime state variable so it can be displayed in the footer section of the page
  useEffect(() => {
    // This interval is used to update the current time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString("pt-PT"));
    }, 1000);
    return () => clearInterval(interval); // This is used to clear the interval when the component is unmounted so it doesn't keep updating the current time after the component is unmounted and it doesn't cause any memory leaks or errors in the console of the browser or the terminal of the server
  }, []);
  return (
    <>
      <footer className={styles.footerSection}>
        <div className={styles.sectionCenter}>
          <span> Made by Carlos Barros</span>
          <span>
            {currentDate} - {currentTime}
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
