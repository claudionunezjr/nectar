import { Framework } from '@darkkenergy/nectar';
console.log('Framework', Framework);

import { App } from '@app/component/app';
// import * as RegisteredComponents from '@app/bootstrap';
// import content from './data/content.json';

import '@app/styles/base.scss';

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
