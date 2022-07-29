/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import { Fragment } from "preact";
import Navbar from "../islands/Navbar.tsx";
import ArticleComponent from "../component/articleComponent.tsx";
import {
  IArticleItem,
  IArticleItemInDb,
  IArticlesItemAndPageNumber,
} from "../interfaces/mod.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import NotFound from "../component/notFound.tsx";
import PaginationCompo from "../islands/pagination.tsx";

export const handler: Handlers<IArticlesItemAndPageNumber | null> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const pageN = parseInt(url.searchParams.get("_page") || "1");
     
    try {
      const resp = await fetch(
        `${url.protocol}//${url.host}/api/articles/list?_page=${pageN}`,
      );
      if (resp.status === 404) {
        return ctx.render(null);
      }
      const articles: IArticleItemInDb[] = await resp.json();
      const toRender: IArticlesItemAndPageNumber = {
        articles,
        pageN,
      };
      return ctx.render(toRender);
    } catch (error) {
      return ctx.render(null);
    }
  },
};
export default function Home(
  { data }: PageProps<IArticlesItemAndPageNumber | null>,
  req: PageProps,
) {
  if (!data) {
    return <NotFound />;
  }

  return (
    <Fragment>
      <Head>
        <title>home in head</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <body dir="rtl">
        <Navbar />
        <header>
          <h1>
            لائحة اﻹعلانات
          </h1>
        </header>
        <div>
          <PaginationCompo id={data.pageN} />
        </div>

        <div class="card-container">
          {data.articles.map((item) => <ArticleComponent {...item} />)}
        </div>
      </body>
    </Fragment>
  );
}
