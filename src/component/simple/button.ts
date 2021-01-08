import { Component } from '@darkkenergy/nectar';
import {
    Aria,
    MouseEventListener,
    TemplateTagValue
} from '@darkkenergy/nectar/dist/types';

export interface ButtonProps {
    aria?: Aria;
    className?: string;
    label: TemplateTagValue;
    onClick?: MouseEventListener;
}

export const Button = Component<ButtonProps>(
    (html, { aria = {}, className = '', label, onClick = () => {} }) => html`
        <button
            $click="${onClick}"
            aria-label=${aria.label}
            class="${className}"
        >
            ${label}
        </button>
    `
);
