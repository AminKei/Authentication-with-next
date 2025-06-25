"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { fetchUser, setUser } from "../lib/auth";
import styles from "../styles/Auth.module.scss";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

const AuthForm: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^09[0-9]{9}$/;
    return phoneRegex.test(phone);
  };

  const isValidPhone = validatePhoneNumber(phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidPhone) {
      setError("شماره تلفن معتبر نیست");
      return;
    }

    setIsLoading(true);
    try {
      const user = await fetchUser();
      setUser(user);
      router.push("/dashboard");
    } catch (err) {
      setError("خطا در دریافت اطلاعات کاربر");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <h1 className={styles.title}>ورود</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setError("");
            }}
            placeholder="شماره تلفن (09xxxxxxxxx)"
          />
          {error && <p className={styles.error}>{error}</p>}
          <Button disabled={!isValidPhone} isLoading={isLoading}>
            ورود
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
