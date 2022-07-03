import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: () => void) {
        super.getResp(
            {
                endpoint: 'sources',
                options: {},
            },
            callback
        );
    }

    getNews(e: PointerEvent, callback: () => void) {
        let target = e.target;
        const newsContainer = e.currentTarget;
        if (!newsContainer) return;

        while (target !== newsContainer) {
            if (!target) return;
            if ((<HTMLDivElement>target).classList.contains('source__item')) {
                const sourceId = (<HTMLDivElement>target).getAttribute('data-source-id')!;
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
