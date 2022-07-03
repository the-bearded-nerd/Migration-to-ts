export interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

interface IArticleSource {
    id: string | null;
    name: string;
}

export interface IArticle {
    source: IArticleSource;
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}

export interface ISourcesResponseObject {
    status: string;
    sources: ISource[];
}

export interface IArticlesResponseObject {
    status: string;
    titalResults: number;
    articles: IArticle[];
}

export interface IError {
    status: string;
    code: string;
    message: string;
}

export interface Options {
    apiKey?: string;
    category?: 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';
    language?: 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'sv' | 'ud' | 'zh';
    sources?: string;
    country?:
        | 'ae'
        | 'ar'
        | 'at'
        | 'au'
        | 'be'
        | 'bg'
        | 'br'
        | 'ca'
        | 'ch'
        | 'cn'
        | 'co'
        | 'cu'
        | 'cz'
        | 'de'
        | 'eg'
        | 'gb'
        | 'gr'
        | 'hk'
        | 'id'
        | 'ie'
        | 'in'
        | 'it'
        | 'jp'
        | 'kr'
        | 'lt'
        | 'lv'
        | 'ma'
        | 'mx'
        | 'my'
        | 'ng'
        | 'nl'
        | 'no'
        | 'nz'
        | 'ph'
        | 'pl'
        | 'pt'
        | 'ro'
        | 'rs'
        | 'ru'
        | 'sa'
        | 'se'
        | 'sg'
        | 'si'
        | 'sk'
        | 'th'
        | 'tr'
        | 'tw'
        | 'ua'
        | 'us'
        | 've'
        | 'za';
}

export interface IResponse {
    body: ReadableStream;
    bodyUsed: boolean;
    headers: Headers;
    ok: boolean;
    redirected: false;
}

/*
body: (...)
bodyUsed: true
headers: Headers {}
ok: true
redirected: false
status: 200
statusText: ""
type: "cors"
url: "https://newsapi.org/v2/sources?apiKey=bebb84186690411999e90d40bd2fb672"
*/
export type Endpoint = 'sources' | 'everything';
export type Method = 'GET' | 'POST';
