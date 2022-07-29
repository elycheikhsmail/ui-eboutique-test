import { HandlerContext } from "$fresh/server.ts";

import { ArticlStore } from "../../../interfaces/mock_article.ts";
const articleStore = new ArticlStore();
articleStore.InitArticles();

export const handler = (req: Request, _ctx: HandlerContext): Response => {
  console.log(req.url);
  const url = new URL(req.url);
  const pageN = parseInt(url.searchParams.get("_page") || "1");
  console.log({ pageN });
  const skip = pageN * 5;
  const articles = articleStore.articles.slice(skip, skip + 5)
  console.log(articles)

  return Response.json(articles);
};
