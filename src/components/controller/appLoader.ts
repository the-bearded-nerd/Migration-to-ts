import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'bebb84186690411999e90d40bd2fb672', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
