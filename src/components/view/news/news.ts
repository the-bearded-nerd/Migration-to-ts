import './news.css';
import { IArticle } from '../../../types/index';

class News {
    draw(data: IArticle[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');

        if (newsItemTemp) {
            news.forEach((item, idx) => {
                const newsClone = (<HTMLTemplateElement>newsItemTemp).content.cloneNode(true) as Element;
                if (idx % 2) {
                    const item = newsClone.querySelector('.news__item');
                    if (item) item.classList.add('alt');
                }
                const metaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLDivElement;
                if (metaPhoto)
                    metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                const metaAutor = newsClone.querySelector('.news__meta-author');
                if (metaAutor) metaAutor.textContent = item.author || item.source.name;
                const metaDate = newsClone.querySelector('.news__meta-date');
                if (metaDate) metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                const descriptionTitle = newsClone.querySelector('.news__description-title');
                if (descriptionTitle) descriptionTitle.textContent = item.title;
                const descriptionSource = newsClone.querySelector('.news__description-source');
                if (descriptionSource) descriptionSource.textContent = item.source.name;
                const descriptionContent = newsClone.querySelector('.news__description-content');
                if (descriptionContent) descriptionContent.textContent = item.description;
                const readMore = newsClone.querySelector('.news__read-more a');
                if (readMore) readMore.setAttribute('href', item.url);

                fragment.append(newsClone);
            });
            const newsTags = document.querySelector('.news');
            if (newsTags) {
                newsTags.innerHTML = '';
                newsTags.appendChild(fragment);
            }
        }
    }
}

export default News;
