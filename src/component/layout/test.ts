import { Component } from '@darkkenergy/nectar';
import classNames from 'classnames';

import styles from './styles.scss';

interface TestProps {
    bodyTop: DocumentFragment;
    footer: DocumentFragment;
    header: DocumentFragment;
    main: DocumentFragment;
    isActive: boolean;
}

export const Test = Component<TestProps>((html, { isActive }) => {
    console.log('Test Layout', Math.round(Math.random() * 1000));
    return html`
        <div
            class="${classNames([
                styles.drawer,
                {
                    [styles.active]: isActive
                }
            ])}"
        >
            ${'Hello drawer!'}
        </div>
    `;
});
