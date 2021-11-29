import { getPCId } from "../../api/pc.js";
import { BackButton } from "../../components/button/BackButton.js";
import { Content } from "../../containers/content/Content.js";
import { Router } from "../../router/router.js";

export class PCDetailPage {
    constructor(parent, id) {
        this.parent = parent;
        this.type = 'pc-detail';
        this.id = id;
    }

    getHtml() {
        return `
            <div class='col main' id='pc-detail'></div>
        `
    }

    clickBack() {
        const router = new Router(this.parent);
        router.changeUrl('/pc');
    }

    get page() {
        return document.getElementById('pc-detail')
    }
    
    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHtml());

        const data = getPCId(this.id);
        
        const backButton = new BackButton(this.page);
        backButton.render(this.clickBack.bind(this));
        const container = new Content(this.page, this.type, data);
        container.render();
    }
}