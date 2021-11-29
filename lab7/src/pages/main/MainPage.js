import { Content } from "../../containers/content/Content.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.type = 'main';
    }

    getHtml() {
        return `
            <div class='col main' id='main-page'></div>
        `
    }
    
    render() {
        this.parent.setInnerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHtml());
        
        const node = document.getElementById('main-page');
        const container = new Content(node, this.type);
        container.render();
    }
}