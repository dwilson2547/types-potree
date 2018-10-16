export class XHRFactory {
    config: {
        withCredentials: boolean,
        customHaders: [
            {header: any, value: any}
        ]
    }

    createXMLHttpRequest(): XMLHttpRequest;
}