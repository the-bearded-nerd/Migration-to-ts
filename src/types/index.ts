interface ISource {
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
