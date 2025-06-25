"use client";

import { useRouter } from "next/navigation";
import { Button } from "./components/ui/Button";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const goToAuthPage = () => {
    router.push("/auth");
  };

  return (
    <div className={styles.page}>
      <Button width={350} onClick={goToAuthPage}>
        {" "}
        برای رفتن به صفحه احراز هویت کلیک کنید
      </Button>
    </div>
  );
}
