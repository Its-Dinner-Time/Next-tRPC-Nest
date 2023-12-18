import { Injectable } from '@nestjs/common';
import { initTRPC } from '@trpc/server';

@Injectable()
export class TrpcService {
  private readonly trpc = initTRPC.create();

  readonly procedure = this.trpc.procedure;
  readonly router = this.trpc.router;
  readonly mergeRouters = this.trpc.mergeRouters;
}
