import { keyEnum } from "../../utils/keyEnum.js";

export class Report {
    constructor(parent, data){
        this.parent = parent;
        this.data = data;
    }

    getHtml() {
        return `
            <h1>Отчёт</h1>
            <table class="table" id="report-list">
            <table>
            </ul>
        `
    }

    render() {
        this.parent.insertAdjacentHTML('beforeend', this.getHtml());

        this.data.then((data) => {
            const list = document.getElementById('report-list');
            data.forEach((pc, index) => {
                if (index === 0) {
                    list.insertAdjacentHTML('beforeend',
                    `<tr>${
                        Object.keys(pc).reduce((acc, key) => {
                            return `${acc}<td>${keyEnum[key]}</td>`
                        }, '')
                    }</tr>`);
                }
                list.insertAdjacentHTML('beforeend',
                    `<tr>${
                        Object.keys(pc).reduce((acc, key) => {
                            if (key === 'proc') {
                                return `${acc}<td><a href='/processor#${pc.proc.id}'>${pc.proc.title}</td>`
                            }
                            return `${acc}<td>${pc[key]}</td>`
                        }, '')
                    }</tr>`);
            })
        })
    }
}