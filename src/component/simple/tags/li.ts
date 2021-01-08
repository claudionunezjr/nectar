import { Component } from '@darkkenergy/nectar';

export interface LiProps {
    item: Node | string;
}

const Li = Component(
    (Template, { item }: LiProps) => Template`
    <li>
        ${item}
    </li>
`
);

export { Li };
