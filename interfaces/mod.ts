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
  articles: IArticleItemInDb[];
  pageN: number;
}
