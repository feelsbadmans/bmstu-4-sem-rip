import { onLocationChange } from "./utils.js";

export class Router {
    constructor(parent) {
        this.parent = parent;
        window.addEventListener('locationchange', onLocationChange.bind(null, parent));
    }

    render() {
        onLocationChange(this.parent);
    }
}