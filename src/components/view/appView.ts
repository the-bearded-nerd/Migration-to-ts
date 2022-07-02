import News from './news/news';
import Sources from './sources/sources';
import { ISourcesResponseObject } from '../../types/index';
import { IArticlesResponseObject } from '../../types/index';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IArticlesResponseObject) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ISourcesResponseObject) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
