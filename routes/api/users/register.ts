import { HandlerContext } from "$fresh/server.ts";
// import * as mod from "https://deno.land/std@0.149.0/http/mod.ts";

import {
  Cookie,
  setCookie,
} from "https://deno.land/std@0.149.0/http/cookie.ts";

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  console.log(req.method);
  const d = await req.json();
  console.log(d);
  //const headers = new Headers();
  const cookie: Cookie = { name: "ely", value: "smail" ,httpOnly:true};

  const r = Response.json({ userid: 1 });

  setCookie(r.headers, cookie);

  return r;
};
