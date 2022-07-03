import AppLoader from './appLoader';
import { ICallback } from '../../types/index';

class AppController extends AppLoader {
    getSources(callback: ICallback) {
        super.getResp(
            {
                endpoint: 'sources',
                options: {},
            },
            callback
        );
    }

    getNews(e: Event, callback: ICallback) {
        let target = e.target;
        const newsContainer = e.currentTarget;
        if (!newsContainer) return;

        while (target !== newsContainer) {
            if (!target) return;
            if ((<HTMLDivElement>target).classList.contains('source__item')) {
                const sourceId = (<HTMLDivElement>target).getAttribute('data-source-id');
                if (!sourceId) return;
                if ((<HTMLDivElement>newsContainer).getAttribute('data-source') !== sourceId) {
                    (<HTMLDivElement>newsContainer).setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = (<HTMLDivElement>target).parentNode;
        }
    }
}

export default AppController;
