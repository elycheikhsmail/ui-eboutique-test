/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import { Fragment } from "preact";
import Navbar from "../../islands/Navbar.tsx";
import ArticleComponent from "../../component/articleDetails.tsx";
import { IArticleItem } from "../../interfaces/mod.ts";
// http://localhost:3000/api/private/objects/objectname/list/g_.ts
import { Handlers, PageProps } from "$fresh/server.ts";
import { IArticleItemInDb } from "../../interfaces/mod.ts";

export const handler: Handlers<IArticleItemInDb | null> = {
  async GET(req, ctx) {
    console.log(req);
    const { id } = ctx.params;
    const resp = await fetch(
      `http://localhost:3000/api/articles/getone/${id}`,
    );
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const article: IArticleItemInDb = await resp.json();
    return ctx.render(article);
  },
};

export default function DetailsPublic(
  { data }: PageProps<IArticleItemInDb | null>,
  // pageProps:PageProps
) {
  if (!data) {
    return <h1>User not found</h1>;
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
          <div>
            <h1>
              تفاصيل الاعلان
            </h1>
          </div>
        </header>

        <div class="card-container">
          <ArticleComponent
            desc={data.desc}
            prix={data.prix}
            dateAdd={data.dateAdd}
          />
        </div>
      </body>
    </Fragment>
  );
}
