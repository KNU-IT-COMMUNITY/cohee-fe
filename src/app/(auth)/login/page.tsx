import type { Metadata } from "next";

import { LoginScreen } from "@/widgets/auth/login-screen";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return <LoginScreen />;
}
