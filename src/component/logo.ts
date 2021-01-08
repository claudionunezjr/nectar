import { Component } from '@darkkenergy/nectar';

interface LogoProps {
    className: string;
    logo: Node;
}

const Logo = Component(
    (Template, { logo, className }: LogoProps) =>
        Template`<div class="${className}">${logo}</div>`
);

export default Logo;
