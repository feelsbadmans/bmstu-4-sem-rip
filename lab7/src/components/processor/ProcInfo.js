import { keyEnum } from "../../utils/keyEnum.js";

export class ProcInfo {
    constructor(parent, data){
        this.parent = parent;
        this.data = data;
    }

    render() {
        this.data.then((data) => {
            this.parent.insertAdjacentHTML('beforeend', `
                <h1>Процессор №${data.id}</h1>   
                <table class="table" id="info-list">
                </table>
                `
            );
            const list = document.getElementById('info-list');
            Object.keys(data).forEach((key) => {
                list.insertAdjacentHTML('beforeend',
                `<tr><td>${keyEnum[key]}</td><td>${data[key]}</td></tr>`
                );
            });
        })
    }
}