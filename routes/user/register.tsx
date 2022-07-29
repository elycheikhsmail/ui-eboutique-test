/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import { Fragment } from "preact";
import Navbar from "../../islands/Navbar.tsx";
import RegisterForm from "../../islands/regiterForm.tsx";

export default function Register() {
  return (
    <Fragment>
      <Head>
        <title>Register</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <body dir="rtl">
        <Navbar />
        <header class="bg-white shadow">
          <div>
            <h1>
              استمارة التسجيل
            </h1>
          </div>
        </header>
        <RegisterForm />
      </body>
    </Fragment>
  );
}
