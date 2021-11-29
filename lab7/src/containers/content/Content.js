export class Content {
    constructor(parent, children) {
        this.parent = parent;
        this.children = children;
    }

    getHtml() {
        return `
        <div class='content-container col'></div>
        `
    }
    
    render() {
        this.parent.insertAdjacentHTML('beforeend', this.getHtml())
    }
}