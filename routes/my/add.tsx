/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import { Fragment } from "preact";
import Navbar from "../../islands/Navbar.tsx";
import AddForm from "../../islands/AddForm.tsx";

export default function DetailsPublic() {
  return (
    <Fragment>
      <Head>
        <title>add article</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <body dir="rtl">
        <Navbar />
        <header>
          <div>
            <h1>
              اضافة اعلان
            </h1>
          </div>
        </header>
        <AddForm categorie="1" lieux="1" prix={0} desc="" />
      </body>
    </Fragment>
  );
}
