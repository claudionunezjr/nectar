import { Component } from '@darkkenergy/nectar';

import styles from './styles.scss';

interface FooterProps {
    copyright: number;
}

export const Footer = Component<FooterProps>(
    (Template, { copyright }) => Template`

    <footer class="bg-dark ${styles.footer}">
        <span>&copy; Copyright ${copyright}</span>
    </footer>

`
);
