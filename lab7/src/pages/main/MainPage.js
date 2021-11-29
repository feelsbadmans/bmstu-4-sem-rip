export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    getHtml() {
        return `
            <div class='col main' id='main-page'></div>
        `
    }
    
    render() {
        this.parent.setInnerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHtml())
    }
}