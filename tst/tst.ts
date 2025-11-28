import { api } from "encore.dev/api";
import { hello } from "~encore/clients";

export const callHello = api(
  { expose: true, method: "GET", path: "/call-hello/:id" },
  async ({ id }: { id: number }): Promise<{ message: string }> => {
    const r = await hello.getUser({ id });

    return {
      message: r.name,
    };
  },
);
