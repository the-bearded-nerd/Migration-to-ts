import { Endpoint, Method, Options, ICallback, ErrorCode } from '../../types/index';

class Loader {
    baseLink: string;
    options: Options;
    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        {
            endpoint,
            options = {},
        }: {
            endpoint: Endpoint;
            options: Options;
        },
        callback: ICallback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === ErrorCode.unauthorized || res.status === ErrorCode.notFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options, endpoint: Endpoint) {
        const urlOptions: { [index: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key] as string}&`;
        });

        return url.slice(0, -1);
    }

    load(method: Method, endpoint: Endpoint, callback: ICallback, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
