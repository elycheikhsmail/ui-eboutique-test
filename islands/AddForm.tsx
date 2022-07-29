/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
//import { IS_BROWSER } from "$fresh/runtime.ts";

interface CounterProps {
  categorie: string;
  lieux: string;
  prix: number;
  desc: string;
}
// http://localhost:3000/
function getDate() {
  const d = new Date();
  const dd = `${d.getUTCDay()}/${d.getUTCMonth()}/${d.getUTCFullYear()}`;
  return dd;
}

export default function AddForm(props: CounterProps) {
  const [categorie, setCategorie] = useState(props.categorie);
  const [lieux, setLieux] = useState(props.lieux);
  const [prix, setPrix] = useState(props.prix);
  const [desc, setDesc] = useState(props.desc);

  const handleForm = (e: any) => {
    e.preventDefault();
    const dd = getDate();
    console.log({ categorie });
    console.log({ lieux });
    fetch("http://localhost:3000/api/private/objects/objectname/add/todo", {
      method: "POST",
      body: JSON.stringify(
        {
          categorie,
          lieux,
          prix,
          desc,
          dateAdd: dd,
        },
      ),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then(
      (r) => console.log(r.text),
    ).catch(
      (e) => console.log({ e }),
    );
  };

  return (
    <form class="form_container" onSubmit={(e: any) => handleForm(e)}>
      <select
        value={categorie}
        onInput={(e: any) => setCategorie(e.target.value)}
      >
        <option selected>
          اختر التصنيف
        </option>
        <option value="1">
          منازل
        </option>
        <option value="2">
          قطع ارضية
        </option>
        <option value="3">
          سيارات
        </option>
      </select>

      <select value={lieux} onInput={(e: any) => setLieux(e.target.value)}>
        <option selected>
          اختر المكان
        </option>
        <option value="1">
          نواكشوط-عرفات
        </option>
        <option value="2">
          يارتنواكشوط-ت
        </option>
        <option value="3">
          نواذيبو
        </option>
      </select>

      <label>
        السعر بالاوقية
      </label>
      <input
        type="number"
        value={prix}
        onInput={(e: any) => setPrix(e.target.value)}
      />

      <label>
        الوصف
      </label>
      <input
        type="text"
        value={desc}
        onInput={(e: any) => setDesc(e.target.value)}
      />
      <input type="submit" value="اضافة" />
    </form>
  );
}
