export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  // TODO: remove console.log plz
  console.log(id);

  return <div>This is Detail Page</div>;
}
