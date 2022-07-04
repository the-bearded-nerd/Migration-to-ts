import './sources.css';
import { ISource } from '../../../types/index';

class Sources {
    draw(data: ISource[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');
        if (sourceItemTemp) {
            data.forEach((item) => {
                const sourceClone = (<HTMLTemplateElement>sourceItemTemp).content.cloneNode(true) as Element;
                const itemName = sourceClone.querySelector('.source__item-name');
                if (itemName) itemName.textContent = item.name;
                const sourceItem = sourceClone.querySelector('.source__item');
                if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);
                fragment.append(sourceClone);
            });
            const sources = document.querySelector('.sources');
            if (sources) sources.append(fragment);
        }
    }
}

export default Sources;
