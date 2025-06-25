import AuthForm from "../components/AuthForm";
import styles from "../styles/Auth.module.scss";

export default function AuthPage() {
  return (
    <main className={styles.authPage}>
      <AuthForm />
    </main>
  );
}
