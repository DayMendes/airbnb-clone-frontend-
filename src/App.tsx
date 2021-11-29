import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import styles from "./styles/app.module.css";
import "./styles/global.css";

function App() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <section className={styles.contentWrapper}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}

export default App;
