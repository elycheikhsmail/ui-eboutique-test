/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import { Fragment } from "preact";
import Navbar from "../../islands/Navbar.tsx";
import LoginForm from "../../islands/loginForm.tsx";

export default function Login() {
  return (
    <Fragment>
      <Head>
        <title>login</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <body dir="rtl">
        <Navbar />
        <header class="bg-white shadow">
          <div>
            <h1>
              استمارة الدخول
            </h1>
          </div>
        </header>

        <LoginForm />
      </body>
    </Fragment>
  );
}
