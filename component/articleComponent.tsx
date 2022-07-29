/** @jsx h */
import { h } from "preact";
import { Fragment } from "preact";
import { IArticleItem, IArticleItemInDb } from "../interfaces/mod.ts";
export default function ArticleComponent(prop: IArticleItemInDb) {
  const detailsUrl = `details/${prop.id}`;
  return (
    <div class="card-container">
      <article class="card">
        <div
          class="card__image"
          style="background-image: url(/img/ah1.jpg);"
        >
        </div>
        <div class="card__content">
          <h5 class="card__title">
            سيارة للبيع
          </h5>
          <div>{prop.desc.slice(0,20)}</div>
          <div>
            <span>{prop.prix}</span>
            <small>
              اوقية جيدة
            </small>
          </div>
        </div>
        <div class="card__footer">
          <span>{prop.dateAdd}</span>
          <a href={detailsUrl}>
            تفاصيل
          </a>
        </div>
      </article>
    </div>
  );
}
