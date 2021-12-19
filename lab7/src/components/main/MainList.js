export class MainList {
    constructor(parent) {
        this.parent = parent;
    }

    getHtml() {
        return `
            <h1>Лабораторная работа №7</h1>
            <a href='/processor'>Процессоры</a>
            <a href='/pc'>Компьютеры</a>
            <a href='/report'>Отчёт</a>
        `
    }

    render() {
        this.parent.insertAdjacentHTML('beforeend', this.getHtml())
    }
}