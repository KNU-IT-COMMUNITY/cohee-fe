import type { Metadata } from "next";

import { MentorDetailScreen } from "@/widgets/mentor/mentor-detail-screen";

type MentorPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: MentorPageProps): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `멘토 ${id}`,
  };
}

export default async function MentorPage({ params }: MentorPageProps) {
  const { id } = await params;

  return <MentorDetailScreen id={id} />;
}
