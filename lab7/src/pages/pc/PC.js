import { getPC } from "../../api/pc.js";
import { BackButton } from "../../components/button/BackButton.js";
import { Content } from "../../containers/content/Content.js";
import { Router } from "../../router/router.js";

export class PCPage {
    constructor(parent) {
        this.parent = parent;
        this.type = 'pc';
    }

    getHtml() {
        return `
            <div class='col main' id='pc'></div>
        `
    }

    clickBack() {
        const router = new Router(this.parent);
        router.changeUrl('../');
    }

    get page() {
        return document.getElementById('pc')
    }
    
    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHtml());

        const data = getPC();
        
        const backButton = new BackButton(this.page)
        backButton.render(this.clickBack.bind(this))

        const container = new Content(this.page, this.type, data);
        container.render();
    }
}