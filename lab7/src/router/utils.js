import { MainPage } from "../pages/main/MainPage.js";
import { PCPage } from "../pages/pc/PC.js";
import { PCDetailPage } from "../pages/pc/PCDetail.js";
import { ProcPage } from "../pages/processor/Proc.js";
import { ProcDetailPage } from "../pages/processor/ProcDetail.js";

export const getUrlParts = () => {
    return window.location.href.split('/').slice(3).join('').split('#');
}

export const onLocationChange = (parent) => {
    const urlParts = getUrlParts();
    let node = undefined;
    switch(urlParts.length) {
        case 1:
            switch (urlParts[0]) {
                case '':
                    node = new MainPage(parent);
                    break;
                case 'processor':
                    node = new ProcPage(parent);
                    break;
                case 'pc':
                    node = new PCPage(parent);
                    break;
            }
            break;
        case 2:
            switch (urlParts[0]) {
                case 'processor':
                    node = new ProcDetailPage(parent, urlParts[1]);
                    break;
                case 'pc':
                    node = new PCDetailPage(parent, urlParts[1]);
                    break;
            }
            break;
    } 
    node.render();
}