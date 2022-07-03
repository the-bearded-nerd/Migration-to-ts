import { Endpoint, Method, Options } from '../../types/index';

class Loader {
    baseLink: string;
    options: Options;
    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
        console.log('мы в конструкторе');
        console.log(this.baseLink);
        console.log(this.options);
    }

    getResp(
        {
            endpoint,
            options = {},
        }: {
            endpoint: Endpoint;
            options: Options;
        },
        callback = (): void => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        console.log('мы в errorHandler');
        console.log(res);
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options, endpoint: Endpoint) {
        console.log('мы в makeUrl');
        console.log(options);
        console.log(endpoint);
        const urlOptions: { [index: string]: string } = { ...this.options, ...options };
        console.log(urlOptions);
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key] as string}&`;
        });

        return url.slice(0, -1);
    }

    load(method: Method, endpoint: Endpoint, callback: (data: string) => void, options = {}) {
        console.log('мы в load');
        console.log(method);
        console.log(endpoint);
        console.log(callback);
        console.log(options);
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
