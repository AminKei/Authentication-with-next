import { User } from "../types/user";

export async function fetchUser(): Promise<User> {
  const response = await fetch(process.env.NEXT_PUBLIC_API as string);
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  const data = await response.json();
  return data.results[0];
}

export function setUser(user: User): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user));
  }
}
export function getUser(): User | null {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  return null;
}

export function checkAuthClient(): boolean {
  const user = getUser();
  return !!user;
}
