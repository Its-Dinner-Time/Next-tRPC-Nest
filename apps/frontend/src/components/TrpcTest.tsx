'use client';

import { useEffect, useState } from 'react';
import { trpc } from '@frontend/src/libs/trpc';

function TrpcTest() {
  const [state, setState] = useState('');

  useEffect(() => {
    trpc.hello.query({ name: 'Client' }).then(({ greeting }) => setState(greeting));
  }, []);

  return <div>{state}</div>;
}

export default TrpcTest;
