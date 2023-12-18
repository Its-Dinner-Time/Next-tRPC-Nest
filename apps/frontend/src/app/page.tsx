import { trpc } from '@frontend/src/libs/trpc';

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: 'Mr' });
  return <main className="flex min-h-screen flex-col items-center justify-between p-24">{greeting}</main>;
}
