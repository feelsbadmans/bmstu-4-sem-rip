import { MainPage } from "../pages/main/MainPage.js";

const getUrlParts = () => {
    return window.location.href.split('/').slice(3);
}

export const onLocationChange = (parent) => {
    const urlParts = getUrlParts();
    switch(urlParts.length) {
        case 1:
            let node = undefined;
            if (urlParts[0] === '') {
                node = new MainPage(parent);
            }
            node.render();
            break;
        case 2:
            break
    } 
}