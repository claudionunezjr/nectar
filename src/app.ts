import { Framework } from '@darkkenergy/nectar';
console.log('Framework', Framework);

import { App } from '@app/component/app';
// import * as RegisteredComponents from '@app/bootstrap';
// import content from './data/content.json';

import '@app/styles/base.scss';

console.log('Starting app...');
const app = new Framework({
    rootNode: document.body,
    settings: {
        debug: true
        // registry: RegisteredComponents
    }
});

app.load({
    content: {
        title: 'Nectar'
    },
    template: App
}).render();

document.dispatchEvent(new Event('render-event'));
