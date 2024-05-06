import Logo from "./logo";
import styles from "../src/styles/footer.module.css";
import Container from "./container";
import Social from "./social";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          (c)2024 Ilekaede all rights reserved.
          {/* <Logo />
          <Social /> */}
        </div>
      </Container>
    </footer>
  );
}
