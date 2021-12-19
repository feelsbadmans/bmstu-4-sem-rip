import { MainList } from "../../components/main/MainList.js";
import { PCInfo } from "../../components/pc/PCInfo.js";
import { PCList } from "../../components/pc/PCList.js";
import { ProcInfo } from "../../components/processor/ProcInfo.js";
import { ProcList } from "../../components/processor/ProcList.js";
import { Report } from "../../components/report/Report.js";

export class Content {
    constructor(parent, children, data) {
        this.parent = parent;
        this.children = children;
        this.data = data;
    }

    getHtml() {
        return `
            <div class='content-container col' id='container'></div>
        `
    }
    
    render() {
        this.parent.insertAdjacentHTML('beforeend', this.getHtml());
        const container = document.getElementById('container');
        
        switch (this.children) {
            case 'main':
                const mainList = new MainList(container);
                mainList.render();
                break;
            case 'proc':
                const procList = new ProcList(container, this.data);
                procList.render();
                break;
            case 'proc-detail':
                const procInfo = new ProcInfo(container, this.data);
                procInfo.render();
                break;
            case 'pc':
                const pcList = new PCList(container, this.data);
                pcList.render();
                break;
            case 'pc-detail':
                const pcInfo = new PCInfo(container, this.data);
                pcInfo.render();
                break;
            case 'report':
                const report = new Report(container, this.data);
                report.render();
                break;
        }
    }
}