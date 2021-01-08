import { Component } from '@darkkenergy/nectar';
import { TemplateTagValue } from '@darkkenergy/nectar/dist/types';
import classNames from 'classnames';

import styles from './styles.scss';

export interface DrawerProps {
    className?: string;
    closeButton: DocumentFragment;
    contents: TemplateTagValue;
    isActive: boolean;
}

export const Drawer = Component<DrawerProps>(
    (html, { className, closeButton, contents, isActive }) => html`
        <div
            class="${classNames(
                {
                    [styles.active]: isActive
                },
                className,
                styles.drawer
            )}"
        >
            ${closeButton} ${contents}
        </div>
    `
);
