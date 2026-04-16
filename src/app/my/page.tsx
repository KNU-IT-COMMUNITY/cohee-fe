import type { Metadata } from "next";

import { MyDashboardScreen } from "@/widgets/profile/my-dashboard-screen";

export const metadata: Metadata = {
  title: "My",
};

export default function MyPage() {
  return <MyDashboardScreen />;
}
