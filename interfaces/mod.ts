export interface IArticleIndb {
  id: number;
  categorie: number;
  subcategorie: number;
  lieu: number;
  desc: string;
  prix: number;
  dateAdd: string;
}
export interface IArticle {
  categorie: number;
  subcategorie: number;
  lieu: number;
  desc: string;
  prix: number;
  dateAdd: string;
}
export interface IArticleItem {
  desc: string;
  prix: number;
  dateAdd: string;
}

export interface IArticleItemInDb {
  id: number;
  categorie: string;
  lieux: string;
  prix: number;
  desc: string;
  dateAdd: string;
}
export interface IArticlesItemAndPageNumber {
  articles: IArticleIndb[];
  pageN: number;
}
