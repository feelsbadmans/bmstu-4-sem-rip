export class ProcList {
    constructor(parent, data){
        this.parent = parent;
        this.data = data;
    }

    getHtml() {
        return `
            <h1>Список процессоров</h1>
            <ul id="proc-list">
            </ul>
        `
    }

    render() {
        this.parent.insertAdjacentHTML('beforeend', this.getHtml());

        this.data.then((data) => {
            const list = document.getElementById('proc-list');
            data.forEach((el) => {
                list.insertAdjacentHTML('beforeend',
                `<li><a href='processor#${el.id}'>${el.title}</a></li>`
                )
            })
        })
    }
}