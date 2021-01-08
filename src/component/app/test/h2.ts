import { Component } from '@darkkenergy/nectar';

interface H2Props {
    className: string;
    heading: string;
}

export const H2 = Component<H2Props>(
    (html, { className, heading }) =>
        html`<h2 data-class="${className}">${heading}</h2>`
);
