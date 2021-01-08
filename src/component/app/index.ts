import { Component } from '@darkkenergy/nectar';

import { ReactiveAppLayout } from '@app/component/reactive/app-layout';

import '@app/styles/base.scss';
import styles from './styles.scss';

export const App = Component(
    (html) => html`<div class="${styles.app}">${ReactiveAppLayout()}</div>`
);
