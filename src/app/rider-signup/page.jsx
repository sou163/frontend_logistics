import { RiderSignupForm } from "@/components";
import styles from "./RiderSignup.module.css";

export default function RiderSignupPage() {
  return (
    <main className={styles.main}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Become a <span>Rider at Frontend Logistics</span>
        </h1>
        <div className={styles.formWrapper}>
          <RiderSignupForm />
        </div>
      </div>
    </main>
  );
}
