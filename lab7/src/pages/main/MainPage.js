export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    getHtml() {
        return `
        `
    }
    
    render() {
        console.log('rendered');
        this.parent.insertAdjacentHTML('beforeend', '<button type="button">Hello world 3!</button>')
    }
}