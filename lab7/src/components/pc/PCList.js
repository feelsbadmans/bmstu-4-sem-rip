export class PCList {
    constructor(parent, data){
        this.parent = parent;
        this.data = data;
    }

    getHtml() {
        return `
            <h1>Список компьютеров</h1>
            <ul id="pc-list">
            </ul>
        `
    }

    render() {
        this.parent.insertAdjacentHTML('beforeend', this.getHtml());

        this.data.then((data) => {
            const list = document.getElementById('pc-list');
            data.forEach((el) => {
                list.insertAdjacentHTML('beforeend',
                `<li><a href='/pc#${el.id}'>${el.title}</a></li>`
                )
            })
        })
    }
}