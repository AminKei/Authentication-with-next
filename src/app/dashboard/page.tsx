"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/Dashboard.module.scss";
import { checkAuthClient, getUser } from "../lib/auth";
import { Button } from "../components/ui/Button";

const DashboardPage = () => {
  const router = useRouter();
  const user = getUser();

  useEffect(() => {
    if (!checkAuthClient()) {
      router.push("/auth");
    }
  }, [router]);

  if (!user) {
    return null;
  }

  const LogOut = () => {
    localStorage.removeItem("user");
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Welcome to the Dashboard </h3>
      <div
        className={styles.profileContainer}
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <p className={styles.welcome}>
          !hi {user.name.first} {user.name.last}
        </p>
      </div>
      <Button width={200} onClick={LogOut}>
        خروج از حساب کاربری
      </Button>
    </div>
  );
};

export default DashboardPage;
