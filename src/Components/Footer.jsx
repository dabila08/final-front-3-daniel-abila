import { useContext } from "react";
import { ContextGlobal } from "./utils/ContextGlobal";
import styles from "./Footer.module.css";
function Footer() {
  const temaContext = useContext(ContextGlobal);

  return (
    <footer className={temaContext.theme}>
      <div className={styles.footer}>
        <p>Daniel Abila - 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
