import { keyEnum } from "../../utils/keyEnum.js";

export class PCInfo {
    constructor(parent, data){
        this.parent = parent;
        this.data = data;
    }

    render() {
        this.data.then((data) => {
            this.parent.insertAdjacentHTML('beforeend', `
                <h1>Компьютер №${data.id}</h1>    
                <table class="table" id="info-list">
                </table>
                `
            );
            const list = document.getElementById('info-list');
            Object.keys(data).forEach((key) => {
                if (key === 'proc') {
                    list.insertAdjacentHTML('beforeend',
                    `<tr><td>${keyEnum[key]}</td><td><a href='/processor#${data.proc.id}'>${data.proc.title}</td></tr>`
                    );
                } else {
                    list.insertAdjacentHTML('beforeend',
                    `<tr><td>${keyEnum[key]}</td><td>${data[key]}</td></tr>`
                    );
                }
            });
        })
    }
}