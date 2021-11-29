import { getProcessorId } from "../../api/processors.js";
import { BackButton } from "../../components/button/BackButton.js";
import { Content } from "../../containers/content/Content.js";
import { Router } from "../../router/router.js";

export class ProcDetailPage {
    constructor(parent, id) {
        this.parent = parent;
        this.type = 'proc-detail';
        this.id = id;
    }

    getHtml() {
        return `
            <div class='col main' id='proc-detail'></div>
        `
    }

    clickBack() {
        const router = new Router(this.parent);
        router.changeUrl('/processor');
    }

    get page() {
        return document.getElementById('proc-detail')
    }
    
    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHtml());

        const data = getProcessorId(this.id);
        
        const backButton = new BackButton(this.page);
        backButton.render(this.clickBack.bind(this));
        const container = new Content(this.page, this.type, data);
        container.render();
    }
}