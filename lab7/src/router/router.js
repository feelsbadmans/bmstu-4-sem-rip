import { onLocationChange } from "./utils.js";

export class Router {
    constructor(parent) {
        this.parent = parent;
        window.addEventListener('locationchange', onLocationChange.bind(null, parent));
        window.addEventListener('hashchange', onLocationChange.bind(null, parent));
        window.addEventListener('popstate', onLocationChange.bind(null, parent));
    }

    changeUrl(url) {
        document.location.replace(url);
    }

    render() {
        onLocationChange(this.parent);
    }
}