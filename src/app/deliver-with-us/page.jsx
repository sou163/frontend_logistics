import { DeliverWithUsForm } from "@/components";
import styles from "./DeliverWithUsPage.module.css";

export default function DeliverWithUsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.heading}>Deliver With Frontend</h1>
        <div className={styles.formWrapper}>
          <DeliverWithUsForm />
        </div>
      </div>
    </main>
  );
}
