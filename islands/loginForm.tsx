/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
//import { IS_BROWSER } from "$fresh/runtime.ts";

interface IUser {
  username: string;
  password: string;
}
const initUser: IUser = {
  username: "",
  password: "",
};

export default function loginForm() {
  const [username, setUsername] = useState(initUser.username);
  const [password, setPassword] = useState(initUser.password);

  async function handleForm() {
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        body: JSON.stringify(
          {
            username,
            password,
          },
        ),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <div class="form_container">
      <label>
        الهاتف
      </label>
      <input
        type="text"
        value={username}
        onInput={(e) => {
          if (e.target instanceof HTMLInputElement) setUsername(e.target.value);
        }}
        placeholder="الهاتف"
      />

      <label>
        كلمة السر
      </label>
      <input
        type="password"
        value={password}
        onInput={(e) => {
          if (e.target instanceof HTMLInputElement) setPassword(e.target.value);
        }}
        placeholder="كلمة السر"
      />

      <button onClick={handleForm}>ارسال</button>
    </div>
  );
}
