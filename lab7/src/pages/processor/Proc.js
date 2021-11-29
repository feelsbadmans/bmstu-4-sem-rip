import { getProcessors } from "../../api/processors.js";
import { BackButton } from "../../components/button/BackButton.js";
import { Content } from "../../containers/content/Content.js";
import { Router } from "../../router/router.js";

export class ProcPage {
    constructor(parent) {
        this.parent = parent;
        this.type = 'proc';
    }

    getHtml() {
        return `
            <div class='col main' id='proc'></div>
        `
    }

    clickBack() {
        const router = new Router(this.parent);
        router.changeUrl('/');
    }

    get page() {
        return document.getElementById('proc')
    }
    
    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHtml());

        const data = getProcessors();
        
        const backButton = new BackButton(this.page)
        backButton.render(this.clickBack.bind(this))

        const container = new Content(this.page, this.type, data);
        container.render();
    }
}