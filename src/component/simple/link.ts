import { Component } from '@darkkenergy/nectar';
import { MouseEventListener } from '@darkkenergy/nectar/dist/types';

export interface LinkProps {
    onClick?: MouseEventListener;
    label?: string;
    url: string;
}

const Link = Component(
    (Template, { onClick = () => {}, label, url }: LinkProps) => Template`
    <a
        $click="${onClick}"
        href="${url}"
    >
        ${label}
    </a>
`
);

export default Link;
