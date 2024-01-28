import { collectValues, listDailyItemsByUser } from "@/utils/db.ts";
import { getCursor } from "@/utils/http.ts";
import type { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const iter = listDailyItemsByUser(ctx.state.sessionUser.login, {
      cursor: getCursor(url),
      limit: 10,
      reverse: true,
    });
    const values = await collectValues(iter);
    return Response.json({ values, cursor: iter.cursor });
  },
};
