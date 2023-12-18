import { trpc } from '@frontend/src/libs/trpc';
import TrpcTest from '../components/TrpcTest';

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: 'Server' });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {greeting}
      <TrpcTest />
    </main>
  );
}
