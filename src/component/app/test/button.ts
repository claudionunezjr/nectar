import { Component } from '@darkkenergy/nectar';

interface ButtonProps {
    onClick: any;
}

export const Button = Component<ButtonProps>(
    (html, { onClick }) => html`
        <button $click="${onClick}">Toggle data-class.</button>
    `
);
